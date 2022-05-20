(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./components/Header/index.js + 5 modules
var Header = __webpack_require__(7706);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(6899);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(9693);
;// CONCATENATED MODULE: ./components/Banner/banner-style.js

const bannerStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 700
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5)
    }
  },
  canvasWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? `linear-gradient(-45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.primary.dark} 80%)` : `linear-gradient(-45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 80%)`,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.2)'
    }
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.type === 'dark' ? (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.dark, 0.7) : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.7)
  },
  particleBackground: {
    position: 'absolute',
    width: '100%',
    height: 600,
    '& canvas': {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  bannerWrap: {
    position: 'relative',
    zIndex: 1
  },
  objectArt: {
    '& img': {
      position: 'relative',
      zIndex: 1,
      left: -130,
      top: 240,
      maxWidth: 560,
      [theme.breakpoints.down('md')]: {
        top: 120
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  text: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(12)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: theme.spacing(20)
    },
    '& h4': {
      marginBottom: theme.spacing(2)
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& button': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(3),
        height: 50
      }
    }
  },
  invert: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white
  },
  decoBottom: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      width: 1400,
      height: 380,
      fill: theme.palette.type === 'dark' ? (0,colorManipulator/* darken */._j)(theme.palette.primary.dark, 0.6) : (0,colorManipulator/* lighten */.$n)(theme.palette.primary.main, 0.84),
      [theme.breakpoints.up(1200)]: {
        transform: 'scale(2, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      }
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  hide: {
    visibility: 'hidden'
  }
}));
/* harmony default export */ const banner_style = (bannerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Banner/Banner.js














function Banner(props) {
  const classes = banner_style();
  const text = (0,common/* useText */.XK)();
  const elem = (0,external_react_.useRef)(null);
  const {
    t
  } = props;
  const theme = (0,useTheme/* default */.Z)();
  const {
    0: hide,
    1: setHide
  } = (0,external_react_.useState)(false);
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }

    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  (0,external_react_.useEffect)(() => {
    window.particlesJS('particles_backgrond', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    window.addEventListener('scroll', handleScroll);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    ref: elem,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.canvasWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.overlay,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()(classes.decoInner, hide && classes.hide),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "particles_backgrond",
            className: classes.particleBackground
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.bannerWrap,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          alignItems: "center",
          spacing: 6,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            xs: 12,
            md: 8,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                variant: "h4",
                className: text.title2,
                children: t('common:crypto-landing.banner_title')
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                component: "p",
                className: text.subtitle2,
                children: t('common:crypto-landing.banner_subtitle')
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.btnArea,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                variant: "contained",
                color: "secondary",
                size: "large",
                fullWidth: isMobile,
                children: t('common:crypto-landing.banner_getstarted')
              }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                variant: "outlined",
                className: classes.invert,
                size: "large",
                fullWidth: isMobile,
                children: t('common:crypto-landing.banner_viewmarket')
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
              className: classes.objectArt,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/crypto/banner-art.png",
                alt: "illustration"
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoBottom,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/crypto/deco-banner.svg#main"
        })
      })
    })]
  });
}

