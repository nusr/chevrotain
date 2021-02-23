(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{399:function(a,e,r){"use strict";r.r(e);var t=r(43),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"generating-syntax-diagrams-for-a-grammar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating-syntax-diagrams-for-a-grammar"}},[a._v("#")]),a._v(" Generating Syntax Diagrams for a grammar.")]),a._v(" "),r("p",[a._v("It is often useful to visually inspect a grammar's syntax diagrams during development\nor for documentation purposes.")]),a._v(" "),r("p",[a._v("This document contains instructions on how to generate Syntax railroad diagrams for a Chevrotain\ngrammar using the "),r("a",{attrs:{href:"https://github.com/tabatkins/railroad-diagrams",target:"_blank",rel:"noopener noreferrer"}},[a._v("railroad-diagrams"),r("OutboundLink")],1),a._v("\nlibrary by @tabatkins.")]),a._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://chevrotain.io/diagrams_samples/json.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JSON Syntax diagrams"),r("OutboundLink")],1),a._v(".")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://chevrotain.io/diagrams_samples/css.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS Syntax diagrams"),r("OutboundLink")],1),a._v(".")])]),a._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[a._v("#")]),a._v(" Features")]),a._v(" "),r("ul",[r("li",[a._v("Highlight usages and definitions on mouse hover.")]),a._v(" "),r("li",[a._v("Scroll to definition of non-terminal on mouse click.")])]),a._v(" "),r("h2",{attrs:{id:"instructions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[a._v("#")]),a._v(" Instructions")]),a._v(" "),r("p",[a._v("Chevrotain provides the "),r("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_1/globals.html#createsyntaxdiagramscode",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[a._v("createSyntaxDiagramsCode")]),r("OutboundLink")],1),a._v(" API to generate the "),r("strong",[a._v("html source code")]),a._v("\nof syntax diagrams. This html source code can then be used by an end user in either node.js or a browser:")]),a._v(" "),r("ol",[r("li",[a._v("By writing it directly to the disk in a pure node.js runtime scenario.")]),a._v(" "),r("li",[a._v("By inserting it dynamically into an iframe in a browser scenario.")])]),a._v(" "),r("p",[r("strong",[a._v("Examples:")])]),a._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/diagrams/gen_diagrams.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("Generating syntax diagrams to a file"),r("OutboundLink")],1)]),a._v(" "),r("ul",[r("li",[a._v("Self contained, no need for Chevrotain or the grammar when rendering the html.")])])]),a._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/diagrams/diagrams_browser.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Generating syntax diagrams dynamically into an iframe"),r("OutboundLink")],1)]),a._v(" "),r("ul",[r("li",[a._v("Requires loading "),r("strong",[a._v("both")]),a._v(" Chevrotain and the grammar (and dependencies!) when rendering the html.")])])])]),a._v(" "),r("h2",{attrs:{id:"customization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[a._v("#")]),a._v(" Customization")]),a._v(" "),r("p",[a._v("The "),r("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/tree/master/src/diagrams/render_public.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("logic for generating the HTML"),r("OutboundLink")],1),a._v("\nis quite trivial and the generated code itself is also very simple with a decent separation of concerns.\nThese can be used as a basis for creating more advanced custom scenarios, for example:")]),a._v(" "),r("ul",[r("li",[a._v("Adding a module loader such as system.js/require.js")]),a._v(" "),r("li",[a._v("Dynamically rendering diagrams of a Grammar in an IDE.")]),a._v(" "),r("li",[a._v("Rendering diagrams of a pure EBNF grammar (Not a Chevrotain grammar) as the diagrams are rendered\nusing a serialized format.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);