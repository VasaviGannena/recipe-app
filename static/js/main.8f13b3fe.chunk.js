(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c.n(r),a=c(9),i=c.n(a),s=(c(22),c(23),c(7)),o=c(40),l=c(36),j=c(37),d=c(38),b=c(39),p=c(1),u=function(e){var t=e.modal,c=e.toggle,n=e.save,a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],O=i[1],m=Object(r.useState)(""),x=Object(s.a)(m,2),g=x[0],h=x[1],f=function(e){var t=e.target,c=t.name,r=t.value;"RecipeName"===c?O(r):h(r)};return Object(p.jsxs)(o.a,{isOpen:t,toggle:c,children:[Object(p.jsx)(l.a,{toggle:c,children:"AddRecipes"}),Object(p.jsx)(j.a,{children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"RecipeName"}),Object(p.jsx)("input",{type:"text",className:"form-control",value:u,onChange:f,name:"RecipeName"})]}),Object(p.jsxs)("div",{className:"from-group",children:[Object(p.jsx)("label",{children:"Ingredients"}),Object(p.jsx)("textarea",{row:"4",className:"form-control",value:g,onChange:f,name:"Ingredients"})]})]})}),Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a,{color:"primary",onClick:function(){var e={};e.name=u,e.ingredient=g,n(e)},children:"Add"})," ",Object(p.jsx)(b.a,{color:"secondary",onClick:c,children:"Cancel"})]})]})},O=function(e){var t=e.modal,c=e.toggle,n=e.UpdateRecipe,a=e.RecipeObj,i=Object(r.useState)(""),u=Object(s.a)(i,2),O=u[0],m=u[1],x=Object(r.useState)(""),g=Object(s.a)(x,2),h=g[0],f=g[1],v=function(e){var t=e.target,c=t.name,r=t.value;"RecipeName"===c?m(r):f(r)};Object(r.useEffect)((function(){m(a.name),f(a.ingredients)}),[n,a]);return Object(p.jsxs)(o.a,{isOpen:t,toggle:c,children:[Object(p.jsx)(l.a,{toggle:c,children:"UpdateRecipes"}),Object(p.jsx)(j.a,{children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"RecipeName"}),Object(p.jsx)("input",{type:"text",className:"form-control",value:O,onChange:v,name:"RecipeName"})]}),Object(p.jsxs)("div",{className:"from-group",children:[Object(p.jsx)("label",{children:"Ingredients"}),Object(p.jsx)("textarea",{row:"4",className:"form-control",value:h,onChange:v,name:"Ingredients"})]})]})}),Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.name=O,t.ingredients=h,n(t)},children:"Update"})," ",Object(p.jsx)(b.a,{color:"secondary",onClick:c,children:"Cancel"})]})]})},m=function(e){var t=e.RecipeObj,c=e.index,n=e.deleteRecipe,a=e.updateListArray,i=Object(r.useState)(!1),o=Object(s.a)(i,2),l=o[0],j=o[1],d=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"}];return Object(p.jsxs)("div",{className:"card-wrapper mr-3",children:[Object(p.jsx)("div",{class:"card-top",style:{"background-color":d[c%5].primaryColor}}),Object(p.jsxs)("div",{className:"recipe-holder",children:[Object(p.jsx)("span",{className:"card-header",style:{"background-color":d[c%5].secondaryColor,"border-radius":"10px"},children:t.name}),Object(p.jsx)("section",{id:"textarea",className:"Ingredients",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{className:"ingredients",children:t.ingredients},t.ingredients)})}),Object(p.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(p.jsx)("i",{class:"far fa-edit mb-3",style:{color:d[c%5].primaryColor,cursor:"pointer"},onClick:function(){return j(!0)}}),Object(p.jsx)("i",{class:"fas fa-trash-alt",style:{color:d[c%5].primaryColor,cursor:"pointer"},onClick:function(){n(c)}})]})]}),Object(p.jsx)(O,{modal:l,toggle:function(){j(!l)},UpdateRecipe:function(e){a(e,c)},RecipeObj:t})]})},x=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)((function(){var e=localStorage.getItem("RecipeList");if(e){var t=JSON.parse(e);l(t)}}),[]);var j=function(e){var t=o;t.splice(e,1),localStorage.setItem("RecipeList",JSON.stringify(t)),l(t),window.location.reload()},d=function(e,t){var c=o;c[t]=e,localStorage.setItem("RecipeList",JSON.stringify(c)),l(c),window.location.reload()};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:" header text-center",children:[Object(p.jsx)("h3",{children:"RecipesList"}),Object(p.jsx)("button",{type:"button",className:"btn btn-dark mt-2",onClick:function(){return n(!0)},children:"AddRecipes"})]}),Object(p.jsx)("div",{className:"recipe-container",children:o&&o.map((function(e,t){return Object(p.jsx)(m,{RecipeObj:e,index:t,deleteRecipe:j,updateListArray:d})}))}),Object(p.jsx)(u,{modal:c,toggle:function(){return n(!c)},save:function(e){var t=o;t.push(e),localStorage.setItem(o,JSON.stringify(t)),l(t),n(!1)}})]})};c(34);var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),h()}},[[35,1,2]]]);
//# sourceMappingURL=main.8f13b3fe.chunk.js.map