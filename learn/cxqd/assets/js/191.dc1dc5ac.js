(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{547:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"拆包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆包"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758",target:"_blank",rel:"noopener noreferrer"}},[t._v("拆包"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("根据 "),a("a",{attrs:{href:"https://webpack.js.org/glossary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack glossary"),a("OutboundLink")],1),t._v("，有两种拆包策略")]),t._v(" "),a("ul",[a("li",[t._v("Bundle Splitting：创建更多的较小的文件，方便缓存")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Bundle")]),t._v(" "),a("p",[t._v("Produced from a number of distinct modules, bundles contain the final versions of source files that have already undergone the loading and compilation process.")])]),t._v(" "),a("ul",[a("li",[t._v("Code Splitting：动态加载代码，用户访问时仅需加载需要的代码")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Chunks")]),t._v(" "),a("p",[t._v("This webpack-specific term is used internally to manage the bundling process. Bundles are composed out of chunks, of which there are several types (e.g. entry and child). Typically, chunks directly correspond with the output bundles however, there are some configurations that don't yield a one-to-one relationship.")])]),t._v(" "),a("h2",{attrs:{id:"bundle-splitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-splitting"}},[t._v("#")]),t._v(" Bundle Splitting")]),t._v(" "),a("p",[t._v("这里主要是和缓存有关，如果你有一个巨大的文件，改动了一行代码，整个文件就必须要更新，但是如果你将他拆分成两个文件，你仅仅需要更新修改了的文件。Bundle Splitting 对于缓存十分的有用")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("from memory cache vs from disk cache")]),t._v(" "),a("p",[t._v("from memory cache 代表使用内存中的缓存，from disk cache 则代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为 memory –> disk。在浏览器中，浏览器会在 js 和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而 css 文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。")])]),t._v(" "),a("h3",{attrs:{id:"防止重复打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止重复打包"}},[t._v("#")]),t._v(" 防止重复打包")]),t._v(" "),a("ul",[a("li",[t._v("启用拆分")])]),t._v(" "),a("p",[t._v("// cacheGroups is where we define rules for how Webpack should group chunks into output files")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("optimization.splitChunks.chunks = 'all'")]),t._v(" "),a("p",[t._v("put everything in node_modules into a file called vendors~main.js")])]),t._v(" "),a("ul",[a("li",[t._v("拆分每个 npm 包")])]),t._v(" "),a("p",[t._v("我们的 vendors.js 遇到了与我们原来的 main.js 文件相同的问题 - 对其中一部分的更改意味着重新下载它的所有部分。\n那么为什么不为每个 npm 包提供单独的文件呢？这很容易做到。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/]/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the name. E.g. node_modules/packageName/not/this/part.js")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or node_modules/packageName")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" packageName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/](.*?)([\\\\/]|$)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm package names are URL-safe, but some servers don't like @ symbols")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("npm.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("packageName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"code-splitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-splitting"}},[t._v("#")]),t._v(" Code Splitting")]),t._v(" "),a("h3",{attrs:{id:"路由懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")]),t._v(" "),a("p",[t._v("比如 vue 路由里面可以使用动态 import 方法引入组件")]),t._v(" "),a("h3",{attrs:{id:"资源预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源预加载"}},[t._v("#")]),t._v(" 资源预加载")]),t._v(" "),a("p",[a("code",[t._v("import(/* webpackPrefetch: true */ 'LoginModal');")])]),t._v(" "),a("p",[t._v("这种写法将会被 webpack 转为"),a("code",[t._v('<link rel="prefetch" href="login-modal-chunk.js">')]),t._v("，并添加到 head 标签里面。")]),t._v(" "),a("ul",[a("li",[t._v("preload 是告诉浏览器页面必定需要的资源，浏览器"),a("strong",[t._v("一定")]),t._v("会加载这些资源,以高优先级加载")]),t._v(" "),a("li",[t._v("prefetch 是告诉浏览器页面可能需要的资源，浏览器"),a("strong",[t._v("不一定")]),t._v("会加载这些资源,以低优先级加载")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a7fb09bf265da4e8e785c38",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 preload 预加载页面资源"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);