# Promise 源码解析

完整源码
```js
/**
 * 1. Promise 是一个类
 * 2. Promise 中传递一个执行器 执行器立即执行 执行器中的参数分为
 *    resolve 成功回调
 *    reject 失败回调
 * 3. resolve 和 reject 是用来改变 Promise状态的 状态分为 fulfilled、rejected、pending
 *    resolve -> fulfilled
 *    reject -> rejected
 * 
 */
// 初始状态
const PENDING = "pending";
// 完成状态
const FULFILLED = "fulfilled";
// 失败状态
const REJECTED = "rejected";

function resolvePromise (PromiseReturn, x, resolve, reject) {
  // 判断then返回的promise 和 返回给 下一个then的Promise是否为同一个
  if (PromiseReturn === x) throw new TypeError("Chaining cycle detected for promise #<MyPromise>");

  // 判断then返回给下一个then方法的返回值类型
  if (x instanceof Promise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

class Promise {
  // 存储状态
  const status = PENDING;

  // 成功回调参数
  let value = undefined;

  // 失败回调参数
  let reason = undefined;

  // 存储成功回调
  let successCallBack = [];

  // 存储失败回调
  let failCallBack = [];

  constructor(exector) {
    exector(this.resolve, this.reject)
  }

  //成功回调
  resolve = value => {
    // 状态一旦改变不可以再变
    if (this.status !== PENDING) return;

    // 改变状态
    this.status = FULFILLED;
    this.value = value;

    while (this.successCallBack.length) this.successCallBack.shift()();
  }

  // 失败回调
  reject = reason => {
    // 状态一旦改变不可以再变
    if (this.status !== PENDING) return;

    // 改变状态
    this.status = REJECTED;
    this.reason = reason;

    if (!this.failCallBack.length) {
      throw '(in MyPromise)';
    }

    // 异步操作
    while (this.failCallBack.length) this.failCallBack.shift()();

  }

  /**
   * 
   * @param {*} successCallBack 
   * @param {*} failCallBack 
   * 1. then 方法接收两个参数 successCallBack failCallBack
   * 2. then 方法中判断状态 执行成功回调和失败回调
   *    2.1 若状态没变 则将回调函数存储起来 等待resolve/reject执行（异步调用）
   * 3. then 方法返回Promise
   * 4. then 方法返回可链式调用 返回值 作为下一个then方法的value
   *    4.1 返回值可以是普通值
   *    4.2 返回值可以是Promise 
   *    4.3 使用resolvePromise 检测返回值是Promise还是普通值
   *        4.3.1 若是普通值 直接返回
   *        4.3.2 若是Promise则执行 返回一个Promise的执行结果
   *    4.4 resolvePromise 还要检测 then方法返回的Promise 和 successCallBack failCallBack返回给下一个then方法的Promise 是否为同一个
   *        4.4.1 若是同一个Promise抛出错误
   * 5. 在成功回调和失败回调中做 异常处理
   * 6. 链式调用时 then不传参数 返回默认回调 value => value
   *    
   */
  then (successCallBack, failCallBack) {
    // 链式调用 then不传参数 返回默认回调
    successCallBack = typeof successCallBack === 'function' ? successCallBack : value => value; 
    failCallBack = typeof failCallBack === 'function' ? failCallBack : reason => { throw reason }; 

    const PromiseReturn = new Promise((resolve, reject) => {
      // 统一异常处理逻辑
      const execFun = (fn, val) => {
        try {
          let res = fn(val);
          resolvePromise(PromiseReturn, res, resolve, reject);
        } catch (e) {
          reject(e);
        }
      };

      const execSuccessCallback = () => execFun(successCallBack, this.value);
      const execFailCallback = () => execFun(failCallBack, this.reason);

      if (this.status === FULFILLED) {
        setTimeout(() => execSuccessCallback(), 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => execFailCallback(), 0);
      } else {
        this.successCallBack.push(execSuccessCallback);
        this.failCallBack.push(execFailCallback);
      }
    })

    return PromiseReturn;

  }

  finally (callback) {
    return this.then(value => Promise.resolve(callback()).then(() => value),
      reason => Promise.resolve(callback()).then(() => { throw reason }))
  }

  catch (failCallBack) {
    return this.then(undefined, failCallBack);
  }

  static resolve (value) {
    // value若是Promise 直接返回
    if (value instanceof Promise) return value;
    // 否则返回一个Promise实例
    return new Promise(resolve => resolve(value))
  }

  /**
   * 
   * @param {*} value 
   * @returns 
   */
  static reject (value) {
    // value若是Promise 直接返回
    if (value instanceof Promise) return value;
    // 否则返回一个Promise实例
    return new Promise((resolve, reject) => reject(value));
  }

  /**
   * 
   * @param {*} array 
   * @returns 
   * 1. 返回一个Promise
   * 2. 判断传入参数是Promise 还是普通值
   * 3. 全部成功 则返回结果 若有一个失败 抛出错误
   */
  static all (array) {
    let result = [];
    let index = 0;

    return new Promise((resolve, reject) => {
      function addData (key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];

        if (current instanceof Promise) {
          current.then(value => addData(i, value), reason => reject(reason));
        } else {
          addData(i, current);
        }
      }
    })
  }

  /**
   * 
   * @param {*} array 
   * @returns 
   * 1. 若有一个成功/失败就返回
   */
  static race (array) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof Promise) {
          current.then(resolve, reject);
        } else {
          resolve(current);
        }
      }
    })
  }
}
```


