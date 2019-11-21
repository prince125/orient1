webpackJsonp([19],{

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumonePageModule", function() { return ForumonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forumone__ = __webpack_require__(971);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumonePageModule = /** @class */ (function () {
    function ForumonePageModule() {
    }
    ForumonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forumone__["a" /* ForumonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forumone__["a" /* ForumonePage */]),
            ],
        })
    ], ForumonePageModule);
    return ForumonePageModule;
}());

//# sourceMappingURL=forumone.module.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__learn_details_learn_details__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_learn_service__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_video__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chats_chats__ = __webpack_require__(482);
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
 * Generated class for the ForumonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForumonePage = /** @class */ (function () {
    function ForumonePage(navCtrl, navParams, learnService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.learnService = learnService;
        this._query = 'all';
        this.categories = new Array();
        var query_param = navParams.get('query');
        this._query = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(query_param) ? query_param : 'all';
    }
    ForumonePage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    ForumonePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.learnService.getFeedCategories()
            .subscribe(function (data) {
            _this.categories = data.categories;
        });
    };
    ForumonePage.prototype.openDetails = function (params) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__learn_details_learn_details__["a" /* LearnDetailsPage */], params);
    };
    ForumonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPage');
    };
    ForumonePage.prototype.chats = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chats_chats__["a" /* ChatsPage */]);
    };
    ForumonePage.prototype.show = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_video__["a" /* VideoPage */]);
    };
    ForumonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forumone',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/forumone/forumone.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Forum</span>\n    </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n\n  \n    <ion-fab right top>\n        <button ion-fab color="light" (click)=\'show()\'><ion-icon name="logo-youtube"></ion-icon></button>\n       \n      </ion-fab>\n\n\n  <ion-card class="category-concept-card" [style.background-color]="category.background" *ngFor="let category of categories" (click)="openDetails({ category: category })">\n    <ion-card-header>\n      <h2 class="category-title">{{ category.title }}</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <p class="category-description">\n        {{ category.description }}\n      </p>\n      <ion-row>\n        <ion-col no-padding>\n          <ion-badge class="category-tag" *ngFor="let tag of category.tags" item-right>{{ tag.name }}</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n \n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)=\'chats()\'><ion-icon name="chatbubbles"></ion-icon></button>\n   \n  </ion-fab>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/forumone/forumone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_learn_service__["a" /* LearnService */]])
    ], ForumonePage);
    return ForumonePage;
}());

//# sourceMappingURL=forumone.js.map

/***/ })

});
//# sourceMappingURL=19.js.map