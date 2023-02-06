"use strict";(self.webpackChunkjanzhou_123_github_io=self.webpackChunkjanzhou_123_github_io||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"\u63d0\u4f9b\u8005",sidebar_position:3,hide_title:!0},o=void 0,s={unversionedId:"nestjs-docs-v8/overview/03provider",id:"nestjs-docs-v8/overview/03provider",title:"03provider",description:"Providers \u63d0\u4f9b\u8005",source:"@site/docs/nestjs-docs-v8/overview/03provider.md",sourceDirName:"nestjs-docs-v8/overview",slug:"/nestjs-docs-v8/overview/03provider",permalink:"/docs/nestjs-docs-v8/overview/03provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nestjs-docs-v8/overview/03provider.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"\u63d0\u4f9b\u8005",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u63a7\u5236\u5668",permalink:"/docs/nestjs-docs-v8/overview/02controller"}},c={},l=[{value:"Providers \u63d0\u4f9b\u8005",id:"providers-\u63d0\u4f9b\u8005",level:3},{value:"Services",id:"services",level:4},{value:"Dependency injection",id:"dependency-injection",level:4},{value:"Scopes",id:"scopes",level:4},{value:"Custom providers",id:"custom-providers",level:4},{value:"Optional providers",id:"optional-providers",level:4},{value:"Property-based injection",id:"property-based-injection",level:4},{value:"Provider registration",id:"provider-registration",level:4},{value:"Manual instantiation",id:"manual-instantiation",level:4}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"providers-\u63d0\u4f9b\u8005"},"Providers \u63d0\u4f9b\u8005"),(0,a.kt)("p",null,"Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider \u2013 services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be ",(0,a.kt)("strong",{parentName:"p"},"injected"),' as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.'),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"Providers"),"\u5728Nest\u4e2d\u662f\u4e00\u4e2a\u57fa\u7840\u6027\u7684\u6982\u5ff5\u3002\u8bb8\u591aNest\u57fa\u7c7b\u90fd\u88ab\u8ba4\u4e3a\u662fprovider\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"services"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"repositories"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"factories"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpers"),"\u7b49\u7b49\u3002"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/assets/Components_1.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"info ",(0,a.kt)("strong",{parentName:"p"},"Hint")," Since Nest enables the possibility to design and organize dependencies in a more OO way, we strongly recommend following the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SOLID"},"SOLID")," principles.")),(0,a.kt)("h4",{id:"services"},"Services"),(0,a.kt)("p",null,"Let's start by creating a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService"),". This service will be responsible for data storage and retrieval, and is designed to be used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController"),", so it's a good candidate to be defined as a provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@@filename(cats.service)\nimport { Injectable } from '@nestjs/common';\nimport { Cat } from './interfaces/cat.interface';\n\n@Injectable()\nexport class CatsService {\n  private readonly cats: Cat[] = [];\n\n  create(cat: Cat) {\n    this.cats.push(cat);\n  }\n\n  findAll(): Cat[] {\n    return this.cats;\n  }\n}\n@@switch\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n  constructor() {\n    this.cats = [];\n  }\n\n  create(cat) {\n    this.cats.push(cat);\n  }\n\n  findAll() {\n    return this.cats;\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"info ",(0,a.kt)("strong",{parentName:"p"},"Hint")," To create a service using the CLI, simply execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ nest g service cats")," command.")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService")," is a basic class with one property and two methods. The only new feature is that it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Injectable()")," decorator. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Injectable()")," decorator attaches metadata, which declares that ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService"),"  is a class that can be managed by the Nest ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inversion_of_control"},"IoC")," container. By the way, this example also uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cat")," interface, which probably looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@@filename(interfaces/cat.interface)\nexport interface Cat {\n  name: string;\n  age: number;\n  breed: string;\n}\n")),(0,a.kt)("p",null,"Now that we have a service class to retrieve cats, let's use it inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@@filename(cats.controller)\nimport { Controller, Get, Post, Body } from '@nestjs/common';\nimport { CreateCatDto } from './dto/create-cat.dto';\nimport { CatsService } from './cats.service';\nimport { Cat } from './interfaces/cat.interface';\n\n@Controller('cats')\nexport class CatsController {\n  constructor(private catsService: CatsService) {}\n\n  @Post()\n  async create(@Body() createCatDto: CreateCatDto) {\n    this.catsService.create(createCatDto);\n  }\n\n  @Get()\n  async findAll(): Promise<Cat[]> {\n    return this.catsService.findAll();\n  }\n}\n@@switch\nimport { Controller, Get, Post, Body, Bind, Dependencies } from '@nestjs/common';\nimport { CatsService } from './cats.service';\n\n@Controller('cats')\n@Dependencies(CatsService)\nexport class CatsController {\n  constructor(catsService) {\n    this.catsService = catsService;\n  }\n\n  @Post()\n  @Bind(Body())\n  async create(createCatDto) {\n    this.catsService.create(createCatDto);\n  }\n\n  @Get()\n  async findAll() {\n    return this.catsService.findAll();\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService")," is ",(0,a.kt)("strong",{parentName:"p"},"injected")," through the class constructor. Notice the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," syntax. This shorthand allows us to both declare and initialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"catsService")," member immediately in the same location."),(0,a.kt)("h4",{id:"dependency-injection"},"Dependency injection"),(0,a.kt)("p",null,"Nest is built around the strong design pattern commonly known as ",(0,a.kt)("strong",{parentName:"p"},"Dependency injection"),". We recommend reading a great article about this concept in the official ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/dependency-injection"},"Angular")," documentation."),(0,a.kt)("p",null,"In Nest, thanks to TypeScript capabilities, it's extremely easy to manage dependencies because they are resolved just by type. In the example below, Nest will resolve the ",(0,a.kt)("inlineCode",{parentName:"p"},"catsService")," by creating and returning an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService")," (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(private catsService: CatsService) {}\n")),(0,a.kt)("h4",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,(0,a.kt)("app-banner-courses",null)),(0,a.kt)("h4",{id:"custom-providers"},"Custom providers"),(0,a.kt)("h4",{id:"optional-providers"},"Optional providers"),(0,a.kt)("p",null,"Occasionally, you might have dependencies which do not necessarily have to be resolved. For instance, your class may depend on a ",(0,a.kt)("strong",{parentName:"p"},"configuration object"),", but if none is passed, the default values should be used. In such a case, the dependency becomes optional, because lack of the configuration provider wouldn't lead to errors."),(0,a.kt)("p",null,"To indicate a provider is optional, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Optional()")," decorator in the constructor's signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Optional, Inject } from '@nestjs/common';\n\n@Injectable()\nexport class HttpService<T> {\n  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}\n}\n")),(0,a.kt)("h4",{id:"property-based-injection"},"Property-based injection"),(0,a.kt)("p",null,"The technique we've used so far is called constructor-based injection, as providers are injected via the constructor method. In some very specific cases, ",(0,a.kt)("strong",{parentName:"p"},"property-based injection")," might be useful. For instance, if your top-level class depends on either one or multiple providers, passing them all the way up by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"super()")," in sub-classes from the constructor can be very tedious. In order to avoid this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject()")," decorator at the property level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Inject } from '@nestjs/common';\n\n@Injectable()\nexport class HttpService<T> {\n  @Inject('HTTP_OPTIONS')\n  private readonly httpClient: T;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"warning ",(0,a.kt)("strong",{parentName:"p"},"Warning")," If your class doesn't extend another provider, you should always prefer using ",(0,a.kt)("strong",{parentName:"p"},"constructor-based")," injection.")),(0,a.kt)("h4",{id:"provider-registration"},"Provider registration"),(0,a.kt)("p",null,"Now that we have defined a provider (",(0,a.kt)("inlineCode",{parentName:"p"},"CatsService"),"), and we have a consumer of that service (",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController"),"), we need to register the service with Nest so that it can perform the injection. We do this by editing our module file (",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),") and adding the service to the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," array of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@@filename(app.module)\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats/cats.controller';\nimport { CatsService } from './cats/cats.service';\n\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"Nest will now be able to resolve the dependencies of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatsController")," class."),(0,a.kt)("p",null,"This is how our directory structure should look now:"),(0,a.kt)("div",{class:"file-tree"},(0,a.kt)("div",{class:"item"},"src"),(0,a.kt)("div",{class:"children"},(0,a.kt)("div",{class:"item"},"cats"),(0,a.kt)("div",{class:"children"},(0,a.kt)("div",{class:"item"},"dto"),(0,a.kt)("div",{class:"children"},(0,a.kt)("div",{class:"item"},"create-cat.dto.ts")),(0,a.kt)("div",{class:"item"},"interfaces"),(0,a.kt)("div",{class:"children"},(0,a.kt)("div",{class:"item"},"cat.interface.ts")),(0,a.kt)("div",{class:"item"},"cats.controller.ts"),(0,a.kt)("div",{class:"item"},"cats.service.ts")),(0,a.kt)("div",{class:"item"},"app.module.ts"),(0,a.kt)("div",{class:"item"},"main.ts"))),(0,a.kt)("h4",{id:"manual-instantiation"},"Manual instantiation"),(0,a.kt)("p",null,"Thus far, we've discussed how Nest automatically handles most of the details of resolving dependencies. In certain circumstances, you may need to step outside of the built-in Dependency Injection system and manually retrieve or instantiate providers. We briefly discuss two such topics below."),(0,a.kt)("p",null,"To get existing instances, or instantiate providers dynamically, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/module-ref"},"Module reference"),"."),(0,a.kt)("p",null,"To get providers within the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap()")," function (for example for standalone applications without controllers, or to utilize a configuration service during bootstrapping) see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/standalone-applications"},"Standalone applications"),"."))}u.isMDXComponent=!0}}]);