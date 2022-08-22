# CSS背景设置

## background-image
```tex
1. background-image用于设置元素的背景图片
  💡 会盖在(不是覆盖)background-color的上面
2. 如果设置了多张图片
  💡 设置的第一张图片将显示在最上面，其他图片按顺序层叠在下面
```
🎈 注意：如果设置了背景图片后，元素没有具体的宽高，背景图片是不会显示出来的

## background-repeat
```tex
1. background-repeat用于设置背景图片是否要平铺
2. 常见的设值有
  💡 repeat：平铺
  💡 no-repeat：不平铺
  💡 repeat-x：只在水平方向平铺
  💡 repeat-y：只在垂直平方向平铺
```
![平铺位置](/images/bgc-repeat.png)

## background-size
```tex
1. auto：默认值, 以背景图本身大小显示
2. cover：缩放背景图，以完全覆盖铺满元素,可能背景图片部分看不见
3. contain：缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比
4. <percentage>：百分比，相对于背景区（background positioning area）: 宽 高
5. length：具体的大小，比如100px: 宽 高
```
## background-position
```tex
background-position用于设置背景图片在水平、垂直方向上的具体位置,可以设置数值
水平方向还可以设值：left、center、right
垂直方向还可以设值：top、center、bottom
如果只设置了1个方向，另一个方向默认是center
```
![position](/images/bgc-position.png)

## background-attachment
```tex
1. scroll：此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动
2. local：此关键属性值表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动
3. fixed：此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
```

## background 简写属性

## background-image 和 image元素的对比
![wq](/images/bgc-image-image.png)