(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/authentication/authentication.module": [
		"./src/app/layouts/authentication/authentication.module.ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg\" style=\"background-color: black\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <span *ngIf=\"!isMobileMenu()\" class=\"navbar-toggle-side fa fa-lg fa-bars\" id=\"sideBsr\" (click)=\"togleSideNav()\">\n      </span>\n      <div class=\"logo\">\n        <a class=\"simple-text\">\n          <div class=\"logo-img\">\n            <img src=\"./assets/images/favicon.png\" />\n          </div>\n          LRS\n        </a>\n      </div>\n    </div>\n    <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <span style=\"color: white;padding: 10px;\">{{CurrentUser.displayName}}</span>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"#\" id=\"navbarDropdownPerson\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <i class=\"material-icons\">person</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPerson\">\n            <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\">Logout</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownPerson\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          <i class=\"material-icons\">person</i>\n          <p>\n            <span class=\"d-lg-none d-md-block\">Account</span>\n          </p>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPerson\">\n          <a class=\"dropdown-item\" style=\"color: #333\" routerLink=\"/login\" href=\"#\">Logout</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <span style=\"color: white;padding: 10px;\">{{CurrentUser.DisplayName}}</span>\n      </li>\n    </ul>\n  </div>\n  <ul class=\"nav\">\n    <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n      <a class=\"nav-link\" title=\"{{menuItem.title}}\" [routerLink]=\"[menuItem.path]\" style=\"margin: 0\">\n        <i class=\"material-icons\">{{menuItem.icon}}</i>\n        <p>{{menuItem.title}}</p>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-color: #0a0a0a;\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n  </div>\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"large\" color=\"#fff\" type=\"ball-clip-rotate-pulse\">\n    <p style=\"color:rgb(91, 202, 27);margin-top: 30px;\"> Please wait... </p>\n  </ngx-spinner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/authentication/authentication.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/authentication/authentication.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"loginContainer\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100\">\n      <div class=\"col-sm-4 loginfrm h-100\">\n        <div class=\"card mb-3 h-75\">\n          <img src=\"../../assets/images/loginfrm.jpg\" class=\"card-img-top h-50\" alt=\"...\">\n          <div class=\"card-body h-50\">\n            <h5 class=\"card-title text-white lead text-center\">Letter Repository System</h5>\n            <div class=\"row h-100\">\n              <div class=\"col-sm-12\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-icon [ngStyle]=\"{'color':'white'}\" matPrefix>person</mat-icon>\n                        <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"Username\"\n                          autocomplete=\"off\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-icon [ngStyle]=\"{'color':'white'}\" matPrefix>lock</mat-icon>\n                        <input class=\"login\" type=\"password\" matInput placeholder=\"password\" formControlName=\"Password\"\n                          autocomplete=\"off\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <mat-checkbox formControlName=\"isRememberMe\">Remember me</mat-checkbox>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n\n                  </div>\n                  <button type=\"submit\" [disabled]=\"submitted\" class=\"btn btn-outline-success float-right\">\n                    Signin <i class=\"fa fa-sign-in\"></i>\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"large\" color=\"#fff\" type=\"ball-clip-rotate-pulse\">\n    <p style=\"color:rgb(91, 202, 27);margin-top: 30px;\"> Please wait... </p>\n  </ngx-spinner>\n</section>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/authentication/authentication.component */ "./src/app/layouts/authentication/authentication.component.ts");
/* harmony import */ var _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/services/auth.guard.service */ "./src/app/common/services/auth.guard.service.ts");




