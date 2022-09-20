# CSS 动画

## transition 过渡动画
`transition` 将css属性之间的变化进行过度 形成动画效果

transition 可以决定哪些？
  * 哪些属性发生动画
  * 何时开始动画（delay）
  * 持续多久（duration）
  * 如何动画（定义timing function动画效果）
`transition` CSS属性是 `<transition-property>过渡属性名称`，`<transition-duration>过渡动画所需要的时间`,`<transition-timing-function>动画的变化曲线`和 `<transition-delay>动画执行之前的等待时间`<br/><br/>
![transition](/images/transition.png)        

示例
```css
.box {
  width: 200px;
  height: 200px;

  transition: transform 1s ease-in;
}

.box:hover {
  transform: translate(200px)
}
```

## Animation 动画
`Animation` 动画针对的是每一帧元素的变化，可以观察到元素在每一帧的变化过程

`Animation的使用分为两个步骤：`
  * 使用 `keyframes` 定义动画序列（每一帧动画如何执行）
  * 配置动画执行的名称，持续时间，动画曲线，延迟，执行次数，方向等

Animation 属性

animation: `animation-name`，`animation-duration`, `animation-timing-function`，`animation-delay`，`animation-iteration-count`，`animation-direction`，`animation-fill-mode`，`animation-play-state`
  * `animation-name`：指定执行哪一个关键帧动画
  * `animation-duration`：指定动画的持续时间
  * `animation-timing-functio`n：指定动画的变化曲线
  * `animation-delay`：指定延迟执行的时间
  * `animation-iteration-count`：指定动画执行的次数，执行infinite表示无限动画
  * `animation-direction`：指定方向，常用值normal和reverse
  * `animation-fill-mode`：执行动画最后保留哪一个值
    * none：回到没有执行动画的位置
    * forwards：动画最后一帧的位置
    * backwards：动画第一帧的位置
  * `animation-play-state`：指定动画运行或者暂停（在JavaScript中使用，用于暂停动画）

示例
```css
.box {
  width: 200px;
  height: 200px;

  animation: movAni 2s ease-in 1 
}

@keyframes movAni {
  0% {
    transform: translate(0,0)
  }

  33% {
    transform: translate(0,200px)
  }

  66% {
    transform: translate(400px,200px)
  }

  100% {
    transform: translate(200px,0)
  }

}
```

## transition <code style='background: #f1f1f1;color:#c7254e;border-radius:4px;'>VS</code> animation

* `transition` 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。`animation` 则是可以定义每一帧的动画；
* `transition` 不能重复执行，除非一再触发动画，`animation` 可以使用 `animation-iteration-count` 多次重复执行动画

* `transition` 需要在特定状态下会触发才能执行，比如某个属性被修改了
