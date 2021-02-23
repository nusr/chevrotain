(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{397:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"custom-token-patterns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-token-patterns"}},[t._v("#")]),t._v(" Custom Token Patterns")]),t._v(" "),a("h3",{attrs:{id:"tldr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tldr"}},[t._v("#")]),t._v(" TLDR")]),t._v(" "),a("p",[t._v("See: "),a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns.js",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Runnable example")]),a("OutboundLink")],1),t._v(" for quick starting.")]),t._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),a("p",[t._v("Normally a Token's pattern is defined using a JavaScript regular expression:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" IntegerToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("However in some circumstances the capability to provide a custom pattern matching implementation may be required.\nThere are a few use cases in which a custom pattern could be used:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("We want to collect additional properties on the token objects.")]),t._v(" "),a("ul",[a("li",[t._v("See "),a("a",{attrs:{href:"#custom-payloads"}},[t._v("Custom Payloads")]),t._v(" section.")])])]),t._v(" "),a("li",[a("p",[t._v("The token cannot be easily (or at all) be defined using pure regular expressions.")]),t._v(" "),a("ul",[a("li",[t._v("When context on previously lexed tokens is needed.\nFor example: "),a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("li",[a("p",[t._v("Workaround possible performance issues/bugs in regExp engines.")])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("A custom pattern has a similar API to the API of the "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExp.prototype.exec"),a("OutboundLink")],1),t._v("\nfunction. But with a small constraint.")]),t._v(" "),a("ul",[a("li",[t._v("A custom pattern should behave as though the RegExp "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky",target:"_blank",rel:"noopener noreferrer"}},[t._v("sticky flag"),a("OutboundLink")],1),t._v(" has been set.\nThis means that attempted matches must begin at the offset argument, "),a("strong",[t._v("not")]),t._v(" at the start of the input.")])]),t._v(" "),a("p",[t._v("The basic syntax for supplying a custom pattern is defined by the "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_1/interfaces/icustompattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICustomPattern"),a("OutboundLink")],1),t._v(" interface.\nExample:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matchInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" endOffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" startOffset\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0-9 digits")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    endOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endOffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" startOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" matchedString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// according to the RegExp.prototype.exec API the first item in the returned array must be the whole matched string.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("matchedString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" matchInteger "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional property that will enable optimizations in the lexer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See: https://chevrotain.io/documentation/7_1_1/interfaces/itokenconfig.html#start_chars_hint")]),t._v("\n  start_chars_hint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Using an Object literal with only a single property is still a little verbose so an even more concise syntax is also supported:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pattern is passed the matcher function directly.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntegerToken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" matchInteger "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"lexing-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lexing-context"}},[t._v("#")]),t._v(" Lexing Context")]),t._v(" "),a("p",[t._v("A custom token matcher has two optional arguments which allows accessing the current lexing context.\nThis context can be used to allow or disallow lexing certain Token Types depending\non the previously lexed tokens.")]),t._v(" "),a("p",[t._v("Lets expand the previous example to only allow lexing integers if the previous token was not an identifier (contrived example).")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tokenMatcher "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chevrotain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matchInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" matchedTokens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastMatchedToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("last")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matchedTokens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An Integer may not follow an Identifier")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tokenMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastMatchedToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No match, must return null to conform with the RegExp.prototype.exec signature")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rest of the code from the example above...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("A larger and non contrived example can seen here: "),a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lexing Python like indentation using Chevrotain"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("It is important to note that The matchedTokens and groups arguments match the token and groups properties of the tokenize output ("),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_1/interfaces/ilexingresult.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ILexingResult"),a("OutboundLink")],1),t._v(").\nThese arguments are the current state of the lexing result so even if the lexer has performed error recovery any tokens found\nin those arguments are still guaranteed to be in the final result.")]),t._v(" "),a("h2",{attrs:{id:"custom-payloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-payloads"}},[t._v("#")]),t._v(" Custom Payloads")]),t._v(" "),a("p",[t._v("Sometimes we want to collect additional properties on an IToken object, for example:")]),t._v(" "),a("ul",[a("li",[t._v("Save RegExp capturing groups on the token object.")]),t._v(" "),a("li",[t._v("Subsets of the matched text, e.g: strip away the quotes from string literals.")]),t._v(" "),a("li",[t._v("Computed values from the matched text, e.g: Integer values of Date parts (day/month/year).")])]),t._v(" "),a("p",[t._v("This can be done by attaching a "),a("strong",[t._v("payload")]),t._v(" property to our custom token matcher returned value,\nfor example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We define the regExp only **once** (outside) to avoid performance issues.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stringLiteralPattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/"(?:[^\\\\"]|\\\\(?:[bfnrtv"\\\\/]|u[0-9a-fA-F]{4}))*"/y')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matchStringLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using 'y' sticky flag (Note it is not supported on IE11...)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky")]),t._v("\n  stringLiteralPattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" startOffset\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that just because we are using a custom token pattern")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Does not mean we cannot implement it using JavaScript Regular Expressions...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" execResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stringLiteralPattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("execResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fullMatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" execResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compute the payload")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" matchWithOutQuotes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fullMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attach the payload")]),t._v("\n    execResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matchWithOutQuotes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" execResult\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StringLiteral "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StringLiteral"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" matchStringLiteral"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom patterns should explicitly specify the line_breaks option.")]),t._v("\n  line_breaks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// When we lex a StringLiteral text a "payload" property will now exist on the resulting token object.')]),t._v("\n")])])]),a("p",[t._v("Note:")]),t._v(" "),a("ul",[a("li",[t._v("A custom pattern may be implemented using Regular Expressions, these concepts are "),a("strong",[t._v("not mutually exclusive")]),t._v(".")]),t._v(" "),a("li",[t._v("The payload property may be "),a("strong",[t._v("anything")]),t._v(" e.g:\n"),a("ul",[a("li",[t._v("A single value (as in the example above).")]),t._v(" "),a("li",[t._v("A JavaScript object with multiple properties.")]),t._v(" "),a("li",[t._v("Capturing groups from a regExp exec method's results.")]),t._v(" "),a("li",[t._v('The "groups" property of an regExp exec method\'s result (If '),a("a",{attrs:{href:"https://github.com/tc39/proposal-regexp-named-groups",target:"_blank",rel:"noopener noreferrer"}},[t._v("Named Capturing Groups are used"),a("OutboundLink")],1),t._v(").")])])])]),t._v(" "),a("p",[t._v("Additional examples can be found [here](See: "),a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns_payloads.js",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Runnable example for custom payloads")]),a("OutboundLink")],1),t._v(").")])])}),[],!1,null,null,null);e.default=n.exports}}]);