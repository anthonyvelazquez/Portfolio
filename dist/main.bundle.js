webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://brittanychiang.com/v2/ -->\r\n<nav id=\"dot-nav\">\r\n    <ul>\r\n        <li class=\"dot-container\">\r\n          <a href=\"#intro-section\" data-number=\"0\" class=\"is-selected\">\r\n              <span style=\"margin-right: 10px\">Intro</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"dot-container\">\r\n          <a href=\"#about-section\" data-number=\"0\" class=\"is-selected\">\r\n              <span style=\"margin-right: 10px\">About</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"dot-container\">\r\n          <a href=\"#service-section\" data-number=\"0\" class=\"is-selected\">\r\n              <span style=\"margin-right: 10px\">What I Do</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"dot-container\">\r\n          <a href=\"#skill-section\" data-number=\"0\" class=\"is-selected\">\r\n              <span style=\"margin-right: 10px\">Skills</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"dot-container\">\r\n          <a href=\"#project-section\" data-number=\"0\" class=\"is-selected\">\r\n              <span style=\"margin-right: 10px\">Projects</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"dot-container\">\r\n            <a href=\"#contact-section\" data-number=\"0\" class=\"is-selected\">\r\n                <span style=\"margin-right: 10px\">Contact</span><span><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></span>\r\n            </a>\r\n          </li>\r\n    </ul>\r\n</nav>\r\n<div class=\"body-content\">\r\n    <section class=\"section\" id=\"intro-section\">\r\n        <div class=\"bg\"></div>\r\n        <div class=\"intro-wrapper\">\r\n            <div class=\"intro-body\">\r\n                <div class=\"intro-content\">\r\n                    <h1 class=\"heading\">Anthony H Velazquez</h1>\r\n                    <p class=\"intro-text\">Front and Back end Software Engineer</p>\r\n                    <p class=\"intro-text\">Game Developer</p>\r\n                    <p class=\"intro-text\">Student</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section\" id=\"about-section\">\r\n        <div class=\"about-wrapper\">\r\n            <h1 class=\"section-heading\">Hi, I'm Anthony.</h1>\r\n            <h3 class=\"sub-heading\"><b>I'm a design and detail oriented software engineer passionate about bringing user friendly deisgn with efficient code.</b></h3>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"about-inner-wrapper\">\r\n                <img class=\"headshot\" src=\"../assets/portfolio-face.jpg\" alt=\"Headshot\">\r\n                <div class=\"about-text-wrapper\">\r\n                    <p class=\"about-text\">I am a fourth year student at William Paterson University in New Jersey studying Computer Science. I have experience developing web applications, on both the front and back ends. I have also developed iOS applications along as game programming. I strive to create software that not only functions efficiently but is easy and simple to use as well.</p>\r\n                    <p class=\"about-text\">I love learning new and better ways to improve my coding to become more efficient and cleaner while at the same time delivering a perfect user experience. I consider work to always be an ongoing learning environment where you always have an opportunity to improve and share what you learn with others. No matter what, the end goal is always to create programs and applications with elegant design and code efficiency.</p>\r\n                    <p class=\"about-text\">When I'm not at a computer, I'm probably traveling, cooking and trying new foods.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section reset-bg\" id=\"service-section\">\r\n      <div class=\"bg\"></div>\r\n      <div class=\"service-wrapper\">\r\n          <h1 class=\"section-heading\">What I Do</h1>\r\n          <div class=\"divider\"></div>\r\n          <div class=\"service-inner-wrapper\">\r\n            <div class=\"flex-container-col\">\r\n              <div class=\"flex-item flex-container-row \">\r\n                <div class=\"flex-item service-bar\" style=\"border-bottom: 1px;border-style: solid;border-color: white;\">\r\n                  <h3 style=\"margin-top: 2%;margin-bottom: 5%;\"><i class=\"fa fa-desktop service-icon-spacing\" aria-hidden=\"true\"></i> Web Development</h3>\r\n                  <p class=\"about-text\">With HTML, CSS, JavaScript and other frameworks and build tools such as Sass, I can develop appealing websites and apps while maintaining a modular and efficient code base.</p>\r\n                </div>\r\n                <div class=\"flex-item service-bar\" style=\"border-left: 1px;border-bottom: 1px;border-style: solid;border-color: white;\">\r\n                  <h3 style=\"margin-top: 2%;margin-bottom: 5%;\"><i class=\"fa fa-desktop service-icon-spacing\" aria-hidden=\"true\"></i> Game Programming</h3>\r\n                  <p class=\"about-text\">From Allegro and SDL to Unreal and Unity, I can create smooth and comprehensive gameplay with clean, game state driven programming. I strive to create gameplay that engages the user and makes him want to keep playing over and over again.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex-item flex-container-row \">\r\n                <div class=\"flex-item service-bar\">\r\n                  <h3 style=\"margin-top: 2%;margin-bottom: 5%;\"><i class=\"fa fa-desktop service-icon-spacing\" aria-hidden=\"true\"></i> iOS Development</h3>\r\n                  <p class=\"about-text\">With Unity and Xcode I strive to develop iOS applications that fit the client's needs along with giving a fun and simple to use user experience.</p>\r\n                </div>\r\n                <div class=\"flex-item service-bar\" style=\"border-left: 1px;border-style: solid;border-color: white;\">\r\n                  <h3 style=\"margin-top: 2%;margin-bottom: 5%;\"><i class=\"fa fa-desktop service-icon-spacing\" aria-hidden=\"true\"></i> Application Programming</h3>\r\n                  <p class=\"about-text\">Last but not least with C++, Qt Creator and Visual Studio I can create stunning applications for Windows while keeping cross compatibility and efficiency in mind for Linux as well.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"section\" id=\"skill-section\">\r\n        <div class=\"skill-wrapper\">\r\n            <h1 class=\"section-heading\">Skills</h1>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"skill-inner-wrapper\">\r\n                <div class=\"flex-container-row\">\r\n                    <div class=\"flex-item\">\r\n                        <div class=\"skill-text-wrapper\">\r\n                            <h3><i class=\"fa fa-keyboard-o service-icon-spacing\" aria-hidden=\"true\"></i> Development</h3>\r\n                            <div class=\"flex-container-col\">\r\n                              <div class=\"flex-item flex-container-row\">\r\n                                  <div class=\"flex-item language\">C++</div>\r\n                                  <div class=\"flex-item language\">Python</div>\r\n                                  <div class=\"flex-item language\">Java</div>\r\n                              </div>\r\n                              <div class=\"flex-item flex-container-row\">\r\n                                  <div class=\"flex-item language\">HTML/CSS</div>\r\n                                  <div class=\"flex-item language\">Django</div>\r\n                                  <div class=\"flex-item language\">Javascript</div>\r\n                              </div>\r\n                              <div class=\"flex-item flex-container-row\">\r\n                                  <div class=\"flex-item language\">Angular</div>\r\n                                  <div class=\"flex-item language\">Node.js</div>\r\n                                  <div class=\"flex-item language\">Swift</div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                        <div class=\"flex-container-row\">\r\n                            <div class=\"flex-item\">\r\n                              <div class=\"skill-text-wrapper\">\r\n                                  <h3><i class=\"fa fa-wrench service-icon-spacing\" aria-hidden=\"true\"></i> Certifications</h3>\r\n                                <ul class=\"tool-list\">\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Google SEO Certification</li>\r\n                                </ul>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flex-container-row\" style=\"margin-top: 10%;\">\r\n                            <div class=\"flex-item\">\r\n                              <div class=\"skill-text-wrapper\">\r\n                                  <h3><i class=\"fa fa-wrench service-icon-spacing\" aria-hidden=\"true\"></i> Tools</h3>\r\n                                <ul class=\"tool-list\">\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Git + Github</li>\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Command Line</li>\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Visual Studio/Code</li>\r\n                                </ul>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"flex-item\">\r\n                              <div class=\"skill-text-wrapper\">\r\n                                  <h3><i class=\"fa fa-book service-icon-spacing\" aria-hidden=\"true\"></i> Knowledge</h3>\r\n                                <ul class=\"tool-list\">\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Debugging</li>\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> Reverse Engineering</li>\r\n                                    <li class=\"tool\"><i class=\"fa fa-check tool-check-spacing\" aria-hidden=\"true\"></i> 3D Modeling</li>\r\n                                </ul>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section reset-bg\" id=\"project-section\">\r\n        <div class=\"bg\"></div>\r\n        <div class=\"project-wrapper\">\r\n            <h1 class=\"section-heading\">Some Projects</h1>\r\n            <div class=\"divider\"></div>\r\n            <div class=\"project-inner-wrapper\" style=\"padding-left: 5%;\">\r\n                <div class=\"flex-container-col\">\r\n                    <div class=\"flex-item\">\r\n                      <h3 class=\"\" style=\"margin-bottom: 1%;\"><i class=\"fa fa-desktop\" aria-hidden=\"true\" style=\"margin-right: 3%;\" ></i> DJ Rooms </h3>\r\n                      <div class=\"used-item\" style=\"width: 8%;text-align:center;\"><a href=\"https://github.com/anthonyvelazquez/Dj-Rooms\">Open Github</a></div>\r\n                      <p class=\"project-text\">Dj Rooms ia a web app that turns your device into a Dj Booth/Jukebox. The application allows you to create a room with a key and you can hand the key out for people to join your room. Using Google Play Music, people can add songs to the playlist and it will queue it up and play it from the main device that created the room.</p>\r\n                      <div class=\"flex-container-row\">\r\n                        <div class=\"flex-item used-item\">Angular</div>\r\n                        <div class=\"flex-item used-item\">Node.js</div>\r\n                        <div class=\"flex-item used-item\">MongoDB</div>\r\n                        <div class=\"flex-item used-item\">Express</div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"flex-item\">\r\n                      <h3 class=\"\" style=\"margin-bottom: 1%;\"><i class=\"fa fa-desktop\" aria-hidden=\"true\" style=\"margin-right: 3%;\" ></i> Smart Hub</h3>\r\n                      <div class=\"used-item\" style=\"width: 8%;text-align:center;\"><a href=\"https://github.com/anthonyvelazquez/SmartHub\">Open Github</a></div>\r\n                      <p class=\"project-text\">Smart Hub is a web app that turns your Raspberry Pi or any other device into an Smart AI System. The application allows you to view your emails, do searches for cryptocurrency prices, set alarms and reminder, etc. In other works Smart Hub is Google Home/Alexa for any device and with added features.</p>\r\n                      <div class=\"flex-container-row\">\r\n                        <div class=\"flex-item used-item\">Django</div>\r\n                        <div class=\"flex-item used-item\">Python</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <a class=\"big-btn\" href=\"https://www.github.com/anthonyvelazquez/\" target=\"_blank\">\r\n      <span class=\"btn-link-text\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> View More Projects...</span>\r\n    </a>\r\n    <section class=\"section reset-bg\" id=\"contact-section\">\r\n        <div class=\"bg\"></div>\r\n        <div class=\"contact-wrapper\">\r\n            <div class=\"center\">\r\n                <h1 class=\"section-heading\">Contact Me</h1>\r\n                <div class=\"divider\"></div>\r\n                <p>Have any questions?</p>\r\n            </div>\r\n            <div class=\"contact-inner-wrapper\">\r\n                <form id=\"contact-form\" method=\"POST\" action=\"https://formspree.io/anthonyhvelazquez@gmail.com\">\r\n                        <label for=\"name\" class=\"contact-label\">Name</label>\r\n                        <input type=\"text\" name=\"name\" class=\"contact-input\" id=\"name\">\r\n                        <label for=\"email\" class=\"contact-label\">Email</label>\r\n                        <input type=\"text\" name=\"email\" class=\"contact-input\" id=\"email\">\r\n                        <label for=\"subject\" class=\"contact-label\">Subject</label>\r\n                        <input type=\"text\" name=\"subject\" class=\"contact-input\" id=\"subject\">\r\n                        <label for=\"message\" class=\"contact-label\">Message</label>\r\n                        <input type=\"text\" name=\"message\" class=\"contact-input\" id=\"message\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section footer\" id=\"footer-section\">\r\n            <div class=\"footer-wrapper\">\r\n                <div class=\"center\">\r\n                    <ul class=\"social\">\r\n                        <li class=\"social-btn\"><a href=\"mailto:anthonyhvelazquez@gmail.com\" target=\"_blank\" class=\"social-a\" title=\"Gmail\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg\" /></a></li>\r\n                        <li class=\"social-btn\"><a href=\"https://instagram.com/aanthonyz\" target=\"_blank\" class=\"social-a\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg\" /></a></li>\r\n                        <li class=\"social-btn\"><a href=\"https://https://twitter.com/aanthonyz2\" target=\"_blank\" class=\"social-a\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg\" /></a></li>\r\n                        <li class=\"social-btn\"><a href=\"https://www.codepen.io/anthonyhvelazquez/\" target=\"_blank\" class=\"social-a\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codepen.svg\" /></a></li>\r\n                        <li class=\"social-btn\"><a href=\"https://www.github.com/anthonyvelazquez/\" target=\"_blank\" class=\"social-a\" title=\"Github\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg\" /></a></li>\r\n                        <li class=\"social-btn\"><a href=\"https://www.linkedin.com/in/anthonyhvelazquez/\" target=\"_blank\" class=\"social-a\" title=\"Linkedin\"><img width=\"48\" width=\"48\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg\" /></a></li>\r\n                    </ul>\r\n                    <p class=\"footer-name\">\t&copy; Anthony Velazquez 2018</p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n</div>\r\n\r\n<!-- https://simpleicons.org/ -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dot-nav {\n  position: fixed;\n  top: 50%;\n  right: 35px;\n  z-index: 100;\n  bottom: auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n#dot-nav .dot-container {\n  text-align: right;\n  margin: 10% 0; }\n\na {\n  text-decoration: none;\n  color: #f2f2f2;\n  display: inline-block; }\n\n.body-content {\n  height: 100%;\n  overflow: visible;\n  position: relative; }\n\n.section {\n  width: 100%;\n  height: auto;\n  min-height: 700px;\n  padding: 0;\n  overflow: hidden;\n  color: #f2f2f2;\n  position: relative;\n  background-color: #1b1b1b; }\n\n.bg {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  z-index: -1;\n  overflow: hidden; }\n\n#intro-section .bg {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/intro-xl.jpg")) + ");\n  z-index: 0; }\n\n#intro-section .intro-wrapper {\n  padding: 0; }\n\n#intro-section .intro-wrapper .intro-body {\n  background: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 101vh;\n  overflow: hidden;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#intro-section .intro-wrapper .intro-body .intro-content {\n  width: 100%;\n  position: relative;\n  text-align: center;\n  padding: 0 5%;\n  top: -5%; }\n\n#intro-section .intro-wrapper .intro-body .intro-content .heading {\n  font-size: 4.5em;\n  font-weight: 500;\n  font-family: 'Chronicle Display Bold',Georgia,serif;\n  position: relative;\n  padding-bottom: 10px;\n  overflow: hidden;\n  opacity: 1; }\n\n#about-section .about-wrapper {\n  padding: 100px; }\n\n#about-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#about-section .divider {\n  display: block;\n  margin: 30px 0;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#about-section .about-inner-wrapper {\n  padding-right: 20px; }\n\n#about-section .about-text-wrapper {\n  display: inline-block;\n  width: 60%;\n  vertical-align: top; }\n\n#about-section .about-wrapper .about-text-wrapper .about-text {\n  margin-bottom: 10px;\n  font-size: 1.15em; }\n\n#about-section .about-wrapper .headshot {\n  display: inline-block;\n  width: 35%;\n  height: auto;\n  border-radius: 50%;\n  margin-top: -100px;\n  float: right;\n  max-width: 450px; }\n\n.reset-bg {\n  background: 0 0 !important; }\n\n#service-section .bg {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/services-xl.jpg")) + ");\n  z-index: -1; }\n\n#service-section .service-wrapper {\n  padding: 100px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  min-height: 700px; }\n\n#service-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#service-section .divider {\n  display: block;\n  margin: 30px 0;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#service-section .service-inner-wrapper {\n  padding: 20px;\n  padding-left: 5%; }\n\n#project-section .bg {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/services-xl.jpg")) + ");\n  z-index: -1; }\n\n#project-section .project-wrapper {\n  padding: 100px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  min-height: 700px; }\n\n#project-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#project-section .divider {\n  display: block;\n  margin: 30px 0;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#project-section .project-inner-wrapper {\n  padding: 20px;\n  padding-left: 5%; }\n\n.project-text {\n  padding-right: 25%; }\n\n.used-item {\n  padding: 7px 7px 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  color: white;\n  background: #333;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: .5px;\n  -webkit-box-flex: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n\n#skill-section .skill-wrapper {\n  padding: 100px; }\n\n#skill-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#skill-section .divider {\n  display: block;\n  margin: 30px 0;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#skill-section .skill-inner-wrapper {\n  padding-right: 20px; }\n\n#skill-section .skill-text-wrapper {\n  display: inline-block;\n  width: 60%;\n  vertical-align: top; }\n\n#skill-section .skill-wrapper .skill-text-wrapper .skill-text {\n  margin-bottom: 10px;\n  font-size: 1.15em; }\n\n#contact-section .bg {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/contact-xl.jpg")) + ");\n  z-index: -1; }\n\n#contact-section .contact-wrapper {\n  padding: 100px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  min-height: 700px; }\n\n#contact-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#contact-section .divider {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#contact-section .contact-inner-wrapper {\n  padding-right: 20px; }\n\n#contact-section .contact-text-wrapper {\n  display: inline-block;\n  width: 60%;\n  vertical-align: top; }\n\n#contact-section .contact-wrapper .contact-text-wrapper .contact-text {\n  margin-bottom: 10px;\n  font-size: 1.15em; }\n\n.center {\n  text-align: center; }\n\n#contact-form {\n  margin: 50px auto;\n  width: 500px; }\n\n.contact-label {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: block; }\n\n.contact-input {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: block;\n  width: 100%;\n  background: transparent;\n  border: 0;\n  border-bottom: 2px;\n  border-color: white;\n  border-style: solid;\n  outline: none;\n  color: white; }\n\n.footer {\n  max-height: 175px !important;\n  min-height: 175px !important; }\n\n#footer-section .footer-wrapper {\n  padding: 50px; }\n\n#footer-section .sub-heading {\n  width: 60%;\n  font-size: 1.2em;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1em; }\n\n#footer-section .divider {\n  display: block;\n  margin: 30px 0;\n  width: 100px;\n  height: 2px;\n  background-color: #00b7c7; }\n\n#footer-section .footer-inner-wrapper {\n  padding-right: 20px; }\n\n#footer-section .footer-text-wrapper {\n  display: inline-block;\n  width: 60%;\n  vertical-align: top; }\n\n#footer-section .footer-wrapper .footer-text-wrapper .footer-text {\n  margin-bottom: 10px;\n  font-size: 1.15em; }\n\n.social {\n  list-style: none;\n  padding: 0;\n  margin: 0 auto;\n  display: block; }\n\n.social-btn {\n  display: inline-block;\n  color: red;\n  margin: 0 5px; }\n\n.social-a {\n  text-decoration: none;\n  color: red;\n  fill: red; }\n\n.footer-name {\n  margin-top: 30px; }\n\n.language {\n  border: 2px solid white;\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n  line-height: 6;\n  margin: 10px 10px 10px 0;\n  padding: 0; }\n\n.language-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 auto;\n  display: block; }\n\n.flex-container-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.flex-container-col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.flex-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.flex-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.service-bar {\n  padding: 0 2%;\n  border: 0;\n  border-style: solid;\n  border-color: white; }\n\n.big-btn {\n  display: block;\n  width: 100%;\n  min-height: 100px;\n  color: #f2f2f2;\n  position: relative;\n  background: rbga(0, 0, 0, 0.6);\n  font-family: Helvetica,Arial,sans-serif;\n  font-size: 1em;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 1px;\n  overflow: hidden; }\n\n.big-btn .btn-link-text {\n  margin: 40px auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center; }\n\n.service-icon-spacing {\n  margin-right: 5%; }\n\n.tool-check-spacing {\n  margin-right: 10%; }\n\n.intro-text {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/contact-xl.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact-xl.52137624ce8cfdeb4de3.jpg";

/***/ }),

/***/ "../../../../../src/assets/intro-xl.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "intro-xl.0fcb854b6e921d32232d.jpg";

/***/ }),

/***/ "../../../../../src/assets/services-xl.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "services-xl.290de91d4467ac39c8b2.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map