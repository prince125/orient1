webpackJsonp([16],{

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObstaclesPageModule", function() { return ObstaclesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obstacles__ = __webpack_require__(974);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObstaclesPageModule = /** @class */ (function () {
    function ObstaclesPageModule() {
    }
    ObstaclesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__obstacles__["a" /* ObstaclesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__obstacles__["a" /* ObstaclesPage */]),
            ],
        })
    ], ObstaclesPageModule);
    return ObstaclesPageModule;
}());

//# sourceMappingURL=obstacles.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObstaclesPage; });
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
 * Generated class for the ObstaclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObstaclesPage = /** @class */ (function () {
    function ObstaclesPage(navCtrl, navParams, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.uobs = {
            obstacle1: '',
            obstacle2: '',
            obstacle3: '',
        };
    }
    ObstaclesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObstaclesPage');
        this.loaduserdetails();
    };
    ObstaclesPage.prototype.goex = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userobstacle(this.uobs);
        loader.dismiss();
        this.navCtrl.setRoot('ExposurePage');
    };
    ObstaclesPage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill1 = res.skill1;
            _this.skill2 = res.skill2;
            _this.skill3 = res.skill3;
        });
    };
    ObstaclesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-obstacles',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\obstacles\obstacles.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Obstacles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; align-items:center">\n        <h2> Enter the Obstacles you may face in obtaining the skills you require.</h2>\n        <div>\n            \n          <ion-item>\n              <ion-label color="secondary" floating>Skill-1- {{skill1}}</ion-label>\n              <ion-label color="primary" floating>Obstacle 1</ion-label>\n              <ion-input type ="text" [(ngModel)]="uobs.obstacle1"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label color="secondary" floating>Skill-2- {{skill2}}</ion-label>\n                <ion-label color="primary" floating>Obstacle 2</ion-label>\n                <ion-input type="text" [(ngModel)]="uobs.obstacle2"></ion-input>\n              </ion-item>\n          \n              <ion-item>\n                  <ion-label color="secondary" floating>Skill-3- {{skill3}}</ion-label>\n                  <ion-label color="primary" floating>Obstacle 3</ion-label>\n                  <ion-input type="text" [(ngModel)]="uobs.obstacle3"></ion-input>\n                </ion-item>\n          </div>\n\n         \n  </div>\n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button round color="secondary" (click)="goex()"> Next</button>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\obstacles\obstacles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ObstaclesPage);
    return ObstaclesPage;
}());

//# sourceMappingURL=obstacles.js.map

/***/ })

});
//# sourceMappingURL=16.js.map