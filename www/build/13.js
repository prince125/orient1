webpackJsonp([13],{

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(979);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(213);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, userservice, zone, alertCtrl, imghandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.imghandler = imghandler;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails();
        this.loadpers();
    };
    ProfilePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.getuserdetails().then(function (res) {
            _this.displayName = res.displayName;
            _this.fname = res.fname;
            _this.cname = res.cname;
            _this.lname = res.lname;
            _this.colname = res.colname;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    ProfilePage.prototype.loadpers = function () {
        var _this = this;
        this.userservice.personalities().then(function (res) {
            _this.p1 = res.p1;
            _this.p2 = res.p2;
            _this.p3 = res.p3;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.userservice.afireauth.auth.signOut().then(function () {
            window.location.reload(true);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    ProfilePage.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully!!');
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed');
                statusalert.present();
            });
        });
    };
    ProfilePage.prototype.editcol = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit College',
            inputs: [{
                    name: 'col',
                    placeholder: 'College Name'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.col) {
                            _this.userservice.updatecol(data.col).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your designation has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.stcol = data.col;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your designation was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    ProfilePage.prototype.editcourse = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Course',
            inputs: [{
                    name: 'course',
                    placeholder: 'Course'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.course) {
                            _this.userservice.updatecourse(data.course).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your skills has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.stcou = data.course;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your skills were not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title><h2><b>{{displayName}}</b></h2></ion-title>\n  </ion-navbar>\n  <div class="profile-image" (click)="editimage()" align=\'center\'>\n      <img src="{{avatar}}">\n    </div>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   \n      <ion-list align=\'center\'>\n          <ion-item >\n              <ion-label align=\'center\'><b><i>{{fname}} {{lname}}</i></b> </ion-label>\n            </ion-item>\n            <ion-item >\n                <ion-label align=\'center\'><b><i>{{colname}}</i></b><button ion-button icon-only (click)="editcol()" small float-right clear>\n                    <ion-icon name="create" ></ion-icon>\n                  </button></ion-label>\n              </ion-item> \n                <ion-item >\n                    <ion-label align=\'center\'><b><i>{{cname}}</i></b><button ion-button icon-only (click)="editcourse()" small float-right clear>\n                        <ion-icon name="create" ></ion-icon>\n                      </button></ion-label>\n                  </ion-item>\n        \n      </ion-list>\n\n      <h3>Your Favourite Personalities</h3>\n      <ion-list>\n         \n      \n          <ion-item>\n              \n              <ion-label align=\'center\'><ion-icon name="happy" ></ion-icon><b><i>{{p1}}</i></b>\n                  \n               </ion-label>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label align=\'center\'><ion-icon name="happy" ></ion-icon><b><i>{{p2}}</i></b>\n               </ion-label>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label align=\'center\'>\n                  <ion-icon name="happy" ></ion-icon><b><i>{{p3}}</i></b>\n                </ion-label>\n          </ion-item>\n      </ion-list>\n     \n     \n      <div class="spacer" style="height: 10px;"></div>\n      <div align=\'center\'>\n        <button ion-button round color="danger" (click)="logout()">Logout</button>\n      </div>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=13.js.map