const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
        path: 'login',
        component: _layouts_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"],
        children: [{
                path: 'login',
                loadChildren: './layouts/authentication/authentication.module#AuthenticationModule'
            }]
    }
];
const AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'LetterRepositoryUI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/authentication/authentication.component */ "./src/app/layouts/authentication/authentication.component.ts");
/* harmony import */ var _layouts_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/authentication/authentication.module */ "./src/app/layouts/authentication/authentication.module.ts");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/services/auth.guard.service */ "./src/app/common/services/auth.guard.service.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
            _layouts_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__["AuthenticationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _layouts_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_13__["AuthenticationModule"]
        ],
        providers: [_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/models/toast.ts":
/*!****************************************!*\
  !*** ./src/app/common/models/toast.ts ***!
  \****************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
class Toast {
    constructor() { }
    showNotification({ message, color, time, placement }) {
        const type = ['', 'info', 'success', 'warning', 'danger'];
        $.notify({
            icon: 'notifications',
            message
        }, {
            type: type[color],
            timer: time,
            placement: (placement !== undefined) ? placement : {
                from: 'top',
                align: 'right'
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                // tslint:disable-next-line:max-line-length
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                // tslint:disable-next-line:max-line-length
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    Success({ message, placement }) {
        $.notify({
            icon: 'notifications',
            message
        }, {
            type: 'success',
            timer: 1000,
            placement: (placement !== undefined) ? placement : {
                from: 'top',
                align: 'right'
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                // tslint:disable-next-line:max-line-length
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                // tslint:disable-next-line:max-line-length
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    Danger({ message, placement }) {
        $.notify({
            icon: 'notifications',
            message
        }, {
            type: 'danger',
            timer: 4000,
            placement: (placement !== undefined) ? placement : {
                from: 'top',
                align: 'right'
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                // tslint:disable-next-line:max-line-length
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                // tslint:disable-next-line:max-line-length
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    Warning({ message, placement }) {
        $.notify({
            icon: 'notifications',
            message
        }, {
            type: 'warning',
            timer: 4000,
            placement: (placement !== undefined) ? placement : {
                from: 'top',
                align: 'right'
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                // tslint:disable-next-line:max-line-length
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                // tslint:disable-next-line:max-line-length
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    Info({ message, placement }) {
        $.notify({
            icon: 'notifications',
            message
        }, {
            type: 'info',
            timer: 4000,
            placement: (placement !== undefined) ? placement : {
                from: 'top',
                align: 'right'
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                // tslint:disable-next-line:max-line-length
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                // tslint:disable-next-line:max-line-length
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
}


/***/ }),

/***/ "./src/app/common/services/auth.guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/auth.guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/common/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    login(Obj) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.baseUrl + 'Authentication/authenticate?UserName=' + Obj.Username + '&Password=' + Obj.Password, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    logout() {
        const userObj = JSON.parse(localStorage.getItem('currentUser'));
        const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'Authentication/Logout?token=' + userObj.token;
        return this.http.get(baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = error.error.ExceptionMessage;
            console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthenticationService);



/***/ }),

