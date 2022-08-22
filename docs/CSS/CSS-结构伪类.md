# CSS结构伪类

## :nth-child() 和 nth-last-child()
* nth-child 代表从第一个元素开始
* nth-last-child 代表从最后一个元素开始
```tex
2n 代表 偶数
2n+1 代表奇数
-n+2 代表前/后两个元素
```

## nth-of-type() 和 nth-last-of-type()
* nth-of-type 代表从第一个元素开始
* nth-last-of-type 代表从最后一个元素开始

## nth-child() 和 nth-of-type()的区别
```tex
1. nth-of-type 计数时只计算同种类的元素
2. nth-child 计数时不计算同种类的元素
```

## 其他伪类
```tex
1. :first-child，等同于:nth-child(1)
2. :last-child，等同于:nth-last-child(1)
3. :first-of-type，等同于:nth-of-type(1)
4. :last-of-type，等同于:nth-last-of-type(1)
5. :only-child，是父元素中唯一的子元素
6. :only-of-type，是父元素中唯一的这种类型的子元素

7. :root，根元素，就是HTML元素
8. :empty代表里面完全空白的元素
```

## 否定伪类
```tex
1. :not()的格式是:not(x)
2. x 代表一个简单选择器
3. 元素选择器、通用选择器、属性选择器、类选择器、id选择器、伪类（除否定伪类）
4. :not(x)表示除x以外的元素
```