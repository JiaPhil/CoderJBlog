# 认识CSS

## 🏺CSS历史
```tex
1. 最早的网页没有CSS，全是HTML，并创建更多的HTML解决样式问题
2. 1994年，提出css概念，1996年发布CSS1
3. 1996年W3C正式成立CSS工作研究小组，并于1998年发布CSS2
4. 2011年发布CSS3，CSS3开始分“模块”发布
```

## CSS呈现形式
* 外部样式表（link）
* 内部样式表（style）
* 内联样式（style）


## CSS是如何工作的
```tex
1. 浏览器加载HTML
2. 将HTML文件转换成一个DOM
3. 接下来浏览器会载入该HTML相关的大部分资源，比如嵌入页面的图片、视频和CSS样式
4. 浏览器拉取到CSS文件后会解析，根据选择器的不同（比如 element、class、id 等等）把他们放入不同的“桶”中
5. 浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的DOM节点中，并添加节点依赖的样式（这个过程叫做渲染树）
```
![CSS工作流程](/public/images/rendering.svg)

---

###
- [CSS官方文档地址](https://www.w3.org/TR/?tag=css)

- [CSS推荐文档地址](https://developer.mozilla.org/zh-CN/docs/Web/CSS/)

- [由于浏览器版本、CSS版本等问题，查询某些CSS是否可用](https://caniuse.com/)