# 移动端适配

移动端的屏幕尺寸通常是非常繁多的，很多时候我们希望在不同的屏幕尺寸上显示不同的大小，以达到用户体验的效果；
比如我们设置一个100x100的盒子

🟢 在375px的屏幕上显示是100x100;

🟢 在320px的屏幕上显示是90+x90+;

🟢 在414px的屏幕上显示是100+x100+;

其他尺寸也是类似，比如padding、margin、border、left，甚至是font-size等等；

这个时候，我们可能可以想到一些方案来处理尺寸：

☑️ 方案一：百分比设置；

🟢 因为不同属性的百分比值，相对的可能是不同参照物，所以百分比往往很难统一；

🟢 所以百分比在移动端适配中使用是非常少的；

☑️ rem+动态html的font-size；

☑️ vw/vh单位；

☑️ flex弹性布局；

## rem+动态html的font-size

rem单位是相对于html的font-size来设置的，那么我们需要在不同的屏幕下有不同的尺寸，我们可以动态的修改html的font-size大小；

在 `rem+动态html的font-size` 的适配方案中，需要考虑两个问题：
* 针对不同屏幕，设置不同的font-size;
* 将px转换成rem单位

### 动态设置html的font-size

#### 方案一：媒体查询
可以通过媒体查询来设置不同尺寸范围内的屏幕html的font-size尺寸；

缺点：
1. 我们需要针对不同的屏幕编写大量的媒体查询；
2. 如果实时改变尺寸，不会实时的进行更新；

```css
@media screen and (min-width: 320px) {
  html {
    font-size: 32px
  }
}
@media screen and (min-width: 375px) {
  html {
    font-size: 37.5px
  }
}
@media screen and (min-width: 414px) {
  html {
    font-size: 41.4px
  }
}
```

#### 方案二：js动态计算
```js
// 获取html
const htmlEl = document.documentElement;

function setRemUnit() {
  // 计算html的font-size clientWidth / 10
  const htmlFontSize = htmlEl.clientWidth / 10;

  // 设置html的font-size
  htmlEl.style.fontSize = htmlFontSize + 'px';
}
// 页面初始化计算
setRemUnit();

// 监听屏幕尺寸变化 执行setRemUnit
window.addEventListener('resize',setRemUnit);

// 在同一屏幕尺寸下 监听路由变化时 执行setRemUnit
window.addEventListener('pageshow', funtion (e) {
  if(e.persisted) {
    setRemUnit()
  }
})
```

#### 方案三：lib-flexible库
类似方案二


### 转换px->rem


#### 方案一：手动计算
```tex
例如在375px的设备上，1rem = 37.5px,设置一个100px的盒子，换算过来就是 100 / 37.5 = 2.66667vw
```

#### 方案二：less计算
以375px的屏幕为例
```less
.pxToRem(@px) {
  result: (@px / 37.5 ) * 1rem
}

.box {
  width: .pxToRem(100)[result]
}
```

#### 方案三：postcss-pxtorem
```tex
目前在前端的工程化开发中，我们可以借助于webpack的工具来完成自动的转化；
```

#### 方案四：VsCode插件 px to rem



## vw适配
vw是相对于视口的，1vw = 1/100视口的宽度，这是固定的，我们在用vw适配时只需要将px单位转换成vw即可；

### 方案一：手动换算
```tex
例如在375px的设备上，1vw = 3.75px,设置一个100px的盒子，换算过来就是 100 / 3.75 = 26.6667vw
```

### 方案二：less/scss函数
```less
@vwUnit: 3.75;

.pxToVw(@px) {
  result: ( @px / @vwUnit ) * 1vw;
}

.box {
  width: .pxToVw(100)[result]
}
```

### 方案三：postcss-px-to-viewport-8-plugin


### 方案四：VSCode插件
px to vw 的插件，在编写时自动转化；