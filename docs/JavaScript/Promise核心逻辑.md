# Promise 核心逻辑

## Promise核心代码
```tex
1. Promise 是一个类 在执行这个类的时候 需要传递一个执行器（回调函数） 执行函数会立即执行
2. Promise 分为三种状态 成功 fulfilled 失败 rejected 等待 pending
  pending -> fulfilled
  pending -> rejected
  状态一旦确定就不会更改
3. 执行函数中有两个函数resolve和rejected,这两个函数只用来修改状态的
  resolve: fulfilled
  rejected: rejected

4. then方法内部做的事情就是判断状态 如果状态成功 调用成功的回调函数 如果状态失败 调用失败的回调函数
5. then方法成功回调有一个参数 表示成功之后的值 then失败回调有一个参数 表示失败之后的值
```

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    // 调用类时传递一个执行器
    executor(this.resolve, this.reject);
  }
  // 保存状态 默认PENDING
  status = PENDING;
  // 成功状态的值
  value = undefined;
  // 失败状态的原因
  reason = undefined;
 
  // resolve 函数更改状态
  resolve = value => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return; 
    // 更改状态为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value

  }
  // reject 函数更改状态为失败
  reject = reason => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return;
    // 更改状态为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.reason = reason;

  }

  // 定义then方法 判断状态 接收两个函数 成功回调 失败回调
  then(successCallBack, failCallBack) {
    // 成功回调
    if(this.status === FULFILLED) {
      successCallBack(this.value)
    }else if(this.status === REJECTED) { // 失败回调
      failCallBack(this.reason)
    }
  }
}

```
> 调用
```js
const promise = new Promise((resolve, reject) => {
  resolve("成功")
  reject("失败")
})

promise.then(value=>{
  console.log("成功回调",value)
},reason=>{
  console.log("失败回调",reason)
})

```

## Promise 异步
```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    // 调用类时传递一个执行器
    executor(this.resolve, this.reject);
  }
  // 保存状态 默认PENDING
  status = PENDING;
  // 成功状态的值
  value = undefined;
  // 失败状态的原因
  reason = undefined;
  // 保存成功函数
  successCallBack = undefined;
  // 保存失败函数 
  failCallBack = undefined;
  // resolve 函数更改状态
  resolve = value => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return; 
    // 更改状态为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value
    // 判断成功函数是否存在 如果存在 调用
    this.successCallBack && this.successCallBack(value); 
  }
  // reject 函数更改状态为失败
  reject = reason => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return;
    // 更改状态为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.reason = reason;
    // 判断失败函数是否存在 如果存在 调用
    this.failCallBack && this.failCallBack(reason);
  }

  // 定义then方法 判断状态 接收两个函数 成功回调 失败回调
  then(successCallBack, failCallBack) {
    // 成功回调
    if(this.status === FULFILLED) {
      successCallBack(this.value)
    }else if(this.status === REJECTED) { // 失败回调
      failCallBack(this.reason)
    }else {
      // 等待状态 
      // 将成功、失败回调存储起来，等执行异步代码的时候再调用回调函数
      this.failCallBack = failCallBack;
      this.successCallBack = successCallBack;
    }
  }
}

```
> 调用
```js
                // 1. new 一个Promise对象
const promise = new Promise((resolve, reject) => {
  // 3. 同步代码执行完后 执行异步
  setTimeout(() => {
    resolve('success')
  }, 2000);
})

