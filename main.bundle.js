webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/infrastructure/guards/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components


// Guards

var routes = [
    {
        path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_4__infrastructure_guards_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/infrastructure/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Guards

// Components



// Modules



// Angular materials


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // Custom modules
            __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_module__["a" /* DashboardModule */],
            // Routing
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__authentication_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__infrastructure_guards_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_auth_data__ = __webpack_require__("../../../../../src/app/fake-data/fake-auth-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_enums_roles_enum__ = __webpack_require__("../../../../../src/app/core/enums/roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Fake data

// Enums

var AuthService = (function () {
    function AuthService() {
    }
    // Works with fake users
    AuthService.prototype.authenticate = function (loginData) {
        // Fake auth
        var user = __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_auth_data__["a" /* default */].find(function (u) { return u.email === loginData.email && u.password === loginData.password; });
        if (user) {
            this.authData = {
                isAuthenticated: true,
                email: user.email,
                role: user.role
            };
            return true;
        }
        return false;
    };
    // Works with fake users
    AuthService.prototype.register = function (registerData) {
        var user = {
            id: Math.random().toString(),
            email: registerData.email,
            password: registerData.password,
            role: __WEBPACK_IMPORTED_MODULE_2__core_enums_roles_enum__["a" /* Roles */].driver,
            name: '(Не указано)'
        };
        __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_auth_data__["a" /* default */].push(user);
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/authentication/registration/registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] }
];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AuthenticationRoutingModule);

//# sourceMappingURL=authentication-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var RegexPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
/* harmony default export */ __webpack_exports__["a"] = (RegexPasswordPattern);
//# sourceMappingURL=authentication.helper.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__ = __webpack_require__("../../../../../src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__("../../../../../src/app/authentication/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules

// Components


// Angular material

var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__["a" /* AuthenticationRoutingModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdSnackBarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */]
        ],
        providers: []
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-image {\n  height: 100vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(" + __webpack_require__("../../../../../src/assets/images/auth-background-img.jpg") + ");\n  background-size: cover; }\n\n.login-wrapper {\n  background-color: white;\n  height: 100vh; }\n  .login-wrapper .fake-logo {\n    text-align: center;\n    padding-top: 5em; }\n    .login-wrapper .fake-logo h1 {\n      margin-bottom: 0.5em; }\n  .login-wrapper form {\n    padding: 8em 1em 0em; }\n    .login-wrapper form .form-table {\n      width: 100%; }\n      .login-wrapper form .form-table md-input-container {\n        width: 100%; }\n        .login-wrapper form .form-table md-input-container input {\n          width: 100%;\n          font-size: 18px;\n          color: gray; }\n  .login-wrapper .auth-btn {\n    width: 100%;\n    padding: .7em;\n    margin: 2rem 0;\n    font-size: 20px;\n    background-color: #1e88e5;\n    border-radius: 0;\n    border: none;\n    color: white; }\n  .login-wrapper .btn-disabled {\n    background-color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-9 background-image\">\r\n    </div>\r\n    <!-- Login -->\r\n    <div class=\"col-3 login-wrapper\">\r\n      <div class=\"fake-logo\">\r\n        <h1>Inventory</h1>\r\n        <h5>Добро пожаловать! Авторизуйтесь и продолжайте работу с комфортом!</h5>\r\n      </div>\r\n\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\r\n        <!-- Inputs -->\r\n        <table class=\"form-table\">\r\n          <tr><td>\r\n              <md-input-container>\r\n                <input mdInput placeholder=\"E-mail\" type=\"email\" formControlName=\"email\">\r\n                  <md-error *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"loginForm.controls['email'].errors && !loginForm.controls['email'].errors['required']\">\r\n                    Введите корректный адрес\r\n                  </md-error>\r\n                <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n              </md-input-container>\r\n          </td></tr>\r\n          <tr><td>\r\n              <md-input-container>\r\n                <input mdInput placeholder=\"Пароль\" type=\"password\" formControlName=\"password\">\r\n                <md-error *ngIf=\"loginForm.controls['password'].errors && loginForm.controls['password'].errors['required']\">\r\n                  Заполните поле\r\n                </md-error>\r\n                <md-error *ngIf=\"loginForm.controls['password'].errors && !loginForm.controls['password'].errors['required']\">\r\n                  Пароль должен состоять минимум из 8 символов и содержать как минимум 1 цифру, 1 букву верхнего и нижнего регистра\r\n                </md-error>\r\n                <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n              </md-input-container>\r\n          </td></tr>\r\n        </table>\r\n\r\n        <!-- // Inputs -->\r\n        <button md-button class=\"auth-btn\" type=\"submit\"\r\n                [disabled]=\"!loginForm.valid\" [ngClass]=\"{'btn-disabled': !loginForm.valid}\">\r\n          Войти\r\n        </button>\r\n        <h5>Нету аккаунта?   <a routerLink=\"/register\">Зарегистрируйтесь</a></h5>\r\n      </form>\r\n    </div>\r\n    <!-- // Login -->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_helper__ = __webpack_require__("../../../../../src/app/authentication/authentication.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Angular material

// Services

// Helpers

var LoginComponent = (function () {
    function LoginComponent(authService, router, errorSnackBar) {
        this.authService = authService;
        this.router = router;
        this.errorSnackBar = errorSnackBar;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.submit = function () {
        if (this.loginForm.valid) {
            var loginData = {
                email: this.loginForm.controls['email'].value,
                password: this.loginForm.controls['password'].value
            };
            if (this.authService.authenticate(loginData)) {
                this.router.navigate(['/dashboard']);
            }
            else {
                this.openSnackBar('Имя пользователя или пароль указан не правильно!', 'Закрыть');
            }
        }
    };
    LoginComponent.prototype.initForm = function () {
        var email = 'driver@gmail.com';
        var password = 'Driver123';
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](password, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__authentication_helper__["a" /* default */])
            ])
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.errorSnackBar.open(message, action, {
            duration: 5000,
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/authentication.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSnackBar */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-9 background-image\">\r\n      </div>\r\n      <!-- Registration -->\r\n      <div class=\"col-3 login-wrapper\">\r\n        <div class=\"fake-logo\">\r\n          <h1>Inventory</h1>\r\n          <h5>Регистрируйте, получайте свой аккаунт и начинайте работать!</h5>\r\n        </div>\r\n\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit()\">\r\n          <!-- Inputs -->\r\n          <table class=\"form-table\">\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"E-mail\" type=\"email\" formControlName=\"email\">\r\n                  <md-error *ngIf=\"registerForm.controls['email'].errors && registerForm.controls['email'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['email'].errors && !registerForm.controls['email'].errors['required']\">\r\n                    Введите корректный адрес\r\n                  </md-error>\r\n                  <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n                </md-input-container>\r\n            </td></tr>\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"Пароль\" type=\"password\" formControlName=\"password\">\r\n                  <md-error *ngIf=\"registerForm.controls['password'].errors && registerForm.controls['password'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['password'].errors && !registerForm.controls['password'].errors['required']\">\r\n                    Пароль должен состоять минимум из 8 символов и содержать как минимум 1 цифру, 1 букву верхнего и нижнего регистра\r\n                  </md-error>\r\n                  <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n                </md-input-container>\r\n            </td></tr>\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"Повторите пароль\" type=\"password\" formControlName=\"confirmPassword\">\r\n                  <md-error *ngIf=\"registerForm.controls['confirmPassword'].errors &&\r\n                              registerForm.controls['confirmPassword'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['confirmPassword'].errors &&\r\n                              registerForm.controls['confirmPassword'].errors['passwordsNotEquals']\">\r\n                    Пароли не совпадают\r\n                  </md-error>\r\n                </md-input-container>\r\n            </td></tr>\r\n          </table>\r\n\r\n          <!-- // Inputs -->\r\n          <button md-button class=\"auth-btn\" type=\"button\" (click)=\"submit()\" [disabled]=\"!registerForm.valid\" [ngClass]=\"{'btn-disabled': !registerForm.valid}\">\r\n            Зарегистрироваться\r\n          </button>\r\n          <h5>Уже есть аккаунт?   <a routerLink=\"/login\">Войдите</a></h5>\r\n        </form>\r\n      </div>\r\n      <!-- // Registration -->\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_helper__ = __webpack_require__("../../../../../src/app/authentication/authentication.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Angular Material

// Helpers

// Services

var RegistrationComponent = (function () {
    function RegistrationComponent(authService, router, errorSnackBar) {
        this.authService = authService;
        this.router = router;
        this.errorSnackBar = errorSnackBar;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RegistrationComponent.prototype.submit = function () {
        if (this.registerForm.valid) {
            var registerData = {
                email: this.registerForm.controls['email'].value,
                password: this.registerForm.controls['password'].value
            };
            if (this.authService.register(registerData)) {
                this.router.navigate(['/login']);
            }
            else {
                this.openSnackBar('Введенный вами адрес электронной почты уже занят!', 'Закрыть');
            }
        }
    };
    RegistrationComponent.prototype.initForm = function () {
        var email = '';
        var password = '';
        var confirmPassword = '';
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](password, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__authentication_helper__["a" /* default */])
            ]),
            'confirmPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](confirmPassword, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, this.passwordEquality.bind(this)
            ])
        });
    };
    // validator
    RegistrationComponent.prototype.passwordEquality = function (control) {
        if (!this.registerForm) {
            return null;
        }
        if (this.registerForm.controls['password'].value !== control.value) {
            return { 'passwordsNotEquals': true };
        }
        return null;
    };
    RegistrationComponent.prototype.openSnackBar = function (message, action) {
        this.errorSnackBar.open(message, action, {
            duration: 5000,
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/authentication/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/authentication.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSnackBar */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__("../../../../../src/app/core/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { StorageService } from './storage.service';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_webstorage__["a" /* Ng2Webstorage */].forRoot({ prefix: 'inventoryapp', separator: '.' }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */],
        ],
        declarations: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/roles.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles[Roles["driver"] = 0] = "driver";
    Roles[Roles["storekeeper"] = 1] = "storekeeper";
    Roles[Roles["admin"] = 2] = "admin";
})(Roles || (Roles = {}));
//# sourceMappingURL=roles.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/IStorage.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IStorage.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(toastrService) {
        this.toastrService = toastrService;
        this.useDefaultTitles = true;
    }
    NotificationService.prototype.info = function (message, title) {
        if (this.useDefaultTitles && title === undefined) {
            title = 'Information';
        }
        this.toastrService.info(message, title);
    };
    NotificationService.prototype.success = function (message, title) {
        if (this.useDefaultTitles && title === undefined) {
            title = 'Success';
        }
        this.toastrService.success(message, title);
    };
    NotificationService.prototype.error = function (message, title) {
        if (this.useDefaultTitles && title === undefined) {
            title = 'Error';
        }
        this.toastrService.error(message, title);
    };
    NotificationService.prototype.warning = function (message, title) {
        if (this.useDefaultTitles && title === undefined) {
            title = 'Warning';
        }
        this.toastrService.warning(message, title);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"autocompleate-wrapper\">\r\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"submit()\">\r\n      <div formArrayName=\"searchParams\">\r\n        <div class=\"row\"\r\n              *ngFor=\"let iCtrl of searchForm.controls['searchParams'].controls; let i = index\"\r\n              [formGroupName]=\"i\">\r\n          <div class=\"col-10\">\r\n            <md-input-container>\r\n              <input mdInput placeholder=\"Название товара\" [mdAutocomplete]=\"auto\" type=\"text\"\r\n                     formControlName=\"name\">\r\n            </md-input-container>\r\n\r\n            <md-autocomplete #auto=\"mdAutocomplete\">\r\n              <md-option *ngFor=\"let value of filteredValue | async\" [value]=\"value\">\r\n                {{ value }}\r\n              </md-option>\r\n            </md-autocomplete>\r\n          </div>\r\n\r\n          <div class=\"col-2\">\r\n            <md-input-container>\r\n              <input mdInput type=\"number\" placeholder=\"Кол-во\" formControlName=\"amount\">\r\n            </md-input-container>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button md-button class=\"auth-btn\" type=\"submit\" [disabled]=\"!searchForm.valid\" [ngClass]=\"{ 'btn-disabled': !searchForm.valid }\">\r\n            Поиск\r\n          </button>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <button md-button class=\"auth-btn\" type=\"button\" (click)=\"addParam()\"\r\n                  [disabled]=\"!searchForm.valid\" [ngClass]=\"{ 'btn-disabled': !searchForm.valid }\">Добавить фильтр</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/common/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autocompleate-wrapper {\n  background-color: white;\n  margin: 1rem;\n  margin-bottom: 0;\n  padding: 1rem  5% 0 5%;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem; }\n\n.mat-input-container {\n  width: 90%;\n  font-size: 18px; }\n\n.auth-btn {\n  width: 100%;\n  padding: .7em;\n  margin: 2rem 0;\n  font-size: 20px;\n  background-color: #1e88e5;\n  border-radius: 0;\n  border: none;\n  color: white; }\n\n.btn-disabled {\n  background-color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/common/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fake_data_fake_products_names__ = __webpack_require__("../../../../../src/app/fake-data/fake-products-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Fake storage

var ProductsComponent = (function () {
    function ProductsComponent() {
        this.autocompleteValues = [];
    }
    // fake storage
    ProductsComponent.prototype.ngOnInit = function () {
        this.autocompleteValues = __WEBPACK_IMPORTED_MODULE_2__fake_data_fake_products_names__["a" /* default */].slice();
        this.initForm();
    };
    ProductsComponent.prototype.initForm = function () {
        // initializes form.
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'searchParams': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                    'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
                    'amount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
                }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
            ], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
        this.subscribeToValueChanges();
    };
    // subscribes last added form control 'name' to the valueChanges event.
    ProductsComponent.prototype.subscribeToValueChanges = function () {
        var _this = this;
        var ctrlNumber = this.searchForm.get('searchParams').controls.length - 1;
        this.filteredValue = (this.searchForm.get('searchParams').controls[ctrlNumber].controls['name']).valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterValue(name); });
    };
    ProductsComponent.prototype.filterValue = function (val) {
        return val ? this.autocompleteValues.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.autocompleteValues;
    };
    ProductsComponent.prototype.addParam = function () {
        // creates new FormArray element.
        this.searchForm.controls['searchParams'].controls.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'amount': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required));
        this.subscribeToValueChanges();
    };
    ProductsComponent.prototype.submit = function () {
        console.log(this.searchForm);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/dashboard/common/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/common/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/common/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/common/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/common/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/common/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_auth_data__ = __webpack_require__("../../../../../src/app/fake-data/fake-auth-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Fake data

// Services

var ProfileService = (function () {
    function ProfileService(authService) {
        this.authService = authService;
    }
    ProfileService.prototype.getUserName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_auth_data__["a" /* default */].find(function (u) { return u.email === _this.authService.authData.email; }).name;
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 row\">\r\n  <!-- Storage info -->\r\n  <div class=\"col-xl-3 col-lg-4 col-md-6\">\r\n    <div class=\"card text-center\">\r\n      <img class=\"card-img-top\" [src]=\"storage.imagePath\" alt=\"Storage image\">\r\n      <div class=\"card-body\">\r\n        <h5>{{ storage.adress }}</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- // Storage info -->\r\n  <!-- Description -->\r\n  <div class=\"col-xl-9 col-lg-8 col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Товары на складе</h5>\r\n        <hr>\r\n        <!-- Table -->\r\n        <div class=\"example-container mat-elevation-z8\">\r\n          <div class=\"example-header\">\r\n            <md-input-container floatPlaceholder=\"never\">\r\n              <input mdInput #filter placeholder=\"Название продукта\" value=\"\">\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <md-table #table [dataSource]=\"dataSource\">\r\n            <!-- Name column -->\r\n            <ng-container cdkColumnDef=\"name\">\r\n              <md-header-cell *cdkHeaderCellDef> Название </md-header-cell>\r\n              <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\r\n            </ng-container>\r\n            <!-- // Name column -->\r\n\r\n            <!-- Count column -->\r\n            <ng-container cdkColumnDef=\"count\">\r\n              <md-header-cell *cdkHeaderCellDef> Количество </md-header-cell>\r\n              <md-cell *cdkCellDef=\"let row\"> {{row.count}} </md-cell>\r\n            </ng-container>\r\n            <!-- // Count column -->\r\n            <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n            <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n          </md-table>\r\n        </div>\r\n        <!-- // Table -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- // Description -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 1rem 0; }\n\na {\n  color: black; }\n\na:hover {\n  text-decoration: none;\n  color: #1e88e5; }\n\n/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 700px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageDetailsComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage_service__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// Services

var StorageDetailsComponent = (function () {
    function StorageDetailsComponent(storageService, route) {
        this.storageService = storageService;
        this.route = route;
        this.displayedColumns = ['name', 'count'];
    }
    StorageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.storage = _this.storageService.getStorage(params['id']);
        });
        this.dataSource = new ExampleDataSource(this.storage.products);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    return StorageDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], StorageDetailsComponent.prototype, "filter", void 0);
StorageDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-storage-details',
        template: __webpack_require__("../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], StorageDetailsComponent);

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        // const displayDataChanges = [
        //   this._data.dataChange,
        //   this._filterChange,
        // ];
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge(this._filterChange).map(function () {
            return _this._data.slice().filter(function (item) {
                var searchStr = (item.name).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk__["o" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=storage-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\" >\r\n  <a [routerLink]=\"[storage.id, 'details']\">\r\n    <div class=\"card-body\">\r\n      <h5>{{ storage.adress }}</h5>\r\n    </div>\r\n    <img class=\"card-img-bottom\" [src]=\"storage.imagePath\" alt=\"Storage image\">\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 1rem 0; }\n\na {\n  color: black; }\n\na:hover {\n  text-decoration: none;\n  color: #1e88e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_IStorage_model__ = __webpack_require__("../../../../../src/app/core/models/IStorage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_IStorage_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__core_models_IStorage_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Interfaces

var StorageItemComponent = (function () {
    function StorageItemComponent() {
    }
    StorageItemComponent.prototype.ngOnInit = function () {
    };
    return StorageItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_models_IStorage_model__["IStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_models_IStorage_model__["IStorage"]) === "function" && _a || Object)
], StorageItemComponent.prototype, "storage", void 0);
StorageItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-storage-item',
        template: __webpack_require__("../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StorageItemComponent);

var _a;
//# sourceMappingURL=storage-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_storages__ = __webpack_require__("../../../../../src/app/fake-data/fake-storages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Fake storage

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.getStorages = function () {
        return __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_storages__["a" /* default */];
    };
    StorageService.prototype.getStorage = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_storages__["a" /* default */].find(function (s) { return s.id === id; });
    };
    StorageService.prototype.getStoragesAdress = function () {
        var adresses = new Array();
        __WEBPACK_IMPORTED_MODULE_1__fake_data_fake_storages__["a" /* default */].forEach(function (s) {
            if (adresses.indexOf(s.adress) === -1) {
                adresses.push(s.adress);
            }
        });
        adresses.sort();
        return adresses;
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <app-autocomplete [value]=\"storagesAdresses\" [placeholder]=\"'Aдрес склада'\"></app-autocomplete>\r\n\r\n    <div class=\"col-xl-3 col-lg-4 col-md-6\" style=\"float:left;\"\r\n         *ngFor=\"let s of storages | filter:autoService.selectedValue:'adress'\">\r\n        <app-storage-item [storage]=\"s\"></app-storage-item>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/common/storages/storages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_autocomplete_autocomplete_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var StoragesComponent = (function () {
    function StoragesComponent(storageSevice, autoService) {
        this.storageSevice = storageSevice;
        this.autoService = autoService;
    }
    StoragesComponent.prototype.ngOnInit = function () {
        this.storages = this.storageSevice.getStorages();
        this.storagesAdresses = this.storageSevice.getStoragesAdress();
    };
    return StoragesComponent;
}());
StoragesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-storages',
        template: __webpack_require__("../../../../../src/app/dashboard/common/storages/storages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/common/storages/storages.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_autocomplete_autocomplete_service__["a" /* AutocompleteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_autocomplete_autocomplete_service__["a" /* AutocompleteService */]) === "function" && _b || Object])
], StoragesComponent);

var _a, _b;
//# sourceMappingURL=storages.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/infrastructure/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/common/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_storages_storages_component__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_products_products_component__ = __webpack_require__("../../../../../src/app/dashboard/common/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_storages_storage_details_storage_details_component__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Guards

// Components





var routes = [
    {
        path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_2__infrastructure_guards_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], children: [
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__common_profile_profile_component__["a" /* ProfileComponent */] },
                    { path: 'storages', component: __WEBPACK_IMPORTED_MODULE_5__common_storages_storages_component__["a" /* StoragesComponent */] },
                    { path: 'storages/:id/details', component: __WEBPACK_IMPORTED_MODULE_7__common_storages_storage_details_storage_details_component__["a" /* StorageDetailsComponent */] },
                    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_6__common_products_products_component__["a" /* ProductsComponent */] }
                ] },
        ]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<app-header></app-header>\r\n<!-- // Navbar -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- Menu -->\r\n    <div class=\"col-xl-2 col-3 menu\">\r\n      <app-menu></app-menu>\r\n    </div>\r\n    <!-- // Menu -->\r\n    <!-- Dashboard -->\r\n    <div class=\"col-xl-10 col-9\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- // Dashboard -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding-top: 4.5rem; }\n\n.menu {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure_pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/infrastructure/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_shared_shared_module__ = __webpack_require__("../../../../../src/app/dashboard/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_profile_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/common/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_storages_storage_service__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_storages_storages_component__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_storages_storage_item_storage_item_component__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage-item/storage-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/common/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_products_products_component__ = __webpack_require__("../../../../../src/app/dashboard/common/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_storages_storage_details_storage_details_component__ = __webpack_require__("../../../../../src/app/dashboard/common/storages/storage-details/storage-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pipes

// Custom modules


// Services


// Angular materials

// Components







var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk__["l" /* CdkTableModule */],
            // Routing
            __WEBPACK_IMPORTED_MODULE_6__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            // Custom modules
            __WEBPACK_IMPORTED_MODULE_5__dashboard_shared_shared_module__["a" /* SharedModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdTableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__common_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__common_storages_storages_component__["a" /* StoragesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__common_storages_storage_item_storage_item_component__["a" /* StorageItemComponent */],
            __WEBPACK_IMPORTED_MODULE_4__infrastructure_pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__common_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__common_storages_storage_details_storage_details_component__["a" /* StorageDetailsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__common_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_8__common_storages_storage_service__["a" /* StorageService */],
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"col-12 menu\">\r\n        <!-- Profile card -->\r\n        <a routerLink=\"profile\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top rounded-circle\" src=\".\\assets\\images\\users\\profile-icon.png\" alt=\"Card image cap\">\r\n                <div class=\"card-body text-center\">\r\n                    <h4 class=\"card-title\">{{ username }}</h4>\r\n                </div>\r\n            </div>\r\n        </a>\r\n        <!-- // Profile card -->\r\n\r\n        <!-- Menu list -->\r\n        <md-list>\r\n            <!-- Driver or higher -->\r\n            <!-- <h3 md-subheader>Склады</h3>\r\n          <md-list-item>\r\n            <h4 md-line>\r\n              <button md-button routerLink=\"storages\">Просмотр</button>\r\n            </h4>\r\n          </md-list-item> -->\r\n\r\n            <h3 md-subheader>Просмотр товара</h3>\r\n            <md-list-item>\r\n                <h4 md-line>\r\n                    <button md-button routerLink=\"products\">По наименованию</button>\r\n                </h4>\r\n            </md-list-item>\r\n            <md-list-item>\r\n                <h4 md-line>\r\n                    <button md-button routerLink=\"storages\">По складам</button>\r\n                </h4>\r\n            </md-list-item>\r\n\r\n            <md-divider></md-divider>\r\n            <!-- // Driver or higher -->\r\n\r\n            <!-- Storekeeper only -->\r\n            <div *ngIf=\"role === 1\">\r\n                <!-- Store management -->\r\n                <h3 md-subheader>Управление складом</h3>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Оформление поставки</button>\r\n                    </h4>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Оформление отправки</button>\r\n                    </h4>\r\n                </md-list-item>\r\n\r\n                <md-divider></md-divider>\r\n                <!-- // Store management -->\r\n            </div>\r\n            <!-- // Storekeeper only -->\r\n\r\n            <!-- Admin only -->\r\n            <div *ngIf=\"role === 2\">\r\n                <!-- Reference data management -->\r\n                <h3 md-subheader>Управление данными</h3>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Добавление данных</button>\r\n                    </h4>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Удаление данных</button>\r\n                    </h4>\r\n                </md-list-item>\r\n\r\n                <md-divider></md-divider>\r\n                <!-- // Reference data management -->\r\n\r\n                <!-- Employee managment -->\r\n                <h3 md-subheader>Управление персоналом</h3>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Редактирование ролей</button>\r\n                    </h4>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Удаление пользователей</button>\r\n                    </h4>\r\n                </md-list-item>\r\n\r\n                <md-divider></md-divider>\r\n                <!-- // Employee managment -->\r\n\r\n                <!-- Store management -->\r\n                <h3 md-subheader>Управление складами</h3>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Оформление поставки</button>\r\n                    </h4>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">Оформление отправки</button>\r\n                    </h4>\r\n                </md-list-item>\r\n\r\n                <md-divider></md-divider>\r\n                <!-- // Store management -->\r\n\r\n                <!-- View activity -->\r\n                <h3 md-subheader>Просмотр активности</h3>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">По складам</button>\r\n                    </h4>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <h4 md-line>\r\n                        <button md-button routerLink=\".\">По сотрудникам</button>\r\n                    </h4>\r\n                </md-list-item>\r\n\r\n                <md-divider></md-divider>\r\n                <!-- // View activity -->\r\n            </div>\r\n            <!-- // Admin only -->\r\n\r\n            <h3 md-subheader>Статистика</h3>\r\n            <!-- Driver functionality only -->\r\n            <md-list-item *ngIf=\"role === 0\">\r\n                <h4 md-line>\r\n                    <button md-button routerLink=\".\">Просмотр истории</button>\r\n                </h4>\r\n            </md-list-item>\r\n            <!-- // Driver functionality only -->\r\n\r\n            <!-- Storekeeper functionality only -->\r\n            <md-list-item *ngIf=\"role === 1\">\r\n                <h4 md-line>\r\n                    <button md-button routerLink=\".\">Просмотр стататистики</button>\r\n                </h4>\r\n            </md-list-item>\r\n            <!-- // Storekeeper functionality only -->\r\n\r\n            <!-- Admin functionality only -->\r\n            <md-list-item *ngIf=\"role === 2\">\r\n                <h4 md-line>\r\n                    <button md-button routerLink=\".\">Просмотр стататистики</button>\r\n                </h4>\r\n            </md-list-item>\r\n            <!-- // Admin functionality only -->\r\n        </md-list>\r\n        <!-- // Menu list -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  padding: 0;\n  background-color: white;\n  box-shadow: 1px 0px 20px #CCCCCC; }\n  .menu .card {\n    border: none;\n    background-color: transparent; }\n    .menu .card .card-img-top {\n      padding-top: 1.25rem;\n      width: 50%;\n      height: 50%;\n      margin: auto; }\n\na {\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_profile_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/common/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


var MenuComponent = (function () {
    function MenuComponent(profileService, authService) {
        this.profileService = profileService;
        this.authService = authService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.username = this.profileService.getUserName();
        this.role = this.authService.authData.role;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/dashboard/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_profile_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"autocompleate-wrapper\">\r\n  <md-input-container>\r\n    <input mdInput [placeholder]=\"placeholder\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n  </md-input-container>\r\n\r\n  <md-autocomplete #auto=\"mdAutocomplete\">\r\n    <md-option *ngFor=\"let value of filteredValue | async\" [value]=\"value\">\r\n      {{ value }}\r\n    </md-option>\r\n  </md-autocomplete>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autocompleate-wrapper {\n  background-color: white;\n  margin: 1rem;\n  margin-bottom: 0;\n  padding: 1rem;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem; }\n\n.mat-input-container {\n  width: 90%;\n  margin-left: 5%;\n  font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// rxjs



var AutocompleteComponent = (function () {
    function AutocompleteComponent(autoService) {
        var _this = this;
        this.autoService = autoService;
        this.value = [];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredValue = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterValue(name); });
        this.subscription = this.stateCtrl.valueChanges.subscribe(function () {
            _this.exportSelectedValueToService();
        });
    }
    AutocompleteComponent.prototype.ngOnInit = function () { };
    AutocompleteComponent.prototype.filterValue = function (val) {
        return val ? this.value.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.value;
    };
    AutocompleteComponent.prototype.exportSelectedValueToService = function () {
        this.autoService.selectedValue = this.stateCtrl.value;
    };
    AutocompleteComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.autoService.selectedValue = '';
    };
    return AutocompleteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], AutocompleteComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AutocompleteComponent.prototype, "value", void 0);
AutocompleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-autocomplete',
        template: __webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__autocomplete_service__["a" /* AutocompleteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__autocomplete_service__["a" /* AutocompleteService */]) === "function" && _a || Object])
], AutocompleteComponent);

