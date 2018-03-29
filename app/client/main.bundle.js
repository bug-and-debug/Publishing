webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/core/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2MultiStepFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__ = __webpack_require__("../../../../../src/app/modules/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_articles_articleView_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_profile_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__modules_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'article/:slug', component: __WEBPACK_IMPORTED_MODULE_3__modules_articles_articleView_component__["a" /* ArticleViewComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__modules_profile_profile_component__["a" /* ProfileComponent */] }
];
var Ng2MultiStepFormRoutingModule = (function () {
    function Ng2MultiStepFormRoutingModule() {
    }
    return Ng2MultiStepFormRoutingModule;
}());
Ng2MultiStepFormRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: []
    })
], Ng2MultiStepFormRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

AppConfig.API_ENDPOINT = "http://18.219.41.26:4100/api/v1";
//public static API_ENDPOINT: string =  "http://localhost:4100/api/v1";
AppConfig.SOCIAL_LOGIN_CONFIG = {
    GOOGLE: '210538138836-9ab2ts9ahupu0pupj1j52iug8tu1vhdc.apps.googleusercontent.com',
    FACEBOOK: { ID: '788390561350619', API_VER: 'v2.11' },
    TWITTER: 'QhAc1JeyqbrD3lS08Ot01dxd6'
};
;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/core/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularModuleConfigFactory */
/* unused harmony export provideSocialLoginConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_chips__ = __webpack_require__("../../../../ngx-chips/ngx-chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_layout_app_component__ = __webpack_require__("../../../../../src/app/modules/layout/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_layout_header_component__ = __webpack_require__("../../../../../src/app/modules/layout/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_layout_toolbar_component__ = __webpack_require__("../../../../../src/app/modules/layout/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_components_groupAutoCompleteSelector_component__ = __webpack_require__("../../../../../src/app/shared/components/groupAutoCompleteSelector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_landing_landing_component__ = __webpack_require__("../../../../../src/app/modules/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_articles_articleFormDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_articles_articleAgreeDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_articles_articleGroupSelectorDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_components_confirmDialog_confirmDialog_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_articles_articleView_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_profile_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_D3Service__ = __webpack_require__("../../../../../src/app/shared/services/D3Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_config__ = __webpack_require__("../../../../../src/app/core/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_routing_module__ = __webpack_require__("../../../../../src/app/core/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_directives_clickOutside_directive__ = __webpack_require__("../../../../../src/app/shared/directives/clickOutside.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























function RestangularModuleConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_25__app_config__["a" /* AppConfig */].API_ENDPOINT);
}
;
function provideSocialLoginConfig() {
    return new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["GoogleLoginProvider"](__WEBPACK_IMPORTED_MODULE_25__app_config__["a" /* AppConfig */].SOCIAL_LOGIN_CONFIG.GOOGLE)
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["FacebookLoginProvider"](__WEBPACK_IMPORTED_MODULE_25__app_config__["a" /* AppConfig */].SOCIAL_LOGIN_CONFIG.FACEBOOK.ID)
        },
    ]);
}
;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__modules_layout_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modules_layout_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_13__modules_layout_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_14__shared_components_groupAutoCompleteSelector_component__["a" /* GroupAutoCompleteSelector */],
            __WEBPACK_IMPORTED_MODULE_15__modules_landing_landing_component__["a" /* LandingComponent */], __WEBPACK_IMPORTED_MODULE_17__modules_articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], __WEBPACK_IMPORTED_MODULE_16__modules_articles_articleFormDialog_component__["a" /* ArticleFormDialog */], __WEBPACK_IMPORTED_MODULE_18__modules_articles_articleGroupSelectorDialog_component__["a" /* ArticleGroupSelectorDialog */],
            __WEBPACK_IMPORTED_MODULE_19__shared_components_confirmDialog_confirmDialog_component__["a" /* ConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_20__modules_articles_articleView_component__["a" /* ArticleViewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__modules_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_27__shared_directives_clickOutside_directive__["a" /* ClickOutsideDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_26__app_routing_module__["a" /* Ng2MultiStepFormRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__["RestangularModule"].forRoot(RestangularModuleConfigFactory),
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["SocialLoginModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_chips__["a" /* TagInputModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__shared_services_D3Service__["a" /* D3Service */],
            __WEBPACK_IMPORTED_MODULE_24__shared_services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthServiceConfig"],
                useFactory: provideSocialLoginConfig
            }
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__modules_articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], __WEBPACK_IMPORTED_MODULE_16__modules_articles_articleFormDialog_component__["a" /* ArticleFormDialog */], __WEBPACK_IMPORTED_MODULE_18__modules_articles_articleGroupSelectorDialog_component__["a" /* ArticleGroupSelectorDialog */],
            __WEBPACK_IMPORTED_MODULE_19__shared_components_confirmDialog_confirmDialog_component__["a" /* ConfirmDialog */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__modules_layout_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".agree-container {\n\tfloat: left;\n\twidth: 50%;\n}\n\n.disagree-container {\n\tfloat: right;\n\twidth: 50%;\n}\n\n.desc-text {\n\twidth: 100%;\n\tmargin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{title}}</h2>\n<div>\n\t<div class=\"agree-container\">\n\t\t<b>Agree</b>\n\t\t<mat-slide-toggle\n\t      class=\"\"\n\t      color=\"primary\"\n\t      [checked]=\"opinion == 'agree'\"\n\t      (change)=\"toggle('agree', $event)\">\n\t  </mat-slide-toggle>\n\t  <br />\n\t\t{{node.votes.agrees.length}}\n\t</div>\n\t<div class=\"disagree-container\">\n\t\t<b>Disagree</b>\n\t\t<mat-slide-toggle\n\t      class=\"\"\n\t      color=\"primary\"\n\t      [checked]=\"opinion == 'disagree'\"\n\t      (change)=\"toggle('disagree', $event)\">\n\t  </mat-slide-toggle>\n\t  <br />\n\t\t{{node.votes.disagrees.length}}\n\t</div>\n\n\n\t<textarea md-maxlength=\"150\" rows=\"5\"  md-select-on-focus class=\"desc-text\" readonly=\"readonly\">{{(node.nodeData.g == 'g5') ? node.nodeData.text : node.group.description}}</textarea>\n\n\t<a class=\"pull-right\">Report Comment</a>\n<div>\n<!-- <button md-button class=\"agree\" (click)=\"closeDialog()\">Agree</button>\n<button md-button class=\"disagree\" (click)=\"closeDialog()\">Disgree</button> -->\n"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleAgreeDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleAgreeDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
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






var ArticleAgreeDialog = (function () {
    function ArticleAgreeDialog(data, dialogRef, restangular, loadingSpinnerService, authService) {
        this.dialogRef = dialogRef;
        this.restangular = restangular;
        this.loadingSpinnerService = loadingSpinnerService;
        this.authService = authService;
        this.opinion = '';
        this.dialogRef.updateSize('300', '300');
        this.node = data.node;
    }
    ArticleAgreeDialog.prototype.ngOnInit = function () {
        if (this.node.nodeData.g == 'g5') {
            this.title = 'Comment';
        }
        else {
            this.title = this.node.group.name;
        }
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](this.node.votes.agrees, __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */].getCurrentUser()._id)) {
            this.opinion = 'agree';
        }
        else if (__WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](this.node.votes.disagrees, __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */].getCurrentUser()._id)) {
            this.opinion = 'disagree';
        }
        else {
            this.opinion = 'none';
        }
    };
    ArticleAgreeDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ArticleAgreeDialog.prototype.toggle = function (handler, $event) {
        if (handler == 'agree') {
            if ($event.checked)
                this.opinion = 'agree';
            else
                this.opinion = 'none';
        }
        else if (handler == 'disagree') {
            if ($event.checked)
                this.opinion = 'disagree';
            else
                this.opinion = 'none';
        }
        console.log(this.opinion);
        this.vote(this.opinion);
    };
    ArticleAgreeDialog.prototype.vote = function (vote) {
        var _this = this;
        this.loadingSpinnerService.show();
        this.restangular.one('article', this.node.nodeData.article_id)
            .one(this.node.nodeData.g == 'g5' ? 'comment' : 'group', this.node._id)
            .one('user', __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */].getCurrentUser()._id)
            .customPOST({}, 'vote/' + vote).subscribe(function (votes) {
            _this.loadingSpinnerService.hide();
            // if(vote == 'agree') this.node.votes.agrees ++;
            // else if(vote == 'disagree') this.node.votes.disagrees ++;
            _this.node.votes = votes;
        }, function () {
            _this.loadingSpinnerService.hide();
        });
    };
    return ArticleAgreeDialog;
}());
ArticleAgreeDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'articleAgreeDialog',
        template: __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */]]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__["Restangular"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_authService__["a" /* AuthService */]) === "function" && _d || Object])
], ArticleAgreeDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=articleAgreeDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  width: 90%;\n  margin: 0px auto;\n}\n\n.content button {\n    margin-top: 20px;\n    font-weight: bold;\n}\n\n\n.form-field-row {\n  width: 100%;\n  height: 75px;\n}\n\n.content .link-box {\n  margin-top: 10px;\n}\n\n.groups-content {\n  width: 100%;\n  height: 360px;\n  overflow: auto;\n  margin: 0px auto;\n}\n\n\n\n.publish-button {\n\tfloat: right;\n}\n\n\n.full-width {\n  width: 100%;\n}\n\n.article-content-new {\n  width: 100%;\n  height: 125px;\n  background: #fff;\n  overflow: hidden;\n}\n\n.title {\n  text-align: center;\n  font-size: 24px;\n}\n\n.article-content {\n  width: 100%;\n  height: 125px;\n  background: #fff;\n  overflow: hidden;\n  border:2px solid #c2c5c7;\n}\n\n.article-content .articleImage {\n  float: left;\n  width: 121px;\n  height: 121px;\n  line-height: 121px;\n  overflow: hidden;\n}\n.article-content .articleImage img {\n  width: auto;\n  height: 100%;\n}\n\n.article-content .articleContents {\n  float: right;\n  width: 300px;\n  height: 100%;\n  padding-top:15px;\n  position: relative;\n}\n.article-content .btn-reset {\n  position: absolute;\n  right:0;\n  top: 0;\n  cursor: pointer;\n}\n\n.article-content .articleContents .articleTitle {\n  font-size: 15px;\n  color: #238fce;\n  text-decoration: none;\n}\n\n.article-content .articleContents .articleBody {\n  margin-top: 15px;\n  font-size: 13px;\n  color: #737373;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <h1 class=\"title\">Add Article</h1> -->\n<div class=\"content\">\n<!-- <form class=\"article-form\"> -->\n\t<div class=\"title\" *ngIf=\"node == null\">Add Article</div>\n\t<div class=\"title\" *ngIf=\"node != null\">Add your Opinion</div>\n\t<div class=\"article-content\" *ngIf=\"node != null\">\n\t\t<div  class=\"articleImage\"><img src=\"{{ node.imageLink }}\" /></div>\n\t\t<div class=\"articleContents\">\n\t\t\t<a href=\"{{node.articleLink}}\" target=\"_blank\" class=\"articleTitle\">{{ node.title.substring(0, 60) }}</a>\n\t\t\t<div class=\"articleBody\">{{ node.body.substring(0, 120) + \"...\" }}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"article-content\" *ngIf=\"node == null && articleInfo.valid\">\n\t\t<div  class=\"articleImage\"><img src=\"{{ articleInfo.imageLink }}\" /></div>\n\t\t<div class=\"articleContents\">\n    \t<span class=\"btn-reset\" (click)=\"resetLink()\"><md-icon>close</md-icon></span>\n\t\t\t<a href=\"{{articleInfo.articleLink}}\" target=\"_blank\" class=\"articleTitle\">{{ articleInfo.title.substring(0, 60) }}</a>\n\t\t\t<div class=\"articleBody\">{{ articleInfo.body.substring(0, 120) + \"...\" }}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"article-content-new\" *ngIf=\"node == null && !articleInfo.valid\">\n\t\t<md-form-field class=\"link-box form-field-row\">\n\t\t\t<input mdInput maxlength=\"256\" placeholder=\"Paste Article link here and press Enter\" [(ngModel)]=\"url\"  (blur)='onArticleLinkChanged($event)' (keydown.enter)='onArticleLinkChanged($event)' required >\n\t\t</md-form-field>\n\t</div>\n\t<div  style=\"margin-top:20px;\"></div>\n\t<md-form-field class=\"form-field-row\" *ngIf=\"node == null || isArticleOwner\">\n    <textarea mdInput placeholder=\"g11\" rows=\"2\" readonly=\"readonly\" (click)=\"onAddChipToGroup($event, 'g11', 1)\">{{ groups.g11.length > 0 ? groups.g11[0].name : ''}}</textarea>\n\t</md-form-field>\n\t<md-form-field class=\"form-field-row\">\n    <md-chip-list #g1 (click)=\"onAddChipToGroup($event, 'g1', 2)\">\n\t\t  <md-chip *ngFor=\"let group of groups.g1\" (remove)=\"remove(group.name, 'g1')\">\n\t      {{group.name}}\n\t      <md-icon mdChipRemove>cancel</md-icon>\n\t    </md-chip>\n\t    <input placeholder=\"g1\"\n       [mdChipInputFor]=\"g1\"\n       readonly=\"readonly\" />\n    </md-chip-list>\n\t</md-form-field>\n\t<md-form-field class=\"form-field-row\">\n    <textarea mdInput placeholder=\"g2\" rows=\"2\" readonly=\"readonly\" (click)=\"onAddChipToGroup($event, 'g2', 1)\">{{ groups.g2.length > 0 ? groups.g2[0].name : ''}}</textarea>\n\t</md-form-field>\n\t<md-form-field class=\"form-field-row\">\n    <md-chip-list #group3 (click)=\"onAddChipToGroup($event, 'g3', 2)\">\n\t\t  <md-chip *ngFor=\"let group of groups.g3\" (remove)=\"remove(group.name, 'g3')\">\n\t      {{group.name}}\n\t      <md-icon mdChipRemove>cancel</md-icon>\n\t    </md-chip>\n\t    <input placeholder=\"g3\"\n\t       [mdChipInputFor]=\"group3\"\n\t       readonly=\"readonly\" />\n    </md-chip-list>\n\t</md-form-field>\n\t<md-form-field class=\"form-field-row\">\n    <textarea mdInput placeholder=\"g4\" rows=\"2\" readonly=\"readonly\" (click)=\"onAddChipToGroup($event, 'g4', 1)\">{{ groups.g4.length > 0 ? groups.g4[0].name : ''}}</textarea>\n\t</md-form-field>\n\n\t<md-form-field class=\"comment-box form-field-row\">\n    <!-- <input mdInput maxlength=\"250\" placeholder=\"Comment\" [(ngModel)]=\"comment\" > -->\n    <textarea mdInput placeholder=\"Comment\" maxlength=\"250\" rows=\"2\" [(ngModel)]=\"comment\"></textarea>\n    <md-hint align=\"start\"></md-hint>\n    <md-hint align=\"end\">{{comment.length}} / 250</md-hint>\n  </md-form-field>\n\n\n\n\t<!-- </form> -->\n\t<div>\n\t\t<div class=\"col-xs-4\" style=\"padding: 0\">\n\t\t\t<button md-raised-button color=\"primary\" (click)=\"closeDialog()\">Cancel</button>\n\t\t</div>\n\t\t<div class=\"col-xs-4\" style=\"padding: 0; text-align: center;\">\n\t\t\t<button md-raised-button color=\"basic\" (click)=\"share('TWITTER')\"><i class=\"fa fa-twitter left\"></i> Publish & Tweet</button>\n\t\t</div>\n\t\t<div class=\"col-xs-4\" style=\"padding: 0; text-align: right;\">\n\t\t\t<button md-raised-button color=\"primary\" (click)=\"publish()\">Publish</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleFormDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleFormDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articleGroupSelectorDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_confirmDialog_confirmDialog_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
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












var COMMA = 188;
var ArticleFormDialog = (function () {
    function ArticleFormDialog(data, dialogRef, restangular, loadingSpinnerService, dialog, mdSnackBar, authService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.restangular = restangular;
        this.loadingSpinnerService = loadingSpinnerService;
        this.dialog = dialog;
        this.mdSnackBar = mdSnackBar;
        this.authService = authService;
        this.comment = "";
        this.url = "";
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isArticleOwner = false;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* ENTER */], COMMA];
        this.articleInfo = { valid: false };
        this.articleLinkChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.dialogRef.updateSize('300', '300');
        this.dialogRef.updatePosition({ top: '50px', right: '100px' });
        this.node = data.node;
        this.me = __WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */].getCurrentUser();
        if (this.node && this.me) {
            if (__WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](this.node.users, function (user) { return user['_id'].toString() === _this.me._id; }) >= 0)
                this.isArticleOwner = true;
        }
        console.log(this.node);
    }
    ArticleFormDialog.prototype.ngOnInit = function () {
        var _this = this;
        if (this.node) {
            this.groups = { g1: [], g2: [], g3: [], g4: [], g11: [] };
            this.node.groups.forEach(function (group) {
                if (!_this.groups[group.group.groupType]) {
                    _this.groups[group.group.groupType] = [];
                }
                if (__WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](group.user, function (u) { return u.toString() === _this.me._id; }) >= 0)
                    _this.groups[group.group.groupType].push({ name: group.group.name, votes: group.votes });
            });
            // if(this.groups.g2.length == 0) this.groups.g2.push('');
            // if(this.groups.g4.length == 0) this.groups.g4.push('');
        }
        else {
            this.groups = { g1: [], g2: [], g3: [], g4: [], g11: [] };
        }
    };
    ArticleFormDialog.prototype.closeDialog = function (success) {
        if (success === void 0) { success = false; }
        this.dialogRef.close(success);
    };
    ArticleFormDialog.prototype.onArticleLinkChanged = function ($event) {
        // this.articleLinkChanged.next(text);
        this.url = this.url.trim();
        this.onLoadArticleInfo();
    };
    ArticleFormDialog.prototype.onArticleLinkKeydown = function ($event) {
        if ($event.keyCode == 13) {
            this.onArticleLinkKeydown($event);
        }
    };
    ArticleFormDialog.prototype.onLoadArticleInfo = function () {
        var _this = this;
        if (this.url == "")
            return;
        this.loadingSpinnerService.show();
        this.restangular.all('article').customPOST({ url: this.url }, 'analyze').subscribe(function (res) {
            _this.loadingSpinnerService.hide();
            _this.articleInfo['valid'] = res.type == 'article';
            if (res.errorCode) {
                _this.mdSnackBar.open(res.error, null, { duration: 1500 });
            }
            else if (!_this.articleInfo['valid']) {
                _this.mdSnackBar.open('Please add an Article', null, { duration: 2000 });
            }
            else {
                _this.articleInfo['title'] = res.objects[0].title;
                _this.articleInfo['articleDate'] = (typeof res.objects[0].estimatedDate) != 'undefined' ? res.objects[0].estimatedDate : __WEBPACK_IMPORTED_MODULE_6_moment__().format(__WEBPACK_IMPORTED_MODULE_8__shared_services_dataService__["a" /* DataService */].formats.backend.datetime);
                _this.articleInfo['imageLink'] = res.objects[0].images.length > 0 ? res.objects[0].images[0].url : '';
                _this.articleInfo['pictureLink'] = _this.articleInfo['imageLink'];
                _this.articleInfo['body'] = (typeof res.objects[0].text) != 'undefined' ? res.objects[0].text : '';
                _this.articleInfo['bodyHtml'] = (typeof res.objects[0].html) != 'undefined' ? res.objects[0].html : '';
                _this.articleInfo['articleLink'] = res.request.pageUrl;
                _this.articleInfo['articleSource'] = (typeof res.objects[0].siteName) != 'undefined' ? res.objects[0].siteName : 'Unknown';
                _this.articleInfo['articleSourceIcon'] = (typeof res.objects[0].icon) != 'undefined' ? res.objects[0].icon : 'favicon.ico';
                _this.articleInfo['sourceTrusted'] = true;
                /*
                this.groups["g12"] = [];
                _.each(res.objects[0].tags, (tag:any) => {
                  this.groups["g12"].push(tag.label);
                });
                */
            }
        }, function () {
            _this.mdSnackBar.open('Please add an Article', null, { duration: 2000 });
            _this.loadingSpinnerService.hide();
        });
    };
    ArticleFormDialog.prototype.publish = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */].isUserLoggedIn()) {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__shared_components_confirmDialog_confirmDialog_component__["a" /* ConfirmDialog */], {
                width: '400px',
                height: '200px',
                data: { title: 'Warning',
                    okButton: 'Login',
                    subject: 'You did not login yet. Please login first',
                    cancelButton: 'Cancel',
                    action: 'login'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result != undefined) {
                    switch (result.action) {
                        case 'login':
                            _this.dialogRef.close({ action: 'login' });
                            break;
                        default:
                            break;
                    }
                }
            });
            return;
        }
        if (this.node == null || this.isArticleOwner) {
            if (this.node == null && !this.articleInfo.valid)
                return;
            if ((this.groups.g11.length == 0 || this.groups.g11[0].name.trim().length == 0) ||
                (this.groups.g1.length == 0 && this.groups.g2.length == 0 && this.groups.g3.length == 0 && this.groups.g4.length == 0 && this.comment.length == 0)) {
                console.log('something wrong');
                this.mdSnackBar.open('Please select a g11 and add an Opinion', null, { duration: 2000 });
                return;
            }
        }
        var states = ["S1", "S2", "S3"];
        var groupsData = __WEBPACK_IMPORTED_MODULE_5_lodash__["chain"](this.groups).mapValues(function (gs, gt) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](gs, function (g, index) { return { groupType: gt, name: g['name'], state: states[index % 3] }; }); }).values().flatten().filter(function (d) { return d.name != ''; }).value();
        var postData = { "comment": this.comment, "groups": groupsData, "user": __WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */].getCurrentUser() };
        if (this.node) {
            this.loadingSpinnerService.show();
            this.restangular.one('article', this.node._id).customPUT(postData, 'edit').subscribe(function (res) {
                _this.loadingSpinnerService.hide();
                _this.closeDialog(res);
            }, function () {
                _this.loadingSpinnerService.hide();
            });
        }
        else {
            this.loadingSpinnerService.show();
            postData["article"] = this.articleInfo;
            this.restangular.all('article').post(postData).subscribe(function (res) {
                _this.loadingSpinnerService.hide();
                _this.closeDialog(res);
            }, function () {
                _this.loadingSpinnerService.hide();
            });
        }
    };
    ArticleFormDialog.prototype.share = function (platform) {
        switch (platform) {
            case 'TWITTER':
                console.log('platform is twitter');
                //let shareLink = 'https://twitter.com/home?status=http://beta.channelmum.com/chat/';
                var shareLink = 'https://twitter.com/home?status=' + this.url;
                console.log(shareLink);
                window.open(shareLink, '_blank', "width=500,height=500, top=250, left=400").focus();
                break;
            default:
                break;
        }
    };
    ArticleFormDialog.prototype.resetLink = function () {
        this.articleInfo = { valid: false };
        this.url = "";
    };
    ArticleFormDialog.prototype.onAddChipToGroup = function ($event, group, limit) {
        var _this = this;
        console.log(this.groups[group]);
        if ($event.target.tagName.toLowerCase() == 'md-icon')
            return; //  || (this.node == null && !this.articleInfo.valid) || (limit > 1 && this.groups[group].length >= limit)) return;
        var groupValue = [];
        if (this.groups[group].length > 0) {
            groupValue = this.groups[group].reduce(function (acc, item) {
                acc.push(item['name']);
                return acc;
            }, []);
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__articleGroupSelectorDialog_component__["a" /* ArticleGroupSelectorDialog */], {
            width: '400px',
            height: '250px',
            data: { group: group, value: this.groups[group], limit: limit, user: this.me._id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.groups[group] = result;
            }
        });
    };
    ArticleFormDialog.prototype.remove = function (groupName, groupType) {
        var _this = this;
        var index = this.groups[groupType].findIndex(function (group) { return group.name == groupName; });
        if (!this.me) {
            this.mdSnackBar.open('Please log in', null, { duration: 2000 });
            this.dialogRef.close(false);
            return;
        }
        var canRemove = false;
        if ((this.groups[groupType][index]['votes']['agrees'].length == 0 ||
            (this.groups[groupType][index]['votes']['agrees'].findIndex(function (user) { return user.toString() == _this.me._id; }) >= 0 && this.groups[groupType][index]['votes']['agrees'].length == 1))
            &&
                (this.groups[groupType][index]['votes']['disagrees'].length == 0 ||
                    (this.groups[groupType][index]['votes']['disagrees'].findIndex(function (user) { return user.toString() == _this.me._id; }) >= 0 && this.groups[groupType][index]['votes']['disagrees'].length == 1))) {
            canRemove = true;
        }
        if (!canRemove) {
            this.mdSnackBar.open('You can only change the values that others have not opinioned (Agreed/Disagreed) on', null, { duration: 2000 });
            return;
        }
        if (index >= 0) {
            this.groups[groupType].splice(index, 1);
        }
    };
    return ArticleFormDialog;
}());
ArticleFormDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'article-dialog',
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.css")],
        template: __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */]]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_authService__["a" /* AuthService */]) === "function" && _f || Object])
], ArticleFormDialog);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=articleFormDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n\tmargin: 0px;\n\ttext-align: center;\n}\n\n.form-field-row {\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;width:100%;height:100%;\">\n  <h3 class=\"title\">\n    Select a {{group}} value\n    <span class=\"pointer pull-right\" (click)=\"closeDialog(value)\"><md-icon>close</md-icon></span>\n  </h3>\n  <div style=\"margin-top:20px;margin-bottom: 20px;text-align: right;\">\n    <a>Suggest a new value</a>\n  </div>\n  <div class=\"form-field-row\">\n    <tag-input [(ngModel)]=\"value\"\n       [onlyFromAutocomplete]=\"true\"\n       placeholder=\"Type to search\"\n       secondaryPlaceholder=\"Select\"\n       (onRemove)=\"onItemRemoved($event)\"\n       (onAdd)=\"onItemAdded($event)\"\n       [maxItems]=\"limit\">\n        <tag-input-dropdown [autocompleteItems]=\"groups\" [limitItemsTo]=\"5\">\n        </tag-input-dropdown>\n    </tag-input>\n  </div>\n\n  <div style=\"position: absolute;left:0;bottom:0;right:0;\">\n    <button md-button class=\"pull-right\" aria-label=\"Select\" (click)=\"closeDialog(value)\">Finished</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleGroupSelectorDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
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







var ArticleGroupSelectorDialog = (function () {
    function ArticleGroupSelectorDialog(data, dialogRef, restangular, loadingSpinnerService, mdSnackBar) {
        this.dialogRef = dialogRef;
        this.restangular = restangular;
        this.loadingSpinnerService = loadingSpinnerService;
        this.mdSnackBar = mdSnackBar;
        this.value = [];
        this.limit = 1;
        this.group = [];
        this.groups = [];
        this.data = [];
        this.userId = '';
        //this.value = data.value ? data.value : [];
        this.data = data.value;
        this.limit = data.limit;
        this.group = data.group;
        this.userId = data.user;
        var groupValue = [];
        this.importValues();
    }
    ArticleGroupSelectorDialog.prototype.ngOnInit = function () {
        this.groups = (typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_dataService__["a" /* DataService */].groupDataSet[this.group]) == 'undefined' ? [] : __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_5__shared_services_dataService__["a" /* DataService */].groupDataSet[this.group], function (g) { return g.name; });
    };
    ArticleGroupSelectorDialog.prototype.closeDialog = function (result) {
        result = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](result, function (g) { return g.value ? g.value : g; });
        this.dialogRef.close(this.data);
    };
    ArticleGroupSelectorDialog.prototype.onItemRemoved = function (item) {
        var index = this.data.findIndex(function (group) { return group.name == item; });
        if (this.canRemove(item)) {
            this.data.splice(index, 1);
        }
        else {
            this.mdSnackBar.open('You can only change the values that others have not opinioned (Agreed/Disagreed) on', null, { duration: 2000 });
        }
        this.importValues();
    };
    ArticleGroupSelectorDialog.prototype.onItemAdded = function (item) {
        this.data.push({ name: item.value, votes: { agrees: [], disagrees: [] } });
        this.importValues();
    };
    ArticleGroupSelectorDialog.prototype.importValues = function () {
        if (this.data.length > 0) {
            this.value = this.data.reduce(function (acc, item) {
                acc.push(item['name']);
                return acc;
            }, []);
        }
        else {
            this.value = [];
        }
    };
    ArticleGroupSelectorDialog.prototype.canRemove = function (item) {
        var _this = this;
        var index = this.data.findIndex(function (group) { return group.name == item; });
        if (index < 0)
            return true;
        var canRemove = false;
        if ((this.data[index]['votes']['agrees'].length == 0 ||
            (this.data[index]['votes']['agrees'].findIndex(function (user) { return user.toString() == _this.userId; }) >= 0 && this.data[index]['votes']['agrees'].length == 1))
            &&
                (this.data[index]['votes']['disagrees'].length == 0 ||
                    (this.data[index]['votes']['disagrees'].findIndex(function (user) { return user.toString() == _this.userId; }) >= 0 && this.data[index]['votes']['disagrees'].length == 1))) {
            canRemove = true;
        }
        return canRemove;
    };
    ArticleGroupSelectorDialog.prototype.onRemoving = function (tag) {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
            var canRemove = false;
            if (canRemove) {
                observer.next(tag);
            }
            else {
                observer.complete();
            }
        });
    };
    return ArticleGroupSelectorDialog;
}());
ArticleGroupSelectorDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'article-group-selector-dialog',
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.css")],
        template: __webpack_require__("../../../../../src/app/modules/articles/articleGroupSelectorDialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */]) === "function" && _d || Object])
], ArticleGroupSelectorDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=articleGroupSelectorDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleView.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-bar {\n  padding: 0px;\n  background: rgb(241, 241, 241) !important;\n  height: 48px;\n  min-height: 48px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.title-bar .search {\n  position: relative;\n  margin: auto;\n  color: black;\n  width: 35%;\n  height: 40px;\n  border-radius: 5px;\n}\n\n.title-bar .search-text {\n  position: relative;\n  float: left;\n  color: black;\n  background: rgb(224, 224, 224);\n  width: 100%;\n  outline: none;\n  border: 0;\n  border-radius: 4px;\n  padding: 5px;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n.title-bar .search-icon {\n  font-size: 33px;\n  position: absolute;\n  z-index: 1;\n  padding:4px;\n  color: rgb(8, 80, 193);\n  cursor: pointer;\n  float: left;\n}\n.title-bar .clear-search {\n  font-size: 20px;\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  /*padding: 8px;\n  float: right;*/\n  right: 10px !important;\n  color: rgb(8, 80, 193);\n  font-size: 33px;\n  right: 5px;\n  top: 3px;\n}\n.title-bar .md-menu {\n  color: black;\n  padding: 0 21px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.title-bar .md-filter {\n  color: black;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.title-bar .md-more {\n  color: black;\n  padding: 0 21px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.articleView-container {\n  position: relative;\n}\n.btn-close {\n  position: absolute;\n  right: 10px;\n  top: 3px;\n}\n.articleMeta {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  width: 900px;\n  height: 600px;\n  background: #fff;\n}\n\n.articleMeta .header {\n  border: 1px solid #c2c5c7;\n  border-bottom: 0px;\n  height: 100px;\n}\n\n\n.articleMeta .title {\n  padding: 0px;\n  font-size: 18px;\n  float: left;\n  margin-top: 20px;\n  color: #238fce;\n}\n.articleMeta .toolbar {\n  width: 100%;\n  height: 30px;\n  font-size: 13px;\n  border-right: 1px solid #c2c5c7;\n}\n.articleMeta .toolbar .articleSource{\n  width: 33%;\n}\n.articleMeta .toolbar .articleSource img {\n  width: 25px;\n  height: 25px;\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\n.articleMeta .toolbar .articleSource .siteTitle {\n  line-height: 27px;\n}\n.articleMeta .toolbar .articleSource .user {\n  line-height: 27px;\n}\n\n.articleMeta .toolbar .articleTime {\n  color: #737373;\n  text-align: center;\n  width: 34%;\n}\n.articleMeta .toolbar .articleTime .time {\n  line-height: 27px;\n}\n.articleMeta .toolbar .articleTime .articleId {\n  line-height: 27px;\n}\n.articleMeta .toolbar .buttons {\n  width: 33%;\n}\n\n.articleMeta .toolbar .buttons .edit {\n  color: #2a6ba3;\n  font-weight: bold;\n  text-decoration: underline;\n  margin-right: 20px;\n  line-height: 27px;\n}\n.articleMeta .toolbar .buttons .more {\n  margin-right: 10px;\n}\n.articleMeta .contents {\n  width: 100%;\n  height: 470px;\n  overflow-y: auto;\n  border:1px solid #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleView.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-toolbar [filter]=\"query\" (onFilterChanged)=\"onFilterChanged(filter)\"></layout-toolbar>\n\n<div class=\"articleView-container\">\n  <div id=\"svgArticleView\" [style.width.px]=\"width\" [style.height.px]=\"height\"></div>\n  <span class=\"btn-close pointer pull-right\" (click)=\"closeArticleView()\"><md-icon>close</md-icon></span>\n  <div class=\"articleMeta\" (window:resize)=\"onResize($event)\" *ngIf=\"article != null\">\n    <div class=\"header\">\n        <div class=\"title\">{{article.title}}</div>\n    </div>\n    <div class=\"toolbar\">\n      <div class=\"articleSource pull-left\">\n        <img src=\"{{ article.articleSourceIcon }}\" />\n        <span class=\"siteTitle\">{{ article.articleSource }}</span>\n        &nbsp;&nbsp;|&nbsp;&nbsp;\n        <span class=\"user\">{{ article.users[0].name }}</span>\n      </div>\n      <div class=\"articleTime pull-left\">\n        <span class=\"time\">{{ article.time }}</span>\n        &nbsp;&nbsp;|&nbsp;&nbsp;\n        <span class=\"articleId\">{{ article.slug }}</span>\n      </div>\n      <div class=\"buttons pull-left\">\n        <span class=\"pointer pull-right more\" [mdMenuTriggerFor]=\"menuArticle\"><md-icon>more_horiz</md-icon></span>\n        <md-menu #menuArticle=\"mdMenu\">\n          <button md-menu-item (click)=\"bookmarkPost()\" *ngIf=\"currentUser != null\">\n            <span *ngIf=\"article.bookmarked\">Bookmarked</span>\n            <span *ngIf=\"!article.bookmarked\">Bookmark</span>\n          </button>\n          <button md-menu-item (click)=\"openArticleSource()\">\n            <!-- <md-icon>voicemail</md-icon> -->\n            <span>Open Article Source</span>\n          </button>\n          <button md-menu-item (click)=\"copyArticleLink()\">\n            <span>Copy Article Link</span>\n          </button>\n          <button md-menu-item (click)=\"copyArticleId()\">\n            <span>Copy Article Id</span>\n          </button>\n          <button md-menu-item>\n            <span >Share Post</span>\n          </button>\n          <button md-menu-item>\n            <span >Report Post</span>\n          </button>\n        </md-menu>\n        <span class=\"pointer pull-right edit\" (click)=\"editArticle()\">Add your Opinion</span>\n      </div>\n    </div>\n    <div class=\"contents\" [innerHTML]=\"article.bodyHtml\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/articles/articleView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_D3Service__ = __webpack_require__("../../../../../src/app/shared/services/D3Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__ = __webpack_require__("../../../../../src/app/shared/services/articleService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ArticleViewComponent = (function () {
    function ArticleViewComponent(activatedRouter, router, restangular, dialog, location, loadingSpinnerService, mdSnackBar, authService) {
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.restangular = restangular;
        this.dialog = dialog;
        this.location = location;
        this.loadingSpinnerService = loadingSpinnerService;
        this.mdSnackBar = mdSnackBar;
        this.authService = authService;
        this.nodes = [];
        this.article = null;
        this.articleSlug = '';
        this.svgSize = { width: 0, height: 0 };
        this.query = {
            search: '',
            views: '',
            periodStart: null,
            periodEnd: null,
            g11: null,
            g12: null,
            g13: null,
            stateView: false
        };
        this.d3Service = new __WEBPACK_IMPORTED_MODULE_7__shared_services_D3Service__["a" /* D3Service */]();
        this.currentUser = __WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */].getCurrentUser();
    }
    ArticleViewComponent.prototype.ngOnInit = function () {
        this.d3Service.init('#svgArticleView', false, { width: 0, height: 0 });
        this.d3Service.on('click', this.nodeClick, this);
        this.d3Service.on('dblclick', this.nodeDblClick, this);
        this.d3Service.on('agreedisagree', this.showAgreeDialog, this);
        this.d3Service.on('drilldown', this.switchFocusView, this);
        this.resizeWindow();
        this.loadParamsFromUrl();
        this.start();
    };
    ArticleViewComponent.prototype.loadParamsFromUrl = function () {
        if (this.activatedRouter.snapshot.paramMap.has('slug')) {
            this.articleSlug = this.activatedRouter.snapshot.paramMap.get('slug');
        }
        else {
            this.closeArticleView();
        }
    };
    ArticleViewComponent.prototype.onFilterChanged = function () {
        this.router.navigate(['/'], { queryParams: __WEBPACK_IMPORTED_MODULE_3_lodash__["pickBy"](this.query, function (q) { return q && q != ''; }) });
    };
    ArticleViewComponent.prototype.closeArticleView = function () {
        this.location.back();
    };
    ArticleViewComponent.prototype.start = function () {
        var _this = this;
        this.loadingSpinnerService.show();
        var userId = this.currentUser != null ? this.currentUser._id : 'none';
        this.restangular.one('article', this.articleSlug).customGET('user/' + userId).subscribe(function (res) {
            _this.loadingSpinnerService.hide();
            _this.article = res;
            _this.article.time = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.article.createdAt).fromNow();
            _this.nodes = __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].initNodes([_this.article], 'ARTICLE', false, null);
            _this.d3Service.start(_this.nodes, 0);
        }, function (err) {
            _this.loadingSpinnerService.hide();
        });
    };
    ArticleViewComponent.prototype.onResize = function ($event) {
        this.resizeWindow();
    };
    ArticleViewComponent.prototype.resizeWindow = function (width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (width == 0) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        this.svgSize.width = width;
        this.svgSize.height = height + 100;
        this.d3Service.resize(this.svgSize);
    };
    ArticleViewComponent.prototype.openArticleSource = function () {
        __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].openArticleSource(this.article);
    };
    ArticleViewComponent.prototype.copyArticleLink = function () {
        __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].copyArticleLink(this.article, this.mdSnackBar);
    };
    ArticleViewComponent.prototype.copyArticleId = function () {
        __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].copyArticleId(this.article, this.mdSnackBar);
    };
    ArticleViewComponent.prototype.editArticle = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].popupArticleForm(this.dialog, this.article, function (result) {
            if (result)
                _this.start();
        });
    };
    ArticleViewComponent.prototype.nodeClick = function (node, elType) {
        this.showAgreeDialog(node);
    };
    ArticleViewComponent.prototype.nodeDblClick = function (node, elType) {
        this.switchFocusView(node, elType);
    };
    ArticleViewComponent.prototype.showAgreeDialog = function (node) {
        __WEBPACK_IMPORTED_MODULE_8__shared_services_articleService__["a" /* ArticleService */].popupAgreeDialog(node, this.dialog, function (result) { });
    };
    ArticleViewComponent.prototype.bookmarkPost = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */].getCurrentUser() != null) {
            this.loadingSpinnerService.show();
            this.restangular.one('user', __WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */].getCurrentUser()._id).customPOST(null, 'bookmark/' + this.article._id.toString()).subscribe(function (res) {
                _this.loadingSpinnerService.hide();
                _this.start();
            }, function () {
                _this.loadingSpinnerService.hide();
            });
        }
        else {
            this.mdSnackBar.open('Please log in', null, { duration: 6000 });
        }
    };
    ArticleViewComponent.prototype.switchFocusView = function (node, elType) {
        var nodeType = node.nodeData.type;
        if (nodeType == 'comment' || nodeType == 'article')
            return;
        var params = { currentView: 'FOCUS' };
        switch (true) {
            case nodeType == 'user':
                params['user'] = node._id;
                break;
            case nodeType == 'location':
                params['location'] = node._id;
                break;
            case nodeType == 'group':
                params['group'] = node.group._id;
                break;
        }
        this.router.navigate(['/'], { queryParams: params });
    };
    return ArticleViewComponent;
}());
ArticleViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'article-view-detail',
        template: __webpack_require__("../../../../../src/app/modules/articles/articleView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/articles/articleView.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_restangular__["Restangular"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdSnackBar */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_authService__["a" /* AuthService */]) === "function" && _h || Object])
], ArticleViewComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=articleView.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n.column {\n  margin: 0px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n}\n.user {\n  font-size: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n.title {\n  float: right;\n  padding: 13px;\n  font-size: 15px;\n}\n\n/*md-option {\n  font-size: 10px;\n}*/\n.container {\n  overflow-y: scroll;\n  width: 100%;\n  height: 950px;\n}\n\n\n.mat-slide-toggle-thumb {\n  background: rgb(11, 82, 193);\n}\n.add-btn{\n  position: absolute;\n  right: 8px;\n  left: auto;\n  top: auto;\n  bottom: 10px;\n  margin-right: 8px;\n}\n.ads-btn{\n  position: absolute;\n  top: auto;\n  right: auto;\n  left: 5px;\n  bottom: 20px;\n\n  display:none; /* removed for now */\n}\n.filter-btn{\n  position: absolute;\n  bottom: auto;\n  right: auto;\n  left: 0px;\n  top: 72px;\n\n  display:none; /* removed for now */\n}\n\n.social-btn {\n  position: absolute;\n  left: 0;\n  bottom: 80px;\n  margin-left: 10px;\n}\n.social-btn>a {\n  position: relative;\n  border-radius:50%;\n  padding:10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 0 2px;\n  font-size:30px;\n  left: 10px;\n  display: block;\n}\n.social-btn>a:hover {\n  opacity: 0.8;\n}\n.fa-facebook {\n  background: #3B5998;\n}\n.fa-twitter {\n  background: #55ACEE;\n}\n.fa-google {\n  background: #dd4b39;\n}\n.fa-linkedin {\n  background: #007bb5;\n}\n.status-view {\n  margin-right: 25px;\n}\n.history-view {\n  margin-right: 15px;\n}\n.mat-select-placeholder {\n  position: absolute !important;\n  color:red !important;\n}\n\n\n\n.filtersDialog {\n  position: absolute;\n  left: -20px;\n  top: 175px;\n  width: 310px;\n}\n\n\n/*Common styles*/\n\n.btn-left-margin {\n  margin-left: 18px;\n}\n\n\n\n\n\n\n\n.article_container {\n  position: absolute;\n  background: #fff;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-toolbar [filter]=\"query\" [pageId]=\"pageId\" (onFilterChanged)=\"onFilterChanged(filter)\"></layout-toolbar>\n\n<div class=\"column\" (window:resize)=\"onResize($event)\">\n\t<div id=\"svg\" [style.width.px]=\"svgSize.width\" [style.height.px]=\"svgSize.height\" (click)='toggleOffAll()'>\n\t</div>\n</div>\n<button md-fab class=\"add-btn\" mdTooltip=\"Add article\" mdTooltipPosition=\"left\" (click)=\"addArticle()\" color=\"primary\"><md-icon>add</md-icon></button>\n<button md-fab class=\"ads-btn btn-left-margin\" mdTooltip=\"Adsense\" mdTooltipPosition=\"right\" (click)=\"toggleSocial()\" color=\"primary\">Ads</button>\n<div class='social-btn' [hidden]=\"!showSocialMenu\">\n  <a href=\"#\" mdTooltip=\"Facebook\" mdTooltipPosition=\"right\" class=\"fa fa-facebook\"></a>\n  <a href=\"#\" mdTooltip=\"Twitter\" mdTooltipPosition=\"right\" class=\"fa fa-twitter\"></a>\n  <a href=\"#\" mdTooltip=\"Google\" mdTooltipPosition=\"right\" class=\"fa fa-google\"></a>\n  <a href=\"#\" mdTooltip=\"Linkedin\" mdTooltipPosition=\"right\" class=\"fa fa-linkedin\"></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__ = __webpack_require__("../../../../../src/app/shared/services/articleService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_D3Service__ = __webpack_require__("../../../../../src/app/shared/services/D3Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_components_confirmDialog_confirmDialog_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LandingComponent = (function () {
    function LandingComponent(activatedRouter, router, restangular, dialog, location, loadingSpinnerService, _sharedService, mdSnackBar, authService) {
        var _this = this;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.restangular = restangular;
        this.dialog = dialog;
        this.location = location;
        this.loadingSpinnerService = loadingSpinnerService;
        this._sharedService = _sharedService;
        this.mdSnackBar = mdSnackBar;
        this.authService = authService;
        this.title = 'Landing Page';
        this.d3Service = null;
        this.showSocialMenu = false;
        this.svgSize = {
            width: 0,
            height: 0
        };
        this.query = {
            currentView: 'DEFAULT',
            article: null,
            user: null,
            location: null,
            group: null,
            // filter
            search: '',
            views: '',
            periodStart: null,
            periodEnd: null,
            g11: null,
            g12: null,
            g13: null,
            stateView: false,
            bookmarkedBy: null,
            bookmarks: false
        };
        this.pageId = 'PAGE_LANDING';
        this.d3Service = new __WEBPACK_IMPORTED_MODULE_6__shared_services_D3Service__["a" /* D3Service */]();
        this._sharedService.action$.subscribe(function (data) {
            if (data['action'] == 'userposts')
                _this.showUserPosts(data['data']);
            else if (data['action'] == 'bookmarks')
                _this.showBookmarks();
        });
        this.currentUser = __WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */].getCurrentUser();
        this.query.bookmarkedBy = (this.currentUser != null) ? this.currentUser._id : null;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.d3Service.init('#svg');
        this.resizeWindow();
        this.d3Service.on('click', this.nodeClick, this);
        this.d3Service.on('dblclick', this.nodeDblClick, this);
        this.d3Service.on('agreedisagree', this.showAgreeDialog, this);
        this.d3Service.on('drilldown', this.switchFocusView, this);
        this.d3Service.on('bookmark_post', this.bookmarkPost, this);
        this.d3Service.on('open_article_source', this.openArticleSource, this);
        this.d3Service.on('copy_article_link', this.copyArticleLink, this);
        this.d3Service.on('copy_article_id', this.copyArticleId, this);
        this.d3Service.on('share_post', this.sharePost, this);
        this.d3Service.on('report_post', this.reportPost, this);
        this.d3Service.on('delete_article', this.deleteArticle, this);
        this.d3Service.on('article_navigate', this.onArticleNavigate, this);
        this.popStateSubscription = this.location.subscribe(function (event) {
            _this.onPageBack();
        });
        this.init();
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        this.popStateSubscription.unsubscribe();
    };
    LandingComponent.prototype.init = function () {
        this.loadParamsFromUrl();
        this.start();
    };
    LandingComponent.prototype.resetFilters = function () {
        this.query = {
            currentView: 'DEFAULT',
            article: null,
            user: null,
            location: null,
            group: null,
            // filter
            search: '',
            views: '',
            periodStart: null,
            periodEnd: null,
            g11: null,
            g12: null,
            g13: null,
            stateView: false,
            bookmarkedBy: null,
            bookmarks: false
        };
    };
    LandingComponent.prototype.loadParamsFromUrl = function () {
        var queryParams = Object.assign({}, this.activatedRouter.snapshot.queryParams);
        for (var q in this.query) {
            if (queryParams[q])
                this.query[q] = queryParams[q];
        }
    };
    LandingComponent.prototype.setParamsToUrl = function () {
        var queryParams = Object.assign({}, this.activatedRouter.snapshot.queryParams);
        for (var q in this.query) {
            if (this.query[q] && this.query[q] != '')
                queryParams[q] = this.query[q];
            else
                delete queryParams[q];
        }
        this.router.navigate(['.'], { queryParams: queryParams });
    };
    LandingComponent.prototype.onResize = function ($event) {
        this.resizeWindow();
    };
    LandingComponent.prototype.resizeWindow = function (width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (width == 0) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        this.svgSize.width = width;
        this.svgSize.height = height - 100;
        this.d3Service.resize(this.svgSize);
    };
    LandingComponent.prototype.onFilterChanged = function (filter) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_lodash__["each"](filter, function (v, k) { return _this.query[k] = v; });
        this.query['article'] = null;
        this.setParamsToUrl();
        this.start();
    };
    LandingComponent.prototype.getQuery = function () {
        var params = JSON.parse(JSON.stringify(this.query));
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["pickBy"](params, function (q) { return q && q != ''; });
    };
    LandingComponent.prototype.draw = function (articles) {
        this.data = articles;
        this.nodes = __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].initNodes(articles, this.query['currentView'], this.query['stateView'], this.query);
        console.log('______________________ nodes _______________________');
        console.log(this.nodes);
        this.d3Service.start(this.nodes, this.getArticleIndex(this.query.article));
    };
    LandingComponent.prototype.getArticleIndex = function (slug) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].slug == slug)
                return i;
        }
        return 0;
    };
    LandingComponent.prototype.start = function (refreshData) {
        var _this = this;
        if (refreshData === void 0) { refreshData = true; }
        if (refreshData) {
            this.loadingSpinnerService.show();
            var apiArticles = this.restangular.all('article');
            apiArticles.customGET('search', this.getQuery()).subscribe(function (result) {
                _this.draw(result);
                _this.loadingSpinnerService.hide();
                if (result.length == 0) {
                    _this.mdSnackBar.open('Search/Filter did not find matching Articles.', 'Showing all Articles', { duration: 10000 })
                        .onAction().subscribe(function () {
                        _this.query.g11 = [];
                        _this.query.g12 = [];
                        _this.query.g13 = [];
                        _this.query.periodStart = null;
                        _this.query.periodEnd = null;
                        _this.query.search = '';
                        _this.setParamsToUrl();
                        _this.start();
                    });
                }
            }, function () {
                _this.loadingSpinnerService.hide();
            });
        }
        else {
            this.draw(this.data);
        }
    };
    LandingComponent.prototype.showArticle = function (article) {
        this.router.navigate(['/article', article.slug]);
    };
    LandingComponent.prototype.toggleOffAll = function () {
        this.showSocialMenu = false;
    };
    LandingComponent.prototype.onArticleNavigate = function (articleIndex) {
        this.query.article = this.data[articleIndex].slug;
        this.setParamsToUrl();
    };
    LandingComponent.prototype.nodeClick = function (node, elType) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */].getCurrentUser() && elType !== 'textsArticleMenu') {
            console.log('eltype: ' + elType);
            if (elType == 'textsEllipse' || elType == 'textsRect') {
                this.mdSnackBar.open('Please login to agree/disagree', null, { duration: 6000 });
            }
            else if (elType == 'editLinksArticle') {
                this.mdSnackBar.open('Please login to add your opinion', null, { duration: 6000 });
            }
            else {
                this.mdSnackBar.open('Please login', null, { duration: 6000 });
            }
        }
        else {
            if (node.nodeData.g == 'g0' && elType == 'editLinksArticle') {
                __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].popupArticleForm(this.dialog, node, function (result) {
                    if (result)
                        _this.start();
                });
            }
            if (node.nodeData.g == 'g0' && (elType == 'tspansArticleTitle1') || (elType == 'tspansArticleTitle2')) {
                this.showArticle(node);
            }
            else {
                this.showAgreeDialog(node);
            }
        }
    };
    LandingComponent.prototype.nodeDblClick = function (node, elType) {
        this.switchFocusView(node, elType);
    };
    LandingComponent.prototype.showAgreeDialog = function (node) {
        __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].popupAgreeDialog(node, this.dialog, function (result) {
        });
    };
    LandingComponent.prototype.switchFocusView = function (node, elType) {
        var nodeType = node.nodeData.type;
        if (nodeType == 'comment' || nodeType == 'article')
            return;
        this.query['currentView'] = 'FOCUS';
        this.query['user'] = null;
        this.query['location'] = null;
        this.query['group'] = null;
        this.query['article'] = null;
        switch (true) {
            case nodeType == 'user':
                this.query['user'] = node._id;
                break;
            case nodeType == 'location':
                this.query['location'] = node._id;
                break;
            case nodeType == 'group':
                this.query['group'] = node.group._id;
                break;
        }
        this.setParamsToUrl();
        this.start();
    };
    LandingComponent.prototype.onPageBack = function () {
        if (this.query['currentView'] == 'DEFAULT') {
            this.location.back();
        }
        else {
            this.query['currentView'] = 'DEFAULT';
            this.query['user'] = null;
            this.query['location'] = null;
            this.query['group'] = null;
            this.query['article'] = null;
            this.setParamsToUrl();
            this.start();
        }
    };
    LandingComponent.prototype.addArticle = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */].getCurrentUser()) {
            this.mdSnackBar.open('Please login to add an article', null, { duration: 6000 });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].popupArticleForm(this.dialog, null, function (result) {
                if (result.action === 'login') {
                    _this._sharedService.emitAction({ action: 'login', data: null });
                }
                else {
                    _this.query.currentView = 'DEFAULT';
                    _this.query.article = result.slug;
                    _this.query.user = null;
                    _this.query.location = null;
                    _this.query.group = null;
                    _this.query.search = '';
                    _this.query.views = '';
                    _this.query.periodStart = null;
                    _this.query.periodEnd = null;
                    _this.query.g11 = null;
                    _this.query.g12 = null;
                    _this.query.g13 = null;
                    _this.setParamsToUrl();
                    _this.start();
                }
            });
        }
    };
    LandingComponent.prototype.toggleSocial = function () {
        this.showSocialMenu = !this.showSocialMenu;
    };
    LandingComponent.prototype.bookmarkPost = function (node) {
        var _this = this;
        if (this.currentUser != null) {
            this.loadingSpinnerService.show();
            this.restangular.one('user', this.currentUser._id).customPOST(null, 'bookmark/' + node._id.toString()).subscribe(function (res) {
                _this.loadingSpinnerService.hide();
                _this.start();
            }, function () {
                _this.loadingSpinnerService.hide();
            });
        }
        else {
            this.mdSnackBar.open('Please log in', null, { duration: 6000 });
        }
    };
    LandingComponent.prototype.openArticleSource = function (node) {
        __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].openArticleSource(node);
    };
    LandingComponent.prototype.copyArticleLink = function (node) {
        __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].copyArticleLink(node, this.mdSnackBar);
    };
    LandingComponent.prototype.copyArticleId = function (node) {
        __WEBPACK_IMPORTED_MODULE_5__shared_services_articleService__["a" /* ArticleService */].copyArticleId(node, this.mdSnackBar);
    };
    LandingComponent.prototype.sharePost = function (node) {
    };
    LandingComponent.prototype.reportPost = function (node) {
    };
    LandingComponent.prototype.deleteArticle = function (node) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__shared_components_confirmDialog_confirmDialog_component__["a" /* ConfirmDialog */], {
            width: '400px',
            height: '200px',
            data: { title: 'Delete Article',
                okButton: 'Yes',
                subject: 'Do you really want to delete this article?',
                cancelButton: 'Cancel',
                action: 'delete-article'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                switch (result.action) {
                    case 'delete-article':
                        _this.restangular.one('article', node._id).customDELETE(null).subscribe(function (result) {
                            console.log('delete article:' + result);
                            _this.loadingSpinnerService.hide();
                            _this.start();
                        }, function () {
                            _this.loadingSpinnerService.hide();
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    };
    LandingComponent.prototype.showUserPosts = function (userId) {
        this.resetFilters();
        this.query['user'] = userId;
        this.setParamsToUrl();
        this.start();
    };
    LandingComponent.prototype.showBookmarks = function () {
        this.resetFilters();
        this.query['bookmarks'] = true;
        this.setParamsToUrl();
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'landing',
        template: __webpack_require__("../../../../../src/app/modules/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/landing/landing.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__["Restangular"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdSnackBar */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_authService__["a" /* AuthService */]) === "function" && _j || Object])
], LandingComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/layout/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import \"node_modules/loaders.css/src/loaders\";*/\n\n.container {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.spinnerContainer {\n\tz-index:9999;\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tright:0;\n\tbottom:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/layout/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<div [hidden]=\"!loadingSpinnerService.bShow\" class=\"spinnerContainer\">\n\t<ngx-loading [show]=\"true\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/layout/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(loadingSpinnerService, restangular) {
        this.loadingSpinnerService = loadingSpinnerService;
        this.restangular = restangular;
        this.loadInitialData();
    }
    AppComponent.prototype.loadInitialData = function () {
        // load group data
        this.restangular.all('group').getList().subscribe(function (groups) {
            __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].groupDataSet = __WEBPACK_IMPORTED_MODULE_4_lodash__["groupBy"](groups, 'groupType');
        }, function () {
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/modules/layout/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/layout/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/layout/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmd-toolbar {\n  padding: 0 0 0 5px !important;\n}\n\n.page-title {\n  width: 33%;\n  text-align: center;\n}\n\n.md-elevation-z3 {\n  height: 48px;\n  background: rgba(245, 245, 245, 0.71) !important;\n  padding: 5px 0 0 5px;\n  min-height: 48px;\n}\n\n.md-elevation-z3 .mat-toolbar-row {\n\tmin-height: 48px;\n}\n\n.logo-span {\n\tfloat:left;\n  width: 33%;\n\tmargin-left: 16px;\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n}\n\n.menu-span {\n\tfloat:right;\n  width: 33%;\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n  margin-right: 21px;\n}\n\n.menu-span .user-avatar-small {\n  margin-left: auto;\n}\n\n.menu-header {\n    text-align: center;\n    display: block;\n    padding: 8px 0;\n    margin: 0 15px;\n    border-bottom: 1px solid #aaa;\n}\n\n\ni {\n\tfont-size: 36px;\n}\n\n.login-popup-container {\n\tposition: absolute;\n  z-index: 9999;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.login-popup-container .overlay {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.login-popup-container .popup {\n\tposition: absolute;\n\tpadding: 15px;\n  right: 0;\n  top: 48px;\n  width: 400px;\n  height: 250px;\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.login-popup-container button {\n\twidth: 350px;\n\theight: 50px;\n\tmargin-top: 5px;\n\ttext-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"md-elevation-z3\">\n  <span class=\"logo-span\" ><i class=\"material-icons user logo\">stars</i><span class=\"title\">{{title}}</span></span>\n  <span class=\"page-title\">{{pageTitle}}</span>\n  <span class=\"menu-span\" style=\"display: flex; justify-content: flex-end;\" >\n    <span *ngIf=\"currentUser == null\"><i class=\"material-icons user pointer\" (click)=\"showLogin(!bShowLoginPopup)\">account_circle</i></span>\n    <span *ngIf=\"currentUser != null\" [mdMenuTriggerFor]=\"menu\" class=\"user-avatar-small pointer\"><img src=\"{{ currentUser.photo }}\" /></span>\n    <span><i class=\"material-icons user pointer\">help_outline</i></span>\n  </span>\n</md-toolbar>\n\n<md-menu #menu=\"mdMenu\">\n  <span *ngIf=\"currentUser !=null\" class=\"menu-header\">{{currentUser.alias}}</span>\n  <button md-menu-item (click)=\"myProfile()\">\n    <md-icon>dialpad</md-icon>\n    My Profile\n  </button>\n  <button md-menu-item (click)=\"myPosts()\">\n    <md-icon>dialpad</md-icon>\n    My Posts\n  </button>\n  <button md-menu-item>\n    <md-icon>help</md-icon>\n    Help\n  </button>\n  <button md-menu-item (click)=\"logout()\">\n    <md-icon>notifications_off</md-icon>\n    <span>Sign out</span>\n  </button>\n</md-menu>\n\n<div class=\"login-popup-container\" *ngIf=\"bShowLoginPopup\">\n  <div class=\"overlay\" (click)=\"showLogin(false)\"></div>\n  <div class=\"popup\">\n    <h3 class=\"title\">Choose how you want to proceed:</h3>\n    <button md-button class=\"button-login-twitter\" (click)=\"login('TWITTER')\">CONTINUE WITH TWITTER</button>\n    <button md-button class=\"button-login-facebook\" (click)=\"login('FACEBOOK')\">CONTINUE WITH FACEBOOK</button>\n    <button md-button class=\"button-login-google\" (click)=\"login('GOOGLE')\">CONTINUE WITH GOOGLE</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
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
    function HeaderComponent(authService, _sharedService, router) {
        var _this = this;
        this.authService = authService;
        this._sharedService = _sharedService;
        this.router = router;
        this.title = 'Placeholder for now';
        this.pageTitle = '';
        this.currentUser = null;
        this.bShowLoginPopup = false;
        this.authSubscription = null;
        this._sharedService.action$.subscribe(function (data) {
            if (data['action'] == 'login')
                _this.showLogin(true);
            else if (data['action'] == 'bookmarks')
                _this.pageTitle = 'Bookmarks';
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */].getCurrentUser();
        this.authSubscription = this.authService.subscribe(function (res) {
            _this.currentUser = __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */].getCurrentUser();
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent.prototype.showLogin = function (bShow) {
        if (this.currentUser == null) {
            this.bShowLoginPopup = bShow;
        }
    };
    HeaderComponent.prototype.login = function (provider) {
        this.authService.login(provider);
        this.showLogin(false);
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.currentUser = null;
    };
    HeaderComponent.prototype.myProfile = function () {
        console.log('my profile');
        this.router.navigate(['/profile']);
    };
    HeaderComponent.prototype.myPosts = function () {
        this._sharedService.emitAction({ action: 'userposts', data: __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */].getCurrentUser()._id });
        this.pageTitle = 'My Posts';
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/modules/layout/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/layout/header.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_authService__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/layout/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search {\n  position: relative;\n  margin: auto;\n  color: black;\n  width: 35%;\n  height: 40px;\n  border-radius: 5px;\n}\n\n/* menu bar color : 241; */\n\n.search-text {\n  position: relative;\n  float: left;\n  color: black;\n  background: rgb(224, 224, 224);\n  width: 100%;\n  outline: none;\n  border: 0;\n  border-radius: 4px;\n  padding: 5px;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n.search-icon {\n  font-size: 33px;\n  position: absolute;\n  z-index: 1;\n  padding:4px;\n  color: rgb(8, 80, 193);\n  cursor: pointer;\n  float: left;\n}\n.clear-search {\n  font-size: 20px;\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  /*padding: 8px;\n  float: right;*/\n  right: 10px !important;\n  color: rgb(8, 80, 193);\n  font-size: 33px;\n  right: 5px;\n  top: 3px;\n}\n\n.title-bar {\n  padding: 0px;\n  background: rgb(241, 241, 241) !important;\n  height: 48px;\n  min-height: 48px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n\n.md-menu {\n  color: black;\n  padding: 0 21px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.md-filter {\n  color: black;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.md-more {\n  color: black;\n  padding: 0 21px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n\n.filter-panel-container {\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.filter-panel-container .mat-card-title {\n  font-size: 18px;\n}\n\n.filter-panel-container .filter-item {\n  width: 25%;\n  float: left;\n}\n\n.filter-panel-container .status-view {\n  width: 100%;\n}\n\n.filter-panel-container .action-container {\n  /*position: absolute;*/\n  /*left: 0;\n  right: 0;\n  bottom: 10px;*/\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/layout/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"title-bar\">\n  <span class=\"md-menu\"><md-icon>dehaze</md-icon></span>\n  <div class=\"search\" >\n    <md-icon class=\"search-icon\" mdTooltip=\"Search\" mdTooltipPosition=\"below\">search</md-icon>\n    <input type=\"text\" class=\"search-text\" placeholder=\"Search\" [(ngModel)]=\"filter.search\" (ngModelChange)='onQuerySearchTextChanged($event)' name='search' #search >\n    <span [hidden]=\"filter.search == ''\"><md-icon class=\"clear-search\" (click)=\"clearSearch()\" mdTooltip=\"Clear search\" mdTooltipPosition=\"below\">clear</md-icon></span>\n  </div>\n  <div class=\"pull-right\">\n    <span class=\"pointer md-filter\" (click)=\"onToggleFilterPanel()\"><md-icon>filter_list</md-icon></span>\n    <span class=\"pointer md-more\" [matMenuTriggerFor]=\"menuLanding\" *ngIf=\"pageId == 'PAGE_LANDING'\"><md-icon>more_horiz</md-icon></span>\n    <span class=\"pointer md-more\" [matMenuTriggerFor]=\"menuProfile\" *ngIf=\"pageId == 'PAGE_PROFILE'\"><md-icon>more_horiz</md-icon></span>\n  </div>\n\n  <md-menu #menuLanding=\"matMenu\">\n    <button mat-menu-item (click)=\"copyLink()\">Copy Link</button>\n    <button mat-menu-item (click)=\"sharePage()\">Share Page</button>\n  </md-menu>\n\n  <md-menu #menuProfile=\"matMenu\">\n    <button mat-menu-item (click)=\"showBookmarks()\">Show Bookmarks</button>\n    <button mat-menu-item (click)=\"showPosts()\">Show My Posts</button>\n  </md-menu>\n\n</md-toolbar>\n\n<div class=\"filter-panel-container\" *ngIf=\"showFilterPanel\">\n  <div class=\"action-container\">\n    <button md-button class=\"pull-left\" (click)=\"resetFilters()\">Reset Filters</button>\n    <button md-button class=\"pull-right\" (click)=\"applyFilters()\">Apply Filters</button>\n    <button md-button class=\"pull-right\" (click)=\"onToggleFilterPanel()\">Cancel</button>\n  </div>\n  <div class=\"clear\"></div>\n  <div class=\"filter-item filter-groups\" *ngFor=\"let g of ['g11', 'g12', 'g13']\">\n    <md-card>\n      <md-card-header>\n        <md-card-title *ngIf=\"g == 'g11'\">Select Theme</md-card-title>\n        <md-card-title *ngIf=\"g == 'g12'\">Select group12</md-card-title>\n        <md-card-title *ngIf=\"g == 'g13'\">Select group13</md-card-title>\n      </md-card-header>\n      <md-card-content>\n        <tag-input [(ngModel)]=\"filterTemp[g]\"\n           [onlyFromAutocomplete]=\"true\"\n           placeholder=\"Type to search\"\n           secondaryPlaceholder=\"Select\">\n            <tag-input-dropdown [autocompleteItems]=\"groupSet[g]\" [limitItemsTo]=\"5\" [showDropdownIfEmpty]=\"true\">\n            </tag-input-dropdown>\n        </tag-input>\n      </md-card-content>\n    </md-card>\n  </div>\n  <div class=\"filter-item filter-others\">\n    <md-card>\n      <md-card-header>\n        <md-card-title>Select Date Range</md-card-title>\n      </md-card-header>\n      <md-card-content>\n        <md-form-field>\n          <input mdInput [mdDatepicker]=\"pickerStart\" placeholder=\"From Date\" [(ngModel)]=\"filterTemp.periodStart\">\n          <md-datepicker-toggle mdSuffix [for]=\"pickerStart\"></md-datepicker-toggle>\n          <md-datepicker #pickerStart startView=\"year\"></md-datepicker>\n        </md-form-field>\n        <md-form-field>\n          <input mdInput [mdDatepicker]=\"pickerEnd\" placeholder=\"To Date\" [(ngModel)]=\"filterTemp.periodEnd\">\n          <md-datepicker-toggle mdSuffix [for]=\"pickerEnd\"></md-datepicker-toggle>\n          <md-datepicker #pickerEnd startView=\"year\"></md-datepicker>\n        </md-form-field>\n      </md-card-content>\n    </md-card>\n    <md-card>\n      <md-card-header>\n        <md-card-title>Sort By</md-card-title>\n      </md-card-header>\n      <md-card-content>\n        <md-select placeholder=\"Views\" name=\"views\"  class=\"status-view\" [(ngModel)]=\"filterTemp.views\">\n          <md-option *ngFor=\"let status of filterViewsOptions\" [value]=\"status.value\">\n            {{status.title}}\n          </md-option>\n        </md-select>\n      </md-card-content>\n    </md-card>\n    <md-card>\n      <md-card-header>\n        <md-card-title>State View</md-card-title>\n        <md-slide-toggle\n          class=\" pull-right\"\n          [color]=\"stateTriggerOptions.slideColor\"\n          [checked]=\"filterTemp.stateView\"\n          [disabled]=\"stateTriggerOptions.disabled\"\n          (change)=\"onStateViewChanges($event.checked)\">\n        </md-slide-toggle>\n      </md-card-header>\n    </md-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/layout/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ToolbarComponent = (function () {
    function ToolbarComponent(activatedRouter, router, location, mdSnackBar, _sharedService) {
        var _this = this;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.location = location;
        this.mdSnackBar = mdSnackBar;
        this._sharedService = _sharedService;
        this.onFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShowBookmarks = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stateTriggerOptions = {
            slideColor: 'primary',
            disabled: false
        };
        this.filterTemp = {};
        this.groupSet = null;
        this.showFilterPanel = false;
        this.querySearchTextChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.filterViewsOptions = [
            { value: "LATEST", title: "Latest" },
            { value: "VIEWS", title: "Views" },
        ];
        this.querySearchTextChanged
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (text) {
            _this.filter.search = text.trim();
            _this.onQueryChanged();
        });
    }
    ToolbarComponent.prototype.getPageId = function () {
        return this.pageId;
    };
    ToolbarComponent.prototype.onQueryChanged = function () {
        this.onFilterChanged.emit(__WEBPACK_IMPORTED_MODULE_4_lodash__["pick"](this.filter, ['search', 'periodStart', 'periodEnd', 'g11', 'g12', 'g13', 'views', 'stateView']));
    };
    ToolbarComponent.prototype.clearSearch = function () {
        this.filter.search = '';
        this.onQueryChanged();
    };
    ToolbarComponent.prototype.onQuerySearchTextChanged = function (text) {
        this.querySearchTextChanged.next(text);
    };
    ToolbarComponent.prototype.onToggleFilterPanel = function () {
        var _this = this;
        this.showFilterPanel = !this.showFilterPanel;
        if (this.showFilterPanel) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](this.filter, function (v, k) { return _this.filterTemp[k] = v; });
            var initGroupSet_1 = this.groupSet == null;
            if (initGroupSet_1)
                this.groupSet = {};
            ['g11', 'g12', 'g13'].forEach(function (g) {
                if (_this.filterTemp[g] == null)
                    _this.filterTemp[g] = [];
                else if (!Array.isArray(_this.filterTemp[g]))
                    _this.filterTemp[g] = [_this.filterTemp[g]];
                if (initGroupSet_1) {
                    _this.groupSet[g] = __WEBPACK_IMPORTED_MODULE_4_lodash__["map"](__WEBPACK_IMPORTED_MODULE_7__shared_services_dataService__["a" /* DataService */].groupDataSet[g], function (g) { return g.name; });
                }
            });
        }
    };
    ToolbarComponent.prototype.onStateViewChanges = function (checked) {
        this.filterTemp.stateView = checked;
    };
    ToolbarComponent.prototype.resetFilters = function () {
        this.filterTemp.g11 = [];
        this.filterTemp.g12 = [];
        this.filterTemp.g13 = [];
        this.filterTemp.periodStart = null;
        this.filterTemp.periodEnd = null;
        this.filterTemp.views = 'LATEST';
        this.filterTemp.stateView = false;
        this.filterTemp.search = '';
        this.applyFilters();
    };
    ToolbarComponent.prototype.applyFilters = function () {
        var _this = this;
        ['g11', 'g12', 'g13'].forEach(function (g) { return _this.filterTemp[g] = __WEBPACK_IMPORTED_MODULE_4_lodash__["map"](_this.filterTemp[g], function (g) { return g.value ? g.value : g; }); });
        __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](this.filterTemp, function (v, k) { return _this.filter[k] = v; });
        this.onQueryChanged();
        this.showFilterPanel = false;
    };
    ToolbarComponent.prototype.copyLink = function () {
        if (__WEBPACK_IMPORTED_MODULE_7__shared_services_dataService__["a" /* DataService */].copyToClipboard(window.location.href)) {
            this.mdSnackBar.open('<' + window.location.href + '> copied to clipboard', null, { duration: 1500 });
        }
        else {
            this.mdSnackBar.open('Copying to clipboard failed', null, { duration: 1500 });
        }
    };
    ToolbarComponent.prototype.sharePage = function () {
    };
    ToolbarComponent.prototype.showBookmarks = function () {
        this._sharedService.emitAction({ action: 'bookmarks', data: null });
    };
    ToolbarComponent.prototype.showPosts = function () {
    };
    return ToolbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "pageId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "filter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "onFilterChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "onShowBookmarks", void 0);
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'layout-toolbar',
        template: __webpack_require__("../../../../../src/app/modules/layout/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/layout/toolbar.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], ToolbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-container {\r\n  /* margin-top: 30px;\r\n  margin-left: 30px; */\r\n  margin: 40px auto;\r\n  max-width: 1050px;\r\n}\r\n\r\n.social md-grid-list {\r\n  max-width: 1050px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.mine md-grid-list {\r\n  max-width: 1050px;\r\n  margin-top: 10px;\r\n}\r\n\r\nmd-card {\r\n  max-width: 100%;\r\n  padding: 0;\r\n  background-color: #e0e0e0b0;\r\n}\r\n\r\nmd-card-title {\r\n  padding-top: 20px;\r\n  padding-left: 10px;\r\n  font: bold 14px sans-serif;\r\n}\r\n\r\n.divider {\r\n  height: 1px;\r\n  background-color: #2b2b2b1a;\r\n  margin: 0 15px 0 15px;\r\n}\r\n\r\n.profile-container > div {\r\n  margin-bottom: 40px;\r\n}\r\n\r\nmd-grid-tile {\r\n  font:  18px Roboto;\r\n}\r\n\r\nmd-grid-tile span {\r\n  position: absolute;\r\n    left: 10px;\r\n}\r\n\r\n md-grid-tile .title {\r\n  position: absolute;\r\n    left: 40px;\r\n}\r\n\r\n.form-input {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 240px;\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\n.save-btn {\r\n  position: absolute;\r\n  right: 30px;\r\n  bottom: 25px;\r\n}\r\n\r\n.form-input > * {\r\n  width: 100%;\r\n}\r\n\r\n.gender, .age {\r\n  position: absolute;\r\n  left: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.disconnect {\r\n  text-decoration: underline;\r\n  font: 15px sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.disconnect:hover {\r\n  color: #3b5998;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-toolbar [filter]=\"query\" [pageId]=\"pageId\" (onFilterChanged)=\"onFilterChanged(filter)\" (onShowBookmarks)=\"showBookmarks()\"></layout-toolbar>\r\n<div class=\"profile-container\">\r\n  <div class=\"social\">\r\n    <md-card>\r\n      <md-card-header>\r\n        <md-card-title>My Social Profile</md-card-title>\r\n      </md-card-header>\r\n      <div class=\"divider\"></div>\r\n      <md-card-content>\r\n        <md-grid-list cols=\"3\" rowHeight=\"70px\">\r\n          <md-grid-tile>\r\n            <md-card-subtitle class=\"title\" *ngIf=\"socialConnects.GOOGLE.status == 'connected'\">You are connected to Google</md-card-subtitle>\r\n            <md-card-subtitle  class=\"title\" *ngIf=\"socialConnects.GOOGLE.status == 'disconnected'\">Connect to Google</md-card-subtitle>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.GOOGLE.status == 'connected'\">{{ socialConnects.GOOGLE.email }}</span>\r\n            <span *ngIf=\"socialConnects.GOOGLE.status == 'disconnected'\"><button md-raised-button color=\"primary\" style=\"min-width:200px; background-color:#d34836;\" (click)=\"connectSocialAccount('GOOGLE')\"><i class=\"fa fa-google\" style=\"margin-right: 8px; font-size: 16px;\"></i>Connect to Google</button></span>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.GOOGLE.status == 'connected'\" class=\"disconnect\" (click)=\"disconnectSocialAccount('GOOGLE')\">Disconnect</span>\r\n          </md-grid-tile>\r\n\r\n          <md-grid-tile>\r\n            <md-card-subtitle  class=\"title\" *ngIf=\"socialConnects.FACEBOOK.status == 'connected'\">You are connected to Facebook</md-card-subtitle>\r\n            <md-card-subtitle  class=\"title\" *ngIf=\"socialConnects.FACEBOOK.status == 'disconnected'\">Connect to Facebook</md-card-subtitle>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.FACEBOOK.status == 'connected'\">{{ socialConnects.FACEBOOK.email }}</span>\r\n            <span *ngIf=\"socialConnects.FACEBOOK.status == 'disconnected'\"><button md-raised-button color=\"primary\" style=\"min-width:200px; background-color:#3b5998;\" (click)=\"connectSocialAccount('FACEBOOK')\"><i class=\"fa fa-facebook\" style=\"margin-right: 8px; font-size: 16px;\"></i>Connect to Facebook</button></span>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.FACEBOOK.status == 'connected'\" class=\"disconnect\" (click)=\"disconnectSocialAccount('FACEBOOK')\">Disconnect</span>\r\n          </md-grid-tile>\r\n\r\n          <md-grid-tile>\r\n            <md-card-subtitle  class=\"title\" *ngIf=\"socialConnects.TWITTER.status == 'connected'\">You are connected to Twitter</md-card-subtitle>\r\n            <md-card-subtitle  class=\"title\" *ngIf=\"socialConnects.TWITTER.status == 'disconnected'\">Connect to Google</md-card-subtitle>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.TWITTER.status == 'connected'\">{{ socialConnects.TWITTER.email }}</span>\r\n            <span *ngIf=\"socialConnects.TWITTER.status == 'disconnected'\"><button md-raised-button color=\"primary\" style=\"min-width:200px; background-color:#00aced\" (click)=\"connectSocialAccount('TWITTER')\"><i class=\"fa fa-twitter\" style=\"margin-right: 8px; font-size: 16px;\"></i>Connect to Twitter</button></span>\r\n          </md-grid-tile>\r\n          <md-grid-tile>\r\n            <span *ngIf=\"socialConnects.TWITTER.status == 'connected'\" class=\"disconnect\" (click)=\"disconnectSocialAccount('TWITTER')\">Disconnect</span>\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n  <div class=\"mine\">\r\n    <md-card>\r\n      <md-card-header>\r\n        <md-card-title>My Profile</md-card-title>\r\n      </md-card-header>\r\n      <div class=\"divider\"></div>\r\n      <md-card-content>\r\n        <div>\r\n          <md-grid-list cols=\"3\" rowHeight=\"70px\">\r\n            <md-grid-tile><md-card-subtitle  class=\"title\">Email</md-card-subtitle></md-grid-tile>\r\n            <md-grid-tile [colspan]=2>\r\n              <div class=\"form-input\">\r\n                <md-form-field>\r\n                  <input mdInput [formControl]=\"email\" required>\r\n                  <md-error *ngIf=\"email.invalid\">{{emailValidator()}}</md-error>\r\n                </md-form-field>\r\n              </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile><md-card-subtitle  class=\"title\">Alias</md-card-subtitle></md-grid-tile>\r\n            <md-grid-tile [colspan]=2>\r\n              <div class=\"form-input\">\r\n                <md-form-field>\r\n                  <input mdInput [formControl]=\"alias\" required>\r\n                  <md-error *ngIf=\"alias.invalid\">{{ aliasValidator() }}</md-error>\r\n                </md-form-field>\r\n              </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile><md-card-subtitle  class=\"title\">Gender</md-card-subtitle></md-grid-tile>\r\n            <md-grid-tile [colspan]=2>\r\n              <div class=\"gender\">\r\n                <md-select [(value)]=\"gender\">\r\n                  <md-option value=\"male\">Male</md-option>\r\n                  <md-option value=\"female\">Female</md-option>\r\n                </md-select>\r\n              </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile><md-card-subtitle  class=\"title\">Age</md-card-subtitle></md-grid-tile>\r\n            <md-grid-tile>\r\n              <div class=\"age\">\r\n                <md-select [(value)]=\"age\">\r\n                  <md-option *ngFor=\"let range of ageTable\" [value]=\"range.value\">{{ range.title }}</md-option>\r\n                </md-select>\r\n              </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile [rowspan]=2><button md-fab class=\"save-btn\" mdTooltip=\"Save\" mdTooltipPosition=\"left\" color=\"primary\" (click)=\"saveProfile()\"><md-icon>save</md-icon></button></md-grid-tile>\r\n            <md-grid-tile><md-card-subtitle  class=\"title\">Location</md-card-subtitle></md-grid-tile>\r\n            <md-grid-tile><span>{{ address.city }}, {{ address.state }}, {{ address.country }}</span></md-grid-tile>\r\n          </md-grid-list>\r\n        </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ProfileComponent(activatedRouter, router, restangular, dialog, location, loadingSpinnerService, mdSnackBar, authService) {
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.restangular = restangular;
        this.dialog = dialog;
        this.location = location;
        this.loadingSpinnerService = loadingSpinnerService;
        this.mdSnackBar = mdSnackBar;
        this.authService = authService;
        this.ageTable = [
            { value: '10', title: '18-24' },
            { value: '20', title: '25-34' },
            { value: '30', title: '35-44' },
            { value: '40', title: '45-54' },
            { value: '50', title: '55-64' },
            { value: '60', title: '65 or more' },
            { value: '0', title: 'Unknown' },
        ];
        this.query = {
            search: '',
            views: '',
            periodStart: null,
            periodEnd: null,
            g11: null,
            g12: null,
            g13: null,
            stateView: false
        };
        this.socialConnects = {
            GOOGLE: { email: '', status: 'disconnected' },
            FACEBOOK: { email: '', status: 'disconnected' },
            TWITTER: { email: '', status: 'disconnected' },
        };
        this.address = { country: '', state: '', city: '' };
        this.authSubscription = null;
    }
    ProfileComponent.prototype.getProfileData = function () {
        var _this = this;
        var profileData = __WEBPACK_IMPORTED_MODULE_6__shared_services_authService__["a" /* AuthService */].getCurrentUser();
        this.userId = profileData._id;
        profileData['socialConnects'].forEach(function (platform) {
            _this.socialConnects[platform['provider']]['email'] = platform['email'];
            _this.socialConnects[platform['provider']]['status'] = 'connected';
        });
        this.email = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */](profileData.email, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["l" /* Validators */].email]);
        this.alias = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */](profileData.alias, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["l" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["l" /* Validators */].maxLength(20)]);
        this.gender = profileData.gender == null ? 'male' : profileData.gender;
        if (profileData.age == 0 || profileData.age < 18) {
            this.age = "0";
        }
        else {
            if (parseInt(profileData.age) % 10 >= 5)
                this.age = (parseInt(profileData.age) / 10 * 10).toString();
            else
                this.age = ((parseInt(profileData.age) / 10 - 1) * 10).toString();
        }
        this.address = { country: profileData.location['country'],
            state: profileData.location['state'],
            city: profileData.location['city'] };
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfileData();
        this.pageId = 'PAGE_PROFILE';
        // this.authSubscription = this.authService.subscribe((res) => {
        //   this.getProfileData()
        // });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        //this.authSubscription.unsubscribe();
    };
    ProfileComponent.prototype.onFilterChanged = function () {
        this.router.navigate(['/'], { queryParams: __WEBPACK_IMPORTED_MODULE_2_lodash__["pickBy"](this.query, function (q) { return q && q != ''; }) });
    };
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        if (this.email.invalid) {
            this.mdSnackBar.open('Please enter valid email', null, { duration: 6000 });
            return;
        }
        if (this.alias.invalid) {
            this.mdSnackBar.open('Please enter valid alias', null, { duration: 6000 });
            return;
        }
        var profileData = {
            email: this.email.value,
            alias: this.alias.value,
            gender: this.gender,
            age: parseInt(this.age)
        };
        this.loadingSpinnerService.show();
        this.restangular.one('user', this.userId).customPUT(profileData).subscribe(function (res) {
            _this.loadingSpinnerService.hide();
            _this.mdSnackBar.open('You updated profile successfully', null, { duration: 6000 });
        }, function () {
            _this.loadingSpinnerService.hide();
        });
    };
    ProfileComponent.prototype.connectSocialAccount = function (provider) {
        console.log('connect social account ' + provider);
        //this.authService.login(provider)
    };
    ProfileComponent.prototype.disconnectSocialAccount = function (provider) {
        console.log('disconnect social account ' + provider);
        // this.authService.disconnect(provider, res => {
        //   console.log('social account disconnected ......')
        //   this.getProfileData();
        // })
    };
    ProfileComponent.prototype.showBookmarks = function () {
        console.log('profile page show bookmarks');
    };
    ProfileComponent.prototype.emailValidator = function () {
        return this.email.hasError('required') ? 'You must enter an email' :
            this.email.hasError('email') ? 'Invalid email' :
                '';
    };
    ProfileComponent.prototype.aliasValidator = function () {
        var error = '';
        if (this.alias.hasError('required'))
            error = 'You must enter an alias';
        else if (this.alias.hasError('minlength'))
            error = 'Alias has to be more than 6 characters';
        else if (this.alias.hasError('maxlength'))
            error = 'Alias has to be less than 20 characters';
        return error;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile',
        template: __webpack_require__("../../../../../src/app/modules/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authService__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_restangular__["Restangular"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_authService__["a" /* AuthService */]) === "function" && _h || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/D3/contextMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_index__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");



var D3ContextMenu = (function () {
    function D3ContextMenu(svg, menuItems) {
        this.svg = null;
        this.height = 0;
        this.width = 0;
        this.margin = 0.1;
        this.items = [];
        this.rescale = false;
        this.style = {
            'rect': {
                'mouseout': {
                    'fill': 'rgb(244,244,244)',
                    'stroke': 'white',
                    'strokeWidth': '1px'
                },
                'mouseover': {
                    'fill': 'rgb(200,200,200)',
                    'stroke': 'white',
                    'strokeWidth': '0px'
                }
            },
            'text': {
                'fill': 'steelblue',
                'fontSize': '13'
            }
        };
        this.clickListeners = [];
        this.svg = svg;
        this.items = menuItems;
        this.rescale = true;
    }
    D3ContextMenu.prototype.on = function (id, listener) {
        this.clickListeners[id] = listener;
    };
    D3ContextMenu.prototype.highlight = function (menu, highlight) {
        if (highlight) {
            menu.style('fill', this.style.rect.mouseover.fill);
            menu.style('stroke', this.style.rect.mouseover.stroke);
            menu.style('stroke-width', this.style.rect.mouseover.strokeWidth);
        }
        else {
            menu.style('fill', this.style.rect.mouseout.fill);
            menu.style('stroke', this.style.rect.mouseout.stroke);
            menu.style('stroke-width', this.style.rect.mouseout.strokeWidth);
        }
    };
    D3ContextMenu.prototype.pop = function (x, y, meta) {
        var _this = this;
        var items = this.items;
        if (!__WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthService */].getCurrentUser())
            items = items.slice(1, items.length);
        items = __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */].canDeleteArticle(meta) ? items : items.slice(0, items.length - 1);
        this.meta = meta;
        var that = this;
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('.context-menu').remove();
        this.scaleItems(items);
        // Draw the menu
        this.svg
            .append('g').attr('class', 'context-menu')
            .style('filter', "url('#drop-shadow')")
            .selectAll('tmp')
            .data(items).enter()
            .append('g').attr('class', 'menu-entry')
            .style('cursor', 'pointer')
            .on('mouseover', function () { that.highlight(__WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */](this).select('rect'), true); })
            .on('mouseout', function () { that.highlight(__WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */](this).select('rect'), false); })
            .on('click', function (d) {
            if (_this.clickListeners[d.id])
                _this.clickListeners[d.id].func.call(_this.clickListeners[d.id].context, _this.meta);
        });
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["g" /* selectAll */]('.menu-entry')
            .append('rect')
            .attr('x', x)
            .attr('y', function (d, i) { return y + (i * _this.height); })
            .attr('width', this.width)
            .attr('height', this.height)
            .style('fill', this.style.rect.mouseout.fill)
            .style('stroke', this.style.rect.mouseout.stroke)
            .style('stroke-width', this.style.rect.mouseout.strokeWidth);
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["g" /* selectAll */]('.menu-entry')
            .append('text')
            .text(function (d) { return d.label; })
            .attr('x', x)
            .attr('y', function (d, i) { return y + (i * _this.height); })
            .attr('dy', this.height - this.margin / 2)
            .attr('dx', this.margin)
            .style('fill', this.style.text.fill)
            .style('font-size', this.style.text.fontSize);
        // Other interactions
        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('body')
            .on('click', function () {
            __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('.context-menu').remove();
        });
    };
    // Automatically set width, height, and margin;
    D3ContextMenu.prototype.scaleItems = function (items) {
        var _this = this;
        if (this.rescale) {
            this.svg.selectAll('tmp')
                .data(items).enter()
                .append('text')
                .text(function (d) { return d.label; })
                .style('fill', this.style.text.fill)
                .style('font-size', this.style.text.fontSize)
                .attr('x', -1000)
                .attr('y', -1000)
                .attr('class', 'tmp');
            var z = __WEBPACK_IMPORTED_MODULE_0_d3_index__["g" /* selectAll */]('.tmp').nodes().map(function (x) { return x.getBBox(); });
            this.width = __WEBPACK_IMPORTED_MODULE_0_d3_index__["d" /* max */](z.map(function (x) { return x.width; }));
            this.margin = this.margin * this.width;
            this.width = this.width + 2 * this.margin;
            this.height = __WEBPACK_IMPORTED_MODULE_0_d3_index__["d" /* max */](z.map(function (x) { return x.height + _this.margin / 2; }));
            // cleanup
            __WEBPACK_IMPORTED_MODULE_0_d3_index__["g" /* selectAll */]('.tmp').remove();
            this.rescale = false;
        }
    };
    return D3ContextMenu;
}());

//# sourceMappingURL=contextMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-align: center;\n  font-size: 24px;\n}\n\n.content {\n  margin: 0px auto;\n\theight: 33%;\n}\n\n.ok-button {\n\tfloat: right;\n}\n\n.cancel-button {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 md-dialog-title class=\"title\">{{data.title}}</h1>\n</div>\n<div md-dialog-content class=\"content\">\n  <p>{{data.subject}}</p>\n</div>\n<div md-dialog-actions style=\"display: block;\">\n  <button md-button  class=\"cancel-button\" (click)=\"onCancel()\">{{data.cancelButton}}</button>\n  <button md-button  class=\"ok-button\" cdkFocusInitial (click)=\"onConfirm()\">{{data.okButton}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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


var ConfirmDialog = (function () {
    function ConfirmDialog(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ConfirmDialog.prototype.onConfirm = function () {
        this.dialogRef.close({ action: this.data['action'] });
    };
    ConfirmDialog.prototype.onCancel = function () {
        this.dialogRef.close({ action: 'cancel' });
    };
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm-dialog',
        styles: [__webpack_require__("../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.css")],
        template: __webpack_require__("../../../../../src/app/shared/components/confirmDialog/confirmDialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialog);

var _a;
//# sourceMappingURL=confirmDialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/groupAutoCompleteSelector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/groupAutoCompleteSelector.component.html":
/***/ (function(module, exports) {

module.exports = "<md-form-field class=\"form-field-row\">\n\t<input type=\"text\" placeholder=\"{{ placeholder }}\" aria-label=\"Number\" mdInput [formControl]=\"myControl\" [mdAutocomplete]=\"auto\">\n\t<md-autocomplete #auto=\"mdAutocomplete\">\n\t  <md-option *ngFor=\"let item of filteredGroups | async\" [value]=\"item.name\" (onSelectionChange)=\"selected($event, item)\" >\n\t    {{ item.name }}\n\t  </md-option>\n\t</md-autocomplete>\n</md-form-field>"

/***/ }),

/***/ "../../../../../src/app/shared/components/groupAutoCompleteSelector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupAutoCompleteSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return GroupAutoCompleteSelector; }),
    multi: true
};
var GroupAutoCompleteSelector = (function () {
    function GroupAutoCompleteSelector() {
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later provided
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.groups = [];
    }
    GroupAutoCompleteSelector.prototype.ngOnInit = function () {
        var _this = this;
        this.groups = (typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_dataService__["a" /* DataService */].groupDataSet[this.groupType]) == 'undefined' ? [] : __WEBPACK_IMPORTED_MODULE_4__shared_services_dataService__["a" /* DataService */].groupDataSet[this.groupType];
        this.filteredGroups = this.myControl.valueChanges
            .startWith('')
            .map(function (val) { return _this.filter(val); });
    };
    GroupAutoCompleteSelector.prototype.filter = function (val) {
        return this.groups.filter(function (item) {
            return item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
        });
    };
    GroupAutoCompleteSelector.prototype.selected = function (event, item) {
        if (event.source.selected) {
            this.innerValue = item.name;
            this.onChangeCallback(this.innerValue);
        }
    };
    Object.defineProperty(GroupAutoCompleteSelector.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    GroupAutoCompleteSelector.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    GroupAutoCompleteSelector.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    GroupAutoCompleteSelector.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    GroupAutoCompleteSelector.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return GroupAutoCompleteSelector;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GroupAutoCompleteSelector.prototype, "groupType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GroupAutoCompleteSelector.prototype, "multiple", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GroupAutoCompleteSelector.prototype, "placeholder", void 0);
GroupAutoCompleteSelector = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'group-autocomplete-selector',
        template: __webpack_require__("../../../../../src/app/shared/components/groupAutoCompleteSelector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/groupAutoCompleteSelector.component.css")],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], GroupAutoCompleteSelector);

//# sourceMappingURL=groupAutoCompleteSelector.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/clickOutside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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


var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_el, platformId) {
        this._el = _el;
        this.platformId = platformId;
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = false;
        this.exclude = '';
        this.excludeBeforeClick = false;
        this.clickOutsideEvents = '';
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._nodesExcluded = [];
        this._events = ['click'];
        this._initOnClickBody = this._initOnClickBody.bind(this);
        this._onClickBody = this._onClickBody.bind(this);
    }
    ClickOutsideDirective.prototype.ngOnInit = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        this._init();
    };
    ClickOutsideDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.removeEventListener(e, _this._initOnClickBody); });
        }
        this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype.ngOnChanges = function (changes) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (changes['attachOutsideOnClick'] || changes['exclude']) {
            this._init();
        }
    };
    ClickOutsideDirective.prototype._init = function () {
        var _this = this;
        if (this.clickOutsideEvents !== '') {
            this._events = this.clickOutsideEvents.split(',').map(function (e) { return e.trim(); });
        }
        this._excludeCheck();
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.addEventListener(e, _this._initOnClickBody); });
        }
        else {
            this._initOnClickBody();
        }
    };
    ClickOutsideDirective.prototype._initOnClickBody = function () {
        if (this.delayClickOutsideInit) {
            setTimeout(this._initClickListeners.bind(this));
        }
        else {
            this._initClickListeners();
        }
    };
    ClickOutsideDirective.prototype._initClickListeners = function () {
        var _this = this;
        this._events.forEach(function (e) { return document.body.addEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype._excludeCheck = function () {
        if (this.exclude) {
            try {
                var nodes = Array.from(document.querySelectorAll(this.exclude));
                if (nodes) {
                    this._nodesExcluded = nodes;
                }
            }
            catch (err) {
                console.error('[ng-click-outside] Check your exclude selector syntax.', err);
            }
        }
    };
    ClickOutsideDirective.prototype._onClickBody = function (ev) {
        var _this = this;
        if (this.excludeBeforeClick) {
            this._excludeCheck();
        }
        if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
            this.clickOutside.emit(ev);
            if (this.attachOutsideOnClick) {
                this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
            }
        }
    };
    ClickOutsideDirective.prototype._shouldExclude = function (target) {
        for (var _i = 0, _a = this._nodesExcluded; _i < _a.length; _i++) {
            var excludedNode = _a[_i];
            if (excludedNode.contains(target)) {
                return true;
            }
        }
        return false;
    };
    return ClickOutsideDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "attachOutsideOnClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "delayClickOutsideInit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ClickOutsideDirective.prototype, "exclude", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "excludeBeforeClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ClickOutsideDirective.prototype, "clickOutsideEvents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ClickOutsideDirective.prototype, "clickOutside", void 0);
ClickOutsideDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[clickOutside]' }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, Object])
], ClickOutsideDirective);

