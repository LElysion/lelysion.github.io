(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{392:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("h2",{attrs:{id:"tl-dr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[t._v("#")]),t._v(" TL;DR")]),t._v(" "),a("p",[a("code",[t._v("iframe,script,image")]),t._v("主要函数利用了 html 里面标签没有跨域的限制（他们仅仅能发送 get 请求），跨域限制是浏览器行为，限制的是脚本， html 标签没有限制。CORS 和 windows.postMessage 则是新提出来的方法，另外也可以利用服务器的转发")]),t._v(" "),a("h2",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),a("p",[t._v("是一种能够向服务器请求额外的数据而无需卸载页面(无刷新)的技术，是对 Asynchronous Javascript + XML 的简写")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请求成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请求失败"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"xmlhttprequest（不能跨域）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest（不能跨域）"}},[t._v("#")]),t._v(" XMLHttpRequest（不能跨域）")]),t._v(" "),a("p",[t._v("属性")]),t._v(" "),a("p",[t._v("readyState（通过 onReadyStateChange 来监听它的变化）")]),t._v(" "),a("ul",[a("li",[t._v("0 UNSENT (未打开) open()方法还未被调用.")]),t._v(" "),a("li",[t._v("1 OPENED (未发送) open()方法已经被调用.")]),t._v(" "),a("li",[t._v("2 HEADERS_RECEIVED (已获取响应头) send()方法已经被调用, 响应头和响应状态已经返回.")]),t._v(" "),a("li",[t._v("3 LOADING (正在下载响应体) 响应体下载中; responseText 中已经获取了部分数据.")]),t._v(" "),a("li",[t._v("4 DONE (请求完成) 整个请求过程已经完毕.")])]),t._v(" "),a("p",[t._v("responseXML：对请求的响应，解析为 XML 并作为 Document 对象返回。")]),t._v(" "),a("p",[t._v("responseText：响应体（不包括头部）")]),t._v(" "),a("p",[t._v("status：由服务器返回的 HTTP 状态代码，如 200 表示成功")]),t._v(" "),a("p",[t._v("statusText：这个属性用名称而不是数字指定了请求的 HTTP 的状态代码。")]),t._v(" "),a("p",[t._v("方法")]),t._v(" "),a("p",[t._v("abort() : 取消当前响应，关闭连接并且结束任何未决的网络活动。\ngetAllResponseHeaders()：把 HTTP 响应头部作为未解析的字符串返回。\ngetResponseHeader()：返回指定的 HTTP 响应头部的值。\nopen()：初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。\nsend()：发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求体。\nsetRequestHeader()：向一个打开但未发送的请求设置或添加一个 HTTP 请求。")]),t._v(" "),a("h2",{attrs:{id:"跨域方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域方法"}},[t._v("#")]),t._v(" 跨域方法")]),t._v(" "),a("p",[t._v("浏览器限制从脚本内发起的跨域 HTTP 请求（也可能是返回结果被浏览器拦截了）")]),t._v(" "),a("p",[t._v("只要协议，域名，端口有任何一个不同，都会被当成一个不同的域，跨域限制是浏览器行为")]),t._v(" "),a("h3",{attrs:{id:"iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),a("p",[t._v("首先需要把发送给 web 服务器的数据编码到 URL 中,然后设置 iframe 的 src 属性为该 URL，服务器能创建一个包含响应内容的 HTML 文档")]),t._v(" "),a("h3",{attrs:{id:"图像-ping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像-ping"}},[t._v("#")]),t._v(" 图像 Ping")]),t._v(" "),a("p",[t._v("image 标签")]),t._v(" "),a("p",[t._v("就是发送一个 get 请求")]),t._v(" "),a("h3",{attrs:{id:"jsonp-json-with-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-json-with-padding"}},[t._v("#")]),t._v(" JSONP( JSON with padding )")]),t._v(" "),a("p",[t._v("动态添加"),a("code",[t._v("<script>")]),t._v("标签来调用服务器提供的 js 脚本")]),t._v(" "),a("p",[t._v("首先要明确的是 JSONP 就是一个 get 请求，请求类型这样:"),a("code",[t._v("http://www.example.net/sample.aspx?callback=mycallback")])]),t._v(" "),a("p",[t._v("如果不是 JSONP，他可能就是返回这样的数据："),a("code",[t._v("{ foo: 'bar' }")])]),t._v(" "),a("p",[t._v("JOSNP 的请求，服务端会获取 url 里面的 callback，把 JSON 放在这个 callback 里面，然后返回类似这样"),a("code",[t._v("mycallback({ foo: 'bar' });")]),t._v("，然后开发者在自己的页面里面定义 mycallback 函数，当这个脚本加载之后，这个函数就会执行")]),t._v(" "),a("p",[t._v("手写一个 JSONP")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suggest_so")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script_el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" word "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"中国"')]),t._v("\nscript_el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://sug.so.360.cn/suggest?word=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script_el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// todo:错误处理 和 超时处理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过监听script元素的load事件来监听请求是否完成，以及给script添加了error事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script_el.onload = function(val) {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   console.log("val", val)')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[t._v("首部字段 "),a("code",[t._v("Access-Control-Allow-Methods")]),t._v(" 表明服务器允许客户端使用 POST, GET 和 OPTIONS 方法发起请求。该字段与 HTTP/1.1 Allow: response header 类似，但仅限于在需要访问控制的场景中使用。")]),t._v(" "),a("p",[t._v("首部字段 "),a("code",[t._v("Access-Control-Allow-Headers")]),t._v(" 表明服务器允许请求中携带字段 X-PINGOTHER 与 Content-Type。与 Access-Control-Allow-Methods 一样，Access-Control-Allow-Headers 的值为逗号分割的列表。")]),t._v(" "),a("p",[t._v("最后，首部字段 "),a("code",[t._v("Access-Control-Max-Age")]),t._v(" 表明该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。请注意，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效。")]),t._v(" "),a("p",[t._v("CORS 需要客户端和服务器同时支持。目前，所有浏览器都支持该机制。")]),t._v(" "),a("p",[t._v("跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。")]),t._v(" "),a("h4",{attrs:{id:"cors-请求如何带上-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-请求如何带上-cookie"}},[t._v("#")]),t._v(" CORS 请求如何带上 cookie")]),t._v(" "),a("blockquote",[a("p",[t._v("默认情况下，跨源请求不提供凭据(cookie、HTTP 认证及客户端 SSL 证明等)\n如果发送的是带凭据的请求，但服务器的相应中没有相关的头部，那么浏览器就不会把相应内容交给 JavaScript,请求就无法得到结果的数据（浏览器得到了，但是我们请求的方法得不到，因为被浏览器拦截了）")])]),t._v(" "),a("p",[t._v("客户端代码，设置 withCredentials 为 true 即可让该跨域请求携带 Cookie。 注意携带的是目标页面所在域的 Cookie。")]),t._v(" "),a("p",[t._v('还需要让目标服务器接受你跨域发送的 cookie，设置 Access-Control-Allow-Credentials 响应头为"true"')]),t._v(" "),a("p",[t._v("PS:如果设置 "),a("code",[t._v("Access-Control-Allow-Origin: *")]),t._v("，不管 withCredentials 有没有设置，cookie 也带不过去")]),t._v(" "),a("h4",{attrs:{id:"cors-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-请求"}},[t._v("#")]),t._v(" cors 请求")]),t._v(" "),a("p",[t._v("cors 的请求分为两类，简单请求（simple request）和非简单请求（not-so-simple request）")]),t._v(" "),a("ul",[a("li",[t._v("简单请求")])]),t._v(" "),a("p",[t._v("简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个 Origin 字段。Origin 字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。")]),t._v(" "),a("ul",[a("li",[t._v("非简单请求")])]),t._v(" "),a("blockquote",[a("p",[t._v("配置 nginx 跨域的时候，要判断浏览器发过来的是不是预检请求，如果是，返回 204")])]),t._v(" "),a("p",[t._v("非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json")]),t._v(" "),a("p",[t._v('"预检"请求用的请求方法是 OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是 Origin，表示请求来自哪个源。除了 Origin 字段，"预检"请求的头信息包括两个特殊字段。')]),t._v(" "),a("h3",{attrs:{id:"window-postmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-postmessage"}},[t._v("#")]),t._v(" window.postMessage()")]),t._v(" "),a("p",[t._v("只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain 设置为相同的值) 时，这两个脚本才能相互通信。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域资源共享 CORS 详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/2067472/what-is-jsonp-and-why-was-it-created",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is JSONP, and why was it created?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);