var _a;
//# sourceMappingURL=autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/autocomplete/autocomplete.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutocompleteService = (function () {
    function AutocompleteService() {
        this.selectedValue = '';
    }
    return AutocompleteService;
}());
AutocompleteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AutocompleteService);

//# sourceMappingURL=autocomplete.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"footer\">\r\n    <p>Some text for footer</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 30px;\n  background-color: lightgray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/dashboard/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top\">\r\n    <div class=\"col-xl-2 col-3 logo-wrapper\">\r\n        <a class=\"navbar-brand\">Here must be logo</a>\r\n    </div>\r\n    <div class=\"col-xl-10 col-9\">\r\n      <form class=\"form-inline\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #1e88e5;\n  height: 4.5rem;\n  padding: 0; }\n  nav .logo-wrapper {\n    background: rgba(0, 0, 0, 0.2);\n    height: 100%;\n    display: table; }\n    nav .logo-wrapper a {\n      display: table-cell;\n      vertical-align: middle;\n      text-align: center;\n      color: white; }\n  nav .form-inline {\n    float: right; }\n    nav .form-inline .form-control {\n      border: none;\n      border-radius: 0; }\n    nav .form-inline .btn-outline-light {\n      border-radius: 0; }\n    nav .form-inline .btn-outline-light:hover {\n      color: #1e88e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/dashboard/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/shared/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/dashboard/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/dashboard/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autocomplete_autocomplete_service__ = __webpack_require__("../../../../../src/app/dashboard/shared/autocomplete/autocomplete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Modules


