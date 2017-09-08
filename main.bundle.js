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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_categories_categories_component__ = __webpack_require__("../../../../../src/app/home/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_statistics_statistics_component__ = __webpack_require__("../../../../../src/app/home/statistics/statistics.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components





var routes = [
    {
        path: '', /*canActivate: [AuthGuard],*/ children: [
            { path: '', pathMatch: 'full', redirectTo: 'categories' },
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], children: [
                    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_5__home_categories_categories_component__["a" /* CategoriesComponent */] },
                    { path: 'categories/:id', component: __WEBPACK_IMPORTED_MODULE_5__home_categories_categories_component__["a" /* CategoriesComponent */] },
                    { path: 'statictics', component: __WEBPACK_IMPORTED_MODULE_6__home_statistics_statistics_component__["a" /* StatisticsComponent */] },
                ]
            },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_categories_categories_module__ = __webpack_require__("../../../../../src/app/home/categories/categories.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_data_request_service__ = __webpack_require__("../../../../../src/app/core/data-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_statistics_statistics_component__ = __webpack_require__("../../../../../src/app/home/statistics/statistics.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Guards

// Modules




// Angular materials


// Services



// Components





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            // Custom modules
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_9__home_categories_categories_module__["a" /* CategoriesModule */],
            // Routing
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MdAutocompleteModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_statistics_statistics_component__["a" /* StatisticsComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__authentication_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_guards_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__core_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_14__core_data_request_service__["a" /* DataRequestService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
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

// TODO: add logic to auth service!
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
            role: __WEBPACK_IMPORTED_MODULE_2__core_enums_roles_enum__["a" /* Roles */].driver
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__ = __webpack_require__("../../../../../src/app/authentication/registration/registration.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdSnackBarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */]
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
exports.push([module.i, ".background-image {\n  height: 100vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(" + __webpack_require__("../../../../../src/assets/images/auth-background-img.jpg") + ");\n  background-size: cover; }\n\n.login-wrapper {\n  background-color: white;\n  height: 100vh;\n  padding-bottom: 5rem; }\n  .login-wrapper .fake-logo {\n    text-align: center;\n    padding-top: 5em; }\n    .login-wrapper .fake-logo h1 {\n      margin-bottom: 0.5em; }\n  .login-wrapper form {\n    padding: 8em 1em 0em; }\n    .login-wrapper form .form-table {\n      width: 100%; }\n      .login-wrapper form .form-table md-input-container {\n        width: 100%; }\n        .login-wrapper form .form-table md-input-container input {\n          width: 100%;\n          font-size: 18px;\n          color: gray; }\n  .login-wrapper .auth-btn {\n    width: 100%;\n    padding: .7em;\n    margin: 2rem 0;\n    font-size: 20px;\n    background-color: #1e88e5;\n    border-radius: 0;\n    border: none;\n    color: white; }\n  .login-wrapper .btn-disabled {\n    background-color: gray; }\n\n@media (max-width: 444px) {\n  .background-image {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-9 col-lg-9 col-md-7 col-1 background-image\">\r\n    </div>\r\n    <!-- Login -->\r\n    <div class=\"col-xs-3 col-lg-3 col-md-5 col-11 login-wrapper\">\r\n      <div class=\"fake-logo\">\r\n        <h1>Inventory</h1>\r\n        <h5>Добро пожаловать! Авторизуйтесь и продолжайте работу с комфортом!</h5>\r\n      </div>\r\n\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\r\n        <!-- Inputs -->\r\n        <table class=\"form-table\">\r\n          <tr><td>\r\n              <md-input-container>\r\n                <input mdInput placeholder=\"E-mail\" type=\"email\" formControlName=\"email\">\r\n                  <md-error *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"loginForm.controls['email'].errors && !loginForm.controls['email'].errors['required']\">\r\n                    Введите корректный адрес\r\n                  </md-error>\r\n                <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n              </md-input-container>\r\n          </td></tr>\r\n          <tr><td>\r\n              <md-input-container>\r\n                <input mdInput placeholder=\"Пароль\" type=\"password\" formControlName=\"password\">\r\n                <md-error *ngIf=\"loginForm.controls['password'].errors && loginForm.controls['password'].errors['required']\">\r\n                  Заполните поле\r\n                </md-error>\r\n                <md-error *ngIf=\"loginForm.controls['password'].errors && !loginForm.controls['password'].errors['required']\">\r\n                  Пароль должен состоять минимум из 8 символов и содержать как минимум 1 цифру, 1 букву верхнего и нижнего регистра\r\n                </md-error>\r\n                <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n              </md-input-container>\r\n          </td></tr>\r\n        </table>\r\n\r\n        <!-- // Inputs -->\r\n        <button md-button class=\"auth-btn\" type=\"submit\"\r\n                [disabled]=\"!loginForm.valid\" [ngClass]=\"{'btn-disabled': !loginForm.valid}\">\r\n          Войти\r\n        </button>\r\n        <h5>Нету аккаунта?   <a routerLink=\"/register\">Зарегистрируйтесь</a></h5>\r\n      </form>\r\n    </div>\r\n    <!-- // Login -->\r\n  </div>\r\n</div>\r\n\r\n"

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
                this.router.navigate(['/']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSnackBar */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-9 col-lg-9 col-md-7 col-1 background-image\">\r\n      </div>\r\n      <!-- Registration -->\r\n      <div class=\"col-xs-3 col-lg-3 col-md-5 col-11 login-wrapper\">\r\n        <div class=\"fake-logo\">\r\n          <h1>Inventory</h1>\r\n          <h5>Регистрируйте, получайте свой аккаунт и начинайте работать!</h5>\r\n        </div>\r\n\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit()\">\r\n          <!-- Inputs -->\r\n          <table class=\"form-table\">\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"E-mail\" type=\"email\" formControlName=\"email\">\r\n                  <md-error *ngIf=\"registerForm.controls['email'].errors && registerForm.controls['email'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['email'].errors && !registerForm.controls['email'].errors['required']\">\r\n                    Введите корректный адрес\r\n                  </md-error>\r\n                  <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n                </md-input-container>\r\n            </td></tr>\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"Пароль\" type=\"password\" formControlName=\"password\">\r\n                  <md-error *ngIf=\"registerForm.controls['password'].errors && registerForm.controls['password'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['password'].errors && !registerForm.controls['password'].errors['required']\">\r\n                    Пароль должен состоять минимум из 8 символов и содержать как минимум 1 цифру, 1 букву верхнего и нижнего регистра\r\n                  </md-error>\r\n                  <!-- <md-hint align=\"end\"> {{ e.value.length }} / 50</md-hint> -->\r\n                </md-input-container>\r\n            </td></tr>\r\n            <tr><td>\r\n                <md-input-container>\r\n                  <input mdInput placeholder=\"Повторите пароль\" type=\"password\" formControlName=\"confirmPassword\">\r\n                  <md-error *ngIf=\"registerForm.controls['confirmPassword'].errors &&\r\n                              registerForm.controls['confirmPassword'].errors['required']\">\r\n                    Заполните поле\r\n                  </md-error>\r\n                  <md-error *ngIf=\"registerForm.controls['confirmPassword'].errors &&\r\n                              registerForm.controls['confirmPassword'].errors['passwordsNotEquals']\">\r\n                    Пароли не совпадают\r\n                  </md-error>\r\n                </md-input-container>\r\n            </td></tr>\r\n          </table>\r\n\r\n          <!-- // Inputs -->\r\n          <button md-button class=\"auth-btn\" type=\"button\" (click)=\"submit()\" [disabled]=\"!registerForm.valid\" [ngClass]=\"{'btn-disabled': !registerForm.valid}\">\r\n            Зарегистрироваться\r\n          </button>\r\n          <h5>Уже есть аккаунт?   <a routerLink=\"/login\">Войдите</a></h5>\r\n        </form>\r\n      </div>\r\n      <!-- // Registration -->\r\n    </div>\r\n  </div>\r\n\r\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdSnackBar */]) === "function" && _c || Object])
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
            __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]
        ],
        declarations: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/data-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataRequestService = (function () {
    function DataRequestService(http) {
        this.http = http;
        this.serverUrl = 'http://app-inventorysample.a3c1.starter-us-west-1.openshiftapps.com/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
    }
    DataRequestService.prototype.getCategoryList = function () {
        return this.http.get(this.serverUrl, this.options)
            .map(function (response) {
            var categories = [];
            response.json().forEach(function (item) {
                var products = [];
                item.products.forEach(function (p) {
                    products.push({
                        id: p._id,
                        name: p.name,
                        imgPath: p.imgPath,
                        count: p.count
                    });
                });
                categories.push({
                    id: item._id,
                    name: item.name,
                    imgPath: item.imgPath,
                    products: products
                });
            });
            //const categoryList: ICategory[] = response.json();
            return categories;
        });
    };
    return DataRequestService;
}());
DataRequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataRequestService);

var _a;
//# sourceMappingURL=data-request.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/enums/roles.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles[Roles["driver"] = 0] = "driver";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
//# sourceMappingURL=roles.enum.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/ICategory.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=ICategory.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/IProduct.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IProduct.model.js.map

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

/***/ "../../../../../src/app/core/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_request_service__ = __webpack_require__("../../../../../src/app/core/data-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
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

// rxjs


var StorageService = (function () {
    function StorageService(dataRequestService) {
        var _this = this;
        this.dataRequestService = dataRequestService;
        this._categories = [];
        this._categoryNames = [];
        // Events
        this.categoryChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.productsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // DataRequest Service subscriptions
        this.dataRequestService.getCategoryList().subscribe(function (categoryList) {
            _this._categories = categoryList.sort(function (c1, c2) { return c1.name.localeCompare(c2.name); });
            _this._createCategoryNamesList();
            _this.categoryChanged.next(_this.categories);
        });
    }
    Object.defineProperty(StorageService.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "categoryNames", {
        get: function () {
            return this._categoryNames;
        },
        enumerable: true,
        configurable: true
    });
    StorageService.prototype.ngOnInit = function () {
    };
    StorageService.prototype._createCategoryNamesList = function () {
        var _this = this;
        this._categoryNames = [];
        this.categories.forEach(function (i) {
            _this._categoryNames.push(i.name);
        });
    };
    // TODO: request to the backend
    StorageService.prototype.addCategory = function (category) {
        category.id = Math.random().toString();
        this._categories.push(category);
        this._categories.sort(function (c1, c2) { return c1.name.localeCompare(c2.name); });
        this._createCategoryNamesList();
        this.categoryChanged.next(this.categories);
    };
    StorageService.prototype.getCategory = function (id) {
        return this._categories.find(function (c) { return c.id === id; });
    };
    StorageService.prototype.getProducts = function (categoryId) {
        return this.getCategory(categoryId).products;
    };
    // TODO: request to the backend
    StorageService.prototype.processWaybill = function (waybillItems) {
        var _this = this;
        waybillItems.forEach(function (item) {
            _this._categories.find(function (c) { return c.id === item.categoryId; })
                .products.find(function (p) { return p.name === item.productName; }).count += item.count;
        });
    };
    // TODO: request to the backend
    StorageService.prototype.addProductToCategory = function (product, categoryId) {
        this._categories.find(function (c) { return c.id === categoryId; }).products.push(product);
        this.productsChanged.next(this._categories.find(function (c) { return c.id === categoryId; }).products);
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_request_service__["a" /* DataRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_request_service__["a" /* DataRequestService */]) === "function" && _a || Object])
], StorageService);

var _a;
//# sourceMappingURL=storage.service.js.map

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
        role: __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__["a" /* Roles */].driver
    },
    {
        id: '96b93c5d-7841-4a59-b09b-2a4e48e4778a',
        email: 'admin@gmail.com',
        password: 'Admin123',
        role: __WEBPACK_IMPORTED_MODULE_0__core_enums_roles_enum__["a" /* Roles */].admin
    }
];
/* harmony default export */ __webpack_exports__["a"] = (fakeUsers);
//# sourceMappingURL=fake-auth-data.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <!-- Waybill -->\r\n    <div class=\"col-xl-4 col-lg-12 col-12 order-xl-8\">\r\n      <app-waybill></app-waybill>\r\n    </div>\r\n    <!-- // Waybill -->\r\n\r\n    <div class=\"col-xl-2 col-lg-3 col-sm-4 col-6\">\r\n      <app-category-list></app-category-list>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-lg-9 col-sm-8 col-6\">\r\n      <div *ngIf=\"!selectedCategory; else products\">\r\n        <!-- Autocomplete -->\r\n        <div class=\"autocompleate-wrapper\">\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Назание категории\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\" value=\"\">\r\n          </md-input-container>\r\n\r\n          <md-autocomplete #auto=\"mdAutocomplete\">\r\n            <md-option *ngFor=\"let value of filteredValue | async\" [value]=\"value\">\r\n              {{ value }}\r\n            </md-option>\r\n          </md-autocomplete>\r\n        </div>\r\n        <!-- // Autocomplete -->\r\n\r\n        <!-- Category cards -->\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-6 col-sm-6 col-12\" *ngFor=\"let item of categories | filter:stateCtrl.value:'name'\">\r\n            <app-category-item [item]=\"item\"></app-category-item>\r\n          </div>\r\n        </div>\r\n        <!-- // Category cards -->\r\n      </div>\r\n\r\n      <ng-template #products>\r\n        <app-products></app-products>\r\n      </ng-template>\r\n      <!-- <div *ngIf=\"selectedCategory\">\r\n        <app-products></app-products>\r\n      </div> -->\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autocompleate-wrapper {\n  padding: 1rem 0;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem; }\n\n.mat-input-container {\n  width: 90%;\n  margin: 0 5%;\n  font-size: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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

