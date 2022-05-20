(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const NextI18Next = __webpack_require__(8475).default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: [],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    ara: 'ar',
    deu: 'de',
    eng: 'en',
    ind: 'id',
    prt: 'pt',
    zho: 'zh'
  }
});

/***/ }),

/***/ 3293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 14 modules
var createTheme = __webpack_require__(8225);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
;// CONCATENATED MODULE: external "jss"
const external_jss_namespaceObject = require("jss");
;// CONCATENATED MODULE: external "next-page-transitions"
const external_next_page_transitions_namespaceObject = require("next-page-transitions");
;// CONCATENATED MODULE: external "jss-rtl"
const external_jss_rtl_namespaceObject = require("jss-rtl");
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
;// CONCATENATED MODULE: external "react-top-loading-bar"
const external_react_top_loading_bar_namespaceObject = require("react-top-loading-bar");
var external_react_top_loading_bar_default = /*#__PURE__*/__webpack_require__.n(external_react_top_loading_bar_namespaceObject);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./theme/palette.js
var palette = __webpack_require__(4947);
var palette_default = /*#__PURE__*/__webpack_require__.n(palette);
;// CONCATENATED MODULE: ./theme/appTheme.js


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: (palette_default())[color].palette.primary,
    secondary: (palette_default())[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    PrivateTabIndicator: {
      root: {
        borderRadius: '4px 4px 0 0',
        height: 5
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12
      },
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${(palette_default())[color].palette.secondary.main}`
      },
      containedPrimary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${(palette_default())[color].palette.primary.main}`
      },
      root: {
        borderRadius: 6,
        fontWeight: 600,
        boxShadow: 'none',
        padding: '8px 24px'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      sizeLarge: {
        padding: '7px 36px'
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: (palette_default())[color].palette.primary.main
        }
      },
      filled: {
        '&$shrink': {
          color: (palette_default())[color].palette.primary.main
        }
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomColor: (palette_default())[color].palette.primary.main
        }
      },
      multiline: {
        padding: 0,
        '& textarea': {
          paddingTop: 27
        }
      }
    },
    MuiOutlinedInput: {
      inputAdornedStart: {
        paddingLeft: 40
      }
    }
  }
});

/* harmony default export */ const theme_appTheme = (appTheme);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/GradientDeco/GradientDeco.js




const useStyles = (0,makeStyles/* default */.Z)(() => ({
  hide: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));
function GradientDeco() {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const {
    0: themeState,
    1: setTheme
  } = (0,external_react_.useState)('light');
  (0,external_react_.useEffect)(() => {
    setTheme(theme.palette.type);
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.hide,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      width: "38px",
      height: "43px",
      viewBox: "0 0 38 43",
      version: "1.1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
          x1: "34.5063846%",
          y1: "15.1303808%",
          x2: "20.8153155%",
          y2: "110.664023%",
          id: "titleLinearGradient-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
            offset: "0%"
          }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
            offset: "100%"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
          x1: "66.8412844%",
          y1: "30.62426%",
          x2: "-21.0581447%",
          y2: "100%",
          id: "hexaLinearGradient-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: theme.palette.secondary.main,
            offset: "0%"
          }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: theme.palette.secondary.light,
            offset: "100%"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
          x1: "66.8412844%",
          y1: "30.62426%",
          x2: "-21.0581447%",
          y2: "100%",
          id: "hexaLinearGradient-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: theme.palette.primary.main,
            offset: "0%"
          }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: theme.palette.primary.light,
            offset: "100%"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
          x1: "33.650521%",
          y1: "14.3140713%",
          x2: "18.9688557%",
          y2: "110.664023%",
          id: "frmDecoLinearGradient-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
            offset: "0%"
          }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
            stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
            offset: "100%"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M40.0268505,351.888258 C299.475775,-137.933311 505.867463,-306.185765 659.201915,-152.869104 C788.709519,-23.376527 935.329477,275.20658 1099.06179,742.880218 C1145.23269,874.759604 1075.75224,1019.09788 943.872862,1065.26879 C895.054476,1082.36009 842.170492,1084.07787 792.345858,1070.19072 L372.341154,953.126774 C318.012942,937.984384 270.301991,905.123239 236.786543,859.762889 L60.1185534,620.657575 C2.28750686,542.3881 -5.52448856,437.886026 40.0268505,351.888258 Z",
          id: "path-2"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/GradientDeco/index.js

;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/* import css vendors */













let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(0);
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)(_objectSpread(_objectSpread({}, theme_appTheme('roseGold', themeType)), {}, {
    direction: i18n.i18n.language === 'ara' ? 'rtl' : 'ltr'
  }));
  (0,external_react_.useEffect)(() => {
    // Set layout direction
    document.dir = i18n.i18n.language === 'ara' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, theme_appTheme('roseGold', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = (0,createTheme/* default */.Z)(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = (0,external_jss_namespaceObject.create)({
    plugins: [...(0,styles_.jssPreset)().plugins, external_jss_rtl_default()()]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(styles_.StylesProvider, {
      jss: jss,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: muiTheme,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(GradientDeco, {}), /*#__PURE__*/jsx_runtime_.jsx((external_react_top_loading_bar_default()), {
          height: 0,
          color: theme.palette.primary.light,
          progress: loading,
          className: "top-loading-bar"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "main-wrap",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_next_page_transitions_namespaceObject.PageTransition, {
            timeout: 300,
            classNames: "page-fade-transition",
            children: /*#__PURE__*/(0,external_react_.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
              onToggleDark: toggleDarkTheme,
              onToggleDir: toggleDirection,
              key: router.route
            }))
          })
        })]
      })
    })]
  });
}

MyApp.getInitialProps = async appContext => _objectSpread({}, await app.default.getInitialProps(appContext));

/* harmony default export */ const _app = ((0,i18n.appWithTranslation)(MyApp));

/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 4229:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [521,834,544,947], () => (__webpack_exec__(3293)));
module.exports = __webpack_exports__;

})();