(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(9),o=n(2),s=n(3),j=n(5),l=n(4),u=n(0),h=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Budget App"})})},b=function(){return Object(u.jsxs)("h1",{children:[" Hi, you have ",Object(u.jsx)("em",{children:"(comingsoon)"})]})},d=n(8),p=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).initialState={date:"",amount:"",concept:"",type:""},t.state=t.initialState,t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.date,n=t.amount,a=t.concept,c=t.type;return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"date",children:"Date"}),Object(u.jsx)("input",{type:"text",name:"date",id:"date",value:e,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(u.jsx)("input",{type:"text",name:"amount",id:"amount",value:n,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"concept",children:"Concept"}),Object(u.jsx)("input",{type:"text",name:"concept",id:"concept",value:a,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"type",children:"Type"}),Object(u.jsx)("input",{type:"text",name:"type",id:"type",value:c,onChange:this.handleChange}),Object(u.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),n}(a.Component),O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"button",children:"+"}),Object(u.jsx)("button",{className:"button",children:"-"})]})},x=function(){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Date"}),Object(u.jsx)("th",{children:"Amount"}),Object(u.jsx)("th",{children:"Concept"}),Object(u.jsx)("th",{children:"Type"})]})})},m=function(t){var e=t.operationData.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.date}),Object(u.jsx)("td",{children:e.amount}),Object(u.jsx)("td",{children:e.concept}),Object(u.jsx)("td",{children:e.type}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return t.removeOperation(n)},children:"Delete"})})]},n)}));return Object(u.jsx)("tbody",{children:e})},v=function(t){var e=t.operationData,n=t.removeOperation;return Object(u.jsxs)("table",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(m,{operationData:e,removeOperation:n})]})},f=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={operations:[]},t.removeOperation=function(e){var n=t.state.operations;t.setState({operations:n.filter((function(t,n){return n!==e}))})},t.handleSubmit=function(e){t.setState({operations:[].concat(Object(i.a)(t.state.operations),[e])})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.operations;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{}),Object(u.jsx)(b,{}),Object(u.jsx)(O,{}),Object(u.jsx)(p,{handleSubmit:this.handleSubmit}),Object(u.jsx)(v,{operationData:t,removeOperation:this.removeOperation})]})}}]),n}(a.Component);n(15);r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.26b6c6bf.chunk.js.map