(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{458:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"引用类型-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用类型-array"}},[t._v("#")]),t._v(" 引用类型 Array")]),t._v(" "),s("h2",{attrs:{id:"检测是否是数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测是否是数组"}},[t._v("#")]),t._v(" 检测是否是数组")]),t._v(" "),s("ul",[s("li",[t._v("instanceof")]),t._v(" "),s("li",[t._v("Array.isArray")]),t._v(" "),s("li",[t._v("Object.prototype.toString.call")])]),t._v(" "),s("h2",{attrs:{id:"对数组本身进行处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对数组本身进行处理"}},[t._v("#")]),t._v(" 对数组本身进行处理")]),t._v(" "),s("ul",[s("li",[t._v("Array.of\n创建数组，传入希望你在数组中包含的值")]),t._v(" "),s("li",[t._v("Array.from 将可迭代对象或类数组对象转变为真正的数组\n可以添加一个映射函数来加工数组")])]),t._v(" "),s("h2",{attrs:{id:"转换方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换方法"}},[t._v("#")]),t._v(" 转换方法")]),t._v(" "),s("ul",[s("li",[t._v("join")]),t._v(" "),s("li",[t._v("toString")]),t._v(" "),s("li",[t._v("toLocaleString")])]),t._v(" "),s("h2",{attrs:{id:"栈方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈方法"}},[t._v("#")]),t._v(" 栈方法")]),t._v(" "),s("ul",[s("li",[t._v("push / pop")])]),t._v(" "),s("h2",{attrs:{id:"队列方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列方法"}},[t._v("#")]),t._v(" 队列方法")]),t._v(" "),s("ul",[s("li",[t._v("unshift / shift")]),t._v(" "),s("li",[t._v("push")])]),t._v(" "),s("h2",{attrs:{id:"重排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重排序"}},[t._v("#")]),t._v(" 重排序")]),t._v(" "),s("ul",[s("li",[t._v("sort")]),t._v(" "),s("li",[t._v("reverse")])]),t._v(" "),s("h2",{attrs:{id:"位置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位置方法"}},[t._v("#")]),t._v(" 位置方法")]),t._v(" "),s("ul",[s("li",[t._v("indexOf / lastIndexOf\n局限：每次只能查找一个值")]),t._v(" "),s("li",[t._v("find / findIndex\n接受两个参数\n第一个是回调函数\n第二个参数是可选参数，用于指定回调函数里面 this 的值")])]),t._v(" "),s("h2",{attrs:{id:"操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作方法"}},[t._v("#")]),t._v(" 操作方法")]),t._v(" "),s("ul",[s("li",[t._v("concat")])]),t._v(" "),s("h3",{attrs:{id:"slice-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slice-方法"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",target:"_blank",rel:"noopener noreferrer"}},[t._v("slice 方法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("将所有"),s("strong",[t._v("可枚举属性")]),t._v("的值从一个或多个源对象复制到目标对象（拷贝过程中将调用源对象的 getter 方法，并在 target 对象上使用 setter 方法实现目标对象的拷贝")]),t._v(" "),s("ul",[s("li",[t._v("splice : "),s("code",[t._v("var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])")])]),t._v(" "),s("li",[t._v("copyWithin\nparam : 该方法开始填充值得索引位置\nparam : 开始复制值得索引位置\nparam : 限制重写值得数量")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",target:"_blank",rel:"noopener noreferrer"}},[t._v("fill"),s("OutboundLink")],1),t._v("\n用指定的值填充一至多个数组元素,快速创建长度为 100，元素为 0 的数组： "),s("code",[t._v("Array(100).fill(0)")]),t._v("\neg : nums.fill(0,1,2) ,将数至 2 下标的元素填充")])]),t._v(" "),s("h2",{attrs:{id:"迭代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代"}},[t._v("#")]),t._v(" 迭代")]),t._v(" "),s("ul",[s("li",[t._v("map : "),s("code",[t._v("create a new array")]),t._v(" with the results of calling a provided function on every element in the calling array")]),t._v(" "),s("li",[t._v("foreach : executes a provided function once for "),s("code",[t._v("each array element")])]),t._v(" "),s("li",[t._v("every : test whether "),s("code",[t._v("all elements")]),t._v(" in the array pass the test implemented by the provided function")]),t._v(" "),s("li",[t._v("some : test whether "),s("code",[t._v("at least")]),t._v(" one element in the array passes the test implemented by the provided function")]),t._v(" "),s("li",[t._v("filter : "),s("code",[t._v("create a new array")]),t._v(" with all elements that pass the test implemented by the provided function")]),t._v(" "),s("li",[t._v("reduce : executes a reducer function (that you provide) on each member of the array resulting in a single output value.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("map 和 forEach 无法跳出循环")]),t._v(" "),s("p",[t._v("解决方法就是使用数组的两个方法 some()与 every()：")]),t._v(" "),s("ol",[s("li",[t._v("some()当内部 return true 时跳出整个循环")]),t._v(" "),s("li",[t._v("every()当内部 return false 时跳出整个循环")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SyntaxError: Illegal break statement")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"归并方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#归并方法"}},[t._v("#")]),t._v(" 归并方法")]),t._v(" "),s("ul",[s("li",[t._v("reduce / reduceRight")])]),t._v(" "),s("h2",{attrs:{id:"数组乱序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组乱序"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/lessfish/underscore-analysis/issues/15",target:"_blank",rel:"noopener noreferrer"}},[t._v("数组乱序"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shuffle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"javascript-怎么快速声明一个数组，长度为-100，元素全是-0？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-怎么快速声明一个数组，长度为-100，元素全是-0？"}},[t._v("#")]),t._v(" JavaScript 怎么快速声明一个数组，长度为 100，元素全是 0？")]),t._v(" "),s("p",[t._v("new Int8Array(100);")]),t._v(" "),s("p",[t._v("// 创建 10 个 undefined 的数组\nArray.from({ length: 10 })")]),t._v(" "),s("h2",{attrs:{id:"range-的左闭右开原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#range-的左闭右开原则"}},[t._v("#")]),t._v(" Range 的左闭右开原则")]),t._v(" "),s("p",[t._v("比如 Array.prototype.slice(begin,end)，包含 begin，不包含 end")]),t._v(" "),s("p",[t._v("这样做的好处如下：")]),t._v(" "),s("ul",[s("li",[t._v("上下界之差等于元素的数量")]),t._v(" "),s("li",[t._v("易于表示两个相邻子序列，一个子序列的上界就是另一个子序列的下界序列")]),t._v(" "),s("li",[t._v("从零（最小自然数）开始计数时，下界的下标不是 -1（非自然数）")]),t._v(" "),s("li",[t._v("表达空集时，不会使得上界小于下界")])]),t._v(" "),s("h2",{attrs:{id:"代码优化小细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码优化小细节"}},[t._v("#")]),t._v(" 代码优化小细节")]),t._v(" "),s("blockquote",[s("p",[t._v("这是我再看 ElementUI 源码看到的")])]),t._v(" "),s("p",[t._v("工作中我们经常使用数组操作，但是众所周知，后端数据不可信。你以为是个数组很可能是个"),s("code",[t._v("null")]),t._v("值，因此我们可以这样写数组操作，eg:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[t._v("#")]),t._v(" foreach")]),t._v(" "),s("p",[t._v("当你使用 foreach 循环数组的时候，如果你此时修改原数组里面的元素")]),t._v(" "),s("ul",[s("li",[t._v("如果是给原数组添加元素，访问不到")]),t._v(" "),s("li",[t._v("如果是给原数组删除元素，也访问不到咯")])]),t._v(" "),s("p",[t._v("The range of elements processed by forEach() is set before the first invocation of callback. Elements that are appended to the array after the call to forEach() begins will not be visited by callback. If the values of existing elements of the array are changed, the value passed to callback will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"查找数组的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找数组的方法"}},[t._v("#")]),t._v(" 查找数组的方法")]),t._v(" "),s("p",[t._v("find 和 findIndex")]),t._v(" "),s("p",[t._v("find 返回符合条件的元素，如果没有的话，则返回 undefined")]),t._v(" "),s("p",[t._v("indexOf 和 findIndex 的区别")]),t._v(" "),s("p",[t._v("findIndex 更加的强大，当你的数组里面的元素是非原始类型的时候，肯定是使用 findIndex")]),t._v(" "),s("p",[t._v("当然数组里面的元素如果是简单类型，当然你可以使用 indexOf")]),t._v(" "),s("h2",{attrs:{id:"洗牌算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#洗牌算法"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?utm_source=caibaojian.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("洗牌算法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("最简单的打散数组的方式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shuffle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("洗牌算法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shuffle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    temporaryValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    randomIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// While there remain elements to shuffle...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" currentIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pick a remaining element...")]),t._v("\n    randomIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" currentIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    currentIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And swap it with the current element.")]),t._v("\n    temporaryValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("currentIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("currentIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("randomIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("randomIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temporaryValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"数组解构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组解构"}},[t._v("#")]),t._v(" 数组解构")]),t._v(" "),s("p",[t._v("这样就拿到数组第三个元素了")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"数组解构-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组解构-2"}},[t._v("#")]),t._v(" 数组解构")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: [1, 2, 3]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: [object Object] {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   0: 1,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   1: 2,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   2: 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);