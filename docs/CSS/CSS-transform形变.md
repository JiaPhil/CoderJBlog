# transform

对某个元素的形变，包括旋转、缩放、平移或倾斜等

行内非替换元素不能进行transform

## transform语法
transform: transfrom-function 
![transform语法](/images/transform-function.png)

常见的函数transform function有：
  * 平移：translate(x,y)
  * 缩放：scale(x,y)
  * 旋转：rotate(deg)
  * 倾斜：skew(deg,deg)

## 位移 translate
平移：translate(x, y)

* 值类型
  1. 数字
  2. 百分比：参照元素本身

### translate元素水平垂直居中
```css
.box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100px;
  height: 100px;
}
```

## 缩放 scale
* 缩放：scale(x, y)
   
    scale() CSS 函数可改变元素的大小。

* 值类型
  
  数字：

    * 1：保持不变

    * 2：方法两倍
     
    * 0.5：缩小一半

## 旋转 rotate
* 旋转：rotate(angle)

* 值类型
  1. 常用单位deg: 表示旋转角度
  2. 正数为顺时针
  3. 负数为逆时针

* rotate其他单位
  度、百分度(360deg = 400grad)、弧度(rad)、圈数(turn)

## transform-origin 形变原点
transform-origin(x,y) 产生形变的原点

* 值必须是length，percentage，或 left, center, right, top, bottom关键字中的一个
  * left, center, right, top, bottom关键字
  * length：从左上角开始计算
  * 百分比：参考元素本身大小

## 倾斜 skew
skew(x,y)：二维平面上的倾斜转换

* 值类型
  * deg: 倾斜的角度
  * 正数为顺时针
  * 负数为逆时针


## transform设置多个值
示例：
```css
.box {
  width: 200px;
  height: 200px;

  transform: translate(100px,100px) scale(1.2) rotate(45deg) skew(45deg,45deg);
}
```
