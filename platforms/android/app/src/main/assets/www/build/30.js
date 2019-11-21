webpackJsonp([30],{

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddalPageModule", function() { return AddalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addal__ = __webpack_require__(960);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddalPageModule = /** @class */ (function () {
    function AddalPageModule() {
    }
    AddalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addal__["a" /* AddalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addal__["a" /* AddalPage */]),
            ],
        })
    ], AddalPageModule);
    return AddalPageModule;
}());

//# sourceMappingURL=addal.module.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddalPage; });
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
 * Generated class for the AddalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddalPage = /** @class */ (function () {
    function AddalPage(navCtrl, navParams, userservice, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alumni = {
            email: '',
            password: '',
            displayName: '',
            aldes: '',
            alskill: '',
        };
    }
    AddalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddalPage');
    };
    AddalPage.prototype.signup = function () {
        var _this = this;
        var toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        if (this.alumni.email == '' || this.alumni.password == '' || this.alumni.displayName == '') {
            toaster.setMessage('All fields are required!');
            toaster.present();
        }
        else if (this.alumni.password.length < 6) {
            toaster.setMessage('Password is not strong. Try giving more than six characters');
            toaster.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait'
            });
            loader_1.present();
            this.userservice.addalumni(this.alumni).then(function (res) {
                loader_1.dismiss();
                if (res.success) {
                    _this.navCtrl.setRoot('AdminPage');
                    toaster.setMessage('Successfully created!');
                    toaster.present();
                }
                else {
                    alert('Error' + res);
                    toaster.setMessage('Check the credentials entered!');
                    toaster.present();
                }
            });
        }
    };
    AddalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addal',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/addal/addal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div>\n    <ion-list >\n      <ion-item>  \n          <ion-input type="email" placeholder="E-Mail" [(ngModel)]="alumni.email"></ion-input>\n      </ion-item>\n      <ion-item>  \n        <ion-input type="passowrd" placeholder="Password" [(ngModel)]="alumni.password"></ion-input>\n    </ion-item>\n    <ion-item>  \n      <ion-input type="text" placeholder="Name" [(ngModel)]="alumni.displayName"></ion-input>\n  </ion-item>\n  <ion-item>  \n      <ion-input type="text" placeholder="Designation" [(ngModel)]="alumni.aldes"></ion-input>\n  </ion-item>\n  <ion-item>  \n      <ion-input type="text" placeholder="Specialization" [(ngModel)]="alumni.alskill"></ion-input>\n  </ion-item>\n      </ion-list>\n      <ion-item>\n        <button (click)=\'signup()\'>Submit</button>\n      </ion-item>   \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/addal/addal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddalPage);
    return AddalPage;
}());

//# sourceMappingURL=addal.js.map

/***/ })

});
//# sourceMappingURL=30.js.map