// 2. 调用then方法
promise.then(value => {
  console.log(value)
},reason => {
  console.log(reason)
})
```


## 多次调用then方法
```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    // 调用类时传递一个执行器
    executor(this.resolve, this.reject);
  }
  // 保存状态 默认PENDING
  status = PENDING;
  // 成功状态的值
  value = undefined;
  // 失败状态的原因
  reason = undefined;
  // 保存成功函数
  successCallBack = [];
  // 保存失败函数 
  failCallBack = [];
  // resolve 函数更改状态
  resolve = value => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return; 
    // 更改状态为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value
    // 判断成功函数是否存在 如果存在 调用
    while(this.successCallBack.length) this.successCallBack.shift()(value)
  }
  // reject 函数更改状态为失败
  reject = reason => {
    // 若状态已被更改 状态不能再更改
    if(this.status !== PENDING) return;
    // 更改状态为失败
    this.status = REJECTED;
    // 保存失败之后的原因
    this.reason = reason;
    // 判断失败函数是否存在 如果存在 调用
    while(this.failCallBack.length) this.failCallBack.shift()(reason)
  }

  // 定义then方法 判断状态 接收两个函数 成功回调 失败回调
  then(successCallBack, failCallBack) {
    // 成功回调
    if(this.status === FULFILLED) {
      successCallBack(this.value)
    }else if(this.status === REJECTED) { // 失败回调
      failCallBack(this.reason)
    }else {
      // 等待状态 
      // 将成功、失败回调存储起来，等执行异步代码的时候再调用回调函数
      this.failCallBack.push(failCallBack);
      this.successCallBack.push(successCallBack);
    }
  }
}

```

## 实现then方法的链式调用(一)
1. 如何实现then方法的链式调用? 
```tex
then方法实现链式调用 then方法要返回一个promise对象 
链式调用的then方法的参数 是上一个then方法返回的参数
```
```js
then(successCallBack, failCallBack) {
  // 构造一个Promise对象                                             
  const promise2 = new Promise((resolve, reject) => {
    if(this.status === FULFILLED){
      // 接收返回值 作为下一个链式调用then方法的value值
      let x = successCallBack(this.value);
      resolve(x);
    }else if(this.status === REJECTED) {
      failCallBack(this.value);
    }else {
      this.successCallBack.push(successCallBack);
      this.failCallBack.push(failCallBack);
    }
  })
  

  return promise2
}

```

## 实现then方法的链式调用(二)
1. then方法返回一个值给 下一个then方法作为值 如何判断返回的值是一个 **Promise** 还是 **普通值**
2. 如果返回的是一个Promise对象 先判断Promise对象执行后的状态 如果是fulfilled 则调用resolve 如果是rejected 则调用reject
3. 如果返回的是一个普通值 直接resolve给下一个then方法
```js
then (successCallBack, failCallBack) {
  const promise2 = new Promise((resolve, reject) => {
    if(this.status === FULFILLED) {
      let x =successCallBack(this.value)
      // 判断返回的值是普通值 还是Promise对象
      resolvePromise(x, resolve, reject)
    }else if(this.status === REJECTED) {
      failCallBack(this.value);
    }else {
      this.successCallBack.push(successCallBack);
      this.failCallBack.push(failCallBack);
    }
  })

  return promise2
}

function resolvePromise (x, resolve, reject) {
  // 判断返回值x是否是Promise对象
  if(x instanceof Promise) {
    // Promise 
    x.then(resolve, reject)
  }else {
    // 普通值
    resolve(x)
  }
}
```

## then方法返回自身Promise对象 如何判断？
```js
then (successCallBack, failCallBack) {
  const promise2 = new Promise((resolve, reject) => {
    if(this.status === FULFILLED) {
      let x =successCallBack(this.value)
      // 判断返回的值是普通值 还是Promise对象
      // 判断then返回的Promise 是否和调用返回的Promise是同一个
      resolvePromise(promise2, x, resolve, reject)
    }else if(this.status === REJECTED) {
      failCallBack(this.value);
    }else {
      this.successCallBack.push(successCallBack);
      this.failCallBack.push(failCallBack);
    }
  })

  return promise2
}

function resolvePromise (promise2 ,x, resolve, reject) {
  // 判断then方法返回的Promise是否是自身的Promise对象
  if(Promise2 === x) {
    reject(new TypeError("Chaining cycle detected for promise #<Promise>"))
  }
  // 判断返回值x是否是Promise对象
  if(x instanceof Promise) {
    // Promise 
    x.then(resolve, reject)
  }else {
    // 普通值
    resolve(x)
  }
}

```

