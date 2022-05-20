exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3832);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1749);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1103);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7397);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2467);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9537);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6718);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5639);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9659);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7812);
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);
/* harmony import */ var _public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9477);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7468);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3659);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Copyright() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    variant: "body2",
    display: "block",
    color: "textSecondary",
    children: ["\xA9\xA0", (_public_text_brand__WEBPACK_IMPORTED_MODULE_4___default().crypto.footerText)]
  });
}

const footer = {
  description: ['Resources', 'Documentation', 'Github repository', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use']
};
const news = [{
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_5__/* .default.photo[5] */ .Z.photo[5]
}, {
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_5__/* .default.photo[6] */ .Z.photo[6]
}, {
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_5__/* .default.photo[7] */ .Z.photo[7]
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const classes = (0,_footer_style__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)();
  const {
    t,
    invert
  } = props;
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    lang: 'eng'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_6__.i18n.language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_6__.i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_6__.i18n.changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    fixed: true,
    component: "footer",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.footer, invert && classes.invert),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
          item: true,
          xs: 12,
          md: 5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: classes.logo,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
              src: (_public_images_crypto_logo_svg__WEBPACK_IMPORTED_MODULE_3___default()),
              alt: "logo"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
              variant: "h6",
              color: "textPrimary",
              children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_4___default().crypto.projectName)
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
            color: "textPrimary",
            className: classes.footerDesc,
            gutterBottom: true,
            children: t('common:crypto-landing.banner_title')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: classes.quickLinks,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
              variant: "h6",
              className: classes.title,
              color: "textPrimary",
              gutterBottom: true,
              children: t('common:crypto-landing.footer_link')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
              children: footer.description.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
                  href: footer.link[index],
                  variant: "subtitle1",
                  color: "textSecondary",
                  children: item
                })
              }, item))
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
          item: true,
          xs: 12,
          md: 4,
          children: news.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
            className: classes.blogItem,
            href: "#",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("figure", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
                src: item.img,
                alt: "thumb"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: classes.listText,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                variant: "button",
                className: classes.category,
                children: t('common:crypto-landing.footer_news')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                display: "block",
                component: "span",
                children: "Lates news from  Web3 and Defi ecosystem"
              })]
            })]
          }, index.toString()))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
          item: true,
          xs: 12,
          md: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: classes.socmed,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
              "aria-label": "FB",
              className: classes.margin,
              size: "small",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "ion-logo-twitter"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
              "aria-label": "TW",
              className: classes.margin,
              size: "small",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "ion-logo-facebook"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
              "aria-label": "IG",
              className: classes.margin,
              size: "small",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "ion-logo-instagram"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
              "aria-label": "LI",
              className: classes.margin,
              size: "small",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "ion-logo-linkedin"
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
            value: values.lang,
            onChange: handleChange,
            MenuProps: {
              container: ctn
            },
            startAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
              className: classes.icon,
              position: "start",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_2___default()), {})
            }),
            className: classes.selectLang,
            classes: {
              selectMenu: classes.selectMenu
            },
            input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
              labelWidth: 200,
              name: "lang",
              id: "outlined-lang-simple"
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
              value: "eng",
              children: "English"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Copyright, {})]
        })]
      })
    })
  });
}

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_6__.withTranslation)(['crypto-landing'])(Footer));

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9693);

const footerStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  footer: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        width: '47%'
      },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    '&$invert': {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      '& $logo': {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      '& $title': {
        color: theme.palette.secondary.main
      },
      '& $blogItem': {
        '& $category': {
          color: theme.palette.secondary.main
        }
      },
      '& $selectLang': {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  title: {
    color: theme.palette.secondary.light,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  },
  quickLinks: {
    marginTop: theme.spacing(5)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      textTransform: 'uppercase',
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    display: 'inherit',
    margin: theme.spacing(2, 0, 4),
    color: theme.palette.common.white,
    '& $icon': {
      top: 29,
      color: theme.palette.primary.light,
      position: 'relative'
    },
    '& svg': {
      color: theme.palette.secondary.light
    },
    '& fieldset': {
      borderRadius: 10,
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.primary.light, 0.5)}`
      },
      '& + div + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)'
      }
    }
  },
  selectMenu: {
    width: 160,
    background: 'none !important'
  },
  footerCounter: {
    position: 'relative',
    background: `linear-gradient(-130deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} -20%, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 70%)`,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(25)
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(15)
    }
  },
  decoTop: {
    position: 'absolute',
    top: -20,
    left: 0,
    width: 1280,
    height: 400,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.2)'
    },
    [theme.breakpoints.up(1400)]: {
      transform: 'scale(2, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1.4, 1)',
      left: -300
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      width: '100%',
      height: '100%',
      fill: theme.palette.type === 'dark' ? (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .darken */ ._j)(theme.palette.primary.dark, 0.6) : (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .lighten */ .$n)(theme.palette.primary.main, 0.84),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    textAlign: 'left',
    justifyContent: 'flex-start',
    '& $category': {
      marginBottom: theme.spacing(),
      display: 'block',
      color: theme.palette.secondary.light
    },
    '& $listText': {
      flex: 1,
      color: theme.palette.primary.light
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(1, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%'
      }
    },
    '& p': {
      fontSize: 13
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerStyles);

/***/ }),

/***/ 7706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Header_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5517);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Popover/Popover.js
var Popover = __webpack_require__(2387);
// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(5339);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(1976);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(6837);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js + 1 modules
var ListItem = __webpack_require__(8867);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(6869);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var ListItemSecondaryAction = __webpack_require__(1860);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(5757);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(9693);
// EXTERNAL MODULE: ./public/images/flag-logo.png
var flag_logo = __webpack_require__(6785);
var flag_logo_default = /*#__PURE__*/__webpack_require__.n(flag_logo);
;// CONCATENATED MODULE: ./components/Header/header-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${(flag_logo_default())}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = (0,makeStyles/* default */.Z)(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  invert: {
    color: theme.palette.text.primary,
    '& $mobileMenu': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.text.primary
    }
  },
  openDrawer: {},
  header: {
    position: 'absolute',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(7)
    },
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      position: 'fixed',
      background: theme.palette.type === 'dark' ? (0,colorManipulator/* darken */._j)(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
      paddingTop: 0,
      transition: 'background 0.3s ease',
      boxShadow: theme.shadows[5],
      '& $logo': {
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0
        }
      },
      '& $headerContent': {
        '& nav': {
          padding: theme.spacing()
        }
      },
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.common.white
        },
        '& a': {
          color: theme.palette.common.white
        }
      },
      '& $divider': {
        borderLeftColor: 'rgba(255, 255, 255, 0.5)'
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none'
    },
    '&$invert': {
      paddingTop: 0,
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.text.primary
        },
        '& a': {
          color: theme.palette.text.primary,
          '&$button': {
            color: theme.palette.common.white
          }
        }
      },
      '& $divider': {
        borderLeftColor: theme.palette.divider
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: `${theme.palette.text.primary}`,
          '&:after, &:before': {
            backgroundColor: `${theme.palette.text.primary}`
          }
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      width: 64,
      height: 64,
      marginBottom: theme.spacing(),
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(15),
    padding: theme.spacing(0.5)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      color: theme.palette.common.white,
      fontSize: 16,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0.5, 1),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 3)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 0
      }
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: theme.spacing(0, 1.5),
          borderRadius: 6,
          transition: 'all 0.3s ease-out',
          border: '1px solid transparent',
          '&:hover': {
            border: `1px solid ${theme.palette.common.white}`
          }
        },
        '&[class="active"]': {
          '& a': {
            boxShadow: '0 1.5px 32px -8px rgba(0, 0, 0, 0.22)',
            color: `${theme.palette.primary.main} !important`,
            background: theme.palette.type === 'dark' ? (0,colorManipulator/* alpha */.Fq)(theme.palette.common.black, 0.3) : (0,colorManipulator/* alpha */.Fq)(theme.palette.common.white, 0.84)
          }
        }
      }
    }
  },
  navAuth: {
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('lg')]: {
      flex: 1
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    background: theme.palette.type === 'dark' ? (0,colorManipulator/* darken */._j)(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: `${theme.palette.common.white}`,
      '&:after, &:before': {
        backgroundColor: `${theme.palette.common.white}`
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  divider: {
    background: 'none',
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    height: 28
  },
  market: {
    position: 'absolute',
    top: 0,
    zIndex: 1200,
    left: 0,
    width: '100%',
    height: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing()
  },
  item: {
    color: theme.palette.common.white,
    padding: theme.spacing(0.5, 4),
    '&:focus': {
      outline: 'none'
    }
  },
  coin: {
    display: 'flex',
    '& $logo': {
      width: 20,
      height: 'auto',
      marginRight: theme.spacing(),
      '& img': {
        width: '100%',
        height: 'auto'
      }
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#5DD662'
  },
  stay: {
    color: '#b2b2b2'
  }
}));
/* harmony default export */ const header_style = (headerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header/Settings.js




















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,external_react_.useState)(null);
  const classes = header_style();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,external_react_.useState)(null);
  const {
    0: isDark,
    1: setDark
  } = (0,external_react_.useState)(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      i18n.i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n.i18n.changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  (0,external_react_.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert,
    t
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.setting,
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
      "aria-describedby": id,
      "aria-label": "Settings",
      onClick: handleClick,
      className: external_clsx_default()(classes.icon, open && classes.active, invert && classes.invert),
      children: /*#__PURE__*/jsx_runtime_.jsx((Settings_default()), {
        fontSize: "inherit"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Popover/* default */.ZP, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      container: ctn,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        component: "nav",
        className: classes.modeMenu,
        "aria-label": "Mode-menu",
        subheader: /*#__PURE__*/jsx_runtime_.jsx(ListSubheader/* default */.Z, {
          component: "div",
          children: t('common:crypto-landing.header_theme')
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            component: "div",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              component: "label",
              container: true,
              alignItems: "center",
              spacing: 1,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: t('common:crypto-landing.header_light')
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(Switch/* default */.Z, {
                  checked: isDark,
                  onChange: handleChangeMode,
                  value: isDark,
                  inputProps: {
                    'aria-label': 'checkbox'
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                item: true,
                children: t('common:crypto-landing.header_dark')
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        component: "nav",
        className: classes.langMenu,
        "aria-label": "Language-menu",
        subheader: /*#__PURE__*/jsx_runtime_.jsx(ListSubheader/* default */.Z, {
          component: "div",
          children: t('common:crypto-landing.header_language')
        }),
        children: i18n.i18n.options.allLanguages && i18n.i18n.options.allLanguages.map(val => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
          role: undefined,
          dense: true,
          button: true,
          onClick: () => handleChangeLang(val),
          children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: val
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:' + val)
          }), i18n.i18n.language === val && /*#__PURE__*/jsx_runtime_.jsx(ListItemSecondaryAction/* default */.Z, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Check_default()), {
              color: "primary"
            })
          })]
        }, val))
      })]
    })]
  });
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ const Header_Settings = ((0,i18n.withTranslation)(['common', 'crypto-landing'])(Settings));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(3901);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/Header/MarketPrice.js
function MarketPrice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function MarketPrice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarketPrice_ownKeys(Object(source), true).forEach(function (key) { MarketPrice_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarketPrice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarketPrice_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const marketList = [{
  logo: '/images/crypto/btc.png',
  name: 'BTC',
  price: 30154,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/xrp.png',
  name: 'XRP',
  price: 0.003,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/nem.png',
  name: 'NEM',
  price: 0.003,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/iot.png',
  name: 'IOTA',
  price: 0.010,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/mnr.png',
  name: 'MNR',
  price: 1.45,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/byc.png',
  name: 'BYC',
  price: 22.34,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/iot.png',
  name: 'IOTA',
  price: 0.010,
  status: 'down',
  percent: 3
}, {
  logo: '/images/crypto/mnr.png',
  name: 'MNR',
  price: 1.45,
  status: 'up',
  percent: 8
}, {
  logo: '/images/crypto/byc.png',
  name: 'BYC',
  price: 22.34,
  status: 'down',
  percent: 3
}];
function MarketPrice() {
  const classes = header_style();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    cssEase: 'linear',
    pauseOnHover: true
  };

  const renderPercent = (arrow, percent) => {
    switch (arrow) {
      case 'down':
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: classes.down,
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            children: "\u25BC"
          }), percent, "%"]
        });

      case 'up':
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: classes.up,
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            children: "\u25B2"
          }), percent, "%"]
        });

      default:
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: classes.stay,
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            children: "-"
          }), percent, "%"]
        });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.market,
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), MarketPrice_objectSpread(MarketPrice_objectSpread({}, settings), {}, {
      children: marketList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.item,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.coin,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.Z, {
            className: classes.logo,
            src: item.logo,
            alt: item.name
          }), item.name, "\xA0$\xA0", item.price, "\xA0(", renderPercent(item.status, item.percent), ")"]
        })
      }, index.toString()))
    }))
  });
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js + 3 modules
var SwipeableDrawer = __webpack_require__(4817);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(671);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(6995);
;// CONCATENATED MODULE: ./components/Header/MobileMenu.js














function MobileMenu(props) {
  const classes = header_style();
  const {
    toggleDrawer,
    open,
    t
  } = props;

  const SideList = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()(classes.menu, open && classes.menuOpen),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
        component: "nav",
        children: [menu/* default.map */.Z.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          button: true,
          component: "a",
          href: `#${item}`,
          style: {
            animationDuration: index * 0.15 + 's'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:crypto-landing.header_' + item),
            className: classes.menuList
          })
        }, index.toString())), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          button: true,
          component: "a",
          href: text_link/* default.crypto.contact */.Z.crypto.contact,
          style: {
            animationDuration: menu/* default.length */.Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:crypto-landing.header_contact'),
            className: classes.menuList
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
          className: classes.dividerSidebar
        }), ['login', 'register'].map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          button: true,
          component: "a",
          href: text_link/* default.crypto */.Z.crypto[item],
          style: {
            animationDuration: menu/* default.length */.Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
            primary: t('common:crypto-landing.header_' + item),
            className: classes.menuList
          })
        }, index.toString()))]
      })
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(SwipeableDrawer/* default */.Z, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(SideList, {})
  });
}