## 方法实现

resolve、reject 方法用来是改变Promise状态,存储回调函数的值，在异步情况执行存储的回调函数
```js
resolve = value => {
  if(this.status !== PENDING) return;

  this.status = FULFILLED;
  
  this.value = value;

  while(this.successCallBack.length) this.successCallBack.shift()();
  }
reject = reason => {
    if(this.status !== PENDING) return;

    this.status = REJECTED;

    this.reason = reason;
    if(!this.failCallBack.length) {
      throw '(in MyPromise)';
    }

    while(this.failCallBack.length) this.failCallBack.shift()();
  }
```


### then方法
1. then方法接收两个回调函数successCallBack、failCallBack, 回调函数的参数皆是resolve和reject返回的数据，并且返回一个Promise
2. 在针对不同状态下，调用不同的回调函数 fulfilled -> successCallBack reject -> failCallBack padding -> 存储回调函数（异步调用）
3. then方法返回的Promise 和 返回给下一个then方法的Promise 不是同一个
4. then方法可以链式调用
5. 在不同状态下做异常处理 并抛出错误
```js
function resolvePromise (PromiseReturn, x, resolve, reject) {
  // 判断then返回的promise 和 返回给 下一个then的Promise是否为同一个
  if (PromiseReturn === x) throw new TypeError("Chaining cycle detected for promise #<MyPromise>");

  // 判断then返回给下一个then方法的返回值类型
  if (x instanceof Promise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

then (successCallBack, failCallBack) {
    let PromiseReturn = new Promise((resolve, reject) => {
      // 统一异常处理逻辑
      const execFun = (fn, val) => {
        try {
          let res = fn(val);
          resolvePromise(promise, res, resolve, reject);
        } catch (e) {
          reject(e);
        }
      };

      const execSuccessCallback = () => execFun(successCallBack, this.value);
      const execFailCallback = () => execFun(failCallBack, this.reason);

      if (this.status === FULFILLED) {
        setTimeout(() => execSuccessCallback(), 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => execFailCallback(), 0);
      } else {
        this.successCallBack.push(execSuccessCallback);
        this.failCallBack.push(execFailCallback);
      }
    })

    return PromiseReturn;

  }
```

### finally方法
finally 接收一个回调函数 返回的是一个Promise实例 不管Promise是成功回调还是失败回调都会执行finally，,并且finally之后，还可以继续then。并且会将值原封不动的传递给后面的then。
```js
finally(callback) {
  return this.then(value => MyPromise.resolve(callback()).then(() => value),reason => MyPromise.reject(callback()).then(() => { throw reason }))
}
```

### catch方法
catch 用来捕获错误 可以替代then方法中的失败回调，返回一个Promise。
```js
catch(failCallBack) {
  return this.then(undefined, failCallBack);
}
```

### Promise.resolve() 方法
1. Promise resolve 方法就是将给定的值转换成Promise对象
2. resolve 返回的是一个Promise对象
3. 若resolve 参数是一个Promise对象 直接返回
4. 若resolve 参数是一个普通值 包装成Promise 返回
```js
static resolve(value) {
  // value为Promise 直接返回
  if(value instanceof MyPromise) return value;
  // value为普通值 包装为Promise返回
  return new MyPromise(resolve => resolve(value));
}
```

### Promise.reject() 方法
1. Promise reject 方法就是将给定的值转换成Promise对象
2. reject 返回的是一个Promise对象
3. 若reject 参数是一个Promise对象 直接返回
4. 若reject 参数是一个普通值 包装成Promise 返回
```js
static reject(value) {
  // value为Promise 直接返回
  if(value instanceof MyPromise) return value;
  // value为普通值 包装为Promise返回
  return new MyPromise((resolve, reject) => reject(value));
}
```

### Promise.all() 方法
* all 方法是解决异步并发问题
* all 方法的执行顺序就是 结果的顺序
* all 方法也是返回的一个Promise实例
* all 方法中的方法状态全部是成功的 结果也是成功的 如果有一个是失败的 结果就是失败的
```js
static all(array) {
  let result = [];
  let index = 0;
  return new MyPromise((resolve, reject) => {
    // 处理数组中的结果 放入result中
    function addData(key, value) {
      result[key] = value;
      index++;
      // 处理异步 情况
      if(index === array.length) {
        resolve(result);
      }
    }

    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      if(current instanceof MyPromise) {
        // 若是Promise
        current.then(value => addData(i, value), reason => reject(reason));
      }else {
        // 普通值
        addData(i, current);
      } 
    }
  })
}

```


### Promise.race() 方法
* race 返回一个Promise 实例
```js
static race(array) {
  return  new MyPromise((resolve, reject) => {
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      if(current instanceof MyPromise) {
        current.then(resolve, reject);
      }else {
        resolve(current);
      }
    }
  })
}

```

[ES6 Promise文档](https://es6.ruanyifeng.com/#docs/promise)

[Promise MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)