// Angular material

var CategoriesComponent = (function () {
    function CategoriesComponent(storageService, route, dialog) {
        this.storageService = storageService;
        this.route = route;
        this.dialog = dialog;
        this.categories = [];
        // Autocomplete params
        this.values = [];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // storage service subscription
        this.storageService.categoryChanged.subscribe(function (categories) {
            _this.categories = categories;
            _this.values = _this.storageService.categoryNames;
        });
        // autocomplete subscription
        this.filteredValue = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterValue(name); });
        // route subscription
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.selectedCategory = _this.storageService.getCategory(params['id']);
            }
            else {
                _this.selectedCategory = null;
            }
        });
    };
    CategoriesComponent.prototype.filterValue = function (val) {
        return val ? this.values.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.values;
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/home/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], CategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/categories.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/@angular/cdk/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure_filter_pipe__ = __webpack_require__("../../../../../src/app/infrastructure/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__waybill_waybill_service__ = __webpack_require__("../../../../../src/app/home/categories/waybill/waybill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_item_category_item_component__ = __webpack_require__("../../../../../src/app/home/categories/category-item/category-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_component__ = __webpack_require__("../../../../../src/app/home/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__waybill_waybill_component__ = __webpack_require__("../../../../../src/app/home/categories/waybill/waybill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__category_add_dialog_category_add_dialog_component__ = __webpack_require__("../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/home/categories/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_products_component__ = __webpack_require__("../../../../../src/app/home/categories/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_product_item_product_item_component__ = __webpack_require__("../../../../../src/app/home/categories/products/product-item/product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_product_item_change_amount_dialog_change_amount_dialog_component__ = __webpack_require__("../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pipes

// Angular materials

// Services

// Components









var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    return CategoriesModule;
}());
CategoriesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */],
            // Angular materials
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdPaginatorModule */],
        ],
        declarations: [
            // Pipes
            __WEBPACK_IMPORTED_MODULE_4__infrastructure_filter_pipe__["a" /* FilterPipe */],
            // Components
            __WEBPACK_IMPORTED_MODULE_7__category_item_category_item_component__["a" /* CategoryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__waybill_waybill_component__["a" /* WaybillComponent */],
            __WEBPACK_IMPORTED_MODULE_10__category_add_dialog_category_add_dialog_component__["a" /* CategoryAddDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__products_product_item_product_item_component__["a" /* ProductItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__products_product_item_change_amount_dialog_change_amount_dialog_component__["a" /* ChangeAmountDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__category_add_dialog_category_add_dialog_component__["a" /* CategoryAddDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__products_product_item_change_amount_dialog_change_amount_dialog_component__["a" /* ChangeAmountDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__waybill_waybill_service__["a" /* WaybillService */]
        ]
    })
], CategoriesModule);

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.name}}</h1>\r\n<div md-dialog-content>\r\n  <form [formGroup]=\"form\">\r\n    <md-form-field>\r\n      <input mdInput placeholder=\"Название\" formControlName=\"name\">\r\n      <md-error *ngIf=\"form.controls['name'].hasError('required')\">\r\n        Название <strong>обязательно</strong>\r\n      </md-error>\r\n    </md-form-field>\r\n    <md-form-field>\r\n      <input mdInput placeholder=\"Изображение\" formControlName=\"imgPath\">\r\n      <md-error *ngIf=\"form.controls['imgPath'].hasError('required')\">\r\n        Изображение <strong>обязательно</strong>\r\n      </md-error>\r\n    </md-form-field>\r\n  </form>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button [md-dialog-close]=\"onClose()\" tabindex=\"2\" [disabled]=\"!form.valid\">Подтвердить</button>\r\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Отмена</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  font-size: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryAddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CategoryAddDialogComponent = (function () {
    function CategoryAddDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategoryAddDialogComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            'imgPath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required)
        });
    };
    CategoryAddDialogComponent.prototype.onClose = function () {
        return {
            'name': this.form.controls['name'].value,
            'imgPath': this.form.controls['imgPath'].value
        };
    };
    CategoryAddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return CategoryAddDialogComponent;
}());
CategoryAddDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category-add-dialog',
        template: __webpack_require__("../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.scss"), __webpack_require__("../../../../../src/app/home/categories/categories.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, Object])
], CategoryAddDialogComponent);

