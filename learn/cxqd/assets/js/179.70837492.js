(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{534:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"内容检出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容检出"}},[t._v("#")]),t._v(" 内容检出")]),t._v(" "),e("h2",{attrs:{id:"git-stash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),e("blockquote",[e("p",[t._v("忘记切换分支直接在 master 分支上干活，但是代码还没有提交的补救方式")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前未提交到本地（和服务器）的代码推入到 Git 的栈中：")]),t._v("\n$ git stash\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看状态")]),t._v("\n$ git status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换到干活的分支")]),t._v("\n$ git branch dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还原代码")]),t._v("\n$ git stash apply\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将以前存放的代码应用回来")]),t._v("\ngit stash apply\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pop会删除栈里面的数据")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示stash")]),t._v("\ngit stash list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将你指定版本号为stash@{1}的工作取出来")]),t._v("\ngit stash apply stash@"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ngit stash pop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将栈清空")]),t._v("\ngit stash clear\n")])])]),e("h2",{attrs:{id:"git-checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://git-scm.com/docs/git-checkout#git-checkout-emgitcheckoutemlttree-ishgt--ltpathspecgt82308203",target:"_blank",rel:"noopener noreferrer"}},[t._v("git checkout"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("忘记切换分支，在错误的分支 A 上工作，并且提交了你的代码，现在想切换至正确的分支 B，并把之前在错误分支修改的地方应用到正确的分支上")])]),t._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("// 切到git分支\ngit checkout B\n// 将 A 分支修改的文件检出\ngit checkout A ./somefiles\n")])])]),e("p",[t._v("检出文件")]),t._v(" "),e("p",[e("code",[t._v("git checkout [<tree-ish>][--] <pathspec>")])]),t._v(" "),e("p",[t._v("独立的--参数在 Linux 命令行中指的是：视后面的参数为文件名。当后面跟的是文件名的时候，最好加上独立的--参数，以免有歧义。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("暂存区的文件被检出了，然后覆盖了工作区。")]),t._v(" "),e("p",[t._v("如果你想撤销自己所有的还未提交到暂存区的改动， 那么 "),e("code",[t._v("git checkout -- .")])]),t._v(" "),e("p",[t._v("运行 git checkout 命令作用于文件时，即便覆盖内容与被覆盖内容有冲突，也会直接覆盖，所以这真的是闷声打雷式的 git 命令，一定要抽自己几个耳刮子方可放心食用。")]),t._v(" "),e("h2",{attrs:{id:"git-cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://git-scm.com/docs/git-cherry-pick",target:"_blank",rel:"noopener noreferrer"}},[t._v("git cherry-pick"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("工作中，提交 PR 后，我以为代码已经合进 master 了（但是其实没有）。把本地分支和远程分支都删了。虽然这个 pr 被自动关闭了，但是提交的 commit 信息还在。所以新建一个分支，把几个 cimmit 内容放到这个新的分支上")])]),t._v(" "),e("p",[t._v("Given one or more existing commits, apply the change each one introduces, recording a new commit for each. This requires your "),e("strong",[t._v("working tree to be clean")])]),t._v(" "),e("p",[t._v("有没有发现操作连续 commit 的 git cherry-pick 和 git rebase 的功能已经非常接近了？所以呀，git cherry-pick 也是变基，只不过一边变基一边喂樱桃给你吃。")])])}),[],!1,null,null,null);s.default=r.exports}}]);