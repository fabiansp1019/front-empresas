"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./service/auth.js":
/*!*************************!*\
  !*** ./service/auth.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retrieveToken\": function() { return /* binding */ retrieveToken; },\n/* harmony export */   \"removeToken\": function() { return /* binding */ removeToken; },\n/* harmony export */   \"User\": function() { return /* binding */ User; },\n/* harmony export */   \"useFetchCurrentUser\": function() { return /* binding */ useFetchCurrentUser; }\n/* harmony export */ });\n/* harmony import */ var C_Users_USUARIO_Desktop_Node_js_API_GraphQl_Emp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_USUARIO_Desktop_Node_js_API_GraphQl_Emp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_USUARIO_Desktop_Node_js_API_GraphQl_Emp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import { baseUrl } from './config'\nvar TOKEN_KEY = 'authorization';\n/**\r\n * ⚠️ Atención\r\n *\r\n * Esta es una capa de autenticación basada totalmente en el cliente.\r\n *\r\n * El token JWT es guardado como es en SessionStorage.\r\n *\r\n * Una vez se cierre la ventana del navegador la sesión desaparecerá.\r\n *\r\n * Esta implementación solo fue hecha por propósitos académicos.\r\n *\r\n * En un ambiente real, el token debería guardarse en el servidor y configurar\r\n * una cookie segura que haga las veces de sesión. Esto se puede lograr con Next.js y su capa\r\n * de APIs sin necesidad de tocar la API GraphQL/Express.\r\n *\r\n * Alternativamente, se podría guardar el token en un Service Worker.\r\n *\r\n * Si quieres conocer más sobre los riesgos, e implicaciones te invito a ver:\r\n * - https://platzi.com/cursos/nextjs-owasp/\r\n * - https://platzi.com/cursos/nextjs-auth/\r\n */ // export function useLogin({ onDone }) {\n//   const [isLoading, setIsLoading] = useState(false)\n//   const [message, setMessage] = useState('')\n//   const login = async (event) => {\n//     event.preventDefault()\n//     const username = event.currentTarget.username.value\n//     const password = event.currentTarget.pass.value\n//     try {\n//       setIsLoading(true)\n//       setMessage('')\n//       const response = await fetch(`${baseUrl}/api/login`, {\n//         method: 'POST',\n//         headers: {\n//           'Content-Type': 'application/json',\n//         },\n//         body: JSON.stringify({\n//           username,\n//           password,\n//         }),\n//       })\n//       if (!response.ok) {\n//         throw new Error(\n//           `Failed authenticating with HTTP status ${response.status}`\n//         )\n//       }\n//       const data = await response.json()\n//       if (data && typeof data.token === 'string') {\n//         await saveToken(data.token)\n//         onDone()\n//         return\n//       }\n//       throw new Error(`No token found in the response`)\n//     } catch (e) {\n//       console.log(e)\n//       setIsLoading(false)\n//       setMessage('Usuario o contraseña inválidos')\n//     }\n//   }\n//   return {\n//     isLoading,\n//     message,\n//     login,\n//   }\n// }\n// function saveToken(token) {\n//   return new Promise<string>((resolve) => {\n//     try {\n//       window.sessionStorage.setItem(TOKEN_KEY, token)\n//       resolve(token)\n//     } catch (e) {\n//       throw new Error(\n//         'El token no se guardó. ¿Estás en modo incógnito? – Asegúrate que SessionStorage esté habilitado para esta página'\n//       )\n//     }\n//   })\n// }\nfunction retrieveToken() {\n    return new Promise < string | null > function(resolve) {\n        var token = window.sessionStorage.getItem(TOKEN_KEY);\n        resolve(token);\n    };\n}\nfunction removeToken() {\n    return function(resolve) {\n        window.sessionStorage.removeItem(TOKEN_KEY);\n        resolve();\n    };\n}\nvar User = {\n    username: username,\n    id: id\n};\nfunction useFetchCurrentUser() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('idle'), status = ref[0], setStatus = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), user = ref1[0], setUser = ref1[1];\n    var User = {\n        username: username,\n        id: id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var validateAsync = function() {\n            var _ref = _asyncToGenerator(C_Users_USUARIO_Desktop_Node_js_API_GraphQl_Emp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var token, response, data;\n                return C_Users_USUARIO_Desktop_Node_js_API_GraphQl_Emp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            setStatus('loading');\n                            _ctx.next = 4;\n                            return retrieveToken();\n                        case 4:\n                            token = _ctx.sent;\n                            if (token) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            throw new Error('Please log in first');\n                        case 7:\n                            _ctx.next = 9;\n                            return fetch(\"http://localhost:4000/graphql\", {\n                                method: 'GET',\n                                headers: {\n                                    'Content-Type': 'application/json',\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                        case 9:\n                            response = _ctx.sent;\n                            if (response.ok) {\n                                _ctx.next = 12;\n                                break;\n                            }\n                            throw new Error(\"Unauthorized request\");\n                        case 12:\n                            _ctx.next = 14;\n                            return response.json();\n                        case 14:\n                            data = _ctx.sent;\n                            if (!data) {\n                                _ctx.next = 19;\n                                break;\n                            }\n                            setStatus('success');\n                            setUser({\n                                username: data.username,\n                                id: data.id\n                            });\n                            return _ctx.abrupt(\"return\");\n                        case 19:\n                            throw new Error('Unexpected data format');\n                        case 22:\n                            _ctx.prev = 22;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setStatus('success');\n                            setUser(null);\n                        case 26:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        22\n                    ]\n                ]);\n            }));\n            return function validateAsync() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        validateAsync();\n    }, []);\n    return {\n        status: status,\n        user: user\n    };\n}\n_s(useFetchCurrentUser, \"2z6VQPdP/UvlBj/thStHD/TEWCk=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxFQUFxQztBQUVyQyxHQUFLLENBQUNFLFNBQVMsR0FBRyxDQUFlO0FBRWpDLEVBb0JHO0FBR0gsRUFBc0Q7QUFDdEQsRUFBK0M7QUFHL0MsRUFBcUM7QUFDckMsRUFBNkI7QUFDN0IsRUFBMEQ7QUFDMUQsRUFBc0Q7QUFFdEQsRUFBWTtBQUNaLEVBQTJCO0FBQzNCLEVBQXVCO0FBQ3ZCLEVBQStEO0FBQy9ELEVBQTBCO0FBQzFCLEVBQXFCO0FBQ3JCLEVBQWdEO0FBQ2hELEVBQWE7QUFDYixFQUFpQztBQUNqQyxFQUFzQjtBQUN0QixFQUFzQjtBQUN0QixFQUFjO0FBQ2QsRUFBVztBQUVYLEVBQTRCO0FBQzVCLEVBQTJCO0FBQzNCLEVBQXdFO0FBQ3hFLEVBQVk7QUFDWixFQUFVO0FBRVYsRUFBMkM7QUFDM0MsRUFBc0Q7QUFDdEQsRUFBc0M7QUFDdEMsRUFBbUI7QUFDbkIsRUFBaUI7QUFDakIsRUFBVTtBQUVWLEVBQTBEO0FBQzFELEVBQW9CO0FBQ3BCLEVBQXVCO0FBQ3ZCLEVBQTRCO0FBQzVCLEVBQXFEO0FBQ25ELEVBQU07QUFDUixFQUFNO0FBRU4sRUFBYTtBQUNiLEVBQWlCO0FBQ2pCLEVBQWU7QUFDZixFQUFhO0FBQ2IsRUFBTTtBQUNOLEVBQUk7QUFFSixFQUE4QjtBQUM5QixFQUE4QztBQUM5QyxFQUFZO0FBQ1osRUFBd0Q7QUFDeEQsRUFBdUI7QUFDdkIsRUFBb0I7QUFDcEIsRUFBeUI7QUFDekIsRUFBNkg7QUFDN0gsRUFBVTtBQUNWLEVBQVE7QUFDUixFQUFPO0FBQ1AsRUFBSTtBQUVKLE1BQU07SUFDSjtRQUNFLEdBQUssQ0FBQ0s7UUFDTkQsT0FBTyxDQUFDQztJQUNWLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTTtJQUNKO1FBQ0VDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDRztRQUN0Qk4sT0FBTztJQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQ08sSUFBSSxHQUFHLENBQUM7SUFBQ0MsUUFBUSxFQUFSQTtJQUFVQyxFQUFFLEVBQUZBLEVBQUU7QUFBQyxDQUFDO0FBRWxDLE1BQU07O0lBQ0osR0FBSztJQUNMO0FBRUssQ0FBQ0YsSUFBSSxHQUFHLENBQUM7UUFBQ0MsUUFBUSxFQUFSQSxRQUFRO1FBQUVDLEVBQUUsRUFBRkEsRUFBRTtJQUFDLENBQUM7SUFDN0JkOzs7b0JBTVlNLEtBQUssRUFLTGU7Ozs7Ozs7OztxQkFMQWYsS0FBSzs7Ozs7Ozs7O2dDQU1UbUIsTUFBTSxFQUFFO2dDQUNSQyxPQUFPLEVBQUUsMEpBQUM7b0NBQ1IsQ0FBYztpTEFDZEMsR0FBYSxFQUFHLENBQU8sU0FBUSxPQUFOckI7Z0NBQzNCLENBQUM7NEJBQ0gsQ0FBQzs7NEJBTktlLFFBQVE7Z0NBUVRBLFFBQVEsQ0FBQ087Ozs7NEJBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQ0w7Ozs7OzRCQUdORDtpQ0FDRkEsSUFBSTs7Ozs0QkFDTkwsU0FBUyxDQUFDLENBQVM7NEJBQ25CRSxPQUFPLENBQUMsQ0FBQztnQ0FBQ047OzRCQUFxQyxDQUFDOzs7NEJBSWxELEtBQUssQ0FBQyxHQUFHLENBQUNVLEtBQUssQ0FBQyxDQUF3Qjs7Ozs0QkFFeENOOzRCQUNBRSxPQUFPLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7WUFFaEIsQ0FBQzs0QkFsQ0tDOzs7O1FBb0NOQSxhQUFhO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sQ0FBQyxDQUFDO1FBQUNKLE1BQU0sRUFBTkEsTUFBTTtRQUFFRSxJQUFJLEVBQUpBLElBQUk7SUFBQyxDQUFDO0FBQ3pCLENBQUM7R0E5Q2VILG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlL2F1dGguanM/MmFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyBpbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9jb25maWcnXHJcblxyXG5jb25zdCBUT0tFTl9LRVkgPSAnYXV0aG9yaXphdGlvbidcclxuXHJcbi8qKlxyXG4gKiDimqDvuI8gQXRlbmNpw7NuXHJcbiAqXHJcbiAqIEVzdGEgZXMgdW5hIGNhcGEgZGUgYXV0ZW50aWNhY2nDs24gYmFzYWRhIHRvdGFsbWVudGUgZW4gZWwgY2xpZW50ZS5cclxuICpcclxuICogRWwgdG9rZW4gSldUIGVzIGd1YXJkYWRvIGNvbW8gZXMgZW4gU2Vzc2lvblN0b3JhZ2UuXHJcbiAqXHJcbiAqIFVuYSB2ZXogc2UgY2llcnJlIGxhIHZlbnRhbmEgZGVsIG5hdmVnYWRvciBsYSBzZXNpw7NuIGRlc2FwYXJlY2Vyw6EuXHJcbiAqXHJcbiAqIEVzdGEgaW1wbGVtZW50YWNpw7NuIHNvbG8gZnVlIGhlY2hhIHBvciBwcm9ww7NzaXRvcyBhY2Fkw6ltaWNvcy5cclxuICpcclxuICogRW4gdW4gYW1iaWVudGUgcmVhbCwgZWwgdG9rZW4gZGViZXLDrWEgZ3VhcmRhcnNlIGVuIGVsIHNlcnZpZG9yIHkgY29uZmlndXJhclxyXG4gKiB1bmEgY29va2llIHNlZ3VyYSBxdWUgaGFnYSBsYXMgdmVjZXMgZGUgc2VzacOzbi4gRXN0byBzZSBwdWVkZSBsb2dyYXIgY29uIE5leHQuanMgeSBzdSBjYXBhXHJcbiAqIGRlIEFQSXMgc2luIG5lY2VzaWRhZCBkZSB0b2NhciBsYSBBUEkgR3JhcGhRTC9FeHByZXNzLlxyXG4gKlxyXG4gKiBBbHRlcm5hdGl2YW1lbnRlLCBzZSBwb2Ryw61hIGd1YXJkYXIgZWwgdG9rZW4gZW4gdW4gU2VydmljZSBXb3JrZXIuXHJcbiAqXHJcbiAqIFNpIHF1aWVyZXMgY29ub2NlciBtw6FzIHNvYnJlIGxvcyByaWVzZ29zLCBlIGltcGxpY2FjaW9uZXMgdGUgaW52aXRvIGEgdmVyOlxyXG4gKiAtIGh0dHBzOi8vcGxhdHppLmNvbS9jdXJzb3MvbmV4dGpzLW93YXNwL1xyXG4gKiAtIGh0dHBzOi8vcGxhdHppLmNvbS9jdXJzb3MvbmV4dGpzLWF1dGgvXHJcbiAqL1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luKHsgb25Eb25lIH0pIHtcclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbi8vICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuLy8gICBjb25zdCBsb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgY29uc3QgdXNlcm5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlXHJcbi8vICAgICBjb25zdCBwYXNzd29yZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFzcy52YWx1ZVxyXG5cclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4vLyAgICAgICBzZXRNZXNzYWdlKCcnKVxyXG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9sb2dpbmAsIHtcclxuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4vLyAgICAgICAgICAgdXNlcm5hbWUsXHJcbi8vICAgICAgICAgICBwYXNzd29yZCxcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgfSlcclxuXHJcbi8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICAgICAgICBgRmFpbGVkIGF1dGhlbnRpY2F0aW5nIHdpdGggSFRUUCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YFxyXG4vLyAgICAgICAgIClcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4vLyAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YS50b2tlbiA9PT0gJ3N0cmluZycpIHtcclxuLy8gICAgICAgICBhd2FpdCBzYXZlVG9rZW4oZGF0YS50b2tlbilcclxuLy8gICAgICAgICBvbkRvbmUoKVxyXG4vLyAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHRva2VuIGZvdW5kIGluIHRoZSByZXNwb25zZWApXHJcbi8vICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbi8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuLy8gICAgICAgc2V0TWVzc2FnZSgnVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGludsOhbGlkb3MnKVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIGlzTG9hZGluZyxcclxuLy8gICAgIG1lc3NhZ2UsXHJcbi8vICAgICBsb2dpbixcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNhdmVUb2tlbih0b2tlbikge1xyXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9LRVksIHRva2VuKVxyXG4vLyAgICAgICByZXNvbHZlKHRva2VuKVxyXG4vLyAgICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICAgICAgJ0VsIHRva2VuIG5vIHNlIGd1YXJkw7MuIMK/RXN0w6FzIGVuIG1vZG8gaW5jw7Nnbml0bz8g4oCTIEFzZWfDunJhdGUgcXVlIFNlc3Npb25TdG9yYWdlIGVzdMOpIGhhYmlsaXRhZG8gcGFyYSBlc3RhIHDDoWdpbmEnXHJcbi8vICAgICAgIClcclxuLy8gICAgIH1cclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVUb2tlbigpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oVE9LRU5fS0VZKVxyXG4gICAgcmVzb2x2ZSh0b2tlbilcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XHJcbiAgcmV0dXJuICgocmVzb2x2ZSkgPT4ge1xyXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fS0VZKVxyXG4gICAgcmVzb2x2ZSgpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IHZhciBVc2VyID0geyB1c2VybmFtZSwgaWQgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoQ3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdpZGxlJylcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBVc2VyID0geyB1c2VybmFtZSwgaWQgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldFN0YXR1cygnbG9hZGluZycpXHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRva2VuIGZpcnN0XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCByZXRyaWV2ZVRva2VuKClcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBsb2cgaW4gZmlyc3QnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmF1dGhvcml6ZWQgcmVxdWVzdGApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgaWYgKGRhdGEgKSB7IC8vICYmIHR5cGVvZiBkYXRhLnVzZXJuYW1lID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgc2V0U3RhdHVzKCdzdWNjZXNzJylcclxuICAgICAgICAgIHNldFVzZXIoeyB1c2VybmFtZTogZGF0YS51c2VybmFtZSwgaWQ6IGRhdGEuaWQgfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGRhdGEgZm9ybWF0JylcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldFN0YXR1cygnc3VjY2VzcycpXHJcbiAgICAgICAgc2V0VXNlcihudWxsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVBc3luYygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiB7IHN0YXR1cywgdXNlciB9XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUT0tFTl9LRVkiLCJyZXRyaWV2ZVRva2VuIiwiUHJvbWlzZSIsInN0cmluZyIsInJlc29sdmUiLCJ0b2tlbiIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsIlVzZXIiLCJ1c2VybmFtZSIsImlkIiwidXNlRmV0Y2hDdXJyZW50VXNlciIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZXIiLCJzZXRVc2VyIiwidmFsaWRhdGVBc3luYyIsInJlc3BvbnNlIiwiZGF0YSIsIkVycm9yIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service/auth.js\n");

/***/ })

});