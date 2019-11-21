webpackJsonp([29],{

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtrPageModule", function() { return AddtrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtr__ = __webpack_require__(961);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddtrPageModule = /** @class */ (function () {
    function AddtrPageModule() {
    }
    AddtrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addtr__["a" /* AddtrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addtr__["a" /* AddtrPage */]),
            ],
        })
    ], AddtrPageModule);
    return AddtrPageModule;
}());

//# sourceMappingURL=addtr.module.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtrPage; });
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
 * Generated class for the AddtrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtrPage = /** @class */ (function () {
    function AddtrPage(navCtrl, navParams, userservice, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trainer = {
            email: '',
            password: '',
            displayName: '',
            des: '',
            spl: '',
        };
    }
    AddtrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddtrPage');
    };
    AddtrPage.prototype.signup = function () {
        var _this = this;
        var toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        if (this.trainer.email == '' || this.trainer.password == '' || this.trainer.displayName == '') {
            toaster.setMessage('All fields are required!');
            toaster.present();
        }
        else if (this.trainer.password.length < 6) {
            toaster.setMessage('Password is not strong. Try giving more than six characters');
            toaster.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait'
            });
            loader_1.present();
            this.userservice.addtrainer(this.trainer).then(function (res) {
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
    AddtrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addtr',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\addtr\addtr.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div>\n    <ion-list >\n      <ion-item>  \n          <ion-input type="email" placeholder="E-Mail" [(ngModel)]="trainer.email"></ion-input>\n      </ion-item>\n      <ion-item>  \n        <ion-input type="passowrd" placeholder="Password" [(ngModel)]="trainer.password"></ion-input>\n    </ion-item>\n    <ion-item>  \n      <ion-input type="text" placeholder="Name" [(ngModel)]="trainer.displayName"></ion-input>\n  </ion-item>\n  <ion-item>  \n      <ion-input type="text" placeholder="Designation" [(ngModel)]="trainer.des"></ion-input>\n  </ion-item>\n  <ion-item>  \n      <ion-input type="text" placeholder="Specialization" [(ngModel)]="trainer.spl"></ion-input>\n  </ion-item>\n      </ion-list>\n      <ion-item>\n        <button (click)=\'signup()\'>Submit</button>\n      </ion-item>   \n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\addtr\addtr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AddtrPage);
    return AddtrPage;
}());

//# sourceMappingURL=addtr.js.map

/***/ })

});
//# sourceMappingURL=29.js.map