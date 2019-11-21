webpackJsonp([11],{

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report__ = __webpack_require__(981);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportPageModule = /** @class */ (function () {
    function ReportPageModule() {
    }
    ReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */]),
            ],
        })
    ], ReportPageModule);
    return ReportPageModule;
}());

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
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
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams, userservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
        this.loaddetails();
        this.loadb1();
        this.loadb2();
        this.loadb3();
    };
    ReportPage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.behaviourdetails().then(function (res) {
            _this.behaviour1 = res.behaviour1;
            _this.behaviour2 = res.behaviour2;
            _this.behaviour3 = res.behaviour3;
        });
    };
    ReportPage.prototype.loadb1 = function () {
        var _this = this;
        this.userservice.b1det().then(function (res) {
            _this.startdate1 = res.startdate1;
            _this.enddate1 = res.enddate1;
            _this.day1 = res.day1;
            _this.week1 = res.week1;
            _this.month1 = res.month1;
            _this.frequency1 = res.frequency1;
            _this.message1 = res.message1;
        });
    };
    ReportPage.prototype.loadb2 = function () {
        var _this = this;
        this.userservice.b2det().then(function (res) {
            _this.startdate2 = res.startdate2;
            _this.enddate2 = res.enddate2;
            _this.day2 = res.day2;
            _this.week2 = res.week2;
            _this.month2 = res.month2;
            _this.frequency2 = res.frequency2;
            _this.message2 = res.message2;
        });
    };
    ReportPage.prototype.loadb3 = function () {
        var _this = this;
        this.userservice.b3det().then(function (res) {
            _this.startdate3 = res.startdate3;
            _this.enddate3 = res.enddate3;
            _this.day3 = res.day3;
            _this.week3 = res.week3;
            _this.month3 = res.month3;
            _this.frequency3 = res.frequency3;
            _this.message3 = res.message3;
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\Users\Admin\orienting\src\pages\report\report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons end>\n          <button ion button icon-only menuToggle right>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title align=\'center\'>Reports</ion-title>\n  \n</ion-toolbar>\n\n</ion-header>\n  \n  <ion-content padding>\n  \n  <ion-grid fixed >\n      <ion-row fixed class="row-header" >\n          <ion-col col-2 class="col">Behavioral Changes</ion-col>\n          <ion-col col-2 class="col">Message</ion-col>\n          <ion-col col-2 class="col">Start Date</ion-col>\n          <ion-col col-2 class="col">End Date</ion-col>\n      </ion-row>\n  \n      <ion-row class="row" >\n          <ion-col col-2 class="col" >{{message1}}</ion-col>\n        <ion-col col-2 class="col" >{{behaviour1}}</ion-col>\n        <ion-col col-2 class="col" >{{startdate1}}</ion-col>\n        <ion-col col-2 class="col" >{{enddate1}}</ion-col>\n      </ion-row>\n  \n      <ion-row class="row" >\n          <ion-col col-2 class="col">{{message2}}</ion-col>\n        <ion-col col-2 class="col" >{{behaviour2}}</ion-col>\n        <ion-col col-2 class="col" >{{startdate2}}</ion-col>\n        <ion-col col-2 class="col" >{{enddate2}}</ion-col>\n      </ion-row>\n  \n      <ion-row class="row" >\n          <ion-col col-2 class="col" >{{message3}}</ion-col>\n        <ion-col col-2 class="col" >{{behaviour3}}</ion-col>\n        <ion-col col-2 class="col" >{{startdate3}}</ion-col>\n        <ion-col col-2 class="col" >{{enddate3}}</ion-col>\n      </ion-row>\n    </ion-grid>	\n\n    <ion-grid fixed >\n        <ion-row fixed class="row-header" >\n            <ion-col col-2 class="col">Frequency</ion-col>\n            <ion-col col-2 class="col">Time per Day</ion-col>\n            <ion-col col-2 class="col">Time per Week</ion-col>\n            <ion-col col-2 class="col">Time per Month</ion-col>\n          </ion-row>\n\n         <ion-row class="row" >\n            <ion-col col-2 class="col">{{frequency1}}</ion-col>\n            <ion-col col-2 class="col">{{day1}}</ion-col>\n            <ion-col col-2 class="col">{{week1}}</ion-col>\n            <ion-col col-2 class="col" >{{month1}}</ion-col>\n           </ion-row>\n\n         <ion-row class="row" >\n            <ion-col col-2 class="col" >{{frequency2}}</ion-col>\n            <ion-col col-2 class="col" >{{day2}}</ion-col>\n            <ion-col col-2 class="col" >{{week2}}</ion-col>\n            <ion-col col-2 class="col" >{{month2}}</ion-col>\n           </ion-row>\n\n         <ion-row class="row" >\n            <ion-col col-2 class="col" >{{frequency3}}</ion-col>\n            <ion-col col-2 class="col" >{{day3}}</ion-col>\n            <ion-col col-2 class="col" >{{week3}}</ion-col>\n            <ion-col col-2 class="col">{{month3}}</ion-col>\n           </ion-row>\n\n     </ion-grid>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Admin\orienting\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ })

});
//# sourceMappingURL=11.js.map