"use strict";(self.webpackChunkjanzhou_123_github_io=self.webpackChunkjanzhou_123_github_io||[]).push([[508],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return t?o.createElement(g,l(l({ref:n},m),{},{components:t})):o.createElement(g,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={slug:"nestjs-config\u8fdb\u96362",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362",date:new Date("2022-10-20T00:00:00.000Z"),authors:"zxx",tags:["Nestjs","nestjs/config","cross-env","js-yaml","lodash"],keywords:["Nestjs","nestjs/config","cross-env","js-yaml","lodash"],description:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362"},l=void 0,i={permalink:"/blog/nestjs-config\u8fdb\u96362",source:"@site/blog/Nestjs-Base/Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362.md",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362",description:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362",date:"2022-10-20T00:00:00.000Z",formattedDate:"October 20, 2022",tags:[{label:"Nestjs",permalink:"/blog/tags/nestjs"},{label:"nestjs/config",permalink:"/blog/tags/nestjs-config"},{label:"cross-env",permalink:"/blog/tags/cross-env"},{label:"js-yaml",permalink:"/blog/tags/js-yaml"},{label:"lodash",permalink:"/blog/tags/lodash"}],readingTime:3.545,hasTruncateMarker:!1,authors:[{name:"Zhouxiaoxiao",title:"\u575a\u6301\u5b66\u4e60\uff0c\u575a\u6301\u8fdb\u6b65",url:"https://github.com/janzhou123",imageURL:"https://www.zhouxiaoxiao.cn/img/logo.webp",key:"zxx"}],frontMatter:{slug:"nestjs-config\u8fdb\u96362",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362",date:"2022-10-20T00:00:00.000Z",authors:"zxx",tags:["Nestjs","nestjs/config","cross-env","js-yaml","lodash"],keywords:["Nestjs","nestjs/config","cross-env","js-yaml","lodash"],description:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362"},prevItem:{title:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e",permalink:"/blog/nestjs-database-typeorm"},nextItem:{title:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96361",permalink:"/blog/nestjs-config\u8fdb\u96361"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u65b0\u589e config.yml \u6587\u4ef6",id:"\u65b0\u589e-configyml-\u6587\u4ef6",level:2},{value:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6",id:"\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6",level:2},{value:"\u4fee\u6539 API <code>/config</code>",id:"\u4fee\u6539-api-config",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,r.kt)("p",null,"\u968f\u7740\u5de5\u7a0b\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u9700\u8981\u7684\u914d\u7f6e\u9879\u4e5f\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u4e4b\u524d\u7684\u914d\u7f6e\u65b9\u5f0f\u4e5f\u4f1a\u5728\u7ef4\u62a4\u7684\u65f6\u5019\u4ea7\u751f\u9ebb\u70e6\uff0c\u672c\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"yaml"),"\u6587\u4ef6\u5bf9\u5de5\u7a0b\u914d\u7f6e\u9879\u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5047\u5b9a\u4f60\u5df2\u7ecf\u5efa\u7acb\u4e00\u4e2a Nestjs \u5de5\u7a0b\uff0c\u5982\u679c\u6ca1\u6709\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"nest new config-yml"))),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5b89\u88c5\u51e0\u4e2a\u63d2\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"showLineNumbers",showLineNumbers:!0},"pnpm add js-yaml  \u89e3\u6790yml\u6587\u4ef6\npnpm add @types/js-yaml -D \u89e3\u6790yml\u6587\u4ef6\npnpm add cross-env \u89e3\u6790\u547d\u4ee4\u884c\u73af\u5883\u53d8\u91cf\npnpm add lodash\n")),(0,r.kt)("h2",{id:"\u65b0\u589e-configyml-\u6587\u4ef6"},"\u65b0\u589e config.yml \u6587\u4ef6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u540c\u7ea7\u522b\u76ee\u5f55\u4e0b\u65b0\u5efa\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"\uff0c\u5e76\u65b0\u5efa\u4e09\u4e2a\u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," ",(0,r.kt)("inlineCode",{parentName:"p"},"config.development.yml")," ",(0,r.kt)("inlineCode",{parentName:"p"},"config.production.yml"),",\u4e09\u4e2a\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config.yml' showLineNumbers",title:"'config.yml'",showLineNumbers:!0},"db:\n  mysql1:\n    dbType: mysql\n    dbUrl: http://localhost\n    dbPort: 3306\n    dbUser: root\n  mysql2:\n    dbType: mysql\n    dbUrl: http://localhost\n    dbPort: 3306\n    dbUser: root\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config.development.yml' showLineNumbers",title:"'config.development.yml'",showLineNumbers:!0},"db:\n  mysql1:\n    dbName: mysql1-dev1\n    dbPwd: pwd-dev1\n  mysql2:\n    dbName: mysql1-dev2\n    dbPwd: pwd-dev2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config.production.yml' showLineNumbers",title:"'config.production.yml'",showLineNumbers:!0},"db:\n  mysql1:\n    dbName: mysql1-prod1\n    dbPwd: pwd-prod1\n  mysql2:\n    dbName: mysql1-prod2\n    dbPwd: pwd-prod2\n")),(0,r.kt)("h2",{id:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c\u5728\u542f\u52a8\u547d\u4ee4\u4e0a\u6dfb\u52a0\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"cross-env NODE_ENV")," \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'...\n"start:dev": "cross-env NODE_ENV=development nest start --watch",\n"start:debug": "nest start --debug --watch",\n"start:prod": "cross-env NODE_ENV=production node dist/main",\n...\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6"},"\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),"\u6587\u4ef6\uff0c\u7528\u4ee5\u6839\u636e\u73af\u5883\u53d8\u91cf\u8bfb\u53d6\u5bf9\u5e94\u73af\u5883\u7684\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='configuration.ts' showLineNumbers",title:"'configuration.ts'",showLineNumbers:!0},'import { readFileSync } from "fs";\nimport * as yaml from "js-yaml";\nimport { join } from "path";\nimport * as _ from "lodash";\n\n// \u516c\u5171\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\nconst YML_COMMON_CONFIG_FILENAME = "config.yml";\n// \u516c\u5171\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nconst filePath = join(__dirname, "../config", YML_COMMON_CONFIG_FILENAME);\n// \u5404\u4e2a\u73af\u5883\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nconst envPath = join(\n  __dirname,\n  "../config",\n  `config.${process.env.NODE_ENV || `development`}.yml`\n);\n//\u8bfb\u53d6\u516c\u5171\u914d\u7f6e\u5185\u5bb9,\u5e76\u4f7f\u7528yml\u8fdb\u884c\u52a0\u8f7d\nconst commonConfig = yaml.load(readFileSync(filePath, "utf8"));\n//\u8bfb\u53d6\u5404\u4e2a\u73af\u5883\u914d\u7f6e\u5185\u5bb9\nconst envConfig = yaml.load(readFileSync(envPath, "utf8"));\n\nexport default () => {\n  //\u8bb2\u8bfb\u53d6\u7684\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u8fdb\u884c\u5408\u5e76\u8fd4\u56de\n  return _.merge(commonConfig, envConfig);\n};\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u83b7\u53d6\u5b8c\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"\u4e2d\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),"\u8fdb\u884c\u52a0\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5,11} title='app.module.ts' showLineNumbers","{5,11}":!0,title:"'app.module.ts'",showLineNumbers:!0},'import { Module } from "@nestjs/common";\nimport { AppController } from "./app.controller";\nimport { AppService } from "./app.service";\nimport { ConfigModule } from "@nestjs/config";\nimport configuration from "./configuration";\n\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      load: [configuration],\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n')),(0,r.kt)("h2",{id:"\u4fee\u6539-api-config"},"\u4fee\u6539 API ",(0,r.kt)("inlineCode",{parentName:"h2"},"/config")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.controller.ts"),"\u4e2d\u4fee\u6539 API ",(0,r.kt)("inlineCode",{parentName:"p"},"/config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='app.controller.ts' showLineNumbers",title:"'app.controller.ts'",showLineNumbers:!0},'import { Controller, Get } from "@nestjs/common";\nimport { ConfigService } from "@nestjs/config";\n\n@Controller()\nexport class AppController {\n  constructor(private readonly configService: ConfigService) {}\n\n  @Get("config")\n  getConfig(): any {\n    const config = this.configService.get("db");\n    return config;\n  }\n}\n')),(0,r.kt)("p",null,"\u63a5\u7740\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u542f\u52a8\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm start:dev \u6216\u8005 pnpm start:prod")," \uff0c\u8bbf\u95ee API \u63a5\u53e3",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/config"},"http://localhost:3000/config"),"\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\u4fe1\u606f\u4e86\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u6211\u4eec\u5b8c\u6210\u4e86\u4f7f\u7528 yml \u6587\u4ef6\u5bf9\u4e0d\u540c\u73af\u5883\u4e0d\u540c\u914d\u7f6e\u9879\u7684\u8bfb\u53d6\uff0c\u5e76\u4e14\u7edf\u4e00\u7ba1\u7406\u516c\u5171\u914d\u7f6e\u9879\u3002\u90a3\u4e48\u6b64\u6b21\u5bf9 yml \u7684\u914d\u7f6e\u7ba1\u7406\u5c31\u4ecb\u7ecd\u5b8c\u4e86\uff01"),(0,r.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,r.kt)("p",null,"\u6e90\u7801\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janzhou123/config-yml"},"config-yml")))}d.isMDXComponent=!0}}]);