/* harmony default export */ const Header_MobileMenu = ((0,i18n.withTranslation)(['crypto-landing'])(MobileMenu));
// EXTERNAL MODULE: ./public/images/crypto-logo.svg
var crypto_logo = __webpack_require__(1821);
var crypto_logo_default = /*#__PURE__*/__webpack_require__.n(crypto_logo);
;// CONCATENATED MODULE: ./components/Header/Header.js
function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Header_ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/_jsx(AnchorLink, Header_objectSpread(Header_objectSpread({
    to: props.to
  }, props), {}, {
    innerRef: ref
  })); // eslint-disable-line
})));

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = (0,external_react_.useState)(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = header_style();
  const theme = (0,useTheme/* default */.Z)();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('md'));
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(menu/* default.0 */.Z[0], '#' + menu/* default.0 */.Z[0], 100), createData(menu/* default.1 */.Z[1], '#' + menu/* default.1 */.Z[1]), createData(menu/* default.2 */.Z[2], '#' + menu/* default.2 */.Z[2]), createData(menu/* default.3 */.Z[3], '#' + menu/* default.3 */.Z[3])]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,external_react_.useState)(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [isMobile && /*#__PURE__*/jsx_runtime_.jsx(Header_MobileMenu, {
      open: openDrawer,
      toggleDrawer: handleOpenDrawer
    }), !invert && /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      mdDown: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(MarketPrice, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
      component: "header",
      position: "relative",
      id: "header",
      className: external_clsx_default()(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer),
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        fixed: isDesktop,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.headerContent,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: external_clsx_default()(classes.navMenu, invert && classes.invert),
            children: [isMobile && /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              onClick: handleOpenDrawer,
              className: external_clsx_default()('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "hamburger-box",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: external_clsx_default()(classes.bar, 'hamburger-inner')
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.logo,
              children: invert ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: text_link/* default.crypto.home */.Z.crypto.home,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: (crypto_logo_default()),
                  alt: "logo"
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
                href: "#home",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: (crypto_logo_default()),
                  alt: "logo"
                })
              })
            }), isDesktop && /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_scrollspy_default()), {
              items: menu/* default */.Z,
              currentClassName: "active",
              children: [menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: invert ?
                /*#__PURE__*/
                // eslint-disable-next-line
                jsx_runtime_.jsx(Button/* default */.Z, {
                  offset: item.offset || 0,
                  href: '/' + item.url,
                  children: t('common:crypto-landing.header_' + item.name)
                }) :
                /*#__PURE__*/
                // eslint-disable-next-line
                jsx_runtime_.jsx(Button/* default */.Z, {
                  component: (external_react_anchor_link_smooth_scroll_default()),
                  offset: item.offset || 0,
                  href: item.url,
                  children: t('common:crypto-landing.header_' + item.name)
                })
              }, item.id.toString())), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  href: text_link/* default.crypto.contact */.Z.crypto.contact,
                  children: t('common:crypto-landing.header_contact')
                })
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
            mdDown: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(Divider/* default */.Z, {
              className: classes.divider
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: external_clsx_default()(classes.navMenu, classes.navAuth),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
              xsDown: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                href: text_link/* default.crypto.home */.Z.crypto.home,
                children: t('common:crypto-landing.header_login')
              }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                href: text_link/* default.crypto.home */.Z.crypto.home,
                variant: "contained",
                color: "secondary",
                className: classes.button,
                children: t('common:crypto-landing.header_register')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Header_Settings, {
              toggleDark: onToggleDark,
              toggleDir: onToggleDir,
              invert: invert
            })]
          })]
        })
      })
    })]
  });
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ const Header_Header = ((0,i18n.withTranslation)(['crypto-landing'])(Header));
;// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ 6995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = ['promotions', 'feature', 'benefit', 'testimonials'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ 7468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imgAPI = {
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  crypto: ['/images/crypto/block1.svg', '/images/crypto/token.svg', '/images/crypto/hexa-orange.png', '/images/crypto/family-insurance.png', '/images/crypto/family-insurance.png', '/images/crypto/metaverse.jpg', '/images/crypto/lantop.png'],
  profile: ['/images/profile/user1.png', '/images/profile/user2.png', '/images/profile/user3.png', '/images/profile/user4.png', '/images/profile/user5.png']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgAPI);

/***/ }),

/***/ 6785:
/***/ ((module) => {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ })

};
;