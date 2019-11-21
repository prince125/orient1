webpackJsonp([21],{

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExposurePageModule", function() { return ExposurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exposure__ = __webpack_require__(969);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExposurePageModule = /** @class */ (function () {
    function ExposurePageModule() {
    }
    ExposurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exposure__["a" /* ExposurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exposure__["a" /* ExposurePage */]),
            ],
        })
    ], ExposurePageModule);
    return ExposurePageModule;
}());

//# sourceMappingURL=exposure.module.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExposurePage; });
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
 * Generated class for the ExposurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExposurePage = /** @class */ (function () {
    function ExposurePage(navCtrl, navParams, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.uex = {
            exposure1: '',
            exposure2: '',
            exposure3: '',
        };
    }
    ExposurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExposurePage');
        this.loaduserdetails();
        this.loaddetails();
    };
    ExposurePage.prototype.gobe = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userexposure(this.uex);
        loader.dismiss();
        this.navCtrl.push('BehaviourPage');
    };
    ExposurePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill1 = res.skill1;
            _this.skill2 = res.skill2;
            _this.skill3 = res.skill3;
        });
    };
    ExposurePage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.obstacledetails().then(function (res) {
            _this.obstacle1 = res.obstacle1;
            _this.obstacle2 = res.obstacle2;
            _this.obstacle3 = res.obstacle3;
        });
    };
    ExposurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exposure',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\exposure\exposure.html"*/'<!--\n  Generated template for the ExposurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exposure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; align-items:center">\n        <h2> Enter the exposures you may need to attain the skills and overcome the obstacles.</h2>\n        <div>\n          <ion-item>\n              <ion-label color="secondary" floating>Skill-1- {{skill1}}</ion-label>\n              <ion-label color="dark" floating>Obstacle-1- {{obstacle1}}</ion-label>\n              <ion-label color="primary" floating>Exposure 1</ion-label>\n              <ion-input type ="text" [(ngModel)]="uex.exposure1"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label color="secondary" floating>Skill-2- {{skill2}}</ion-label>\n                <ion-label color="dark" floating>Obstacle-2- {{obstacle2}}</ion-label>\n                <ion-label color="primary" floating>Exposure 2</ion-label>\n                <ion-input type="text" [(ngModel)]="uex.exposure2"></ion-input>\n              </ion-item>\n          \n              <ion-item><ion-label color="secondary" floating>Skill-3- {{skill3}}</ion-label>\n                <ion-label color="dark" floating>Obstacle-3- {{obstacle3}}</ion-label>\n                  <ion-label color="primary" floating>Exposure 3</ion-label>\n                  <ion-input type="text" [(ngModel)]="uex.exposure3"></ion-input>\n                </ion-item>\n          </div>\n\n        \n  </div>\n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button round color="secondary" (click)="gobe()"> Next</button>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\exposure\exposure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ExposurePage);
    return ExposurePage;
}());

//# sourceMappingURL=exposure.js.map

/***/ })

});
//# sourceMappingURL=21.js.map