/* harmony default export */ const Banner_Banner = ((0,i18n.withTranslation)(['crypto-landing'])(Banner));
;// CONCATENATED MODULE: ./components/Banner/index.js

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 2 modules
var ButtonBase = __webpack_require__(2467);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowForward"
const ArrowForward_namespaceObject = require("@material-ui/icons/ArrowForward");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
;// CONCATENATED MODULE: external "react-animated-slider"
const external_react_animated_slider_namespaceObject = require("react-animated-slider");
var external_react_animated_slider_default = /*#__PURE__*/__webpack_require__.n(external_react_animated_slider_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/styles/colorManipulator"
const colorManipulator_namespaceObject = require("@material-ui/core/styles/colorManipulator");
// EXTERNAL MODULE: ./public/images/crypto/deco-bottom-light.svg
var deco_bottom_light = __webpack_require__(184);
var deco_bottom_light_default = /*#__PURE__*/__webpack_require__.n(deco_bottom_light);
// EXTERNAL MODULE: ./public/images/crypto/deco-bottom-dark.svg
var deco_bottom_dark = __webpack_require__(7657);
var deco_bottom_dark_default = /*#__PURE__*/__webpack_require__.n(deco_bottom_dark);
;// CONCATENATED MODULE: ./components/Promotion/promotion-style.js




const promotionStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    background: `url(${theme.palette.type === 'dark' ? (deco_bottom_dark_default()) : (deco_bottom_light_default())}) bottom center no-repeat`,
    backgroundColor: theme.palette.type === 'dark' ? (0,colorManipulator_namespaceObject.darken)(theme.palette.primary.dark, 0.6) : (0,colorManipulator_namespaceObject.lighten)(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    position: 'relative',
    backgroundPosition: 'center 101%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  sliderWrap: {
    '& a[class*="previousButton"]': {
      right: 120,
      left: 'auto',
      top: 200,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& a[class*="nextButton"]': {
      left: 'auto',
      top: 140,
      right: 120,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& > div': {
      height: 500,
      [theme.breakpoints.down('sm')]: {
        height: 320
      },
      '& > a': {
        background: theme.palette.background.paper,
        borderRadius: '50%',
        width: 40,
        height: 40,
        transition: 'all 0.3s ease',
        position: 'absolute',
        zIndex: 11,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        '&:hover': {
          backgroundImage: 'none'
        },
        '& svg': {
          width: 35,
          height: 35,
          position: 'absolute',
          left: 3,
          top: 3,
          fill: theme.palette.text.secondary
        }
      }
    }
  },
  paper: {},
  time: {},
  even: {
    '& h1': {
      color: theme.palette.secondary.main
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.secondary.main
      }
    }
  },
  odd: {
    '& h1': {
      color: theme.palette.primary.main
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  hexa: {},
  item: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    maxHeight: 500,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8)
    },
    '& svg': {
      width: 450,
      height: 450
    },
    '& section': {
      position: 'relative',
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(40px)',
      transition: 'all 0.5s ease'
    },
    '&[class*="current"]': {
      '& section': {
        transform: 'translateX(0px)',
        opacity: 1
      }
    },
    '& figure': {
      margin: 0,
      lineHeight: '450px',
      width: 450,
      height: 450,
      textAlign: 'center',
      left: 0,
      top: 17,
      position: 'absolute',
      transition: 'none !important',
      '& img': {
        transition: 'none',
        verticalAlign: 'middle',
        width: 350,
        height: 393,
        opacity: 1
      }
    },
    '& $paper': {
      position: 'relative',
      padding: theme.spacing(9, 6, 9, 16),
      borderRadius: 24,
      [theme.breakpoints.up('lg')]: {
        left: -80
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 60
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 80px)'
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6)
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: theme.spacing(2)
      },
      '& button': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center'
        }
      }
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      lineHeight: '42px',
      '& button': {
        textAlign: 'left',
        fontSize: 36,
        display: 'block',
        maxWidth: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'Montserrat',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('md')]: {
          width: '100%',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          lineHeight: '28px'
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      }
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        fontSize: 14
      }
    },
    '& $time': {
      '& h6': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  decoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: 0.5
  },
  imgWrap: {
    position: 'relative',
    top: -24,
    left: -400
  }
}));
/* harmony default export */ const promotion_style = (promotionStyles);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(7468);
;// CONCATENATED MODULE: ./components/Promotion/Promotion.js














const sliderData = [{
  image: imgAPI/* default.crypto.0 */.Z.crypto[0],
  title: 'EXTRA LIFE NFT',
  desc: 'Dapp that supports the value of an NFT with a life insurance .'
}, {
  image: imgAPI/* default.crypto.1 */.Z.crypto[1],
  title: 'TIME  Token',
  desc: 'TIME is a stable coin that keeps value one on one to the premiums paid and the performance of the assets being managed',
  date: '12 Jul - 10 Aug'
}];

function Promotion() {
  const classes = promotion_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.sliderWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_animated_slider_default()), {
        className: "slider-wrapper",
        previousButton: /*#__PURE__*/jsx_runtime_.jsx((ArrowForward_default()), {}),
        nextButton: /*#__PURE__*/jsx_runtime_.jsx((ArrowForward_default()), {}),
        children: sliderData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_clsx_default()(classes.item, index % 2 === 1 ? classes.odd : classes.even),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            container: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              xs: 12,
              lg: 4,
              children: "\xA0"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              item: true,
              xs: 12,
              lg: 7,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
                mdDown: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("section", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.imgWrap,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.decoration,
                      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                          xlinkHref: "/images/crypto/deco-promo.svg#main"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("figure", {
                      className: classes.image,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: item.image,
                        alt: item.title
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  variant: "h1",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ButtonBase/* default */.Z, {
                    children: item.title
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  component: "p",
                  children: item.desc
                })]
              })]
            })]
          })
        }, index.toString()))
      })
    })
  });
}

/* harmony default export */ const Promotion_Promotion = ((0,i18n.withTranslation)(['crypto-landing'])(Promotion));
;// CONCATENATED MODULE: ./components/Promotion/index.js

;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
;// CONCATENATED MODULE: external "@material-ui/icons/Close"
const Close_namespaceObject = require("@material-ui/icons/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(2663);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(6083);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Zoom/Zoom.js
var Zoom = __webpack_require__(6211);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(7523);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
;// CONCATENATED MODULE: ./components/Title/title-style.js

const titleStyles = (0,makeStyles/* default */.Z)(theme => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35
    }
  },
  deco: {
    '& svg': {}
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    '& h4': {
      color: theme.palette.text.primary,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    },
    '& strong': {
      color: theme.palette.text.primary
    }
  }
}));
/* harmony default export */ const title_style = (titleStyles);
;// CONCATENATED MODULE: ./components/Title/Title.js