var _a;
//# sourceMappingURL=category-add-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/category-item/category-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [routerLink]=\"['/categories/' + category.id]\">\r\n  <img class=\"card-img-top\" [src]=\"category.imgPath\" alt=\"Card image cap\">\r\n  <div class=\"card-body text-center\">\r\n    <h5 class=\"card-title\">{{ category.name }}</h5>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/category-item/category-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 1rem 0;\n  width: 100%;\n  outline: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/category-item/category-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_ICategory_model__ = __webpack_require__("../../../../../src/app/core/models/ICategory.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_ICategory_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__core_models_ICategory_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Models

var CategoryItemComponent = (function () {
    function CategoryItemComponent() {
    }
    CategoryItemComponent.prototype.ngOnInit = function () {
    };
    return CategoryItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('item'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_models_ICategory_model__["ICategory"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_models_ICategory_model__["ICategory"]) === "function" && _a || Object)
], CategoryItemComponent.prototype, "category", void 0);
CategoryItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category-item',
        template: __webpack_require__("../../../../../src/app/home/categories/category-item/category-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/category-item/category-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CategoryItemComponent);

var _a;
//# sourceMappingURL=category-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h5 class=\"component-header\" [routerLink]=\"['/categories/']\">Категории</h5>\r\n  <button md-icon-button color=\"primary\" (click)=\"openDialog()\" class=\"btn-add\">\r\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n  </button>\r\n  <div class=\"list-group\">\r\n      <div class=\"list-item\" [routerLinkActive]=\"'active'\" [routerLink]=\"['/categories/' + category.id]\" *ngFor=\"let category of categories\">\r\n        <a class=\"list-group-item list-group-item-action\">\r\n          {{category.name}}\r\n        </a>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/category-list/category-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-color: white;\n  padding: 1rem 0;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem;\n  margin-bottom: 1rem; }\n\n.btn-add {\n  float: right;\n  position: relative;\n  top: -55px; }\n\n.list-group-item {\n  border: none;\n  cursor: pointer; }\n\n.component-header {\n  outline: none; }\n\n.component-header:hover {\n  color: #1e88e5;\n  cursor: pointer; }\n\n.active a {\n  color: #ffffff;\n  background-color: #3f51b5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_add_dialog_category_add_dialog_component__ = __webpack_require__("../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
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

var CategoryListComponent = (function () {
    function CategoryListComponent(storageService, dialog) {
        this.storageService = storageService;
        this.dialog = dialog;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.categoryChanged.subscribe(function (categories) {
            _this.categories = _this.storageService.categories;
        });
    };
    CategoryListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__category_add_dialog_category_add_dialog_component__["a" /* CategoryAddDialogComponent */], {
            width: '300px',
            data: {
                name: 'Новая категория'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var category = {
                    id: Math.random().toString(),
                    name: result.name,
                    imgPath: result.imgPath,
                    products: []
                };
                _this.storageService.addCategory(category);
            }
        });
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category-list',
        template: __webpack_require__("../../../../../src/app/home/categories/category-list/category-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/category-list/category-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], CategoryListComponent);

var _a, _b;
//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.name}}</h1>\r\n<div md-dialog-content>\r\n\r\n  <form>\r\n    <md-form-field>\r\n      <input mdInput type=\"number\" [placeholder]=\"data.placeholder\" [formControl]=\"countFormControl\">\r\n      <md-error *ngIf=\"countFormControl.hasError('min')\">\r\n        Значение должно быть больше 0\r\n      </md-error>\r\n      <md-error *ngIf=\"countFormControl.hasError('max')\">\r\n        Доступно только {{availableCount}}\r\n      </md-error>\r\n      <md-error *ngIf=\"countFormControl.hasError('required')\">\r\n        Это <strong>обязательное</strong> поле\r\n      </md-error>\r\n    </md-form-field>\r\n  </form>\r\n\r\n  <!-- <md-form-field>\r\n    <input mdInput tabindex=\"1\" [placeholder]=\"data.placeholder\" [(ngModel)]=\"value\">\r\n  </md-form-field> -->\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button [md-dialog-close]=\"onClose()\" tabindex=\"2\" [disabled]=\"!countFormControl.valid\">Подтвердить</button>\r\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Отмена</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  font-size: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeAmountDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_actions_enum__ = __webpack_require__("../../../../../src/app/home/categories/products/product-item/product-actions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ChangeAmountDialogComponent = (function () {
    function ChangeAmountDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.operation = data.operation;
        this.availableCount = data.availableCount;
    }
    ChangeAmountDialogComponent.prototype.ngOnInit = function () {
        if (this.operation === __WEBPACK_IMPORTED_MODULE_2__product_actions_enum__["a" /* ProductsActions */].Remove) {
            this.countFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].max(this.availableCount)]);
        }
        else {
            this.countFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].min(1)]);
        }
    };
    ChangeAmountDialogComponent.prototype.onClose = function () {
        if (this.countFormControl.valid) {
            if (this.operation === __WEBPACK_IMPORTED_MODULE_2__product_actions_enum__["a" /* ProductsActions */].Remove) {
                return { 'value': this.countFormControl.value * (-1) };
            }
            else {
                return { 'value': this.countFormControl.value };
            }
        }
    };
    ChangeAmountDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return ChangeAmountDialogComponent;
}());
ChangeAmountDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-amount-dialog',
        template: __webpack_require__("../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, Object])
], ChangeAmountDialogComponent);

