"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 9705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(553);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(3560);
;// CONCATENATED MODULE: external "react-material-ui-form-validator"
const external_react_material_ui_form_validator_namespaceObject = require("react-material-ui-form-validator");
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(671);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./public/images/crypto-logo.svg
var crypto_logo = __webpack_require__(1821);
var crypto_logo_default = /*#__PURE__*/__webpack_require__.n(crypto_logo);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(6899);
// EXTERNAL MODULE: ./components/Parallax/Hexagonal.js + 1 modules
var Hexagonal = __webpack_require__(94);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(9693);
;// CONCATENATED MODULE: ./components/Forms/form-style.js

const contactStyles = (0,makeStyles/* default */.Z)(theme => ({
  title: {},
  pageWrap: {
    padding: theme.spacing(11, 5),
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0)
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  frmDeco: {},
  innerWrap: {
    textAlign: 'left'
  },
  fullFromWrap: {
    background: theme.palette.background.paper,
    padding: theme.spacing(9, 0)
  },
  formBox: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.type === 'dark' ? (0,colorManipulator/* darken */._j)(theme.palette.primary.dark, 0.4) : theme.palette.primary.light,
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.05)'
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    padding: theme.spacing(0, 12),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      fontSize: 16
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5)
    },
    '& > div': {
      overflow: 'hidden',
      background: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#eeeeee',
      '&:hover': {
        background: (0,colorManipulator/* darken */._j)(theme.palette.background.paper, 0.1)
      },
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: theme.palette.background.default
        }
      }
    },
    '&$light': {
      '& label': {
        color: theme.palette.common.white
      },
      '& > div': {
        border: `1px solid ${(0,colorManipulator/* alpha */.Fq)(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.hint, 0.2)
          },
          '&:hover': {
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.hint, 0.2)
          }
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 6, 10)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2, 10)
    }
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  flex: {},
  btnArea: {
    marginTop: theme.spacing(5),
    '& label': {
      position: 'relative'
    },
    '& button': {
      marginTop: theme.spacing(2)
    },
    '& span': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      },
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  invert: {},
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    '&$invert': {
      '& i': {
        color: theme.palette.text.secondary
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.common.white
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative'
  },
  greeting: {
    padding: theme.spacing(15, 6),
    height: '100%',
    '& h4': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    },
    '& h6': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    minHeight: 760,
    background: theme.palette.background.paper,
    position: 'relative',
    paddingBottom: theme.spacing(10),
    overflow: 'hidden',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    },
    '& $frmDeco': {
      left: '58.333333%',
      transform: 'translateX(-72%)',
      bottom: '-75px'
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        width: '100%'
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: (0,colorManipulator/* darken */._j)('#28aae1', 0.2)
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: (0,colorManipulator/* darken */._j)('#3b579d', 0.2)
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: (0,colorManipulator/* darken */._j)('#dd493c', 0.2)
    }
  },
  separator: {
    margin: `${theme.spacing(5)}px auto`,
    maxWidth: 340,
    minWidth: 256,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      }
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.hint}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  },
  lower: {},
  deco: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    [theme.breakpoints.down('xs')]: {
      '& svg': {
        left: '-150%',
        position: 'relative'
      }
    },
    '&$lower': {
      top: -150
    }
  },
  parallax: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: 0
  },
  parallaxLeft: {
    '& > div': {
      top: -1500
    }
  },
  parallaxRight: {
    '& > div': {
      top: -400
    }
  },
  decoInner: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: -114,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    '& $deco': {
      [theme.breakpoints.up(1281)]: {
        left: 50
      }
    }
  },
  decoSm: {
    textAlign: 'center',
    marginTop: theme.spacing(10)
  }
}));
/* harmony default export */ const form_style = (contactStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Forms/Decoration.js




function Decoration() {
  const classes = form_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.deco,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "1274px",
      height: "1018px",
      viewBox: "0 0 1274 1018",
      version: "1.1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        children: [/*#__PURE__*/jsx_runtime_.jsx("mask", {
          fill: "white",
          children: /*#__PURE__*/jsx_runtime_.jsx("use", {
            xlinkHref: "#path-2"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("use", {
          fill: "url(#frmDecoLinearGradient-1)",
          transform: "translate(607.224351, 494.641126) rotate(-45.000000) translate(-607.224351, -494.641126) ",
          xlinkHref: "#path-2"
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: external "@material-ui/core/colors/red"
const red_namespaceObject = require("@material-ui/core/colors/red");
var red_default = /*#__PURE__*/__webpack_require__.n(red_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(3258);
;// CONCATENATED MODULE: ./components/Forms/Checkbox.js
const _excluded = ["classes", "errorMessages", "validatorListener", "requiredError", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const red300 = (red_default())[500];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends external_react_material_ui_form_validator_namespaceObject.ValidatorComponent {
  renderValidatorComponent() {
    const _this$props = this.props,
          {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox/* default */.Z, _objectSpread(_objectSpread({}, rest), {}, {
        ref: r => {
          this.input = r;
        }
      })), this.errorText()]
    });
  }

  errorText() {
    const {
      classes
    } = this.props;
    const {
      isValid
    } = this.state;

    if (isValid) {
      return null;
    }

    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.checkbox,
      children: this.getErrorMessage()
    });
  }

}

/* harmony default export */ const Forms_Checkbox = ((0,withStyles/* default */.Z)(styles)(CheckboxValidatorElement));
;// CONCATENATED MODULE: ./components/Forms/Contact.js
function Contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Contact_ownKeys(Object(source), true).forEach(function (key) { Contact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























function Contact(props) {
  const classes = form_style();
  const text = (0,common/* useText */.XK)();
  const {
    t
  } = props;
  const theme = (0,useTheme/* default */.Z)();
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  (0,external_react_.useEffect)(() => {
    external_react_material_ui_form_validator_namespaceObject.ValidatorForm.addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = (0,external_react_.useState)(false);
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(false);

  const handleChange = name => event => {
    setValues(Contact_objectSpread(Contact_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.pageWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Decoration, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()(classes.parallax, classes.parallaxLeft),
      children: /*#__PURE__*/jsx_runtime_.jsx(Hexagonal/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()(classes.parallax, classes.parallaxRight),
      children: /*#__PURE__*/jsx_runtime_.jsx(Hexagonal/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Snackbar/* default */.Z, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openNotif,
      autoHideDuration: 4000,
      onClose: handleClose,
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      message: /*#__PURE__*/jsx_runtime_.jsx("span", {
        id: "message-id",
        children: "Message Sent"
      })
    }, "top right"), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
      mdUp: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.logo, classes.logoHeader),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: text_link/* default.crypto.home */.Z.crypto.home,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (crypto_logo_default()),
            alt: "logo"
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            component: "span",
            className: text.title,
            children: (brand_default()).crypto.projectName
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      maxWidth: "md",
      className: classes.innerWrap,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(IconButton/* default */.Z, {
        href: text_link/* default.crypto.home */.Z.crypto.home,
        className: external_clsx_default()(classes.backtohome, classes.invert),
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ion-ios-home-outline"
        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ion-ios-arrow-round-back"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
        className: external_clsx_default()(classes.formBox, 'fragment-fadeUp'),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.fullFromWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            variant: "h3",
            align: "center",
            className: external_clsx_default()(classes.title, text.title),
            gutterBottom: true,
            children: t('common:contact_title2')
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            className: external_clsx_default()(classes.desc, text.subtitle2),
            children: t('common:contact_subtitle')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.form,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_namespaceObject.ValidatorForm, {
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
                container: true,
                spacing: 6,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('common:form_name'),
                    onChange: handleChange('name'),
                    name: "Name",
                    value: values.name,
                    validators: ['required'],
                    errorMessages: ['This field is required']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('common:form_email'),
                    onChange: handleChange('email'),
                    name: "Email",
                    value: values.email,
                    validators: ['required', 'isEmail'],
                    errorMessages: ['This field is required', 'email is not valid']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('common:form_phone'),
                    onChange: handleChange('phone'),
                    name: "Phone",
                    value: values.phone
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('common:form_company'),
                    onChange: handleChange('company'),
                    name: "Company",
                    value: values.company
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    multiline: true,
                    rows: "6",
                    className: classes.input,
                    label: t('common:form_message'),
                    onChange: handleChange('message'),
                    name: "Message",
                    value: values.message
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()(classes.btnArea, classes.flex),
                children: [/*#__PURE__*/jsx_runtime_.jsx(FormControlLabel/* default */.Z, {
                  control: /*#__PURE__*/jsx_runtime_.jsx(Forms_Checkbox, {
                    validators: ['isTruthy'],
                    errorMessages: "This field is required",
                    checked: check,
                    value: check,
                    onChange: e => handleCheck(e),
                    color: "primary"
                  }),
                  label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: [t('common:form_terms'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: t('common:form_privacy')
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                  variant: "contained",
                  fullWidth: isMobile,
                  type: "submit",
                  color: "secondary",
                  size: "large",
                  children: t('common:form_send')
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const Forms_Contact = ((0,i18n.withTranslation)(['common'])(Contact));
;// CONCATENATED MODULE: ./pages/contact.js







function contact_Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [(brand_default()).crypto.name, "\xA0 - Contact"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Forms_Contact, {})
    })]
  });
}

contact_Contact.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ const contact = (contact_Contact);

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

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5582:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

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
var __webpack_exports__ = __webpack_require__.X(0, [521,392,560,50,907,251], () => (__webpack_exec__(9705)));
module.exports = __webpack_exports__;

})();