function Title(props) {
  const classes = title_style();
  const {
    text,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()(classes.title, classes.desc, setAlign(align)),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.deco,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        width: "38px",
        height: "43px",
        viewBox: "0 0 38 43",
        version: "1.1",
        children: /*#__PURE__*/jsx_runtime_.jsx("g", {
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M0,30.0245126 C0,31.6146901 0.838820037,33.0841534 2.20054545,33.8792422 L16.7994545,42.4036834 C18.16118,43.1987722 19.83882,43.1987722 21.2005455,42.4036834 L35.7994545,33.8792422 C37.16118,33.0841534 38,31.6146901 38,30.0245126 L38,12.9755587 C38,11.3853099 37.16118,9.91591793 35.7994545,9.12075784 L21.2005455,0.596316588 C19.83882,-0.198772196 18.16118,-0.198772196 16.7994545,0.596316588 L2.20054545,9.12075784 C0.838820037,9.91591793 0,11.3853099 0,12.9755587 L0,30.0245126 Z",
            fill: "url(#titleLinearGradient-1)"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
      variant: "h4",
      children: text
    })]
  });
}
Title.defaultProps = {
  align: 'left'
};
;// CONCATENATED MODULE: ./components/Title/index.js

;// CONCATENATED MODULE: ./components/Feature/feature-style.js

const featureStyles = (0,makeStyles/* default */.Z)(theme => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8)
    }
  },
  video: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(6, 0, 2),
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%'
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  featureWrap: {
    position: 'relative'
  },
  playBtn: {
    position: 'absolute',
    width: 150,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  deco: {
    position: 'absolute',
    top: 80,
    left: 80,
    width: 400,
    '& svg': {
      transformOrigin: 'top left'
    }
  },
  counter: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end'
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(8)
    },
    '& > *': {
      [theme.breakpoints.down('xs')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    }
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  paper: {
    position: 'relative',
    height: 174,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 4, 0, 0),
      width: 174
    },
    '& span': {
      color: theme.palette.primary.main,
      fontSize: 48
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    }
  },
  moreFeature: {
    position: 'relative',
    '& figure': {
      margin: 0
    }
  },
  chartDeco: {
    width: '100%',
    height: 420,
    bottom: 0,
    position: 'absolute',
    backgroundSize: 'cover'
  },
  item: {
    position: 'relative',
    paddingTop: theme.spacing(10)
  },
  text: {
    position: 'relative',
    '& > span': {
      position: 'absolute',
      color: 'rgba(0, 0, 0, 0.54)',
      top: -10,
      left: 7,
      fontSize: 38,
      zIndex: 2
    }
  },
  illustration: {
    '& img': {
      width: '80%',
      display: 'block',
      margin: '0 auto'
    }
  },
  center: {
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  progressWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 6)
    },
    padding: 0,
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('xs')]: {
          fontSize: 16
        }
      }
    }
  },
  logo: {},
  coin: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    paddingTop: theme.spacing(),
    '& $logo': {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(),
        width: 20,
        height: 20
      }
    }
  },
  progress: {
    flex: 1,
    marginTop: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(6)
    }
  },
  unit: {
    display: 'flex',
    justifyContent: 'space-between',
    '& h6': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      },
      '& span': {
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
          fontSize: 14
        }
      }
    }
  },
  track: {
    background: theme.palette.divider,
    borderRadius: 10,
    height: '8px !important'
  },
  bar: {
    borderRadius: 10
  }
}));
/* harmony default export */ const feature_style = (featureStyles);
;// CONCATENATED MODULE: ./components/Feature/MainFeature.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const Transition = /*#__PURE__*/external_react_default().forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx(Zoom/* default */.Z, _objectSpread({
    ref: ref
  }, props));
});

