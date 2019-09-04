(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{957:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return i});n(12),n(4),n(5),n(3),n(7),n(6),n(9);var a=n(92),r=n(954);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/use-async.mdx"}});var c={_frontmatter:l},o=r.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,b({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"useasync"},"useAsync"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useAsync")," hook is used to call an asynchronous function within a component."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"import { useAsync } from 'lib-react-hooks';\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-js"}),"const Component = () => {\n  const request = useAsync(async () => {\n    const response = await fetch('https://api.example.com/users/123');\n    return response.json();\n  });\n\n  return (\n    <div>\n      {request.complete ? (\n        <p>{`Name: ${request.data.name}`}</p>\n      ) : (\n        <p>Loading...</p>\n      )}\n    </div>\n  );\n};\n")),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Prop"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Optional"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Default"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"fn"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"function")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"no"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Async function to call.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"context"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"object")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"yes"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Optional context to bind ",Object(a.b)("inlineCode",{parentName:"td"},"fn")," to.")))),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"Returns an object with the following keys:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Key"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"data"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"any")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Data returned from the provided function.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"complete"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Whether or not promise has resolved.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"error"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Whether or not an error occured in the provided function.")))))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/use-async.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-use-async-mdx-cdfc24ba43d05be06e0c.js.map