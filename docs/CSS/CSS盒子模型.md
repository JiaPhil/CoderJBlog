# CSS盒子模型

## 什么是盒子模型？
每个元素都属于一个盒子
盒子的构成：
* 内容（width+height）
* padding 内边距
* border 边框
* margin 外边距

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