// Components



// Angular materials


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdInputModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__autocomplete_autocomplete_service__["a" /* AutocompleteService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/fake-data/fake-auth-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__ = __webpack_require__("../../../../../src/app/core/enums/roles.enum.ts");

var fakeUsers = [
    {
        id: '2357fe82-b85d-49d1-af83-82d9f17ffb4c',
        email: 'driver@gmail.com',
        password: 'Driver123',
        role: __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__["a" /* Roles */].driver,
        name: 'Кошелев Иннокентий'
    },
    {
        id: 'd70f5120-8366-40b5-86b6-e587b1bb784a',
        email: 'storekeeper@gmail.com',
        password: 'Storekeeper123',
        role: __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__["a" /* Roles */].storekeeper,
        name: 'Койчев Сидор'
    },
    {
        id: '96b93c5d-7841-4a59-b09b-2a4e48e4778a',
        email: 'admin@gmail.com',
        password: 'Admin123',
        role: __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__["a" /* Roles */].admin,
        name: 'Иванов Родион'
    }
];
/* harmony default export */ __webpack_exports__["a"] = (fakeUsers);
//# sourceMappingURL=fake-auth-data.js.map

/***/ }),

/***/ "../../../../../src/app/fake-data/fake-products-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var fakeProductsNames = [
    'молоко 1.5%',
    'молоко 2.5%',
    'ноутбук Lenovo',
    'Xiaomi Redmi 4X',
    'Apple iPhone 5s',
    'кефир 4%',
    'чай Lipton зеленый',
    'апельсины',
    'помидоры',
    'цветная капуста',
];
/* harmony default export */ __webpack_exports__["a"] = (fakeProductsNames);
//# sourceMappingURL=fake-products-names.js.map

