# JS数据类型

JS有8种基本类型（包含7种原始类型和一种复杂类型）
* Number：数字类型，包含整数和浮点数
* String：字符串类型
* Boolean：布尔类型，true（1）/false（0）
* Undefined：表示不确定变量是什么类型
* Null：表示Object初始化类型
* Object：复杂类型
* BigInt
* Symbol：符号类型

## Number类型

```tex
1. 表示整数和浮点数
2. 特殊数值
  2.1 Infinity 无穷大
  2.2 NaN（Not a Number）表示不是一个数值
      NaN() 可以判断变量是否是一个数值
3. 数字范围
  3.1 Number.MAX_VALUE
  3.2 Number.MIN_VALUE
```


## String类型
```tex
1. string类型可以用 ""、'' 和 `` 表示
2. 对于在字符串中使用相同引号可以用转义符有代替
  2.1 \ -> 转义
  2.2 \' -> 单引号
  2.3 \" -> 双引号
  2.4 \\ -> '\' 反斜杠
  2.5 \n -> 换行符
  2.6 \t -> 制表符
  2.7 \b -> 退格符
  2.8 \r -> 回车符
3. 模板字符串 `` -> es6
  3.1 可以写入变量 `name is ${user}` 
  3.2 用bable 转换为es5 兼容
```

## Boolean布尔
```tex
1: 表示true
0: 表示false
```

## Object
```tex
1. 复杂类型 或 引用类型
2. 在初始化一个空对象时 建议使用null
  2.1 var obj = {} -> true
  2.2 var obj = null -> false
```

## Null类型
```tex
1. Null类型的出现就是为了给Object类型做初始化值的作用
  1.1 obj = {} -> true
  1.2 obj = null -> false
2. 初始化一个不确定值的Object时 建议使用null
3. typeof null -> Object类型
```

## Null 和 Undefined 的区别
```tex
1. Null的存在是为了给不确定的 Object 值做初始化的作用
2. Undefined是为了 不确定类型的变量 做初始化值的作用
```

## String类型的转换

1. 隐式转换
```tex
1) 使用“+”操作符
2) 某些函数也可以隐式转换为字符串
    console.log
```
2. 显式转换
```tex
1) String() -> String(num)
2) toString() -> num.toString() 
```

## Number类型转换
1. 隐式转换
```tex
1) 非“+”操作符
```

2. 显式转换
```tex
1) Number() -> Number(str)
```

其他类型转Number
* Number(undefined) -> NaN
* Number(false/true) -> 0 / 1
* Number(null) -> 0
* Number('123abc') -> NaN

## Boolean转换
1. 显式转换
```tex
1) Boolean()
2) 0/""/undefined/null/nan 都是false
```