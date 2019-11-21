webpackJsonp([25],{

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviourPageModule", function() { return BehaviourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviour__ = __webpack_require__(965);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BehaviourPageModule = /** @class */ (function () {
    function BehaviourPageModule() {
    }
    BehaviourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__behaviour__["a" /* BehaviourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__behaviour__["a" /* BehaviourPage */]),
            ],
        })
    ], BehaviourPageModule);
    return BehaviourPageModule;
}());

//# sourceMappingURL=behaviour.module.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaviourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan_plan__ = __webpack_require__(480);
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
 * Generated class for the BehaviourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BehaviourPage = /** @class */ (function () {
    function BehaviourPage(navCtrl, navParams, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.ube = {
            behaviour1: '',
            behaviour2: '',
            behaviour3: '',
        };
    }
    BehaviourPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BehaviourPage');
        this.loaddetails();
        this.loaduserdetails();
        this.load();
    };
    BehaviourPage.prototype.goda = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userbehaviour(this.ube);
        loader.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__plan_plan__["a" /* PlanPage */]);
    };
    BehaviourPage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.obstacledetails().then(function (res) {
            _this.obstacle1 = res.obstacle1;
            _this.obstacle2 = res.obstacle2;
            _this.obstacle3 = res.obstacle3;
        });
    };
    BehaviourPage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.skilldetails().then(function (res) {
            _this.skill1 = res.skill1;
            _this.skill2 = res.skill2;
            _this.skill3 = res.skill3;
        });
    };
    BehaviourPage.prototype.load = function () {
        var _this = this;
        this.userservice.exposuredetails().then(function (res) {
            _this.exposure1 = res.exposure1;
            _this.exposure2 = res.exposure2;
            _this.exposure3 = res.exposure3;
        });
    };
    BehaviourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-behaviour',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/behaviour/behaviour.html"*/'<!--\n  Generated template for the BehaviourPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Behaviour</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; align-items:center">\n        <h2> Enter the Behaviourial changes you will need to take to reach your goal</h2>\n        <div>\n          <ion-item>\n              <ion-label color="secondary" floating>Skill-1- {{skill1}}</ion-label>\n              <ion-label color="dark" floating>Obstacle-1- {{obstacle1}}</ion-label>\n              <ion-label color="danger" floating>Exposure-1- {{exposure1}}</ion-label>\n              <ion-label color="primary" floating>Behaviour 1</ion-label>\n              <ion-input type ="text" [(ngModel)]="ube.behaviour1"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label color="secondary" floating>Skill-2- {{skill2}}</ion-label>\n                <ion-label color="dark" floating>Obstacle-2- {{obstacle2}}</ion-label>\n                <ion-label color="danger" floating>Exposure-2- {{exposure2}}</ion-label>\n                <ion-label color="primary" floating>Behaviour 2</ion-label>\n                <ion-input type="text" [(ngModel)]="ube.behaviour2"></ion-input>\n              </ion-item>\n          \n              <ion-item>\n                  <ion-label color="secondary" floating>Skill-3- {{skill3}}</ion-label>\n                  <ion-label color="dark" floating>Obstacle-3- {{obstacle3}}</ion-label>\n                  <ion-label color="danger" floating>Exposure-3- {{exposure3}}</ion-label>\n                  <ion-label color="primary" floating>Behaviour 3</ion-label>\n                  <ion-input type="text" [(ngModel)]="ube.behaviour3"></ion-input>\n                </ion-item>\n          </div>\n\n          \n  </div>\n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button round color="secondary" (click)="goda()"> Next</button>\n  </ion-footer>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/behaviour/behaviour.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], BehaviourPage);
    return BehaviourPage;
}());

//# sourceMappingURL=behaviour.js.map

/***/ })

});
//# sourceMappingURL=25.js.map