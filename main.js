(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bets_bets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bets/bets.component */ "./src/app/bets/bets.component.ts");
/* harmony import */ var _bets_bet_list_bet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bets/bet-list/bet-list.component */ "./src/app/bets/bet-list/bet-list.component.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bets_bet_details_bet_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bets/bet-details/bet-details.component */ "./src/app/bets/bet-details/bet-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    {
        path: 'bets',
        component: _bets_bets_component__WEBPACK_IMPORTED_MODULE_2__["BetsComponent"],
        children: [
            { path: 'list', component: _bets_bet_list_bet_list_component__WEBPACK_IMPORTED_MODULE_3__["BetListComponent"] },
            { path: 'details/:id', component: _bets_bet_details_bet_details_component__WEBPACK_IMPORTED_MODULE_7__["BetDetailsComponent"] },
            { path: '', component: _bets_bet_list_bet_list_component__WEBPACK_IMPORTED_MODULE_3__["BetListComponent"] }
        ]
    },
    { path: 'signin', component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'signup', component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<a class=\"menu-toggle rounded\" (click)=\"onNavbarToggle()\">\r\n  <i class=\"fa fa-bars\"></i>\r\n</a>\r\n<nav id=\"sidebar-wrapper\" [ngClass]=\"{'active': this.navbarActive }\">\r\n  <ul class=\"sidebar-nav\">\r\n    <li class=\"sidebar-brand\">\r\n      <a class=\"js-scroll-trigger\" routerLink=\"/home\">BetSky</a>\r\n    </li>\r\n    <li class=\"sidebar-nav-item\">\r\n      <a class=\"js-scroll-trigger\" routerLink=\"/signin\">Iniciar sesion</a>\r\n    </li>\r\n    <li class=\"sidebar-nav-item\">\r\n      <a class=\"js-scroll-trigger\" href=\"#about\">Que tiene de diferente</a>\r\n    </li>\r\n    <li class=\"sidebar-nav-item\">\r\n      <a class=\"js-scroll-trigger\" href=\"#services\">Como funciona</a>\r\n    </li>\r\n    <li class=\"sidebar-nav-item\">\r\n      <a class=\"js-scroll-trigger\" href=\"#portfolio\">Apuestas Populares</a>\r\n    </li>\r\n    <li class=\"sidebar-nav-item\">\r\n      <a class=\"js-scroll-trigger\" href=\"#contact\">Contacenos</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- Scroll to Top Button-->\r\n<a class=\"scroll-to-top rounded js-scroll-trigger\" href=\"#page-top\">\r\n  <i class=\"fa fa-angle-up\"></i>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  font-family: 'Source Sans Pro'; }\n\n.btn-xl {\n  padding: 1.25rem 2.5rem; }\n\n.content-section {\n  padding-top: 7.5rem;\n  padding-bottom: 7.5rem; }\n\n.content-section-heading h2 {\n  font-size: 3rem; }\n\n.content-section-heading h3 {\n  font-size: 1rem;\n  text-transform: uppercase; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700; }\n\n.text-faded {\n  color: rgba(255, 255, 255, 0.7); }\n\n/* Map */\n\n.map {\n  height: 30rem; }\n\n@media (max-width: 992px) {\n  .map {\n    height: 75%; } }\n\n.map iframe {\n  pointer-events: none; }\n\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: white;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 45px; }\n\n.scroll-to-top:focus, .scroll-to-top:hover {\n    color: white; }\n\n.scroll-to-top:hover {\n    background: #343a40; }\n\n.scroll-to-top i {\n    font-weight: 800; }\n\n.masthead {\n  min-height: 30rem;\n  position: relative;\n  display: table;\n  width: 100%;\n  height: auto;\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"https://j053noir.github.io/bet-sky-example/assets/img/bg-masthead.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.masthead h1 {\n    font-size: 4rem;\n    margin: 0;\n    padding: 0; }\n\n@media (min-width: 992px) {\n    .masthead {\n      height: 100vh; }\n      .masthead h1 {\n        font-size: 5.5rem; } }\n\n/* Side Menu */\n\n#sidebar-wrapper {\n  position: fixed;\n  z-index: 16;\n  right: 0;\n  width: 250px;\n  height: 100%;\n  transition: all 0.4s ease 0s;\n  -webkit-transform: translateX(250px);\n          transform: translateX(250px);\n  background: #1D809F;\n  border-left: 1px solid rgba(255, 255, 255, 0.1); }\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li.sidebar-nav-item a {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  padding: 15px; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  font-size: 1.2rem;\n  background: rgba(52, 58, 64, 0.1);\n  height: 80px;\n  line-height: 50px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #fff; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n#sidebar-wrapper.active {\n  right: 250px;\n  width: 250px;\n  transition: all 0.4s ease 0s; }\n\n.menu-toggle {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 50px;\n  z-index: 999; }\n\n.menu-toggle:focus, .menu-toggle:hover {\n    color: #fff; }\n\n.menu-toggle:hover {\n    background: #343a40; }\n\n.service-icon {\n  background-color: #fff;\n  color: #1D809F;\n  height: 7rem;\n  width: 7rem;\n  display: block;\n  line-height: 7.5rem;\n  font-size: 2.25rem;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1); }\n\n.callout {\n  padding: 15rem 0;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"https://j053noir.github.io/bet-sky-example/assets/img/bg-callout.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.callout h2 {\n    font-size: 3.5rem;\n    font-weight: 700;\n    display: block;\n    max-width: 30rem; }\n\n.portfolio-item {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  max-width: 530px;\n  margin: auto auto 1rem; }\n\n.portfolio-item .caption {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(33, 37, 41, 0.2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 1; }\n\n.portfolio-item .caption .caption-content {\n      color: #fff;\n      margin: auto 2rem 2rem; }\n\n.portfolio-item .caption .caption-content h2 {\n        font-size: 0.8rem;\n        text-transform: uppercase; }\n\n.portfolio-item .caption .caption-content p {\n        font-weight: 300;\n        font-size: 1.2rem; }\n\n@media (min-width: 992px) {\n    .portfolio-item {\n      max-width: none;\n      margin: 0; }\n      .portfolio-item .caption {\n        -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\n        -webkit-clip-path: inset(0px);\n        clip-path: inset(0px); }\n        .portfolio-item .caption .caption-content {\n          transition: opacity 0.25s;\n          margin-left: 5rem;\n          margin-right: 5rem;\n          margin-bottom: 5rem; }\n      .portfolio-item img {\n        -webkit-transition: -webkit-clip-path 0.25s ease-out;\n        -webkit-clip-path: inset(-1px);\n        clip-path: inset(-1px); }\n      .portfolio-item:hover img {\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem); }\n      .portfolio-item:hover .caption {\n        background-color: rgba(29, 128, 159, 0.9);\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem); } }\n\nfooter.footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem; }\n\nfooter.footer .social-link {\n    display: block;\n    height: 4rem;\n    width: 4rem;\n    line-height: 4.3rem;\n    font-size: 1.5rem;\n    background-color: #1D809F;\n    transition: background-color 0.15s ease-in-out;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1); }\n\nfooter.footer .social-link:hover {\n      background-color: #155d74;\n      text-decoration: none; }\n\na {\n  color: #1D809F; }\n\na:hover, a:focus, a:active {\n    color: #155d74; }\n\n.btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #155d74 !important;\n    border-color: #155d74 !important; }\n\n.btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important; }\n\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important; }\n\n.btn-dark {\n  color: #fff !important; }\n\n.btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700; }\n\n.bg-primary {\n  background-color: #1D809F !important; }\n\n.text-primary {\n  color: #1D809F !important; }\n\n.text-secondary {\n  color: #ecb807 !important; }\n\n.sidebar-wrapper.active .sidebar-nav {\n  background-color: #1D809F; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bet-sky';
        this.navbarActive = false;
    }
    AppComponent.prototype.onNavbarToggle = function () {
        this.navbarActive = !this.navbarActive;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _bets_bet_details_bet_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bets/bet-details/bet-details.component */ "./src/app/bets/bet-details/bet-details.component.ts");
