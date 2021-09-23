# CSS基础

<p style="color:red;">css全称层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言</p>

### 上css图
<br/>
<img src="http://1.117.206.33:4488/markdown/cssBase.png" width="100%">
<center>一图概况css，秒懂秒记住</center>

### css常见的复合属性

<h3>background</h3>

```css
.box{
  background: background-color background-image background-repeat background-attachment background-position/background-size;
  background: 背景色 图片地址 是否重复 是否固定 定位/图片尺寸
}
```
<h3>animation</h3>

```css
.box{
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
  animation: 动画名称 动画时长 动画函数 延迟时间 动画次数 动画方向 动画状态 动画运行或者暂停;
  animation: move 5s linear 0s infinite alternate both running;
}
```
<h3>box-shadow</h3>

```css
.box{
  box-shadow: h-shadow v-shadow blur spread color inset;
  box-shadow: 水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色 阴影类型;
  box-shadow: 2px dashed #000;
}
```
<h3>transition</h3>

```css
.box{
   transition: property duration timing-function delay;
   transition: 过渡属性 过渡时长 过渡效果 过渡延时;
   transition: width 1s linear 0s;
}
```

### css选择器
<p>css选择器有标签、id、类、后代、子元素、交集、并集、链接伪类、兄弟、序、属性、通配符选择器</p>
<h4>后代选择器</h4>

(1)作用在：找到指定标签的所有特定的后代标签, 设置属性

(2)格式

```css
div p {
  color:red;
}
```
<p>注意喇。后代不仅仅是儿子, 也包括孙子/重孙子, 只要最终是放到指定标签中的都是后代，这个要和<b style="color:green;">子元素选择器</b>区分开来</p>
<h4>交集选择器</h4>

(1)仅限于：交集选择器由两个选择器构成，找到的标签必须满足：既有标签一的特点，也有标签二的特点。

(2)格式

```css
div.p {
  color:red;
}
```
<p>注意喇。两个选择器之间不能有空格</p>
<h4>兄弟选择器</h4>

(1)作用于：给指定标签后面紧跟的那个标签设置属性。

(2)格式

```css
img+p {
  color:red;
}
```
<p>注意喇。相邻兄弟选择器必须通过+连接And相邻兄弟选择器只能选中紧跟其后的那个标签, 不能选中被隔开的标签</p>
<h4>序选择器</h4>

(1)作用于：选中指定的任意标签然后设置属性。

(2)格式

1. 同级别第几个
    - :first-child 选中同级别中的第一个标签
    - :last-child 选中同级别中的最后一个标签
    - :nth-child(n) 选中同级别中的第n个标签
    - :nth-last-child(n) 选中同级别中的倒数第n个标签
    - :only-child 选中父元素中唯一的标签

2. 其他用法
    - :nth-child(odd) 选中同级别中的所有奇数
    - :nth-child(even) 选中同级别中的所有偶数
    - :nth-child(xn+y)
        - x和y是用户自定义的, 而n是一个计数器, 从0开始递增

<h4>属性选择器</h4>

(1)作用于：根据指定的属性名称找到对应的标签, 然后设置属性

(2)格式

1. 同级别第几个
    - [attribute]：根据指定的属性名称找到对应的标签
    - [attribute=value]：根据指定的属性值找到对应的标签
    - [attribute^=value]：属性的取值是以什么开头的
    - [attribute$=value]：属性的取值是以什么结尾的
    - [attribute*=value]：属性的取值是否包含某个特定的值的

### CSS三大特性
<h4>继承性</h4>
<p>(1)什么是继承性？</p>
<p>给父元素设置一些属性, 子元素也可以使用, 这个我们就称之为继承性。</p>

<p style="color:red;">take attention</p>  

> + 并不是所有的属性都可以继承, 只有以color/font-/text-/line-开头的属性才可以继承  
> + 在CSS的继承中不仅仅是儿子可以继承, 只要是后代都可以继承  
> + a标签的文字颜色和下划线是不能继承的,h标签的文字大小是不能继承的 

<h4>层叠性</h4>
<p>(1)什么是优先级？</p>
<p>当多个选择器选中同一个标签, 并且给同一个标签设置相同的属性时, 如何层叠就由优先级来确定</p>

1. 如果是间接选中（继承）, 那么就是谁离目标标签比较近就听谁的。
2. 如果都是直接选中, 并且都是同类型的选择器, 那么就是谁写在后面就听谁的
3. 如果都是直接选中, 并且不是相同类型的选择器, 那么就会按照选择器的优先级来层叠（id>类>标签>通配符>继承>浏览器默认）

### 优先级权重

1. 什么是优先级权重？
<p>当多个选择器混合在一起使用时, 我们可以通过计算权重来判断谁的优先级最高</p>

2. 权重的计算规则

> + 首先先计算选择器中有多少个id, id多的选择器优先级最高  
> + 以此类推，计算优先级的顺序
> + 如果id个数一样, 类名个数也一样, 标签名称个数也一样, 那么就不会继续往下计算了, 那么此时谁写在后面听谁的

