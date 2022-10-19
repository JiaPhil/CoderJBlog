# HTML5

## HTML5新增元素

### HTML5语义化元素

HTML5新增语义化元素包括：
* `header`: 头部元素
* `nav`: 导航元素
* `section`: 定义文档某个区域的元素
* `article`: 内容元素
* `aside`: 侧边栏元素
* `footer`: 尾部元素

> HTML5 新增语义化元素，没有特殊的含义，上述元素都是 `block-level`，只是将元素语义化
> 更利于浏览器解析，并且利于 `SEO` 优化

### HTML5新增 - video/audio

HTML5新增视频播放元素，摒弃 `flash` 的视频播放方式，解决了视频中无法支持的 `HTML/CSS` 特性和 `兼容性问题`


#### video 视频元素

* HTML `<video>` 元素 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。
```html
<video src='./fer.mp4' contorls></video>
```

* video常见的属性：

![video常见的属性](/images/html5_video_class.png)

* video 支持的视频格式

![video支持的格式](/images/html5_video_formatter.png)

* video兼容性写法

若有些浏览器不支持一些视频格式，可使用兼容性写法，播放其他格式的视频

```html
<video src='./fer.mp4'>
  <!-- 若浏览器不支持MP4格式 可使用以下格式 -->
  <source src='./fer.ogg' />
  <source src='./fer.webm' />
  <p>该浏览器不支持视频播放格式，请更换其他浏览器！</p>
</video>
```


#### audio 音频元素

- HTML `<audio>` 元素用于在文档中嵌入音频内容, 和video的用法非常类似
```html
<audio src='./media/music.mp4' contorls></audio>
```
- 常见属性

![audio常见属性](/images/html5_audio_class.png)

- audio支持的音频格式
[查阅官方文档](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs)

- `audio` 兼容性写法 同 `video` 相同


### input 扩展内容

* HTML5对input元素也进行了扩展，在之前我们已经学习过的其中几个属性也是HTML5的特性：
  * placeholder：输入框的占位文字
  * multiple：多个值
  * autofocus：最多输入的内容

* 另外对于input的type值也有很多扩展：
 * date
 * time
 * number 
 * tel
 * color
 * email
 * ......

* 查看MDN文档 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)


### 全局属性 data-* 

* 在HTML5中新增 `data-*` 全局属性，用于自定义数据属性
* 在元素中设置 `data-*` 全局属性，可以通过JS操作DOM获取元素，并且通过dataset获取在元素定义的data-*
* 通常用于HTML和JavaScript数据之间的传递；
```html
<div class='box' data-age='18' data-name='coder' data-sex='male'>
  box
</div>

<script>
  const el = document.querySelctor('.box');
  console.log(el.dataset)
  // -> log {age:18,name:coder,sex:male}
</script>
```



## CSS 属性

### white-space

white-space用于设置空白处理和换行规则
* normal：合并所有连续的空白，允许单词超屏时自动换行
* nowrap：合并所有连续的空白，不允许单词超屏时自动换行
* pre：阻止合并所有连续的空白，不允许单词超屏时自动换行
* pre-wrap：阻止合并所有连续的空白，允许单词超屏时自动换行
* pre-line：合并所有连续的空白（但保留换行），允许单词超屏时自动换行


### text-overflow
text-overflow通常用来设置文字溢出时的行为
* clip：溢出的内容直接裁剪掉（字符可能会显示不完整）
* ellipsis：溢出那行的结尾处用省略号表示

**text-overflow生效的前提是overflow不为visible**

```css
.box {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```


## CSS 函数

### var 函数

`var` 函数在 css中用于使用自定义属性

如何自定义属性？
* 属性名需要以两个减号（--）开始;
* 属性值则可以是任何有效的CSS值;
```css
html {
  --default-color: #f00;
}
```

* `var` 使用自定义的属性
```css
.box {
  background-color: var(--default-color)
}
```

### calc 函数

calc() 函数允许在声明 CSS 属性值时执行一些计算。

