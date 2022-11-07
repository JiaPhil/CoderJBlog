# CSS盒子模型

## 什么是盒子模型？
每个元素都属于一个盒子
盒子的构成：
* 内容（width+height）
* padding 内边距
* border 边框
* margin 外边距

🎈 盒子的大小 = content(width/height) + padding + border

🎈 CSS设置的width/height 是设置的content box 的宽高

🎈 整个盒子的宽高 是要加上padding/border

🎈 content-box情况下盒子的宽高不等于设置的宽高

🎈 border-box情况下盒子的宽高等于设置的宽高

🎈 默认盒子为content-box 设置padding/border会影响整个盒子的宽高



```tex
min-width、max-width
min-height、max-height
```

## CSS属性-padding（内边距）
```css
div{
  /* padding: 上下边距 左右边距 */
  padding: 10px 20px;
}
```

## CSS属性-border
```tex
border: width style(不能省略) color
```
### border-radius 圆角
* 数值: 通常设置较小的圆角
* 百分比: 通常设置弧度或圆形

## CSS属性-margin(外边距)
设置两个元素之间的间距

### margin的传递
```tex
* 针对父子之间的传递
* 针对父子之间元素紧挨着的情况
* 若父元素不在标准流中margin-top的传递不生效
* 生效情况
  * margin-top
  * margin-bottom 在height设置为auto时才会生效

* 解决方法
  * 在父子元素之间不设置margin-top/bottom,用padding代替
  * 给父元素设置border
  * 触发BFC：给父元素设置overflow: auto 
```
### margin的折叠
什么是margin的折叠❓
```tex
在兄弟元素之间，一个元素设置margin-bottom,另一个元素设置margin-top 
的情况下会出现折叠，一个元素设置的属性会覆盖掉另一个元素的属性，并且会取
较大的一个值作为两个元素之间的margin
```
✨解决办法
```tex
1. 只设置一个margin
2. 触发BFC: 两个盒子在不同的BFC中可以避免margin折叠的问题
```

## padding和margin元素的对比
💡建议
```tex
1. 父子元素之间的间距最好用padding
2. 兄弟元素之间的间距最好作用margin
```
为什么❓
```tex
避免出现margin的传递
```

## 块级元素为什么设置margin:0 auto 会居中
需要对块级元素设置具体的宽度 才会居中
对于块级元素: block box width = width + padding + border

🚀 块级元素默认是占据父元素的整行，但给box设置一个固定宽度时，剩余的宽度会优先分配给margin-right

🚩 给margin-left/right设置auto 让浏览器自己分配宽度 以达到居中显示


## CSS属性-ouline
* 不占据空间
* 默认显示在border外面

🎈 应用场景

去除a元素的focus聚焦

## CSS属性-box-shadown/text-shadown
```tex
格式: offset-x offset-y (blur) (spread-radius[px]) color (inset/内阴影)
```

## 行内非替换元素的特殊性
```tex
1. width、height、margin-top、margin-bottom 不生效
2. padding/border-top、padding/border-bottom 生效 但不占据空间
```
🎈 行内非替换元素 使用padding和margin时最好display: inline-block

## CSS属性-box-sizing
```tex
设置盒子宽高行为
```
* content-box
  * padding、border影响整个盒子的宽高
* box-sizing
  * padding、border不影响整个盒子的宽高，设置padding\border会使content得宽高缩小