(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("cd49")},"07d0":function(e,t,n){},2148:function(e,t,n){"use strict";n.r(t);n("e790");t["default"]=[{path:"/table",name:"其他船舶设备",component:function(){return n.e("chunk-539e558e").then(n.bind(null,"90fe"))},meta:{auth:!0,title:"其他船舶设备",iocn:"ji",keepAlive:!0}}]},"30f5":function(e,t,n){"use strict";n.r(t);n("e790");t["default"]=[{path:"/home",name:"海水养殖系统",component:function(){return Promise.all([n.e("chunk-1ebdecc2"),n.e("chunk-a09f3ffe")]).then(n.bind(null,"85d4"))},meta:{auth:!0,title:"海水养殖系统",iocn:"yang",keepAlive:!0}}]},"484f":function(e,t,n){"use strict";n("07d0")},"4dfd":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAPElEQVQ4T2NU3vbmPwMVAeOogQyMf/87UhKkGGEIMvCOr+gBcg0dNZABHCmjYUhSChpNNqPJhqQEA1EMAGBheSdZSpGEAAAAAElFTkSuQmCC"},a7ff:function(e,t,n){},aa8b:function(e,t,n){},ac09:function(e,t,n){"use strict";n("c2a5")},af05:function(e,t,n){var c={"./fish.ts":"30f5","./main.ts":"d30b","./table.ts":"2148"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=o,e.exports=a,a.id="af05"},c2a5:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var c=n("7a23");function a(e,t,n,a,o,r){var i=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(i)}n("ac09");const o={};o.render=a;var r=o,i=(n("7fbc"),n("015e"),n("e790"),n("4e83"),n("53ca")),u=n("954b"),s=function(e){return e.keys().reduce((function(t,n){var c=e(n).default;return"object"===Object(i["a"])(c)?t.concat(c):t}),[]).sort((function(e,t){return(e||0)-(t||0)}))},d=s(n("af05"));localStorage.setItem("router",JSON.stringify(d)),console.log(d);var f=[{path:"/",name:"Home",meta:{title:"首页",keepAlive:!0},redirect:"home",component:function(){return n.e("chunk-3b04c8dc").then(n.bind(null,"bb51"))},children:d}],l=Object(u["a"])({history:Object(u["b"])(),routes:f}),p=l,b=n("5502"),m=Object(b["a"])({state:{listData:{1:10}},mutations:{setData:function(e,t){e.listData=t}},actions:{setData:function(e,t){e.commit("setData",t)}},modules:{}}),h=(n("9f29"),n("0c1d"),n("8592")),O=(n("0723"),n("0020")),v=(n("8b88"),n("681b")),j=(n("19ac"),n("cdeb")),A=(n("a71a"),n("b558")),g=(n("e1f5"),n("5efb")),k=n("4dfd"),y=n.n(k),N=Object(c["withScopeId"])("data-v-6feb1f5a");Object(c["pushScopeId"])("data-v-6feb1f5a");var w={class:"card"},S=Object(c["createVNode"])("div",{class:"v10"},[Object(c["createVNode"])("img",{src:y.a,alt:""}),Object(c["createVNode"])("img",{src:y.a,class:"v11",alt:""})],-1),C=Object(c["createVNode"])("div",{class:"bt"},[Object(c["createVNode"])("div",{class:"v10"},[Object(c["createVNode"])("img",{src:y.a,style:{transform:"rotate(-90deg)"},alt:""}),Object(c["createVNode"])("img",{src:y.a,style:{transform:"rotate(-180deg)"},alt:""})])],-1);Object(c["popScopeId"])();var V=N((function(e,t,n,a,o,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",w,[S,Object(c["renderSlot"])(e.$slots,"default"),C])})),B=Object(c["defineComponent"])({props:{style:{type:Object,default:function(){return{width:"300px",height:"400px"}}}}});n("f0e3");B.render=V,B.__scopeId="data-v-6feb1f5a";var E=B,D=Object(c["withScopeId"])("data-v-4e232114");Object(c["pushScopeId"])("data-v-4e232114");var I={class:"police"};Object(c["popScopeId"])();var U=D((function(e,t,n,a,o,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",I,[Object(c["createVNode"])("div",null,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",{class:"po",style:e.style},null,4)])})),x=Object(c["defineComponent"])({props:{title:{type:String,default:"标题"},color:{type:String,default:"red"}},setup:function(e){var t=Object(c["computed"])((function(){return{backgroundColor:"".concat(e.color)}}));return{style:t}}});n("484f");x.render=U,x.__scopeId="data-v-4e232114";var G=x,Q={install:function(e){e.component(g["a"].name,g["a"]),e.component(A["a"].name,A["a"]),e.component(j["a"].name,j["a"]),e.component(v["a"].name,v["a"]),e.component(O["a"].name,O["a"]),e.component(h["a"].name,h["a"]),e.component("Card",E),e.component("Police",G)}},_=Q,M=(n("aa8b"),n("6d5f"),n("96cf"),n("1da1")),P=["/login","/register"];p.beforeEach(function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n,c){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.title=t.meta.title,a=!0,a)if("/login"===t.path)c();else if(o=m.getters.userData&&m.getters.userData.name,o)c();else try{c()}catch(n){m.commit("user/LOGOUT"),c("/login?redirect=".concat(t.path))}else-1!==P.indexOf(t.path)?c():c("/login?redirect=".concat(t.path));case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()),Object(c["createApp"])(r).use(m).use(p).use(_).mount("#app")},d30b:function(e,t,n){"use strict";n.r(t);n("e790");t["default"]=[{path:"/fish",name:"吸鱼泵清污系统",component:function(){return n.e("chunk-b1bd9bdc").then(n.bind(null,"fe22"))},meta:{auth:!0,title:"吸鱼泵清污系统",iocn:"hai",keepAlive:!0}}]},f0e3:function(e,t,n){"use strict";n("a7ff")}},[[0,"runtime","chunk-libs"]]]);