var _a;
//# sourceMappingURL=change-amount-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/product-actions.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsActions; });
var ProductsActions;
(function (ProductsActions) {
    ProductsActions[ProductsActions["Remove"] = 0] = "Remove";
    ProductsActions[ProductsActions["Add"] = 1] = "Add";
})(ProductsActions || (ProductsActions = {}));
//# sourceMappingURL=product-actions.enum.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/product-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img class=\"card-img-top\" [src]=\"product.imgPath\" alt=\"Card image cap\">\r\n  <div class=\"card-body text-center\">\r\n    <h5 class=\"card-title\">{{ product.name }} - {{ product.count }}</h5>\r\n    <button md-icon-button color=\"primary\" (click)=\"openDialog(ADD)\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </button>\r\n    <button md-icon-button color=\"warn\" [disabled]=\"product.count === 0\" (click)=\"openDialog(REMOVE)\">\r\n      <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/product-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 1rem 0;\n  width: 100%;\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/products/product-item/product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_IProduct_model__ = __webpack_require__("../../../../../src/app/core/models/IProduct.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_IProduct_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__core_models_IProduct_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waybill_waybill_service__ = __webpack_require__("../../../../../src/app/home/categories/waybill/waybill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_amount_dialog_change_amount_dialog_component__ = __webpack_require__("../../../../../src/app/home/categories/products/product-item/change-amount-dialog/change-amount-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_actions_enum__ = __webpack_require__("../../../../../src/app/home/categories/products/product-item/product-actions.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Models

