function remove(set: Set<string>, i: string) {
  const newSet = new Set<string>([...set]);
  newSet.delete(i);
  return newSet;
}

function permutation(str: string) {
  function R(set: Set<string>): Array<string> {
    if (set.size == 1) {
      return [set.values().next().value];
    }

    return flattern(
      [...set].map((char) =>
        R(remove(set, char)).map((perm) => {
          return char + perm;
        })
      )
    );
  }

  return R(new Set([...str]));
}

function flattern(array: Array<any>) {
  if (!Array.isArray(array)) {
    return array;
  }

  return ([] as Array<any>).concat(...array.map(flattern));
}

permutation("abc");

// function once(fn) {
//   let done = false;
//   return function () {
//     if (!done) {
//       done = true;
//       return fn.apply(this, arguments);
//     }
//   };
// }

// let pay = once(function (money) {
//   console.log(`支付了${money} RMB`);
// });

// pay(5);
// pay(5);

// const map = (array: Array<any>, fn: Function) => {
//   let results = [];
//   for (let value of array) {
//     results.push(fn(value));
//   }
//   return results;
// };

// let arr = [1, 2, 3, 4];
// arr = map(arr, (v) => v * v);
// console.log(arr);

// const every = (array: Array<any>, fn: Function) => {
//   let results = false;
//   for (let value of array) {
//     results = fn(value);
//     if (!results) {
//       break;
//     }
//   }
//   return results;
// };

// let arr = [9, 13, 14];
// let r = every(arr, (v) => v > 10);
// console.log(r);

// const some = (array: Array<any>, fn: Function) => {
//   let results = false;
//   for (let value of array) {
//     results = fn(value);
//     if (results) {
//       break;
//     }
//   }
//   return results;
// };

// let arr = [9, 13, 15];
// let r = some(arr, (v) => v % 2 === 0);
// console.log(r);

// const forEach = (array: Array<any>, fn: Function) => {
//   for (let value of array) {
//     fn(value);
//   }
// };

// let arr = [1, 2, 3, 4, 5];
// let r = forEach(arr, function (item) {
//   item = item + 1;
//   console.log(item);
// });
// console.log(r);

// function getArea(r) {
//   console.log(r);
//   return Math.PI * r * r;
// }

// function memoize(fn: Function) {
//   let cache = {};
//   return function () {
//     const key = JSON.stringify(arguments);
//     cache[key] = cache[key] || fn.apply(fn, arguments);
//     return cache[key];
//   };
// }

// const getAreaMemoy = memoize(getArea);

// console.log(getAreaMemoy(4));

function curry(func: Function) {
  return function curriedFn(...args) {
    // 实参长度小于形参长度
    if (args.length < func.length) {
      // 返回一个函数等待接收 剩余参数
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }

    return func(...args);
  };
}

function getSum(a, b, c) {
  return a + b + c;
}

const sum = curry(getSum);
console.log(sum(1)(1, 1));