function MainFeature(props) {
  const classes = feature_style();
  const text = (0,common/* useText */.XK)();
  const theme = (0,useTheme/* default */.Z)();
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    t
  } = props;
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = (0,external_react_.useState)(false);

  const handleClickOpen = () => {
    if ((youtube_default()).use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.mainFeature,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Dialog/* default */.Z, {
      open: openPopup,
      TransitionComponent: Transition,
      keepMounted: true,
      classes: {
        paper: classes.videoPopup
      },
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-slide-title",
      "aria-describedby": "alert-dialog-slide-description",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DialogTitle/* default */.Z, {
        id: "alert-dialog-slide-title",
        children: [t('common:crypto-landing.mainfeature_title'), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
          onClick: handleClose,
          className: classes.closeBtn,
          children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
            className: classes.icon
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(DialogContent/* default */.Z, {
        children: (youtube_default()).use && /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
          videoId: "5rfWWYLCIsE",
          onReady: _onReady,
          opts: opts
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          md: 6,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
            text: t('common:crypto-landing.mainfeature_title'),
            align: isMobile ? 'center' : 'left'
          }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            display: "block",
            gutterBottom: true,
            align: isMobile ? 'center' : 'left',
            className: text.subtitle2,
            children: t('common:crypto-landing.mainfeature_subtitle')
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
            className: classes.video,
            children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.crypto.4 */.Z.crypto[4],
                alt: "cover"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              className: classes.playBtn,
              onClick: handleClickOpen,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ion-ios-play"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          md: 6,
          xs: 12,
          className: classes.featureWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.deco,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "404px",
              height: "452px",
              viewBox: "0 0 404 452",
              version: "1.1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                  x1: "34.1218989%",
                  y1: "15.1303808%",
                  x2: "20.0910756%",
                  y2: "110.664023%",
                  id: "featureLinearGradient-1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                    stopColor: theme.palette.primary.light,
                    offset: "0%"
                  }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                    stopColor: theme.palette.primary.light,
                    offset: "100%"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                id: "Feature-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M2,136.921005 L2,314.197531 C2,330.732338 10.8296846,346.011946 25.1636364,354.27935 L178.836364,442.917242 C193.170315,451.184645 210.829685,451.184645 225.163636,442.917242 L378.836364,354.27935 C393.170315,346.011946 402,330.732338 402,314.197531 L402,136.921005 C402,120.385457 393.170315,105.10659 378.836364,96.8384449 L225.163636,8.2005525 C210.829685,-0.066850833 193.170315,-0.066850833 178.836364,8.2005525 L25.1636364,96.8384449 C10.8296846,105.10659 2,120.385457 2,136.921005",
                  id: "FeatureFill-1",
                  stroke: "url(#featureLinearGradient-1)",
                  strokeWidth: "4"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.counter,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.lower,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ion-ios-ionic-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  display: "block",
                  children: t('common:crypto-landing.mainfeature_supported')
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ion-ios-people-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  display: "block",
                  children: t('common:crypto-landing.mainfeature_registered')
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.higher,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ion-ios-archive-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  display: "block",
                  children: t('common:crypto-landing.mainfeature_open')
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paper/* default */.Z, {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ion-ios-heart-outline"
                }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                  display: "block",
                  children: t('common:crypto-landing.mainfeature_invested')
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const Feature_MainFeature = ((0,i18n.withTranslation)(['crypto-landing'])(MainFeature));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 14 modules
var createTheme = __webpack_require__(8225);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
;// CONCATENATED MODULE: external "react-scroll-animation-wrapper"
const external_react_scroll_animation_wrapper_namespaceObject = require("react-scroll-animation-wrapper");
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(3901);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(3681);
;// CONCATENATED MODULE: ./components/Feature/MoreFeature.js
















const coinData = [{
  name: 'USDC',
  logo: '/images/crypto/usdc.png',
  progress: 85,
  color: '#548CCC'
}, {
  name: 'THETER',
  logo: '/images/crypto/theter.png',
  progress: 20,
  color: '#21D3D7'
}];

function MoreFeature(props) {
  const classes = feature_style();
  const text = (0,common/* useText */.XK)();
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('sm'));
  const {
    t
  } = props;

  const themeProgress = color => (0,createTheme/* default */.Z)({
    palette: {
      primary: {
        main: color
      }
    }
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.moreFeature,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      fixed: isDesktop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.item,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          spacing: 6,
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: external_clsx_default()(classes.text, isMobile && classes.center),
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ion-ios-lock-outline"
              }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
                text: t('common:crypto-landing.morefeature_title1'),
                align: isMobile ? 'center' : 'left'
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                className: text.subtitle2,
                display: "block",
                align: isMobile ? 'center' : 'left',
                children: t('common:crypto-landing.morefeature_subtitle1')
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInLeftShort",
              delay: 300,
              duration: 0.3,
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: classes.illustration,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/crypto/dao.svg",
                  alt: "feature"
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.item,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          direction: isMobile ? 'column-reverse' : 'row',
          spacing: 6,
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInRightShort",
              offset: -100,
              delay: 300,
              duration: 0.3,
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: classes.illustration,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/crypto/life.png",
                  alt: "feature"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: external_clsx_default()(classes.text, isMobile && classes.center),
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ion-ios-analytics-outline"
              }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
                text: t('common:crypto-landing.morefeature_title2'),
                align: isMobile ? 'center' : 'left'
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                className: text.subtitle2,
                display: "block",
                align: isMobile ? 'center' : 'left',
                children: t('common:crypto-landing.morefeature_subtitle2')
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.item,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            sm: 12,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: external_clsx_default()(classes.text, classes.center),
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "ion-ios-flash-outline"
              }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
                className: text.subtitle2,
                text: t('common:crypto-landing.morefeature_title3'),
                align: "center"
              }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                display: "block",
                align: "center",
                className: text.subtitle2,
                children: t('common:crypto-landing.morefeature_subtitle3')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
              maxWidth: "md",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeIn",
                offset: -100,
                duration: 1,
                afterAnimatedIn: handlePlay,
                children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  className: classes.progressWrap,
                  children: coinData.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.coin,
                      children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.Z, {
                        className: classes.logo,
                        src: item.logo,
                        alt: item.name
                      }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                        variant: "h5",
                        children: item.name
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.progress,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: classes.unit,
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
                          variant: "h6",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "USD"
                          }), "\xA05.000"]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
                          variant: "h6",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "USD"
                          }), "\xA015.000"]
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx(styles_.ThemeProvider, {
                        theme: themeProgress(item.color),
                        children: /*#__PURE__*/jsx_runtime_.jsx(LinearProgress/* default */.Z, {
                          variant: "determinate",
                          value: play ? item.progress : 0,
                          classes: {
                            root: classes.track,
                            bar: classes.bar
                          }
                        })
                      })]
                    })]
                  }, index.toString()))
                })
              })
            })]
          })
        })
      })]
    })
  });
}

