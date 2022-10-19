# Less

Less （Leaner Style Sheets 的缩写） 是一门CSS 扩展语言, 并且兼容CSS
* Less增加了很多相比于CSS更好用的特性;
* 比如定义变量、混入、嵌套、计算等等；
* Less最终需要被编译成CSS运行于浏览器中（包括部署到服务器中）；

## Less的编译
1. node环境，通过npm包下载less环境，使用less工具对代码进行编译；
2. webpack；
3. 通过vscode插件：easy_less
4. 在线编译： https://lesscss.org/less-preview/
5. 引入CDN的less编译代码，对less进行实时的处理；
```html
<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>
```

## Less语法

### Les兼容CSS
* 所以我们可以在Less文件中编写所有的CSS代码；
* 只是将css的扩展名改成了.less结尾而已；
```less
// index.less
.box {
  width: 100px;
  height: 100px;
}

.box p {
  font-size: 14px
}
```

### 变量（Variables）
less定义变量方式：`@变量名: css值`
```less
@mainColor: #f3c258;
@mainFontSize: 12px;

.box {
  background-color: @mainColor;
  font-size: @mainFontSize;
}
```
### 嵌套（Nesting）
> 特殊符号：& 表示当前选择器的父级

### 运算（Operations）
* 在Less中，算术运算符 +、-、*、/ 可以对任何数字、颜色或变量进行运算。
* 算术运算符在加、减或比较之前会进行单位换算，计算的结果以最左侧操作数的单位类型为准；
* 如果单位换算无效或失去意义，则忽略单位
```less
.box {
  font-size:12px;
  width: 100px + 10em;
  // -> width: 110px
}
```


### 混合（Mixins）
在原来的CSS编写过程中，多个选择器中可能会有大量相同的代码，我们希望可以将这些代码进行抽取到一个独立的地方，任何选择器都可以进行复用，在less中提供了混入（Mixins）来帮助我们完成这样的操作；

**💡混合（Mixin）是一种将一组属性从一个规则集（或混入）到另一个规则集的方法**
```less
.white_space {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.box {
  width:100px;
  .white_space()
}

// --> 编译后的 css
.box {
  width:100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
} 
```
另外Mixins还支持传参
```less
.bordered(@borderWidth: 2px, @borderColor: #f00) {
  border: @borderWidth solid @borderColor;
}

.box {
  width: 100px;
  height: 100px;
  .bordered(1px, #0f0)
}

// --> 编译后
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #0f0;
}
```

### 混入（Mixins）和 映射（Maps）
映射相当于js当中的对象（键值对）
```less
.color() {
  primaryColor: #f00;
  infoColor: #0f0;
}

.box {
  width:100px;
  height:100px;
  background: .color()[primaryColor];
}

--> 编译后
.box {
   background: #f00;
}
```

混入和映射结合：混入也可以当做一个自定义函数来使用

弥补less中不能自定义函数的缺陷
```less
.pxToRem(@px) {
  result: ( @px / @htmlFontSize) * 1rem;
}

.box {
  width: .pxToRem(100)[result];
  font-size: .pxToRem(18)[result];
}
```

### extend（继承）
* 和mixins作用类似，用于复用代码；
* 和mixins相比，继承代码最终会转化成并集选择器；
```less
.bordered {
  border: 1px solid #f00;
}

.box {
  width:100px;
  &:extend(.bordered)
}

--> 编译后
.bordered,.box {
  border: 1px solid #f00;
}

.box {
  width:100px;
}
```


### Less内置函数
* Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。
* 内置函数手册：https://less.bootcss.com/functions/


### 作用域
* 在查找一个变量时，首先在本地查找变量和混合（mixins）；
* 如果找不到，则从“父”级作用域继承；