/***/ "./src/app/common/services/configuration.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/services/configuration.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfigurationService = class ConfigurationService {
    constructor() {
        this.isTogleSideNav = false;
        this.isMobileDivice = false;
    }
};
ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigurationService);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ],
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-toggle-side {\n  position: relative;\n  float: left;\n  /*padding: 12px 8px 0px 0px;*/\n  margin-top: 0px;\n  margin-right: 10px;\n  margin-bottom: 0px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.logo {\n  padding: 11px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n\n.logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: inline-block;\n  font-size: 18px;\n  color: #fff;\n  white-space: nowrap;\n  font-weight: 400;\n  line-height: 5px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n\n.logo-img {\n  width: 25px;\n  display: block;\n  max-height: 25px;\n  margin-left: 10px;\n  margin-right: 120px;\n}\n\n.logo-img img {\n  width: 32px;\n  top: 2px;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdG9nZ2xlLXNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKnBhZGRpbmc6IDEycHggOHB4IDBweCAwcHg7Ki9cbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMTFweCAwcHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbn1cblxuLmxvZ28gLnNpbXBsZS10ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nby1pbWcge1xuICB3aWR0aDogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xufVxuXG4ubG9nby1pbWcgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIHRvcDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/configuration.service */ "./src/app/common/services/configuration.service.ts");
/* harmony import */ var app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");







let NavbarComponent = class NavbarComponent {
    constructor(location, element, router, configurationService, authenticationService) {
        this.element = element;
        this.router = router;
        this.configurationService = configurationService;
        this.authenticationService = authenticationService;
        this.mobileMenuVisible = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            this.$layer = document.getElementsByClassName('close-layer')[0];
            if (this.$layer) {
                this.$layer.remove();
                this.mobileMenuVisible = 0;
            }
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(() => {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    sidebarToggle() {
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];
        if (this.mobileMenuVisible == 1) {
            body.classList.remove('nav-open');
            if (this.$layer) {
                this.$layer.remove();
            }
            setTimeout(() => {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobileMenuVisible = 0;
        }
        else {
            setTimeout(() => {
                $toggle.classList.add('toggled');
            }, 430);
            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(() => {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobileMenuVisible = 0;
                $layer.classList.remove('visible');
                setTimeout(() => {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobileMenuVisible = 1;
        }
    }
    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (const listTitle of this.listTitles) {
            if (listTitle.path === titlee) {
                return listTitle.title;
            }
        }
        return 'Dashboard';
    }
    sideNavbarClose() {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarwrapper = document.getElementsByClassName('sidebar-wrapper')[0];
        const mainpanel = document.getElementsByClassName('main-panel')[0];
        sidebar.classList.remove('sidenav-open');
        sidebarwrapper.classList.remove('sidenav-open');
        mainpanel.classList.remove('sidenav-open-m');
        this.configurationService.isTogleSideNav = false;
    }
    sideNavbarOpen() {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarwrapper = document.getElementsByClassName('sidebar-wrapper')[0];
        const mainpanel = document.getElementsByClassName('main-panel')[0];
        sidebar.classList.add('sidenav-open');
        sidebarwrapper.classList.add('sidenav-open');
        mainpanel.classList.add('sidenav-open-m');
        this.configurationService.isTogleSideNav = true;
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            this.configurationService.isMobileDivice = false;
            return false;
        }
        this.configurationService.isMobileDivice = true;
        return true;
    }
    togleSideNav() {
        if (this.configurationService.isTogleSideNav) {
            this.sideNavbarClose();
        }
        else {
            this.sideNavbarOpen();
        }
    }
    logout() {
        this.authenticationService.logout()
            .subscribe(res => {
            localStorage.removeItem('currentUser');
            this.router.navigateByUrl('/login');
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] },
    { type: app_common_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/configuration.service */ "./src/app/common/services/configuration.service.ts");



const ROUTES = [
    { path: '/dashboard', title: 'dashboard', icon: 'dashboard', class: '' },
    { path: '/configuration', title: 'configuration', icon: 'settings_applications', class: '' },
    { path: '/department/1001', title: 'Department', icon: 'domain', class: '' },
    { path: '/user/1002', title: 'User Profiles', icon: 'person', class: '' },
    { path: '/letter/1003', title: 'Letter', icon: 'description', class: '' },
];
let SidebarComponent = class SidebarComponent {
    constructor(configurationService) {
        this.configurationService = configurationService;
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _common_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl) {
                    this.yScrollStack.push(window.scrollY);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
        this.srouter = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            //  ps = new PerfectScrollbar(elemSidebar);
        }
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    isMaps(path) {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
        styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
    })
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/authentication/authentication.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/authentication/authentication.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/authentication/authentication.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/authentication/authentication.component.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationComponent = class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication',
        template: __webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/authentication/authentication.component.html"),
        styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/layouts/authentication/authentication.component.css")]
    })
], AuthenticationComponent);



/***/ }),

/***/ "./src/app/layouts/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/layouts/authentication/authentication.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var app_materialodule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/materialodule */ "./src/app/materialodule.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _authentication_routing__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutes"],
            app_materialodule__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
        ],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/layouts/authentication/authentication.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/authentication/authentication.routing.ts ***!
  \******************************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");


const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    } /*,
    {
      path: 'auth',
      children: [ {
        path: 'login',
        component: LoginComponent
    }]}*/
];
const AuthenticationRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Hind:400,500,700');\n/*Google fonts*/\n.loginContainer {\n  background-image: url('letters.jpg');\n  background-size: cover;\n  background-position: center center;\n  min-height: 100%;\n  min-width: 100%;\n  width: auto;\n  height: auto;\n  margin: 0;\n  position: fixed;\n  font-family: 'Hind';\n  background-color: #000;\n  color: #fff;\n}\n.loginContainer:after {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.loginContainer .container {\n  z-index: 3;\n  position: relative;\n}\n.loginContainer .card {\n  background: rgba(0, 0, 0, 0.7);\n}\na,\na:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n@media (min-width:576px) {\n  section {\n    padding: 40px 0px;\n  }\n\n  .loginContainer .card .card-block {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .loginfrm {\n    left: 65%;\n    top: 5%;\n  }\n}\n@media (max-width:576px) {\n  section {\n    padding: 20px;\n  }\n}\n.bg-alt {\n  background-color: #fff;\n}\n.loginContainer .btn {\n  -webkit-transition: 350ms ease all;\n  transition: 350ms ease all;\n  text-transform: uppercase;\n  font-weight: 500;\n  padding: .6rem 1.5rem;\n  cursor: pointer;\n}\n.loginContainer .btn:hover,\n.btn:focus {\n  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.15);\n}\n.loginContainer .btn-primary {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n  color: #fff !important;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n::ng-deep .loginContainer .mat-form-field-label {\n  color: #FFFFFF !important;\n  margin-left: 10px !important;\n}\n::ng-deep .loginContainer .mat-input-element {\n  color: #FFFFFF !important;\n  border-color: #FFFFFF !important;\n}\n::ng-deep .loginContainer .mat-form-field-underline {\n  background-color: #FFFFFF !important;\n}\n::ng-deep .loginContainer .mat-checkbox-frame {\n  border-color: #FFFFFF !important;\n}\n.loginContainer .text-primary {\n  color: #ff5722 !important;\n}\ninput {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUVBQXVFO0FBRHZFLGVBQWU7QUFJZjtFQUNFLG9DQUF3RDtFQUN4RCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7O0VBRUUsV0FBVztFQUNYLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztJQUNULE9BQU87RUFDVDtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBOztFQUVFLDRDQUE0QztBQUM5QztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQztBQUVBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypHb29nbGUgZm9udHMqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IaW5kOjQwMCw1MDAsNzAwJyk7XG5cblxuLmxvZ2luQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xldHRlcnMuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtZmFtaWx5OiAnSGluZCc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW5Db250YWluZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmxvZ2luQ29udGFpbmVyIC5jb250YWluZXIge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dpbkNvbnRhaW5lciAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuYSxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjU3NnB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG5cbiAgLmxvZ2luQ29udGFpbmVyIC5jYXJkIC5jYXJkLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbiAgfVxuXG4gIC5sb2dpbmZybSB7XG4gICAgbGVmdDogNjUlO1xuICAgIHRvcDogNSU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuXG4uYmctYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luQ29udGFpbmVyIC5idG4ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlIGFsbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogLjZyZW0gMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dpbkNvbnRhaW5lciAuYnRuOmhvdmVyLFxuLmJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ubG9naW5Db250YWluZXIgLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cblxuOjpuZy1kZWVwIC5sb2dpbkNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmxvZ2luQ29udGFpbmVyIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmxvZ2luQ29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubG9naW5Db250YWluZXIgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5Db250YWluZXIgLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/authentication.service */ "./src/app/common/services/authentication.service.ts");
/* harmony import */ var _common_models_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, spinner) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.spinner = spinner;
        this.submitted = false;
        this.tosat = new _common_models_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"]();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isRememberMe: [0]
        });
        if (localStorage.getItem('currentUser') != null) {
            this.authenticationService.logout();
        }
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    enterkeyEvent(event) {
        if (event.keyCode == 13) {
            this.onSubmit();
        }
    }
    onSubmit() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.submitted = true;
        this.spinner.show();
        this.authenticationService.login(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            const userObj = data;
            if (userObj) {
                localStorage.setItem('currentUser', JSON.stringify(userObj));
                window.addEventListener('storage', event => {
                    if (!document.hasFocus() && event.key === 'currentUser') {
                        window.location.pathname = '/';
                    }
                }, false);
            }
            this.spinner.hide();
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.submitted = false;
            this.spinner.hide();
            this.tosat.Danger({
                message: error, placement: {
                    from: 'top',
                    align: 'center'
                }
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _common_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"), styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")] })
], LoginComponent);



/***/ }),

/***/ "./src/app/materialodule.ts":
/*!**********************************!*\
  !*** ./src/app/materialodule.ts ***!
  \**********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const matmodules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            matmodules
        ],
        exports: [
            matmodules
        ],
        declarations: [],
    })
], MaterialModule);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ragudev/RaguDev/Projects/LetterRepository/src/LetterRepositoryUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map