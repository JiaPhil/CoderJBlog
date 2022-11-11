// 递归实现Fibonacci
function fibo(n) {
  if (n === 1 || n === 2) return 1
  return fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(10));

// for循环实现fibonacci 
function fibonacci(n) {
  if (n === 1 || n === 2) return 1
    let result = 0
    var n1 = 1
    var n2 = 1
  for (let i = 3; i <= n; i++) {
    result = n1 + n2
    n1 = n2
    n2 = result
  }
  return result
}
console.log(fibonacci(10))