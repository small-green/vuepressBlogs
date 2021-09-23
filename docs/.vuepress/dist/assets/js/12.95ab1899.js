(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[s._v("#")]),s._v(" 跨域问题")]),s._v(" "),a("p",[a("b",[s._v("【只要两个不同的ip地址（主机（host）和端口号（port）组成）通信，就会出现跨域问题。】")])]),s._v(" "),a("h3",{attrs:{id:"为什么会出现跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现跨域"}},[s._v("#")]),s._v(" 为什么会出现跨域？")]),s._v(" "),a("p",{staticStyle:{"text-indent":"2em"}},[s._v("出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器"),a("b",[s._v("最核心")]),s._v("也"),a("b",[s._v("最基本")]),s._v("的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。")]),s._v(" "),a("h3",{attrs:{id:"为什么会跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会跨域"}},[s._v("#")]),s._v(" 为什么会跨域？")]),s._v(" "),a("blockquote",[a("p",[s._v("在前端开发中，经常需要到调用第三方服务接口;"),a("br"),s._v("\n现在的项目大多采用前后端分离的模式，前端后端的域名不一致，因此需要解决跨域问题。")])]),s._v(" "),a("h3",{attrs:{id:"前端解决浏览器跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端解决浏览器跨域问题"}},[s._v("#")]),s._v(" 前端解决浏览器跨域问题")]),s._v(" "),a("p",{staticStyle:{color:"red"}},[s._v("注意：常见的html标签中的“img”、“script”、“form”、“link”、“iframe”标签发起请求时不存在跨域问题的限制。")]),s._v(" "),a("h3",[s._v("1. JSONP")]),s._v(" "),a("p",[s._v("根据标签发送请求时不存在跨域问题，在“script”标签中发送相关请求")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("客户端在script标签中发送相关请求，并同时传递一个函数func；")]),s._v(" "),a("li",[s._v('服务器端接收请求后，将准备好的数据data以“func（”+data+")"的形式发送给客户端')]),s._v(" "),a("li",[s._v('客户端接收到“func（”+data+")"相关处理后，即执行函数func(data)')]),s._v(" "),a("li",[a("b",{staticStyle:{color:"red"}},[s._v("由于JSONP基于script标签，因而只能处理get请求、无法处理post请求。")])])])]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("2. CORS跨域资源共享")]),s._v(" "),a("p",[s._v('CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）,它'),a("b",[s._v("允许")]),s._v("浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("与JSONP对比更有优势，无请求方式的局限性(post、get均可)")]),s._v(" "),a("li",[s._v("客户端：与正常非跨域请求相同；")]),s._v(" "),a("li",[s._v("服务端：设置相关的请求header头部信息(注意需要处理options试探性请求)")])])]),s._v(" "),a("p",[a("b",[s._v("如果还想深入了解cors，戳这里")]),s._v(" "),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.ruanyifeng.com/blog/2016/04/cors.html"),a("OutboundLink")],1)]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("3. http proxy代理跨域(利用Webpack配置)：好用好用！")]),s._v(" "),a("br"),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("    devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxxxxxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后端接口地址")]),s._v("\n          ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许跨域")]),s._v("\n          pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//路径重写")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",{staticStyle:{color:"green"}},[s._v("优点：只需要在vue.config.js文件中进行相关配置，无需其它编码，操作简单。")]),s._v(" "),a("p",[a("b",[s._v("vue3.0新增了不少好东西，以后会研究一下，并写一篇笔记记录。")])]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("4. nginx反向代理,有了自己的服务器之后就开始要用了~")]),s._v(" "),a("p",{staticStyle:{color:"red"}},[s._v("客户端发送的请求不是直接到达目的服务器，而是到达部署在目的服务器端的代理服务器，通过代理服务器转发接口请求，通过一定的转发规则将接口请求转发到目的服务器")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  server {\n    listen       8787;\n    server_name  localhost;\n\n    #charset koi8-r;\n\n    #access_log  logs/host.access.log  main;\n\n    location / {\n        root   C:\\book\\book-vue;\n        index  index.html index.htm;\n    }\n    location /api/ {\n        proxy_pass http://39.101.165.253:8000;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("b",[s._v("此配置在nginx.conf文件下添加")])]),s._v(" "),a("h4",{staticStyle:{color:"red"}},[s._v("why叫反向代理，而不叫正向呢？")]),s._v(" "),a("p",[a("b",[s._v("正向代理：")]),s._v("代理服务器代理的是客户端。例如找一个代理服务器访问Google，客户端明确地指定要访问的目的服务器，而目的服务器并不知道客户端来源，在正向代理中客户端信息是被隐藏的。")]),s._v(" "),a("p",[a("b",[s._v("反向代理：")]),s._v("代理服务器代理的是目的服务器，代理服务器与目的服务器同属一个环境。发送请求的客户端是明确的，但请求具体由哪台服务器处理并不明确，且代理服务器对外透明，客户端并不知道自己访问的是代理服务器，在反向代理中服务端被隐藏。")])])}),[],!1,null,null,null);t.default=e.exports}}]);