# flex布局

## flexbox的理解
```tex
1.  弹性盒子是一种用于按行或按列布局元素的一维布局方法
2. 元素可以膨胀以填充额外的空间, 收缩以适应更小的空间
```

## flex的概念
```tex
1. 开启了 flex 布局的元素叫 flex container
2. flex container 里面的直接子元素叫做 flex item
3. flex item 在flex container 中不再严格区分块级元素和行内级元素
4. flex item 是可以设置宽高的
```
* display属性值分为**flex**和**inline-flex**
  * flex： flex container 以块级元素形式存在
  * inline-flex：flex container 以行内级元素形式存在

## flex模型
![flex模型](/images/flex-model.png)
* 主轴(main axis)：元素按主轴方向排布，默认以从左到右排列，修改主轴方向 用flex-direction

## flex container 属性
应用在flex container 上的css属性

### flex-direction
* 决定main axis 的方向
* 默认值：
```tex
1. row 
2. row-reverse
3. column
4. column-reverse
```

### flex-wrap 
* 决定flex container是多行还是单行显示
* 默认值：
```tex
1. nowrap: 单行
2. wrap: 多行
3. wrap-reverse: 多行（对比 wrap，cross start 与 cross end 相反）
```

### flex-flow
* flex-flow 属性是 flex-direction 和 flex-wrap 的简写
  * 顺序任何, 并且都可以省略
  ![flex-flow](/images/flex-flow.png)

### justify-content
* 决定flex items在main axis上的对齐方式
```tex
1. flex-start（默认值）：与 main start 对齐
2. flex-end：与 main end 对齐
3. center：居中对齐
4. space-between： 
   ✓ flex items 之间的距离相等
   ✓ 与 main start、main end两端对齐
5. space-around： 
   ✓ flex items 之间的距离相等
   ✓ flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半
6. space-evenly： 
   ✓ flex items 之间的距离相等
   ✓ flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离
```

### align-items
* 决定了flex items在cross axis上的对齐方式
```tex
1. normal：在弹性布局中，效果和stretch一样 height为auto情况下会拉伸至父元素的高度
2. stretch：当 flex items 在 cross axis 方向的 size 为 auto 时，会
自动拉伸至填充 flex container
3. flex-start：与 cross start 对齐
4. flex-end：与 cross end 对齐
5. center：居中对齐
6. baseline：与基准线对齐
```


### align-content
* 决定了多行flex items 在cross axis上的对齐方式，用法与justify-content类似，区别在于align-content作用域交叉轴上。
```tex
1. stretch（默认值）：与 align-items 的 stretch 类似
2. flex-start：与 cross start 对齐
3. flex-end：与 cross end 对齐
4. center：居中对齐
5. space-between：
   ✓ flex items 之间的距离相等
   ✓ 与 cross start、cross end两端对齐
6. space-around： 
   ✓ flex items 之间的距离相等
   ✓ flex items 与 cross start、cross end 之间的距离是 flex items 之间距离的一半
7. space-evenly： 
   ✓ flex items 之间的距离相等
   ✓ flex items 与 cross start、cross end 之间的距离 等于 flex items 之间的距离
```


## flex item属性
* 作用域flex item上的css属性

### order 
* order决定了flex items的排布顺序
  * 可以设置任意整数，值越小 优先排布

### align-self
* 可以通过 align-self 覆盖 flex container 设置的 align-items
```tex
1. auto（默认值）：遵从 flex container 的 align-items 设置
2. stretch、flex-start、flex-end、center、baseline，效果跟 align-items 一致
```

### flex-grow
```tex
* 默认值为0，不拉伸
* flex-grow 决定了 flex items 如何扩展(拉伸/成长)
* 在flex container 在main axis方向上有剩余空间的情况下，flex-grow才生效
* flex item计算方式 = flex container剩余的size * flex-grow / sum
* flex items 扩展后的最终 size 不能超过 max-width\max-height
```
### flex-shrink
```tex
* 默认值为1，会收缩
* flex-shrink 决定了 flex items 如何收缩(缩小)
* 当 flex items 在 main axis 方向上超过了 flex container 的 size，flex-shrink 属性才会有效
* flex item 收缩的计算方式 = flex items 超出 flex container 的 size * 收缩比例 / 所有 flex items 的收缩比例之和
* flex items 收缩后的最终 size 不能小于 min-width\min-height
```
### flex-basis
```tex
* flex-basis 用来设置 flex items 在 main axis 方向上的 base size
* 决定 flex items 最终 base size 的因素，从优先级高到低
  * max-width\max-height\min-width\min-height
  * flex-basis
  * width\height
  * 内容本身的 size
```
### flex 
* flex 是 flex-grow || flex-shrink || flex-basis 的简写,flex 属性可以指定1个，2个或3个值。


## 思考：如何解决下面布局问题
![flex-p](/images/flex-p.png)

flex item中添加i元素补充

i元素的个数 = axis 方向总个数 - 2