/* harmony import */ var _bets_bet_list_bet_item_bet_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bets/bet-list/bet-item/bet-item.component */ "./src/app/bets/bet-list/bet-item/bet-item.component.ts");
/* harmony import */ var _bets_bet_list_bet_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bets/bet-list/bet-list.component */ "./src/app/bets/bet-list/bet-list.component.ts");
/* harmony import */ var _bets_bets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bets/bets.component */ "./src/app/bets/bets.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _bets_bet_manage_bet_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bets/bet-manage/bet-manage.component */ "./src/app/bets/bet-manage/bet-manage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bets_bets_component__WEBPACK_IMPORTED_MODULE_10__["BetsComponent"],
                _bets_bet_list_bet_list_component__WEBPACK_IMPORTED_MODULE_9__["BetListComponent"],
                _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
                _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _bets_bet_list_bet_item_bet_item_component__WEBPACK_IMPORTED_MODULE_8__["BetItemComponent"],
                _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _bets_bet_details_bet_details_component__WEBPACK_IMPORTED_MODULE_7__["BetDetailsComponent"],
                _bets_bet_manage_bet_manage_component__WEBPACK_IMPORTED_MODULE_13__["BetManageComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <form class=\"form-signin text-center\">\r\n    <img class=\"mb-4\" src=\"../../assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Incio de sesión</h1>\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\" type=\"email\">\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" type=\"password\">\r\n    <div class=\"checkbox mb-3\">\r\n      <label>\r\n        <input value=\"remember-me\" type=\"checkbox\"> Remember me\r\n      </label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" routerLink=\"/bets\">Sign in</button>\r\n    <p class=\"mt-5 mb-3 text-muted\">© 2018</p>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #1D809F; }\n  a:hover, a:focus, a:active {\n    color: #155d74; }\n  .btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #155d74 !important;\n    border-color: #155d74 !important; }\n  .btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important; }\n  .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important; }\n  .btn-dark {\n  color: #fff !important; }\n  .btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700; }\n  .bg-primary {\n  background-color: #1D809F !important; }\n  .text-primary {\n  color: #1D809F !important; }\n  .text-secondary {\n  color: #ecb807 !important; }\n  .wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  color: #1D809F; }\n  .form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto; }\n  .form-signin h1 {\n    color: #1D809F; }\n  .form-signin .checkbox {\n    font-weight: 400;\n    color: #1D809F; }\n  .form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px; }\n  .form-signin .form-control:focus {\n      z-index: 2; }\n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/auth/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sign-up works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/auth/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/bets/bet-details/bet-details.component.html":
/*!*************************************************************!*\
  !*** ./src/app/bets/bet-details/bet-details.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n  <img class=\"card-img-top img-fluid\" [src]=\"bet.image\" alt=\"\">\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">{{bet.name}}</h3>\n    <h4>desde ${{bet.minbet}}</h4>\n    <p class=\"card-text\" [innerHtml]=\"bet.description\"></p>\n    <span>\n      <i class=\"fa fa-star\" *ngFor=\"let star of getStarsArray(bet.calification)\"></i>\n    </span>    \n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-primary\" (click)=\"onPlaceBet()\">Apostar</button>\n  </div>\n</div>\n<!-- /.card -->\n\n<div class=\"card card-outline-secondary my-4\">\n  <div class=\"card-header\">\n    Comentarios\n  </div>\n  <div class=\"card-body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\n      necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\n      necessitatibus quae sint natus.</p>\n    <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n    <hr>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\n      necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\n      necessitatibus quae sint natus.</p>\n    <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n    <hr>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\n      necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\n      necessitatibus quae sint natus.</p>\n    <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\n    <hr>\n    <a href=\"#\" class=\"btn btn-success\">Deja un comentario</a>\n  </div>\n</div>\n<!-- /.card -->\n"

/***/ }),

