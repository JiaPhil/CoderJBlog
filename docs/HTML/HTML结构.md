# HTML+CSS

## HTML常见的元素
```html
* p、h
* img、a、iframe
* div、span
* ul、li、ol
* table、thead、tbody、tr、td
```
## HTML结构分析

```html
<!-- 文档声明 -->
<!DOCTYPE html>
  <!-- 根元素-->
  <html lang='zh-CN'>
    <!-- 编写配置信息 -->
    <head>
		<meta chartset='utf-8'>
    <title></title>
    </head>
    <body>
      
    </body>
  </html>
```



### 文档声明（html5）
  * doctype
  * 声明文档类型
  * 声明html版本
  * 省略会出现兼容性问题

### html元素
  * 根元素，其他所有元素都是这个元素的后代
  * lang属性(en,zh-CN)
    * 帮助**语音合成工具**确认要使用的发音；
    * 帮助**翻译工具**确认要使用的翻译规则；
### head元素
  * 规定文档的配置信息（元数据）
  * 常用的设置
    * 网页的编码：meta元素
      * 设置字符编码 chartset
      * ......
    * 网页的标题：title元素
### body元素
  * 网页的具体内容和结构 
  * 包含各种元素
  * 元素的嵌套关系
    * 父子关系
    * 兄弟关系

<!-- ## 补充知识

### 字符实体


### 元素语义化
用正确的元素做正确的事

### 通常h元素和SEO优化有关

### SPA单页面应用 -> 路由


### 搜索引擎爬虫原理 -->