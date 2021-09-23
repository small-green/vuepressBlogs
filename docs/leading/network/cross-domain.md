# 跨域问题
<b>【只要两个不同的ip地址（主机（host）和端口号（port）组成）通信，就会出现跨域问题。】</b>

### 为什么会出现跨域？
<p style="text-indent:2em;">出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器<b>最核心</b>也<b>最基本</b>的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。</p>

### 为什么会跨域？
> 在前端开发中，经常需要到调用第三方服务接口;  
> 现在的项目大多采用前后端分离的模式，前端后端的域名不一致，因此需要解决跨域问题。

### 前端解决浏览器跨域问题

<p style="color:red;">注意：常见的html标签中的“img”、“script”、“form”、“link”、“iframe”标签发起请求时不存在跨域问题的限制。</p>
<h3>1. JSONP</h3>
<p>根据标签发送请求时不存在跨域问题，在“script”标签中发送相关请求</p>

> + 客户端在script标签中发送相关请求，并同时传递一个函数func；
> + 服务器端接收请求后，将准备好的数据data以“func（”+data+")"的形式发送给客户端  
> + 客户端接收到“func（”+data+")"相关处理后，即执行函数func(data)  
> + <b style="color:red;">由于JSONP基于script标签，因而只能处理get请求、无法处理post请求。</b>  

****

<h3>2. CORS跨域资源共享</h3>
<p>CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）,它<b>允许</b>浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。</p>

> + 与JSONP对比更有优势，无请求方式的局限性(post、get均可)  
> + 客户端：与正常非跨域请求相同；  
> + 服务端：设置相关的请求header头部信息(注意需要处理options试探性请求) 

<b>如果还想深入了解cors，戳这里</b>  <https://www.ruanyifeng.com/blog/2016/04/cors.html>

****

<h3>3. http proxy代理跨域(利用Webpack配置)：好用好用！</h3>  
<br/>

```javascript  
    devServer: {
      proxy: {
        '/api': {
          target: 'xxxxxxxxx', //后端接口地址
          ws: true,
          changeOrigin: true, //允许跨域
          pathRewrite: {
            '^/api': '/api' //路径重写
          }
        }
      }
    }
```

<p style="color:green;">优点：只需要在vue.config.js文件中进行相关配置，无需其它编码，操作简单。</p>

<b>vue3.0新增了不少好东西，以后会研究一下，并写一篇笔记记录。</b>

****

<h3>4. nginx反向代理,有了自己的服务器之后就开始要用了~</h3>  
<p style="color:red;">客户端发送的请求不是直接到达目的服务器，而是到达部署在目的服务器端的代理服务器，通过代理服务器转发接口请求，通过一定的转发规则将接口请求转发到目的服务器</p>

```conf 
  server {
    listen       8787;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   C:\book\book-vue;
        index  index.html index.htm;
    }
    location /api/ {
        proxy_pass http://39.101.165.253:8000;
    }
}
```

<b>此配置在nginx.conf文件下添加</b>

<h4 style="color:red">why叫反向代理，而不叫正向呢？</h4>
<p><b>正向代理：</b>代理服务器代理的是客户端。例如找一个代理服务器访问Google，客户端明确地指定要访问的目的服务器，而目的服务器并不知道客户端来源，在正向代理中客户端信息是被隐藏的。</p>
<p><b>反向代理：</b>代理服务器代理的是目的服务器，代理服务器与目的服务器同属一个环境。发送请求的客户端是明确的，但请求具体由哪台服务器处理并不明确，且代理服务器对外透明，客户端并不知道自己访问的是代理服务器，在反向代理中服务端被隐藏。</p>