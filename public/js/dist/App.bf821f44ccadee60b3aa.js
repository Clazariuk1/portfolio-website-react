/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function App() {
  return /*#__PURE__*/React.createElement("main", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Portfolio
  }, /*#__PURE__*/React.createElement("header", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, /*#__PURE__*/React.createElement("nav", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollNav
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navLinks
  }, /*#__PURE__*/React.createElement("a", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linkButton,
    href: "#resume"
  }, "Resume"), " |", /*#__PURE__*/React.createElement("a", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linkButton,
    href: "#projects"
  }, "Projects"), " |", /*#__PURE__*/React.createElement("a", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linkButton,
    href: "#about"
  }, "About"), " |", /*#__PURE__*/React.createElement("a", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linkButton,
    href: "#skills"
  }, "Skills"), " |", /*#__PURE__*/React.createElement("a", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].linkButton,
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/React.createElement("section", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heroSection
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heroContent
  }, /*#__PURE__*/React.createElement("h1", {
    id: "resume"
  }, "Christopher Lazariuk"), /*#__PURE__*/React.createElement("h2", null, "Software Engineering, Web Design, Project Management"), /*#__PURE__*/React.createElement("a", {
    href: "/img/lazResLatest.pdf",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("button", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].resumeButton
  }, "View Resume")))), /*#__PURE__*/React.createElement("section", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioSamples,
    id: "projects"
  }, /*#__PURE__*/React.createElement("h1", null, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioGrid
  }, projects.map((project, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portPicContainer
  }, /*#__PURE__*/React.createElement("a", {
    href: project.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].picFile,
    src: project.image,
    alt: project.title
  }))), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portDescriptionCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portTitleCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portTitle
  }, /*#__PURE__*/React.createElement("a", {
    href: project.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("strong", null, project.title), /*#__PURE__*/React.createElement("br", null), project.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portTitle
  }, /*#__PURE__*/React.createElement("a", {
    href: project.github,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("strong", null, "Github Repository Link")))), /*#__PURE__*/React.createElement("ul", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].descriptionList
  }, project.descriptions.map((desc, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portDescriptionText
  }, desc)))))))), /*#__PURE__*/React.createElement("section", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bio,
    id: "about"
  }, /*#__PURE__*/React.createElement("h1", null, "About Me..."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AboutMe
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProDetails
  }, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProPicContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProPic,
    src: "./img/ChrisBioPic.jpg",
    alt: "Chris Bio"
  })), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerText
  }, "Let's scale up something beautiful together!")), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, "For me, building a successful proessional isn't just about churning out a few lines of code..."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, "I've led field teams on multi-million dollar productions and events..."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, "I've coordinated remote teams on projects in podcasting, software, and more..."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, " I've handled client sales and relations for multiple brands and industries..."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, "I don't just code. I create and sustain businesses, products, and communities."), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bioBullet
  }, "It's always time for the next big pipe dream!"))), /*#__PURE__*/React.createElement("section", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].skills,
    id: "skills"
  }, /*#__PURE__*/React.createElement("h1", null, "Languages and Frameworks"), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].languageButtons
  }, languages.map((lang, index) => /*#__PURE__*/React.createElement("a", {
    key: index,
    href: lang.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: lang.image,
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].languageButton,
    alt: lang.name
  }))))), /*#__PURE__*/React.createElement("section", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contact,
    id: "contact"
  }, /*#__PURE__*/React.createElement("h1", null, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactIcons
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:clazariuk@gmail.com",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./img/emailIcon.jpeg",
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactPic,
    alt: "Email"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/christopherlazariuk/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/linkedinIcon.png",
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactPic,
    alt: "LinkedIn"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Clazariuk1",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/githubPic.png",
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactPic,
    alt: "GitHub"
  })))));
}
const projects = [{
  title: "Chef's Choice",
  subtitle: "an AI/ML DRIVEN ONLINE ORDERING APP",
  link: "https://drive.google.com/drive/u/0/folders/1HUBsHjtQ5nOlOBXnnGGNK48Yb6VyDnbM",
  github: "https://github.com/Developers-Challenge/Theta",
  image: "/img/chefsChoiceLogo.png",
  descriptions: ["An Eight Week Intensive Hackathon for full SDLC of AI/ML-empowered app.", "Product Management Duties, heavy collaboration with UX/UI Research and Design", "Git version control management, code review/debugging, and supervision of Full Stack Development teams"]
}, {
  title: "Momentum",
  subtitle: "an Arena Survival Game",
  link: "https://momentum.christopherlazariuk.me",
  github: "https://github.com/Clazariuk1/Dungeon-Arena-GAp1",
  image: "./img/MomentumPortPic.png",
  descriptions: ["An arcade-style survival game making heavy use of collision detection elements and DOM manipulation.", "Front-end HTML/CSS/JS Development", "Heavy Usage of SFX and Music"]
}, {
  title: "Dev Dependency",
  subtitle: "an Ecommerce Website",
  link: "https://ecommerce.christopherlazariuk.me",
  github: "https://github.com/Clazariuk1/unit3-project",
  image: "/img/DevDependencyPortPic.png",
  descriptions: ["An ecommerce website with ordering system functionality and a multi-page layout", "Built with React, NodeJS, MongoDB", "Full stack MERN application featuring RESTful routing and full CRUD functionality"]
}, {
  title: "Connections",
  subtitle: "a Linkedin Alternative",
  link: "https://connections.christopherlazariuk.me",
  github: "https://github.com/Clazariuk1/connection",
  image: "/img/ConnectionsScreenshot.png",
  descriptions: ["\"What if LinkedIn got a reboot?\"", "Full-Stack MERN application featuring RESTful routing and full CRUD functionality", "Built with React, NodeJS, and MongoDB; acting team Scrum Master"]
}, {
  title: "Infinite Grind",
  subtitle: "a professional accountability log/tracker",
  link: "https://github.com/Clazariuk1/100-days-of-code",
  github: "https://github.com/Clazariuk1/100-days-of-code",
  image: "/img/infinityLogo.jpeg",
  descriptions: ["A log and file compendium of skill building challenges and daily accountability tracking.", "LeetCode function problems and lesson example challenges", "Links and annotated reference to the next big thing in my journey ahead."]
}];
const languages = [{
  name: "React",
  link: "https://react.dev/",
  image: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
}, {
  name: "JWT",
  link: "https://jwt.io/introduction",
  image: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
}, {
  name: "JavaScript",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  image: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
}, {
  name: "HTML5",
  link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  image: "https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge"
}, {
  name: "CSS3",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  image: "https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge"
}, {
  name: "NodeJS",
  link: "https://nodejs.org/en",
  image: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge"
}, {
  name: "Python",
  link: "https://www.python.org/",
  image: "https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54&style=for-the-badge"
}, {
  name: "MongoDB",
  link: "https://www.mongodb.com/",
  image: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge"
}, {
  name: "Heroku",
  link: "https://www.heroku.com/home",
  image: "https://img.shields.io/badge/heroku-%23430098.svg?logo=heroku&logoColor=white&style=for-the-badge"
}, {
  name: "Postman",
  link: "https://www.postman.com/",
  image: "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge"
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../public/img/codeBanner.jpeg */ "./public/img/codeBanner.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.i4p6UNa9JDMGa_2GDQXi {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

.DT5dVUEAa3kBDCiNP0up {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.QKbLaomCLrLQ8WgIgW3w {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.HsCVjCUq4Zd_imB0KU6V {
  display: flex;
  gap: 2rem;
}

.O3rInZgNez9DYDDoPrK3 {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.O3rInZgNez9DYDDoPrK3:hover {
  color: #007bff;
}

.Brt7pV005b79CLxX2ND_ {
  width: 100%;
  height: 80vh;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  text-align: center;
}
.Brt7pV005b79CLxX2ND_::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.LVXFQErxxr8Rk8fVrYLA {
  z-index: 1;
}

.I_gz67GcZRzLXXzIO8Bp {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
.I_gz67GcZRzLXXzIO8Bp:hover {
  background-color: #0056b3;
}

.V54Smx6V6UBt4FZyYB4s {
  width: 80%;
  margin: 5rem 0;
}

.K0OBNK3nXXxHVgHUUDbf {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.W5riCAUFay2uUuDbg_RA {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}
.W5riCAUFay2uUuDbg_RA:hover {
  transform: translateY(-10px);
}

.RVOI78gSjZmZwI3t6bsQ {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.d_lkOhqoGdNHmihkjtux {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.ndCixu5dsnscTn2bHq62 {
  padding: 1rem;
}

.hdyS5gz3pIJohOfkHJSJ {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dU8jIPnmu_feglvqhnct {
  font-size: 1.25rem;
  font-weight: bold;
}
.dU8jIPnmu_feglvqhnct a {
  text-decoration: none;
  color: #007bff;
}
.dU8jIPnmu_feglvqhnct a:hover {
  text-decoration: underline;
}

.LKo8AyLiGA7LEeAFHMw8 {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.C7Rxb79hG1qYRIKJNoFg {
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
}

.GKDolwXT1nhTVq8EHDNX {
  width: 80%;
  margin: 5rem 0;
  text-align: center;
}

.a0dYRE2yJyWrx0BQrmCQ {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.CEBOWRODaTkiXWzlNIiX {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #007bff;
}

.GX5jAwaOXMdKOMIAuiYb {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.TZ2FzGouDJwen7Eavap2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.YUWzxvTitPGVDeFRpMjV {
  font-size: 1.1rem;
  margin: 1rem 0;
  line-height: 1.6;
}

.Zhbdnqw4BroW8Gnw3km0 {
  width: 80%;
  margin: 5rem 0;
  text-align: center;
}

.iM_Nivk2crqeYoSBLo7L {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.XnObMZU6RjqdJezFgp_Q {
  width: 100px;
  height: auto;
  max-height: 30px;
}

.eapvzmy9ad7B4W5HDEMN {
  width: 80%;
  margin: 5rem 0;
  text-align: center;
}

.aHTRwDSzpByzXfeUeCYQ {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.jICp5v5KkniwStvrE8JZ {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s;
}
.jICp5v5KkniwStvrE8JZ:hover {
  transform: scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iCAAA;EACA,WAAA;EACA,yBAAA;AACJ;;AAEA;EACI,WAAA;EACA,eAAA;EACA,MAAA;EACA,aAAA;EACA,0CAAA;EACA,wCAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,eAAA;AACJ;;AAEA;EACI,aAAA;EACA,SAAA;AACJ;;AAEA;EACI,qBAAA;EACA,WAAA;EACA,iBAAA;AACJ;AAAI;EACI,cAAA;AAER;;AAEA;EACI,WAAA;EACA,YAAA;EACA,0EAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;AACJ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;AAER;;AAEA;EACI,UAAA;AACJ;;AAEA;EACI,gBAAA;EACA,uBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AACJ;AAAI;EACI,yBAAA;AAER;;AAEA;EACI,UAAA;EACA,cAAA;AACJ;;AAEA;EACI,aAAA;EACA,2DAAA;EACA,SAAA;AACJ;;AAEA;EACI,sBAAA;EACA,mBAAA;EACA,wCAAA;EACA,gBAAA;EACA,0BAAA;AACJ;AAAI;EACI,4BAAA;AAER;;AAEA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,oBAAA;EACG,iBAAA;AACP;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;AACJ;;AAEA;EACI,kBAAA;EACA,iBAAA;AACJ;AAAI;EACI,qBAAA;EACA,cAAA;AAER;AADQ;EACI,0BAAA;AAGZ;;AAEA;EACI,gBAAA;EACA,UAAA;EACA,gBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEA;EACI,UAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,oBAAA;EACG,iBAAA;AACP;;AAEA;EACI,iBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEA;EACI,UAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;AACJ;;AAEA;EACI,YAAA;EACA,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,UAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,0BAAA;AACJ;AAAI;EACI,qBAAA;AAER","sourcesContent":[".Portfolio {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    color: #333;\n    background-color: #f9f9f9;\n}\n\n.header {\n    width: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 1000;\n    background-color: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.scrollNav {\n    display: flex;\n    justify-content: center;\n    padding: 1rem 0;\n}\n\n.navLinks {\n    display: flex;\n    gap: 2rem;\n}\n\n.linkButton {\n    text-decoration: none;\n    color: #333;\n    font-weight: bold;\n    &:hover {\n        color: #007bff;\n    }\n}\n\n.heroSection {\n    width: 100%;\n    height: 80vh;\n    background: url('/public/img/codeBanner.jpeg') center/cover no-repeat;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    color: #fff;\n    text-align: center;\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.5);\n    }\n}\n\n.heroContent {\n    z-index: 1;\n}\n\n.resumeButton {\n    margin-top: 1rem;\n    padding: 0.75rem 1.5rem;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    &:hover {\n        background-color: #0056b3;\n    }\n}\n\n.portfolioSamples {\n    width: 80%;\n    margin: 5rem 0;\n}\n\n.portfolioGrid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 2rem;\n}\n\n.portfolioCard {\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    transition: transform 0.3s;\n    &:hover {\n        transform: translateY(-10px);\n    }\n}\n\n.portPicContainer {\n    width: 100%;\n    height: 200px;\n    overflow: hidden;\n}\n\n.picFile {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.portDescriptionCard {\n    padding: 1rem;\n}\n\n.portTitleCard {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.portTitle {\n    font-size: 1.25rem;\n    font-weight: bold;\n    a {\n        text-decoration: none;\n        color: #007bff;\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n}\n\n.descriptionList {\n    list-style: none;\n    padding: 0;\n    margin: 1rem 0 0;\n}\n\n.portDescriptionText {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n    line-height: 1.5;\n}\n\n.bio {\n    width: 80%;\n    margin: 5rem 0;\n    text-align: center;\n}\n\n.ProDetails {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n.ProPicContainer {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    overflow: hidden;\n    border: 2px solid #007bff;\n}\n\n.ProPic {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.headerText {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.bioBullet {\n    font-size: 1.1rem;\n    margin: 1rem 0;\n    line-height: 1.6;\n}\n\n.skills {\n    width: 80%;\n    margin: 5rem 0;\n    text-align: center;\n}\n\n.languageButtons {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\n.languageButton {\n    width: 100px;\n    height: auto;\n    max-height: 30px;\n}\n\n.contact {\n    width: 80%;\n    margin: 5rem 0;\n    text-align: center;\n}\n\n.contactIcons {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.contactPic {\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    transition: transform 0.3s;\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Portfolio": `i4p6UNa9JDMGa_2GDQXi`,
	"header": `DT5dVUEAa3kBDCiNP0up`,
	"scrollNav": `QKbLaomCLrLQ8WgIgW3w`,
	"navLinks": `HsCVjCUq4Zd_imB0KU6V`,
	"linkButton": `O3rInZgNez9DYDDoPrK3`,
	"heroSection": `Brt7pV005b79CLxX2ND_`,
	"heroContent": `LVXFQErxxr8Rk8fVrYLA`,
	"resumeButton": `I_gz67GcZRzLXXzIO8Bp`,
	"portfolioSamples": `V54Smx6V6UBt4FZyYB4s`,
	"portfolioGrid": `K0OBNK3nXXxHVgHUUDbf`,
	"portfolioCard": `W5riCAUFay2uUuDbg_RA`,
	"portPicContainer": `RVOI78gSjZmZwI3t6bsQ`,
	"picFile": `d_lkOhqoGdNHmihkjtux`,
	"portDescriptionCard": `ndCixu5dsnscTn2bHq62`,
	"portTitleCard": `hdyS5gz3pIJohOfkHJSJ`,
	"portTitle": `dU8jIPnmu_feglvqhnct`,
	"descriptionList": `LKo8AyLiGA7LEeAFHMw8`,
	"portDescriptionText": `C7Rxb79hG1qYRIKJNoFg`,
	"bio": `GKDolwXT1nhTVq8EHDNX`,
	"ProDetails": `a0dYRE2yJyWrx0BQrmCQ`,
	"ProPicContainer": `CEBOWRODaTkiXWzlNIiX`,
	"ProPic": `GX5jAwaOXMdKOMIAuiYb`,
	"headerText": `TZ2FzGouDJwen7Eavap2`,
	"bioBullet": `YUWzxvTitPGVDeFRpMjV`,
	"skills": `Zhbdnqw4BroW8Gnw3km0`,
	"languageButtons": `iM_Nivk2crqeYoSBLo7L`,
	"languageButton": `XnObMZU6RjqdJezFgp_Q`,
	"contact": `eapvzmy9ad7B4W5HDEMN`,
	"contactIcons": `aHTRwDSzpByzXfeUeCYQ`,
	"contactPic": `jICp5v5KkniwStvrE8JZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./public/img/codeBanner.jpeg":
/*!************************************!*\
  !*** ./public/img/codeBanner.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6940510066f22201c6e.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-88f9d9"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.53a0f2bc303b3ba4e973241a46feb6c4.js.map