/***/ "./src/app/bets/bet-details/bet-details.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/bets/bet-details/bet-details.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bets/bet-details/bet-details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/bets/bet-details/bet-details.component.ts ***!
  \***********************************************************/
/*! exports provided: BetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetDetailsComponent", function() { return BetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bet.service */ "./src/app/bets/bet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BetDetailsComponent = /** @class */ (function () {
    function BetDetailsComponent(betService, route) {
        this.betService = betService;
        this.route = route;
    }
    BetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.betSubscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id) {
                _this.bet = _this.betService.find(_this.id);
            }
            else {
                alert('Not valid id');
            }
        });
    };
    BetDetailsComponent.prototype.getStarsArray = function (pages) {
        return new Array(pages).fill(1);
    };
    BetDetailsComponent.prototype.onPlaceBet = function () {
        alertifyjs__WEBPACK_IMPORTED_MODULE_3__["prompt"]('Colocar apuesta', '¿Cuanto es el valor que desea apostar?', '', function (evt, value) {
            if (!isNaN(value) && value >= 2430) {
                alertifyjs__WEBPACK_IMPORTED_MODULE_3__["success"]('Usted ingreso: ' + value, +' será redirigido a la plataforma de pagos...');
            }
            else if (isNaN(value)) {
                alertifyjs__WEBPACK_IMPORTED_MODULE_3__["error"]('Valor no es valido');
            }
            else {
                alertifyjs__WEBPACK_IMPORTED_MODULE_3__["error"]('Valor debe ser mayor a 2430');
            }
        }, function () { });
    };
    BetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bet-details',
            template: __webpack_require__(/*! ./bet-details.component.html */ "./src/app/bets/bet-details/bet-details.component.html"),
            styles: [__webpack_require__(/*! ./bet-details.component.scss */ "./src/app/bets/bet-details/bet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_bet_service__WEBPACK_IMPORTED_MODULE_1__["BetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BetDetailsComponent);
    return BetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bets/bet-list/bet-item/bet-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bets/bet-list/bet-item/bet-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card h-100\">\n  <a [routerLink]=\"['/bets/details/', item.id]\"><img class=\"card-img-top\" [src]=\"item.image\" alt=\"\"></a>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">\n      <a [routerLink]=\"['/bets/details/', item.id]\">{{ item.name }}</a>\n    </h4>\n    <h5 title=\"Apuesta minima\">desde ${{ item.minbet }}</h5>\n    <p class=\"card-text\" [innerHTML]=\"item.description\"></p>\n  </div>\n  <div class=\"card-footer\">\n    <small>\n      <i class=\"fa fa-star\" *ngFor=\"let star of getStarsArray(item.calification)\"></i>\n    </small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bets/bet-list/bet-item/bet-item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/bets/bet-list/bet-item/bet-item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #1D809F; }\n  a:hover, a:focus, a:active {\n    color: #155d74; }\n  .btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #155d74 !important;\n    border-color: #155d74 !important; }\n  .btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important; }\n  .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important; }\n  .btn-dark {\n  color: #fff !important; }\n  .btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700; }\n  .bg-primary {\n  background-color: #1D809F !important; }\n  .text-primary {\n  color: #1D809F !important; }\n  .text-secondary {\n  color: #ecb807 !important; }\n  .card .card-img-top {\n  cursor: pointer; }\n  .card .card-title {\n  cursor: pointer;\n  color: #1D809F; }\n  .card h5 {\n  color: green; }\n  .card .card-footer {\n  color: #ecb807; }\n"

/***/ }),

