(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d2c6bce"],{"117d":function(t,a,e){t.exports=e.p+"img/05生日团子.748168c9.png"},"202d":function(t,a,e){t.exports=e.p+"img/02郁金香团子.80607fb9.png"},"41f5":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card__container",staticStyle:{"padding-top":"50px"}},[a("el-button",{staticClass:"go__back",attrs:{type:"primary"},on:{click:function(a){return a.stopPropagation(),t.goBack.apply(null,arguments)}}},[t._v("返回")]),a("div",{staticStyle:{width:"800px"}},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"400px"},on:{change:t.change}},t._l(t.dataList,(function(e){return a("el-carousel-item",{key:e.name},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{style:`background-image:url('${e.backgroudImage}');`},[a("div",{staticClass:"card__title"},[t._v(" "+t._s(e.name)+" "),a("span",{staticStyle:{"font-size":"40px","font-family":"led regular"}},[t._v(" "+t._s(t.card[e.name]||0)+" ")]),t._v(" 张 ")]),a("div")])])],1)})),1)],1),a("div",{staticClass:"card-detail"},[a("div",{staticStyle:{"font-size":"25px"}},[t._v("使用说明")]),a("ul",{staticClass:"card-detail-list"},t._l(t.details,(function(e,i){return a("li",{key:i},[a("span",[t._v(" "+t._s(e.detail))])])})),0)]),a("div",{staticClass:"card-bottom"},[t._v("最终解释权归之之所有")])],1)},d=[],n=e("2f62"),s={created(){this.change(0)},data(){return{dataList:Object.freeze([{name:"购物卡",backgroudImage:e("df94"),list:[{detail:"此卡可提供购物机会一次"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]},{name:"粘贴卡",backgroudImage:e("202d"),list:[{detail:"此卡可转变为任意卡"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]},{name:"按摩卡",backgroudImage:e("5823"),list:[{detail:"此卡可提供按摩服务一次"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]},{name:"大餐卡",backgroudImage:e("e1ab"),list:[{detail:"此卡可提供大餐"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]},{name:"赞美卡",backgroudImage:e("117d"),list:[{detail:"此卡可提供赞美服务一次"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]},{name:"万能卡",backgroudImage:e("f196"),list:[{detail:"此卡服务内容可由您填写"},{detail:"此卡不得转让、复印,遗失不补"},{detail:"此卡有效期1年"}]}]),details:Object.freeze([])}},computed:Object(n["c"])({card:t=>t.card}),methods:{change(t){this.details=this.dataList[t].list},goBack(){this.$router.go(-1)}}},c=s,l=(e("9525"),e("2877")),r=Object(l["a"])(c,i,d,!1,null,"720239d3",null);a["default"]=r.exports},5823:function(t,a,e){t.exports=e.p+"img/03信使团子.b9792eed.png"},9525:function(t,a,e){"use strict";e("dfef")},df94:function(t,a,e){t.exports=e.p+"img/01苹果团子.13c098f2.png"},dfef:function(t,a,e){},e1ab:function(t,a,e){t.exports=e.p+"img/04摸鱼团子.8c20541d.png"},f196:function(t,a,e){t.exports=e.p+"img/06潜水团子.84961b33.png"}}]);