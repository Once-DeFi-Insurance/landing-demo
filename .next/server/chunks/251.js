"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ParallaxCloud)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(5582);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./components/Parallax/parallax-style.js

const parallaxStyles = (0,makeStyles/* default */.Z)(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 2500,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 2500,
      margin: 0,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  rightTopBack: {
    textAlign: 'right',
    '& svg': {
      right: -240
    }
  },
  rightTopFront: {
    textAlign: 'right',
    '& svg': {
      right: 50
    }
  },
  leftBottomBack: {
    textAlign: 'left',
    '& svg': {
      left: -110
    }
  },
  leftBottomFront: {
    textAlign: 'left',
    '& svg': {
      left: -50
    }
  },
  hexaBack: {
    opacity: theme.palette.type === 'dark' ? 0.12 : 0.03,
    fill: theme.palette.common.black,
    width: 550,
    height: 500
  },
  hexaTop: {},
  hexaWrap: {
    position: 'relative',
    height: 700
  }
}));
/* harmony default export */ const parallax_style = (parallaxStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Parallax/Hexagonal.js






function ParallaxCloud() {
  const classes = parallax_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_clsx_default()(classes.parallaxWrap, classes.dotsWrap),
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()(classes.innerParallax, classes.large),
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.hexaWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
            y: [20, 20],
            tagOuter: "figure",
            className: external_clsx_default()(classes.rightTopBack, classes.big),
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: classes.hexaBack,
              children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                xlinkHref: "/images/crypto/parallax-back2.svg#main"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
            y: [20, 20],
            tagOuter: "figure",
            className: external_clsx_default()(classes.rightTopFront, classes.small),
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "585px",
              height: "151px",
              viewBox: "0 0 585 151",
              version: "1.1",
              children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                  transform: "translate(-143.000000, -88.000000)",
                  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                    transform: "translate(132.623862, 70.912032)",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z",
                      fill: "url(#hexaLinearGradient-2)",
                      transform: "translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                    })
                  })
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.hexaWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
            y: [40, 40],
            tagOuter: "figure",
            className: external_clsx_default()(classes.leftBottomBack, classes.big),
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: classes.hexaBack,
              children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                xlinkHref: "/images/crypto/parallax-back3.svg#main"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
            y: [40, 40],
            tagOuter: "figure",
            className: external_clsx_default()(classes.leftBottomFront, classes.small),
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "585px",
              height: "151px",
              viewBox: "0 0 585 151",
              version: "1.1",
              children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                  transform: "translate(-143.000000, -88.000000)",
                  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                    transform: "translate(132.623862, 70.912032)",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z",
                      fill: "url(#hexaLinearGradient-3)",
                      transform: "translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                    })
                  })
                })
              })
            })
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ 6899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XK": () => (/* binding */ useText)
/* harmony export */ });
/* unused harmony exports useTextAlign, useFloat, useHidden */
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1120);

const useTextAlign = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
}));
const useHidden = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ })

};
;