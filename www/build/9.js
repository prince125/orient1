webpackJsonp([9],{

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillPageModule", function() { return SkillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skill__ = __webpack_require__(983);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SkillPageModule = /** @class */ (function () {
    function SkillPageModule() {
    }
    SkillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__skill__["a" /* SkillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__skill__["a" /* SkillPage */]),
            ],
        })
    ], SkillPageModule);
    return SkillPageModule;
}());

//# sourceMappingURL=skill.module.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillPage = /** @class */ (function () {
    function SkillPage(navCtrl, navParams, loadingCtrl, afauth, userservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.afauth = afauth;
        this.userservice = userservice;
        this.uskill = {
            skill1: '',
            skill2: '',
            skill3: '',
        };
    }
    SkillPage.prototype.Add = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userskill(this.uskill);
        loader.dismiss();
        this.navCtrl.push('ObstaclesPage');
    };
    SkillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkillPage');
    };
    SkillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-skill',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\skill\skill.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Skill \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center; align-items:center">\n    <h2> Enter the skills required to reach your goal</h2>\n    <div>\n      <ion-item>\n          <ion-label color="primary" floating>Skill 1</ion-label>\n          <ion-input type ="text" [(ngModel)]="uskill.skill1"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label color="primary" floating>Skill 2</ion-label>\n            <ion-input type="text" [(ngModel)]="uskill.skill2"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label color="primary" floating>Skill 3</ion-label>\n              <ion-input type="text" [(ngModel)]="uskill.skill3"></ion-input>\n            </ion-item>\n      </div>\n             \n             \n            </div>\n        \n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button round color="secondary" (click)="Add()"> Next</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\skill\skill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], SkillPage);
    return SkillPage;
}());

//# sourceMappingURL=skill.js.map

/***/ })

});
//# sourceMappingURL=9.js.map