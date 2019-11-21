webpackJsonp([14],{

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalitiesPageModule", function() { return PersonalitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personalities__ = __webpack_require__(978);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalitiesPageModule = /** @class */ (function () {
    function PersonalitiesPageModule() {
    }
    PersonalitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personalities__["a" /* PersonalitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personalities__["a" /* PersonalitiesPage */]),
            ],
        })
    ], PersonalitiesPageModule);
    return PersonalitiesPageModule;
}());

//# sourceMappingURL=personalities.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalitiesPage; });
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
 * Generated class for the PersonalitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalitiesPage = /** @class */ (function () {
    function PersonalitiesPage(navCtrl, navParams, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.currentuser = {
            p1: '',
            p2: '',
            p3: '',
        };
    }
    PersonalitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalitiesPage');
    };
    PersonalitiesPage.prototype.go = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.updateuser(this.currentuser);
        loader.dismiss();
        this.navCtrl.push('OtpPage');
    };
    PersonalitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personalities',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\personalities\personalities.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Personalities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n<p><b>Who are some of the personalities you look up to?</b></p>\n\n<div>\n<ion-item>\n    <ion-label color="primary" floating>Personality 1</ion-label>\n    <ion-input type ="text" [(ngModel)]="currentuser.p1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label color="primary" floating>Personality 2</ion-label>\n      <ion-input type="text" [(ngModel)]="currentuser.p2"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary" floating>Personality 3</ion-label>\n        <ion-input type="text" [(ngModel)]="currentuser.p3"></ion-input>\n      </ion-item>\n</div>\n\n\n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button color="secondary" (click)="go()">Next</button>\n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\personalities\personalities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PersonalitiesPage);
    return PersonalitiesPage;
}());

//# sourceMappingURL=personalities.js.map

/***/ })

});
//# sourceMappingURL=14.js.map