# float 浮动

## float 属性
```tex
right
left 
none

让元素脱离标准流
```

## 浮动规则
```tex
1. 元素一旦浮动后, 脱离标准流
2. 定位元素会层叠在浮动元素之上
3. 浮动元素不能超过包含块的边界
4. 浮动元素之间不能层叠
5. 浮动元素不能与(inline)行内级内容层叠，行内级内容将会被浮动元素推出
```

## 解决(inline)行内级，(inline-block)行内块级元素的水平间隙问题
```tex
1. 删除换行符
2. 将父元素的font-size 设置为0，但是子元素要设置回来
3. float:left
4. display:flex
```

## margin 子元素设置负值 子元素长度变宽
```tex
公式：
父容器的宽度 = 子元素宽度 + margin-left + margin-right

例：

1190 = 1190 - 10
      👇
1190 = 1200 - 10
```

## border -> 计算宽度
1. 边框给谁加
2. 加上边框后，宽度如何计算

## 浮动问题-高度坍塌
```tex
1. 父元素计算高度时，不会计算浮动元素的高度，导致高度坍塌。
2. 解决高度坍塌的问题，一般用清除浮动的方法
3. 清除浮动的目的：
  让父元素计算高度时，把浮动元素的高度计算进去
```

## clear属性
```tex
1. clear 属性可以指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面
2. clear的常用取值
  2.1 left：要求元素的顶部低于之前生成的所有左浮动元素的底部
  2.2 right：要求元素的顶部低于之前生成的所有右浮动元素的底部
  2.3 both：要求元素的顶部低于之前生成的所有浮动元素的底部
  2.4 none：默认值，无特殊要求
```

## 清除浮动的方法
```tex
1. 方法一: 给父元素设置固定高度
  1.1 扩展性不好（不推荐）
2. 方法二: 在父元素最后增加一个空的块级子元素，并且让它设置clear: both
  2.1 会增加很多无意义的空标签，维护麻烦
  2.2 违反了结构与样式分离的原则（不推荐）
3. 方法三: 给父元素添加一个伪元素
```

```css 
/* 伪元素添加清除浮动 */
.clear_fix::after {
  content: "";
  display: block;
  clear: both;

  visibility: hidden; /* 浏览器兼容性 */
  height: 0;
}

.clear_fix {
  *zoom: 1;
}
```