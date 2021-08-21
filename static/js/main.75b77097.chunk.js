(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(t,e,o){},36:function(t,e,o){"use strict";o.r(e);var c=o(0),a=o(15),n=o.n(a),s=o(12),r=o(4),p=o(10),l=(o(33),o(18)),i=o(8),d=o(1);var j=function(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.mainReducer.todoItems})),o=Object(c.useState)(""),a=Object(l.a)(o,2),n=a[0],r=a[1],j=function(e){var o;(e.preventDefault(),n)&&(""!==(o=n)&&t({type:"ADD_LIST",payload:{name:o,task:[],percent:0,popUp:!1,popUpColor:"pop-up_color_starting",sorting:!1}}),r(""))},u=function(o,c){var a=e.indexOf(c);switch(o){case"red":e[a].popUpColor="pop-up_color_red",e[a].popUp=!1,t({type:"SWITCH_COLOR",payload:e});break;case"blue":e[a].popUpColor="pop-up_color_blue",e[a].popUp=!1,t({type:"SWITCH_COLOR",payload:e});break;case"starting":e[a].popUpColor="pop-up_color_starting",e[a].popUp=!1,t({type:"SWITCH_COLOR",payload:e});break;case"green":e[a].popUpColor="pop-up_color_green",e[a].popUp=!1,t({type:"SWITCH_COLOR",payload:e})}};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container_block",children:[Object(d.jsx)("h1",{className:"title",children:"To Do List"}),Object(d.jsxs)("form",{className:"form_group",onSubmit:j,children:[Object(d.jsx)("input",{className:"input_group",maxLength:"30",title:"max 30 chars",placeholder:"Name Group",value:n,onChange:function(t){return r(t.target.value)},type:"text"}),Object(d.jsx)("button",{className:"btn_group",onClick:j,children:"Add Group"})]})]}),e.length>0?Object(d.jsx)("div",{children:e.map((function(o,c){return Object(d.jsx)("div",{className:"transparent_block",children:Object(d.jsxs)("div",{className:"link_block ".concat(o.popUpColor),children:[Object(d.jsx)("button",{className:"button_pop-up",onClick:function(){return function(o){var c=e.indexOf(o);e[c].popUp?e[c].popUp=!1:e[c].popUp=!0,t({type:"POP_UP",payload:e})}(o)},children:Object(d.jsx)("div",{className:"pop-up_color ".concat(o.popUpColor)})}),Object(d.jsxs)("div",{className:"pop-up ".concat(!0===e[c].popUp?"popActive":""),children:[Object(d.jsx)("button",{onClick:function(){return u("red",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_red"})}),Object(d.jsx)("button",{onClick:function(){return u("blue",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_blue"})}),Object(d.jsx)("button",{onClick:function(){return u("green",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_green"})}),Object(d.jsx)("button",{onClick:function(){return u("starting",o)},children:Object(d.jsx)("div",{className:"button-pop-up pop-up_color_starting"})})]}),Object(d.jsx)(s.b,{className:"link",to:"".concat(o.name),children:Object(d.jsx)("div",{className:"link_text",children:o.name})}),Object(d.jsx)("div",{className:"delete_link",children:Object(d.jsx)("button",{onClick:function(){return function(o){var c=Object(i.a)(e),a=c.indexOf(o);c.includes(o)&&c.splice(a,1),t({type:"DELETE_LIST",payload:c})}(o)}})}),Object(d.jsx)("div",{className:"percent_link",children:"".concat(o.percent,"%")})]})},c)}))}):Object(d.jsx)("div",{className:"title_create",children:Object(d.jsx)("h2",{children:"\u0421reate a new list..."})})]})};var u=function(t){var e=t.name,o=t.items,a=Object(p.b)(),n=Object(p.c)((function(t){return t.mainReducer.todoItems})),r=n.indexOf(o),i=Object(c.useState)(""),j=Object(l.a)(i,2),u=j[0],m=j[1],b=function(t){t.preventDefault(),u&&(!function(t){if(""!==t){var e=n.indexOf(o);n[e].task.push({text:t,performance:!1});var c=n[e];a({type:"ADD_TODO",payload:{newTodoItem:c}}),O()}}(u),m(""))},O=function(){for(var t=n[r].task.length,e=100/t,c=0,s=0;s<t;s++)o.task[s].performance&&(c+=1);if(c>0){var p=Math.round(c*e),l=n;l[r].percent=p,a({type:"UPDATE_PERCENT",payload:l})}else{var i=n;i[r].percent=0,a({type:"ZEROING_PERCENT",payload:i})}};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container_todolist",children:[Object(d.jsx)("div",{className:"title_todolist",children:Object(d.jsx)("h1",{children:e})}),Object(d.jsxs)("form",{className:"form_todolist",onSubmit:b,children:[Object(d.jsx)("input",{className:"input_todolist",maxLength:"30",placeholder:"Task",title:"max 30 chars",value:u,onChange:function(t){return m(t.target.value)},type:"text"}),Object(d.jsx)("button",{className:"btn_todolist",onClick:b,children:"+"})]}),Object(d.jsxs)("div",{className:"inner_todo",children:[Object(d.jsx)("button",{onClick:function(){n[r].task=[],a({type:"ZEROING_PERCENT",payload:n}),O()},className:"delete_everything",children:"Clear List"}),Object(d.jsx)("button",{onClick:function(){for(var t=[],e=0;e<n[r].task.length;e++)n[r].task[e].performance||t.push(n[r].task[e]);n[r].task=t,a({type:"ZEROING_PERCENT",payload:n})},className:"delete_everything",children:"Clear Completed"}),Object(d.jsx)("div",{className:"percent_todo",children:"".concat(n[r].percent,"%")}),Object(d.jsx)("button",{className:"sorting ".concat(n[r].sorting?"sorting_active":""),onClick:function(){n[r].sorting?n[r].sorting=!1:n[r].sorting=!0,a({type:"SORTING",payload:n}),O()}})]}),Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(s.b,{className:"home_link",to:"/",children:"link"})})]}),Object(d.jsx)("div",{className:"container_items ".concat(n[r].sorting?"container_items_active":""),children:o.task.map((function(t,e){return Object(d.jsxs)("div",{className:"".concat(t.performance?"block_active":""," task_block"),children:[Object(d.jsx)("div",{className:"".concat(t.performance?"performed":""," task_name"),children:Object(d.jsx)("span",{children:t.text})}),Object(d.jsxs)("div",{className:"task_btn",children:[Object(d.jsx)("button",{className:"".concat(t.performance?"active":""," task_performed"),onClick:function(){return function(t){var e=n.indexOf(o),c=o.task.indexOf(t);n[e].task[c].performance?n[e].task[c].performance=!1:n[e].task[c].performance=!0,a({type:"PERFORMED_TODO",payload:n}),O()}(t)}}),Object(d.jsx)("button",{className:"task_delete",onClick:function(){return function(t){var e=o.task.indexOf(t);o.task.splice(e,1),a({type:"DELETE_TODO",payload:o}),O()}(t)}})]})]},e)}))})]})};var m=function(){var t=Object(p.c)((function(t){return t.mainReducer.todoItems}));return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(s.a,{basename:"/To-Do-List",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),t.map((function(t,e){return Object(d.jsx)(r.a,{path:"/".concat(t.name),children:Object(d.jsx)(u,{name:t.name,items:t})},e)}))]})})})},b=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,37)).then((function(e){var o=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;o(t),c(t),a(t),n(t),s(t)}))},O=o(19),h=o(25),f=o.n(h),x=o(3),_={todoItems:[{name:"Work",task:[{text:"buy icecream",performance:!1},{text:"buy cake",performance:!1},{text:"buy meet",performance:!1},{text:"buy chocolate",performance:!1},{text:"buy milk",performance:!1}],percent:0,popUp:!1,popUpColor:"pop-up_color_starting",sorting:!1},{name:"Home",task:[{text:"homework",performance:!1}],percent:0,popUp:!1,popUpColor:"pop-up_color_starting",sorting:!1}]},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":return Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});case"DELETE_LIST":return Object(x.a)(Object(x.a)({},t),{},{todoItems:e.payload});case"ADD_TODO":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var o=[],c=0;c<t.todoItems.length-1;c++)o.push(t.todoItems[c]);return t.todoItems=o,t;case"DELETE_TODO":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var a=[],n=0;n<t.todoItems.length-1;n++)a.push(t.todoItems[n]);return t.todoItems=a,t;case"PERFORMED_TODO":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var s=[],r=0;r<t.todoItems.length-1;r++)s.push(t.todoItems[r]);return t.todoItems=s,t;case"UPDATE_PERCENT":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var p=[],l=0;l<t.todoItems.length-1;l++)p.push(t.todoItems[l]);return t.todoItems=p,t;case"ZEROING_PERCENT":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var d=[],j=0;j<t.todoItems.length-1;j++)d.push(t.todoItems[j]);return t.todoItems=d,t;case"POP_UP":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var u=[],m=0;m<t.todoItems.length-1;m++)u.push(t.todoItems[m]);return t.todoItems=u,t;case"SWITCH_COLOR":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var b=[],O=0;O<t.todoItems.length-1;O++)b.push(t.todoItems[O]);return t.todoItems=b,t;case"DELETE_EVERYTHING":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var h=[],f=0;f<t.todoItems.length-1;f++)h.push(t.todoItems[f]);return t.todoItems=h,t;case"SORTING":t=Object(x.a)(Object(x.a)({},t),{},{todoItems:[].concat(Object(i.a)(t.todoItems),[e.payload])});for(var v=[],I=0;I<t.todoItems.length-1;I++)v.push(t.todoItems[I]);return t.todoItems=v,t;default:return t}},I=Object(O.b)({mainReducer:v}),k=Object(O.c)(I,Object(O.a)(f.a));n.a.render(Object(d.jsx)(p.a,{store:k,children:Object(d.jsx)(m,{})}),document.getElementById("root")),b()}},[[36,1,2]]]);
//# sourceMappingURL=main.75b77097.chunk.js.map