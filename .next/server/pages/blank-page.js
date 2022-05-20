"use strict";
(() => {
var exports = {};
exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 5437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3987);


/***/ }),

/***/ 3488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blank_page)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./components/Header/index.js + 5 modules
var Header = __webpack_require__(7706);
// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__(5437);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(3560);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(2829);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__(2285);
;// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = (0,makeStyles/* default */.Z)(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: '#424242',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ const notification_style = (notificationStyles);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Notification/Notification.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function TransitionUp(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(Slide/* default */.Z, _objectSpread(_objectSpread({}, props), {}, {
    direction: "up"
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = notification_style();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(true);

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Snackbar/* default */.Z, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/jsx_runtime_.jsx(SnackbarContent/* default */.Z, {
      message: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        id: "message-id",
        children: t('common:notif_msg')
      }),
      classes: {
        action: classes.action
      },
      action: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        color: "secondary",
        variant: "contained",
        className: classes.button,
        onClick: handleClose,
        children: t('common:accept')
      })
    })
  });
}

/* harmony default export */ const Notification_Notification = ((0,i18n.withTranslation)(['common'])(Notification));
;// CONCATENATED MODULE: ./components/Notification/index.js

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
;// CONCATENATED MODULE: ./pages/blank-page.js














const sectionMargin = margin => margin * 20;

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  }
}));

function BlankPage(props) {
  const classes = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    t
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [(brand_default()).crypto.name, "\xA0 - Blank page"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir,
        invert: true
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: classes.containerWrap,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
          className: external_clsx_default()(classes.spaceTop, classes.spaceBottom),
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h2",
            align: "center",
            gutterBottom: true,
            children: t('common:title')
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h4",
            align: "center",
            children: t('common:subtitle')
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: classes.spaceTop,
        children: /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
          invert: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Notification_Notification, {})]
    })]
  });
}

BlankPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ const blank_page = ((0,i18n.withTranslation)('common')(BlankPage));

/***/ }),

/***/ 1976:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 1103:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ 5339:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 9638:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3805:
/***/ ((module) => {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6400:
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ 5181:
/***/ ((module) => {

module.exports = require("react-scrollspy");

/***/ }),

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [521,392,950,834,560,907,146], () => (__webpack_exec__(3488)));
module.exports = __webpack_exports__;

})();