# HTML元素

## HTML常见元素

### h1-h6元素、p元素
* h1
  常用作标题，属于块元素 独占一行
  ```html
  <h1></h1>
  .......
  ```
  h1-h6 会影响SEO优化
* p
  段落元素，也是独占一行

### img元素
* 属性
  * src:资源地址
    * 绝对路径: 相对于根目录的路径
    * 相对路径: 相对于此文档的路径
  * alt: 显示图片的描述
* 支持格式: png、jpg、svg、webp、Gif

### a元素
* 超文本链接
* 属性
  * href
    ```html
    <!-- 在当前页面打开链接 -->
    <a href='_self'>
    <!-- 在新的页面打开链接 -->
    <a href='_blank'>

    <!-- 
      单独使用_parent、_top 和 _self效果是一样的，
      通常是和iframe元素结合
     --> 
    <!-- _parent.html -->
    <a href='_parent'>
    <!--
      1、在iframe(iframe.html)当前文档嵌套_parent.html
      2、_parent表示在父窗口打开URL
      3、即在iframe窗口打开_parent.html
     -->
    <iframe src='_parent.html'>
    
    <!--
      1、应用于多级iframe嵌套
      2、_top表示在最顶层的窗口打开URL
    -->
    <a href='_top'>
    ```
    * 锚点链接
      href = 元素ID 可作为a元素的锚点链接 可以跳转到元素位置
    * a元素的URL
      * 跳转
      * 下载
      * 指向其他协议：mailto: 邮箱

### iframe元素
实现一个HTML文档中嵌入另一个HTML文档
* 属性
  * src: 链接地址
  * 禁止iframe嵌套访问
    ```tex
    响应头: X-Frame-Options: SAMEORIGIN
    ```
  * 和a元素结合使用（_parent、_top）

### div、span
div和span的出现 是解决HTML元素太多不容易管理的状态，换句话说就是实现HTML结构和CSS样式分离，即div和span元素可以代替HTML中所有元素(前提是与CSS结合)
* div和span都属于盒子模型
* div
  ```tex
    多个div元素在不同行显示
  ```
* span 
  ```tex
  多个span元素在同一行显示
  ```
    


## 不常用的元素
大多不常见的元素被构造出来是因为 早期没有CSS进行样式渲染，所以构造出许多HTML元素代替需要的样式，现在有CSS就可以替代这些元素
```tex
1. strong 内容加粗
2. i 内容倾斜
3. code 显示代码
4. br 换行
```
更多元素可查看 [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

