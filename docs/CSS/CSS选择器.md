# CSS选择器

## 选择器的种类

### 类型、类和 ID 选择器
1. 元素选择器
```tex
h1 {}
```
2. 类选择器
```tex
.box {}
```
3. id选择器
```tex
#box {}
```

### 标签属性选择器
这组选择器是根据元素上的标签**属性**的存在来选择元素的方式：
```tex
// 选择有title属性的<a>标签
a[title] {}

// 选择href属性包含ex的<a>标签
a[href*=ex] {}

// 选择href以ex结尾的<a>标签
a[href$=ex] {}

// 选择href以ex开头的<a>标签
a[href^=ex] {}
```

### 伪类和伪元素
伪类是用来样式化一个元素的特定状态，而伪元素是指的元素的某一部分
```tex
1. 伪类
a:hover {}
p:first-child {}

2. 伪元素
p::first-line {}
```

