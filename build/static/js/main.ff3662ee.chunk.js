(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,o){},36:function(e,t,o){"use strict";o.r(t);var c=o(0),a=o(15),n=o.n(a),r=o(12),s=o(4),p=o(10),l=(o(33),o(18)),i=o(9),d=o(1);var u=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.mainReducer.todoItems})),o=Object(c.useState)(""),a=Object(l.a)(o,2),n=a[0],s=a[1],u=function(t){var o;(t.preventDefault(),n)&&(""!==(o=n)&&e({type:"ADD_LIST",payload:{name:o,task:[],percent:0,popUp:!1,popUpColor:"pop-up_color_starting"}}),s(""))},j=function(o,c){var a=t.indexOf(c);switch(o){case"red":t[a].popUpColor="pop-up_color_red",t[a].popUp=!1,e({type:"SWITCH_COLOR",payload:t});break;case"blue":t[a].popUpColor="pop-up_color_blue",t[a].popUp=!1,e({type:"SWITCH_COLOR",payload:t});break;case"starting":t[a].popUpColor="pop-up_color_starting",t[a].popUp=!1,e({type:"SWITCH_COLOR",payload:t});break;case"green":t[a].popUpColor="pop-up_color_green",t[a].popUp=!1,e({type:"SWITCH_COLOR",payload:t})}};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container_block",children:[Object(d.jsx)("h1",{className:"title",children:"To Do List"}),Object(d.jsxs)("form",{className:"form_group",onSubmit:u,children:[Object(d.jsx)("input",{className:"input_group",placeholder:"Name Group",value:n,onChange:function(e){return s(e.target.value)},type:"text"}),Object(d.jsx)("button",{className:"btn_group",onClick:u,children:"Add Group"})]})]}),t.length>0?Object(d.jsx)("div",{children:t.map((function(o,c){return Object(d.jsx)("div",{className:"transparent_block",children:Object(d.jsxs)("div",{className:"link_block ".concat(o.popUpColor),children:[Object(d.jsx)("button",{className:"button_pop-up",onClick:function(){return function(o){var c=t.indexOf(o);t[c].popUp?t[c].popUp=!1:t[c].popUp=!0,e({type:"POP_UP",payload:t})}(o)},children:Object(d.jsx)("div",{className:"pop-up_color ".concat(o.popUpColor)})}),Object(d.jsxs)("div",{className:"pop-up ".concat(!0===t[c].popUp?"popActive":""),children:[Object(d.jsx)("button",{onClick:function(){return j("red",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_red"})}),Object(d.jsx)("button",{onClick:function(){return j("blue",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_blue"})}),Object(d.jsx)("button",{onClick:function(){return j("green",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_green"})}),Object(d.jsx)("button",{onClick:function(){return j("starting",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_starting"})})]}),Object(d.jsx)(r.b,{className:"link",to:"".concat(o.name),children:Object(d.jsx)("div",{className:"link_text",children:o.name})}),Object(d.jsx)("div",{className:"delete_link",children:Object(d.jsx)("button",{onClick:function(){return function(o){var c=Object(i.a)(t),a=c.indexOf(o);c.includes(o)&&c.splice(a,1),e({type:"DELETE_LIST",payload:c})}(o)}})}),Object(d.jsx)("div",{className:"percent_link",children:"".concat(o.percent,"%")})]})},c)}))}):Object(d.jsx)("div",{className:"title_create",children:Object(d.jsx)("h2",{children:"\u0421reate a new list..."})})]})};var j=function(e){var t=e.name,o=e.items,a=Object(p.b)(),n=Object(p.c)((function(e){return e.mainReducer.todoItems})),s=n.indexOf(o),i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],b=u[1],O=function(e){e.preventDefault(),j&&(!function(e){if(""!==e){var t=n.indexOf(o);n[t].task.push({text:e,performance:!1});var c=n[t];a({type:"ADD_TODO",payload:{newTodoItem:c}}),m()}}(j),b(""))},m=function(){for(var e=n[s].task.length,t=100/e,c=0,r=0;r<e;r++)o.task[r].performance&&(c+=1);if(c>0){var p=Math.round(c*t),l=n;l[s].percent=p,a({type:"UPDATE_PERCENT",payload:l})}else{var i=n;i[s].percent=0,a({type:"ZEROING_PERCENT",payload:i})}};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container_todolist",children:[Object(d.jsx)("div",{className:"title_todolist",children:Object(d.jsx)("h1",{children:t})}),Object(d.jsxs)("form",{className:"form_todolist",onSubmit:O,children:[Object(d.jsx)("input",{className:"input_todolist",placeholder:"Task",value:j,onChange:function(e){return b(e.target.value)},type:"text"}),Object(d.jsx)("button",{className:"btn_todolist",onClick:O,children:"+"})]}),Object(d.jsx)("div",{className:"percent_todo",children:"".concat(n[s].percent,"%")}),Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(r.b,{className:"home_link",to:"/",children:"link"})})]}),o.task.map((function(e,t){return Object(d.jsxs)("div",{className:"".concat(e.performance?"block_active":""," task_block"),children:[Object(d.jsx)("div",{className:"".concat(e.performance?"performed":""," task_name"),children:Object(d.jsx)("span",{children:e.text})}),Object(d.jsxs)("div",{className:"task_btn",children:[Object(d.jsx)("button",{className:"task_performed ".concat(e.performance?"active":""),onClick:function(){return function(e){var t=n.indexOf(o),c=o.task.indexOf(e);n[t].task[c].performance?n[t].task[c].performance=!1:n[t].task[c].performance=!0,a({type:"PERFORMED_TODO",payload:n}),m()}(e)}}),Object(d.jsx)("button",{className:"task_delete",onClick:function(){return function(e){var t=o.task.indexOf(e);o.task.splice(t,1),a({type:"DELETE_TODO",payload:o}),m()}(e)}})]})]},t)}))]})};var b=function(){var e=Object(p.c)((function(e){return e.mainReducer.todoItems}));return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(u,{})}),e.map((function(e,t){return Object(d.jsx)(s.a,{path:"/".concat(e.name),children:Object(d.jsx)(j,{name:e.name,items:e})},t)}))]})})})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,37)).then((function(t){var o=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),c(e),a(e),n(e),r(e)}))},m=o(19),h=o(25),f=o.n(h),x=o(3),_={todoItems:[{name:"Work",task:[{text:"buy icecream",performance:!1},{text:"buy cake",performance:!1},{text:"buy meet",performance:!1},{text:"buy chocolate",performance:!1},{text:"buy milk",performance:!1}],percent:0,popUp:!1,popUpColor:"pop-up_color_starting"},{name:"Home",task:[{text:"homework",performance:!1}],percent:0,popUp:!1,popUpColor:"pop-up_color_starting"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});case"DELETE_LIST":return Object(x.a)(Object(x.a)({},e),{},{todoItems:t.payload});case"ADD_TODO":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var o=[],c=0;c<e.todoItems.length-1;c++)o.push(e.todoItems[c]);return e.todoItems=o,e;case"DELETE_TODO":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var a=[],n=0;n<e.todoItems.length-1;n++)a.push(e.todoItems[n]);return e.todoItems=a,e;case"PERFORMED_TODO":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var r=[],s=0;s<e.todoItems.length-1;s++)r.push(e.todoItems[s]);return e.todoItems=r,e;case"UPDATE_PERCENT":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var p=[],l=0;l<e.todoItems.length-1;l++)p.push(e.todoItems[l]);return e.todoItems=p,e;case"ZEROING_PERCENT":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var d=[],u=0;u<e.todoItems.length-1;u++)d.push(e.todoItems[u]);return e.todoItems=d,e;case"POP_UP":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var j=[],b=0;b<e.todoItems.length-1;b++)j.push(e.todoItems[b]);return e.todoItems=j,e;case"SWITCH_COLOR":e=Object(x.a)(Object(x.a)({},e),{},{todoItems:[].concat(Object(i.a)(e.todoItems),[t.payload])});for(var O=[],m=0;m<e.todoItems.length-1;m++)O.push(e.todoItems[m]);return e.todoItems=O,e;default:return e}},I={percents:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ZEROING_PERCENT":case"UPDATE_PERCENT":return Object(x.a)(Object(x.a)({},e),{},{percents:t.payload});default:return e}},y=Object(m.b)({mainReducer:v,todoPercent:k}),N=Object(m.c)(y,Object(m.a)(f.a));n.a.render(Object(d.jsx)(p.a,{store:N,children:Object(d.jsx)(b,{})}),document.getElementById("root")),O()}},[[36,1,2]]]);
//# sourceMappingURL=main.ff3662ee.chunk.js.map