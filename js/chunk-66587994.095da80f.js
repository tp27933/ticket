(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66587994"],{"04d1":function(t,e,n){var c=n("342f"),a=c.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},1799:function(t,e,n){"use strict";var c=n("7a23"),a={"aria-label":"Page navigation",class:"mt-4 pt-5"},r={class:"pagination justify-content-center"},i=Object(c["n"])("a",{class:"page-link shadow-none",href:"#"},"上一頁",-1),o={class:"page-link shadow-none",href:"#",tabindex:"-1"},l=Object(c["n"])("a",{class:"page-link shadow-none pe-auto",href:"#"},"下一頁",-1);function s(t,e,n,s,u,d){return Object(c["F"])(),Object(c["j"])("nav",a,[Object(c["n"])("ul",r,[Object(c["n"])("li",{class:["page-item",{disabled:!s.page.has_pre}],onClick:e[1]||(e[1]=Object(c["fb"])((function(){return s.prevPage&&s.prevPage.apply(s,arguments)}),["prevent"]))},[i],2),(Object(c["F"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(s.page["total_pages"],(function(t){return Object(c["F"])(),Object(c["j"])("li",{class:["page-item",{active:s.page.current_page===t}],key:"page_".concat(t),onClick:Object(c["fb"])((function(e){return s.onPageClick(t)}),["prevent"])},[Object(c["n"])("a",o,Object(c["Q"])(t),1)],10,["onClick"])})),128)),Object(c["n"])("li",{class:["page-item pe-auto",{disabled:!s.page.has_next}],onClick:e[2]||(e[2]=Object(c["fb"])((function(){return s.nextPage&&s.nextPage.apply(s,arguments)}),["prevent"]))},[l],2)])])}var u={name:"pagination",props:["data"],setup:function(t,e){var n=e.emit,a=Object(c["J"])({});Object(c["bb"])(t.data,(function(t,e){Object.assign(a,t)}));var r=function(t){document.getElementById("app").scrollIntoView(),n("clickPage",t)},i=function(){a.has_next&&n("clickPage",a.current_page+1)},o=function(){a.has_pre&&n("clickPage",a.current_page-1)};return{nextPage:i,page:a,prevPage:o,onPageClick:r}}},d=n("d959"),p=n.n(d);const b=p()(u,[["render",s]]);e["a"]=b},"4e82":function(t,e,n){"use strict";var c=n("23e7"),a=n("1c0b"),r=n("7b0b"),i=n("50c4"),o=n("d039"),l=n("addb"),s=n("a640"),u=n("04d1"),d=n("d998"),p=n("2d00"),b=n("512c"),f=[],j=f.sort,g=o((function(){f.sort(void 0)})),O=o((function(){f.sort(null)})),v=s("sort"),h=!o((function(){if(p)return p<70;if(!(u&&u>3)){if(d)return!0;if(b)return b<603;var t,e,n,c,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(c=0;c<47;c++)f.push({k:e+c,v:n})}for(f.sort((function(t,e){return e.v-t.v})),c=0;c<f.length;c++)e=f[c].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),m=g||!O||!v||!h,y=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}};c({target:"Array",proto:!0,forced:m},{sort:function(t){void 0!==t&&a(t);var e=r(this);if(h)return void 0===t?j.call(e):j.call(e,t);var n,c,o=[],s=i(e.length);for(c=0;c<s;c++)c in e&&o.push(e[c]);o=l(o,y(t)),n=o.length,c=0;while(c<n)e[c]=o[c++];while(c<s)delete e[c++];return e}})},"512c":function(t,e,n){var c=n("342f"),a=c.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},5420:function(t,e,n){},"8ab5":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=n("d976"),r=n.n(a),i=Object(c["gb"])("data-v-60ff160d");Object(c["I"])("data-v-60ff160d");var o={class:"shopping container"},l={class:"row"},s={class:"filter col-md-3",id:"filter"},u={class:"h5 text-start"},d={ref:"category",class:"btn accordion-button bg-white text-gray-800 fs-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseType","aria-expanded":"true"},p=Object(c["m"])(" 種類: "),b={class:"ms-4 d-md-none d-inline-block"},f={id:"collapseType",class:"collapse show"},j={class:"list-unstyled text-center d-flex flex-column"},g={class:"h5 text-start"},O={ref:"price",class:"btn accordion-button bg-white text-gray-800 fs-4 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsePrice"},v=Object(c["m"])(" 價錢: "),h={class:"ms-4 d-md-none d-inline-block"},m={id:"collapsePrice",class:"collapse"},y={class:"list-unstyled text-center d-flex flex-column"},k={class:"h5 text-start"},x={ref:"rate",class:"btn accordion-button bg-white text-gray-800 fs-4 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseRate"},_=Object(c["m"])(" 評價: "),C={class:"ms-4 d-md-none d-inline-block"},w={id:"collapseRate",class:"collapse"},F={class:"list-unstyled text-center d-flex flex-column"},B={key:0,class:"spin-wrap"},P={key:2,class:"card-deck col-md-9"},L={class:"px-5 text-end"},q=Object(c["n"])("span",{class:"pe-2"},"排序: ",-1),I=Object(c["m"])(" 評分 "),Q=Object(c["m"])(" 價格 "),S={class:"row row-cols-1 row-cols-lg-3 row-cols-md-2"},A={key:0,src:r.a,class:"position-absolute",style:{height:"4rem",top:"0",left:"-15px"},alt:"優惠特價中"},D={class:"card-body"},J={class:"card-title text-start text-truncate"},M={class:"card-text text-end pb-2"},N={class:"text-start text-nowrap fs-5"},E=Object(c["m"])(" NTD "),T={key:0},U=Object(c["m"])(" /"),K={class:"rate_container text-start"},G=Object(c["m"])(" 加到購物車 ");Object(c["G"])();var H=i((function(t,e,n,a,r,H){var R=Object(c["N"])("a-spin"),W=Object(c["N"])("a-empty"),V=Object(c["N"])("a-button"),z=Object(c["N"])("font-awesome-icon"),X=Object(c["N"])("Pagination");return Object(c["F"])(),Object(c["j"])("div",o,[Object(c["n"])("section",l,[Object(c["n"])("div",s,[Object(c["n"])("div",u,[Object(c["n"])("button",d,[p,Object(c["n"])("span",b,Object(c["Q"])(t.condition.category),1)],512),Object(c["n"])("div",f,[Object(c["n"])("ul",j,[Object(c["n"])("li",{class:["btn fs-5 rounded-0",{active:0===t.activeBtn.category}],onClick:e[1]||(e[1]=function(t){return a.clearFilter("category")})},"全部",2),(Object(c["F"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(t.categoryBtn,(function(e,n){return Object(c["F"])(),Object(c["j"])("li",{key:"category_".concat(n),class:["btn fs-5",{active:t.activeBtn.category===n+1}],onClick:function(t){return a.setDataFilter("category",e,n+1)}},Object(c["Q"])(e),11,["onClick"])})),128))])])]),Object(c["n"])("div",g,[Object(c["n"])("button",O,[v,Object(c["n"])("span",h,Object(c["Q"])("string"==typeof t.condition.price?"all":t.condition.price[0]+"~"+t.condition.price[1]),1)],512),Object(c["n"])("div",m,[Object(c["n"])("ul",y,[Object(c["n"])("li",{class:["btn fs-5 rounded-0",{active:0===t.activeBtn.price}],onClick:e[2]||(e[2]=function(t){return a.clearFilter("price")})},"全部",2),(Object(c["F"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(t.priceBtn,(function(e,n){return Object(c["F"])(),Object(c["j"])("li",{class:["btn fs-5",{active:t.activeBtn.price===n+1}],key:"price_".concat(n),onClick:function(t){return a.setPriceFilter(e[0],e[1],n+1)}},Object(c["Q"])(e[0])+" ~ "+Object(c["Q"])(e[1]),11,["onClick"])})),128))])])]),Object(c["n"])("div",k,[Object(c["n"])("button",x,[_,Object(c["n"])("span",C,Object(c["Q"])(t.condition.rate),1)],512),Object(c["n"])("div",w,[Object(c["n"])("ul",F,[Object(c["n"])("li",{class:["btn fs-5 rounded-0",{active:0===t.activeBtn.rate}],onClick:e[3]||(e[3]=function(t){return a.clearFilter("rate")})},"全部",2),(Object(c["F"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(t.rateBtn,(function(e,n){return Object(c["F"])(),Object(c["j"])("li",{class:["btn fs-5",{active:t.activeBtn.rate===n+1}],key:"rate_".concat(n),onClick:function(t){return a.setDataFilter("rate",e,n+1)}},Object(c["Q"])(e)+"星",11,["onClick"])})),128))])])])]),a.products.productsLoading?(Object(c["F"])(),Object(c["j"])("div",B,[Object(c["n"])(R)])):Object(c["k"])("",!0),0!==a.products.displayList.length||a.products.productsLoading?(Object(c["F"])(),Object(c["j"])("div",P,[Object(c["n"])("div",L,[q,Object(c["n"])(V,{type:"rate"===a.products.sortBy?"primary":"default",onClick:e[4]||(e[4]=function(t){return a.sortClick("rate")})},{default:i((function(){return[I]})),_:1},8,["type"]),Object(c["n"])(V,{type:"price"===a.products.sortBy?"primary":"default",onClick:e[5]||(e[5]=function(t){return a.sortClick("price")})},{default:i((function(){return[Q]})),_:1},8,["type"])]),Object(c["n"])("div",S,[(Object(c["F"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(a.products.displayList,(function(t,e){return Object(c["F"])(),Object(c["j"])("div",{class:"col mb-4 animate__animated animate__fadeIn d-flex-center",key:"list_".concat(e)},[Object(c["n"])("div",{class:"card mt-5 rounded-lg pointer",onClick:Object(c["fb"])((function(e){return a.onMoreDetailsClick(t)}),["stop"])},[Object(c["n"])("div",{class:"card-img-top custom-cards",style:{background:"url(".concat(t.imageUrl,") no-repeat")}},[t.price!==t.origin_price?(Object(c["F"])(),Object(c["j"])("img",A)):Object(c["k"])("",!0)],4),Object(c["n"])("div",D,[Object(c["n"])("h5",J,Object(c["Q"])(t.title),1),Object(c["n"])("div",M,[Object(c["n"])("p",N,[E,Object(c["n"])("span",{class:["fs-3",{"text-warning":t.price!==t.origin_price}]},Object(c["Q"])(t.price),3),t.price!==t.origin_price?(Object(c["F"])(),Object(c["j"])("span",T,[U,Object(c["n"])("del",null,Object(c["Q"])(t.origin_price),1)])):Object(c["k"])("",!0)]),Object(c["n"])("div",K,[(Object(c["F"])(),Object(c["j"])(c["b"],null,Object(c["L"])(5,(function(e){return Object(c["n"])(z,{icon:"star",class:["start",{active:t.rate>=e}],"aria-hidden":"true",key:"rate_".concat(e)},null,8,["class"])})),64))]),Object(c["n"])("a",{ref:"panel",class:"btn btn-outline-primary p-1 ms-5",onClick:Object(c["fb"])((function(e){return a.onAddCartClick(t,1)}),["stop","self","prevent"]),href:"#"},[a.products.loadingItem===t.id?(Object(c["F"])(),Object(c["j"])(z,{key:0,icon:"spinner",spin:""})):Object(c["k"])("",!0),G],8,["onClick"])])])],8,["onClick"])])})),128))])])):(Object(c["F"])(),Object(c["j"])(W,{key:1,description:"沒有相關條件的展出",class:"empty"}))]),Object(c["n"])(X,{data:a.page,onClickPage:a.getData},null,8,["data","onClickPage"])])})),R=n("5530"),W=n("2909"),V=(n("fb6a"),n("4de4"),n("b64b"),n("4e82"),n("6c02")),z=n("f195"),X=n("61dd"),Y=n("e16f"),Z=n("1799"),$={name:"ShoppingCart",components:{Pagination:Z["a"]},setup:function(){var t=Object(V["c"])();Object(c["C"])((function(){if(t.params.category){console.log("nono");var e=t.params.category;b("category",e,d.categoryBtn.indexOf(e)+1)}a()}));var e=Object(c["J"])({total:[],listAfterFliter:[],displayList:[],loadingItem:"",productsLoading:!1,sortBy:"rate",ascendingSort:!1}),n=Object(c["J"])({total_pages:0,current_page:1,has_pre:"",has_next:""}),a=function(){e.productsLoading=!0,Object(Y["f"])().then((function(t){var c;if(e.productsLoading=!1,t){var a=t.data;(c=e.total).push.apply(c,Object(W["a"])(a.products)),Object.assign(n,a.pagination)}})).catch((function(t){console.log(t)}))},r=Object(V["d"])(),i=function(t){var c,a=n.current_page-1;n.total_pages=Math.ceil(t.length/12);var r=t.slice(12*a,12*a+12);e.displayList=[],(c=e.displayList).push.apply(c,Object(W["a"])(r))},o=Object(c["J"])({select:"all",condition:{category:"all",price:"all",rate:"all"}});Object(c["bb"])([e.total,o.condition],(function(){var t=e.total.filter((function(t){return Object.keys(o.condition).every((function(e){return"all"===o.condition[e]||("price"===e?o.condition.price[1]?o.condition.price[0]<=t.price&&t.price<=o.condition.price[1]:o.condition.price[0]<=t.price:t[e]===o.condition[e])}))}));e.listAfterFliter=t,n.current_page=1,i(t)}),{immediate:!0});var l=function(t){n.current_page=t,i(e.listAfterFliter)},s=function(t){e.loadingItem=t},u=function(t,n){s(t.id),Object(Y["a"])({product_id:t.id,qty:parseInt(n)}).then((function(t){e.loadingItem="",t&&(console.log(z["a"],X["a"]),z["a"].emit("product-cart"),X["a"].fire({icon:"success",title:"商品已加入購物車"}))}))},d=Object(c["J"])({categoryBtn:["藝術","音樂","表演","講座"],priceBtn:[[0,200],[200,500],[500,1e3],[1e3]],rateBtn:[2,3,4,5],activeBtn:{category:0,price:0,rate:0}}),p=function(t,e,n){j("price"),o.condition.price=[],o.condition.price[0]=t,o.condition.price[1]=e,d.activeBtn.price=n},b=function(t,e,n){j(t),o.condition[t]=e,d.activeBtn[t]=n},f=Object(c["J"])({category:null,price:null,rate:null}),j=function(t){var e=document.documentElement.clientWidth||document.body.clientHeight;e<=641&&(console.log(f[t]),f[t].click())},g=function(t){j(t),o.condition[t]="all",d.activeBtn[t]=0},O=function(t){j(t),e.ascendingSort?e.total.sort((function(e,n){return e[t]-n[t]})):e.total.sort((function(e,n){return n[t]-e[t]})),e.sortBy=t,e.ascendingSort=!e.ascendingSort,n.current_page=1},v=function(t){r.push({name:"ItemDetail",query:{id:t.id}})},h=Object(c["K"])(!1);return Object(R["a"])(Object(R["a"])(Object(R["a"])(Object(R["a"])({show:h,sortClick:O,filterBtn:d,setDataFilter:b,filterPage:i,clearFilter:g,setPriceFilter:p},Object(c["U"])(d)),Object(c["U"])(o)),Object(c["U"])(f)),{},{SwitchLoadnigStatus:s,getData:l,products:e,onMoreDetailsClick:v,onAddCartClick:u,page:n})}},tt=(n("9f6a"),n("d959")),et=n.n(tt);const nt=et()($,[["render",H],["__scopeId","data-v-60ff160d"]]);e["default"]=nt},"9f6a":function(t,e,n){"use strict";n("5420")},addb:function(t,e){var n=Math.floor,c=function(t,e){var i=t.length,o=n(i/2);return i<8?a(t,e):r(c(t.slice(0,o),e),c(t.slice(o),e),e)},a=function(t,e){var n,c,a=t.length,r=1;while(r<a){c=r,n=t[r];while(c&&e(t[c-1],n)>0)t[c]=t[--c];c!==r++&&(t[c]=n)}return t},r=function(t,e,n){var c=t.length,a=e.length,r=0,i=0,o=[];while(r<c||i<a)r<c&&i<a?o.push(n(t[r],e[i])<=0?t[r++]:e[i++]):o.push(r<c?t[r++]:e[i++]);return o};t.exports=c},d976:function(t,e,n){t.exports=n.p+"img/sale_tag.6b7a301f.png"},d998:function(t,e,n){var c=n("342f");t.exports=/MSIE|Trident/.test(c)},e16f:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"h",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"k",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"j",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return j}));n("99af");var c=n("7804"),a="tp27933";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"get",url:"api/".concat(e,"/products/all")})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"get",url:"api/".concat(e,"/products"),params:{page:t}})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"get",url:"api/".concat(e,"/product/").concat(t)})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"post",url:"api/".concat(e,"/cart"),data:{data:t},self_loading:!0})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"put",url:"api/".concat(e,"/cart/").concat(t.product_id),data:{data:t}})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return c["a"].request({method:"get",url:"api/".concat(t,"/cart")})}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"delete",url:"api/".concat(e,"/cart/").concat(t)})}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return c["a"].request({method:"delete",url:"api/".concat(t,"/carts")})}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"post",url:"api/".concat(e,"/order"),data:{data:t}})}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"get",url:"api/".concat(e,"/order/").concat(t)})}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c["a"].request({method:"post",url:"api/".concat(e,"/pay/").concat(t)})}},f195:function(t,e,n){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,n){var c=t.get(e);c?c.push(n):t.set(e,[n])},off:function(e,n){var c=t.get(e);c&&(n?c.splice(c.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var c=t.get(e);c&&c.slice().map((function(t){t(n)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,n)}))}}};e["a"]=c()}}]);
//# sourceMappingURL=chunk-66587994.095da80f.js.map