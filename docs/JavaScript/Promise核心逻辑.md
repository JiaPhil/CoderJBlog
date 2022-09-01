# Promise 核心逻辑

## 代码解析
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