webpackJsonp([12],{

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicPageModule", function() { return ProfilepicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepic__ = __webpack_require__(980);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilepicPageModule = /** @class */ (function () {
    function ProfilepicPageModule() {
    }
    ProfilepicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilepic__["a" /* ProfilepicPage */]),
            ],
        })
    ], ProfilepicPageModule);
    return ProfilepicPageModule;
}());

//# sourceMappingURL=profilepic.module.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(477);
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




/**
 * Generated class for the ProfilepicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilepicPage = /** @class */ (function () {
    function ProfilepicPage(navCtrl, navParams, imgservice, zone, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgservice = imgservice;
        this.zone = zone;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
        this.moveon = true;
    }
    ProfilepicPage.prototype.ionViewDidLoad = function () {
    };
    ProfilepicPage.prototype.chooseimage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.imgservice.uploadimage().then(function (uploadedurl) {
            loader.dismiss();
            _this.zone.run(function () {
                _this.imgurl = uploadedurl;
                _this.moveon = false;
            });
        });
    };
    ProfilepicPage.prototype.updateproceed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.updateimage(this.imgurl).then(function (res) {
            loader.dismiss();
            if (res.success) {
                _this.navCtrl.setRoot('PersonalitiesPage');
            }
            else {
                alert(res);
            }
        });
    };
    ProfilepicPage.prototype.proceed = function () {
        this.navCtrl.setRoot('PersonalitiesPage');
    };
    ProfilepicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilepic',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/profilepic/profilepic.html"*/'<ion-header>\n  <ion-navbar color="hcolor">\n    <ion-title>Profile Picture</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="profile-image">\n    <img src="{{imgurl}}">\n  </div>\n  <div>\n    <button ion-button round outline (click)="chooseimage()">Choose an image</button>\n  </div>\n  <div [hidden]="!moveon">\n    <button ion-button round outline (click)="proceed()">Skip this step</button>\n  </div>\n  <div [hidden]="moveon">\n    <button ion-button round outline (click)="updateproceed()">Upload & proceed</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/profilepic/profilepic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProfilepicPage);
    return ProfilepicPage;
}());

//# sourceMappingURL=profilepic.js.map

/***/ })

});
//# sourceMappingURL=12.js.map