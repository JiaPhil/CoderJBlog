# CSS选择器(selector)

## 选择器的种类

### 通用选择器
```tex 
1. 元素选择器
2. * 通配选择器
```

### 类型、类和 ID 选择器
1. 元素选择器
```css
h1 {}
```
2. 类选择器
```css
.box {}
```
3. id选择器
```css
#box {}
```


### 标签属性选择器
这组选择器是根据元素上的标签**属性**的存在来选择元素的方式：
```css
// 含有title属性的元素
[title] {}
// 选择有title属性的<a>标签
a[title] {}

// 选择href属性包含ex的<a>标签
a[href*=ex] {}

// 选择href以ex结尾的<a>标签
a[href$=ex] {}

// 选择href以ex开头的<a>标签
a[href^=ex] {}
......
```

### 后代选择器
1. 所有后代：空格隔开
  ```css
    .home .box span {}
  ```
2. 直接子代
  ```css
    div  > span {}
  ```

### 兄弟选择器
1. 相邻兄弟选择器
  ```css
    /*+ 连接*/
    .one + .two {}
  ```
2. 所有兄弟选择器
  ```css
   /*~ 连接*/
  .one ~ * {}
  ```

### 选择器组
1. 交集选择器 
精确定位某一个元素
```html
div.box {}
<div class='box'></div>
```
2. 并集选择器
给多个元素设置相同的样式
```html
.one, .two {}
<div class='one'></div>
<p class='two'></p>
```

### 伪类和伪元素
伪类是用来样式化一个元素的特定状态，而伪元素是指的元素的某一部分
```css
/*1. 伪类*/
a:hover {}
p:first-child {}
:not(.box) {}

/* 2. 伪元素 */
p::first-line {}
```



