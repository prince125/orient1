webpackJsonp([2],{

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuttwoPageModule", function() { return TuttwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tuttwo__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TuttwoPageModule = /** @class */ (function () {
    function TuttwoPageModule() {
    }
    TuttwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tuttwo__["a" /* TuttwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tuttwo__["a" /* TuttwoPage */]),
            ],
        })
    ], TuttwoPageModule);
    return TuttwoPageModule;
}());

//# sourceMappingURL=tuttwo.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuttwoPage; });
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
 * Generated class for the TuttwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TuttwoPage = /** @class */ (function () {
    function TuttwoPage(navCtrl, platform, userservice) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.userservice = userservice;
    }
    TuttwoPage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.obstacledetails().then(function (res) {
            _this.obstacle2 = res.obstacle2;
        });
    };
    TuttwoPage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill2 = res.skill2;
        });
    };
    TuttwoPage.prototype.load = function () {
        var _this = this;
        this.userservice.exposuredetails().then(function (res) {
            _this.exposure2 = res.exposure2;
        });
    };
    TuttwoPage.prototype.loaddets = function () {
        var _this = this;
        this.userservice.behaviourdetails().then(function (res) {
            _this.behaviour2 = res.behaviour2;
        });
    };
    TuttwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.load();
        this.loaddetails();
        this.loaddets();
        this.loaduserdetails();
    };
    TuttwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tuttwo',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\tuttwo\tuttwo.html"*/'<ion-content padding class="bg-style">\n    \n    <p><b><I>\n        Skill 2- {{skill2}}\n      </I></b></p> \n      \n    <p><b><I>\n        Obstacle 2- {{obstacle2}}\n      </I></b></p>\n      \n      <p><b><I>\n          Exposure 2- {{exposure2}}\n        </I></b></p>\n        \n        <p><b><I>\n            Behaviour 2- {{behaviour2}}\n          </I></b></p>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\tuttwo\tuttwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], TuttwoPage);
    return TuttwoPage;
}());

//# sourceMappingURL=tuttwo.js.map

/***/ })

});
//# sourceMappingURL=2.js.map