* 计算支持加减乘除的运算；
  ✓ + 和 - 运算符的两边必须要有空白字符。

* 通常用来设置一些元素的尺寸或者位置；
```css
.box {
  width: calc(100% - 23px);
}
```


### blur 毛玻璃效果/高斯模糊

blur(radius模糊半径)函数通常用于 图片的模糊处理中，可以使用的两个属性分别是 `filter` 和 `backdrop-filter`

* filter: 将模糊或颜色偏移等图形效果应用于元素;
* backdrop-filter: 为元素后面的区域添加模糊或者其他效果，因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。


### gradient 渐变函数

* `<gradient>` 是一种 `<image>` CSS数据类型的子类型，用于表现两种或多种颜色的过渡转变。
* `gradient` 适用于含有 `image` 的属性，例如：background-image、list-style-image、border-image、content等 
* 常见的有 `linear-gradient` 和 `radial-gradient`

#### gradient 的使用
1. linear-gradient()
linear-gradient 默认 是从左到右开始扩散
```css
.box {
  /* background-image: linear-gradient(red, blue);
  background-image: linear-gradient(to right, red, blue);
  background-image: linear-gradient(to right bottom, red, blue);
  background-image: linear-gradient(45deg, red, blue); */
  background-image: linear-gradient(45deg, red, blue 50%, orange 60%, purple 100%);
}
```

2. radial-gradient()
radial-gradient() 默认是从盒子原点开始扩散
```css
.box {    
  background-image: radial-gradient(at 0% 50%,red,blue);
}
```

## 浏览器前缀

* 为什么需要浏览器前缀了？
```text
 CSS属性刚开始并没有成为标准，浏览器为了防止后续会修改名字给新的属性添加了浏览器前缀；
```
* 前缀类型
1. -o-、-xv-：Opera等
2. -ms-、-mso-：IE，Edeg
3. -moz-：firefox
4. -webkit-：Chrome、Safari

* 模块化打包工具(`webpack`)会自动添加浏览器前缀


## BFC - Block Formatting Context

### FC - Formatting Context

#### 什么是FC？

[官方解释](https://www.w3.org/TR/CSS2/visuren.html#normal-flow)
> Boxes in the normal flow belong to a formatting context, which may be block or inline, but not both simultaneously. Block-level boxes participate in a block formatting context. Inline-level boxes participate in an inline formatting context.

官方解释的大概意思是，所有在标准流中的盒子都是属于一个 `FC`，并且将块级元素分为 `BFC` -> `block formatting context` 和行内级元素分为 `IFC` -> `inlevel formatting context`


### BFC
块级元素在 `BFC` 中布局，什么时候会形成 `BFC` ，官方文档的解释是：
> Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

官方给出的大概意思是 浮动元素、绝对定位元素，或者块级容器，块级盒子 overflow 不设置为 visible 的时候都会形成一个 BFC

MDN上有整理出在哪些具体的情况下会创建BFC：
* 根元素（`<html>`） 
* 浮动元素（元素的 float 不是 none） 
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block） 
* 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值），表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、
row、tbody、thead、tfoot 的默认属性）或 inline-table） 
* overflow 计算值(Computed)不为 visible 的块元素
* 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
* 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
* display 值为 flow-root 的元素

#### BFC 有什么作用
在官方文档中给出了具体解释
> In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.

> In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).

简单概括如下：
1. 在BFC中，box会在垂直方向上一个挨着一个的排布；
2. box 之间的间距 由margin 决定；
3. 在同一个BFC中，相邻的两个box之间margin会折叠；
4. 在BFC中，每个元素的左边缘是紧挨着包含块的左边缘的；

总结
> BFC的作用就是规定我们在布局的时候的排布（没有任何布局样式），比如盒子会垂直排布，盒子之间的间距设置margin会有间距等等，这些都是BFC的规定，才会有这些排布。

