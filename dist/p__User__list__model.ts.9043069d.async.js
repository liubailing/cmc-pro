(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{BqDR:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUser=s;var n=r(a("sy1d"));function s(e){var t=e.current,a=e.pageSize,r=void 0===a?10:a;return(0,n.default)("/manage/user/list.do",{method:"POST",data:{pageNum:t,pageSize:r}})}},zkOM:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mK77")),s=r(a("Ico4")),u=a("BqDR"),i={namespace:"user",state:{userList:[],loading:!1,pagination:{current:1,total:0}},effects:{getUserList:s.default.mark(function e(t,a){var r,n,i,o,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,i=a.put,e.next=4,i({type:"setLoading"});case 4:return o=r,o||(o={current:1,pageSize:10}),e.next=8,n(u.fetchUser,o);case 8:if(c=e.sent,0!==c.status){e.next=12;break}return e.next=12,i({type:"setUserList",payload:c.data});case 12:case"end":return e.stop()}},e)})},reducers:{setUserList:function(e,t){var a=t.payload,r=a.list,n=a.prePage,s=a.total;return{loading:!1,userList:r,pagination:{current:n+1,total:s}}},setLoading:function(e){return(0,n.default)({},e,{loading:!0})}}},o=i;t.default=o}}]);