(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{484:function(e,t,a){"use strict";a.r(t);var o=a(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"组件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件优化"}},[e._v("#")]),e._v(" 组件优化")]),e._v(" "),a("h2",{attrs:{id:"purecomponent-减少组件重新渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent-减少组件重新渲染"}},[e._v("#")]),e._v(" PureComponent 减少组件重新渲染")]),e._v(" "),a("p",[e._v("很基础的使用 PureComponent ，减少组件重新渲染的次数，当然纯组件仅仅是浅比较")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("不要使用内联函数定义")]),e._v(" "),a("p",[e._v("如果用的话，那么每次调用 render 函数都会创建一个新的函数实例")])])]),e._v(" "),a("h2",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[e._v("#")]),e._v(" 懒加载")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('懒加载 import React, { lazy, Suspense } from "react";')]),e._v(" "),a("p",[e._v('const GuestComponent = lazy(() => import("./guestComponent"))')]),e._v(" "),a("p",[e._v("当组件加载不确定的时候，可以这么搞")])])]),e._v(" "),a("p",[e._v("vue 里面有一个 keep-alive 组件，但是 react 没有，也有过一点相关"),a("a",{attrs:{href:"https://github.com/facebook/react/issues/12039",target:"_blank",rel:"noopener noreferrer"}},[e._v("讨论"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("如何实现 keep-alive,两个方法")]),e._v(" "),a("ul",[a("li",[e._v("Keep data cached separately from the component. For example, you can lift state up to an ancestor that doesn't get mounted, or put it in a sideways cache like Redux. We're also working on a first-class API support for this.")]),e._v(" "),a("li",[e._v("Don't unmount the views you want to “keep alive”, just hide them with style display: 'none'.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);