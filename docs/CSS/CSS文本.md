# CSS文本

## text-decoration(常用)
文本装饰线
* text-decoration有如下常见取值:
  * none 无装饰线
  * underline 下划线
  * overline 上划线
  * line-through 中划线（删除线）


## text-transform(一般)
Transform单词是使变形/变换(形变);
* text-transform有几个常见的值:
  * capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写
  * uppercase：(大写字母)将每个单词的所有字符变为大写
  * lowercase：(小写字母)将每个单词的所有字符变为小写
  * none：没有任何影响
* 实际操作中用JS操作得更多

## text-indent(一般)
text-indent用于设置第一行内容的缩进

**单位：em(相对于字体大小的)**

## text-align(重要)
描述**行内级（inline-block）**相对于它的块父元素对齐方式
* 常用的值
  * left：左对齐
  * right：右对齐
  * center：正中间显示
  * justify：两端对齐 


## letter-spacing、word-spacing(一般)
letter-spacing、word-spacing分别用于设置字母、单词之间的间距


## 单行省略
需要width 才生效
```css
.text{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 多行省略
```css
.box{
   display: -webkit-box;
   overflow: hidden;
   text-overflow: ellipsis;
   line-clamp: 2;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
}

```


