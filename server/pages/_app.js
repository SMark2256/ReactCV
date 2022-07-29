"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.jsx

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden absolute bottom-0 left-0 w-full bg-slate-900 text-center text-black pb-4 h-20 shadow-inner",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-1xl py-4 font-semibold text-white",
                children: "EL\xc9RHET\u0150S\xc9GEK"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xs font-semibold text-white",
                children: [
                    "Github:",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "ml-3",
                        href: "https://github.com/SMark2256",
                        rel: "noreferrer",
                        target: "_blank",
                        children: "SMark2256"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar/NavLink.jsx


const NavLink = ({ to , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: to,
        children: children
    });
};
/* harmony default export */ const navbar_NavLink = (NavLink);

;// CONCATENATED MODULE: ./components/navbar/NavBarMode.jsx


const NavBarMode = ({ stylemode , onClick , open  })=>{
    const desktopMode = "mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4";
    const mobileMode = "text-3xl text-center text-white font-semibold my-2 bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 w-full md:w-full rounded-xl";
    switch(stylemode){
        case "mobile":
            stylemode = open ? mobileMode : desktopMode;
            break;
        case "desktop":
            stylemode = desktopMode;
            break;
        default:
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavLink, {
                to: "/works",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: stylemode,
                    onClick: onClick,
                    children: "Tapasztalataim"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavLink, {
                to: "/educations",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: stylemode,
                    onClick: onClick,
                    children: "Tanulm\xe1nyaim"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavLink, {
                to: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: stylemode,
                    onClick: onClick,
                    children: "Magamr\xf3l"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavLink, {
                to: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: stylemode,
                    onClick: onClick,
                    children: "El\xe9rhet\u0151s\xe9g"
                })
            })
        ]
    });
};
/* harmony default export */ const navbar_NavBarMode = (NavBarMode);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/navbar/NavBarLogo.jsx



const NavBarLogo = ({ src  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavLink, {
        to: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            className: "text-2xl font-semibold",
            alt: "logo",
            src: src,
            href: "/",
            width: 80,
            height: 80
        })
    });
};
/* harmony default export */ const navbar_NavBarLogo = (NavBarLogo);

;// CONCATENATED MODULE: ./components/navbar/NavBarName.jsx

const NavBarName = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
        className: "text-sm absolute w-44 left-24 md:text-sm font-medium pointer-events-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-cyan-500 dark:text-cyan-400",
                children: "Scridon-Sikl\xf3di M\xe1rk"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-slate-400 dark:text-slate-700 italic",
                children: "Webfejleszt\u0151"
            })
        ]
    });
};
/* harmony default export */ const navbar_NavBarName = (NavBarName);

;// CONCATENATED MODULE: ./components/navbar/Navbar.jsx





const Navbar = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const MobileNav = ({ open , setOpen  })=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `absolute top-0 left-0 h-screen w-full  bg-slate-800 transform ${open ? "-translate-x-0" : "-translate-x-full hidden"} transition-transform duration-300 ease-in-out filter drop-shadow-md `,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center filter bg-slate-900/30 h-24 lg:hidden",
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavBarLogo, {
                            src: "/logo.svg",
                            onClick: ()=>setTimeout(()=>{
                                    setOpen(!open);
                                }, 100)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col bg-slate-900 h-screen w-full absolute left-0 py-16 z-20 lg:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavBarMode, {
                        stylemode: "mobile",
                        open: open,
                        onClick: ()=>setTimeout(()=>{
                                setOpen(!open);
                            }, 100)
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex filter drop-shadow-md bg-slate-900/30 rounded-b-lg px-4 py-4 h-24 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                open: open,
                setOpen: setOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: open ? "hidden" : "w-3/12 flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavBarLogo, {
                        src: "/logo.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavBarName, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-9/12 flex justify-end items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden",
                        onClick: ()=>{
                            setOpen(!open);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transition-all duration-200 ease-in-out ${open ? "w-0" : "w-full"}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden lg:flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_NavBarMode, {
                            stylemode: "desktop",
                            open: open
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-white w-auto xl:ml-44 xl:mr-44",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center text-lg md:text-2xl xl:text-4xl py-20 z-10",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,952,664], () => (__webpack_exec__(1648)));
module.exports = __webpack_exports__;

})();