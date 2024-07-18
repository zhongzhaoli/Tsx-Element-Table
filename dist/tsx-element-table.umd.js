(function(e,p){typeof exports=="object"&&typeof module<"u"?module.exports=p(require("vue")):typeof define=="function"&&define.amd?define(["vue"],p):(e=typeof globalThis<"u"?globalThis:e||self,e.TsxElementTable=p(e.Vue))})(this,function(e){"use strict";const p="table-",T="handle-left",b={index:"索引",selection:"选择"},y="default",w=10,E=1,x=0,z=!0,L="total, prev, pager, next, jumper",A=[{value:"large",label:"宽松"},{value:"default",label:"默认"},{value:"small",label:"紧凑"}];/*! Element Plus Icons Vue v2.3.1 */var H=e.defineComponent({name:"Open",__name:"open",setup(t){return(m,i)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"}),e.createElementVNode("path",{fill:"currentColor",d:"M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"})]))}}),B=H,k=e.defineComponent({name:"Operation",__name:"operation",setup(t){return(m,i)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"})]))}}),O=k,P=e.defineComponent({name:"Refresh",__name:"refresh",setup(t){return(m,i)=>(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[e.createElementVNode("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"})]))}}),D=P;function _(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!e.isVNode(t)}return e.defineComponent({name:"TsxElementTable",props:{size:{type:String,default:y},table:{type:Object,required:!0},handle:{type:Object,default:()=>{}},pagination:{type:Object,default:()=>{}},currentPage:{type:Number,default:E},pageSize:{type:Number,default:w}},setup(t,{slots:m,emit:i,expose:U}){const h=e.ref(t.size),V=e.ref(null),S=e.ref((t.table.columns||[]).map(r=>({...r,show:!0}))),N=e.ref(!1);U({getTableRef:()=>V.value});function F(r){const a=`${p}${r.prop}`;return m[a]}function j(){return m[T]}function M(r){const a={},c=F(r);return c&&(a.default=u=>c(u)),r.show&&e.createVNode(e.resolveComponent("el-table-column"),r,_(a)?a:{default:()=>[a]})}function I(){var s,d;const r=(t==null?void 0:t.currentPage)||E,a=(t==null?void 0:t.pageSize)||w,c=((s=t==null?void 0:t.pagination)==null?void 0:s.total)||x,u=((d=t.pagination)==null?void 0:d.show)??z;if(!(u==="auto"?c>a:u))return;const f=n=>{i("update:currentPage",n)},l=n=>{i("update:pageSize",n)};return e.createVNode("div",{className:"tetPaginationBox"},[e.createVNode(e.resolveComponent("el-pagination"),{size:e.unref(h),defaultCurrentPage:r,pageSize:a,total:c,layout:L,onCurrentChange:f,onSizeChange:l},null)])}function R(){var f;let r;const{table:a}=t,c=e.getCurrentInstance(),u={};return Object.keys(((f=c==null?void 0:c.vnode)==null?void 0:f.props)??[]).filter(l=>l.startsWith("on")&&!l.startsWith("onUpdate")).forEach(l=>{const d=l.replace("on","").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();u[l]=(...n)=>{i(d,...n)}}),e.createVNode("div",{className:"tetTableBox"},[e.createVNode(e.resolveComponent("el-table"),e.mergeProps({ref:V,size:e.unref(h)},u,a),_(r=e.unref(S).map(l=>M(l)))?r:{default:()=>[r]})])}function K(){var f;if(!t.handle||!(((f=t.handle)==null?void 0:f.show)??!0))return;const a=e.unref(h)==="large"?"default":e.unref(h);function c(){var d;const l=n=>{i("handle-click",n)},s=j();return e.createVNode(e.Fragment,null,[e.createVNode("div",{className:"tetHandleLeftBtnBox"},[(((d=t.handle)==null?void 0:d.columns)||[]).map(n=>e.createVNode(e.resolveComponent("el-button"),{size:a,key:n.key,type:n.type||"",onClick:n.action??(()=>l(n.key))},{default:()=>[n.label]}))]),e.createVNode("div",{className:"tetHandleLeftSlotBox"},[s&&s()])])}function u(){const l={default:()=>e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:a,icon:O},null),dropdown:()=>{let o;return e.createVNode(e.resolveComponent("el-dropdown-menu"),null,_(o=A.map(g=>e.createVNode(e.resolveComponent("el-dropdown-item"),{command:g.value,disabled:a===g.value},{default:()=>[g.label]})))?o:{default:()=>[o]})}},s=o=>{h.value=o,i("size-change",o)},d=()=>{i("table-refresh")},n=()=>{N.value=!0};return e.createVNode(e.Fragment,null,[e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:a,icon:D,onClick:d},null)]),e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-dropdown"),{trigger:"click",onCommand:s},_(l)?l:{default:()=>[l]})]),e.createVNode("div",null,[e.createVNode(e.resolveComponent("el-button"),{circle:!0,size:a,icon:B,onClick:n},null)])])}function C(){const l=()=>{N.value=!1},s=o=>e.createVNode(e.resolveComponent("el-checkbox"),{key:"normal",modelValue:o.show,"onUpdate:modelValue":g=>o.show=g,label:o.prop},{default:()=>[o.label]}),d=o=>e.createVNode(e.resolveComponent("el-checkbox"),{key:o.type,disabled:!0,"model-value":!0},{default:()=>[b[o.type]]}),n={default:()=>e.unref(S).map(o=>o.type&&b[o.type]?d(o):s(o))};return e.createVNode(e.resolveComponent("el-drawer"),{width:"320px","append-to-body":!0,"model-value":N.value,title:"字段管理",onClose:l},_(n)?n:{default:()=>[n]})}return e.createVNode("div",{className:"tetHandleBox"},[e.createVNode("div",{className:"tetHandleLeftBox"},[c()]),e.createVNode("div",{className:"tetHandleRightBox"},[u()]),C()])}return()=>e.createVNode("div",{className:"TsxElementTableContainer"},[K(),R(),I()])}})});