// Services



var ProductItemComponent = (function () {
    function ProductItemComponent(waybillService, dialog) {
        this.waybillService = waybillService;
        this.dialog = dialog;
        this.ADD = __WEBPACK_IMPORTED_MODULE_5__product_actions_enum__["a" /* ProductsActions */].Add;
        this.REMOVE = __WEBPACK_IMPORTED_MODULE_5__product_actions_enum__["a" /* ProductsActions */].Remove;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    ProductItemComponent.prototype.openDialog = function (action) {
        var _this = this;
        var dialogName;
        var availableCount;
        if (action === __WEBPACK_IMPORTED_MODULE_5__product_actions_enum__["a" /* ProductsActions */].Add) {
            dialogName = 'Добавление';
        }
        else {
            dialogName = 'Удаление';
            availableCount = this.product.count;
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__change_amount_dialog_change_amount_dialog_component__["a" /* ChangeAmountDialogComponent */], {
            width: '300px',
            data: {
                name: dialogName,
                placeholder: 'Количество',
                availableCount: availableCount,
                operation: action
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var waybill = {
                    categoryId: _this.categoryId,
                    productName: _this.product.name,
                    count: result.value
                };
                _this.waybillService.addItem(waybill);
            }
        });
    };
    return ProductItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_models_IProduct_model__["IProduct"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_models_IProduct_model__["IProduct"]) === "function" && _a || Object)
], ProductItemComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProductItemComponent.prototype, "categoryId", void 0);
ProductItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-item',
        template: __webpack_require__("../../../../../src/app/home/categories/products/product-item/product-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/products/product-item/product-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__waybill_waybill_service__["a" /* WaybillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__waybill_waybill_service__["a" /* WaybillService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], ProductItemComponent);

var _a, _b, _c;
//# sourceMappingURL=product-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Autocomplete -->\r\n<div class=\"autocompleate-wrapper\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Назание продукта\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\" value=\"\">\r\n  </md-input-container>\r\n\r\n  <md-autocomplete #auto=\"mdAutocomplete\">\r\n    <md-option *ngFor=\"let value of filteredValue | async\" [value]=\"value\">\r\n      {{ value }}\r\n    </md-option>\r\n  </md-autocomplete>\r\n</div>\r\n\r\n<button md-icon-button color=\"primary\" (click)=\"openDialog()\" class=\"btn-add\">\r\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n  </button>\r\n<!-- // Autocomplete -->\r\n\r\n<!-- Product cards -->\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4 col-md-6 col-sm-6 col-12\" *ngFor=\"let item of pruducts | filter:stateCtrl.value:'name'\">\r\n    <app-product-item [categoryId]=\"currentCategoryId\" [product]=\"item\"></app-product-item>\r\n  </div>\r\n</div>\r\n<!-- // Product cards -->\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".autocompleate-wrapper {\n  padding: 1rem 0;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem; }\n\n.mat-input-container {\n  width: 93%;\n  margin: 0 2%;\n  font-size: 1rem; }\n\n.btn-add {\n  float: right;\n  position: relative;\n  top: -70px;\n  margin-right: 0.2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_add_dialog_category_add_dialog_component__ = __webpack_require__("../../../../../src/app/home/categories/category-add-dialog/category-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
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

var ProductsComponent = (function () {
    function ProductsComponent(route, storageService, dialog) {
        var _this = this;
        this.route = route;
        this.storageService = storageService;
        this.dialog = dialog;
        // Autocomplete params
        this.values = [];
        // autocomplete
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredValue = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterValue(name); });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // route params
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.currentCategoryId = params['id'];
                _this.pruducts = _this.storageService.getProducts(_this.currentCategoryId);
                _this.values = [];
                _this.stateCtrl.reset();
                _this.pruducts.forEach(function (p) {
                    _this.values.push(p.name);
                });
                //this.pruducts.sort((p1, p2) => p1.name.localeCompare(p2.name));
            }
        });
        // storage service subscriptions
        // recreate autocomplete values
        this.storageService.productsChanged.subscribe(function (products) {
            _this.values = [];
            _this.stateCtrl.reset();
            _this.pruducts.forEach(function (p) {
                _this.values.push(p.name);
            });
        });
    };
    ProductsComponent.prototype.filterValue = function (val) {
        return val ? this.values.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.values;
    };
    ProductsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__category_add_dialog_category_add_dialog_component__["a" /* CategoryAddDialogComponent */], {
            width: '300px',
            data: {
                name: 'Новый продукт'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var product = {
                    id: Math.random().toString(),
                    name: result.name,
                    imgPath: result.imgPath,
                    count: 0
                };
                _this.storageService.addProductToCategory(product, _this.currentCategoryId);
            }
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/home/categories/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__core_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], ProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/waybill/waybill.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h5 class=\"component-header\">Накладная</h5>\r\n  <md-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Product name column -->\r\n    <ng-container mdColumnDef=\"actions\">\r\n      <md-header-cell *mdHeaderCellDef> <i class=\"fa fa-hashtag\"></i> </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> <i class=\"fa fa-minus item-delete\" (click)=\"deleteItem(row)\"></i> </md-cell>\r\n    </ng-container>\r\n    <!-- // Product name column -->\r\n\r\n    <!-- Product name column -->\r\n    <ng-container mdColumnDef=\"productName\">\r\n      <md-header-cell *mdHeaderCellDef> Продукт </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{ row.productName }} </md-cell>\r\n    </ng-container>\r\n    <!-- // Product name column -->\r\n\r\n    <!-- Category name column -->\r\n    <!-- <ng-container mdColumnDef=\"categoryName\">\r\n      <md-header-cell *mdHeaderCellDef> Категория </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\"> {{ row.categoryName }} </md-cell>\r\n    </ng-container> -->\r\n    <!-- // Category name column -->\r\n\r\n\r\n    <!-- Count column -->\r\n    <ng-container mdColumnDef=\"count\">\r\n      <md-header-cell *mdHeaderCellDef> Количество </md-header-cell>\r\n      <md-cell *mdCellDef=\"let row\" [style.color]=\"row.count > 0 ? 'green' : 'red'\"> {{ row.count }} </md-cell>\r\n    </ng-container>\r\n    <!-- // Count column -->\r\n\r\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n  </md-table>\r\n\r\n  <md-paginator #paginator\r\n                [length]=\"waybillService.waybills.length\"\r\n                [pageIndex]=\"0\"\r\n                [pageSize]=\"15\"\r\n                [pageSizeOptions]=\"[5, 10, 15, 20]\">\r\n  </md-paginator>\r\n\r\n  <div class=\"col-10 justify-content-end ml-auto\">\r\n    <div class=\"row justify-content-end\">\r\n      <button md-raised-button color=\"primary\" class=\"waybill-btn\" [disabled]=\"waybillService.waybills.length === 0\" (click)=\"submitWaybill()\">Подтвердить</button>\r\n      <button md-raised-button color=\"warn\" class=\"waybill-btn\" [disabled]=\"waybillService.waybills.length === 0\" (click)=\"clearWaybils()\">Отменить</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/categories/waybill/waybill.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-color: white;\n  padding: 1rem 0;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem;\n  margin-bottom: 1rem; }\n  .wrapper .mat-table {\n    padding: 0 2%; }\n  .wrapper .mat-header-cell {\n    font-size: 1rem; }\n  .wrapper .mat-cell {\n    font-size: 1rem; }\n  .wrapper .mat-column-actions {\n    max-width: 5%; }\n  .wrapper .mat-column-count {\n    max-width: 20%;\n    text-align: center; }\n  .wrapper .mat-column-categoryName {\n    text-align: left;\n    max-width: 20%; }\n  .wrapper .waybill-btn {\n    margin: 0.5rem 1rem 0 0;\n    font-size: 1rem; }\n  .wrapper .item-delete {\n    display: table-cell;\n    vertical-align: middle;\n    color: red; }\n  .wrapper .item-delete:hover {\n    color: black;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/categories/waybill/waybill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaybillComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waybill_service__ = __webpack_require__("../../../../../src/app/home/categories/waybill/waybill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
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








