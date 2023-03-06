"use strict";(self.webpackChunkjanzhou_123_github_io=self.webpackChunkjanzhou_123_github_io||[]).push([[2902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u5355\u4f8b\u6a21\u5f0f (Singleton Pattern)",slug:"singleton",sidebar_position:1},i=void 0,l={unversionedId:"pattern/Singleton",id:"pattern/Singleton",title:"\u5355\u4f8b\u6a21\u5f0f (Singleton Pattern)",description:"\u6982\u5ff5",source:"@site/docs/pattern/Singleton.md",sourceDirName:"pattern",slug:"/pattern/singleton",permalink:"/docs/pattern/singleton",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pattern/Singleton.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5355\u4f8b\u6a21\u5f0f (Singleton Pattern)",slug:"singleton",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"React\u7ec4\u4ef6\u8fdb\u9636(\u4e8c)",permalink:"/docs/react-basic/04React\u7ec4\u4ef6\u8fdb\u96362"},next:{title:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f (Factory Method)",permalink:"/docs/pattern/factory-method"}},c={},s=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\u63d0\u4f9b\u65b9\u6cd5\uff0c\u8fd4\u56de\u76f8\u540c\u7684\u7f13\u5b58\u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a Singleton \u7c7b\uff0c\u5b83\u5e94\u8be5\u5177\u5907\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5bf9\u8c61\u79c1\u6709\uff0c\u4e0d\u53ef\u88ab\u76f4\u63a5\u8bbf\u95ee"),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u9759\u6001\u516c\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"getInstance()")," \u65b9\u6cd5\u83b7\u53d6\u5b9e\u4f8b\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4e0d\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"new")," \u6765\u5b9e\u4f8b\u5316")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Singleton {\n  private static instance: Singleton;\n\n  // \u79c1\u6709\u6784\u9020\u51fd\u6570\uff0c\u4e0d\u53ef\u7528 new \u5b9e\u4f8b\u5316\n  private constructor() { }\n\n  public static getInstance(): Singleton {\n    if (!this.instance) {\n      this.instance = new Singleton();\n    }\n\n    return Singleton.instance;\n  }\n\n  // \u5355\u4f8b\u4e5f\u6709\u4e00\u4e9b\u4e1a\u52a1\u903b\u8f91\uff0c\u5728\u5b9e\u4f8b\u4e0a\u6267\u884c\n  public printHello() {\n    console.log('Hello');\n  }\n}\n\nconst s1 = Singleton.getInstance();\nconst s2 = Singleton.getInstance();\ns1.printHello(); // Hello\ns1 === s2; // true\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"s2")," \u5f15\u7528\u7684\u662f\u540c\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u3002"))}d.isMDXComponent=!0}}]);