(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{410:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"formdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formdata"}},[t._v("#")]),t._v(" FormData")]),t._v(" "),s("p",[t._v("起因是因为我要做一个合成水印，并且上传到七牛的需求。我需要把"),s("code",[t._v("canvas")]),t._v("生成的"),s("code",[t._v("blob")]),t._v("上传到七牛。我直接调用的 API，的时候一直报错"),s("code",[t._v("content-type isn't multipart/form-data")]),t._v("，估计要设置一下"),s("code",[t._v("content-type")])]),t._v(" "),s("p",[t._v("搜索一下七牛的官方文档，上面很简单的说：")]),t._v(" "),s("p",[t._v("开发者只要组装一个符合 HTML 文件上传表单规范（参考 RFC1867）的 HTTP 请求，并以 POST 方式向域名 upload.qiniup.com 发起这个请求，即可将指定文件上传到服务端。详细使用方法请参考表单上传 API")]),t._v(" "),s("p",[t._v("怎么组合啊，wtf，这里就需要了解一下前端基础知识，")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"noopener noreferrer"}},[t._v("FormData 官方文档说明"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses "),s("strong",[t._v('the same format a form would use if the encoding type were set to "multipart/form-data"')])]),t._v(" "),s("p",[t._v("它这个说明，可真是太符合我的心意了。用 FormData 来创建与表单格式相同的数据")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qiniu_token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qiniu_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("更让我眼前一亮的是，它自带的一些方法。很强很方便的"),s("code",[t._v("map")]),t._v("方法合集")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列举几个，想看自己去查")]),t._v("\nFormData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFormData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFormData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFormData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFormData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"为啥-submit-要阻止默认事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为啥-submit-要阻止默认事件"}},[t._v("#")]),t._v(" 为啥 submit 要阻止默认事件")]),t._v(" "),s("p",[t._v("表单的默认事件：表单一点击提交按钮(submit)必然跳转页面，如果表单的 action 为空也会跳转到自己的页面，即效果为刷新当前页。")])])}),[],!1,null,null,null);a.default=e.exports}}]);