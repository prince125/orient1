webpackJsonp([3],{

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutthreePageModule", function() { return TutthreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutthree__ = __webpack_require__(989);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutthreePageModule = /** @class */ (function () {
    function TutthreePageModule() {
    }
    TutthreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutthree__["a" /* TutthreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutthree__["a" /* TutthreePage */]),
            ],
        })
    ], TutthreePageModule);
    return TutthreePageModule;
}());

//# sourceMappingURL=tutthree.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutthreePage; });
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
 * Generated class for the TutthreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutthreePage = /** @class */ (function () {
    function TutthreePage(navCtrl, platform, userservice) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.userservice = userservice;
    }
    TutthreePage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.obstacledetails().then(function (res) {
            _this.obstacle3 = res.obstacle3;
        });
    };
    TutthreePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill3 = res.skill3;
        });
    };
    TutthreePage.prototype.load = function () {
        var _this = this;
        this.userservice.exposuredetails().then(function (res) {
            _this.exposure3 = res.exposure3;
        });
    };
    TutthreePage.prototype.loaddets = function () {
        var _this = this;
        this.userservice.behaviourdetails().then(function (res) {
            _this.behaviour3 = res.behaviour3;
        });
    };
    TutthreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        this.load();
        this.loaddetails();
        this.loaddets();
        this.loaduserdetails();
    };
    TutthreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutthree',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/tutthree/tutthree.html"*/'<ion-content padding class="bg-style">\n    \n    <p><b><I>\n        Skill 3- {{skill3}}\n      </I></b></p> \n      \n    <p><b><I>\n        Obstacle 3- {{obstacle3}}\n      </I></b></p>\n      \n      <p><b><I>\n          Exposure 3- {{exposure3}}\n        </I></b></p>\n        \n        <p><b><I>\n            Behaviour 3- {{behaviour3}}\n          </I></b></p>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/tutthree/tutthree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], TutthreePage);
    return TutthreePage;
}());

//# sourceMappingURL=tutthree.js.map

/***/ })

});
//# sourceMappingURL=3.js.map