/***/ "./src/app/bets/bet-list/bet-item/bet-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bets/bet-list/bet-item/bet-item.component.ts ***!
  \**************************************************************/
/*! exports provided: BetItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetItemComponent", function() { return BetItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bet_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bet.model */ "./src/app/bets/bet.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BetItemComponent = /** @class */ (function () {
    function BetItemComponent() {
    }
    BetItemComponent.prototype.ngOnInit = function () {
    };
    BetItemComponent.prototype.getStarsArray = function (pages) {
        return new Array(pages).fill(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"])
    ], BetItemComponent.prototype, "item", void 0);
    BetItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bet-item',
            template: __webpack_require__(/*! ./bet-item.component.html */ "./src/app/bets/bet-list/bet-item/bet-item.component.html"),
            styles: [__webpack_require__(/*! ./bet-item.component.scss */ "./src/app/bets/bet-list/bet-item/bet-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BetItemComponent);
    return BetItemComponent;
}());



/***/ }),

/***/ "./src/app/bets/bet-list/bet-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/bets/bet-list/bet-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide my-4\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li [ngClass]=\"{ 'active': this.carouselIndex == 0}\" (click)=\"onSelectCarouselIndex(0)\"></li>\r\n    <li [ngClass]=\"{ 'active': this.carouselIndex == 1}\" (click)=\"onSelectCarouselIndex(1)\"></li>\r\n    <li [ngClass]=\"{ 'active': this.carouselIndex == 2}\" (click)=\"onSelectCarouselIndex(2)\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item\" *ngFor=\"let item of carouselItems;let i = index\" [ngClass]=\"{ 'active': this.carouselIndex == i}\">\r\n      <img class=\"d-block img-fluid\" src=\"{{item.image}}\" alt=\"{{item.id}}\">\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" (click)=\"onPreviousCarousel()\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" (click)=\"onNextCarousel()\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let bet of bets\">\r\n    <app-bet-item [item]=\"bet\"></app-bet-item>\r\n  </div>\r\n\r\n</div>\r\n<!-- /.row -->\r\n"

/***/ }),

/***/ "./src/app/bets/bet-list/bet-list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/bets/bet-list/bet-list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bets/bet-list/bet-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/bets/bet-list/bet-list.component.ts ***!
  \*****************************************************/
/*! exports provided: BetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetListComponent", function() { return BetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel-item.model */ "./src/app/bets/carousel-item.model.ts");
/* harmony import */ var _bet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bet.service */ "./src/app/bets/bet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BetListComponent = /** @class */ (function () {
    function BetListComponent(betService, route) {
        this.betService = betService;
        this.route = route;
        this.carouselIndex = 0;
        this.carouselItems = [
            new _carousel_item_model__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"](0, '/assets/img/carousel/0.jpg'),
            new _carousel_item_model__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"](1, '/assets/img/carousel/1.jpg'),
            new _carousel_item_model__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"](2, '/assets/img/carousel/2.jpg'),
        ];
    }
    BetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.betSubscribe = this.route.queryParamMap.subscribe(function (params) {
            var type = params.has('type') ? params.get('type') : '';
            _this.bets = _this.betService.getByType(type);
        });
    };
    BetListComponent.prototype.ngOnDestroy = function () {
        this.betSubscribe.unsubscribe();
    };
    BetListComponent.prototype.onSelectCarouselIndex = function (index) {
        this.carouselIndex = index;
    };
    BetListComponent.prototype.onNextCarousel = function () {
        this.carouselIndex = ((this.carouselIndex + 1) >= this.carouselItems.length) ? 0 : this.carouselIndex + 1;
    };
    BetListComponent.prototype.onPreviousCarousel = function () {
        this.carouselIndex = ((this.carouselIndex - 1) < 0) ? (this.carouselItems.length - 1) : this.carouselIndex - 1;
    };
    BetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bet-list',
            template: __webpack_require__(/*! ./bet-list.component.html */ "./src/app/bets/bet-list/bet-list.component.html"),
            styles: [__webpack_require__(/*! ./bet-list.component.scss */ "./src/app/bets/bet-list/bet-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_bet_service__WEBPACK_IMPORTED_MODULE_2__["BetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BetListComponent);
    return BetListComponent;
}());



