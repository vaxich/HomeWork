(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,s){e.exports={blue:"HW4_blue__2LoY4",column:"HW4_column__1Q3zu",testSpanError:"HW4_testSpanError__3GKrD"}},18:function(e,t,s){e.exports={someClass:"Greeting_someClass__3ZMGp",error:"Greeting_error__3Lizh"}},22:function(e,t,s){e.exports={superInput:"SuperInputText_superInput__3Ehx2",errorInput:"SuperInputText_errorInput__2FsIV",error:"SuperInputText_error__ArKij"}},23:function(e,t,s){e.exports={default:"SuperButton_default__3dJO9",red:"SuperButton_red__2lLrg"}},24:function(e,t,s){e.exports={checkbox:"SuperCheckbox_checkbox__YIASF",spanClassName:"SuperCheckbox_spanClassName__1Rz6z"}},27:function(e,t,s){e.exports={App:"App_App__WzZta"}},35:function(e,t,s){},4:function(e,t,s){e.exports={message__background:"Message_message__background__5FbSZ",message__avatar:"Message_message__avatar__2cT9Q",message__right:"Message_message__right__1ER-Z",message__name:"Message_message__name__3g8kf",message__name__alt:"Message_message__name__alt__MuuO-",message__chat:"Message_message__chat__S9WAm",message__message:"Message_message__message__2usUK",message__time:"Message_message__time__256ba",message__time__out:"Message_message__time__out__3m8OG"}},45:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(26),r=s.n(n),i=(s(35),s(27)),j=s.n(i),o=s(10),l=s(3),u=s(0);var b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(u.jsx)("img",{src:"https://klike.net/uploads/posts/2022-03/1648450800_1.jpg",alt:""})]})},d=s(2);var O=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[e.affair.name," ",e.affair.priority,"  ",Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]},e.affair._id)})})};var h=function(e){var t=e.data.map((function(t){return Object(u.jsx)(O,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})};var m=function(){var e=Object(a.useState)([{id:1,title:"\u043c\u043e\u043b\u043e\u043a\u043e",isDone:!0},{id:2,title:"\u0445\u043b\u0435\u0431",isDone:!1},{id:3,title:"\u043f\u0440\u044f\u043d\u0438\u043a\u0438",isDone:!0},{id:4,title:"\u0441\u0438\u0433\u0430\u0440\u0435\u0442\u044b",isDone:!0},{id:5,title:"\u0432\u043a\u0443\u0441\u043d\u044f\u0448\u043a\u0438",isDone:!1}]),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)("All"),r=Object(d.a)(n,2),i=r[0],j=r[1],o=s;"\u041a\u0443\u043f\u043b\u0435\u043d\u043e"===i&&(o=o.filter((function(e){return!0===e.isDone}))),"\u041a\u0443\u043f\u0438\u0442\u044c"===i&&(o=o.filter((function(e){return!1===e.isDone})));var l=function(e){j(e)},b=o.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.isDone}),Object(u.jsx)("span",{children:e.title})," ",Object(u.jsx)("button",{onClick:function(){return function(e){var t=o.filter((function(t){return t.id!==e}));c(t)}(e.id)},children:" x"})," "]})}));return Object(u.jsxs)("div",{children:[b,Object(u.jsx)("button",{onClick:function(){l("All")},children:" \u0412\u0441\u0435 "}),Object(u.jsx)("button",{onClick:function(){l("\u041a\u0443\u043f\u043b\u0435\u043d\u043e")},children:" \u041a\u0443\u043f\u043b\u0435\u043d\u043e "}),Object(u.jsx)("button",{onClick:function(){l("\u041a\u0443\u043f\u0438\u0442\u044c")},children:" \u041d\u0430\u0434\u043e \u043a\u0443\u043f\u0438\u0442\u044c "})]})},_=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(a.useState)(_),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)("all"),r=Object(d.a)(n,2),i=r[0],j=r[1],o=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"low"===e.priority}))}(s,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(h,{data:o,setFilter:j,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!=t}))}(s,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)(m,{}),Object(u.jsx)("hr",{})]})};var p=function(){return Object(u.jsxs)("div",{children:["Junior",Object(u.jsx)(x,{})]})},f=s(19),v=s(18),g=s.n(v),k=function(e){var t=e.name,s=e.setNameCallback,a=e.addUser,c=e.error,n=e.totalUsers,r=g.a.error;return console.log(c),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:s,className:c?r:""}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{onClick:a,children:"add"}),Object(u.jsx)("span",{children:n})]})},N=function(e){var t=e.users,s=e.addUserCallback,c=Object(a.useState)(""),n=Object(d.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)(""),o=Object(d.a)(j,2),l=o[0],b=o[1],O=t.length;return Object(u.jsx)(k,{name:r,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""!==r.trim()?(s(r),b(""),alert("hello   "+r),i("")):b("\u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")},error:l,totalUsers:O})},C=s(46);var S=function(){var e=g.a.error,t=Object(a.useState)(""),s=Object(d.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),j=i[0],o=i[1],l=Object(a.useState)([]),b=Object(d.a)(l,2),O=b[0],h=b[1],m=O.length;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:j,onChange:function(e){o(e.currentTarget.value)},className:c?e:""}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{onClick:function(){""!==j.trim()?(!function(e){var t=[{_id:Object(C.a)(),name:e}].concat(Object(f.a)(O));h(t)}(j),n(""),alert("hello   "+j),o("")):n("\u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(u.jsx)("span",{children:m})]})};var y=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),s=t[0],c=t[1];return console.log(s),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(N,{users:s,addUserCallback:function(e){var t=[{_id:Object(C.a)(),name:e}].concat(Object(f.a)(s));c(t)}}),Object(u.jsx)("hr",{}),Object(u.jsx)(S,{}),Object(u.jsx)("hr",{})]})};var w=function(){return Object(u.jsxs)("div",{children:["JuniorPlus",Object(u.jsx)(y,{})]})},A=s(11),F=s(12),I=s(22),T=s.n(I),E=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var t=e.onChange,s=e.onChangeText,a=e.onKeyPress,c=e.onEnter,n=e.error,r=e.className,i=e.spanClassName,j=Object(F.a)(e,E),o="".concat(n?T.a.error:""," ").concat(i||""),l="".concat(n?T.a.errorInput:""," ").concat(r);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(A.a)({type:"text",onChange:function(e){t&&t(e),s&&s(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},j)),n&&Object(u.jsx)("span",{className:o,children:n})]})},D=s(16),P=s.n(D),H=s(23),J=s.n(H),W=["red","className"],B=function(e){var t=e.red,s=e.className,a=Object(F.a)(e,W),c="".concat(t?J.a.red:J.a.default," ").concat(s);return Object(u.jsx)("button",Object(A.a)({className:c},a))},G=s(24),U=s.n(G),K=["type","onChange","setChecked","checked","className","spanClassName","children"],z=function(e){e.type;var t=e.onChange,s=e.setChecked,a=e.checked,c=e.className,n=(e.spanClassName,e.children),r=Object(F.a)(e,K),i="".concat(U.a.checkbox," ").concat(c||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){t&&t(e),s&&s(e.currentTarget.checked)},className:i,checked:a},r)),n&&Object(u.jsx)("span",{className:U.a.spanClassName,children:n})]})};var L=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),s=t[0],c=t[1],n=s?"":"error",r=function(){n?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(s)},i=Object(a.useState)(!1),j=Object(d.a)(i,2),o=j[0],l=j[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:P.a.column,children:[Object(u.jsx)(M,{value:s,onChangeText:c,onEnter:r,error:n,className:P.a.blue,spanClassName:P.a.blue}),Object(u.jsx)(M,{className:P.a.blue}),Object(u.jsx)(B,{children:"default"}),Object(u.jsx)(B,{red:!0,onClick:r,children:"delete "}),Object(u.jsx)(B,{disabled:!0,children:"disabled"}),Object(u.jsx)(z,{checked:o,setChecked:l,children:"some text "}),Object(u.jsx)(z,{checked:o,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Z=function(){return Object(u.jsxs)("div",{children:["JuniorSuperPlus",Object(u.jsx)(L,{})]})},R=s(4),Y=s.n(R);var q=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:Y.a.message__background,children:[Object(u.jsx)("div",{className:Y.a.__left,children:Object(u.jsx)("img",{className:Y.a.message__avatar,src:e.avatar,alt:""})}),Object(u.jsxs)("div",{className:Y.a.message__right,children:[Object(u.jsxs)("div",{className:Y.a.message__chat,children:[Object(u.jsx)("p",{className:Y.a.message__name,children:e.name}),Object(u.jsx)("p",{className:Y.a.message__message,children:e.message})]}),Object(u.jsx)("div",{className:Y.a.message__time__out,children:Object(u.jsx)("p",{className:Y.a.message__time,children:e.time})})]})]})})};var Q=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:Y.a.message__background,children:[Object(u.jsx)("div",{className:Y.a.__left,children:Object(u.jsx)("img",{className:Y.a.message__avatar,src:e.avatar,alt:""})}),Object(u.jsxs)("div",{className:Y.a.message__right,children:[Object(u.jsxs)("div",{className:Y.a.message__chat,children:[Object(u.jsx)("p",{className:Y.a.message__name__alt,children:e.name}),Object(u.jsx)("p",{className:Y.a.message__message,children:e.message})]}),Object(u.jsx)("div",{className:Y.a.message__time__out,children:Object(u.jsx)("p",{className:Y.a.message__time,children:e.time})})]})]})})},V="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",X="Some Name",$="some text",ee="22:00",te="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",se="Pavel",ae="\u0442\u0443\u0442 \u0442\u0435\u043a\u0441\u0442",ce="23:00";var ne=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(u.jsx)(q,{avatar:V,name:X,message:$,time:ee}),Object(u.jsx)("hr",{}),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",Object(u.jsx)(Q,{avatar:te,name:se,message:ae,time:ce}),Object(u.jsx)("hr",{})]})},re=["autoFocus","onBlur","onEnter","spanProps"],ie=["children","onDoubleClick","className"],je=function(e){e.autoFocus;var t=e.onBlur,s=e.onEnter,c=e.spanProps,n=Object(F.a)(e,re),r=Object(a.useState)(!1),i=Object(d.a)(r,2),j=i[0],o=(i[1],c||{}),l=o.children,b=o.onDoubleClick,O=o.className,h=Object(F.a)(o,ie),m="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(u.jsx)(u.Fragment,{children:j?Object(u.jsx)(M,Object(A.a)({autoFocus:!0,onBlur:function(e){t&&t(e)},onEnter:function(){s&&s()}},n)):Object(u.jsx)("span",Object(A.a)(Object(A.a)({onDoubleClick:function(e){b&&b(e)},className:m},h),{},{children:l||n.value}))})};function oe(e,t){var s=JSON.stringify(t);localStorage.setItem(e,s)}oe("test",{x:"A",y:1});!function(e,t){var s=t,a=localStorage.getItem(e);null!==a&&(s=JSON.parse(a))}("test",{x:"",y:0});var le=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),s=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(je,{value:s,onChangeText:c,spanProps:{children:s?void 0:"enter text..."}})}),Object(u.jsx)(B,{onClick:function(){oe("editable-span-value",s)},children:"save"}),Object(u.jsx)(B,{onClick:function(){},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ue=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ne,{}),Object(u.jsx)(le,{})]})},be="/pre-junior",de="/junior",Oe="/junior-plus",he="/junior-super-plus";var me=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(l.a,{to:be})}}),Object(u.jsx)(l.b,{path:be,render:function(){return Object(u.jsx)(ue,{})}}),Object(u.jsx)(l.b,{path:de,render:function(){return Object(u.jsx)(p,{})}}),Object(u.jsx)(l.b,{path:Oe,render:function(){return Object(u.jsx)(w,{})}}),Object(u.jsx)(l.b,{path:he,render:function(){return Object(u.jsx)(Z,{})}}),Object(u.jsx)(l.b,{render:function(){return Object(u.jsx)(b,{})}})]})})},_e=s(9),xe=s.n(_e);var pe=function(){return Object(u.jsxs)("div",{className:xe.a.header,children:[Object(u.jsx)(o.b,{to:be,className:xe.a.link,activeClassName:xe.a.active,children:" pre-junior "}),Object(u.jsx)(o.b,{to:de,className:xe.a.link,activeClassName:xe.a.active,children:" junior "}),Object(u.jsx)(o.b,{to:Oe,className:xe.a.link,activeClassName:xe.a.active,children:" junior-plus "}),Object(u.jsx)(o.b,{to:he,className:xe.a.link,activeClassName:xe.a.active,children:" junior-super-plus "}),Object(u.jsx)("div",{className:xe.a.block})]})};var fe=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(pe,{}),Object(u.jsx)(me,{})]})})};var ve=function(){return Object(u.jsxs)("div",{className:j.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,s){e.exports={link:"Header_link__2uoyf",active:"Header_active__1JmHq",block:"Header_block__3VPL0",header:"Header_header__3ssIG"}}},[[45,1,2]]]);
//# sourceMappingURL=main.03102800.chunk.js.map