/***/ }),

/***/ "../../../../../src/app/fake-data/fake-storages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var fakeStorages = [
    {
        id: '6358b540-8f24-4300-915d-5afcb6abd11d',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Кез, ул. Беговая 3-я',
        products: [
            {
                id: 'bf5f0520-d564-46cc-a3f3-daafe12507cc',
                name: 'молоко 1.5%',
                count: 25
            },
            {
                id: 'c4b717c2-bff7-420a-9566-d89bf3bf1027',
                name: 'молоко 2.5%',
                count: 10
            },
            {
                id: '70e68418-a4c9-4c9b-94d8-c0e0a95e1a61',
                name: 'кефир 4%',
                count: 15
            },
            {
                id: 'b3d723eb-e176-4b44-bc36-bfecb373e3c9',
                name: 'чай Lipton зеленый',
                count: 20
            },
        ]
    },
    {
        id: '4ea3e807-e5c2-4690-b675-a8fbed97a7aa',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Верховье, ул. Баженова',
        products: [
            {
                id: 'd73d5712-fc3c-45bb-8e84-6d56968f240c',
                name: 'молоко 1.5%',
                count: 5
            },
            {
                id: '899b4453-eb31-4022-9388-68b12d8d2e8c',
                name: 'Xiaomi Redmi 4X',
                count: 10
            },
            {
                id: '9f0fd196-850b-44f9-a2d0-30ac803672d7',
                name: 'помидоры',
                count: 15
            },
            {
                id: '219a5ca2-0b2f-4b17-9ee3-b74a371082b4',
                name: 'цветная капуста',
                count: 20
            },
        ]
    },
    {
        id: 'd3a3d249-80b3-4b44-807a-fa93d8740d66',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Наровчат, ул. Байдукова',
        products: [
            {
                id: '7fb06437-0ee3-4e41-94ce-e5c225e7e7cb',
                name: 'Apple iPhone 5s',
                count: 1
            },
            {
                id: '0430fece-ee36-4324-8b68-8c6f90b85fe1',
                name: 'Xiaomi Redmi 4X',
                count: 5
            },
            {
                id: '591d8d0d-b66b-4ab5-b00c-b3a2ed369821',
                name: 'ноутбук Lenovo',
                count: 5
            }
        ]
    },
    {
        id: '7bbc3988-8a0c-4a99-a21e-7aa8c8ad21b8',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Старая Полтавка, ул. Беговая 3-я',
        products: [
            {
                id: '250a2e30-e0e9-4220-af21-eb6cea690d30',
                name: 'цветная капуста',
                count: 50
            },
            {
                id: 'dba51291-494a-4a42-9641-a50bb96fc32c',
                name: 'помидоры',
                count: 55
            },
            {
                id: '0dabc424-fb90-41df-9fe2-ef71d41b4a59',
                name: 'апельсины',
                count: 40
            }
        ]
    },
    {
        id: '6358b540-8f24-4300-915d-5afcb6abd11d',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Кез, ул. Беговая 3-я',
        products: [
            {
                id: '872ed00c-8828-428d-b154-aa354016bb6d',
                name: 'молоко 1.5%',
                count: 25
            },
            {
                id: '3689657c-f934-4f6a-af96-0b00db41a7a3',
                name: 'молоко 2.5%',
                count: 20
            },
            {
                id: 'a6050348-c3ff-4594-8010-7e67d3b514a9',
                name: 'кефир 4%',
                count: 40
            }
        ]
    },
    {
        id: '4ea3e807-e5c2-4690-b675-a8fbed97a7aa',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Верховье, ул. Баженова',
        products: [
            {
                id: '236b5714-30f0-4180-8b07-a01b22198f45',
                name: 'чай Lipton зеленый',
                count: 25
            },
            {
                id: '5ddccea9-1fdb-4a4e-b1c8-bbbe909362af',
                name: 'Apple iPhone 5s',
                count: 20
            },
            {
                id: 'a0c4da77-1d3b-44ea-94f1-8a17ce3c3b31',
                name: 'ноутбук Lenovo',
                count: 40
            },
            {
                id: '3bf00a0a-f1d7-4093-9656-50cf31fc733f',
                name: 'Xiaomi Redmi 4X',
                count: 1
            },
            {
                id: '18aae8b8-2844-4416-92d4-6147c33fee30',
                name: 'апельсины',
                count: 10
            }
        ]
    },
    {
        id: 'd3a3d249-80b3-4b44-807a-fa93d8740d66',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Наровчат, ул. Байдукова',
        products: [
            {
                id: 'e5a7eeae-031d-442a-89a2-e24f98a2adc4',
                name: 'молоко 1.5%',
                count: 10
            },
            {
                id: 'c66982c1-7737-49a2-88f1-6e628c6ba699',
                name: 'молоко 2.5%',
                count: 8
            },
            {
                id: 'f5d7c534-d8df-4a13-b437-3292e370fa78',
                name: 'кефир 4%',
                count: 5
            },
            {
                id: '58d6b5a3-f8d0-4d98-99ed-d76ddcc48c1e',
                name: 'чай Lipton зеленый',
                count: 1
            },
        ]
    },
    {
        id: '7bbc3988-8a0c-4a99-a21e-7aa8c8ad21b8',
        imagePath: './assets/images/temp/fake-storage-img.jpg',
        adress: 'г. Старая Полтавка, ул. Беговая 3-я',
        products: [
            {
                id: 'fac17f6c-6c05-43d0-9574-6ad7fb137aec',
                name: 'молоко 1.5%',
                count: 1
            },
            {
                id: '4e1d5595-8d9c-4439-8f04-4b42c7332150',
                name: 'молоко 2.5%',
                count: 2
            },
            {
                id: '8f3d84b8-c708-4a09-989f-999c38d278db',
                name: 'кефир 4%',
                count: 3
            },
            {
                id: 'd7dca8be-1ccc-4aa3-8da5-4631b5f7091a',
                name: 'чай Lipton зеленый',
                count: 4
            },
        ]
    }
];
/* harmony default export */ __webpack_exports__["a"] = (fakeStorages);
//# sourceMappingURL=fake-storages.js.map

/***/ }),

/***/ "../../../../../src/app/infrastructure/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.authData && this.authService.authData.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/infrastructure/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/auth-background-img.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "auth-background-img.f54736ede1b6de197e68.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map