/***/ }),

/***/ "./src/app/bets/bet-manage/bet-manage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/bets/bet-manage/bet-manage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bet-manage works!\n</p>\n"

/***/ }),

/***/ "./src/app/bets/bet-manage/bet-manage.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/bets/bet-manage/bet-manage.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bets/bet-manage/bet-manage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/bets/bet-manage/bet-manage.component.ts ***!
  \*********************************************************/
/*! exports provided: BetManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetManageComponent", function() { return BetManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BetManageComponent = /** @class */ (function () {
    function BetManageComponent() {
    }
    BetManageComponent.prototype.ngOnInit = function () {
    };
    BetManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bet-manage',
            template: __webpack_require__(/*! ./bet-manage.component.html */ "./src/app/bets/bet-manage/bet-manage.component.html"),
            styles: [__webpack_require__(/*! ./bet-manage.component.scss */ "./src/app/bets/bet-manage/bet-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BetManageComponent);
    return BetManageComponent;
}());



/***/ }),

/***/ "./src/app/bets/bet.model.ts":
/*!***********************************!*\
  !*** ./src/app/bets/bet.model.ts ***!
  \***********************************/
/*! exports provided: Bet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bet", function() { return Bet; });
var Bet = /** @class */ (function () {
    function Bet(id, image, name, minbet, description, calification, type) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.minbet = minbet;
        this.description = description;
        this.calification = calification;
        this.type = type;
    }
    return Bet;
}());



/***/ }),

/***/ "./src/app/bets/bet.service.ts":
/*!*************************************!*\
  !*** ./src/app/bets/bet.service.ts ***!
  \*************************************/
/*! exports provided: BetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetService", function() { return BetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bet_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bet.model */ "./src/app/bets/bet.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BetService = /** @class */ (function () {
    function BetService() {
        this.bets = [
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](1, '/assets/img/bets/juniorvscolon.jpg', 'JUNIOR VS COLON', 2430, 'Adivina el marcador y gana!', 4, 'sports'),
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](2, '/assets/img/bets/desafio2018.jpg', 'DESAFIO 2018', 2430, 'El desafio 2018 esta pronto a llegar a su final ¿Quien será el ganador?', 3, 'showbiz'),
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](3, '/assets/img/bets/thebest.jpg', 'THE BEST', 2430, 'Ronaldo, Modric y Salah, solo uno podra ser<br><strong>The Best FIFA Men\'s Player<strong>', 4, 'showbiz'),
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](4, '/assets/img/bets/vallenato.jpg', '😆 #LosEspecialistasDelVallento', 2430, '¿Será que sale un conjunto vallenato de la especialización?', 4, 'funny'),
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](5, '/assets/img/bets/gokuvssuperman.jpg', 'GOKU VS SUPERMAN', 2430, 'La batalla del siglo', 4, 'funny'),
            new _bet_model__WEBPACK_IMPORTED_MODULE_1__["Bet"](6, '/assets/img/bets/vuelve.jpg', '¿Será que **** vuelve con la novia?', 2430, 'Ya han <strong>CORTADO 4 VECES</strong>, el dice que va a cambiar... ¿será que vuelven?', 4, 'funny'),
        ];
    }
    BetService.prototype.getBets = function () {
        return this.bets.slice();
    };
    BetService.prototype.getByType = function (type) {
        return this.bets.filter(function (value) {
            return value.type.toLowerCase().indexOf(type.toLowerCase()) !== -1;
        });
    };
    BetService.prototype.find = function (id) {
        return this.bets.find(function (value) {
            return value.id === id;
        });
    };
    BetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BetService);
    return BetService;
}());



/***/ }),

/***/ "./src/app/bets/bets.component.html":
/*!******************************************!*\
  !*** ./src/app/bets/bets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n<div class=\"wrapper\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-3 navigation\">\r\n\r\n        <h1 class=\"my-4\">BETSKY</h1>\r\n        <div class=\"list-group\">\r\n          <a (click)=\"onFilterBy('sports')\" class=\"list-group-item\">⚽️ Deportes</a>\r\n          <a (click)=\"onFilterBy('showbiz')\" class=\"list-group-item\">🎤 Farandula</a>\r\n          <a (click)=\"onFilterBy('funny')\" class=\"list-group-item\">😂 Divertidas</a>\r\n          <a (click)=\"onFilterBy('')\" class=\"list-group-item\">Todas</a>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /.col-lg-3 -->\r\n\r\n      <div class=\"col-lg-9\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <!-- /.col-lg-9 -->\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n  </div>\r\n</div>\r\n<!-- /.container -->\r\n"

/***/ }),

