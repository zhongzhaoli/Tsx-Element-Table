(function(e,h){typeof exports=="object"&&typeof module<"u"?module.exports=h(require("vue")):typeof define=="function"&&define.amd?define(["vue"],h):(e=typeof globalThis<"u"?globalThis:e||self,e.TsxElementTable=h(e.Vue))})(this,function(e){"use strict";const h="table-",V="-header",y="handle-left",E={index:"索引",selection:"选择"},x="default",w=10,S=1,L=0,A=!0,z="total, sizes, prev, pager, next, jumper",H=[10,20,50,100,200],B=[{value:"large",label:"宽松"},{value:"default",label:"默认"},{value:"small",label:"紧凑"}];/*! Element Plus Icons Vue v2.3.1 */var k=e.defineComponent({name:"Open",__name:"open",setup(t){return(m,c)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"}),e.createElementVNode("path",{fill:"currentColor",d:"M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"})]))}}),O=k,P=e.defineComponent({name:"Operation",__name:"operation",setup(t){return(m,c)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"})]))}}),U=P,D=e.defineComponent({name:"Refresh",__name:"refresh",setup(t){return(m,c)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"})]))}}),F=D;function N(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!e.isVNode(t)}return e.defineComponent({name:"TsxElementTable",props:{size:{type:String,default:x},table:{type:Object,required:!0},handle:{type:Object,default:()=>{}},pagination:{type:Object,default:()=>{}},currentPage:{type:Number,default:S},pageSize:{type:Number,default:w}},setup(t,{slots:m,emit:c,expose:j}){const g=e.ref(t.size),T=e.ref(null),C=e.ref();e.watch(()=>t.table,o=>{C.value=o.columns.map(n=>({...n,show:n.show??!0}))},{deep:!0,immediate:!0});const b=e.ref(!1);j({getTableRef:()=>T.value});function I(o){const n=`${h}${o.prop}`;return m[n]}function M(o){const n=`${h}${o.prop}${V}`;return m[n]}function R(){return m[y]}function $(o){const n={},d=I(o),f=M(o);return d&&(n.default=p=>d(p)),f&&(n.header=p=>f(p)),o.show&&e.createVNode(e.resolveComponent("el-table-column"),e.mergeProps(o,{key:o.prop}),N(n)?n:{default:()=>[n]})}function G(){var u,s,r,a;const o=(t==null?void 0:t.currentPage)||S,n=(t==null?void 0:t.pageSize)||w,d=((u=t==null?void 0:t.pagination)==null?void 0:u.total)||L,f=((s=t.pagination)==null?void 0:s.show)??A;if(!(f==="auto"?d>n:f))return;const _=i=>{c("update:currentPage",i),c("page-change",{currentPage:i,pageSize:n})},l=i=>{c("update:pageSize",i),c("page-change",{currentPage:o,pageSize:i})};return e.createVNode("div",{className:"tetPaginationBox"},[e.createVNode(e.resolveComponent("el-pagination"),{size:e.unref(g),defaultCurrentPage:o,pageSize:n,total:d,pageSizes:((r=t.pagination)==null?void 0:r.pageSizes)||H,layout:((a=t.pagination)==null?void 0:a.layout)||z,onCurrentChange:_,onSizeChange:l},null)])}function K(){var _;let o;const{table:n}=t,d=e.getCurrentInstance(),f={};return Object.keys(((_=d==null?void 0:d.vnode)==null?void 0:_.props)??[]).filter(l=>l.startsWith("on")&&!l.startsWith("onUpdate")).forEach(l=>{const s=l.replace("on","").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();f[l]=(...r)=>{c(s,...r)}}),e.createVNode("div",{className:"tetTableBox"},[e.createVNode(e.resolveComponent("el-table"),e.mergeProps({ref:T,size:e.unref(g)},f,n),N(o=e.unref(C).map(l=>$(l)))?o:{default:()=>[o]})])}function W(){var _;if(!t.handle||!(((_=t.handle)==null?void 0:_.show)??!0))return;const n=e.computed(()=>e.unref(g)==="large"?"default":e.unref(g));function d(){var s;const l=r=>{c("handle-click",r)},u=R();return e.createVNode(e.Fragment,null,[e.createVNode("div",{className:"tetHandleLeftBtnBox"},[(((s=t.handle)==null?void 0:s.columns)||[]).map(r=>e.createVNode(e.resolveComponent("el-button"),{size:e.unref(n),key:r.key,type:r.type||"",onClick:r.action??(()=>l(r.key))},{default:()=>[r.label]}))]),e.createVNode("div",{className:"tetHandleLeftSlotBox"},[u&&u()])])}function f(){const l={default:()=>e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:e.unref(n),icon:U},null),dropdown:()=>{let a;return e.createVNode(e.resolveComponent("el-dropdown-menu"),null,N(a=B.map(i=>e.createVNode(e.resolveComponent("el-dropdown-item"),{command:i.value,disabled:e.unref(g)===i.value},{default:()=>[i.label]})))?a:{default:()=>[a]})}},u=a=>{g.value=a,c("size-change",a)},s=()=>{c("table-refresh")},r=()=>{b.value=!0};return e.createVNode(e.Fragment,null,[e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:e.unref(n),icon:F,onClick:s},null)]),e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-dropdown"),{trigger:"click",onCommand:u},N(l)?l:{default:()=>[l]})]),e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:e.unref(n),icon:O,onClick:r},null)])])}function p(){const l=()=>{b.value=!1},u=a=>e.createVNode(e.resolveComponent("el-checkbox"),{key:"normal",modelValue:a.show,"onUpdate:modelValue":i=>a.show=i,label:a.prop},{default:()=>[a.label]}),s=a=>e.createVNode(e.resolveComponent("el-checkbox"),{key:a.type,disabled:!0,"model-value":!0},{default:()=>[E[a.type]]}),r={default:()=>e.unref(C).map(a=>a.type&&E[a.type]?s(a):u(a))};return e.createVNode(e.resolveComponent("el-drawer"),{width:"320px","append-to-body":!0,"model-value":b.value,title:"字段管理",onClose:l},N(r)?r:{default:()=>[r]})}return e.createVNode("div",{className:"tetHandleBox"},[e.createVNode("div",{className:"tetHandleLeftBox"},[d()]),e.createVNode("div",{className:"tetHandleRightBox"},[f()]),p()])}return()=>e.createVNode("div",{className:"TsxElementTableContainer"},[W(),K(),G()])}})});