var WaybillComponent = (function () {
    function WaybillComponent(waybillService) {
        this.waybillService = waybillService;
        this.displayedColumns = ['actions', 'productName', 'count'];
    }
    WaybillComponent.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.waybillService, this.paginator);
    };
    WaybillComponent.prototype.deleteItem = function (item) {
        this.waybillService.removeItem(item);
    };
    WaybillComponent.prototype.clearWaybils = function () {
        this.waybillService.clearWaybills();
    };
    WaybillComponent.prototype.submitWaybill = function () {
        this.waybillService.submit();
    };
    return WaybillComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdPaginator */]) === "function" && _a || Object)
], WaybillComponent.prototype, "paginator", void 0);
WaybillComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-waybill',
        template: __webpack_require__("../../../../../src/app/home/categories/waybill/waybill.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/categories/waybill/waybill.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__waybill_service__["a" /* WaybillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__waybill_service__["a" /* WaybillService */]) === "function" && _b || Object])
], WaybillComponent);

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(waybillService, _paginator) {
        var _this = _super.call(this) || this;
        _this.waybillService = waybillService;
        _this._paginator = _paginator;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.waybillService.waybilsChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this.waybillService.waybills.slice();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b;
//# sourceMappingURL=waybill.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/categories/waybill/waybill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaybillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_storage_service__ = __webpack_require__("../../../../../src/app/core/storage.service.ts");
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

// Serivces

var WaybillService = (function () {
    function WaybillService(storageService) {
        this.storageService = storageService;
        this._waybills = [
            {
                categoryId: '59b01de5d3505500180f14bc',
                productName: 'Апельсин',
                count: 40
            },
            {
                categoryId: '59b01de5d3505500180f14bc',
                productName: 'Виноград',
                count: -10
            },
            {
                categoryId: '59b01de5d3505500180f14bc',
                productName: 'Ананас',
                count: 10
            },
        ];
        this.waybilsChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    Object.defineProperty(WaybillService.prototype, "waybills", {
        get: function () {
            return this._waybills;
        },
        enumerable: true,
        configurable: true
    });
    WaybillService.prototype.removeItem = function (item) {
        this._waybills.splice(this._waybills.indexOf(item), 1);
        this.waybilsChange.next(this.waybills);
    };
    WaybillService.prototype.clearWaybills = function () {
        this._waybills = [];
        this.waybilsChange.next(this.waybills);
    };
    WaybillService.prototype.addItem = function (item) {
        this._waybills.push(item);
        this.waybilsChange.next(this.waybills);
    };
    WaybillService.prototype.submit = function () {
        this.storageService.processWaybill(this._waybills.slice());
        this.clearWaybills();
    };
    return WaybillService;
}());
WaybillService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], WaybillService);

