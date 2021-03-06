webpackJsonp([23],{

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddiesonePageModule", function() { return BuddiesonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buddiesone__ = __webpack_require__(967);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuddiesonePageModule = /** @class */ (function () {
    function BuddiesonePageModule() {
    }
    BuddiesonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buddiesone__["a" /* BuddiesonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buddiesone__["a" /* BuddiesonePage */]),
            ],
        })
    ], BuddiesonePageModule);
    return BuddiesonePageModule;
}());

//# sourceMappingURL=buddiesone.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddiesonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
 * Generated class for the BuddiesonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuddiesonePage = /** @class */ (function () {
    function BuddiesonePage(navCtrl, navParams, userservice, alertCtrl, requestservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
        this.requestservice = requestservice;
        this.newrequest = {};
        this.temparr = [];
        this.filteredusers = [];
        this.userservice.getusers().then(function (res) {
            _this.filteredusers = res;
            _this.temparr = res;
        });
    }
    BuddiesonePage.prototype.ionViewDidLoad = function () {
    };
    BuddiesonePage.prototype.searchuser = function (searchbar) {
        this.filteredusers = this.temparr;
        var q = searchbar.target.value;
        if (q.trim() == '') {
            return;
        }
        this.filteredusers = this.filteredusers.filter(function (v) {
            if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    BuddiesonePage.prototype.sendreq = function (recipient) {
        var _this = this;
        this.newrequest.sender = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
        this.newrequest.recipient = recipient.uid;
        if (this.newrequest.sender === this.newrequest.recipient)
            alert('You are your friend always');
        else {
            var successalert_1 = this.alertCtrl.create({
                title: 'Request sent',
                subTitle: 'Your request was sent to ' + recipient.displayName,
                buttons: ['ok']
            });
            this.requestservice.sendrequest(this.newrequest).then(function (res) {
                if (res.success) {
                    successalert_1.present();
                    var sentuser = _this.filteredusers.indexOf(recipient);
                    _this.filteredusers.splice(sentuser, 1);
                }
            }).catch(function (err) {
                alert(err);
            });
        }
    };
    BuddiesonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buddiesone',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\buddiesone\buddiesone.html"*/'<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Buddies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchstring" (input)="searchuser($event)" placeholder="Search"></ion-searchbar>\n<ion-list no-lines>\n  <ion-list>\n    <ion-item-sliding *ngFor="let key of filteredusers">\n      <ion-item >\n        <ion-avatar item-left>\n          <img src="{{key.photoURL}}">\n        </ion-avatar>\n        <h2>{{key.displayName}}</h2>\n      </ion-item>\n      <ion-item-options slide="left">\n        <button ion-button color="primary" (click)="sendreq(key)">\n          <ion-icon name="person-add"></ion-icon>\n          Add\n        </button>\n      </ion-item-options>\n      \n    </ion-item-sliding>\n  </ion-list>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\buddiesone\buddiesone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_requests_requests__["a" /* RequestsProvider */]])
    ], BuddiesonePage);
    return BuddiesonePage;
}());

//# sourceMappingURL=buddiesone.js.map

/***/ })

});
//# sourceMappingURL=23.js.map