/* harmony default export */ const Feature_MoreFeature = ((0,i18n.withTranslation)(['crypto-landing'])(MoreFeature));
// EXTERNAL MODULE: ./components/Parallax/Hexagonal.js + 1 modules
var Hexagonal = __webpack_require__(94);
;// CONCATENATED MODULE: ./components/Feature/Feature.js







function Feature() {
  const classes = feature_style();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Hexagonal/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Feature_MainFeature, {}), /*#__PURE__*/jsx_runtime_.jsx(Feature_MoreFeature, {})]
  });
}
;// CONCATENATED MODULE: ./components/Feature/index.js

;// CONCATENATED MODULE: external "react-parallax"
const external_react_parallax_namespaceObject = require("react-parallax");
// EXTERNAL MODULE: ./public/images/crypto/deco-benefit.svg
var deco_benefit = __webpack_require__(950);
var deco_benefit_default = /*#__PURE__*/__webpack_require__.n(deco_benefit);
// EXTERNAL MODULE: ./public/images/crypto/deco-list.png
var deco_list = __webpack_require__(4626);
var deco_list_default = /*#__PURE__*/__webpack_require__.n(deco_list);
;// CONCATENATED MODULE: ./components/Benefit/benefit-style.js



const benefitStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative',
    background: theme.palette.common.black
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  desc: {
    padding: 0,
    color: theme.palette.common.white,
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  list: {
    display: 'block',
    margin: theme.spacing(3, 0, 5),
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    },
    '& li': {
      paddingLeft: theme.spacing(4),
      lineHeight: '38px',
      background: `url(${(deco_list_default())}) no-repeat 0 10px`
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    bottom: -40,
    position: 'relative',
    '& img': {
      maxWidth: '100%',
      display: 'block'
    }
  },
  deco: {
    position: 'absolute',
    top: 40,
    right: 80
  },
  parallaxWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  parallaxProps: {
    background: `url(${(deco_benefit_default())}) no-repeat center center`,
    height: 540
  }
}));
/* harmony default export */ const benefit_style = (benefitStyles);
;// CONCATENATED MODULE: ./components/Benefit/Benefit.js















function Benefit(props) {
  const classes = benefit_style();
  const text = (0,common/* useText */.XK)();
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('lg'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));
  const {
    t
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.parallaxWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_parallax_namespaceObject.Parallax, {
        bgImage: imgAPI/* default.crypto.5 */.Z.crypto[5],
        bgImageAlt: "benefit",
        strength: 0,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.parallaxProps
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      fixed: isDesktop,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.wrapper,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          container: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 15,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.desc,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
                className: text.title2,
                variant: "h3",
                align: isMobile ? 'center' : 'center',
                children: t('common:crypto-landing.benefit_title')
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: classes.list,
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 1 : Build MVP, kyc and Marktplace"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 2 : Develop DAO and Tokenomics"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 3 : Testing  Feautures"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 4 : Investment and go testnet"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 5 : Audit Smart Contracts"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 6 : Whitelisting Process"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "Phase 6 : Go Mainnet"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            item: true,
            md: 7,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: classes.img,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.crypto.6 */.Z.crypto[6],
                  alt: "benefit"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
              mdDown: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.deco,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  width: "585px",
                  height: "151px",
                  viewBox: "0 0 585 151",
                  version: "1.1",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                      x1: "66.8412844%",
                      y1: "30.62426%",
                      x2: "-21.0581447%",
                      y2: "100%",
                      id: "benefitLinearGradient-2",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.primary.main,
                        offset: "0%"
                      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.primary.light,
                        offset: "100%"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                      x1: "66.8412844%",
                      y1: "30.62426%",
                      x2: "-21.0581447%",
                      y2: "100%",
                      id: "benefitLinearGradient-3",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.secondary.main,
                        offset: "0%"
                      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.secondary.light,
                        offset: "100%"
                      })]
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    id: "Benefit-1",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                      id: "Benefit-2",
                      transform: "translate(-143.000000, -88.000000)",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
                        id: "Benefit-3",
                        transform: "translate(132.623862, 70.912032)",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z",
                          id: "BenefitFill-1",
                          fill: "url(#benefitLinearGradient-3)",
                          transform: "translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z",
                          id: "BenefitFill-2",
                          fill: "url(#benefitLinearGradient-2)",
                          transform: "translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const Benefit_Benefit = ((0,i18n.withTranslation)(['crypto-landing'])(Benefit));
;// CONCATENATED MODULE: ./components/Benefit/index.js

// EXTERNAL MODULE: ./public/images/deco/cross-deco-light.png
var cross_deco_light = __webpack_require__(469);
var cross_deco_light_default = /*#__PURE__*/__webpack_require__.n(cross_deco_light);
;// CONCATENATED MODULE: ./components/Cards/cards-style.js


