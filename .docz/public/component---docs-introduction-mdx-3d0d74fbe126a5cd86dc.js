(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{956:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return l}),t.d(n,"default",function(){return u});t(12),t(4),t(5),t(3),t(7),t(6),t(9);var a=t(92),o=t(954);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/introduction.mdx"}});var i={_frontmatter:l},s=o.a;function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(s,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This library provides a set of general-purpose ",Object(a.b)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"hooks")," for use in\nyour React components."),Object(a.b)("h2",{id:"why-use-hooks"},"Why use hooks?"),Object(a.b)("p",null,"Hooks were introduced in React 16.8, and allow developers to utilize state and other features without needing\nto create class components. As an example, this code:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport { Form, Field, Input } from 'some-ui-library';\n\nclass NewUserForm extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      name: 'John Doe',\n      email: 'john.doe@example.com',\n      age: 25,\n    };\n\n    this.handleNameChange = this.handleNameChange.bind(this);\n    this.handleEmailChange = this.handleNameChange.bind(this);\n    this.handleAgeChange = this.handleAgeChange.bind(this);\n  }\n\n  handleNameChange(e) {\n    this.setState({ name: e.target.value });\n  }\n\n  handleEmailChange(e) {\n    this.setState({ email: e.target.value });\n  }\n\n  handleAgeChange(e) {\n    this.setState({ age: e.target.value });\n  }\n\n  render() {\n    const { name, email, age } = this.state;\n\n    return (\n      <Form>\n        <Field label=\"Name\">\n          <Input value={name} onChange={this.handleNameChange} />\n        </Field>\n        <Field label=\"Email\">\n          <Input value={email} onChange={this.handleEmailChange} />\n        </Field>\n        <Field label=\"Age\">\n          <Input value={age} onChange={this.handleAgeChange} />\n        </Field>\n      </Form>\n    );\n  }\n}\n")),Object(a.b)("p",null,"could become this:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"import React, { useState } from 'react';\nimport { Form, Field, Input } from 'some-ui-library';\n\nconst useInput = (initialValue) => {\n  const [ value, setValue ] = useState(initialValue);\n\n  const handleChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return {\n    value,\n    onChange: handleChange,\n  };\n};\n\nconst NewUserForm = () => {\n  const name = useInput('John Doe');\n  const email = useInput('john.doe@example.com');\n  const age = useInput(25);\n\n  return (\n    <Form>\n      <Field label=\"Name\">\n        <Input {...name} />\n      </Field>\n      <Field label=\"Email\">\n        <Input {...email} />\n      </Field>\n      <Field label=\"Age\">\n        <Input {...age} />\n      </Field>\n    </Form>\n  );\n}\n\nexport default NewUserForm;\n")),Object(a.b)("p",null,"Being able to rip out a lot of the logic and let the component focus on presentation reduces boilerplate, makes the\ncode more readable, and provides many other benefits. For a detailed explanation of the benefits of using hooks,\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=dpw9EHDh2bM"}),"watch these great presentations by Dan Abramov and others from React Conf 2018"),"."))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/introduction.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-introduction-mdx-3d0d74fbe126a5cd86dc.js.map