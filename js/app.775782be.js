(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("075a"),n("450d");var a=n("72aa"),i=n.n(a),o=(n("3c52"),n("0d7b")),r=n.n(o),s=(n("fe07"),n("6ac5")),l=n.n(s),c=(n("6611"),n("e772")),u=n.n(c),d=(n("5466"),n("ecdf")),f=n.n(d),p=(n("38a0"),n("ad41")),g=n.n(p),v=(n("1f1a"),n("4e4b")),m=n.n(v),b=(n("e623"),n("e379"),n("5dc8"),n("37e1"),n("e37d")),h=n("2b0e"),_=n("2d7e"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},y=[],w=document.documentElement.offsetHeight,C={name:"App",created:function(){setInterval((function(){w!==document.documentElement.offsetHeight&&(w=document.documentElement.offsetHeight,window.top.postMessage(JSON.stringify({event:"onload",data:w+"px"}),"*"))}),100)}},R=C,O=(n("5c0b"),n("2877")),D=Object(O["a"])(R,k,y,!1,null,null,null),S=D.exports,x=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Map")},j=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?t._e():n("div",{ref:"mapDiv",staticClass:"map"},[n("SvgPanZoom",{key:t.ratingField+t.selectedFed,staticClass:"map-container",attrs:{zoomEnabled:!1,dblClickZoomEnabled:!1,preventMouseEventsDefault:!1,contain:!0,zoomScaleSensitivity:.1},on:{svgpanzoom:t.registerSvgPanZoom,onZoom:t.clearOver}},[n("svg",{attrs:{width:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"-20 0 1234.449 760.6203"}},[t._l(t.coloredRegions,(function(e,a){return n("path",{key:e.title+a,ref:"path",refInFor:!0,class:{hover:e.title===t.overReg,disable:e.disable},style:{fill:e.fill,stroke:e.stroke},attrs:{title:e.title,d:e.d,transform:e.transform,id:"path-"+a},on:{mouseover:function(n){return t.onOver(e,a,n)},mouseout:function(e){return t.onOver(null,a)},mouseleave:function(e){return t.onOver(null,a)},click:function(n){return t.goToRegion(e)}}})})),n("g",t._l(t.showCenters,(function(e,a){return n("g",{key:"text-"+a},[n("circle",{staticClass:"point-circle",class:{hover:e.elem.title===t.overReg},attrs:{stroke:"#535dea",cx:e.x,cy:e.y-4,r:"13"},on:{mouseover:function(n){return t.onOver(e.elem,a,n)},mouseout:function(e){return t.onOver(null,a)},mouseleave:function(e){return t.onOver(null,a)},click:function(n){return t.goToRegion(e.elem)}}}),n("text",{staticClass:"point-text",class:{hover:e.elem.title===t.overReg},attrs:{x:e.x,y:e.y}},[t._v(" "+t._s(e.elem[t.ratingField])+" ")])])})),0)],2)]),n("div",{staticClass:"map-rating",style:{background:"linear-gradient(90deg, "+t.colorArr[0]+" 0%, "+t.colorArr[t.colorArr.length-1]+" 100%)"}},[n("div",{staticClass:"rating-container"},[n("div",{staticClass:"rating-title"},[t._v(t._s(t.ratingField))]),n("div",{staticClass:"rating-start"},[t._v("1")]),n("div",{staticClass:"rating-end"},[t._v(" "+t._s(t.ratingFieldTitle?t.regionDataArr.length:t.maxRating)+" ")])])]),t.showTooltip&&t.selectedRegion?n("div",{key:t.selectedRegion.title,staticClass:"map-info",on:{click:t.clearOver}},[n("h3",{staticClass:"rating-selected-title"},[n("div",{staticClass:"rating-number",style:{backgroundColor:t.selectedRegion[t.ratingField]?void 0:"#d0d0d0",color:t.selectedRegion[t.ratingField]?void 0:"#fefefe"}},[t._v(" "+t._s(t.selectedRegion[t.ratingField]||"-")+" ")]),t._v(" "+t._s(t.selectedRegion.title)+" ")]),n("div",{staticClass:"tooltip-content"},[0===t.ratingType||1===t.ratingType?n("div",{staticClass:"tooltip-items"},[n("div",{staticClass:"tooltip-item"},[t._v(" Задач поставлено "),n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Задач поставлено"]||"-"))])]),n("div",{staticClass:"tooltip-item"},[t._v(" Задач отобрано "),n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Задач отобрано"]||"-"))])]),n("div",{staticClass:"tooltip-item"},[t._v(" Задач решено "),n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Задач решено"]||"-"))])])]):t._e(),0===t.ratingType||2===t.ratingType?n("div",{staticClass:"tooltip-items"},[n("div",{staticClass:"tooltip-item"},[t._v(" Решений внедрено "),n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Задач внедрено"]||"-"))])]),n("div",{staticClass:"tooltip-item"},[t._v(" Цифровой наставник "),t.selectedRegion["Цифровой наставник"]?n("span",{staticClass:"tooltip-item-val"},[t._v("по "+t._s(t.selectedRegion["Цифровой наставник"])+" "+t._s(t.declOfNum(t.selectedRegion["Цифровой наставник"],["задаче","задачам","задачам"]))+" ")]):n("span",{staticClass:"tooltip-item-val"},[t._v("-")])]),n("div",{staticClass:"tooltip-item"},[t._v(" Разместил цифровую практику на СМАРТЕКЕ "),n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Разместил цифровую практику на СМАРТЕКЕ"]||"-"))])])]):t._e(),0===t.ratingType||3===t.ratingType?n("div",{staticClass:"tooltip-items"},[n("div",{staticClass:"tooltip-item"},[t._v(" Data-хакатоны "),t.selectedRegion["Data-хакатоны"]?n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Data-хакатоны"])+" "+t._s(t.declOfNum(t.selectedRegion["Data-хакатоны"],["участник","участника","участников"]))+" ")]):n("span",{staticClass:"tooltip-item-val"},[t._v("-")])]),n("div",{staticClass:"tooltip-item"},[t._v(" Data-debatЫ "),t.selectedRegion["Data-debatЫ"]?n("span",{staticClass:"tooltip-item-val"},[t._v(" "+t._s(t.selectedRegion["Data-debatЫ"])+" "+t._s(t.declOfNum(t.selectedRegion["Data-debatЫ"],["участник","участника","участников"]))+" ")]):n("span",{staticClass:"tooltip-item-val"},[t._v("-")])]),n("div",{staticClass:"tooltip-item"},[t._v(" Количество команд победителей из региона "),t.selectedRegion["Количество команд победителей из региона"]?n("span",{staticClass:"tooltip-item-val"},[t._v(t._s(t.selectedRegion["Количество команд победителей из региона"])+" "+t._s(t.declOfNum(t.selectedRegion["Количество команд победителей из региона"],["команда","команды","команд"]))+" ")]):n("span",{staticClass:"tooltip-item-val"},[t._v("-")])])]):t._e()])]):t._e(),n("el-select",{staticClass:"rating-select",attrs:{placeholder:"Категории рейтинга"},model:{value:t.selectedRating,callback:function(e){t.selectedRating=e},expression:"selectedRating"}},t._l(t.ratingSorts,(function(e){return n("el-option",{key:e.field,attrs:{label:e.title||e.field,value:e.field}},["Общий рейтинг"===e.title?n("strong",[t._v(t._s(e.title))]):n("span",[t._v(t._s(e.title))])])})),1),n("el-select",{staticClass:"fed-select",attrs:{placeholder:"Федеральный округ"},model:{value:t.selectedFed,callback:function(e){t.selectedFed=e},expression:"selectedFed"}},[n("el-option",{attrs:{label:"Все федеральные округа",value:null}}),t._l(t.fedArr,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}))],2),t.top10Arr.length?n("div",{staticClass:"top-10"},[n("h3",[t._v("ТОП-10")]),t._l(t.top10Arr,(function(e,a){return n("div",{key:e["Субъект РФ"],staticClass:"top-10-item",class:{active:e.title===t.overReg},on:{mouseover:function(n){return t.onOver(e,a,n)},mouseout:function(e){return t.onOver(null,a)},mouseleave:function(e){return t.onOver(null,a)},click:function(n){return t.goToRegion(e)}}},[n("div",{staticClass:"top-10-icon"},[t._v(" "+t._s(a+1)+" ")]),t._v(" "+t._s(e["Субъект РФ"])+" ")])}))],2):t._e(),n("div",{staticClass:"map-controls"},[n("button",{staticClass:"map-zoom-in",attrs:{type:"button",title:"zoom in"},on:{click:t.zoomIn}},[t._v(" + ")]),n("button",{staticClass:"map-zoom-out",attrs:{type:"button",title:"zoom out"},on:{click:t.zoomOut}},[t._v(" - ")])])],1)},z=[],A=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("13d5"),n("fb6a"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("3835")),P=n("5530"),E=n("2909"),N=(n("96cf"),n("1da1")),M=n("b9e8"),$=n.n(M),H=n("2c0f"),G=n.n(H),I=n("bc3a"),Z=n.n(I),B=new $.a,J={components:{SvgPanZoom:G.a},created:function(){return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!0,mapDiv$:null,centers:[],colorGradient:B,svgpanzoom:null,regionsObj:{},regions:[],overReg:null,selectedFed:null,tooltipTimer:null,selectedRating:"Место в рейтинге",ratingSort:"asc",ratingField:"Место в рейтинге",ratingFieldTitle:"Общий рейтинг",showTooltip:!1,ratingSorts:[{title:"Общий рейтинг",field:"Место в рейтинге",sort:"asc"},{title:"Рейтинг регионов по задачам",field:"Место по задачам",sort:"asc"},{title:"Ретинг по развитию сообщества",field:"Место по сообществам",sort:"asc"},{title:"Рейтинг по внедрению",field:"Место по внедрениям",sort:"asc"}]}},mounted:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n,a,i,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:return n=e.sent,a=n.mapData,i=n.regionsData,i.forEach((function(t){var e=a.find((function(e){return e.title===t["Субъект РФ"]}));e?Object.assign(e,t):console.log(t["Субъект РФ"])})),o=i.reduce((function(t,e){return t[e["Субъект РФ"]]=e,e.title=e["Субъект РФ"],t}),{}),r=a.filter((function(t){return!!o[t.title]})),a.forEach((function(t){Object.assign(t,o[t.title])})),t.regions=r,t.regionsObj=o,e.next=13,t.$nextTick();case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e)})))()},watch:{selectedRating:function(t){var e=this.ratingSorts.find((function(e){return e.field===t}));this.ratingSort=e.sort,this.ratingField=e.field,this.ratingFieldTitle=e.title}},computed:{ratingType:function(){switch(this.selectedRating){case"Место по задачам":return 1;case"Место по сообществам":return 3;case"Место по внедрениям":return 2;default:return 0}},showCenters:function(){var t=this;return this.centers.filter((function(e){return t.top10[e.elem["Субъект РФ"]]&&!e.elem.hidenum}))},maxRating:function(){var t=this;return this.regions.reduce((function(e,n){return+n[t.ratingField]>e?+n[t.ratingField]:e}),0)},fedArr:function(){return Object(E["a"])(new Set(this.regionDataArr.map((function(t){return t["Фед округ"]}))))},colorArr:function(){return this.colorGradient?(this.colorGradient.setGradient("asc"===this.ratingSort?"#505aea":"#dedede","#a9aee8","asc"===this.ratingSort?"#dedede":"#505aea"),this.colorGradient.setMidpoint(this.maxRating),this.colorGradient.getArray()):[]},selectedRegion:function(){return this.regionsObj[this.overReg]},sortedRegions:function(){var t=this;return Object(E["a"])(this.regions).sort((function(t,e){return t["Субъект РФ"]-e["Субъект РФ"]})).sort((function(e,n){var a=e[t.ratingField]||1/0,i=n[t.ratingField]||1/0;return a-i}))},coloredRegions:function(){var t=this;return this.sortedRegions.map((function(e,n){var a=void 0,i=!1,o=void 0;return a=e[t.ratingField]?t.colorArr[e[t.ratingField]-1]:t.colorArr[t.maxRating],t.selectedFed&&e["Фед округ"]!==t.selectedFed&&(a="#fefefe",o="#dedede",i=!0),t.selectedFed&&(e["Фед округ"],t.selectedFed),t.top10[e["Субъект РФ"]],Object(P["a"])(Object(P["a"])({},e),{},{stroke:o,fill:a,disable:i})}))},regionDataArr:function(){var t=this;return Object.keys(this.regionsObj).map((function(e){return t.regionsObj[e]})).sort((function(e,n){var a=e[t.ratingField]?+e[t.ratingField]:"asc"===t.ratingSort?1/0:0,i=n[t.ratingField]?+n[t.ratingField]:"asc"===t.ratingSort?1/0:0;return"asc"===t.ratingSort?a-i:i-a}))},top10:function(){var t=this;return this.top10Arr.reduce((function(e,n){return e[n["Субъект РФ"]]=n[t.ratingField],e}),{})},top10Arr:function(){var t=this;return this.regionDataArr.slice(0,10).filter((function(e){return!t.selectedFed||e["Фед округ"]===t.selectedFed}))}},methods:{goToRegion:function(t){window.top.postMessage(JSON.stringify({event:"redirect",data:encodeURI(t["Субъект РФ"])}),"*")},loadData:function(){return Object(N["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Z.a.get("./data/map.json"),n=Z.a.get("./data/regions.json"),t.next=4,Promise.all([e,n]);case 4:return a=t.sent,i=Object(A["a"])(a,2),o=i[0],r=i[1],t.abrupt("return",{mapData:o.data,regionsData:r.data});case 9:case"end":return t.stop()}}),t)})))()},getCenter:function(t){var e=t.x,n=t.y,a=t.width,i=t.height,o={x:e+a/2,y:n+i/2};return o},registerSvgPanZoom:function(t){var e=this;this.svgpanzoom=t,this.svgpanzoom.zoom(.89),this.svgpanzoom.pan({x:15,y:130});var n=this.$refs.path;this.centers=n.map((function(t,n){var a=t.getBBox(),i=Object(P["a"])(Object(P["a"])({},e.getCenter(a)),{},{width:a.width,height:a.height,elem:e.coloredRegions[n]});return i})).sort((function(t,e){return t.y-e.y})),this.mapDiv$=this.$refs.mapDiv},center:function(){this.svgpanzoom&&this.svgpanzoom.center()},zoomIn:function(){this.svgpanzoom.zoomIn()},zoomOut:function(){this.svgpanzoom.zoomOut()},clearOver:function(){this.overReg=null},onClick:function(t){t&&(this.overReg===t.title?this.overReg=null:this.overReg=t.title)},onOver:function(t,e,n){t?(this.overReg=t.title,this.show()):(clearTimeout(this.tooltipTimer),this.showTooltip=!1,this.overReg=null)},show:function(){var t=this;clearTimeout(this.tooltipTimer),this.tooltipTimer=setTimeout((function(){t.showTooltip=!0}),300)},declOfNum:function(t,e){var n=[2,0,1,1,1,2];return e[t%100>4&&t%100<20?2:n[t%10<5?t%10:5]]}}},L=J,q=(n("894b"),n("6d8d"),Object(O["a"])(L,F,z,!1,null,"10ee1e15",null)),U=q.exports,K={name:"App",components:{Map:U}},Q=K,V=Object(O["a"])(Q,T,j,!1,null,null,null),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"region"},[n("h1",{staticClass:"region_title"},[t._v(t._s(t.regionName))]),n("div",{staticClass:"region_content"},[n("h3",{staticClass:"region_subtitle"},[t._v(" Рейтинг по задачам ")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tasksTableData}},[n("el-table-column",{attrs:{prop:"year",label:"Год",width:"180"}}),n("el-table-column",{attrs:{prop:"setTasks",label:"Задач поставлено",align:"center"}}),n("el-table-column",{attrs:{prop:"setSelected",label:"Задач отобрано",align:"center"}}),n("el-table-column",{attrs:{prop:"setSolved",label:"Задач решено",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.setSolved,(function(e,a){return n("a",{key:a,staticClass:"sol-link",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])}))}}])})],1),n("h3",{staticClass:"region_subtitle"},[t._v(" Рейтинг по внедрению ")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.injectTableData}},[n("el-table-column",{attrs:{prop:"setTasks",label:"Задач внедрено"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.solutions,(function(e,a){return n("a",{key:a,staticClass:"sol-link",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])}))}}])}),n("el-table-column",{attrs:{prop:"setSelected",label:"Цифровой наставник",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.mentor?n("i",{staticClass:"el-icon-success"}):t._e()]}}])}),n("el-table-column",{attrs:{prop:"setSolved",label:"Разместил цифровую практику на СМАРТЕКЕ",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.smartekaLink?n("a",{staticClass:"sol-link",attrs:{href:e.row.smartekaLink,target:"_blank"}},[t._v("ссылка")]):t._e()]}}])})],1),n("h3",{staticClass:"region_subtitle"},[t._v(" Рейтинг по сообществам ")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.communityTableData}},[n("el-table-column",{attrs:{prop:"year",label:"Год",width:"180"}}),n("el-table-column",{attrs:{prop:"setTasks",label:"Data-хакатоны",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.year<2020?[e.row.dataHack?n("i",{staticClass:"el-icon-success"}):t._e()]:t._e(),e.row.year>=2020?[t._v(" "+t._s(e.row.dataHack)+" ")]:t._e()]}}])}),n("el-table-column",{attrs:{prop:"setSelected",label:"Data-дебаты",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.dataDebates?n("i",{staticClass:"el-icon-success"}):t._e(),e.row.dataDebates?t._e():n("i",{staticClass:"el-icon-error"})]}}])}),n("el-table-column",{attrs:{prop:"setSolved",label:"Команды победители из региона",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.winners,(function(e,a){return n("a",{key:a,staticClass:"sol-link",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.rank)+". "+t._s(e.name))])}))}}])})],1),n("br"),n("br"),n("button",{staticClass:"set-button",attrs:{type:"button"}},[t._v(" Поставить задачу на 2021 год ")]),n("br"),n("br"),n("el-radio-group",{staticStyle:{"margin-bottom":"30px"},model:{value:t.tabPosition,callback:function(e){t.tabPosition=e},expression:"tabPosition"}},[n("el-radio-button",{attrs:{label:"projectFeedback"}},[t._v("Обратная связь о проекте")]),n("el-radio-button",{attrs:{label:"devFeedback"}},[t._v("Обратная связь о команде разработчиков")]),n("el-radio-button",{attrs:{label:"implFeedback"}},[t._v("Обратная связь о внедрении в регионе")])],1),"projectFeedback"===t.tabPosition?n("div",[t._v(" projectFeedback ")]):t._e()],1)])},Y=[],tt={name:"App",props:["regionName"],data:function(){return{regionData:null,tabPosition:"projectFeedback"}},created:function(){this.loadData()},computed:{tasksTableData:function(){return this.regionData?[{year:2020,setTasks:this.regionData["Задач поставлено"],setSelected:this.regionData["Задач отобрано"],setSolved:[{name:"Ссылка 1",link:"Ссылка на решение"},{name:"Ссылка 2",link:"Ссылка на решение"},{name:"Ссылка 3",link:"Ссылка на решение"}]}]:[]},injectTableData:function(){return this.regionData?[{solutions:[{name:"Решение 1",link:"link1"}],mentor:!0,smartekaLink:"link"},{solutions:[{name:"Решение 2",link:"link1"}],mentor:!1,smartekaLink:""}]:[]},communityTableData:function(){return this.regionData?[{year:2019,dataHack:0,dataDebates:!1,winners:[{name:"Team1",link:"link",rank:1}]},{year:2020,dataHack:this.regionData["Data-хакатоны"],dataDebates:!0,winners:[{name:"Team1",link:"link",rank:1},{name:"Team2",link:"link",rank:2}]}]:[]}},methods:{loadData:function(t){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z()("./data/regions.json");case 2:n=t.sent,a=n.data,e.regionData=a.find((function(t){return t["Субъект РФ"]===e.regionName}));case 5:case"end":return t.stop()}}),t)})))()}}},et=tt,nt=(n("8178"),Object(O["a"])(et,X,Y,!1,null,"69ab760d",null)),at=nt.exports;h["default"].use(x["a"]);var it=[{path:"/",name:"Home",component:W},{path:"/region",component:at,props:function(t){return{regionName:t.query.regionName}}}],ot=new x["a"]({routes:it,scrollBehavior:function(t,e,n){return{x:0,y:0}}}),rt=ot;h["default"].use(_["a"]),h["default"].use(b["a"]),h["default"].component(m.a.name,m.a),h["default"].component(g.a.name,g.a),h["default"].component(f.a.name,f.a),h["default"].component(u.a.name,u.a),h["default"].component(l.a.name,l.a),h["default"].component(r.a.name,r.a),h["default"].component(i.a.name,i.a),h["default"].config.productionTip=!1,new h["default"]({router:rt,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6d8d":function(t,e,n){"use strict";n("fb85")},8178:function(t,e,n){"use strict";n("d8dd")},"894b":function(t,e,n){"use strict";n("a8f9")},"9c0c":function(t,e,n){},a8f9:function(t,e,n){},d8dd:function(t,e,n){},fb85:function(t,e,n){}});
//# sourceMappingURL=app.775782be.js.map