const cardsStyles = (0,makeStyles/* default */.Z)(theme => ({
  generalCard: {
    position: 'relative',
    width: 270,
    height: 345,
    '& figure': {
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  desc: {
    width: 235,
    position: 'absolute',
    bottom: theme.spacing(-3),
    left: 20,
    padding: theme.spacing(2.5),
    backdropFilter: 'saturate(90%) blur(10px)',
    background: (0,colorManipulator/* alpha */.Fq)(theme.palette.background.paper, 0.7),
    shadow: theme.shadows[8],
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    }
  },
  button: {
    bottom: -36,
    margin: '0 auto',
    width: 120,
    display: 'inherit'
  },
  profileCard: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    margin: `0 auto ${theme.spacing(5)}px`,
    [theme.breakpoints.up('sm')]: {
      width: 275,
      marginBottom: theme.spacing(10)
    },
    '& h5': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary
    }
  },
  paper: {
    background: `url(${theme.palette.type === 'dark' ? '/images/architect/bg-team-dark.jpg' : '/images/architect/bg-team.jpg'}) repeat`,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: 270,
    [theme.breakpoints.up('sm')]: {
      width: 215
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      height: 180
    },
    '& img': {
      position: 'relative',
      zIndex: 10,
      [theme.breakpoints.up('sm')]: {
        height: 315,
        marginLeft: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        height: '100%',
        margin: '0 auto',
        top: theme.spacing()
      }
    },
    '&:after': {
      content: '""',
      width: 190,
      height: 215,
      background: `url(${(cross_deco_light_default())}) repeat transparent 15px -15px`,
      position: 'absolute',
      bottom: 0,
      right: theme.spacing(-10),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  }
}));
/* harmony default export */ const cards_style = (cardsStyles);
;// CONCATENATED MODULE: ./components/Cards/Profile.js







function Profile(props) {
  const classes = cards_style();
  const text = (0,common/* useText */.XK)();
  const {
    photo,
    name,
    title
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.profileCard,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
      className: classes.paper,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: photo,
        alt: name
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
      variant: "h5",
      className: text.subtitle,
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
      className: text.caption,
      children: title
    })]
  });
}
;// CONCATENATED MODULE: ./components/Team/team-style.js

const teamStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative'
    }
  },
  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  }
}));
/* harmony default export */ const team_style = (teamStyles);
;// CONCATENATED MODULE: ./components/Team/Team.js















const team = [{
  photo: imgAPI/* default.profile.0 */.Z.profile[0],
  name: 'Efrain Cuello',
  title: 'Developer Lead'
}, {
  photo: imgAPI/* default.profile.1 */.Z.profile[1],
  name: 'Jeanine Osborne',
  title: 'Product Management'
}, {
  photo: imgAPI/* default.profile.2 */.Z.profile[2],
  name: 'Bruno do Santos',
  title: 'Full Stack Developer'
}, {
  photo: imgAPI/* default.profile.3 */.Z.profile[3],
  name: 'Alberto Alfaro',
  title: 'Product Knowledge Lead'
}, {
  photo: imgAPI/* default.profile.4 */.Z.profile[4],
  name: 'Igor Kunjavskij',
  title: 'Full stack Developer'
}];

function Featured(props) {
  const classes = team_style();
  const {
    t
  } = props;
  const text = (0,common/* useText */.XK)();
  const theme = (0,useTheme/* default */.Z)();
  const isDesktop = (0,useMediaQuery/* default */.Z)(theme.breakpoints.up('md'));
  const isMobile = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down('xs'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.deco
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      fixed: isDesktop,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_scroll_animation_wrapper_default()), {
        animateOnce: true,
        animateIn: "fadeInUpShort",
        offset: -300,
        delay: 200,
        duration: 0.6,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          className: text.subtitle2,
          text: t('common:crypto-landing.team_title'),
          align: "center"
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          display: "block",
          align: "center",
          className: text.subtitle2,
          children: t('common:crypto-landing.team_desc')
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.teamWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          spacing: isMobile ? 2 : 6,
          children: team.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
            item: true,
            md: 4,
            xs: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInUpShort",
              offset: -50,
              delay: 200 + 100 * index,
              duration: 0.3,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx(Profile, {
                  photo: item.photo,
                  name: item.name,
                  title: item.title
                })
              })
            })
          }, index.toString()))
        })
      })]
    })]
  });
}

/* harmony default export */ const Team = ((0,i18n.withTranslation)(['architect-landing'])(Featured));
;// CONCATENATED MODULE: ./components/Team/index.js

// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__(3987);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(671);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,makeStyles/* default */.Z)(theme => ({
  counterWrap: {
    position: 'relative',
    textAlign: 'center',
    '& h3': {
      color: theme.palette.common.white
    },
    '& p': {
      marginTop: theme.spacing(1.5),
      color: theme.palette.common.white
    }
  },
  callAction: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.common.white
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));
/* harmony default export */ const counter_style = (counterStyles);
;// CONCATENATED MODULE: ./components/Counter/Counter.js













function Counter(props) {
  const classes = counter_style();
  const text = (0,common/* useText */.XK)();
  const {
    t
  } = props;
  const {
    0: setPlay
  } = (0,external_react_.useState)(false);

  const countup = (val, isPlay) => /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: isPlay ? /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: val
    }) : 0
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.counterWrap,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      maxWidth: "md",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_scroll_animation_wrapper_default()), {
        animateOnce: true,
        animateIn: "fadeIn",
        offset: 10,
        afterAnimatedIn: handlePlay,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
          variant: "h3",
          className: text.title,
          children: [countup(), "\xA0", countup(), "\xA0", countup()]
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          component: "p",
          className: text.subtitle,
          children: t('common:crypto-landing.footer_counter')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.callAction,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "h4",
          gutterBottom: true,
          className: text.subtitle,
          children: t('common:crypto-landing.footer_waiting')
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          variant: "contained",
          href: text_link/* default.crypto.register */.Z.crypto.register,
          color: "secondary",
          size: "large",
          className: classes.button,
          children: t('common:crypto-landing.getstarted')
        })]
      })]
    })
  });
}

