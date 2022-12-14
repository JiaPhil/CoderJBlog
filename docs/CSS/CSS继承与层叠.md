# CSS属性的特性

## CSS属性的继承
1. 如果一个属性具有继承性，那么使用这个属性的元素的后代元素也可以继承使用这个属性
2. 后代元素自己有设置属性，不管权重多高 只继承后代元素的属性
3. 后代元素继承过来的属性不是设置值，而是计算值
```css
.box {
  /* em是相对与父元素字体的大小(父元素没有设置默认为16px) */
  font-size : 2em /* 32px */
}
span {
  font-size : 2em /* 32px */
}
```
3. 如果某些属性不具有**继承性**那么可以设置属性进行**强制继承**
```tex
 属性: inherit
```

## CSS属性的层叠
1. 一个元素多次设置相同的属性，只有一个生效

如何判断设置的哪一个属性生效？

### 权重决定优先级
* 判断一：选择器的权重越大的，优先级越高；
* 判断二：若权重相同的情况下，按顺序判断，后面的优先级更高；

### 选择器的权重
如何计算选择器的权重？
* !important: 10000
* 内联选择器: 1000
* id选择器: 100
* 类选择器、属性选择器、伪类: 10
* 元素选择器、伪元素: 1
* 通配符: 0



## HTML元素的类型
1. 块级元素（block level）: 独占一行
```html
<div></div>
<p></p>
<h1></h1>
....
```
2. 行内级元素（inline level）: 多个行内级元素可以在同一行显示
```html
<span></span>
<a></a>
....
```
我们可以通过display 改变元素特性
### CSS属性 - Display
* 属性
  * block: 让元素变为块级元素
  * inline: 让元素变为行内级元素
  * inline-block: 让元素既可以变为行内级元素，可以变为块级元素
  * none: 隐藏元素（不存在在文本流中）

* 特点
  * block(块级元素)
  ```tex
  1. 元素独占一行
  2. 可以设置宽高
  3. 宽高默认是由内容决定
  ```
  * inline-block(行内跨级元素)
  ```tex
  1. 可以和行内级元素在同一行显示
  2. 可以设置宽高
  3. 宽高默认是由内容决定
  ```
  * inline(行内级元素)
  ```tex
  1. 多个行内级/行内块级元素可以在同一行显示
  2. 不可以设置宽高
  3. 宽高默认是由内容决定

  注意: 像img、video 元素是行内级元素，也是可替换元素，这样行内级可替换元素是可以设置宽高的
  ```
> 块级、行内块级元素默认是可以包含任何元素的 但是p元素不能包含div
>
> 行内级元素只能包含行内级元素

## 元素的隐藏方式
* display: none 
  元素不存在，不占据dom空间
* visibility: hidden
  仅是隐藏，占据空间
* rgba设置颜色，将a设置为0
  a为透明度，设置某个元素的**属性值**为透明，不影响子元素
* opacity: 0 为透明度
  设置整个元素的透明度, 会影响所有的子元素

## CSS属性 - overflow
* overflow用于控制内容溢出时的行为
* visible：溢出的内容照样可见（默认）
* hidden：溢出的内容直接裁剪
* scroll：溢出的内容被裁剪，但可以通过滚动机制查看
  * 不管是否溢出，也会显示滚动条区域，滚动条区域占用的空间属于width、height
* auto：自动根据内容是否溢出来决定是否提供滚动机制
* overlay： 行为和 `auto` 相同 但是滚动条不占空间


