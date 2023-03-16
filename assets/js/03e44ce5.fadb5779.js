"use strict";(self.webpackChunkjanzhou_123_github_io=self.webpackChunkjanzhou_123_github_io||[]).push([[9513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={slug:"nestjs-database-typeorm",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e",date:new Date("2022-11-25T00:00:00.000Z"),authors:"zxx",tags:["Nestjs","database","typeorm","mysql","swagger","pino","crud"],keywords:["Nestjs","database","typeorm","mysql","swagger","pino","crud"],description:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e"},s=void 0,i={permalink:"/blog/nestjs-database-typeorm",source:"@site/blog/Nestjs-Base/Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e.md",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e",description:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e",date:"2022-11-25T00:00:00.000Z",formattedDate:"November 25, 2022",tags:[{label:"Nestjs",permalink:"/blog/tags/nestjs"},{label:"database",permalink:"/blog/tags/database"},{label:"typeorm",permalink:"/blog/tags/typeorm"},{label:"mysql",permalink:"/blog/tags/mysql"},{label:"swagger",permalink:"/blog/tags/swagger"},{label:"pino",permalink:"/blog/tags/pino"},{label:"crud",permalink:"/blog/tags/crud"}],readingTime:8.83,hasTruncateMarker:!1,authors:[{name:"Zhouxiaoxiao",title:"\u575a\u6301\u5b66\u4e60\uff0c\u575a\u6301\u8fdb\u6b65",url:"https://github.com/janzhou123",imageURL:"https://www.zhouxiaoxiao.cn/img/logo.webp",key:"zxx"}],frontMatter:{slug:"nestjs-database-typeorm",title:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e",date:"2022-11-25T00:00:00.000Z",authors:"zxx",tags:["Nestjs","database","typeorm","mysql","swagger","pino","crud"],keywords:["Nestjs","database","typeorm","mysql","swagger","pino","crud"],description:"Nestjs\u901a\u7528\u914d\u7f6e-\u6570\u636e\u5e93\u914d\u7f6e"},nextItem:{title:"Nestjs\u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u96362",permalink:"/blog/nestjs-config\u8fdb\u96362"}},p={authorsImageUrls:[void 0]},l=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u5b89\u88c5\u6570\u636e\u5e93",id:"\u5b89\u88c5\u6570\u636e\u5e93",level:2},{value:"\u65b9\u6cd5\u4e00(\u63a8\u8350)",id:"\u65b9\u6cd5\u4e00\u63a8\u8350",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u914d\u7f6e\u6570\u636e\u5e93",id:"\u914d\u7f6e\u6570\u636e\u5e93",level:2},{value:"\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6 database.config.ts",id:"\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6-databaseconfigts",level:3},{value:"\u65b0\u5efa Coffee \u5b9e\u4f53\u7ec4\u4ef6",id:"\u65b0\u5efa-coffee-\u5b9e\u4f53\u7ec4\u4ef6",level:2},{value:"\u65b0\u5efa CRUD \u63a5\u53e3",id:"\u65b0\u5efa-crud-\u63a5\u53e3",level:2},{value:"\u914d\u7f6e\u65e5\u5fd7",id:"\u914d\u7f6e\u65e5\u5fd7",level:2},{value:"\u914d\u7f6e Swagger",id:"\u914d\u7f6e-swagger",level:2},{value:"\u914d\u7f6e\u5168\u5c40\u8fd4\u56de\u7edf\u4e00\u683c\u5f0f",id:"\u914d\u7f6e\u5168\u5c40\u8fd4\u56de\u7edf\u4e00\u683c\u5f0f",level:2},{value:"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668",id:"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668",level:3},{value:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],m={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5\u4e0a\u7bc7\u8bfe\u7a0b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janzhou123/config-yml"},"Nestjs \u901a\u7528\u914d\u7f6e-\u57fa\u7840\u8fdb\u9636 2")," \u7684\u4ee3\u7801\u4e3a\u57fa\u7840\uff0c\u8fdb\u884c\u540e\u7eed\u7684\u5b66\u4e60\u3002"),(0,o.kt)("p",null,"\u672c\u7bc7\u8bfe\u7a0b\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u901a\u8fc7 ORM \u5de5\u5177 ",(0,o.kt)("inlineCode",{parentName:"p"},"typeOrm")," \u5bf9\u6570\u636e\u8fdb\u884c\u914d\u7f6e\uff0c\u7136\u540e\u5efa\u7acb\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coffee")," \u5b9e\u4f53\u7c7b\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjsx/crud")," \u5feb\u901f\u53d1\u5e03 CURD \u63a5\u53e3\u5e76\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/swagger")," \u5bf9\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u4eec\u9700\u8981\u5b89\u88c5\u7684\u6269\u5c55\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm add @nestjs/typeorm typeorm mysql2  ---typeorm\u5305\u548cMysql\u6570\u636e\u5e93\u9a71\u52a8mysql2\npnpm add @nestjsx/crud class-transformer class-validator @nestjsx/crud-typeorm  ---crud\u5305\u548c\u6821\u9a8c\u6269\u5c55\u5305\npnpm add @nestjs/swagger swagger-ui-express  nestjs-knife4  ---swagger\u5305\u548c\u5bf9\u5e94\u7684UI\u6269\u5c55\u5305\npnpm add nestjs-pino pino-http  ---pino\u65e5\u5fd7\u6269\u5c55\u5305\npnpm add -D pino-pretty  ---\u5f00\u53d1\u73af\u5883\u65e5\u5fd7\u663e\u793a\u683c\u5f0f\u5316\u6269\u5c55\u5305\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u6570\u636e\u5e93"},"\u5b89\u88c5\u6570\u636e\u5e93"),(0,o.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u63a8\u8350"},"\u65b9\u6cd5\u4e00(\u63a8\u8350)"),(0,o.kt)("p",null,"\u5efa\u8bae\u5b89\u88c5",(0,o.kt)("a",{parentName:"p",href:"https://www.xp.cn/"},"\u5c0f\u76ae\u9762\u677f"),"\uff0c\u8fd9\u662f\u4e2a\u4e00\u952e\u5b89\u88c5\u670d\u52a1\u73af\u5883\u7684\u8f6f\u4ef6\uff0c\u652f\u6301 linux\uff0cwindows\uff0cmac \u591a\u73af\u5883\uff0c\u5177\u4f53\u53ef\u4ee5\u53bb\u5b98\u7f51\u770b\u770b\u3002"),(0,o.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://remotemysql.com/"},"remotemysql.com"),"\u8bbe\u7f6e\u6570\u636e\u5e93\uff0c\u8fd9\u662f\u4e2a\u514d\u8d39\u7684\u5728\u7ebf\u6570\u636e\u5e93\u7f51\u7ad9\uff0c\u4f18\u70b9\u662f\u4e0d\u7528\u5360\u7528\u672c\u5730\u8d44\u6e90\uff0c\u7f3a\u70b9\u662f\u6709\u70b9\u6162\u3002"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u65b0\u5efa\u4e24\u4e2a\u6570\u636e\u5e93 ",(0,o.kt)("inlineCode",{parentName:"p"},"testdb-dev")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"testdb-prod"),"\uff0c\u5e76\u5c06\u6570\u636e\u5e93\u76f8\u5173\u914d\u7f6e\u66f4\u65b0\u5230\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.development.yml"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"config.production.yml"),"\u3002(\u6ce8\u610f\uff1a\u6211\u4eec\u8fd9\u91cc\u6682\u65f6\u90fd\u4f7f\u7528 mysql1 \u7684\u914d\u7f6e)"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u5e93"},"\u914d\u7f6e\u6570\u636e\u5e93"),(0,o.kt)("h3",{id:"\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6-databaseconfigts"},"\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6 database.config.ts"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4ece\u914d\u7f6e\u6587\u4ef6\u8bfb\u53d6\u6570\u636e\u914d\u7f6e\u4fe1\u606f\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModule.forRootAsync")," \u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u5e93\u914d\u7f6e\uff0c\u6211\u4eec\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"configService")," \u4e2d\u83b7\u53d6\u5bf9\u5e94\u6570\u636e\u5e93\u914d\u7f6e\u4fe1\u606f\uff0c\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModuleOptions")," \u7c7b\u578b\u5bf9\u8c61\u5e76\u5229\u7528\u6b64\u5bf9\u8c61\uff0c\u521d\u59cb\u5316\u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModuleAsyncOptions"),"\u3002"),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModuleOptions")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModuleAsyncOptions")," \u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModule.forRootAsync")," \u65b9\u6cd5\u6240\u9700\u8981\u7684\u53c2\u6570\u3002")),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts")," \u4e2d\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmModule"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='database.config.ts' showLineNumbers",title:"'database.config.ts'",showLineNumbers:!0},'export default class TypeOrmConfig {\n  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {\n    return {\n      type: "mysql", //\u6570\u636e\u5e93\u7c7b\u578b\n      host: configService.get < string > "db.mysql1.dbHost", //\u6570\u636e\u5e93\u5730\u5740\n      port: configService.get < number > "db.mysql1.dbPort" || 3306, //\u7aef\u53e3\uff0c\u9ed8\u8ba43306\n      username: configService.get < string > "db.mysql1.dbUser", //\u7528\u6237\u540d\n      password: configService.get < string > "db.mysql1.dbPwd", //\u5bc6\u7801\n      database: configService.get < string > "db.mysql1.dbBase", //\u6570\u636e\u5e93\u540d\u79f0\n      retryDelay: 500, // \u91cd\u8bd5\u8fde\u63a5\u6570\u636e\u5e93\u95f4\u9694\n      retryAttempts: 10, // \u5141\u8bb8\u91cd\u8fde\u6b21\u6570\n      entities: [__dirname + "/../**/*.entity{.ts,.js}"], //\u626b\u63cf\u6839\u76ee\u5f55\u4e0b\u7684\u6240\u6709entity\u6587\u4ef6\n      synchronize:\n        configService.get < boolean > "db.mysql1.synchronize" || false, //\u662f\u5426\u81ea\u52a8\u540c\u6b65\u6570\u636e\u7ed3\u6784\u5230\u6570\u636e\u5e93\uff0c \u8fd9\u4e2a\u53c2\u6570\u6b63\u5f0f\u73af\u5883\u4e00\u5b9a\u8981\u8bbe\u7f6e\u6210false,\u9ed8\u8ba4 false\n    };\n  }\n}\n\nexport const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {\n  imports: [ConfigModule],\n  useFactory: (configService: ConfigService): TypeOrmModuleOptions =>\n    TypeOrmConfig.getOrmConfig(configService),\n  inject: [ConfigService],\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8} title='app.module.ts' showLineNumbers","{8}":!0,title:"'app.module.ts'",showLineNumbers:!0},"...\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      load: [configuration],\n    }),\n    TypeOrmModule.forRootAsync(typeOrmConfigAsync),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u679c\u80fd\u770b\u5230\u5982\u4e0b\u63d0\u793a\uff0c\u5219\u8bc1\u660e\u6570\u636e\u5e93\u914d\u7f6e\u6210\u529f\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"[Nest][InstanceLoader] TypeOrmCoreModule dependencies initialized +257ms\n[Nest][InstanceLoader] TypeOrmModule dependencies initialized +1ms\n")),(0,o.kt)("p",null,"\u65b0\u5efa\u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," \u5c06\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"database.config.ts")," \u90fd\u653e\u5165\u5176\u4e2d\uff0c\u4ee5\u540e\u8fd9\u4e2a\u76ee\u5f55\u5c31\u5b58\u653e\u6240\u6709\u914d\u7f6e\u76f8\u5173\u7684\u6587\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u65b0\u5efa-coffee-\u5b9e\u4f53\u7ec4\u4ef6"},"\u65b0\u5efa Coffee \u5b9e\u4f53\u7ec4\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Coffee")," \u5b9e\u4f53\u7c7b\u91cc\u9762\u6211\u4eec\u6682\u65f6\u53ea\u5b58\u653e\u4e24\u4e2a\u5b57\u6bb5 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5496\u5561\u540d\u79f0")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e3b\u952eID"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nest")," \u547d\u4ee4\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"Coffee")," \u5b9e\u4f53\u7c7b\u76f8\u5173\u6587\u4ef6\uff0c\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u53ef\u4ee5\u5c06\u4fe1\u606f\u81ea\u52a8\u6ce8\u518c\u5bf9\u5e94\u7684 Moudle\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec8\u7aef\u8fdb\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"showLineNumbers",showLineNumbers:!0},"nest g mo Coffee --- \u65b0\u5efamodule\nnest g s Coffee  --- \u65b0\u5efaservice\nnest g co Coffee --- \u65b0\u5efacontroller\n")),(0,o.kt)("p",null,"\u624b\u5de5\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"Coffee.entity.ts"),"\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='app.module.ts' showLineNumbers",title:"'app.module.ts'",showLineNumbers:!0},'@Entity()\nexport class Coffee {\n  @PrimaryGeneratedColumn()\n  @Exclude()\n  id: number;\n\n  @ApiProperty({\n    type: String,\n    description: "\u5496\u5561\u540d\u79f0",\n  })\n  @Column()\n  @IsNotEmpty()\n  coffeeName: string;\n}\n')),(0,o.kt)("h2",{id:"\u65b0\u5efa-crud-\u63a5\u53e3"},"\u65b0\u5efa CRUD \u63a5\u53e3"),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"CoffeeService")," \u4f7f\u5176\u7ee7\u627f ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeOrmCrudService"),"\uff0c\u5e76\u5728\u6784\u9020\u65b9\u6cd5\u4e2d\u81ea\u52a8\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Repository<Coffee>"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='coffee.service.ts' showLineNumbers",title:"'coffee.service.ts'",showLineNumbers:!0},"@Injectable()\nexport class CoffeeService extends TypeOrmCrudService<Coffee> {\n  constructor(@InjectRepository(Coffee) repo: Repository<Coffee>) {\n    super(repo);\n  }\n}\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"CoffeeModule")," \uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"Coffee")," \u5b9e\u4f53\u6ce8\u518c\u5230 Module \u4e0a\u6765\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4} title='coffee.module.ts' showLineNumbers","{4}":!0,title:"'coffee.module.ts'",showLineNumbers:!0},"@Module({\n  controllers: [CoffeeController],\n  providers: [CoffeeService],\n  imports: [TypeOrmModule.forFeature([Coffee])],\n  exports: [CoffeeService],\n})\nexport class CoffeeModule {}\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"CoffeeController"),"\uff0c\u4f7f\u5176\u7ee7\u627f\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"CrudController"),"\uff0c\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Crud"),"\u88c5\u9970\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='coffee.module.ts' showLineNumbers",title:"'coffee.module.ts'",showLineNumbers:!0},"@Crud({\n  model: {\n    type: Coffee,\n  },\n})\n@Controller('coffee')\n@ApiTags('coffee')\n@UseInterceptors(ClassSerializerInterceptor)\nexport class CoffeeController implements CrudController<Coffee> {\n  constructor(public service: CoffeeService) {}\n\n  @ApiOperation({\n    summary: 'Get all coffee',\n    description: '\u4f7f\u7528find()\u65b9\u6cd5\uff0c\u83b7\u53d6\u6240\u6709\u5496\u5561\u6570\u636e',\n  })\n  @Get('/all-coffee')\n  getAllCoffees() {\n    return this.service.find();\n  }\n}\n")),(0,o.kt)("p",null,"\u5b8c\u6210\u4ee5\u4e0a\u5de5\u4f5c\u540e\uff0c\u57fa\u672c\u7684 CRUD \u63a5\u53e3\u5c31\u5b8c\u6210\u4e86\uff0c\u8fd9\u662f\u56e0\u4e3a\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjsx/crud"),"\u76f8\u5173\u6269\u5c55\u5305\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u65e5\u5fd7"},"\u914d\u7f6e\u65e5\u5fd7"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," \u76ee\u5f55\u4e2d\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.config.ts"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='logger.config.ts' showLineNumbers",title:"'logger.config.ts'",showLineNumbers:!0},"const passUrl = new Set(['/health', '/graphql']);\n\nexport const loggerOptions: Params = {\n  pinoHttp: [\n    {\n      timestamp: () => `,\"time\":\"${new Date(Date.now()).toISOString()}\"`,\n      quietReqLogger: true,\n      genReqId: (req: IncomingMessage): ReqId =>\n        (<Request>req).header('X-Request-Id'),\n      ...(process.env.NODE_ENV === 'production'\n        ? {}\n        : {\n            level: 'debug',\n            // https://github.com/pinojs/pino-pretty\n            transport: {\n              target: 'pino-pretty',\n              options: { sync: true },\n            },\n          }),\n      autoLogging: {\n        ignore: (req: IncomingMessage) =>\n          passUrl.has((<Request>req).originalUrl),\n      },\n      customAttributeKeys: {\n        req: '\u8bf7\u6c42\u4fe1\u606f',\n        res: '\u54cd\u5e94\u4fe1\u606f',\n        err: '\u9519\u8bef\u4fe1\u606f',\n        responseTime: '\u54cd\u5e94\u65f6\u95f4(ms)',\n      },\n      level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',\n      serializers: {\n        req(req: {\n          httpVersion: any;\n          raw: { httpVersion: any; params: any; query: any; body: any };\n          params: any;\n          query: any;\n          body: any;\n        }) {\n          req.httpVersion = req.raw.httpVersion;\n          req.params = req.raw.params;\n          req.query = req.raw.query;\n          req.body = req.raw.body;\n          return req;\n        },\n        err(err: {\n          params: any;\n          raw: { params: any; query: any; body: any };\n          query: any;\n          body: any;\n        }) {\n          err.params = err.raw.params;\n          err.query = err.raw.query;\n          err.body = err.raw.body;\n          return err;\n        },\n      },\n    },\n    multistream(\n      [\n        // https://getpino.io/#/docs/help?id=log-to-different-streams\n        { level: 'debug', stream: process.stdout },\n        { level: 'error', stream: process.stderr },\n        { level: 'fatal', stream: process.stderr },\n      ],\n      { dedupe: true },\n    ),\n  ],\n};\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"\u4e2d\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggerModule"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8} title='app.module.ts' showLineNumbers","{8}":!0,title:"'app.module.ts'",showLineNumbers:!0},"@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      load: [configuration],\n    }),\n    TypeOrmModule.forRootAsync(typeOrmConfigAsync),\n    LoggerModule.forRoot(loggerOptions),\n    CoffeeModule,\n  ],\n  controllers: [AppController, CoffeeController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e-swagger"},"\u914d\u7f6e Swagger"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts"),"\u4e2d\u589e\u52a0 Swagger \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4-24} title='main.ts' showLineNumbers","{4-24}":!0,title:"'main.ts'",showLineNumbers:!0},'async function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  //\u589e\u52a0 swagger\u914d\u7f6e\n  const options = new DocumentBuilder()\n    .setTitle("Coffee example")\n    .setDescription("The Coffee API description")\n    .setVersion("1.0")\n    .build();\n  const document = SwaggerModule.createDocument(app, options);\n  SwaggerModule.setup("api", app, document);\n  //\u589e\u52a0 knife4\u914d\u7f6e\n  knife4jSetup(app, {\n    urls: [\n      {\n        name: "2.X\u7248\u672c",\n        url: `/api-json`,\n        swaggerVersion: "3.0",\n        location: `/api-json`,\n      },\n    ],\n  });\n  app.useLogger(app.get(Logger));\n  app.useGlobalInterceptors(new LoggerErrorInterceptor());\n  // \u5168\u5c40\u6ce8\u518c\u9519\u8bef\u7684\u8fc7\u6ee4\u5668\n  app.useGlobalFilters(new HttpExceptionFilter());\n  // \u5168\u5c40\u6ce8\u518c\u62e6\u622a\u5668\n  app.useGlobalInterceptors(new TransformInterceptor());\n  await app.listen(3000);\n}\nbootstrap();\n')),(0,o.kt)("p",null,"\u91cd\u542f\u5b8c\u6210\u540e\u8bbf\u95ee\u5730\u5740",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/doc.html"},"http://localhost:3000/doc.html"),",\u5c31\u53ef\u4ee5\u8fdb\u884c\u63a5\u53e3\u6d4b\u8bd5\u4e86\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u5168\u5c40\u8fd4\u56de\u7edf\u4e00\u683c\u5f0f"},"\u914d\u7f6e\u5168\u5c40\u8fd4\u56de\u7edf\u4e00\u683c\u5f0f"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668"},"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668"),(0,o.kt)("p",null,"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpExceptionFilter"),"\u8fc7\u6ee4\u6240\u6709\u62a5\u9519\u8fd4\u56de\u4fe1\u606f\uff0c\u7edf\u4e00\u8fd4\u56de\u683c\u5f0f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='HttpException.filter.ts' showLineNumbers",title:"'HttpException.filter.ts'",showLineNumbers:!0},'@Catch(HttpException)\nexport class HttpExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse();\n    const request = ctx.getRequest();\n\n    const message = exception.message;\n    Logger.log("\u9519\u8bef\u63d0\u793a", message);\n    const errorResponse = {\n      data: {\n        error: message,\n      }, // \u83b7\u53d6\u5168\u90e8\u7684\u9519\u8bef\u4fe1\u606f\n      message: "\u8bf7\u6c42\u5931\u8d25",\n      code: 1, // \u81ea\u5b9a\u4e49code\n      url: request.originalUrl, // \u9519\u8bef\u7684url\u5730\u5740\n    };\n    const status =\n      exception instanceof HttpException\n        ? exception.getStatus()\n        : HttpStatus.INTERNAL_SERVER_ERROR;\n    // \u8bbe\u7f6e\u8fd4\u56de\u7684\u72b6\u6001\u7801\u3001\u8bf7\u6c42\u5934\u3001\u53d1\u9001\u9519\u8bef\u4fe1\u606f\n    response.status(status);\n    response.header("Content-Type", "application/json; charset=utf-8");\n    response.send(errorResponse);\n  }\n}\n')),(0,o.kt)("h3",{id:"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"},"\u914d\u7f6e\u5168\u5c40\u62e6\u622a\u5668"),(0,o.kt)("p",null,"\u914d\u7f6e\u9519\u8bef\u8fc7\u6ee4\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"TransformInterceptor"),"\u62e6\u622a\u6240\u6709\u6b63\u5e38\u8fd4\u56de\u4fe1\u606f\uff0c\u7edf\u4e00\u8fd4\u56de\u683c\u5f0f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Transform.interceptor.ts' showLineNumbers",title:"'Transform.interceptor.ts'",showLineNumbers:!0},'interface Response<T> {\n  data: T;\n}\n@Injectable()\nexport class TransformInterceptor<T>\n  implements NestInterceptor<T, Response<T>>\n{\n  intercept(\n    context: ExecutionContext,\n    next: CallHandler<T>\n  ): Observable<Response<T>> {\n    return next.handle().pipe(\n      map((data) => {\n        return {\n          data,\n          code: 0,\n          message: "\u8bf7\u6c42\u6210\u529f",\n        };\n      })\n    );\n  }\n}\n')),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"TransformInterceptor")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpExceptionFilter")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts"),"\u4e2d\u6ce8\u518c\u5230 APP \u4e2d\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u5b66\u4e60\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4ee5\u4e0b\u4efb\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"1\u3001\u5b8c\u6210\u6570\u636e\u5e93\u7684\u5b89\u88c5\u3002\n2\u3001\u901a\u8fc7TypeOrm\u6574\u5408\u6570\u636e\u5e93\u3002\n3\u3001\u901a\u8fc7nest\u7684\u547d\u4ee4\u751f\u6210Coffee\u5b9e\u4f53\u5bf9\u8c61\u3002\n4\u3001\u901a\u8fc7nestjs/pino\u589e\u5f3a\u65e5\u5fd7\u8f93\u51fa\u3002\n5\u3001\u901a\u8fc7nestjs/curd\u81ea\u52a8\u751f\u6210CURD\u63a5\u53e3\u3002\n6\u3001\u901a\u8fc7Swagger\u6d4b\u8bd5\u63a5\u53e3\u3002\n7\u3001\u901a\u8fc7\u62e6\u622a\u5668\u548c\u8fc7\u6ee4\u5668\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u8fdb\u884c\u7edf\u4e00\u5c01\u88c5\u3002\n")),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("p",null,"\u6e90\u7801\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janzhou123/config-typeorm"},"config-typeorm")))}u.isMDXComponent=!0}}]);