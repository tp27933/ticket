(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0ce676"],{"0ca5":function(e,t,n){},1799:function(e,t,n){"use strict";var a=n("7a23"),c={"aria-label":"Page navigation",class:"mt-4 pt-5"},i={class:"pagination justify-content-center"},r=Object(a["n"])("a",{class:"page-link shadow-none",href:"#"},"上一頁",-1),l={class:"page-link shadow-none",href:"#",tabindex:"-1"},o=Object(a["n"])("a",{class:"page-link shadow-none pe-auto",href:"#"},"下一頁",-1);function s(e,t,n,s,u,b){return Object(a["F"])(),Object(a["j"])("nav",c,[Object(a["n"])("ul",i,[Object(a["n"])("li",{class:["page-item",{disabled:!s.page.has_pre}],onClick:t[1]||(t[1]=Object(a["fb"])((function(){return s.prevPage&&s.prevPage.apply(s,arguments)}),["prevent"]))},[r],2),(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(s.page["total_pages"],(function(e){return Object(a["F"])(),Object(a["j"])("li",{class:["page-item",{active:s.page.current_page===e}],key:"page_".concat(e),onClick:Object(a["fb"])((function(t){return s.onPageClick(e)}),["prevent"])},[Object(a["n"])("a",l,Object(a["Q"])(e),1)],10,["onClick"])})),128)),Object(a["n"])("li",{class:["page-item pe-auto",{disabled:!s.page.has_next}],onClick:t[2]||(t[2]=Object(a["fb"])((function(){return s.nextPage&&s.nextPage.apply(s,arguments)}),["prevent"]))},[o],2)])])}var u={name:"pagination",props:["data"],setup:function(e,t){var n=t.emit,c=Object(a["J"])({});Object(a["bb"])(e.data,(function(e,t){Object.assign(c,e)}));var i=function(e){document.getElementById("app").scrollIntoView(),n("clickPage",e)},r=function(){c.has_next&&n("clickPage",c.current_page+1)},l=function(){c.has_pre&&n("clickPage",c.current_page-1)};return{nextPage:r,page:c,prevPage:l,onPageClick:i}}},b=n("d959"),d=n.n(b);const p=d()(u,[["render",s]]);t["a"]=p},2246:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["gb"])("data-v-bfe0fdd4");Object(a["I"])("data-v-bfe0fdd4");var i={class:"container py-4"},r={class:"d-flex justify-content-center mb-4"},l=Object(a["n"])("h1",null,"商品列表",-1),o={key:0,class:"spin-wrap"},s={key:1,class:"table-responsive"},u={class:"table text-nowrap"},b={class:"align-middle"},d={class:"align-middle"},p={class:"align-middle"},j={class:"align-middle"},O={class:"align-middle"},f={class:"align-middle"},m={class:"edit_btns align-middle "};Object(a["G"])();var g=c((function(e,t,n,c,g,v){var A=Object(a["N"])("a-spin"),h=Object(a["N"])("EdditPanel"),y=Object(a["N"])("Pagination");return Object(a["F"])(),Object(a["j"])(a["b"],null,[Object(a["n"])("div",i,[Object(a["n"])("div",r,[l,Object(a["n"])("button",{type:"button",class:"btn btn-primary mb-auto ms-4",onClick:t[1]||(t[1]=function(e){return c.onEditProductClick("add")})}," 新增產品 ")]),c.product.loading?(Object(a["F"])(),Object(a["j"])("div",o,[Object(a["n"])(A)])):(Object(a["F"])(),Object(a["j"])("div",s,[Object(a["n"])("table",u,[Object(a["n"])("thead",null,[Object(a["n"])("tr",null,[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(c.header,(function(e,t){return Object(a["F"])(),Object(a["j"])("th",{key:"header_".concat(t)},Object(a["Q"])(e),1)})),128))])]),Object(a["n"])("tbody",null,[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(c.product.list,(function(e,t){return Object(a["F"])(),Object(a["j"])("tr",{key:"list_".concat(t)},[Object(a["n"])("td",b,[Object(a["n"])("img",{alt:e.title,src:e.imageUrl,style:{width:"6vw"}},null,8,["alt","src"])]),Object(a["n"])("td",d,Object(a["Q"])(e.title),1),Object(a["n"])("td",p,Object(a["Q"])(e.origin_price),1),Object(a["n"])("td",j,Object(a["Q"])(e.price),1),Object(a["n"])("td",O,Object(a["Q"])(e.category),1),Object(a["n"])("td",f,[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(e.rate,(function(e){return Object(a["F"])(),Object(a["j"])("i",{class:"fa fa-star ","aria-hidden":"true",key:"rate_".concat(e)})})),128)),Object(a["m"])(" "+Object(a["Q"])(e.rate||"尚未評價")+" ",1),Object(a["eb"])(Object(a["n"])("span",null,"星",512),[[a["Z"],e.rate]])]),Object(a["n"])("td",{class:[{inactive:1!==e.is_enabled},"align-middle"]},Object(a["Q"])(1===e.is_enabled?"啟用":"不啟用"),3),Object(a["n"])("td",m,[Object(a["n"])("button",{type:"button",class:"btn btn-outline-dark me-1",onClick:function(t){return c.onEditProductClick("edit",e)}}," 編輯 ",8,["onClick"]),Object(a["n"])("button",{type:"button",class:"btn btn-outline-danger me-1",onClick:function(t){return c.onDeletProductClick(e)}}," 刪除 ",8,["onClick"])])])})),128))])])]))]),Object(a["n"])(h,{ref:"panel",type:c.panelType,list:c.product,onGetData:c.getData},null,8,["type","list","onGetData"]),Object(a["n"])(y,{data:c.page,onClickPage:c.getData},null,8,["data","onClickPage"])],64)})),v=(n("d81d"),n("b64b"),n("764c")),A=n("61dd"),h=n("1799"),y=(n("b0c0"),n("aa49")),k=n.n(y),w=Object(a["gb"])("data-v-ce162888");Object(a["I"])("data-v-ce162888");var C={class:"editpopup bg-white"},x={class:"d-flex"},P={class:"img-part"},_=Object(a["n"])("label",{for:"avatar"},"主要圖片",-1),F={class:"position-relative main-pic-wrap"},D={key:1,src:k.a,alt:"預設圖片",class:"main-pic"},U=Object(a["n"])("span",{class:"text"},"點擊移除",-1),J={href:"javascript:;",class:"file btn btn-primary p-1 m-2"},V=Object(a["m"])("+ 選擇檔案 "),Q=Object(a["n"])("label",{class:"pr-3 h5",for:"rate"},"評價星級(點擊選擇)",-1),I={class:"text-right"},T=Object(a["n"])("span",{class:"text-left pr-3 h5",style:{"line-height":"38px"}},"活動日期: ",-1),L={class:" d-flex flex-column flex-sm-row justify-start items-center"},R={class:"position-relative flex-grow-1"},S=Object(a["n"])("span",{class:"flex-shrink-0 m-2"},[Object(a["n"])("svg",{class:"w-4 h-4 stroke-current text-gray-600",viewBox:"0 0 24 24"},[Object(a["n"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})])],-1),E={class:"position-relative flex-grow-1"},K={class:"form-item-active w-100 pt-3"},N=Object(a["n"])("label",{for:"active",class:"pl-3 h5"},"是否啟用",-1),B={class:"w-100 text-right"},M=Object(a["n"])("button",{type:"submit",class:"btn btn-primary"},"確認",-1);Object(a["G"])();var X=w((function(e,t,n,c,i,r){var l=Object(a["N"])("font-awesome-icon"),o=Object(a["N"])("v-date-picker"),s=Object(a["N"])("a-drawer");return Object(a["F"])(),Object(a["j"])(s,{title:c.translate[n.type]+"產品",placement:"right",visible:c.visible,"onUpdate:visible":t[9]||(t[9]=function(e){return c.visible=e}),width:"80%","after-visible-change":e.afterVisibleChange},{default:w((function(){return[Object(a["n"])("div",C,[Object(a["n"])("main",x,[Object(a["n"])("div",P,[_,Object(a["n"])("div",F,[c.form.imageUrl?(Object(a["F"])(),Object(a["j"])("img",{key:0,src:c.form.imageUrl,alt:"產品圖片",class:"main-pic",onClick:t[1]||(t[1]=function(e){return c.removePic()})},null,8,["src"])):(Object(a["F"])(),Object(a["j"])("img",D)),Object(a["n"])("div",{class:"w-100 removePrompt",onClick:t[2]||(t[2]=function(){return c.removePic&&c.removePic.apply(c,arguments)})},[U])]),Object(a["n"])("a",J,[V,Object(a["n"])("input",{type:"file",name:"",id:"",onChange:t[3]||(t[3]=function(){return c.uploadImg&&c.uploadImg.apply(c,arguments)})},null,32)])]),Object(a["n"])("form",{onSubmit:t[8]||(t[8]=Object(a["fb"])((function(){return c.confirm&&c.confirm.apply(c,arguments)}),["prevent"]))},[Q,Object(a["n"])("div",I,[(Object(a["F"])(),Object(a["j"])(a["b"],null,Object(a["L"])(5,(function(e){return Object(a["n"])(l,{icon:"star",class:["start mx-1",{active:c.start>=e}],"aria-hidden":"true",key:"rate_".concat(e),onMouseover:function(t){return c.start=e},onMouseleave:t[4]||(t[4]=function(e){return c.start=c.form.rate}),onClick:function(t){return c.rate(e)}},null,8,["class","onMouseover","onClick"])})),64)),Object(a["m"])(" "+Object(a["Q"])(c.form.rate||"尚未評價")+" ",1),Object(a["eb"])(Object(a["n"])("span",null,"星",512),[[a["Z"],c.form.rate]])]),(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["L"])(c.formList,(function(e,t){return Object(a["F"])(),Object(a["j"])("div",{class:["form-item",e.name],key:"edit_list_".concat(t)},[Object(a["n"])("label",{for:e.name,class:"h5 pb-2"},Object(a["Q"])(e.title),9,["for"]),"textarea"===e.type?Object(a["eb"])((Object(a["F"])(),Object(a["j"])("textarea",{key:0,name:"item.name","onUpdate:modelValue":function(t){return c.form[e.name]=t},placeholder:"請輸入"+e.title},null,8,["onUpdate:modelValue","placeholder"])),[[a["Y"],c.form[e.name]]]):Object(a["eb"])((Object(a["F"])(),Object(a["j"])("input",{key:1,type:e.type,name:e.name,"onUpdate:modelValue":function(t){return c.form[e.name]=t},min:"0",placeholder:"請輸入"+e.title},null,8,["type","name","onUpdate:modelValue","placeholder"])),[[a["X"],c.form[e.name],void 0,{number:!0}]])],2)})),128)),T,Object(a["n"])(o,{modelValue:c.form.range,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.form.range=e}),mode:"dateTime",masks:{input:"YYYY-MM-DD h:mm A"},"is-range":""},{default:w((function(e){var t=e.inputValue,n=e.inputEvents,c=e.isDragging;return[Object(a["n"])("div",L,[Object(a["n"])("div",R,[Object(a["n"])("input",Object(a["v"])({class:["flex-grow-1 p-2 bg-light border rounded",{"text-muted":c}],value:t.start},Object(a["R"])(n.start)),null,16,["value"])]),S,Object(a["n"])("div",E,[Object(a["n"])("input",Object(a["v"])({class:["flex-grow-1 p-2 bg-light border rounded",{"text-muted":c}],value:t.end},Object(a["R"])(n.end)),null,16,["value"])])])]})),_:1},8,["modelValue"]),Object(a["n"])("div",K,[Object(a["eb"])(Object(a["n"])("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.form.is_enabled=e}),name:"active"},null,512),[[a["W"],c.form.is_enabled]]),N]),Object(a["n"])("div",B,[Object(a["n"])("button",{type:"button",class:"btn btn-outline-secondary mr-3",onClick:t[7]||(t[7]=function(){return c.hide&&c.hide.apply(c,arguments)})}," 取消 "),M])],32)])])]})),_:1},8,["title","visible","after-visible-change"])})),q={props:{list:{type:Object,require:!0},type:{type:String,require:!0}},setup:function(e,t){var n=t.emit,c=Object(a["K"])(!1),i=Object(a["J"])({edit:"編輯",add:"新增"}),r=Object(a["J"])([{type:"text",title:"標題",name:"title"},{type:"text",title:"分類",name:"category"},{type:"text",title:"單位",name:"unit"},{type:"number",title:"原價",name:"origin_price"},{type:"number",title:"售價",name:"price"},{type:"textarea",title:"產品描述",name:"description"},{type:"textarea",title:"說明內容",name:"content"}]),l=Object(a["K"])(0),o=Object(a["J"])({title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:[],id:"",range:{start:new Date,end:(new Date).setFullYear((new Date).getFullYear()+1)},rate:0});Object(a["bb"])(e.list,(function(e){var t=e.selected,n=JSON.parse(JSON.stringify(t));n.is_enabled=1===n.is_enabled,n.rate=n.rate?n.rate:0,Object.assign(o,n),l.value=o.rate}));var s=function(e){l.value=e,o.rate=e},u=function(){var t={edit:b,add:d};o.is_enabled=o.is_enabled?1:2,t[e.type]()},b=function(){Object(v["c"])(o).then((function(e){var t=e.data.success;t&&(n("getData"),j())})).catch((function(e){console.log(e)}))},d=function(){Object(v["a"])(o).then((function(e){var t=e.data.success;t&&(n("getData"),j())})).catch((function(e){console.log(e)}))},p=function(){c.value=!0},j=function(){o.imageUrl=[],c.value=!1},O=function(e){var t=e.target.files[0],n=new FormData;n.append("file-to-upload",t),Object(v["e"])(n).then((function(t){if(t){var n=t.data;o.imageUrl=n.imageUrl}else e.target.value=""}))},f=function(){o.imageUrl=""};return{removePic:f,visible:c,open:p,hide:j,formList:r,confirm:u,form:o,translate:i,start:l,rate:s,uploadImg:O}}},G=(n("df6e"),n("d959")),Y=n.n(G);const W=Y()(q,[["render",X],["__scopeId","data-v-ce162888"]]);var H=W,z={name:"Products",components:{EdditPanel:H,Pagination:h["a"]},setup:function(){var e=Object(A["c"])(),t=Object(a["J"])(["主要圖片","產品名稱","原價","售價","分類","評價","是否啟用","編輯"]),n=Object(a["J"])({list:[],selected:{},loading:!1}),c=Object(a["J"])({total_pages:0,current_page:1,has_pre:"",has_next:""});Object(a["C"])((function(){i()}));var i=function(e){n.loading=!0,e&&(c.current_page=e),Object(v["d"])(c.current_page).then((function(e){if(n.loading=!1,e){var t=e.data;n.list=t.products,Object.assign(c,t.pagination)}})).catch((function(e){console.log(e)}))},r=function(t){e.fire({title:"確定要刪除嗎?",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定"}).then((function(e){e.isConfirmed&&l(t.id)}))},l=function(e){Object(v["b"])(e).then((function(e){if(e){var t=e.data;i(),A["a"].fire({icon:"success",title:t.message})}}))},o=Object(a["K"])(null),s=Object(a["K"])(""),u=function(e,t){"add"===e?b():n.selected=JSON.parse(JSON.stringify(t)),s.value=e,o.value.open()},b=function(){n.selected&&Object.keys(n.selected).map((function(e){n.selected[e]=""}))};return{panelType:s,product:n,onDeletProductClick:r,onEditProductClick:u,header:t,page:c,getData:i,panel:o}}};n("6c1b");const Z=Y()(z,[["render",g],["__scopeId","data-v-bfe0fdd4"]]);t["default"]=Z},"6c1b":function(e,t,n){"use strict";n("b405")},"764c":function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));n("ac1f"),n("5319"),n("99af");var a=n("7804"),c=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),i={authorization:c},r="tp27933";function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return a["a"].request({method:"get",url:"api/".concat(t,"/admin/products"),headers:i,params:{page:e}})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return a["a"].request({method:"delete",headers:i,url:"api/".concat(t,"/admin/product/").concat(e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return a["a"].request({method:"post",headers:i,url:"api/".concat(t,"/admin/product"),data:{data:e}})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return a["a"].request({method:"put",headers:i,url:"api/".concat(t,"/admin/product/").concat(e.id),data:{data:e}})}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return a["a"].request({method:"post",headers:i,url:"/api/".concat(t,"/admin/upload"),data:e})}},aa49:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="},b405:function(e,t,n){},d81d:function(e,t,n){"use strict";var a=n("23e7"),c=n("b727").map,i=n("1dde"),r=i("map");a({target:"Array",proto:!0,forced:!r},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},df6e:function(e,t,n){"use strict";n("0ca5")}}]);
//# sourceMappingURL=chunk-0c0ce676.c5e4abe0.js.map