var _a, _b;
//# sourceMappingURL=clickOutside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/D3Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_index__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_D3_contextMenu_component__ = __webpack_require__("../../../../../src/app/shared/components/D3/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kld_intersections__ = __webpack_require__("../../../../kld-intersections/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kld_intersections___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_kld_intersections__);






var D3Service = (function () {
    function D3Service() {
        this.width = 1503;
        this.height = 917;
        this.paddings = { focus_article: 500, article: 400, cluster: 6, node: 3, text: 5 };
        this.nodes = [];
        this.svgElements = {
            ellipses: null,
            textsEllipse: null,
            articles: null,
            textsArticleTitle: null, tspansArticleTitle1: null, tspansArticleTitle2: null,
            textsArticleBody: null, tspansArticleBody1: null, tspansArticleBody2: null, tspansArticleBody3: null, tspansArticleBody4: null,
            imgsArticle: null, imgsArticleSite: null, textsArticleSite: null,
            linesArticle: null,
            textsArticleTime: null, editLinksArticle: null, textsArticleMenu: null,
            rects: null,
            textsRect: null,
            texts: null,
            links: null,
            shapeRects: null
        };
        this.articleElements = [
            'article',
            'articleImg',
            'articleTitle',
            'articleBody',
            'articleLine',
            'articleSiteImg',
            'articleTextSite',
            'articleTextTime',
            'articleEditButton',
            'articleTextMenu'
        ];
        this.transform = { k: 1, x: 0, y: 0 };
        this.centralOffset = { width: 0, height: 0 };
        this.listeners = {
            click: null,
            dblclick: null
        };
        // used to cancel click event if double click
        this.handleClickListener = null;
        this.isInTransition = false;
        this.zoomEnabled = true;
    }
    D3Service.prototype.init = function (svgSelector, zoomEnabled, centralOffset) {
        var _this = this;
        if (zoomEnabled === void 0) { zoomEnabled = true; }
        if (centralOffset === void 0) { centralOffset = null; }
        this.centralOffset = centralOffset ? centralOffset : { width: __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].SIZES.g0.width / 2, height: __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].SIZES.g0.height / 2 };
        this.svgSelector = svgSelector;
        this.svgContainer = __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */](this.svgSelector)
            .append('svg')
            .attr('class', 'd3SvgContainer');
        this.zoomEnabled = zoomEnabled;
        if (zoomEnabled) {
            this.zoom = __WEBPACK_IMPORTED_MODULE_0_d3_index__["h" /* zoom */]()
                .on("zoom", function () {
                _this.transform = {
                    k: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.k,
                    x: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.x,
                    y: __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].transform.y
                };
                _this.translateView();
            })
                .filter(function () {
                if (__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */] instanceof WheelEvent)
                    return __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].ctrlKey;
                return true;
            })
                .scaleExtent([0.5, 1.75]);
            this.svgContainer.call(this.zoom)
                .on("dblclick.zoom", null)
                .on("wheel", function () {
                // d3.event.preventDefault();
                // this.viewNextArticle(d3.event.deltaY > 0)
            });
            __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]("body").on("keydown", function () {
                if (__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].keyCode == 37) {
                    _this.viewNextArticle(false);
                }
                else if (__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].keyCode == 39) {
                    _this.viewNextArticle(true);
                }
            });
        }
        // define filters
        var defs = this.svgContainer.append("defs");
        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("height", "130%");
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 3)
            .attr("result", "blur");
        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 2)
            .attr("dy", 2)
            .attr("result", "offsetBlur");
        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur");
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");
        this.svg = this.svgContainer.append('g');
        this.simulation = __WEBPACK_IMPORTED_MODULE_0_d3_index__["c" /* forceSimulation */]()
            .force("cluster", function (alpha) { return _this.clustering(alpha); });
        this.contextMenu = new __WEBPACK_IMPORTED_MODULE_4__components_D3_contextMenu_component__["a" /* D3ContextMenu */](this.svg, [{ id: 'AGREE_DISAGREE', label: 'Agree/Disagree' }, { id: 'DRILL_DOWN', label: 'Drill down' }]);
        this.contextMenu.on('AGREE_DISAGREE', { context: this, func: function (d) {
                _this.listeners.agreedisagree.func.call(_this.listeners.agreedisagree.context, d);
            } });
        this.contextMenu.on('DRILL_DOWN', { context: this, func: function (d) {
                _this.listeners.drilldown.func.call(_this.listeners.drilldown.context, d);
            } });
        this.articleMenu = new __WEBPACK_IMPORTED_MODULE_4__components_D3_contextMenu_component__["a" /* D3ContextMenu */](this.svg, [{ id: 'BOOKMARK_POST', label: 'Bookmark Post' },
            { id: 'OPEN_ARTICLE_SOURCE', label: 'Open Article Source' },
            { id: 'COPY_ARTICLE_LINK', label: 'Copy Article Link' },
            { id: 'COPY_ARTICLE_ID', label: 'Copy Article Id' },
            { id: 'SHARE_POST', label: 'Share Post' },
            { id: 'REPORT_POST', label: 'Report Post' },
            { id: 'DELETE_ARTICLE', label: 'Delete Article' }]);
        this.articleMenu.on('BOOKMARK_POST', { context: this, func: function (d) {
                _this.listeners.bookmark_post.func.call(_this.listeners.bookmark_post.context, d);
            } });
        this.articleMenu.on('OPEN_ARTICLE_SOURCE', { context: this, func: function (d) {
                _this.listeners.open_article_source.func.call(_this.listeners.open_article_source.context, d);
            } });
        this.articleMenu.on('COPY_ARTICLE_LINK', { context: this, func: function (d) {
                _this.listeners.copy_article_link.func.call(_this.listeners.copy_article_link.context, d);
            } });
        this.articleMenu.on('COPY_ARTICLE_ID', { context: this, func: function (d) {
                _this.listeners.copy_article_id.func.call(_this.listeners.copy_article_id.context, d);
            } });
        this.articleMenu.on('SHARE_POST', { context: this, func: function (d) {
                _this.listeners.share_post.func.call(_this.listeners.share_post.context, d);
            } });
        this.articleMenu.on('REPORT_POST', { context: this, func: function (d) {
                _this.listeners.report_post.func.call(_this.listeners.report_post.context, d);
            } });
        this.articleMenu.on('DELETE_ARTICLE', { context: this, func: function (d) {
                _this.listeners.delete_article.func.call(_this.listeners.delete_article.context, d);
            } });
    };
    D3Service.prototype.translateView = function () {
        var x = this.transform.x + (0 - this.centralOffset.width * this.transform.k);
        var y = this.transform.y + (0 - this.centralOffset.height * this.transform.k);
        this.svg.attr("transform", 'translate(' + x + ',' + y + ') scale(' + this.transform.k + ')');
    };
    D3Service.prototype.translateViewTo = function (x, y, withAnimation) {
        var _this = this;
        if (withAnimation === void 0) { withAnimation = true; }
        if (this.zoom) {
            if (this.isInTransition)
                return;
            var x0 = x;
            var y0 = y;
            if (withAnimation) {
                this.svgContainer.transition().duration(450).call(this.zoom.translateTo, x0, y0)
                    .on('start', function () {
                    _this.isInTransition = true;
                })
                    .on('end', function () {
                    _this.isInTransition = false;
                })
                    .on('interrupt', function () {
                    _this.isInTransition = false;
                });
            }
            else {
                this.svgContainer.call(this.zoom.translateTo, x0, y0);
            }
        }
    };
    D3Service.prototype.resize = function (size) {
        this.width = size.width;
        this.height = size.height;
        this.svgContainer
            .style('width', size.width + 'px')
            .style('height', size.height + 'px');
        this.translateView();
    };
    D3Service.prototype.start = function (nodes, articleIndex) {
        this.nodes = nodes;
        this.svg.selectAll('*').remove();
        this.initNodes(); // define collide nodes
        this.visualize(); //
        this.currentArticleIndex = isNaN(articleIndex) ? 0 : parseInt(articleIndex);
        if (this.nodes.length > 0) {
            var articleIndices = Object.keys(this.collisionNodes);
            this.translateViewTo(this.nodes[articleIndices[this.currentArticleIndex]].x, this.nodes[articleIndices[this.currentArticleIndex]].y, false);
        }
    };
    D3Service.prototype.initNodes = function () {
        var _this = this;
        this.collisionNodes = {};
        var currentArticleIndex = 0;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.nodes, function (d, index) {
            if (d.nodeData.focused)
                return;
            if (d.nodeData.g === 'g0' || d.nodeData.g === 'g100') {
                currentArticleIndex = index;
                _this.collisionNodes[currentArticleIndex] = [];
                for (var articleIndex in _this.collisionNodes) {
                    _this.collisionNodes[currentArticleIndex].push(parseInt(articleIndex));
                    _this.collisionNodes[articleIndex].push(currentArticleIndex);
                }
                if (_this.nodes[0].nodeData.focused) {
                    _this.collisionNodes[currentArticleIndex].push(0);
                }
            }
            else {
                _this.collisionNodes[currentArticleIndex].push(index);
            }
        });
    };
    D3Service.prototype.reskinNodes = function (nodes) {
        var _this = this;
        var that = this;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](nodes, function (d) {
            var node = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](_this.nodes, function (n) { return n.nodeData.nodeIndex == d.nodeData.nodeIndex; });
            node.style = d.style;
        });
        this.svgElements.links
            .style("stroke-width", function (d) { return d.nodeData.link.width + 'px'; })
            .style("stroke", function (d) { return 'd.nodeData.link.color'; });
        this.svgElements.articles
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.imgsArticle
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height - 150; });
        this.svgElements.ellipses
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.textsEllipse
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) { var bb = this.getBBox(); d.style.width = bb.width + that.paddings.text * 2; d.style.height = bb.height * 2 + that.paddings.text * 2; });
        this.svgElements.rects
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .style("fill", function (d) { return d.style.color; });
        this.svgElements.textsRect
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) { var bb = this.getBBox(); d.style.width = bb.width + that.paddings.text; d.style.height = bb.height + that.paddings.text; });
        this.svgElements.shapeRects
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .style("fill", function (d) { return d.style.color; });
    };
    D3Service.prototype.visualize = function () {
        var _this = this;
        var that = this;
        this.svgElements.links = this.svg
            .datum(this.nodes.filter(function (d) { return d.nodeData.link != null; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter()
            .append('line');
        this.svgElements.articles = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('class', 'articleRect')
            .attr('stroke-width', 2)
            .attr('stroke', '#ff0000')
            .attr('id', function (d) { return 'article' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.imgsArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.image')
            .data(function (d) { return d; })
            .enter().append('image')
            .attr('class', 'articleImage')
            .attr('xlink:href', function (d) { return d.imageLink; })
            .attr('id', function (d) { return 'articleImg' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('preserveAspectRatio', 'xMinYMin slice')
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.textsArticleTitle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('class', 'pointer articleTitle')
            .attr("dominant-baseline", "central")
            .attr('id', function (d) { return 'articleTitle' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.tspansArticleTitle1 = this.svgElements.textsArticleTitle
            .append('tspan')
            .attr('x', 0)
            .attr('dx', 6)
            .attr('dy', 16)
            .text(function (d) { return d.title.substring(0, 36); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.tspansArticleTitle2 = this.svgElements.textsArticleTitle
            .append('tspan')
            .attr('x', 0)
            .attr('dx', 6)
            .attr('dy', 32)
            .text(function (d) { return __WEBPACK_IMPORTED_MODULE_1_lodash__["truncate"](d.title.substring(36), { 'length': 36 }); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.textsArticleBody = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('class', 'articleBody')
            .attr("dominant-baseline", "central")
            .attr('id', function (d) { return 'articleBody' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.tspansArticleBody1 = this.svgElements.textsArticleBody
            .append('tspan')
            .attr('x', 0)
            .attr('dx', 6)
            .attr('dy', 15)
            .text(function (d) { return d.body.substring(0, 55); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.tspansArticleBody2 = this.svgElements.textsArticleBody
            .append('tspan')
            .attr('x', 0)
            .attr('dx', 6)
            .attr('dy', 30)
            .text(function (d) { return d.body.substring(55, 110); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.tspansArticleBody3 = this.svgElements.textsArticleBody
            .append('tspan')
            .attr('x', 0)
            .attr('dx', 6)
            .attr('dy', 45)
            .text(function (d) { return d.body.substring(110, 165); })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; });
        this.svgElements.linesArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.line')
            .data(function (d) { return d; })
            .enter().append('line')
            .attr('class', 'articleLine')
            .attr('stroke-width', 1)
            .attr('stroke', '#a2a5a7')
            .attr('id', function (d) { return 'articleLine' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; });
        this.svgElements.imgsArticleSite = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.image')
            .data(function (d) { return d; })
            .enter().append('image')
            .attr('class', 'articleSiteImage')
            .attr('xlink:href', function (d) { return d.articleSourceIcon; })
            .attr('id', function (d) { return 'articleSiteImg' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('width', 29)
            .attr('height', 29);
        this.svgElements.textsArticleSite = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('class', 'articleSiteTitle')
            .attr("text-anchor", "left")
            .attr("dominant-baseline", "middle")
            .attr('id', function (d) { return 'articleTextSite' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .text(function (d) { return d.articleSource; });
        this.svgElements.textsArticleTime = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('class', 'articleTime')
            .attr("text-anchor", "left")
            .attr("dominant-baseline", "middle")
            .attr('id', function (d) { return 'articleTextTime' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .text(function (d) { return __WEBPACK_IMPORTED_MODULE_2_moment__(d.createdAt).fromNow(); });
        this.svgElements.editLinksArticle = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.link')
            .data(function (d) { return d; })
            .enter().append('g')
            .append('text')
            .attr('class', 'pointer articleEdit')
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .attr('id', function (d) { return 'articleEditButton' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .text('Add your Opinion');
        this.svgElements.textsArticleMenu = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'article'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('class', 'pointer articleMenu')
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .attr('id', function (d) { return 'articleTextMenu' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .text('...');
        this.svgElements.ellipses = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'ellipse'; }))
            .selectAll('.ellipse')
            .data(function (d) { return d; })
            .enter().append('ellipse')
            .attr('id', function (d) { return 'ellipse' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g ellipse ' + d.nodeData.g; });
        this.svgElements.textsEllipse = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'ellipse'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('id', function (d) { return 'ellipseText' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g text ' + d.nodeData.g; })
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .text(function (d) { return d.nodeData.text; });
        this.svgElements.rects = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'rect'; }))
            .selectAll('.rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('id', function (d) { return 'rect' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g rect ' + d.nodeData.g; });
        this.svgElements.textsRect = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'rect'; }))
            .selectAll('.text')
            .data(function (d) { return d; })
            .enter().append('text')
            .attr('id', function (d) { return 'rectText' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'pointer g text ' + d.nodeData.g; })
            .attr("text-anchor", "left") // comment = g5: left aligned
            .attr("dominant-baseline", "text-before-edge")
            .attr('font-size', function (d) { return d.style.font; })
            .each(function (d) {
            var charsToWrap = 60;
            var totalW = 0;
            for (var i = 0; i < d.nodeData.text.length; i += charsToWrap) {
                var tspan = __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */](this).append('tspan')
                    .attr('dx', -1 * totalW)
                    .attr('dy', i == 0 ? 0 : 15)
                    .text(function (d) { return d.nodeData.text.substr(i, charsToWrap); })
                    .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
                    .node();
                totalW = tspan.getComputedTextLength();
            }
        });
        this.svgElements.shapeRects = this.svg.append('g')
            .datum(this.nodes.filter(function (d) { return d.shape == 'SHAPE_RECT'; }))
            .selectAll('.rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('id', function (d) { return 'shape_rect' + d.nodeData.nodeIndex; })
            .attr('data-index', function (d) { return d.nodeData.nodeIndex; })
            .attr('data-id', function (d) { return d._id; })
            .attr('class', function (d) { return 'rect'; });
        this.reskinNodes(this.nodes);
        // Define event handlers for each SvgElements.
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.svgElements, function (elements, elType) {
            if (elements == null || elType == 'links')
                return;
            elements
                .on("dblclick", function (d) {
                if (_this.listeners.dblclick) {
                    if (_this.handleClickListener) {
                        _this.handleClickListener = null;
                        window.clearTimeout(_this.handleClickListener);
                    }
                    _this.listeners.dblclick.func.call(_this.listeners.dblclick.context, d, elType);
                }
            })
                .on("click", function (d) {
                if (_this.listeners.click) {
                    _this.handleClickListener = window.setTimeout(function () {
                        if (that.handleClickListener) {
                            _this.listeners.click.func.call(_this.listeners.click.context, d, elType);
                            that.handleClickListener = null;
                            if (elType == 'textsArticleMenu') {
                                if (d.bookmarked) {
                                    that.articleMenu.items[0].label = 'Bookmarked';
                                }
                                else {
                                    that.articleMenu.items[0].label = 'Bookmark';
                                }
                                that.articleMenu.pop(d.x + d.style.width - 25, d.y + d.style.height - 10, d);
                            }
                        }
                    }, 300);
                }
            })
                .on('contextmenu', function (d) {
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].preventDefault();
                that.contextMenu.pop(__WEBPACK_IMPORTED_MODULE_0_d3_index__["e" /* mouse */](this)[0], __WEBPACK_IMPORTED_MODULE_0_d3_index__["e" /* mouse */](this)[1], d);
            });
            if (elType == 'rects' || elType == 'ellipses') {
                elements.on('mouseenter', function (d) {
                    if (that.dropShowable(d)) {
                        this.style.filter = "url('#drop-shadow')";
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#rectText' + d.nodeData.nodeIndex).style('font-weight', "bold");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "bold");
                    }
                })
                    .on('mouseleave', function (d) {
                    if (that.dropShowable(d)) {
                        this.style.filter = "none";
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#rectText' + d.nodeData.nodeIndex).style('font-weight', "normal");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "normal");
                    }
                });
            }
            else if (elType == 'textsRect' || elType == 'textsEllipse') {
                elements.on('mouseenter', function (d) {
                    if (that.dropShowable(d)) {
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#rect' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#ellipse' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
                        this.style.fontWeight = 'bold';
                    }
                })
                    .on('mouseleave', function (d) {
                    if (that.dropShowable(d)) {
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#rect' + d.nodeData.nodeIndex).style('filter', "none");
                        __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */]('#ellipse' + d.nodeData.nodeIndex).style('filter', "none");
                        this.style.fontWeight = 'normal';
                    }
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.svgElements, function (elements) {
            if (elements == null)
                return;
            elements.call(__WEBPACK_IMPORTED_MODULE_0_d3_index__["a" /* drag */]()
                .on("start", function (d) {
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].sourceEvent.stopPropagation();
                if (!d.nodeData.movable)
                    return;
                if (!__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].active)
                    that.simulation.alphaTarget(1).restart();
            })
                .on("drag", function (d) {
                if (!d.nodeData.movable)
                    return;
                __WEBPACK_IMPORTED_MODULE_0_d3_index__["f" /* select */](this).attr("x", d.x = __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].x).attr("y", d.y = __WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].y);
            })
                .on("end", function (d) {
                if (!d.nodeData.movable)
                    return;
                if (!__WEBPACK_IMPORTED_MODULE_0_d3_index__["b" /* event */].active)
                    that.simulation.alphaTarget(0);
            }));
        });
        this.simulation.restart();
        this.simulation.alpha(1);
        this.updateArticlePosition(false);
        this.simulation.nodes(this.nodes)
            .on("tick", function () { return _this.ticked(); });
    };
    D3Service.prototype.dropShowable = function (d) {
        return d.nodeData.g == 'g1' || d.nodeData.g == 'g2' || d.nodeData.g == 'g3' || d.nodeData.g == 'g4' || d.nodeData.g == 'g6' || d.nodeData.g == 'g7' || d.nodeData.g == 'g11' || d.nodeData.g == 'g12' || d.nodeData.g == 'g13' || d.nodeData.g == 'g21' || d.nodeData.g == 'g22';
    };
    D3Service.prototype.on = function (event, listener, context) {
        if (context === void 0) { context = null; }
        this.listeners[event] = { context: context, func: listener };
    };
    D3Service.prototype.viewNextArticle = function (direction /* boolean: true - next, false - prev) */) {
        var _this = this;
        if (this.isInTransition)
            return;
        var articleIndices = Object.keys(this.collisionNodes);
        this.currentArticleIndex = this.currentArticleIndex + (direction ? 1 : -1);
        if (this.currentArticleIndex < 0)
            this.currentArticleIndex = articleIndices.length - 1;
        if (this.currentArticleIndex >= articleIndices.length)
            this.currentArticleIndex = 0;
        //this.translateViewTo(this.nodes[articleIndices[this.currentArticleIndex]].x, this.nodes[articleIndices[this.currentArticleIndex]].y)
        var article_count = articleIndices.length;
        articleIndices.forEach(function (nodeIndex, articleIndex) {
            var offset_from_center = 0;
            if (articleIndex - _this.currentArticleIndex >= 0) {
                if ((articleIndex - _this.currentArticleIndex) >= (article_count - 2)) {
                    offset_from_center = articleIndex - _this.currentArticleIndex - article_count;
                }
                else {
                    offset_from_center = articleIndex - _this.currentArticleIndex;
                }
            }
            else {
                if ((article_count - _this.currentArticleIndex + articleIndex) < (article_count - 2)) {
                    offset_from_center = article_count - _this.currentArticleIndex + articleIndex;
                }
                else {
                    offset_from_center = articleIndex - _this.currentArticleIndex;
                }
            }
            _this.nodes[nodeIndex].x = offset_from_center * __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].GAP;
        });
        this.updateArticlePosition();
        this.listeners.article_navigate.func.call(this.listeners.article_navigate.context, this.currentArticleIndex);
    };
    D3Service.prototype.centerArticleZIndex = function (center, prev, next) {
        this.articleElements.forEach(function (element) {
            console.log('__________ element ____________');
            console.log(element + prev);
            document.getElementById(element + prev).parentNode.appendChild(document.getElementById(element + prev));
            document.getElementById(element + next).parentNode.appendChild(document.getElementById(element + next));
            document.getElementById(element + center).parentNode.appendChild(document.getElementById(element + center));
        });
    };
    D3Service.prototype.centerArticleScaling = function (element, that) {
        if (that.currentArticleIndex === undefined)
            that.currentArticleIndex = 0;
        var articleIndices = Object.keys(that.collisionNodes);
        var centerArticle = articleIndices[that.currentArticleIndex];
        var prev_centerArticle = articleIndices[that.currentArticleIndex > 0 ? that.currentArticleIndex - 1 : articleIndices.length - 1];
        var next_centerArticle = articleIndices[that.currentArticleIndex < (articleIndices.length - 1) ? that.currentArticleIndex + 1 : 0];
        that.centerArticleZIndex(centerArticle, prev_centerArticle, next_centerArticle);
        element.attr('transform', function (d) {
            if (d.nodeData.nodeIndex == centerArticle) {
                return 'scale(' + __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].CAROUSEL_SCALE_1 + ') translate(-62, -62)';
            }
            else if (d.nodeData.nodeIndex == prev_centerArticle || d.nodeData.nodeIndex == next_centerArticle)
                return 'scale(' + __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].CAROUSEL_SCALE_2 + ') translate(-42, -42)';
            else
                return 'scale(1.0)';
        });
    };
    D3Service.prototype.updateArticlePosition = function (animation) {
        if (animation === void 0) { animation = true; }
        var articleWidth = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].SIZES.g0.width;
        var articleHeight = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].SIZES.g0.height;
        var that = this;
        var t = animation ? 1000 : 0;
        this.svgElements.articles
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.imgsArticle
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.textsArticleTitle
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.tspansArticleTitle1
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 150; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.tspansArticleTitle2
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 150; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.textsArticleBody
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 40; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.tspansArticleBody1
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 190; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.tspansArticleBody2
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 190; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.tspansArticleBody3
            .transition()
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y + 190; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.linesArticle
            .transition()
            .attr('x1', function (d) { return d.x; })
            .attr('y1', function (d) { return d.y + d.style.height - 40; })
            .attr('x2', function (d) { return d.x + d.style.width; })
            .attr('y2', function (d) { return d.y + d.style.height - 40; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.imgsArticleSite
            .transition()
            .attr('x', function (d) { return d.x + 4; })
            .attr('y', function (d) { return d.y + d.style.height - 36; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.textsArticleSite
            .transition()
            .attr('x', function (d) { return d.x + 40; })
            .attr('y', function (d) { return d.y + d.style.height - 10; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.textsArticleTime
            .transition()
            .attr('x', function (d) { return d.x + 40; })
            .attr('y', function (d) { return d.y + d.style.height - 28; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.editLinksArticle
            .transition()
            .attr('x', function (d) { return d.x + d.style.width - 35; })
            .attr('y', function (d) { return d.y + d.style.height - 13; })
            .call(this.centerArticleScaling, that)
            .duration(t);
        this.svgElements.textsArticleMenu
            .transition()
            .attr('x', function (d) { return d.x + d.style.width - 8; })
            .attr('y', function (d) { return d.y + d.style.height - 20; })
            .call(this.centerArticleScaling, that)
            .duration(t);
    };
    D3Service.prototype.ticked = function () {
        this.collide(1);
        this.svgElements.ellipses
            .attr('rx', function (d) { return d.style.width / 2; })
            .attr('ry', function (d) { return d.style.height / 2; })
            .attr('cx', function (d) { return d.x + d.style.width / 2; })
            .attr('cy', function (d) { return d.y + d.style.height / 2; });
        this.svgElements.textsEllipse
            .attr('x', function (d) { return d.x + d.style.width / 2; })
            .attr('y', function (d) { return d.y + d.style.height / 2; });
        this.svgElements.rects
            .attr('width', function (d) { return d.style.width; })
            .attr('height', function (d) { return d.style.height; })
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
        this.svgElements.textsRect
            .attr('x', function (d) { return d.x; }) //g5 : comment left aligned
            .attr('y', function (d) { return d.y; });
        this.svgElements.shapeRects
            .attr('x', function (d) { return d.x; }) //g5 : comment left aligned
            .attr('y', function (d) { return d.y; });
    };
    D3Service.prototype.clustering = function (alpha) {
        var articleIndex = this.nextArticle(-1);
        while (articleIndex < this.nodes.length) {
            var parent = this.nodes[articleIndex];
            var i = articleIndex + 1;
            for (; i < this.nodes.length && this.nodes[i].shape != 'article'; i++) {
                var node = this.nodes[i];
                if ((node.nodeData.parentIndex < 0) || (node.nodeData.parentIndex != articleIndex) || (parent.x == null || parent.y == null || node.x == null || node.y == null)) {
                    continue;
                }
                var dCenterX = (node.x + node.style.width / 2), dCenterY = (node.y + node.style.height / 2), parentCenterX = (parent.x + parent.style.width / 2), parentCenterY = (parent.y + parent.style.height / 2), parentBottomY = (parent.y + parent.style.height), parentRightX = (parent.x + parent.style.width), pullX = void 0, pullY = void 0;
                if (parent.nodeData.clustersPopulation) {
                    if (typeof (node.nodeData.indexInCluster) == 'number' && node.nodeData.clusterName) {
                        var pullPoint = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].pullPoint(parent, node.nodeData.clusterName, node.nodeData.indexInCluster);
                        pullX = pullPoint.x;
                        pullY = pullPoint.y;
                    }
                    else {
                        console.log('This should not happen.');
                        pullX = parentCenterX;
                        pullY = parentCenterY;
                    }
                }
                else {
                    pullX = parentCenterX;
                    pullY = parentCenterY;
                }
                var distanceX = pullX - dCenterX, distanceY = pullY - dCenterY;
                var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance == 0) {
                    // Arrived at the pull point.
                }
                else {
                    var step = 0.05;
                    var moveX = (distanceX) * step * alpha;
                    var moveY = (distanceY) * step * alpha;
                    node.x += moveX;
                    node.y += moveY;
                }
            }
            articleIndex = i;
        }
    };
    D3Service.prototype.collide = function (alpha /*ignored*/) {
        var articleIndex = this.nextArticle(-1);
        while (articleIndex < this.nodes.length) {
            var nextArticleIndex = this.nextArticle(articleIndex);
            for (var i = 0; i < nextArticleIndex - articleIndex - 1; i++) {
                for (var j = 0; j < this.collisionNodes[articleIndex].length; j++) {
                    var oneIndex = articleIndex + i;
                    var otherIndex = this.collisionNodes[articleIndex][j];
                    if (oneIndex == otherIndex || (oneIndex > otherIndex && otherIndex != 0))
                        continue;
                    var oneNode = this.nodes[oneIndex];
                    var otherNode = this.nodes[otherIndex];
                    if (otherNode.x == null || otherNode.y == null || oneNode.x == null || oneNode.y == null) {
                        console.log('This should not happen');
                        continue;
                    }
                    // 1. Decide behavior
                    var padding = void 0;
                    var style = 'rect-rect';
                    var movable = { oneX: 1, oneY: 1, otherX: 1, otherY: 1 };
                    if (oneNode.nodeData.g == 'g100') {
                        movable.oneX = 0;
                        movable.oneY = 0;
                        padding = this.paddings.node;
                    }
                    else if (otherNode.nodeData.g == 'g100') {
                        movable.otherX = 0;
                        movable.otherY = 0;
                        padding = this.paddings.node;
                    }
                    else if (oneNode.nodeData.focused) {
                        movable.oneX = 0;
                        movable.oneY = 0;
                        if (otherNode.nodeData.g == 'g0') {
                            padding = this.paddings.focus_article;
                        }
                        else {
                            padding = this.paddings.node;
                        }
                    }
                    else if (otherNode.nodeData.focused) {
                        movable.otherX = 0;
                        movable.otherY = 0;
                        if (oneNode.nodeData.g == 'g0') {
                            padding = this.paddings.focus_article;
                        }
                        else {
                            padding = this.paddings.node;
                        }
                    }
                    else if (oneNode.nodeData.g == 'g0') {
                        if (otherNode.nodeData.g == 'g0') {
                            movable.oneX = 0;
                            movable.oneY = 0;
                            movable.otherX = 0;
                            movable.otherY = 0;
                            padding = this.paddings.article;
                        }
                        else if (otherNode.nodeData.parentIndex == oneIndex) {
                            // article - child collision test
                            padding = this.paddings.node;
                            movable.oneX = 0;
                            movable.oneY = 0;
                        }
                        else {
                            // article - child collision test
                            padding = this.paddings.node;
                            movable.oneX = 0;
                            movable.oneY = 0;
                        }
                    }
                    else {
                        if (otherNode.nodeData.g == 'g0') {
                            padding = this.paddings.node;
                            movable.otherX = 0;
                            movable.otherY = 0;
                        }
                        else if (oneNode.nodeData.parentIndex != otherNode.nodeData.parentIndex) {
                            padding = this.paddings.node;
                        }
                        else {
                            // child - child test
                            padding = (oneNode.nodeData.clusterName == otherNode.nodeData.clusterName) ? this.paddings.node : this.paddings.cluster;
                        }
                    }
                    if (oneNode.shape == 'ellipse' && otherNode.shape == 'ellipse') {
                        style = 'ellipse-ellipse';
                    }
                    // 2. Carry out the behavior
                    if (style == 'ellipse-ellipse') {
                        var ellipseOne = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(oneNode.x + oneNode.style.width / 2, oneNode.y + oneNode.style.height / 2, oneNode.style.width / 2 + padding / 2, oneNode.style.height / 2 + padding / 2);
                        var ellipseTwo = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(otherNode.x + otherNode.style.width / 2, otherNode.y + otherNode.style.height / 2, otherNode.style.width / 2 + padding / 2, otherNode.style.height / 2 + padding / 2);
                        var overlap = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].checkEllipsesOverlap(ellipseOne, ellipseTwo);
                        if (!overlap) {
                            continue;
                        }
                        var directionVector = { x: 0, y: 0 };
                        if ((ellipseOne.args[0].x == ellipseTwo.args[0].x) && (ellipseOne.args[0].y == ellipseTwo.args[0].y)) {
                            directionVector = { x: 1, y: 0 };
                        }
                        else {
                            var centerDistance = Math.sqrt((ellipseOne.args[0].x - ellipseTwo.args[0].x) * (ellipseOne.args[0].x - ellipseTwo.args[0].x) + (ellipseOne.args[0].y - ellipseTwo.args[0].y) * (ellipseOne.args[0].y - ellipseTwo.args[0].y));
                            directionVector.x = (ellipseOne.args[0].x - ellipseTwo.args[0].x) / centerDistance;
                            directionVector.y = (ellipseOne.args[0].y - ellipseTwo.args[0].y) / centerDistance;
                        }
                        var step = 10;
                        while (overlap) {
                            ellipseOne = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseOne.args[0].x + directionVector.x * step, ellipseOne.args[0].y + directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2]);
                            ellipseTwo = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseTwo.args[0].x - directionVector.x * step, ellipseTwo.args[0].y - directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2]);
                            overlap = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].checkEllipsesOverlap(ellipseOne, ellipseTwo);
                        }
                        // reverse last step
                        ellipseOne = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseOne.args[0].x - directionVector.x * step, ellipseOne.args[0].y - directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2]);
                        ellipseTwo = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseTwo.args[0].x + directionVector.x * step, ellipseTwo.args[0].y + directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2]);
                        overlap = true;
                        // granulate step
                        step = 1;
                        while (overlap) {
                            ellipseOne = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseOne.args[0].x + directionVector.x * step, ellipseOne.args[0].y + directionVector.y * step, ellipseOne.args[1], ellipseOne.args[2]);
                            ellipseTwo = __WEBPACK_IMPORTED_MODULE_5_kld_intersections__["Shapes"].ellipse(ellipseTwo.args[0].x - directionVector.x * step, ellipseTwo.args[0].y - directionVector.y * step, ellipseTwo.args[1], ellipseTwo.args[2]);
                            overlap = __WEBPACK_IMPORTED_MODULE_3__shared_services_dataService__["a" /* DataService */].checkEllipsesOverlap(ellipseOne, ellipseTwo);
                        }
                        oneNode.x = ellipseOne.args[0].x - oneNode.style.width / 2;
                        oneNode.y = ellipseOne.args[0].y - oneNode.style.height / 2;
                        otherNode.x = ellipseTwo.args[0].x - otherNode.style.width / 2;
                        otherNode.y = ellipseTwo.args[0].y - otherNode.style.height / 2;
                    }
                    else {
                        var xDist = (oneNode.x + oneNode.style.width / 2) - (otherNode.x + otherNode.style.width / 2), yDist = (oneNode.y + oneNode.style.height / 2) - (otherNode.y + otherNode.style.height / 2), xSpacing = (otherNode.style.width + oneNode.style.width) / 2 + padding, ySpacing = (otherNode.style.height + oneNode.style.height) / 2 + padding, absXDist = Math.abs(xDist), absYDist = Math.abs(yDist);
                        if (absXDist < xSpacing && absYDist < ySpacing) {
                            var moveX = (xSpacing - absXDist) * (Math.sign(xDist) == 0 ? 1 : Math.sign(xDist)) / 2;
                            var moveY = (ySpacing - absYDist) * (Math.sign(yDist) == 0 ? 1 : Math.sign(yDist)) / 2;
                            if (Math.abs(moveX) > Math.abs(moveY)) {
                                //want to move Y, but
                                if ((movable.oneY == 0) && (movable.otherY == 0)) {
                                    moveY = 0;
                                }
                                else {
                                    moveX = 0;
                                }
                            }
                            else {
                                //want to move X, but
                                if ((movable.oneX == 0) && (movable.otherX == 0)) {
                                    moveX = 0;
                                }
                                else {
                                    moveY = 0;
                                }
                            }
                            // moveX = Math.min(moveX, 10)
                            // moveY = Math.min(moveY, 10)
                            oneNode.x += moveX * movable.oneX * alpha;
                            oneNode.y += moveY * movable.oneY * alpha;
                            otherNode.x -= moveX * movable.otherX * alpha;
                            otherNode.y -= moveY * movable.otherY * alpha;
                        }
                    }
                }
            }
            articleIndex = nextArticleIndex;
        }
    };
    D3Service.prototype.parentOfElement = function (d) {
        return this.nodes[d.nodeData.parentIndex];
    };
    D3Service.prototype.nextArticle = function (lastIndex) {
        var i = lastIndex + 1;
        for (; i < this.nodes.length; i++) {
            if (this.nodes[i].nodeData.g == 'g0' || this.nodes[i].nodeData.g == 'g100') {
                return i;
            }
        }
        return i;
    };
    return D3Service;
}());

//# sourceMappingURL=D3Service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/articleService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataService__ = __webpack_require__("../../../../../src/app/shared/services/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_articles_articleFormDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleFormDialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_articles_articleAgreeDialog_component__ = __webpack_require__("../../../../../src/app/modules/articles/articleAgreeDialog.component.ts");




var ArticleService = (function () {
    function ArticleService() {
    }
    ArticleService.getStyle = function (d, stateView, preserveSize) {
        if (preserveSize === void 0) { preserveSize = false; }
        var state = d.nodeData.type == 'group' && d.group.state ? d.group.state : 'S3';
        var style = __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"]({
            color: '#000000',
            font: 0,
            width: 0,
            height: 0,
            radius: 0
        }, d.style);
        style.color = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].getColor(stateView && d.nodeData.g != 'g0' ? state : d.nodeData.g);
        if (!preserveSize) {
            if (d.shape == 'article') {
                style.font = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].font;
                style.width = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].width;
                style.height = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].height;
            }
            else if (d.shape == 'SHAPE_RECT') {
                style.width = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].width;
                style.height = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].height;
            }
            else if (d.shape == 'ellipse' || d.shape == 'rect') {
                var rand = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].random();
                if (d.votes) {
                    rand = (d.votes.agrees + d.votes.disagrees) > 20 ? 1 : (d.votes.agrees + d.votes.disagrees) / 20;
                }
                style.font = d.nodeData.focused ? __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.max * 2 : Math.round(rand * (__WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.max - __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.min)) + __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES[d.nodeData.g].font.min;
            }
        }
        return style;
    };
    ArticleService.getNodeText = function (d, type) {
        switch (true) {
            case type == 'article': return d.title;
            case type == 'user': return d.name;
            case type == 'location': return d.country + ',' + d.state;
            case type == 'group': return d.group.name;
            case type == 'comment': return d.text;
        }
    };
    ArticleService.initNodes = function (data, currentView, stateView, query) {
        var nodes = [], nodeIndex = 0;
        var article_count = data.length;
        var focusedGroup = null;
        if (currentView == 'FOCUS' && data.length > 0) {
            if (query.user) {
                var user = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](data[0].users, { _id: query.user });
                if (user) {
                    focusedGroup = user;
                    focusedGroup.nodeData = {
                        g: 'g21',
                        type: 'user',
                        text: ArticleService.getNodeText(user, 'user'),
                    };
                }
            }
            else if (query.location) {
                var location = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](data[0].locations, { _id: query.location });
                if (location) {
                    focusedGroup = location;
                    focusedGroup.nodeData = {
                        g: 'g22',
                        type: 'location',
                        text: ArticleService.getNodeText(location, 'location'),
                    };
                }
            }
            else if (query.group) {
                var group = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](data[0].groups, function (g) { return g.group._id == query.group; });
                if (group) {
                    focusedGroup = group;
                    focusedGroup.nodeData = {
                        g: group.group.groupType,
                        type: 'group',
                        text: ArticleService.getNodeText(group, 'group'),
                    };
                }
            }
            if (focusedGroup) {
                focusedGroup.nodeData.nodeIndex = 0;
                focusedGroup.nodeData.parentIndex = -1;
                focusedGroup.nodeData.movable = false;
                focusedGroup.nodeData.focused = true;
                focusedGroup.fx = focusedGroup.fy = 0;
                focusedGroup.shape = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SHAPES[focusedGroup.nodeData.g];
                focusedGroup.style = ArticleService.getStyle(focusedGroup, stateView);
                nodes.push(focusedGroup);
                nodeIndex++;
            }
            else {
                return [];
            }
        }
        __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](data, function (article, i) {
            // Add article node
            article.nodeData = {
                nodeIndex: nodeIndex,
                g: 'g0',
                parentIndex: currentView == 'FOCUS' ? 0 : nodeIndex,
                type: 'article',
                text: ArticleService.getNodeText(article, 'article'),
                link: currentView == 'FOCUS' ? { width: 3, color: '#ccc' } : null,
                movable: false
            };
            if (currentView == 'DEFAULT') {
                // article.fx = article.x = i % 2 ? 620 : 0;
                // article.fy = article.y = i * 620;
                if (i < (article_count - 2))
                    article.fx = article.x = i * __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].GAP;
                else
                    article.fx = article.x = (i - article_count) * __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].GAP;
                article.fy = article.y = 0;
            }
            else if (currentView == 'FOCUS') {
                var countAround = 4;
                var circleIndex = Math.floor(i / countAround);
                var itemIndex = i % countAround;
                var distance = (circleIndex + 1) * 600;
                var angle = -Math.PI / countAround * circleIndex + Math.PI * 2 / countAround * itemIndex;
                article.fx = article.x = focusedGroup.fx + Math.round(Math.cos(angle) * distance) - __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES.g0.width / 2;
                article.fy = article.y = focusedGroup.fy + Math.round(Math.sin(angle) * distance) - __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SIZES.g0.height / 2;
            }
            else if (currentView == 'ARTICLE') {
                article.nodeData.g = 'g100';
                article.nodeData.type = 'article_detail';
                article.x = article.fx = 0;
                article.y = article.fy = 0;
            }
            article.shape = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SHAPES[article.nodeData.g];
            article.style = ArticleService.getStyle(article, stateView);
            nodes.push(article);
            nodeIndex++;
            // Add the article's child nodes
            var clustersPopulation = {};
            var newNodes = [];
            // Add Group nodes.
            newNodes = newNodes.concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["map"](__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](ArticleService.sliceGroup(article.groups, 'group', currentView, focusedGroup), function (d) { return stateView ? d.group.state : d.group.groupType; }), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                var clusterName = stateView ? d.group.state : d.group.groupType;
                clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: d.group.groupType,
                    clusterName: clusterName,
                    indexInCluster: clustersPopulation[clusterName] - 1,
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'group',
                    text: ArticleService.getNodeText(d, 'group'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
            if (currentView == 'ARTICLE') {
                // Add User nodes.
                newNodes = newNodes.concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["map"](ArticleService.sliceGroup(article.users, 'user', currentView, focusedGroup), function (d, index) {
                    var parentIndex = article.nodeData.nodeIndex;
                    var clusterName = stateView ? 'S3' : 'g21';
                    clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
                    d.nodeData = {
                        nodeIndex: nodeIndex,
                        g: 'g21',
                        clusterName: clusterName,
                        indexInCluster: clustersPopulation[clusterName] - 1,
                        parentIndex: parentIndex,
                        article_id: article._id,
                        type: 'user',
                        text: ArticleService.getNodeText(d, 'user'),
                        link: null,
                        movable: true
                    };
                    d.fx = d.fy = null;
                    nodeIndex++;
                    return d;
                }));
                // Add Location nodes.
                newNodes = newNodes.concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["map"](ArticleService.sliceGroup(article.locations, 'location', currentView, focusedGroup), function (d, index) {
                    var parentIndex = article.nodeData.nodeIndex;
                    var clusterName = stateView ? 'S3' : 'g22';
                    clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
                    d.nodeData = {
                        nodeIndex: nodeIndex,
                        g: 'g22',
                        clusterName: clusterName,
                        indexInCluster: clustersPopulation[clusterName] - 1,
                        parentIndex: parentIndex,
                        article_id: article._id,
                        type: 'location',
                        text: ArticleService.getNodeText(d, 'location'),
                        link: null,
                        movable: true
                    };
                    d.fx = d.fy = null;
                    nodeIndex++;
                    return d;
                }));
            }
            // Add Comment nodes.
            newNodes = newNodes.concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["map"](ArticleService.sliceGroup(article.comments, 'comment', currentView, focusedGroup), function (d, index) {
                var parentIndex = article.nodeData.nodeIndex;
                var clusterName = stateView ? 'S3' : 'g5';
                clustersPopulation[clusterName] = clustersPopulation[clusterName] ? clustersPopulation[clusterName] + 1 : 1;
                d.nodeData = {
                    nodeIndex: nodeIndex,
                    g: 'g5',
                    clusterName: clusterName,
                    indexInCluster: clustersPopulation[clusterName] - 1,
                    parentIndex: parentIndex,
                    article_id: article._id,
                    type: 'comment',
                    text: ArticleService.getNodeText(d, 'comment'),
                    link: null,
                    movable: true
                };
                d.fx = d.fy = null;
                nodeIndex++;
                return d;
            }));
            newNodes.forEach(function (newNode, index) {
                newNode.shape = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].SHAPES[newNode.nodeData.g];
                newNode.style = ArticleService.getStyle(newNode, stateView);
                var position = __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].enterPosition(article, newNode.nodeData.clusterName, index);
                newNode.x = position.point.x + newNode.style.width * position.widthMultiplier;
                newNode.y = position.point.y + newNode.style.height * position.heightMultiplier;
            });
            article.nodeData.clustersPopulation = clustersPopulation;
            nodes = nodes.concat(newNodes);
        });
        return nodes;
    };
    ArticleService.sliceGroup = function (nodes, nodeType, currentView, focusedGroup) {
        var sliceNodes = nodes;
        if (currentView == 'FOCUS') {
            var focusedType_1 = focusedGroup.nodeData.type;
            if (focusedType_1 == nodeType) {
                var focusedId = focusedType_1 == 'group' ? focusedGroup.group._id : focusedGroup._id;
                sliceNodes = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](nodes, function (d) {
                    var id = focusedType_1 == 'group' ? d.group._id : d._id;
                    return focusedId != id;
                });
            }
        }
        if (nodeType == 'comment') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](sliceNodes)
                .sortBy(function (d) { return d.votes.agrees.length + d.votes.disagrees.length; })
                .reverse()
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].NODE_COUNTS[currentView].g5);
        }
        else if (nodeType == 'group') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](sliceNodes)
                .groupBy(function (d) { return d.group.groupType; })
                .map(function (groups, g) { return __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](groups)
                .sortBy(function (d) { return g == '11' ? d.createdAt : d.votes.agrees + d.votes.disagrees; })
                .reverse()
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].NODE_COUNTS[currentView][g]); })
                .flatten()
                .value();
        }
        if (nodeType == 'user') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](sliceNodes)
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].NODE_COUNTS[currentView].g21);
        }
        else if (nodeType == 'location') {
            sliceNodes = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](sliceNodes)
                .value()
                .slice(0, __WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].NODE_COUNTS[currentView].g22);
        }
        return sliceNodes;
    };
    ArticleService.popupArticleForm = function (dialog, node, callback) {
        var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_2__modules_articles_articleFormDialog_component__["a" /* ArticleFormDialog */], {
            width: '550px',
            height: node == null ? '740px' : '680px',
            data: { node: node },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) { return callback(result); });
    };
    ArticleService.openArticleSource = function (node) {
        window.open(node.articleLink, '_blank');
    };
    ArticleService.copyArticleLink = function (node, mdSnackBar) {
        var link = window.location.origin + '/?article=' + node.slug;
        if (__WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].copyToClipboard(link)) {
            mdSnackBar.open('<' + link + '> copied to clipboard', null, { duration: 1500 });
        }
        else {
            mdSnackBar.open('Copying to clipboard failed', null, { duration: 1500 });
        }
    };
    ArticleService.copyArticleId = function (node, mdSnackBar) {
        if (__WEBPACK_IMPORTED_MODULE_0__dataService__["a" /* DataService */].copyToClipboard(node.slug)) {
            mdSnackBar.open('Article Id: ' + node.slug + ' copied to clipboard', null, { duration: 1500 });
        }
        else {
            mdSnackBar.open('Copying to clipboard failed', null, { duration: 1500 });
        }
    };
    ArticleService.popupAgreeDialog = function (node, dialog, callback) {
        if (node.nodeData.g == 'g1' || node.nodeData.g == 'g2' || node.nodeData.g == 'g3' || node.nodeData.g == 'g4' || node.nodeData.g == 'g5' || node.nodeData.g == 'g6' || node.nodeData.g == 'g7' || node.nodeData.g == 'g12' || node.nodeData.g == 'g13') {
            // show agree disagree dialog
            var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_3__modules_articles_articleAgreeDialog_component__["a" /* ArticleAgreeDialog */], {
                width: '350px',
                data: { node: node }
            });
            dialogRef.afterClosed().subscribe(function (result) { return callback(result); });
        }
    };
    return ArticleService;
}());

