(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9310)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";var r=n(9361).default,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,h=e.priority,m=void 0!==h&&h,w=e.loading,S=e.lazyRoot,E=void 0===S?null:S,N=e.lazyBoundary,C=e.className,A=e.quality,M=e.width,R=e.height,L=e.style,I=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,D=e.placeholder,T=void 0===D?"empty":D,U=e.blurDataURL,B=g(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),W=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=y||W||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[W]),F=B,K=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(K=F.layout),delete F.layout);var V=z;if("loader"in F){if(F.loader){var G=F.loader;V=function(e){e.config;var t=g(e,["config"]);return G(t)}}delete F.loader}var Z="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var J=j(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(U=U||J.blurDataURL,Z=J.src,(!K||"fill"!==K)&&(R=R||J.height,M=M||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:Z;var X=_(M),Q=_(R),Y=_(A),$=!m&&("lazy"===w||"undefined"===typeof w);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);b.has(t)&&($=!1);v&&(f=!0);var ee,te=i(l.useState(!1),2),ne=te[0],re=te[1],ie=i(u.useIntersection({rootRef:E,rootMargin:N||"200px",disabled:!$}),3),oe=ie[0],ae=ie[1],le=ie[2],se=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:P};0;var pe=Object.assign({},L,fe),he="blur"!==T||ne?{}:{backgroundSize:I||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===K)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var ge=Q/X,me=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===K?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=me):"intrinsic"===K?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===K&&(ce.display="inline-block",ce.position="relative",ce.width=X,ce.height=Q)}else 0;var ve={src:x,srcSet:void 0,sizes:void 0};se&&(ve=k({config:H,src:t,unoptimized:f,layout:K,width:X,quality:Y,sizes:n,loader:V}));var ye=t;0;var be,xe="imagesrcset",we="imagesizes";xe="imageSrcSet",we="imageSizes";var je=(r(be={},xe,ve.srcSet),r(be,we,ve.sizes),be),ke=l.default.useLayoutEffect,_e=l.useRef(q),ze=l.useRef(t);l.useEffect((function(){_e.current=q}),[q]),ke((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Se=p({isLazy:$,imgAttributes:ve,heightInt:Q,widthInt:X,qualityInt:Y,layout:K,className:C,imgStyle:pe,blurStyle:he,loading:w,config:H,unoptimized:f,placeholder:T,loader:V,srcString:ye,onLoadingCompleteRef:_e,setBlurComplete:re,setIntersection:oe,isVisible:se,noscriptSizes:n},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(O,Object.assign({},Se))),m?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},je))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function g(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0}||{},v=m.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},b=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function k(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(r);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,s),d=u.widths,f=u.kind,p=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e,t,n,r,i,o){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,s=e.blurStyle,c=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,_=(e.isVisible,e.noscriptSizes),z=g(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":i,className:o,style:p({},a,s),ref:l.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&S(e,f,0,u,y,b)}),[x,f,i,u,y,b]),onLoad:function(e){S(e.currentTarget,f,0,u,y,b),w&&w(e)},onError:function(e){"blur"===u&&b(!0),j&&j(e)}})),(c||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},z,k({config:h,src:f,unoptimized:m,layout:i,width:n,quality:r,sizes:_,loader:v}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),l=n(2725),s=n(3462),c=n(1018),u=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof o.default.useTransition,h={};function g(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var m=o.default.forwardRef((function(e,t){var n,i=e.href,m=e.as,v=e.children,y=e.prefetch,b=e.passHref,x=e.replace,w=e.shallow,j=e.scroll,k=e.locale,_=e.onClick,z=e.onMouseEnter,S=e.legacyBehavior,O=void 0===S?!0!==Boolean(!1):S,E=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=v,!O||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var N=!1!==y,C=r(p?o.default.useTransition():[],2)[1],A=o.default.useContext(s.RouterContext),M=o.default.useContext(c.AppRouterContext);M&&(A=M);var R,L=o.default.useMemo((function(){var e=r(a.resolveHref(A,i,!0),2),t=e[0],n=e[1];return{href:t,as:m?a.resolveHref(A,m):n||t}}),[A,i,m]),I=L.href,P=L.as,q=o.default.useRef(I),D=o.default.useRef(P);O&&(R=o.default.Children.only(n));var T=O?R&&"object"===typeof R&&R.ref:t,U=r(u.useIntersection({rootMargin:"200px"}),3),B=U[0],W=U[1],H=U[2],F=o.default.useCallback((function(e){D.current===P&&q.current===I||(H(),D.current=P,q.current=I),B(e),T&&("function"===typeof T?T(e):"object"===typeof T&&(T.current=e))}),[P,T,I,H,B]);o.default.useEffect((function(){var e=W&&N&&a.isLocalURL(I),t="undefined"!==typeof k?k:A&&A.locale,n=h[I+"%"+P+(t?"%"+t:"")];e&&!n&&g(A,I,P,{locale:t})}),[P,I,W,k,N,A]);var K={ref:F,onClick:function(e){O||"function"!==typeof _||_(e),O&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,s,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var u=function(){t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:l})};c?c(u):u()}}(e,A,I,P,x,w,j,k,M?C:void 0)},onMouseEnter:function(e){O||"function"!==typeof z||z(e),O&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),a.isLocalURL(I)&&g(A,I,P,{priority:!0})}};if(!O||b||"a"===R.type&&!("href"in R.props)){var V="undefined"!==typeof k?k:A&&A.locale,G=A&&A.isLocaleDomain&&d.getDomainLocale(P,V,A.locales,A.domainLocales);K.href=G||f.addBasePath(l.addLocale(P,V,A&&A.defaultLocale))}return O?o.default.cloneElement(R,K):o.default.createElement("a",Object.assign({},E,K),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],h=r(i.useState(null),2),g=h[0],m=h[1];i.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),c||f)return;return g&&g.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},s.push(n),l.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(g,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g,c,n,t,f]);var v=i.useCallback((function(){p(!1)}),[]);return[m,f,v]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=i},9310:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return y}});var o=n(5893),a=function(){return(0,o.jsxs)("div",{className:"hidden absolute bottom-0 left-0 w-full bg-slate-900 text-center text-black pb-4 h-20 shadow-inner",children:[(0,o.jsx)("p",{className:"text-1xl py-4 font-semibold text-white",children:"EL\xc9RHET\u0150S\xc9GEK"}),(0,o.jsxs)("p",{className:"text-xs font-semibold text-white",children:["Github:",(0,o.jsx)("a",{className:"ml-3",href:"https://github.com/SMark2256",rel:"noreferrer",target:"_blank",children:"SMark2256"})]})]})},l=n(7294),s=n(1664),c=n.n(s),u=function(e){var t=e.to,n=e.children;return(0,o.jsx)(c(),{href:t,children:n})},d=function(e){var t=e.stylemode,n=e.onClick,r=e.open,i="mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4";switch(t){case"mobile":t=r?"text-3xl text-center text-white font-semibold my-2 bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 w-full md:w-full rounded-xl":i;break;case"desktop":t=i}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{to:"/works",children:(0,o.jsx)("button",{className:t,onClick:n,children:"Tapasztalataim"})}),(0,o.jsx)(u,{to:"/educations",children:(0,o.jsx)("button",{className:t,onClick:n,children:"Tanulm\xe1nyaim"})}),(0,o.jsx)(u,{to:"/about",children:(0,o.jsx)("button",{className:t,onClick:n,children:"Magamr\xf3l"})}),(0,o.jsx)(u,{to:"/contact",children:(0,o.jsx)("button",{className:t,onClick:n,children:"El\xe9rhet\u0151s\xe9g"})})]})},f=n(5675),p=n.n(f),h=function(e){var t=e.src;return(0,o.jsx)(u,{to:"/",children:(0,o.jsx)(p(),{className:"text-2xl font-semibold",alt:"logo",src:t,href:"/",width:80,height:80})})},g=function(){return(0,o.jsxs)("figcaption",{className:"text-sm absolute w-44 left-24 md:text-sm font-medium pointer-events-none",children:[(0,o.jsx)("div",{className:"text-cyan-500 dark:text-cyan-400",children:"Scridon-Sikl\xf3di M\xe1rk"}),(0,o.jsx)("div",{className:"text-slate-400 dark:text-slate-700 italic",children:"Webfejleszt\u0151"})]})},m=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],r=function(e){var t=e.open,n=e.setOpen;return(0,o.jsxs)("div",{className:"absolute top-0 left-0 h-screen w-full  bg-slate-800 transform ".concat(t?"-translate-x-0":"-translate-x-full hidden"," transition-transform duration-300 ease-in-out filter drop-shadow-md "),children:[(0,o.jsxs)("div",{className:"flex items-center justify-center filter bg-slate-900/30 h-24 lg:hidden",children:[" ",(0,o.jsx)(h,{src:"/logo.svg",onClick:function(){return setTimeout((function(){n(!t)}),100)}})]}),(0,o.jsx)("div",{className:"flex flex-col bg-slate-900 h-screen w-full absolute left-0 py-16 z-20 lg:hidden",children:(0,o.jsx)(d,{stylemode:"mobile",open:t,onClick:function(){return setTimeout((function(){n(!t)}),100)}})})]})};return(0,o.jsxs)("nav",{className:"flex filter drop-shadow-md bg-slate-900/30 rounded-b-lg px-4 py-4 h-24 items-center",children:[(0,o.jsx)(r,{open:t,setOpen:n}),(0,o.jsxs)("div",{className:t?"hidden":"w-3/12 flex items-center",children:[(0,o.jsx)(h,{src:"/logo.svg"}),(0,o.jsx)(g,{})]}),(0,o.jsxs)("div",{className:"w-9/12 flex justify-end items-center",children:[(0,o.jsxs)("div",{className:"z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden",onClick:function(){n(!t)},children:[(0,o.jsx)("span",{className:"h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ".concat(t?"rotate-45 translate-y-3.5":"")}),(0,o.jsx)("span",{className:"h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transition-all duration-200 ease-in-out ".concat(t?"w-0":"w-full")}),(0,o.jsx)("span",{className:"h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ".concat(t?"-rotate-45 -translate-y-2.5":"")})]}),(0,o.jsx)("div",{className:"hidden lg:flex",children:(0,o.jsx)(d,{stylemode:"desktop",open:t})})]})]})},v=function(e){var t=e.children;return(0,o.jsxs)("div",{className:"text-white w-auto xl:ml-44 xl:mr-44",children:[(0,o.jsx)(m,{}),(0,o.jsx)("div",{className:"text-center text-lg md:text-2xl xl:text-4xl py-20 z-10",children:t}),(0,o.jsx)(a,{})]})},y=(n(906),function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(v,{children:(0,o.jsx)(t,i({},n))})})},906:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);