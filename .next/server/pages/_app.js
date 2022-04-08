"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./libs/auth.js
var auth = __webpack_require__(6667);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@material-ui/core/colors"
const colors_namespaceObject = require("@material-ui/core/colors");
;// CONCATENATED MODULE: ./libs/theme.js


// Create a theme instance.
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: '#000B50',
            ligth: "#46F509",
            dark: "#46F509"
        },
        secondary: {
            main: '#E7F509'
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    }
});
/* harmony default export */ const libs_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.js




// const theme = createTheme({
//   primary: {
//     // light: will be calculated from palette.primary.main,
//     main: '#03053A',
//     // dark: will be calculated from palette.primary.main,
//     // contrastText: will be calculated to contrast with palette.primary.main
//   },
//   secondary: {
//     light: '#0066ff',
//     main: '#E6E30F',
//     // dark: will be calculated from palette.secondary.main,
//     contrastText: '#ffcc00',
//   },
//   // Used by `getContrastText()` to maximize the contrast between
//   // the background and the text.
//   contrastThreshold: 3,
//   // Used by the functions below to shift a color's luminance by approximately
//   // two indexes within its tonal palette.
//   // E.g., shift from Red 500 to Red 300 or Red 700.
//   tonalOffset: 0.2,
//   status: {
//     danger: '#ffcc00',
//   },
// });
function MyApp({ Component , pageProps  }) {
    return(// <ApolloProvider client={client}>
    /*#__PURE__*/ jsx_runtime_.jsx(auth/* AuthProvider */.H, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
            theme: libs_theme,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [667], () => (__webpack_exec__(7362)));
module.exports = __webpack_exports__;

})();