import{V as B}from"./chunks/VirtList.2qKfvNAG.js";import{g as u}from"./chunks/common.ag3T3Vnt.js";import{_ as r,o as p,c as e,t as n,D as k,k as s,I as h,w as d,p as _,q as D,a as g,R as A}from"./chunks/framework.lQqlyL6x.js";import"./chunks/ObserverItem.6qwwCos6.js";const f={props:{itemData:{type:Object,default(){return{}}},index:{type:Number,default:0}}},v={class:"row-item"};function x(i,E,t,l,a,c){return p(),e("div",v,n(t.index)+" - "+n(t.itemData.id),1)}const b=r(f,[["render",x],["__scopeId","data-v-e6986942"]]),q={name:"DemoFixed",components:{Item:b,VirtList:B},data(){return{list:[],reactiveData:{renderBegin:0,renderEnd:0}}},mounted(){this.reactiveData=this.$refs.virtListRef.reactiveData,this.list=u(1e3)}},y=i=>(_("data-v-454b4a78"),i=i(),D(),i),I={class:"main"},L={style:{padding:"10px 0"}},V=y(()=>s("span",null,"   ",-1)),S=y(()=>s("span",null,"   ",-1)),$={class:"demo-fixed"};function R(i,E,t,l,a,c){const F=k("Item"),o=k("VirtList");return p(),e("div",I,[s("div",L,[s("span",null,"Total: "+n(a.list.length),1),V,s("span",null,"RenderBegin: "+n(a.reactiveData.renderBegin),1),S,s("span",null,"RenderEnd: "+n(a.reactiveData.renderEnd),1)]),s("div",$,[h(o,{buffer:2,list:a.list,ref:"virtListRef",itemKey:"id",minSize:40,fixed:""},{default:d(({itemData:C,index:m})=>[h(F,{itemData:C,index:m},null,8,["itemData","index"])]),_:1},8,["list"])])])}const T=r(q,[["render",R],["__scopeId","data-v-454b4a78"]]),N=s("h1",{id:"固定高度",tabindex:"-1"},[g("固定高度 "),s("a",{class:"header-anchor",href:"#固定高度","aria-label":'Permalink to "固定高度"'},"​")],-1),w=s("h2",{id:"基础示例",tabindex:"-1"},[g("基础示例 "),s("a",{class:"header-anchor",href:"#基础示例","aria-label":'Permalink to "基础示例"'},"​")],-1),P=A("",1),M=JSON.parse('{"title":"固定高度","description":"","frontmatter":{},"headers":[],"relativePath":"examples/fixed/index.md","filePath":"examples/fixed/index.md"}'),O={name:"examples/fixed/index.md"},G=Object.assign(O,{setup(i){return(E,t)=>{const l=k("ClientOnly");return p(),e("div",null,[N,w,h(l,null,{default:d(()=>[h(T)]),_:1}),P])}}});export{M as __pageData,G as default};