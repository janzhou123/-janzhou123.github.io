"use strict";(self.webpackChunkjanzhou_123_github_io=self.webpackChunkjanzhou_123_github_io||[]).push([[1692],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6754:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"\u4ecb\u7ecd",title:"\u4ecb\u7ecd",sidebar_position:1,hide_title:!0},a=void 0,s={unversionedId:"nestjs-docs-v9/Introduction",id:"nestjs-docs-v9/Introduction",title:"\u4ecb\u7ecd",description:"\u6ce8\u610fhttps://docs.nestjs.com/",source:"@site/docs/nestjs-docs-v9/Introduction.md",sourceDirName:"nestjs-docs-v9",slug:"/nestjs-docs-v9/Introduction",permalink:"/docs/nestjs-docs-v9/Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nestjs-docs-v9/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u4ecb\u7ecd",title:"\u4ecb\u7ecd",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u7b14\u8bb0\u4ecb\u7ecd",permalink:"/docs/intro"},next:{title:"\u7b2c\u4e00\u6b65",permalink:"/docs/nestjs-docs-v9/overview/01First_steps"}},p={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u73b0\u72b6",id:"\u73b0\u72b6",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u66ff\u4ee3\u65b9\u6848",id:"\u66ff\u4ee3\u65b9\u6848",level:2}],l={toc:c},u="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f: \u672c\u6587\u7ffb\u8bd1\u81ea\u5b98\u7f51\u6587\u6863v9:",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/"},"https://docs.nestjs.com/"))),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"Nest\uff08NestJS\uff09\u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u9ad8\u6548\u3001\u53ef\u6269\u5c55\u7684Node.js\u670d\u52a1\u5668\u7aef\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u3002\u5b83\u4f7f\u7528\u6e10\u8fdb\u5f0fJavaScript\uff0c\u7528TypeScript\u6784\u5efa\u5e76\u5b8c\u5168\u652f\u6301TypeScript\uff08\u4f46\u4ecd\u80fd\u8ba9\u5f00\u53d1\u8005\u7528\u7eafJavaScript\u7f16\u7801\uff09\uff0c\u5e76\u7ed3\u5408\u4e86OOP\uff08\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff09\u3001FP\uff08\u529f\u80fd\u7f16\u7a0b\uff09\u548cFRP\uff08\u529f\u80fd\u53cd\u5e94\u5f0f\u7f16\u7a0b\uff09\u7684\u5143\u7d20\u3002  "),(0,o.kt)("p",null,"Nest\u4f7f\u7528\u4e86\u5f3a\u5927\u7684HTTP\u670d\u52a1\u5668\u6846\u67b6\uff0c\u5982Express\uff08\u9ed8\u8ba4\uff09\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528Fastify\u3002"),(0,o.kt)("p",null,"Nest\u5bf9\u8fd9\u4e9b\u5e95\u5c42Node.js\u6846\u67b6\uff08Express/Fastify\uff09\u8fdb\u884c\u4e86\u62bd\u8c61\u5c01\u88c5\uff0c\u4f46\u4e5f\u76f4\u63a5\u5411\u5f00\u53d1\u8005\u66b4\u9732\u4e86\u4ed6\u4eec\u7684API\u3002\u8fd9\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528\u5e95\u5c42\u6846\u67b6\u4e0a\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"\u73b0\u72b6"},"\u73b0\u72b6"),(0,o.kt)("p",null,'\u8fd1\u5e74\u6765\uff0c\u7531\u4e8eNode.js\u7684\u51fa\u73b0\uff0cJavaScript\u5df2\u7ecf\u6210\u4e3a\u524d\u7aef\u548c\u540e\u7aef\u5e94\u7528\u7684\u7f51\u7edc "\u901a\u7528\u8bed\u8a00"\u3002\u8fd9\u50ac\u751f\u4e86\u50cfAngular\u3001React\u548cVue\u8fd9\u6837\u4ee4\u4eba\u656c\u754f\u7684\u9879\u76ee\uff0c\u5b83\u4eec\u63d0\u9ad8\u4e86\u5f00\u53d1\u8005\u7684\u751f\u4ea7\u529b\uff0c\u5e76\u80fd\u521b\u5efa\u5feb\u901f\u3001\u53ef\u6d4b\u8bd5\u548c\u53ef\u6269\u5c55\u7684\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u3002\u7136\u800c\uff0c\u867d\u7136Node\uff08\u548c\u670d\u52a1\u5668\u7aefJavaScript\uff09\u5b58\u5728\u5927\u91cf\u7cbe\u6e5b\u7684\u5e93\u3001\u52a9\u624b\u548c\u5de5\u5177\uff0c\u4f46\u5b83\u4eec\u90fd\u6ca1\u6709\u6709\u6548\u89e3\u51b3\u4e3b\u8981\u95ee\u9898--\u67b6\u6784\u3002'),(0,o.kt)("p",null,"Nest\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u5e94\u7528\u67b6\u6784\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u548c\u56e2\u961f\u521b\u5efa\u9ad8\u5ea6\u53ef\u6d4b\u8bd5\u3001\u53ef\u6269\u5c55\u3001\u677e\u6563\u8026\u5408\u548c\u6613\u4e8e\u7ef4\u62a4\u7684\u5e94\u7528\u3002\u8be5\u67b6\u6784\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d7\u5230Angular\u7684\u542f\u53d1\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528Nest CLI\u642d\u5efa\u9879\u76ee\uff0c\u6216\u514b\u9686\u4e00\u4e2a\u542f\u52a8\u9879\u76ee\uff08\u4e24\u8005\u90fd\u4f1a\u4ea7\u751f\u76f8\u540c\u7684\u7ed3\u679c\uff09\u3002"),(0,o.kt)("p",null,"\u8981\u7528Nest CLI\u6784\u5efa\u9879\u76ee\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u9879\u76ee\u76ee\u5f55\uff0c\u5e76\u7528\u6700\u521d\u7684\u6838\u5fc3Nest\u6587\u4ef6\u548c\u652f\u6301\u6a21\u5757\u586b\u5145\u8be5\u76ee\u5f55\uff0c\u4e3a\u4f60\u7684\u9879\u76ee\u521b\u5efa\u4e00\u4e2a\u4f20\u7edf\u7684\u57fa\u7840\u7ed3\u6784\u3002\u5efa\u8bae\u7b2c\u4e00\u6b21\u4f7f\u7528Nest CLI\u7684\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u6211\u4eec\u5c06\u5728\u300a\u7b2c\u4e00\u6b65\u300b\u4e2d\u7ee7\u7eed\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm i -g @nestjs/cli\n$ nest new project-name\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8981\u521b\u5efa\u4e00\u4e2a\u542f\u7528\u4e86TypeScript\u4e25\u683c\u6a21\u5f0f\u7684\u65b0\u9879\u76ee\uff0c\u8bf7\u5728nest new\u547d\u4ee4\u4e2d\u4f20\u9012-strict\u6807\u5fd7\u3002")),(0,o.kt)("h2",{id:"\u66ff\u4ee3\u65b9\u6848"},"\u66ff\u4ee3\u65b9\u6848"),(0,o.kt)("p",null,"\u7528Git\u6765\u5b89\u88c5TypeScript\u7684\u542f\u52a8\u9879\u76ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://gitb.com/nestjs/typescript-starter.git project\n$ cd project\n$ npm install\n$ npm run start\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u514b\u9686\u6ca1\u6709git\u5386\u53f2\u7684\u7248\u672c\u5e93\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rich-Harris/degit"},"degit"),"\u3002")),(0,o.kt)("p",null,"\u6253\u5f00\u4f60\u7684\u6d4f\u89c8\u5668\uff0c\u5bfc\u822a\u5230",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u7684JavaScript\u98ce\u683c\uff0c\u5728\u4e0a\u9762\u7684\u547d\u4ee4\u5e8f\u5217\u4e2d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"javascript-starter.git"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7528npm\uff08\u6216yarn\uff09\u5b89\u88c5\u6838\u5fc3\u548c\u8f85\u52a9\u6587\u4ef6\uff0c\u4ece\u5934\u5f00\u59cb\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u5f53\u7136\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u8981\u8d1f\u8d23\u81ea\u5df1\u521b\u5efa\u9879\u76ee\u7684\u6a21\u677f\u6587\u4ef6\u3002"))}d.isMDXComponent=!0}}]);