//# sourceMappingURL=articleService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/authService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_loadingSpinnerService__ = __webpack_require__("../../../../../src/app/shared/services/loadingSpinnerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = AuthService_1 = (function () {
    function AuthService(_auth, loadingSpinnerService, restangular, _shared) {
        this._auth = _auth;
        this.loadingSpinnerService = loadingSpinnerService;
        this.restangular = restangular;
        this._shared = _shared;
    }
    AuthService.prototype.login = function (provider) {
        switch (true) {
            case provider == 'GOOGLE':
                this._auth.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID);
                break;
            //case provider == 'FACEBOOK': this._auth.signIn(FacebookLoginProvider.PROVIDER_ID); break;
            case provider == 'TWITTER': break;
        }
    };
    AuthService.prototype.saveCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService.getCurrentUser = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser == null || currentUser == '')
            return null;
        return JSON.parse(currentUser);
    };
    AuthService.isUserLoggedIn = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser == null || currentUser == '') {
            return false;
        }
        return true;
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this._auth.signOut();
        this.restangular.all('auth').customGET('logout');
    };
    AuthService.prototype.disconnect = function (provider, callback) {
        var _this = this;
        //this._auth.signOut();
        if (AuthService_1.getCurrentUser() != null) {
            this.loadingSpinnerService.show();
            this.restangular.one('auth', AuthService_1.getCurrentUser()._id).customPOST({ provider: provider }, 'removeSocialAccount').subscribe(function (updatedUser) {
                _this.loadingSpinnerService.hide();
                _this.saveCurrentUser(updatedUser);
                callback(updatedUser);
            });
        }
        else {
        }
    };
    AuthService.prototype.me = function (callback) {
        var _this = this;
        this.restangular.all('auth').customGET('me').subscribe(function (user) {
            _this.saveCurrentUser(user);
            callback(user);
        });
    };
    AuthService.prototype.subscribe = function (callback) {
        var _this = this;
        this._auth.authState.subscribe(function (user) {
            // try to login
            if (user != null) {
                _this.loadingSpinnerService.show();
                // get user locations
                if (AuthService_1.getCurrentUser() == null) {
                    _this._shared.getLocation().then(function (locData) {
                        var location = {};
                        location['country'] = locData['country'];
                        location['state'] = locData['regionName'];
                        location['city'] = locData['city'];
                        user['location'] = location;
                        _this.restangular.all('auth').customPOST(user, 'login').subscribe(function (savedUser) {
                            _this.loadingSpinnerService.hide();
                            _this.saveCurrentUser(savedUser);
                            callback(savedUser);
                        });
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.restangular.one('auth', AuthService_1.getCurrentUser()._id).customPOST(user, 'addSocialAccount').subscribe(function (updatedUser) {
                        _this.loadingSpinnerService.hide();
                        _this.saveCurrentUser(updatedUser);
                        callback(updatedUser);
                    });
                }
            }
        });
    };
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_loadingSpinnerService__["a" /* LoadingSpinnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], AuthService);

var AuthService_1, _a, _b, _c, _d;
//# sourceMappingURL=authService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kld_intersections__ = __webpack_require__("../../../../kld-intersections/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kld_intersections___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_kld_intersections__);

var DataService = (function () {
    function DataService() {
    }
    DataService.getColor = function (g, weight) {
        if (weight === void 0) { weight = 0; }
        if (this.COLORS[g].length == 1)
            return this.COLORS[g][0];
        var index = Math.floor(DataService.random() * this.COLORS[g].length);
        return this.COLORS[g][index];
    };
    DataService.random = function () {
        return Math.random();
    };
    DataService.polygon = function (article, group) {
        // returns polyline, because polygon
        // g21 (user), g22(location) -- will be put in the same bucket of g13
        // --- constants ---
        var farArmLength = this.regionDiameter * 3;
        var upperLineAngle = 50 * Math.PI / 180; // degrees
        var sideLineAngle = 15 * Math.PI / 180; // degrees
        var toplineOffset = 44;
        var sidelineOffset = 45;
        var permitOffset = 10;
        var points = [];
        if ((group == "g11") || (group == "g6")) {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset - permitOffset, article.y + permitOffset);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset + permitOffset, article.y + permitOffset);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(upperLineAngle) * farArmLength - permitOffset, leftPoint.y - Math.sin(upperLineAngle) * farArmLength);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(upperLineAngle) * farArmLength + permitOffset, leftPoint.y - Math.sin(upperLineAngle) * farArmLength);
            points = [leftFarPoint, leftPoint, rightPoint, rightFarPoint, leftFarPoint];
        }
        else if (group == "g5") {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset - permitOffset, article.y + article.style.height - permitOffset);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset + permitOffset, article.y + article.style.height - permitOffset);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(upperLineAngle) * farArmLength - permitOffset, leftPoint.y + Math.sin(upperLineAngle) * farArmLength);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(upperLineAngle) * farArmLength + permitOffset, rightPoint.y + Math.sin(upperLineAngle) * farArmLength);
            points = [leftFarPoint, leftPoint, rightPoint, rightFarPoint, leftFarPoint];
        }
        else if (group == "g4") {
            var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + sidelineOffset - permitOffset);
            var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + article.style.height - sidelineOffset + permitOffset);
            var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x - Math.cos(sideLineAngle) * farArmLength, topPoint.y - Math.sin(sideLineAngle) * farArmLength - permitOffset);
            var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x - Math.cos(sideLineAngle) * farArmLength, bottomPoint.y + Math.sin(sideLineAngle) * farArmLength + permitOffset);
            points = [topPoint, bottomPoint, bottomFarPoint, topFarPoint, topPoint];
        }
        else if (group == "g2") {
            var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + sidelineOffset - permitOffset);
            var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + article.style.height - sidelineOffset + permitOffset);
            var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x + Math.cos(sideLineAngle) * farArmLength, topPoint.y - Math.sin(sideLineAngle) * farArmLength - permitOffset);
            var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x + Math.cos(sideLineAngle) * farArmLength, bottomPoint.y + Math.sin(sideLineAngle) * farArmLength + permitOffset);
            points = [topPoint, bottomPoint, bottomFarPoint, topFarPoint, topPoint];
        }
        else if (group == "g1") {
            var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset + permitOffset, article.y - permitOffset);
            var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x - Math.cos(upperLineAngle) * farArmLength + permitOffset, topPoint.y - Math.sin(upperLineAngle) * farArmLength);
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + sidelineOffset + permitOffset);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * farArmLength, leftPoint.y - Math.sin(sideLineAngle) * farArmLength + permitOffset);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + permitOffset);
            points = [topPoint, leftPoint, leftFarPoint, topFarPoint, topPoint];
        }
        else if ((group == "g12")) {
            var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset - permitOffset, article.y + permitOffset);
            var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x + Math.cos(upperLineAngle) * farArmLength - permitOffset, topPoint.y - Math.sin(upperLineAngle) * farArmLength);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + sidelineOffset + permitOffset);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y - Math.sin(sideLineAngle) * farArmLength + permitOffset);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + permitOffset);
            points = [topPoint, rightPoint, rightFarPoint, topFarPoint, topPoint];
        }
        else if ((group == "g13") || (group == "g21") || (group == "g22")) {
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + article.style.height - sidelineOffset - permitOffset);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength - permitOffset);
            var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset - permitOffset, article.y + article.style.height - permitOffset);
            var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x + Math.cos(upperLineAngle) * farArmLength - permitOffset, bottomPoint.y + Math.sin(upperLineAngle) * farArmLength);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - permitOffset, article.y + article.style.height - permitOffset);
            points = [rightPoint, bottomPoint, bottomFarPoint, rightFarPoint, rightPoint];
        }
        else if ((group == "g3") || (group == "g7")) {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + article.style.height - sidelineOffset - permitOffset);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * farArmLength, leftPoint.y + Math.sin(sideLineAngle) * farArmLength - permitOffset);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset + permitOffset, article.y + article.style.height - permitOffset);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x - Math.cos(upperLineAngle) * farArmLength + permitOffset, rightPoint.y + Math.sin(upperLineAngle) * farArmLength);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + permitOffset, article.y + article.style.height - permitOffset);
            points = [leftPoint, rightPoint, rightFarPoint, leftFarPoint, leftPoint];
        }
        else if (group == "S1") {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y - farArmLength);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x - Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightFarPoint.x, leftFarPoint.y);
            points = [leftPoint, rightPoint, rightFarPoint, cornerPoint, leftFarPoint];
        }
        else if (group == "S2") {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y - farArmLength);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
            var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightFarPoint.x, leftFarPoint.y);
            points = [leftPoint, rightPoint, rightFarPoint, cornerPoint, leftFarPoint];
        }
        else if (group == "S3") {
            var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height);
            var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * farArmLength, leftPoint.y + Math.sin(sideLineAngle) * farArmLength);
            var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
            var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
            points = [leftPoint, leftFarPoint, rightFarPoint, rightPoint];
        }
        return __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].polyline(this.convertPointsToNums(points));
    };
    DataService.enterPosition = function (article, group, index) {
        var farArmLength = this.regionDiameter * 1.5;
        var upperLineAngle = 50 * Math.PI / 180; // degrees
        var sideLineAngle = 15 * Math.PI / 180; // degrees
        var toplineOffset = 154;
        var sidelineOffset = 45;
        var points = [];
        var widthMultiplier;
        var heightMultiplier;
        if (article.nodeData.g == 'g0') {
            if ((group == "g11") || (group == "g6")) {
                var len = farArmLength / (group == "g11" ? 2 : 1);
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset, article.y);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset, article.y);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(upperLineAngle) * len, leftPoint.y - Math.sin(upperLineAngle) * len);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(upperLineAngle) * len, leftPoint.y - Math.sin(upperLineAngle) * len);
                points = [rightFarPoint, leftFarPoint];
                widthMultiplier = -1.5;
                heightMultiplier = 0;
            }
            else if (group == "g5") {
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset, article.y + article.style.height);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset, article.y + article.style.height);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(upperLineAngle) * farArmLength, leftPoint.y + Math.sin(upperLineAngle) * farArmLength);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(upperLineAngle) * farArmLength, rightPoint.y + Math.sin(upperLineAngle) * farArmLength);
                points = [rightFarPoint, leftFarPoint];
                widthMultiplier = -0.5;
                heightMultiplier = -1;
            }
            else if (group == "g4") {
                var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + sidelineOffset);
                var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height - sidelineOffset);
                var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x - Math.cos(sideLineAngle) * farArmLength, topPoint.y - Math.sin(sideLineAngle) * farArmLength);
                var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x - Math.cos(sideLineAngle) * farArmLength, bottomPoint.y + Math.sin(sideLineAngle) * farArmLength);
                points = [bottomFarPoint, topFarPoint];
                widthMultiplier = -0.8;
                heightMultiplier = -0.5;
            }
            else if (group == "g2") {
                var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + sidelineOffset);
                var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height - sidelineOffset);
                var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x + Math.cos(sideLineAngle) * farArmLength, topPoint.y - Math.sin(sideLineAngle) * farArmLength);
                var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x + Math.cos(sideLineAngle) * farArmLength, bottomPoint.y + Math.sin(sideLineAngle) * farArmLength);
                points = [bottomFarPoint, topFarPoint];
                widthMultiplier = -0.2;
                heightMultiplier = -0.5;
            }
            else if (group == "g1") {
                var len = farArmLength / (index % 2 ? 2 : 1);
                var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset, article.y);
                var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x - Math.cos(upperLineAngle) * len, topPoint.y - Math.sin(upperLineAngle) * len);
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + sidelineOffset);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * len, leftPoint.y - Math.sin(sideLineAngle) * len);
                var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y);
                points = [leftFarPoint, topFarPoint];
                widthMultiplier = 0;
                heightMultiplier = 0;
            }
            else if ((group == "g12")) {
                var len = farArmLength / (index % 2 ? 2 : 1);
                var topPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset, article.y);
                var topFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](topPoint.x + Math.cos(upperLineAngle) * len, topPoint.y - Math.sin(upperLineAngle) * len);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + sidelineOffset);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * len, rightPoint.y - Math.sin(sideLineAngle) * len);
                var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y);
                points = [rightFarPoint, topFarPoint];
                widthMultiplier = -0.5;
                heightMultiplier = -0.5;
            }
            else if ((group == "g13") || (group == "g21") || (group == "g22")) {
                var len = farArmLength / (group == "g13" ? 2 : 1);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height - sidelineOffset);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * len, rightPoint.y + Math.sin(sideLineAngle) * len);
                var bottomPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width - toplineOffset, article.y + article.style.height);
                var bottomFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](bottomPoint.x + Math.cos(upperLineAngle) * len, bottomPoint.y + Math.sin(upperLineAngle) * len);
                var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
                points = [bottomFarPoint, rightFarPoint];
                widthMultiplier = -1;
                heightMultiplier = -1;
            }
            else if ((group == "g3") || (group == "g7")) {
                var len = farArmLength / (group == "g3" ? 2 : 1);
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height - sidelineOffset);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * len, leftPoint.y + Math.sin(sideLineAngle) * len);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + toplineOffset, article.y + article.style.height);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x - Math.cos(upperLineAngle) * len, rightPoint.y + Math.sin(upperLineAngle) * len);
                points = [rightFarPoint, leftFarPoint];
                widthMultiplier = 0;
                heightMultiplier = -1;
            }
            else if (group == "S1") {
                var articlePoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y);
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y - farArmLength);
                var leftFarPoint1 = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 4, article.y - farArmLength);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x - Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
                var rightFarPoint1 = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x - Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength / 4);
                var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightFarPoint.x, leftFarPoint.y);
                var startPoints = [leftFarPoint1, cornerPoint, rightFarPoint1];
                var multiplier = [[-0.3, 1], [0.5, 0.5], [1, -0.5]];
                points = [startPoints[index % startPoints.length]];
                widthMultiplier = multiplier[index % startPoints.length][0];
                heightMultiplier = multiplier[index % startPoints.length][1];
            }
            else if (group == "S2") {
                var articlePoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.width, article.y);
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y - farArmLength);
                var leftFarPoint1 = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width * 3 / 4, article.y - farArmLength);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
                var rightFarPoint1 = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength / 4);
                var cornerPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightFarPoint.x, leftFarPoint.y);
                var startPoints = [leftFarPoint1, cornerPoint, rightFarPoint1];
                var multiplier = [[0.3, 1], [-0.5, 0.5], [-1, -0.5]];
                points = [startPoints[index % startPoints.length]];
                widthMultiplier = multiplier[index % startPoints.length][0];
                heightMultiplier = multiplier[index % startPoints.length][1];
            }
            else if (group == "S3") {
                var leftPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height);
                var leftFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](leftPoint.x - Math.cos(sideLineAngle) * farArmLength, leftPoint.y + Math.sin(sideLineAngle) * farArmLength);
                var rightPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
                var rightFarPoint = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](rightPoint.x + Math.cos(sideLineAngle) * farArmLength, rightPoint.y + Math.sin(sideLineAngle) * farArmLength);
                points = [leftFarPoint, rightFarPoint];
                widthMultiplier = 0;
                heightMultiplier = -1;
            }
        }
        else if (article.nodeData.g == 'g100') {
            var groupOrder = ['g11', 'g1', 'g2', 'g3', 'g4', 'g7', 'g6', 'g12', 'g13', 'g21', 'g22'];
            if (group == 'g5') {
                var startsPoints = [new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 4, article.y + article.style.height + farArmLength / 2),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y + article.style.height + farArmLength / 2)];
                points = [startsPoints[index % startsPoints.length]];
                widthMultiplier = 0.3;
                heightMultiplier = -1;
            }
            else {
                points = [new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width + farArmLength / (groupOrder.indexOf(group) % 2 ? 1 : 2), article.y + article.style.height * 1.5 / (Math.ceil(groupOrder.length / 2)) * (Math.floor(groupOrder.indexOf(group) / 2) + 1))];
                widthMultiplier = -1;
                heightMultiplier = 0;
            }
        }
        return { point: this.averagePoint(points), widthMultiplier: widthMultiplier, heightMultiplier: heightMultiplier };
    };
    DataService.pullPoint = function (article, group, index) {
        var point;
        if (article.nodeData.g == 'g0') {
            if ((group == "g11") || (group == "g6")) {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width * (1 + index) / (article.nodeData.clustersPopulation[group] + 1), article.y);
            }
            else if (group == "g5") {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y + article.style.height);
            }
            else if (group == "g4") {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height / 2);
            }
            else if (group == "g2") {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height / 2);
            }
            else if (group == "g1") {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y);
            }
            else if ((group == "g12")) {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y);
            }
            else if ((group == "g13") || (group == "g21") || (group == "g22")) {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height);
            }
            else if ((group == "g3") || (group == "g7")) {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height);
            }
            else if (group == "S1") {
                var points = [
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 4, article.y),
                    // new Point2D(article.x, article.y),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height / 2)
                ];
                point = points[index % points.length];
            }
            else if (group == "S2") {
                var points = [
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width * 3 / 4, article.y),
                    // new Point2D(article.x + article.style.width, article.y),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height / 2)
                ];
                point = points[index % points.length];
            }
            else if (group == "S3") {
                var points = [
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x, article.y + article.style.height),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y + article.style.height),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height)
                ];
                point = points[index % points.length];
            }
        }
        else if (article.nodeData.g == 'g100') {
            var groupOrder = ['g11', 'g1', 'g2', 'g3', 'g4', 'g7', 'g6', 'g12', 'g13', 'g21', 'g22'];
            if (group == 'g5') {
                var startsPoints = [new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 4, article.y + article.style.height),
                    new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width / 2, article.y + article.style.height)];
                point = startsPoints[index % startsPoints.length];
            }
            else {
                point = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](article.x + article.style.width, article.y + article.style.height * 1.5 / (Math.ceil(groupOrder.length / 2)) * (Math.floor(groupOrder.indexOf(group) / 2) + 1));
            }
        }
        return point;
    };
    DataService.convertPointsToNums = function (points) {
        var coords = [];
        for (var i = 0; i < points.length; i++) {
            coords.push(points[i].x, points[i].y);
        }
        return coords;
    };
    DataService.checkPointInPolygon = function (point, polygon) {
        // This function returns true if the point is inside the polygon, otherwise returns false.
        var points = polygon.args[0];
        var lineCount = 0;
        var signSum = 0;
        for (var i = 0; i < points.length - 1; i++) {
            var currPoint = points[i];
            var nextPoint = points[(i + 1) % points.length];
            if (currPoint.x == nextPoint.x && currPoint.y == nextPoint.y) {
                continue;
            }
            else {
                lineCount++;
                var vectorA = { x: nextPoint.x - currPoint.x, y: nextPoint.y - currPoint.y };
                var vectorB = { x: point.x - currPoint.x, y: point.y - currPoint.y };
                var product = vectorA.x * vectorB.y - vectorB.x * vectorA.y;
                signSum += Math.sign(product);
            }
        }
        if (Math.abs(signSum) == lineCount) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.checkEllipsesOverlap = function (ellipseOne, ellipseTwo) {
        // returns true if the two ellipse-surfaces overlap
        var intersection = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Intersection"].intersect(ellipseOne, ellipseTwo);
        if (intersection.status == 'Intersection') {
            return true;
        }
        else {
            var rectangleOne = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].rectangle(ellipseOne.args[0].x - ellipseOne.args[1], ellipseOne.args[0].y - ellipseOne.args[2], 2 * ellipseOne.args[1], 2 * ellipseOne.args[2]);
            var rectangleTwo = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].rectangle(ellipseTwo.args[0].x - ellipseTwo.args[1], ellipseTwo.args[0].y - ellipseTwo.args[2], 2 * ellipseTwo.args[1], 2 * ellipseTwo.args[2]);
            if (this.checkPointInRectangle(ellipseOne.args[0], rectangleTwo) || this.checkPointInRectangle(ellipseTwo.args[0], rectangleOne)) {
                return true;
            }
            return false;
        }
    };
    DataService.checkPointInRectangle = function (point, rectangle) {
        if (rectangle.name != "Rectangle") {
            throw Error("DataService.checkPointInRectangle:ParameterNotRectangle");
        }
        if (Math.sign(rectangle.args[0].x - point.x) == Math.sign(rectangle.args[1].x - point.x)) {
            return false;
        }
        if (Math.sign(rectangle.args[0].y - point.y) == Math.sign(rectangle.args[1].y - point.y)) {
            return false;
        }
        return true;
    };
    DataService.averagePoint = function (points) {
        var xSum = 0, ySum = 0;
        for (var i = 0; i < points.length; i++) {
            xSum += points[i].x;
            ySum += points[i].y;
        }
        return new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](xSum / points.length, ySum / points.length);
    };
    DataService.distance = function (pointOne, pointTwo) {
        var xSquare = (pointOne.x - pointTwo.x) * (pointOne.x - pointTwo.x);
        var ySquare = (pointOne.y - pointTwo.y) * (pointOne.y - pointTwo.y);
        return Math.sqrt(xSquare + ySquare);
    };
    DataService.putInside = function (node, polygon) {
        //returns {x:xOffset, y:yOffset} to put node into polygon
        var x = node.x, y = node.y, width = node.style.width, height = node.style.height;
        var nodeShape = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].rectangle(x, y, width, height);
        var intersection = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Intersection"].intersect(nodeShape, polygon);
        if (intersection.status == 'Intersection') {
            var nodeCenter = new __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Point2D"](node.x + node.style.width / 2, node.y + node.style.height / 2);
            var polygonPoints = void 0;
            if (polygon.name == "Polygon") {
                polygonPoints = polygon.args[0];
            }
            else {
                polygonPoints = polygon.args[0].slice(0, -1);
            }
            var polygonCenter = this.averagePoint(polygonPoints);
            var distance = Math.sqrt((polygonCenter.x - nodeCenter.x) * (polygonCenter.x - nodeCenter.x) + (polygonCenter.y - nodeCenter.y) * (polygonCenter.y - nodeCenter.y));
            var directionVector = { x: (polygonCenter.x - nodeCenter.x) / distance, y: (polygonCenter.y - nodeCenter.y) / distance };
            var isInside = false;
            var step = 10;
            while (!isInside) {
                x += step * directionVector.x;
                y += step * directionVector.y;
                var rect = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].rectangle(x, y, width, height);
                var inter = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Intersection"].intersect(rect, polygon);
                isInside = !(inter.status == 'Intersection');
            }
            x -= step * directionVector.x;
            y -= step * directionVector.y;
            step = 1;
            while (!isInside) {
                x += step * directionVector.x;
                y += step * directionVector.y;
                var rect = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Shapes"].rectangle(x, y, width, height);
                var inter = __WEBPACK_IMPORTED_MODULE_0_kld_intersections__["Intersection"].intersect(rect, polygon);
                isInside = !(inter.status == 'Intersection');
            }
            return { x: x - node.x, y: y - node.y };
        }
        else {
            console.log('This should not happen');
            return null;
        }
    };
    DataService.copyToClipboard = function (text) {
        var textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        var result = false;
        try {
            result = document.execCommand('copy');
        }
        catch (err) {
            result = false;
        }
        document.body.removeChild(textArea);
        return result;
    };
    return DataService;
}());

DataService.formats = {
    backend: {
        date: 'YYYY-MM-DD',
        startdate: 'YYYY-MM-DD 00:00:00',
        enddate: 'YYYY-MM-DD 23:59:59',
        datetime: 'YYYY-MM-DD HH:mm:ss'
    }
};
DataService.COLORS = {
    g0: ['#ffffff'],
    g1: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'],
    g2: ['#eceff1', '#cfd8dc', '#607d8b', '#546e7a'],
    g3: ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835'],
    g4: ['#d1c4e9', '#b39ddb', '#7e57c2', '#673ab7'],
    g5: ['#fafafa', '#f5f5f5', '#eeeeee'],
    g6: ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'],
    g7: ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33'],
    g11: ['#ff5722'],
    g12: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    g13: ['#efebe9', '#d7ccc8', '#bcaaa4'],
    g21: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1'],
    g22: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00'],
    // states
    S1: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'],
    S2: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373'],
    S3: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E'],
    // others
    g100: ['#ffffff']
};
DataService.SHAPES = {
    g0: 'article',
    g1: 'ellipse',
    g2: 'rect',
    g3: 'ellipse',
    g4: 'rect',
    g5: 'rect',
    g6: 'rect',
    g7: 'ellipse',
    g11: 'rect',
    g12: 'ellipse',
    g13: 'ellipse',
    g21: 'ellipse',
    g22: 'ellipse',
    g100: 'SHAPE_RECT' // ARTICLE VIEW - ARTICLE RECT
};
DataService.NODE_COUNTS = {
    DEFAULT: { g1: 5, g2: 5, g3: 5, g4: 5, g5: 20, g6: 0, g7: 0, g11: 5, g12: 5, g13: 5, g21: 5, g22: 5 },
    FOCUS: { g1: 10, g2: 10, g3: 10, g4: 10, g10: 20, g6: 0, g7: 0, g11: 1, g12: 10, g13: 10, g21: 10, g22: 10 },
    ARTICLE: { g1: 15, g2: 15, g3: 15, g4: 15, g15: 100, g6: 0, g7: 0, g11: 1, g12: 15, g13: 15, g21: 15, g22: 15 }
};
DataService.SIZES = {
    g0: { font: 14, width: 300, height: 300 },
    g1: { font: { min: 10, max: 24 } },
    g2: { font: { min: 10, max: 18 } },
    g3: { font: { min: 10, max: 24 } },
    g4: { font: { min: 10, max: 18 } },
    g5: { font: { min: 10, max: 14 } },
    g6: { font: { min: 10, max: 18 } },
    g7: { font: { min: 10, max: 24 } },
    g11: { font: { min: 24, max: 24 } },
    g12: { font: { min: 10, max: 24 } },
    g13: { font: { min: 10, max: 24 } },
    g21: { font: { min: 10, max: 24 } },
    g22: { font: { min: 10, max: 24 } },
    g100: { width: 900, height: 600 }
};
DataService.CAROUSEL_SIZE = 5;
DataService.regionDiameter = 200;
DataService.GAP = 320;
DataService.CAROUSEL_SCALE_1 = 1.7;
DataService.CAROUSEL_SCALE_2 = 1.4;
DataService.groupDataSet = {};
//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loadingSpinnerService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingSpinnerService = (function () {
    function LoadingSpinnerService() {
        this.bShow = false;
    }
    LoadingSpinnerService.prototype.show = function () {
        this.bShow = true;
    };
    LoadingSpinnerService.prototype.hide = function () {
        this.bShow = false;
    };
    return LoadingSpinnerService;
}());
LoadingSpinnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoadingSpinnerService);

//# sourceMappingURL=loadingSpinnerService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authService__ = __webpack_require__("../../../../../src/app/shared/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedService = SharedService_1 = (function () {
    function SharedService(_http) {
        this._http = _http;
        this.action = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.action$ = this.action.asObservable();
    }
    SharedService.prototype.emitAction = function (data) {
        this.action.next(data);
    };
    SharedService.prototype.getLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get('http://ip-api.com/json').subscribe(function (data) {
                if (data)
                    resolve(data);
                else
                    reject();
            });
        });
    };
    SharedService.canDeleteArticle = function (article) {
        if (!__WEBPACK_IMPORTED_MODULE_3__authService__["a" /* AuthService */].getCurrentUser()) {
            return false;
        }
        else {
            // check user is article owner
            if (!SharedService_1.isArticleOwner(__WEBPACK_IMPORTED_MODULE_3__authService__["a" /* AuthService */].getCurrentUser()['_id'], article))
                return false;
            // check there are other's opinions
            if (SharedService_1.hasOthersOpinions(__WEBPACK_IMPORTED_MODULE_3__authService__["a" /* AuthService */].getCurrentUser()['_id'], article))
                return false;
            //check there are other's agree/Disagree
            if (SharedService_1.hasOthersVotes(__WEBPACK_IMPORTED_MODULE_3__authService__["a" /* AuthService */].getCurrentUser()['_id'], article))
                return false;
            //console.log(article)
            return true;
        }
    };
    SharedService.hasOthersOpinions = function (userId, article) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](article.comments, function (comment) { return comment['user'].toString() !== userId; }) >= 0;
    };
    SharedService.hasOthersVotes = function (userId, article) {
        __WEBPACK_IMPORTED_MODULE_4_lodash__["flatten"](__WEBPACK_IMPORTED_MODULE_4_lodash__["concat"](article['groups'], article['comments'])
            .map(function (item) { return __WEBPACK_IMPORTED_MODULE_4_lodash__["toPairs"](item['votes'])
            .map(function (vote) { return vote[1]; }); })).forEach(function (votes) {
            if (__WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](votes, function (vote) { return vote !== userId; }) >= 0) {
                console.log('has other vote');
                return true;
            }
        });
        return false;
    };
    SharedService.isArticleOwner = function (userId, article) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](article.users, function (user) { return user['_id'].toString() === userId; }) >= 0;
    };
    return SharedService;
}());
SharedService = SharedService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SharedService);

var SharedService_1, _a;
//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_app_module__ = __webpack_require__("../../../../../src/app/core/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_core_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map