var _a;
//# sourceMappingURL=waybill.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<app-header></app-header>\r\n<!-- // Navbar -->\r\n<div class=\"container-fluid\" style=\"padding: 0;\">\r\n  <!-- Content -->\r\n  <router-outlet></router-outlet>\r\n  <!-- // Content -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  position: relative;\n  top: 5.6rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  statistic works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/statistics/statistics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
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

var StatisticsComponent = (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-statistics',
        template: __webpack_require__("../../../../../src/app/home/statistics/statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/statistics/statistics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StatisticsComponent);

//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/infrastructure/filter.pipe.ts":
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
    // value - value to filter, filterString - string, that correct value need to contain.
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (value.length === 0 || filterString === '' || !filterString) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName].toLowerCase().startsWith(filterString.toLowerCase())) {
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

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"footer\">\r\n    <p>Some text for footer</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 30px;\n  background-color: lightgray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
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
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/auth-guard.service.ts":
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

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark\">\r\n  <div class=\"logo-wrapper\">\r\n    <a class=\"navbar-brand\" routerLink=\".\">Here must be logo</a>\r\n  </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/categories']\">Продукты</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/statictics']\">Статистика</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  min-height: 4.5rem;\n  padding: 0 1rem; }\n  nav .logo-wrapper {\n    background: rgba(0, 0, 0, 0.2);\n    height: 100%;\n    display: table;\n    position: relative;\n    left: -1rem;\n    padding: 1rem; }\n    nav .logo-wrapper .navbar-brand {\n      display: table-cell;\n      vertical-align: middle;\n      text-align: center;\n      color: #ffffff;\n      font-size: 1.5rem; }\n  nav .nav-item {\n    padding: .5rem 1rem;\n    margin: .1rem 0; }\n  nav .nav-link {\n    color: #ffffff;\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    font-size: 1.3rem;\n    cursor: pointer; }\n  nav .active {\n    background: rgba(0, 0, 0, 0.2); }\n    nav .active a {\n      color: #1e88e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
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
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

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