#### BFC的作用一 - 解决折叠问题（权威）
官方文档中给出的解释是 **在同一个BFC中，两个相邻的box之间的margin会折叠**，那么两个box不在同一个BFC中那么就解决了折叠问题
* 在同一个BFC中，两个相邻的box之间的margin会折叠
```html
<!-- html会创建一个BFC -->
<html>
  <!-- box1,box2两个盒子之间设置margin BFC会折叠box1的margin -->
  <style>
    .box1 {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
      background: #f00;
    }

    .box2 {
      width: 200px;
      height: 200px;
      margin-top: 20px;
      background: #0f0;
    }
  </style>
  <body>
    <!-- box1,box2都属于html的BFC中 -->
    <div class='box1'></div>
    <div class='box2'></div>
  </body>
</html>
```

* 解决两个box之间的margin不折叠的问题，使两个box不在同一个BFC中
```html
<!-- html会创建一个BFC -->
<html>
  <style>
    /* 设置container 盒子为一个BFC */
    .container {
      overflow: hidden;
    }
    /* box1 不属于html的BFC中，而是属于container的BFC中 */
    .box1 {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
      background: #f00;
    }

    .box2 {
      width: 200px;
      height: 200px;
      margin-top: 20px;
      background: #0f0;
    }
  </style>
  <body>
    <!-- 解决两个box之间margin折叠的问题,box1 属于container的BFC中 -->
    <div class="container">
      <div class='box1'></div>
    </div>
    <div class='box2'></div>
  </body>
</html>
```


#### BFC的作用二 - 解决浮动高度塌陷（权威）

BFC可以解决浮动元素高度塌陷问题,但是不能解决绝对定位元素高度塌陷问题,官方也没给出具体解释

* 事实上解决浮动塌陷问题需要满足两个条件
1. 浮动元素的父元素触发BFC，形成独立的块级格式化上下文（Block Formatting Context）；
2. 浮动元素的父元素的高度是auto；

* BFC的高度是auto的情况下,是如下计算高度的:
1. 如果只有inline-level,是行高的顶部和底部的距离
2. 如果有block-level，是由最底层的块上边缘和最底层
块盒子的下边缘之间的距离
3. 如果有绝对定位元素，将被忽略；
4. 如果有浮动元素，那么会增加高度以包括这些浮动元
素的下边缘





## 媒体查询

### 媒体查询的三种方式
1. 通过@media和@import使用不同的CSS规则（常用）；
```html
<style>
  @import url(./css/miniScreen.css) (min-width: 500px) and (max-width: 800px);

  @media screen and (min-width: 500px) and (max-width: 800px) {
    body {
      background-color: #f00;
    }
  }
</style>
```

2. 使用media属性为`<style>`,` <link>`, `<source>`和其他HTML元素指定特定的媒体类型；
```html
<html>
  <link rel="stylesheet" media="(max-width: 800px)" href="./css/miniScreen.css">
</html>
```

3. 使用Window.matchMedia() 和MediaQueryList.addListener() 方法来测试和监控媒体状态；


### 媒体类型（Media types）
在使用媒体查询时，你必须指定要使用的媒体类型。媒体类型是可选的，并且会（隐式地）应用 all 类型.

常见的媒体类型值如下:
* all：适用于所有设备。
* print：适用于在打印预览模式下在屏幕上查看的分页材料和文档。
* screen（掌握）：主要用于屏幕。
* speech：主要用于语音合成器。

### 媒体特性（Media features）
媒体特性（Media features）描述了 浏览器、输出设备，或是预览环境的具体特征；

1. 通常会将媒体特性描述为一个表达式；
2. 每条媒体特性表达式都必须用括号括起来；

![媒体查询特征](/images/media_query_feature.png)


### 逻辑操作符（logical operators）

如果有多个条件，我们可以通过逻辑操作符联合复杂的媒体查询：
* and：and 操作符用于将多个媒体查询规则组合成单条媒体查询
* not：not运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。 
* only：only运算符仅在整个查询匹配时才用于应用样式。
* , (逗号)：逗号用于将多个媒体查询合并为一个规则