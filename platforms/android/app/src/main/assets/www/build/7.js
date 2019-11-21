webpackJsonp([7],{

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerprofilePageModule", function() { return TrainerprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainerprofile__ = __webpack_require__(985);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrainerprofilePageModule = /** @class */ (function () {
    function TrainerprofilePageModule() {
    }
    TrainerprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trainerprofile__["a" /* TrainerprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trainerprofile__["a" /* TrainerprofilePage */]),
            ],
        })
    ], TrainerprofilePageModule);
    return TrainerprofilePageModule;
}());

//# sourceMappingURL=trainerprofile.module.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__ = __webpack_require__(477);
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
 * Generated class for the TrainerprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrainerprofilePage = /** @class */ (function () {
    function TrainerprofilePage(navCtrl, navParams, userservice, zone, alertCtrl, imghandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.imghandler = imghandler;
    }
    TrainerprofilePage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails();
    };
    TrainerprofilePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.userservice.gettrainerdetails().then(function (res) {
            _this.displayName = res.displayName;
            _this.des = res.des;
            _this.spl = res.spl;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
            });
        });
    };
    TrainerprofilePage.prototype.editimage = function () {
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
    TrainerprofilePage.prototype.editname = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Username',
            inputs: [{
                    name: 'username',
                    placeholder: 'Username'
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
                        if (data.username) {
                            _this.userservice.updatedispname(data.username).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your username has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.displayName = data.username;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your username was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    TrainerprofilePage.prototype.editdes = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Designation',
            inputs: [{
                    name: 'designation',
                    placeholder: 'Designation'
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
                        if (data.designation) {
                            _this.userservice.updatdes(data.designation).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your designation has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.des = data.designation;
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
    TrainerprofilePage.prototype.editskills = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Skills',
            inputs: [{
                    name: 'skill',
                    placeholder: 'Skills'
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
                        if (data.skill) {
                            _this.userservice.updatskills(data.skill).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your skills has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.spl = data.skill;
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
    TrainerprofilePage.prototype.logout = function () {
        var _this = this;
        this.userservice.afireauth.auth.signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    TrainerprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trainerprofile',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/trainerprofile/trainerprofile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><h2><b></b></h2></ion-title>\n  </ion-navbar>\n  <div class="profile-image" (click)="editimage()" align=\'center\'>\n    <img src="{{avatar}}">\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      <p align=\'center\'>Click on Profile picture or details to edit them.</p>\n      <ion-list align=\'center\'>\n          <ion-item >\n              <ion-label align=\'center\'  placeholder="Username" ><b><i>{{displayName}}</i></b> <button ion-button icon-only (click)="editname()" small float-right clear>\n                <ion-icon name="create" ></ion-icon>\n              </button></ion-label>\n            </ion-item>\n            <ion-item >\n                <ion-label align=\'center\' placeholder="Designation"><b><i>{{des}}</i></b><button ion-button icon-only (click)="editdes()" small float-right clear>\n                  <ion-icon name="create" ></ion-icon>\n                </button></ion-label>\n              </ion-item> \n                <ion-item >\n                    <ion-label align=\'center\' placeholder="Specialization"><b><i>{{spl}}</i></b><button ion-button icon-only (click)="editskills()" small float-right clear>\n                      <ion-icon name="create" ></ion-icon>\n                    </button></ion-label>\n                  </ion-item>\n        \n      </ion-list>\n      \n     \n      \n      <div align=\'center\'>\n        <button ion-button round color="danger" (click)="logout()">Logout</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/trainerprofile/trainerprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], TrainerprofilePage);
    return TrainerprofilePage;
}());

//# sourceMappingURL=trainerprofile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map