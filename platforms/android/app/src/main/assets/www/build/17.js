webpackJsonp([17],{

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(973);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(486);
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
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, userservice, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.popoverCtrl = popoverCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
        popover.present();
    };
    MapPage.prototype.tuts1 = function () {
        var popover = this.popoverCtrl.create('TutonePage');
        popover.present();
    };
    MapPage.prototype.tuts2 = function () {
        var popover = this.popoverCtrl.create('TuttwoPage');
        popover.present();
    };
    MapPage.prototype.tuts3 = function () {
        var popover = this.popoverCtrl.create('TutthreePage');
        popover.present();
    };
    MapPage.prototype.tutg = function () {
        var popover = this.popoverCtrl.create('TutgoalPage');
        popover.present();
    };
    MapPage.prototype.tutvis = function () {
        var popover = this.popoverCtrl.create('TutvisPage');
        popover.present();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n        <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n    <ion-title> Map </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n \n\n  \n        <ion-fab class="vis" id="vis" >\n                <button ion-fab mini color="light" (click)="tutvis()"><ion-icon name="flag"></ion-icon></button>\n                 \n              </ion-fab>\n            \n              <ion-fab class="s1"  id="s1">\n                <button ion-fab mini color="light" (click)="tuts1()"><ion-icon name="body"></ion-icon></button>\n                \n              </ion-fab>\n\n              <ion-fab class="s2" id ="s2">\n                <button ion-fab mini color="light" (click)="tuts2()"><ion-icon name="walk"></ion-icon></button>\n             \n              </ion-fab>\n\n              <ion-fab class="s3" id="s3" >\n                <button ion-fab mini color="light" (click)="tuts3()"><ion-icon name="boat"></ion-icon></button>\n                \n              </ion-fab>\n       \n              <ion-fab class="goal" id="goal">\n                <button ion-fab mini color="light" (click)="tutg()"><ion-icon name="bonfire"></ion-icon></button>\n                \n              </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=17.js.map