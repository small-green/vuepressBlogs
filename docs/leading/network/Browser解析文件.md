# 浏览器是如何解析JS的？？？
> 依稀还记得真正学习到html、css、js、jQuery等知识，还是在大三的第一个学期  
> 大学前两年真的是玩着玩着，时间就过去了  
> 当时罗老师对我们真的是进行地狱式训练，连续几周不间断地进行实训，不得不说那时候真的蛮快乐的  
> 那个时候我学习的后端语言还是PHP（是世界上最好的语言），采用的是xampp+phpmyadmin  
> 那时候隐约记得老师和我们说过，浏览器是不能直接脚本语言的，所以现在想写一篇笔记记录下来

### 浏览器的主要组成部分
*** 
<br/>

* <b>用户界面：</b>包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。
* <b>呈现引擎：</b>负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。
* <b>浏览器引擎：</b>在用户界面和呈现引擎之间传送指令。
* <b>网络：</b>用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。
* <b>用户界面后端 ：</b>用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。
* <b>JavaScript 解释器：</b>用于解析和执行 JavaScript 代码。
* <b>数据存储：</b>这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。

<p style="color:red; text-indent:2em;">从浏览器的组成来看，我们可以知道如果browser是不能直接解析js代码的，是要通过js解释器去解析和执行的</p>

### 常见于NODE和CHEOME中的V8引擎
<img src="http://1.117.206.33:4488/markdown/v8.png" width="80%">
<center>V8组成图</center>

***
#### js引擎执行过程
> js引擎的执行过程，主要分为三个阶段:  
> * <b>语法分析</b>  
> * <b>预编译阶段</b>  
> * <b>执行阶段</b>  

<p>下面分析这三个阶段</p>
<h3>语法分析</h3>

> 分析该js脚本代码块的语法是否正确，如果出现不正确，则向外抛出一个语法错误（SyntaxError），停止该js代码块的执行，然后继续查找并加载下一个代码块；如果语法正确，则进入预编译阶段

<h3>预编译阶段</h3>

> js代码块通过语法分析阶段之后，语法都正确的下回进入预编译阶段。  
在分析预编译阶段之前，我们先来了解一下js的运行环境，运行环境主要由三种：
* <b>全局环境</b>---js代码加载完毕后，进入到预编译也就是进入到全局环境  
* <b>函数环境</b>---函数调用的时候，进入到该函数环境，不同的函数，函数环境不同  
* <b>eval环境</b>---不建议使用，存在安全、性能问题    

<h4>参考文档</h4>

<https://www.jianshu.com/p/4ed19f40de0a>



