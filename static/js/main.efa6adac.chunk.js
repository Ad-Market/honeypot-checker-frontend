(this.webpackJsonpemergencywithdraw=this.webpackJsonpemergencywithdraw||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(24),c=n.n(s),i=(n(106),n(40)),o=n.n(i),l=n(57),d=n(79),u=(n(107),n(127)),h=n(130),j=n(126),b=n(125),p=n(128),f=n(17),x=p.a.Search;var v=function(e){var t=e.onStart,n=e.disabled;return Object(f.jsx)(x,{placeholder:"Enter Token Address",allowClear:!0,enterButton:"Start",size:"large",onSearch:t,disabled:n})},O=n(129),g=O.a.Option;var y=function(e){var t=e.onSelect,n=e.disabled;return Object(f.jsxs)(O.a,{defaultValue:"bsc",style:{width:"100%",marginTop:"5px"},onChange:t,disabled:n,children:[Object(f.jsx)(g,{value:"bsc",children:"Binance Smart Chain"}),Object(f.jsx)(g,{value:"poly",children:"Polygon"}),Object(f.jsx)(g,{value:"eth",children:"Ethereum"})]})},w=n(131),k=n(98),m=function(){return function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),e.next=4,fetch("".concat("https://honeypot.api.rugdoc.io/api/honeypotStatus.js","?address=").concat(t,"&chain=").concat(n));case 4:if(200===(r=e.sent).status){e.next=14;break}return e.t0=k.a,e.t1="Check failed with status ".concat(r.status),e.next=10,r.text();case 10:return e.t2=e.sent,e.t3={message:e.t1,description:e.t2},e.t0.open.call(e.t0,e.t3),e.abrupt("return",void 0);case 14:return e.next=16,r.json();case 16:return a=e.sent,e.abrupt("return",a.status);case 20:return e.prev=20,e.t4=e.catch(0),console.error(e.t4),s=e.t4.data,k.a.open({message:"Check failed",description:s}),e.abrupt("return",void 0);case 26:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n){return e.apply(this,arguments)}}()},S=u.a.Text,E={UNKNOWN:"The status of this token is unknown.",OK:"\u2705 Honey pot tests passed. Our program was able to buy and sell it succesfully.\n This however does not guarantee that it is not a honeypot.",NO_PAIRS:"\u26a0\ufe0f Could not find any trading pair for this token on the default router and could thus not test it.",SEVERE_FEE:"\u26a0\ufe0f A severely high trading fee (over 50%) was detected when selling or buying this token.",HIGH_FEE:"\u26a0\ufe0f A high trading fee was detected when selling or buying this token.",MEDIUM_FEE:"\u26a0\ufe0f A trading fee of over 10% was detected when selling or buying this token.",APPROVE_FAILED:"\ud83d\udea8 Failed to approve the token. This is very likely a honeypot.",SWAP_FAILED:"\ud83d\udea8 Failed to sell the token. This is very likely a honeypot."},F=m();var T=function(){var e=Object(r.useState)("bsc"),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),c=Object(d.a)(s,2),i=c[0],u=c[1],p=Object(r.useState)(void 0),x=Object(d.a)(p,2),O=x[0],g=x[1],k=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t&&void 0!==n&&!i){e.next=2;break}return e.abrupt("return");case 2:u(!0),F(t,n).then((function(e){g(e),u(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(h.b,{direction:"vertical",style:{width:"100%"},children:[Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)("div",{style:{width:"180px",marginRight:"5px"},children:Object(f.jsx)(y,{onSelect:m,disabled:i})}),Object(f.jsx)("div",{style:{flexGrow:1},children:Object(f.jsx)(v,{onStart:k,disabled:i})})]}),Object(f.jsxs)(j.a,{title:"Token status",bordered:!1,style:{width:"100%"},children:[Object(f.jsx)(w.a,{style:{fontSize:70,marginBottom:"40px"}}),i?Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{})}):Object(f.jsx)(f.Fragment,{}),void 0===O?Object(f.jsxs)("div",{style:{color:"#6d84a2"},children:[Object(f.jsx)("p",{children:"Please select a token and chain to get started..."}),Object(f.jsx)("p",{}),Object(f.jsx)("p",{children:"This is an experimental service, use at your own risk and make sure to double check all contract interactions."})]}):Object(f.jsx)("div",{children:Object(f.jsx)(S,{code:!0,style:{fontSize:"16px"},children:E[O]})})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),A()}},[[122,1,2]]]);
//# sourceMappingURL=main.efa6adac.chunk.js.map