/***/ "./src/app/bets/bets.component.scss":
/*!******************************************!*\
  !*** ./src/app/bets/bets.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #1D809F; }\n  a:hover, a:focus, a:active {\n    color: #155d74; }\n  .btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #155d74 !important;\n    border-color: #155d74 !important; }\n  .btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important; }\n  .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important; }\n  .btn-dark {\n  color: #fff !important; }\n  .btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700; }\n  .bg-primary {\n  background-color: #1D809F !important; }\n  .text-primary {\n  color: #1D809F !important; }\n  .text-secondary {\n  color: #ecb807 !important; }\n  .wrapper {\n  width: 100%;\n  min-height: 100vh;\n  background-color: #1D809F; }\n  .navigation h1 {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/bets/bets.component.ts":
/*!****************************************!*\
  !*** ./src/app/bets/bets.component.ts ***!
  \****************************************/
/*! exports provided: BetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetsComponent", function() { return BetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BetsComponent = /** @class */ (function () {
    function BetsComponent(router) {
        this.router = router;
    }
    BetsComponent.prototype.ngOnInit = function () {
    };
    BetsComponent.prototype.onFilterBy = function (type) {
        if (type === '') {
            this.router.navigate(['/bets']);
        }
        else {
            this.router.navigate(['/bets'], { queryParams: { type: type } });
        }
    };
    BetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bets',
            template: __webpack_require__(/*! ./bets.component.html */ "./src/app/bets/bets.component.html"),
            styles: [__webpack_require__(/*! ./bets.component.scss */ "./src/app/bets/bets.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BetsComponent);
    return BetsComponent;
}());



/***/ }),

/***/ "./src/app/bets/carousel-item.model.ts":
/*!*********************************************!*\
  !*** ./src/app/bets/carousel-item.model.ts ***!
  \*********************************************/
