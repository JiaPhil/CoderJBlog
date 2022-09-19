# 补充知识

## border 图形
* 众所周知，border时用来画边框的css属性，但是border还可以用来画图
```css
.box {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 50px solid transparent;
  border-top-color: orange;

  transform-origin: center 25%;
  transform: rotate(180deg);
}
```
![border-image](/images/border-image.png)

* 所以利用border或者CSS的特性我们可以做出很多图形:
  * https://css-tricks.com/the-shapes-of-css/#top-of-site
  
## Web Fonts 字体
* 设置除浏览器之外的字体
* 使用方法
```css
/* 通过@font-face来引入字体, 并且设置格式 */
@font-face {
  font-family: "Jia",
  src: url('./font/xxxx.ttf')
}

/* 使用字体 */
body {
  font-family: 'Jia'
}
```
* Web-Fonts 的兼容性
```tex
1. 字体分类
  1.1 OpenType/TrueType字体：拓展名是 .ttf、.otf，
      建立在TrueType字体之上
  1.2 Embedded OpenType字体：拓展名是 .eot，
      OpenType字体的压缩版
  1.3 SVG字体：拓展名是 .svg、 .svgz
  1.4 WOFF表示Web Open Font Format web开放字体：
      拓展名是 .woff，建立在TrueType字体之上
```
![font-table](/images/font-table.png)

* 这里我们提供一个网站来生产对应的字体文件:
  * https://font.qqe2.com/# 暂时可用

* web fonts 的兼容性写法
```css
@font-face {
  font-family: 'Jia',
  src: url('./fonts/xxx.eot');
  src: url('./fonts/xxx.eot?#iefix') format("embedded-openType"),
  url('./fonts/xxx.woff') format("woff"),
  url('./fonts/xxx.ttf') format("truetype"),
  url('./fonts/xxx.svg') format("svg");

  font-style: normal;
  font-wight: normal;
}
```
* url指定资源的路径
* format用于帮助浏览器快速识别字体的格式

## 字体图标
* 字体图标的好处：
  * 放大不会失真
  * 可以任意切换颜色
  * 用到很多个图标时，文件相对图片较小
* 字体图标的使用步骤:
  * 第一步: 通过link引入iconfont.css文件
  * 第二步: 使用字体图标
  ```html
  <i class='iconfont icon-music'></i>
  ```

## 精灵图
* 什么是CSS Sprite?
```tex
1. 是一种CSS图像合成技术，将各种小图片合并到一张图片上，然后利用CSS的背景定位来显示对应的图片部分

```
* 使用CSS Sprite的好处?
```tex
1. 减少网页的http请求数量，加快网页响应速度，减轻服务器压力
2. 减小图片总大小
3. 解决了图片命名的困扰，只需要针对一张集合的图片命名
```
* 精灵图如何使用呢?
```tex
1. 设置对应元素的宽度和高度
2.设置精灵图作为背景图片
3.调整背景图片的位置来展示
```
* 获取精灵图的位置 http://www.spritecow.com/
## cusor
* auto：浏览器根据上下文决定指针的显示样式，比如根据文本和非文本切换指针样式
* default：由操作系统决定，一般就是一个小箭头
* pointer：一只小手，鼠标指针挪动到链接上面默认就是这个样式
* text：一条竖线，鼠标指针挪动到文本输入框上面默认就是这个样式
* none：没有任何指针显示在元素上面


## 哪里加box-sizing:border-box
设置 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>box-sizing:border-box</code> 有一个前提： 明确设置盒子的宽高

- <code style='background: #f1f1f1; color:#33a06f;border-radius:4px;'>width:auto</code> 元素默认是 `box-sizing:border-box`
- 设置flex布局 元素默认是 `box-sizing:border-box` 


## 设置文本省略不生效情况
<code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>flex:1</code> 和 `white-space:nowrap` 冲突 导致设置 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>flex:1</code> 的后代子元素设置文本省略不生效， 但是设置flex:1 本身元素文本省略是生效的

解决办法：
- 添加固定宽度
- 设置<code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>flex:1</code>的元素 添加 `overflow:hidden`


## a中嵌套div（块级元素）的现象
- a 中宽度被块级元素穿透
- 解决方法： a中设置inline-block(不建议这么做)


## 元素水平垂直居中方案
`水平居中`
```text
水平居中：
  1. 行内级元素
    设置父元素text-align:center
  2. 块级元素
    设置块级元素(固定宽度) margin: 0 auto
  3. position 绝对定位
    设置绝对定位元素(宽度)
    left:0; right:0; margin: 0 auto;
  4. flex 布局
    设置justfiy-cotent: center;
  5. transform + position相对定位
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
```

`垂直居中`
```text
1. position 绝对定位
  设置绝对定位元素(固定高度)
  bottom:0; top:0; margin: auto 0;
2. flex 布局
  设置align-items: center;
3. transform + position相对定位
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
```
