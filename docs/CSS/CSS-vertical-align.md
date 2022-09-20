# vertical-align
理解 `vertical-align` 首先要理解 `行盒` 的定义

行盒（inline box）：将当前行所有内容全部包裹起开来

`vertical-align` 影响一个行盒垂直方向，行内级元素（`inline`）的对齐方式

那么，进一步思考：

  **如果这个div中有图片，文字，inline-block，甚至他们设置了margin这些属性呢？**

![vertical-img](/images/vertical_align_img.png)

从上面图，可以看出 img 和 `inline-block` 下方会有几个像素的间隙，是什么原因造成的？

如下👇
### vertical-align: baseline

`vertical-align:baseline` 造成上图的情况，为什么会造成呢？

**首先理解baseline在不同情况的位置**：
  * 文本的baseline是字母x的下方
  * Inline-block默认的baseline是margin-bottom的底部（没有margin-bottom，就是盒子的底部）
  * Inline-block有文本时，baseline是最后一行文本的x的下方

正解✅

`img` 及其他行内级元素 在 行盒（`inline box`）中是根据 `baseline` 对齐的，但是文本的 `baseline` 是在 `x` 下方 **在CSS规则中 文本会在下方留一点空间 以供像g/p这种字母，并且行盒是会将在其中的内容全部包裹起来**，所以会有几个像素的间隙


解决这种间隙的方法
  * `vertical-align` 设置 `top/center/bottom`
  * `img` 设置 `block`

