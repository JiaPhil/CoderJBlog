# CSS定位

## 标准流布局
```tex
1  默认情况下，元素都是按照normal flow（标准流、常规流、正常流、文档流【document flow】）进行排布
  1.1 从左到右、从上到下按顺序摆放好
  1.2 默认情况下，互相之间不存在层叠现象
```
## Position布局
```tex
1. 默认值
  1.1 static
2. 其他定位属性
  2.1. relative：相对定位
  2.2. absolute：绝对定位
  2.3. fixed：固定定位
  2.4. sticky：粘性定位
```
## static 布局
```tex
1. 元素按照normal flow布局
2. left 、right、top、bottom没有任何作用
```

## relative 布局
```tex
1. 还是在标准流中
2. 可以设置top、left、right、bottom
3. 定位参照对象是元素自己原来的位置
4. 相对定位的应用场景
  4.1 在不影响其他元素位置的前提下，对当前元素位置进行微调
```

## fixed布局
```tex
1. 元素脱离normal flow（脱离标准流、脱标）
2. 可以通过left、right、top、bottom进行定位
3. 定位参照对象是视口（viewport）
4. 当画布滚动时，固定不动
```

## absolute布局
```tex
1. 相对于最邻近的定位祖先元素，没有定位祖先元素，则相对于shikou
2. 脱离标准流
3. position为relative、absolute、fixed的元素有效
```


## 将position设置为absolute/fixed元素的特点
```tex
1. 可以任意设置宽高
2. 默认宽高由内容决定
3. 脱离标准流，不会上下，左右排布
4. 不在严格区分块级(block)、行内级(inline)、行内块级元素(inline-block)
5. 不在给父元素汇报高度，因为已经脱离文本流
6. 脱标准流元素内部还是遵循标准流排布

🎈🎈🎈🎈🎈
7. 定位参照对象的宽度 = left + right + margin-left + margin-right + 绝对定位元素的实际占用宽度
8. 定位参照对象的高度 = top + bottom + margin-top + margin-bottom + 绝对定位元素的实际占用高度
```

```css
/* 根据7.的栗子 */
/* 绝对定位元素的宽度+left+right+margin-left+margin-right = 定位参照对象的width */
/*
* 1. 若绝对定位元素设置了宽度，可以通过设置left\right\margin-left\margin-right 进行居中显示
* 2. left/right/margin-left/margin-right 为0时 绝对定位元素占据定位参照元素的整个宽度
* 3. left/right 为0 margin-left/margin-right设置为auto时 绝对元素水平居中显示
*/
/* 占据整个宽度 */
.box {
  position: absolute;
  left:0;
  right:0;
  margin-left:0;
  margin-right:0;
}
/* 水平居中显示 */
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  left:0;
  right:0;
  margin:0 auto;
}

```

```css
/* 根据8.的栗子 */
/* 定位参照对象的高度 = top + bottom + margin-top + margin-bottom + 绝对定位元素的实际占用高度 */
/*
* 1. 若绝对定位元素设置了高度，可以通过设置top/bottom/margin-top/margin-bottom 进行垂直居中显示
* 2. top/bottom/margin-top/margin-bottom 为0时 绝对定位元素占据定位参照元素的整个高度
* 3. top/bottom 为0 margin-top/margin-bottom设置为auto时 绝对元素垂直居中显示
*/
/* 占据整个高度 */
.box {
  position: absolute;
  top:0;
  bottom:0;
  margin-top:0;
  margin-bottom:0;
}
/* 垂直居中显示 */
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  top:0;
  bottom:0;
  margin:auto 0;
}

```

```css
/* 水平垂直居中 */
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}

```
## sticky 粘性定位
```tex
1. 是相对定位和固定定位的结合体
2. 相对于最近的滚动祖先元素，包含视口
3. 脱离标准流
4. 当达到这个阈值点时, 就会变成固定(绝对)定位;
```

## z-index
```tex
1. 仅对定位元素有效
2. 如果是兄弟关系
  ✓ z-index越大，层叠在越上面
  ✓ z-index相等，写在后面的那个元素层叠在上面
3. 如果不是兄弟关系
  ✓ 各自从元素自己以及祖先元素中，找出最邻近的2个定位元素进行比较
  ✓ 而且这2个定位元素必须有设置z-index的具体数值
```