/* harmony default export */ const Counter_Counter = ((0,i18n.withTranslation)(['crypto-landing'])(Counter));
;// CONCATENATED MODULE: ./components/Counter/index.js

// EXTERNAL MODULE: ./components/Footer/footer-style.js
var footer_style = __webpack_require__(3659);
;// CONCATENATED MODULE: ./components/Footer/FooterWithCounter.js







function FooterWithDeco(props) {
  const classes = (0,footer_style/* default */.Z)();
  const {
    toggleDir
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.footerCounter,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoTop,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/crypto/deco-footer.svg#main"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Counter_Counter, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
      toggleDir: toggleDir
    })]
  });
}

/* harmony default export */ const FooterWithCounter = (FooterWithDeco);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__(3758);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowUpward"
const ArrowUpward_namespaceObject = require("@material-ui/icons/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js + 2 modules
var Tooltip = __webpack_require__(9413);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(6995);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = (0,makeStyles/* default */.Z)(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    borderRadius: 10,
    background: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.common.white,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.dark}`,
        opacity: 0.3,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: 3
      },
      '&[class="active"] a': {
        opacity: 1,
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ const pagenav_style = (pagenav);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function PageNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PageNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PageNav_ownKeys(Object(source), true).forEach(function (key) { PageNav_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PageNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PageNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), PageNav_objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const classes = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_clsx_default()(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx(Tooltip/* default */.ZP, {
            title: t('common:crypto-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
              href: item.url
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Tooltip/* default */.ZP, {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Fab/* default */.Z, {
        color: "primary",
        "aria-label": "To top",
        component: LinkBtn,
        href: "#home",
        className: classes.fab,
        children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = ((0,i18n.withTranslation)(['crypto-landing'])(PageNav));
;// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(9477);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
;// CONCATENATED MODULE: ./pages/index.js


















const sectionMargin = margin => margin * 20;

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const theme = (0,useTheme/* default */.Z)();
  const isTablet = (0,useMediaQuery/* default */.Z)(theme.breakpoints.only('md'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [(brand_default()).crypto.name, "\xA0 - Home Page"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx("section", {
      id: "home"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
          id: "banner",
          children: /*#__PURE__*/jsx_runtime_.jsx(Banner_Banner, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          id: "promotions",
          children: /*#__PURE__*/jsx_runtime_.jsx(Promotion_Promotion, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          id: "feature",
          className: isTablet ? classes.spaceTopShort : '',
          children: /*#__PURE__*/jsx_runtime_.jsx(Feature, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          id: "benefit",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/jsx_runtime_.jsx(Benefit_Benefit, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: classes.spaceTop,
          children: /*#__PURE__*/jsx_runtime_.jsx(Team, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterWithCounter, {
        toggleDir: onToggleDir
      }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
        mdDown: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(PageNav_PageNav, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "/scripts/particles.min.js"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "/scripts/stats.min.js"
      })]
    })]
  });
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing']
});

/* harmony default export */ const pages = (Landing);

/***/ }),

/***/ 7523:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 950:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjMwcHgiIGhlaWdodD0iNDUycHgiIHZpZXdCb3g9IjAgMCA2MzAgNDUyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+R3JvdXAgNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC4xOCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC40MDA0MDQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MTEuNTI2Nzk1LDE5Ny43MjQ4NDcgQzQxMS41MjY3OTUsMjA2LjIzNzI1OSA0MTYuMDgwMDE5LDIxNC4xMDM0NzQgNDIzLjQ3MTY0MywyMTguMzU5NjggTDUwMi43MTY0MjYsMjYzLjk5MjA0NSBDNTEwLjEwODA0OSwyNjguMjQ4MjUyIDUxOS4yMTQ0OTksMjY4LjI0ODI1MiA1MjYuNjA2MTIyLDI2My45OTIwNDUgTDYwNS44NTA5MDUsMjE4LjM1OTY4IEM2MTMuMjQyNTI5LDIxNC4xMDM0NzQgNjE3Ljc5NTc1MywyMDYuMjM3MjU5IDYxNy43OTU3NTMsMTk3LjcyNDg0NyBMNjE3Ljc5NTc1MywxMDYuNDU5NzM1IEM2MTcuNzk1NzUzLDk3Ljk0Njk0MDYgNjEzLjI0MjUyOSw5MC4wODExMDc4IDYwNS44NTA5MDUsODUuODI0NTE5NyBMNTI2LjYwNjEyMiw0MC4xOTIxNTQ4IEM1MTkuMjE0NDk5LDM1LjkzNTk0ODQgNTEwLjEwODA0OSwzNS45MzU5NDg0IDUwMi43MTY0MjYsNDAuMTkyMTU0OCBMNDIzLjQ3MTY0Myw4NS44MjQ1MTk3IEM0MTYuMDgwMDE5LDkwLjA4MTEwNzggNDExLjUyNjc5NSw5Ny45NDY5NDA2IDQxMS41MjY3OTUsMTA2LjQ1OTczNSBMNDExLjUyNjc5NSwxOTcuNzI0ODQ3IFoiIGlkPSJGaWxsLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxNC42NjEyNzQsIDE1Mi4wOTIxMDApIHJvdGF0ZSgtMzMwLjAwMDAwMCkgdHJhbnNsYXRlKC01MTQuNjYxMjc0LCAtMTUyLjA5MjEwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCw0MzAuNzg4NTQ3IEMwLDQzOS4zMDA5NiA0LjU1MzIyNDYyLDQ0Ny4xNjcxNzUgMTEuOTQ0ODQ3OSw0NTEuNDIzMzgxIEw5MS4xODk2MzE0LDQ5Ny4wNTU3NDYgQzk4LjU4MTI1NDcsNTAxLjMxMTk1MiAxMDcuNjg3NzA0LDUwMS4zMTE5NTIgMTE1LjA3OTMyNyw0OTcuMDU1NzQ2IEwxOTQuMzI0MTExLDQ1MS40MjMzODEgQzIwMS43MTU3MzQsNDQ3LjE2NzE3NSAyMDYuMjY4OTU5LDQzOS4zMDA5NiAyMDYuMjY4OTU5LDQzMC43ODg1NDcgTDIwNi4yNjg5NTksMzM5LjUyMzQzNiBDMjA2LjI2ODk1OSwzMzEuMDEwNjQxIDIwMS43MTU3MzQsMzIzLjE0NDgwOSAxOTQuMzI0MTExLDMxOC44ODgyMiBMMTE1LjA3OTMyNywyNzMuMjU1ODU2IEMxMDcuNjg3NzA0LDI2OC45OTk2NDkgOTguNTgxMjU0NywyNjguOTk5NjQ5IDkxLjE4OTYzMTQsMjczLjI1NTg1NiBMMTEuOTQ0ODQ3OSwzMTguODg4MjIgQzQuNTUzMjI0NjIsMzIzLjE0NDgwOSAwLDMzMS4wMTA2NDEgMCwzMzkuNTIzNDM2IEwwLDQzMC43ODg1NDcgWiIgaWQ9IkZpbGwtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAzLjEzNDQ3OSwgMzg1LjE1NTgwMSkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTEwMy4xMzQ0NzksIC0zODUuMTU1ODAxKSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ 7657:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDIzNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCAyMzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT4KPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiPgoJPHBhdGggaWQ9IkNvbWJpbmVkLVNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNMTI4MCwwLjhWMjM3SDBWODNjOS45LDIuOSwyMCw1LjEsMzAuMyw2LjhsNzc0LjksMTIzLjljNTguMiw5LjMsMTE3LjktMiwxNjguNy0zMgoJCUwxMjgwLDAuOHoiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4MHB4IiBoZWlnaHQ9IjIzN3B4IiB2aWV3Qm94PSIwIDAgMTI4MCAyMzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDAuNzkwMzAyOTY4IEwxMjgwLDIzNyBMMCwyMzcgTDAsODMuMDQ3MzMwNyBDOS44Nzk0MDI3OCw4NS45MDA4NjMyIDE5Ljk5MzYzOTgsODguMTY5MDMyIDMwLjI5OTE1OTEsODkuODE2Njg3MiBMODA1LjIzNDYxNSwyMTMuNzE0MDE0IEM4NjMuNDY5NzQ4LDIyMy4wMjQ2OTYgOTIzLjEyNzk1MiwyMTEuNjk4NzEgOTczLjg5OTAzLDE4MS42OTM0MjYgTDEyODAsMC43OTAzMDI5NjggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ 4626:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAF1DcY3AAAABGdBTUEAALGPC/xhBQAAAN5JREFUOBFjYACC////NzACif0gDhiARKBMBgZUKZAwSGQOkFaGqWGCMVBoZFPQDbmLrkUZXeAu2CwUM0AiQAFnIFUDlkUQLYyMjHvRLUFIQ1nodmAqABrjCBRtwZABikHlIFJAd0gB8WYQDVPMCGIABVYDKRGYIJB+A9QZitdxeB1GK0mof94guRTEBLkWFAYQgNOfSAo4gewoIA4HYlaYOJD+DcQrgXgZ0MTvMHFQOIBCrAKIdWGCRNCXgWo68AYiIUPwhuPg1hwNdB4oAEgBIPXR4CQJ0wUMeZKiCgApMGE9uqurKgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 469:
/***/ ((module) => {

module.exports = "/_next/static/images/cross-deco-light-f221ba0af80ece57bdff670ee508d79f.png";

/***/ }),

/***/ 1976:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 1103:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ 5339:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Settings");

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

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 9638:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 921:
/***/ ((module) => {

"use strict";
module.exports = require("popper.js");

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

/***/ 3805:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6400:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 5582:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 5181:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 9080:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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
var __webpack_exports__ = __webpack_require__.X(0, [521,392,950,834,862,907,146,251], () => (__webpack_exec__(3108)));
module.exports = __webpack_exports__;

})();