/*! exports provided: CarouselItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return CarouselItem; });
var CarouselItem = /** @class */ (function () {
    function CarouselItem(id, image) {
        this.id = id;
        this.image = image;
    }
    return CarouselItem;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<header class=\"masthead d-flex\">\r\n  <div class=\"container text-center my-auto\">\r\n    <h1 class=\"mb-1\">BETSKY</h1>\r\n    <h3 class=\"mb-5\">\r\n      <em>Una nueva forma de hacer apuestas</em>\r\n    </h3>\r\n    <a class=\"btn btn-secondary btn-xl js-scroll-trigger\" href=\"#about\">¿Que tiene de diferente?</a>\r\n  </div>\r\n  <div class=\"overlay\"></div>\r\n</header>\r\n\r\n<!-- About -->\r\n<section class=\"content-section bg-light\" id=\"about\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 mx-auto\">\r\n        <h2>BETSKY es una plataforma de apuestas que ganas por contribuir y participar</h2>\r\n        <p class=\"lead mb-5\">utilizando nuesta aplicación web o móvil registra apuestas de cualquier temática</p>\r\n        <a class=\"btn btn-dark btn-xl js-scroll-trigger\" href=\"#services\">¿Comó funciona?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Services -->\r\n<section class=\"content-section bg-primary text-white text-center\" id=\"services\">\r\n  <div class=\"container\">\r\n    <div class=\"content-section-heading\">\r\n      <h3 class=\"text-secondary mb-0\">Una nueva forma de hacer apuestas</h3>\r\n      <h2 class=\"mb-5\">¿Como funciona?</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\r\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n          <i class=\"fa fa-lightbulb-o fa-2x\"></i>\r\n        </span>\r\n        <h4>\r\n          <strong>¡Idea!</strong>\r\n        </h4>\r\n        <p class=\"text-faded mb-0\">Se te ocurre una nueva apuesta</p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\r\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n          <i class=\"fa fa-plus fa-2x\"></i>\r\n        </span>\r\n        <h4>\r\n          <strong>Registro</strong>\r\n        </h4>\r\n        <p class=\"text-faded mb-0\">Ingresa tu apuesta a la plataforma</p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 mb-5 mb-md-0\">\r\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n          <span class=\"fa-stack fa-lg\">\r\n            <i class=\"fa fa-trophy fa-stack-2x fa-stack-trophy\"></i>\r\n            <i class=\"fa fa-users fa-inverse fa-stack-1x fa-stack-users\"></i>\r\n          </span>\r\n        </span>\r\n        <h4>\r\n          <strong>Ganadores</strong>\r\n        </h4>\r\n        <p class=\"text-faded mb-0\">Los ganadores reciben el premio</p>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n          <i class=\"fa fa-percent fa-2x\"></i>\r\n        </span>\r\n        <h4>\r\n          <strong>Tu tambien ganas</strong>\r\n        </h4>\r\n        <p class=\"text-faded mb-0\">Tu ganas un porcentaje del premio de cada apuesta</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Callout -->\r\n<section class=\"callout\">\r\n  <div class=\"container text-center\">\r\n    <h2 class=\"mx-auto mb-5\">¡Bienvenido a\r\n      <em>tu</em>\r\n      portal de apuestas!</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <a class=\"btn btn-primary btn-lg\" routerLink=\"/signin\">\r\n          aplicación web\r\n        </a>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <img src=\"/assets/img/android.png\" height=\"50\" alt=\"\">\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <img src=\"/assets/img/ios.png\" height=\"50\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Portfolio -->\r\n<section class=\"content-section\" id=\"portfolio\">\r\n  <div class=\"container\">\r\n    <div class=\"content-section-heading text-center\">\r\n      <h3 class=\"text-secondary mb-0\">Apuestas</h3>\r\n      <h2 class=\"mb-5\">Apuestas mas populares</h2>\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-lg-6\">\r\n        <a class=\"portfolio-item\" href=\"#\">\r\n          <span class=\"caption\">\r\n            <span class=\"caption-content\">\r\n              <h2>Junior vs Colón</h2>\r\n              <p class=\"mb-0\">Adivina el marcador y gana!</p>\r\n            </span>\r\n          </span>\r\n          <img class=\"img-fluid\" src=\"/assets/img/portfolio-1.jpg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <a class=\"portfolio-item\" href=\"#\">\r\n          <span class=\"caption\">\r\n            <span class=\"caption-content\">\r\n              <h2>Desafio 2018</h2>\r\n              <p class=\"mb-0\">El desafio 2018 esta pronto a llegar a su final ¿Quien será el ganador?</p>\r\n            </span>\r\n          </span>\r\n          <img class=\"img-fluid\" src=\"/assets/img/portfolio-2.jpg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <a class=\"portfolio-item\" href=\"#\">\r\n          <span class=\"caption\">\r\n            <span class=\"caption-content\">\r\n              <h2>The Best</h2>\r\n              <p class=\"mb-0\">Ronaldo, Modric y Salah, solo uno podra ser\r\n                <br>\r\n                <strong>The Best FIFA Men's Player</strong>\r\n              </p>\r\n            </span>\r\n          </span>\r\n          <img class=\"img-fluid\" src=\"/assets/img/portfolio-3.jpg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <a class=\"portfolio-item\" href=\"#\">\r\n          <span class=\"caption\">\r\n            <span class=\"caption-content\">\r\n              <h2>😆 #LosEspecialistasDelVallento</h2>\r\n              <p class=\"mb-0\">¿Será que sale un conjunto vallenato de la especialización?</p>\r\n            </span>\r\n          </span>\r\n          <img class=\"img-fluid\" src=\"/assets/img/portfolio-4.jpg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Map -->\r\n<section id=\"contact\" class=\"map\">\r\n  <iframe width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed\"></iframe>\r\n  <br />\r\n  <small>\r\n    <a href=\"https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A\"></a>\r\n  </small>\r\n</section>\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer text-center\">\r\n  <div class=\"container\">\r\n    <ul class=\"list-inline mb-5\">\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"social-link rounded-circle text-white mr-3\" href=\"#\">\r\n          <i class=\"fa fa-facebook fa-2x\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"social-link rounded-circle text-white mr-3\" href=\"#\">\r\n          <i class=\"fa fa-twitter fa-2x\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"social-link rounded-circle text-white\" href=\"#\">\r\n          <i class=\"fa fa-instagram fa-2x\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"text-muted small mb-0\">Copyright &copy; Your Website 2018</p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  font-family: 'Source Sans Pro'; }\n\n.btn-xl {\n  padding: 1.25rem 2.5rem; }\n\n.content-section {\n  padding-top: 7.5rem;\n  padding-bottom: 7.5rem; }\n\n.content-section-heading h2 {\n  font-size: 3rem; }\n\n.content-section-heading h3 {\n  font-size: 1rem;\n  text-transform: uppercase; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700; }\n\n.text-faded {\n  color: rgba(255, 255, 255, 0.7); }\n\n/* Map */\n\n.map {\n  height: 30rem; }\n\n@media (max-width: 992px) {\n  .map {\n    height: 75%; } }\n\n.map iframe {\n  pointer-events: none; }\n\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: white;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 45px; }\n\n.scroll-to-top:focus, .scroll-to-top:hover {\n    color: white; }\n\n.scroll-to-top:hover {\n    background: #343a40; }\n\n.scroll-to-top i {\n    font-weight: 800; }\n\n.masthead {\n  min-height: 30rem;\n  position: relative;\n  display: table;\n  width: 100%;\n  height: auto;\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"https://j053noir.github.io/bet-sky-example/assets/img/bg-masthead.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.masthead h1 {\n    font-size: 4rem;\n    margin: 0;\n    padding: 0; }\n\n@media (min-width: 992px) {\n    .masthead {\n      height: 100vh; }\n      .masthead h1 {\n        font-size: 5.5rem; } }\n\n/* Side Menu */\n\n#sidebar-wrapper {\n  position: fixed;\n  z-index: 16;\n  right: 0;\n  width: 250px;\n  height: 100%;\n  transition: all 0.4s ease 0s;\n  -webkit-transform: translateX(250px);\n          transform: translateX(250px);\n  background: #1D809F;\n  border-left: 1px solid rgba(255, 255, 255, 0.1); }\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.sidebar-nav li.sidebar-nav-item a {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  padding: 15px; }\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2); }\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none; }\n\n.sidebar-nav > .sidebar-brand {\n  font-size: 1.2rem;\n  background: rgba(52, 58, 64, 0.1);\n  height: 80px;\n  line-height: 50px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px; }\n\n.sidebar-nav > .sidebar-brand a {\n  color: #fff; }\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none; }\n\n#sidebar-wrapper.active {\n  right: 250px;\n  width: 250px;\n  transition: all 0.4s ease 0s; }\n\n.menu-toggle {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 50px;\n  z-index: 999; }\n\n.menu-toggle:focus, .menu-toggle:hover {\n    color: #fff; }\n\n.menu-toggle:hover {\n    background: #343a40; }\n\n.service-icon {\n  background-color: #fff;\n  color: #1D809F;\n  height: 7rem;\n  width: 7rem;\n  display: block;\n  line-height: 7.5rem;\n  font-size: 2.25rem;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1); }\n\n.callout {\n  padding: 15rem 0;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"https://j053noir.github.io/bet-sky-example/assets/img/bg-callout.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.callout h2 {\n    font-size: 3.5rem;\n    font-weight: 700;\n    display: block;\n    max-width: 30rem; }\n\n.portfolio-item {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  max-width: 530px;\n  margin: auto auto 1rem; }\n\n.portfolio-item .caption {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(33, 37, 41, 0.2);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 1; }\n\n.portfolio-item .caption .caption-content {\n      color: #fff;\n      margin: auto 2rem 2rem; }\n\n.portfolio-item .caption .caption-content h2 {\n        font-size: 0.8rem;\n        text-transform: uppercase; }\n\n.portfolio-item .caption .caption-content p {\n        font-weight: 300;\n        font-size: 1.2rem; }\n\n@media (min-width: 992px) {\n    .portfolio-item {\n      max-width: none;\n      margin: 0; }\n      .portfolio-item .caption {\n        -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\n        -webkit-clip-path: inset(0px);\n        clip-path: inset(0px); }\n        .portfolio-item .caption .caption-content {\n          transition: opacity 0.25s;\n          margin-left: 5rem;\n          margin-right: 5rem;\n          margin-bottom: 5rem; }\n      .portfolio-item img {\n        -webkit-transition: -webkit-clip-path 0.25s ease-out;\n        -webkit-clip-path: inset(-1px);\n        clip-path: inset(-1px); }\n      .portfolio-item:hover img {\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem); }\n      .portfolio-item:hover .caption {\n        background-color: rgba(29, 128, 159, 0.9);\n        -webkit-clip-path: inset(2rem);\n        clip-path: inset(2rem); } }\n\nfooter.footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem; }\n\nfooter.footer .social-link {\n    display: block;\n    height: 4rem;\n    width: 4rem;\n    line-height: 4.3rem;\n    font-size: 1.5rem;\n    background-color: #1D809F;\n    transition: background-color 0.15s ease-in-out;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1); }\n\nfooter.footer .social-link:hover {\n      background-color: #155d74;\n      text-decoration: none; }\n\na {\n  color: #1D809F; }\n\na:hover, a:focus, a:active {\n    color: #155d74; }\n\n.btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #155d74 !important;\n    border-color: #155d74 !important; }\n\n.btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important; }\n\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n    background-color: #ba9106 !important;\n    border-color: #ba9106 !important; }\n\n.btn-dark {\n  color: #fff !important; }\n\n.btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700; }\n\n.bg-primary {\n  background-color: #1D809F !important; }\n\n.text-primary {\n  color: #1D809F !important; }\n\n.text-secondary {\n  color: #ecb807 !important; }\n\n.masthead h1, .masthead h3 {\n  color: #fff;\n  text-shadow: 2px 2px #000; }\n\n.service-icon .fa.fa-2x {\n  line-height: 1.5em; }\n\n.service-icon .fa.fa-2x.fa-plus {\n    line-height: 1.65em; }\n\n.service-icon .fa.fa-percent {\n  color: gold; }\n\n.service-icon .fa.fa-stack-trophy {\n  font-size: 1.5em;\n  color: gold; }\n\n.service-icon .fa.fa-stack-users {\n  font-size: .5em;\n  line-height: 1.75em; }\n\n.callout .btn-primary {\n  background-color: #000 !important;\n  border: 1px solid #fff !important; }\n\n.footer .fa-2x {\n  font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, args) {
        if (!values || !args) {
            return values;
        }
        return values.filter(function (a) {
            return a[args.property].toLowerCase().indexOf(args.value.toLowerCase()) !== -1;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\jrojano\source\angular\bet-sky\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map