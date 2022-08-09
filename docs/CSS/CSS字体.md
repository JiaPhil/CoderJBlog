# CSS字体

## font-size(重要)
* 可继承
* 常用设置
  * 具体数据+单位
  √ 比如100px
  √ 也可以使用em单位(不推荐)：1em代表100%，2em代表200%，0.5em代表50%
    font-size是可以继承父元素的font-size
    em -> 相对于父元素的字体的尺寸

  * 百分比
  √ 基于父元素的font-size计算，比如50%表示等于父元素font-size的一半

## font-famliy(重要)
* 可继承
* 设置文字的字体名称
* @font-face 指定的可以直接下载的字体

## font-weight(重要)
设置文字的粗细(重量)
* 默认 normal 400
* 加粗 bold 700
* 可以直接设置数值1-1000


## font-style(一般)
font-style用于设置文字的常规、斜体显示
* normal：常规显示
* italic(斜体)：展示字体本身的斜体(字体本身设计的斜体)
* oblique(倾斜)：文本倾斜显示(仅仅是让文字倾斜)


## font-variant(了解)
font-variant可以影响小写字母的显示形式


## line-height(重要)
√ 只作用于文本
line-height上下居中显示原理
```tex
```

height和line-height的区别
  √ height: 元素的整体高度
  √ line-height: 一行文字占据的高度


## font
* 缩写属性
* font: (font-style font-variant font-weight) font-size/(line-height) font-famliy