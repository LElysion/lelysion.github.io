(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{520:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" vue")]),e._v(" "),r("blockquote",[r("p",[e._v("补充一些没什么暖用，但是面试官爱问的内容")])]),e._v(" "),r("h2",{attrs:{id:"虚拟-dom-的好处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的好处"}},[e._v("#")]),e._v(" 虚拟 DOM 的好处")]),e._v(" "),r("p",[e._v("对于开发而言，不用去操作 DOM")]),e._v(" "),r("p",[e._v("它减少了同一时间内的页面多处内容修改所触发的浏览器 reflow 和 repaint 的次数，可能把多个不同的 DOM 操作集中减少到了几次甚至一次，优化了触发浏览器 reflow 和 repaint 的次数")]),e._v(" "),r("p",[e._v("dom 本身在 js 中就是一种数据结构，console.dir(document.body)，在控制台可以看到 body 的数据结构。然而，dom 相关的数据丰富而且复杂，我们其实只关心少数元素的少数属性。建立一个 javascript plain object，非常轻量，用它保存我们真正关心的与 dom 相关的少数数据；对它进行操作，然后对比操作前后的差异，再根据映射关系去操作真正的 dom，无疑能提高性能。这就是虚拟 DOM 的理念")]),e._v(" "),r("h2",{attrs:{id:"vue-diff-算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-diff-算法"}},[e._v("#")]),e._v(" vue diff 算法")]),e._v(" "),r("p",[e._v("比较只会在同层级进行, 不会跨层级比较")]),e._v(" "),r("p",[e._v("设置 key 和不设置 key 的区别：")]),e._v(" "),r("p",[e._v("不设 key，newCh 和 oldCh 只会进行头尾两端的相互比较，设 key 后，除了头尾两端的比较外，还会从用 key 生成的对象 oldKeyToIdx 中查找匹配的节点，所以为节点设置 key 可以更高效的利用 dom。")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/29504639",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何理解虚拟 DOM?"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);