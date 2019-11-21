webpackJsonp([4],{

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutonePageModule", function() { return TutonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutone__ = __webpack_require__(988);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutonePageModule = /** @class */ (function () {
    function TutonePageModule() {
    }
    TutonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutone__["a" /* TutonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutone__["a" /* TutonePage */]),
            ],
        })
    ], TutonePageModule);
    return TutonePageModule;
}());

//# sourceMappingURL=tutone.module.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutonePage = /** @class */ (function () {
    function TutonePage(navCtrl, menu, platform, userservice) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.userservice = userservice;
    }
    TutonePage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.obstacledetails().then(function (res) {
            _this.obstacle1 = res.obstacle1;
        });
    };
    TutonePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill1 = res.skill1;
        });
    };
    TutonePage.prototype.load = function () {
        var _this = this;
        this.userservice.exposuredetails().then(function (res) {
            _this.exposure1 = res.exposure1;
        });
    };
    TutonePage.prototype.loaddets = function () {
        var _this = this;
        this.userservice.behaviourdetails().then(function (res) {
            _this.behaviour1 = res.behaviour1;
        });
    };
    TutonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.load();
        this.loaddetails();
        this.loaddets();
        this.loaduserdetails();
    };
    TutonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutone',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/tutone/tutone.html"*/'<ion-content padding class="bg-style">\n    \n            <p><b><I>\n                Skill 1- {{skill1}}\n              </I></b></p> \n              \n            <p><b><I>\n                Obstacle 1- {{obstacle1}}\n              </I></b></p>\n              \n              <p><b><I>\n                  Exposure 1- {{exposure1}}\n                </I></b></p>\n                \n                <p><b><I>\n                    Behaviour 1- {{behaviour1}}\n                  </I></b></p>\n          \n     \n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/tutone/tutone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], TutonePage);
    return TutonePage;
}());

//# sourceMappingURL=tutone.js.map

/***/ })

});
//# sourceMappingURL=4.js.map