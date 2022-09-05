# Promise 源码解析


```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  value = undefined;
  reason = undefined;

  successCallBack = [];
  failCallBack = [];
  constructor(executor) {
    executor(resolve, reject)
  }

}
```