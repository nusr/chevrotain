(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{374:function(t,a,n){"use strict";n.r(a);var s=n(43),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"backtracking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#backtracking"}},[t._v("#")]),t._v(" Backtracking")]),t._v(" "),n("p",[t._v("Chevrotain supports backtracking to resolve ambiguities.\nBacktracking means "),n("strong",[t._v("fully")]),t._v(" trying an alternative instead of using a fixed\ntoken lookahead, this is similar to a DFS versus a BFS.")]),t._v(" "),n("p",[t._v("Backtracking is not automatic and must be "),n("strong",[t._v("explicitly")]),t._v(" invoked.\nThis is because it is inefficient and is mutually exclusive with error recovery.\nIt is strongly recommended to avoid using backtracking if possible.")]),t._v(" "),n("p",[t._v("Backtracking is implemented by using "),n("a",{attrs:{href:"https://chevrotain.io/docs/features/gates.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gates"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v('For example, given the following grammar which is not LL(K), as\nboth the alternatives in "statement" have a potentially infinitely long common prefix.')]),t._v(" "),n("div",{staticClass:"language-antlr extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("statement:\n   longRule1 |\n   longRule2 |\n\nlongRule1:\n   A+ B\n\nlongRule2:\n   A+ C\n")])])]),n("p",[t._v("We can resolve the ambiguity by using backtracking, effectively fully trying out\nthe alternatives (in order) instead of trying to choose one using a limited token lookahead.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RULE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statement"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GATE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BACKTRACK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longRule1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ALT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUBRULE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longRule1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GATE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BACKTRACK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longRule2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ALT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUBRULE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longRule2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("See "),n("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/tree/master/examples/parser/backtracking",target:"_blank",rel:"noopener noreferrer"}},[t._v("executable example"),n("OutboundLink")],1),t._v("\nfor further details.")])])}),[],!1,null,null,null);a.default=e.exports}}]);