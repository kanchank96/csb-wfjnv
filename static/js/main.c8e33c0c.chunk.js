(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(5),n=c.n(s),a=(c(11),c(2)),j=(c(12),c(6)),i=c(4),d=c.n(i),l=c(0),b=function(){var e=Object(r.useState)(),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(r.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:" ID"}),Object(l.jsx)("th",{children:" Name"}),Object(l.jsx)("th",{children:" Email"}),Object(l.jsx)("th",{children:" Password"}),Object(l.jsx)("th",{children:" Role"})]})}),Object(l.jsx)("tbody",{children:c&&c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.username}),Object(l.jsx)("td",{children:e.id>4?"Admin":"Cus"})]})}))})]})},o=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Customer Module"}),Object(l.jsx)("h3",{children:"Admin Module"})]})},h=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),j=Object(a.a)(n,2),i=j[0],d=j[1],h=Object(r.useState)(""),u=Object(a.a)(h,2),O=u[0],x=u[1],m=function(e,t){e.preventDefault();var c=e.target.value;"name"===t?""===c.trim()?s("name required"):c.match(/[a-zA-z]/g)?s(""):s("Letter reuired"):"email"===t?""===c.trim()?d("email required"):c.indexOf("@")&&d("Please add @"):"password"===t&&(""===c.trim()?x("password required"):c.match(/[a-zA-Z1-9@#$%^&*_]/g)&&x("Please add @"))};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"resForm",children:[Object(l.jsxs)("div",{className:"resFormGroup",children:[Object(l.jsx)("label",{children:"Name"}),c?Object(l.jsx)("span",{className:"text-danger mt-2",children:c}):"",Object(l.jsx)("input",{type:"text",placeholder:"Please enter name",onChange:function(e){return m(e,"name")}})]}),Object(l.jsxs)("div",{className:"resFormGroup",children:[Object(l.jsx)("label",{children:"Email"}),i?Object(l.jsx)("span",{className:"text-danger",children:i}):"",Object(l.jsx)("input",{type:"email",placeholder:"Please enter email",onChange:function(e){return m(e,"email")}})]}),Object(l.jsxs)("div",{className:"resFormGroup",children:[Object(l.jsx)("label",{children:"Password"}),O?Object(l.jsx)("span",{className:"text-danger",children:O}):"",Object(l.jsx)("input",{type:"password",placeholder:"Please enter password",onChange:function(e){return m(e,"password")}})]}),Object(l.jsx)("button",{className:"mt-2",children:"Submit"})]}),Object(l.jsx)(b,{}),Object(l.jsx)(o,{})]})};function u(){return Object(l.jsx)("div",{children:Object(l.jsx)(h,{})})}var O=document.getElementById("root");n.a.render(Object(l.jsx)(r.StrictMode,{children:Object(l.jsx)(u,{})}),O)}},[[15,1,2]]]);
//# sourceMappingURL=main.c8e33c0c.chunk.js.map