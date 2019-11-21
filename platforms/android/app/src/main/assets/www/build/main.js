webpackJsonp([73],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(questionApi) {
        this.questionApi = questionApi;
    }
    QuestionService.prototype.getQuestions = function () {
        var filter = {
            "include": {
                "relation": "answers"
            }
        };
        return this.questionApi.find(filter)
            .toPromise();
    };
    QuestionService.prototype.getQuestion = function (questionId) {
        var query = {
            id: questionId
        };
        return this.questionApi.find({ where: query })
            .toPromise();
    };
    QuestionService.prototype.getQuestionsBySlug = function (slug) {
        var filter = {
            "include": {
                "relation": "answers"
            },
            "where": {
                "questionSlug": slug
            }
        };
        return this.questionApi.find(filter)
            .toPromise();
    };
    QuestionService.prototype.deleteQuestion = function (questionId) {
        return this.questionApi.deleteById(questionId)
            .toPromise();
    };
    QuestionService.prototype.updateQuestion = function (values) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__sdk__["d" /* Question */]();
        data.question = values.question;
        data.positiveVotes = values.positiveVotes;
        data.negativeVotes = values.negativeVotes;
        data.questionSlug = values.questionSlug;
        return this.questionApi.updateAttributes(values.id, data)
            .toPromise();
    };
    QuestionService.prototype.createQuestion = function (values) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__sdk__["d" /* Question */]();
        data.question = values.question;
        data.questionSlug = values.questionSlug;
        return this.questionApi.create(data)
            .toPromise();
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sdk__["e" /* QuestionApi */]])
    ], QuestionService);
    return QuestionService;
}());

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lb_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */










/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        // Headers to be sent
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // Authenticate request
        this.authenticate(url, headers);
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        // Body fix for built in remote methods using "data", "options" or "credentials
        // that are the actual body, Custom remote method properties are different and need
        // to be wrapped into a body object
        var body;
        var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
        if (postBodyKeys.length === 1) {
            body = postBody[postBodyKeys.shift()];
        }
        else {
            body = postBody;
        }
        // Separate filter object from url params and add to search query
        if (urlParams.filter) {
            headers.append('filter', JSON.stringify(urlParams.filter));
            delete urlParams.filter;
        }
        // Separate where object from url params and add to search query
        /**
        CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
        - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
        - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
        if (urlParams.where) {
          headers.append('where', JSON.stringify(urlParams.where));
          delete urlParams.where;
        }
        **/
        this.searchParams.setJSON(urlParams);
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            method: method,
            url: url,
            search: Object.keys(urlParams).length > 0
                ? this.searchParams.getURLSearchParams() : null,
            body: body ? JSON.stringify(body) : undefined
        }));
        return this.http.request(request)
            .map(function (res) { return (res.text() != "" ? res.json() : {}); })
            .catch(function (e) { return _this.errorHandler.handleError(e); });
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data: data })
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, { filter: filter }, undefined)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            'update'
        ].join('/'), undefined, _urlParams, { data: data });
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, undefined, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            'count'
        ].join('/'), undefined, _urlParams, undefined);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().plural,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerService = /** @class */ (function () {
    function AnswerService(answerApi) {
        this.answerApi = answerApi;
    }
    AnswerService.prototype.getAnswers = function (questionId) {
        var query = {
            questionId: questionId
        };
        return this.answerApi.find({ where: query })
            .toPromise();
    };
    AnswerService.prototype.getAnswer = function (anserId) {
        var query = {
            id: anserId
        };
        return this.answerApi.find({ where: query })
            .toPromise();
    };
    AnswerService.prototype.deleteAnswer = function (answerId) {
        return this.answerApi.deleteById(answerId)
            .toPromise();
    };
    AnswerService.prototype.updateAnswer = function (values) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__sdk__["a" /* Answer */]();
        data.answer = values.answer;
        data.positiveVotes = values.positiveVotes;
        data.negativeVotes = values.negativeVotes;
        data.questionId = values.questionId;
        return this.answerApi.updateAttributes(values.id, data)
            .toPromise();
    };
    AnswerService.prototype.createAnswer = function (values) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__sdk__["a" /* Answer */]();
        data.answer = values.answer;
        data.questionId = values.questionId;
        return this.answerApi.create(data)
            .toPromise();
    };
    AnswerService.prototype.countAnswers = function (questionId) {
        var query = {
            questionId: questionId
        };
        return this.answerApi.count({ where: query })
            .toPromise();
    };
    AnswerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sdk__["b" /* AnswerApi */]])
    ], AnswerService);
    return AnswerService;
}());

//# sourceMappingURL=answer.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var RequestsProvider = /** @class */ (function () {
    function RequestsProvider(userservice, events) {
        this.userservice = userservice;
        this.events = events;
        this.firereq = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/requests');
        this.firefriends = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/friends');
    }
    RequestsProvider.prototype.sendrequest = function (req) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(req.recipient).push({
                sender: req.sender
            }).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyrequests = function () {
        var _this = this;
        var allmyrequests;
        var myrequests = [];
        this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            allmyrequests = snapshot.val();
            myrequests = [];
            for (var i in allmyrequests) {
                myrequests.push(allmyrequests[i].sender);
            }
            _this.userservice.getallusers().then(function (res) {
                var allusers = res;
                _this.userdetails = [];
                for (var j in myrequests)
                    for (var key in allusers) {
                        if (myrequests[j] === allusers[key].uid) {
                            _this.userdetails.push(allusers[key]);
                        }
                    }
                _this.events.publish('gotrequests');
            });
        });
    };
    RequestsProvider.prototype.getmyrequest = function () {
        var _this = this;
        var allmyrequests;
        var myrequests = [];
        this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            allmyrequests = snapshot.val();
            myrequests = [];
            for (var i in allmyrequests) {
                myrequests.push(allmyrequests[i].sender);
            }
            _this.userservice.getusers().then(function (res) {
                var allusers = res;
                _this.userdetails = [];
                for (var j in myrequests)
                    for (var key in allusers) {
                        if (myrequests[j] === allusers[key].uid) {
                            _this.userdetails.push(allusers[key]);
                        }
                    }
                _this.events.publish('getrequests');
            });
        });
    };
    RequestsProvider.prototype.acceptrequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.myfriends = [];
            _this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).push({
                uid: buddy.uid
            }).then(function () {
                _this.firefriends.child(buddy.uid).push({
                    uid: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    _this.deleterequest(buddy).then(function () {
                        resolve(true);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.deleterequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).orderByChild('sender').equalTo(buddy.uid).once('value', function (snapshot) {
                var somekey;
                for (var key in snapshot.val())
                    somekey = key;
                _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(somekey).remove().then(function () {
                    resolve(true);
                });
            })
                .then(function () {
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyfriends = function () {
        var _this = this;
        var friendsuid = [];
        this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            var allfriends = snapshot.val();
            _this.myfriends = [];
            for (var i in allfriends)
                friendsuid.push(allfriends[i].uid);
            _this.userservice.getallusers().then(function (users) {
                _this.myfriends = [];
                for (var j in friendsuid)
                    for (var key in users) {
                        if (friendsuid[j] === users[key].uid) {
                            _this.myfriends.push(users[key]);
                        }
                    }
                _this.events.publish('friends');
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    RequestsProvider.prototype.getmyfriend = function () {
        var _this = this;
        var friendsuid = [];
        this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            var allfriends = snapshot.val();
            _this.myfriends = [];
            for (var i in allfriends)
                friendsuid.push(allfriends[i].uid);
            _this.userservice.getusers().then(function (users) {
                _this.myfriends = [];
                for (var j in friendsuid)
                    for (var key in users) {
                        if (friendsuid[j] === users[key].uid) {
                            _this.myfriends.push(users[key]);
                        }
                    }
                _this.events.publish('friend');
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    RequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], RequestsProvider);
    return RequestsProvider;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(events) {
        this.events = events;
        this.firebuddychats = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/buddychats');
        this.buddymessages = [];
    }
    ChatProvider.prototype.initializebuddy = function (buddy) {
        this.buddy = buddy;
    };
    ChatProvider.prototype.addnewmessage = function (msg) {
        var _this = this;
        if (this.buddy) {
            var promise = new Promise(function (resolve, reject) {
                _this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(_this.buddy.uid).push({
                    sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                    message: msg,
                    timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                }).then(function () {
                    _this.firebuddychats.child(_this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).push({
                        sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                        message: msg,
                        timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                    }).then(function () {
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            });
            return promise;
        }
    };
    ChatProvider.prototype.getbuddymessages = function () {
        var _this = this;
        var temp;
        this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid).on('value', function (snapshot) {
            _this.buddymessages = [];
            temp = snapshot.val();
            for (var tempkey in temp) {
                _this.buddymessages.push(temp[tempkey]);
            }
            _this.events.publish('newmessage');
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback2_feedback2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vision_vision__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.anArray = [];
    }
    HomePage.prototype.navigateToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_feedback__["a" /* FeedbackPage */]);
    };
    HomePage.prototype.navigatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feedback2_feedback2__["a" /* Feedback2Page */]);
    };
    HomePage.prototype.orient = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__vision_vision__["a" /* VisionPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="align-self:center; align-content: center; align-items: center">\n    \n    <button ion-button block (click)="navigateToOtherPage()" style="margin-top:10% "> Activity 1</button>\n    <button ion-button block (click)="navigatePage()" style="margin-bottom:20%"> Activity 2</button>\n    <button ion-button block  style="margin-bottom:20%" (click)=\'orient()\'> Orienting</button>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(afireauth) {
        this.afireauth = afireauth;
    }
    /*
        For logging in a particular user. Called from the login.ts file.
      
    */
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.Auth.Persistence.LOCAL);
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Storage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var Storage = /** @class */ (function () {
    function Storage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    Storage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    Storage.prototype.set = function (key, value) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    Storage.prototype.remove = function (key) { };
    return Storage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(Storage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(Storage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(187);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.credentials = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.authservice.login(this.credentials).then(function (res) {
            if (_this.credentials.email === 'admin@pofod.com') {
                _this.navCtrl.setRoot('AdminPage');
            }
            else if (_this.credentials.email.includes('.alumni@orienting.in')) {
                _this.navCtrl.setRoot('AlumniPage');
            }
            else if (_this.credentials.email.includes('.trainer@orienting.in')) {
                _this.navCtrl.setRoot('TrainersPage');
            }
            else if (!res.code) {
                _this.navCtrl.setRoot('TabsPage');
            }
            else
                alert(res);
        });
    };
    LoginPage.prototype.passwordreset = function () {
        this.navCtrl.push('PasswordresetPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/login/login.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-header>\n      Login\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <div style="height: 10px;"></div>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="credentials.email"></ion-input>\n        </ion-item>\n        <div style="height: 5px;"></div>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="credentials.password"></ion-input>\n        </ion-item>\n        <div style="height: 10px;"></div>\n        <a (click)="passwordreset()">Forgot login details ? <b> Get Help </b></a>\n        <div style="height: 10px;"></div>\n        <button ion-button block round outline color="light" (click)="signin()">Login</button>\n        <div style="height: 10px;"></div>\n        <p>OR</p>\n        <div style="height: 10px;"></div>\n        <button ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  \n\n</ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n\n  <ion-card>\n    \n  <ion-card-content>\n    We aim at providing an environment that brings a sense of freedom, boldness and strength for the youth to:\n  </ion-card-content>\n    <ion-list>\n      \n        <ion-item>\n            <ion-icon name="checkbox"> Dream</ion-icon>\n         \n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="checkbox">Set passion</ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="checkbox">Maximize potential </ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="checkbox">Achieve goals</ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="checkbox">And serve</ion-icon>\n        </ion-item>\n\n          <ion-item>\n            <ion-label>\n              Working towards a life,\n            </ion-label>\n          </ion-item>\n\n        \n            <ion-item>\n                <ion-icon name="checkbox"> Void of addiction</ion-icon>\n              \n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="checkbox">Void of complacence</ion-icon>\n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="checkbox">Respect for the neighbor</ion-icon>\n              </ion-item>\n\n              <ion-item>\n                  <ion-icon name="checkbox">Purpose to be of service</ion-icon>\n                </ion-item>\n  \n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the EngiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BalancePage = /** @class */ (function () {
    function BalancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Work-Life Balance',
                video: 'https://www.youtube-nocookie.com/embed/MPR3o6Hnf2g?rel=0'
            },
            {
                title: 'Redefining work-life balance',
                video: 'https://www.youtube-nocookie.com/embed/YFw-1zfZwZE?rel=0'
            },
            {
                title: 'The Reason People Lose Their Balance - Sadhguru',
                video: 'https://www.youtube-nocookie.com/embed/YVLxIhCHhpg?rel=0'
            },
            {
                title: 'How 7 Body Points Can Balance Your Life',
                video: 'https://www.youtube-nocookie.com/embed/xxfl01GwnLU?rel=0'
            },
            {
                title: 'How to make work-life balance work',
                video: 'https://www.youtube-nocookie.com/embed/jdpIKXLLYYM'
            },
            {
                title: 'What one skill = an awesome life? ',
                video: 'https://www.youtube-nocookie.com/embed/1EHZAQmw2JA'
            }
        ];
    }
    BalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-balance',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/balance/balance.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Balance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/balance/balance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BalancePage);
    return BalancePage;
}());

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, alertCtrl, loadingCtrl, userservice, afauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userservice = userservice;
        this.afauth = afauth;
        this.b1d = {
            message1: '',
            startdate1: '',
            enddate1: '',
            day1: '',
            week1: '',
            month1: '',
            frequency1: '',
        };
    }
    EventPage.prototype.Add = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.b1data(this.b1d);
        loader.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Activity saved successfully',
            buttons: ['OK']
        });
        alert.present();
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/event/event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Add Activity</ion-title>\n    </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    <form >\n      <ion-list>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="b1d.message1" name="message1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" max="2050-12-31" [(ngModel)]="b1d.startdate1" name="startdate1"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>By when</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" min = "2019-03-12" max="2050-12-31" [(ngModel)]="b1d.enddate1" name="enddate1"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Frequency</ion-label>\n        <ion-input type="text" [(ngModel)]="b1d.frequency1" name="frequency1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Day</ion-label>\n        <ion-input type="text" [(ngModel)]="b1d.day1" name="day1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Week</ion-label>\n        <ion-input type="text" [(ngModel)]="b1d.week1" name="week1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Month</ion-label>\n        <ion-input type="text" [(ngModel)]="b1d.month1" name="month1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round (click)="Add()">Save</button>\n      </ion-item>\n      </ion-list>\n    </form>\n    </ion-content>\n  \n  '/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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
 * Generated class for the Event1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Event1Page = /** @class */ (function () {
    function Event1Page(navCtrl, navParams, alertCtrl, loadingCtrl, userservice, afauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userservice = userservice;
        this.afauth = afauth;
        this.b2d = {
            message2: '',
            startdate2: '',
            enddate2: '',
            day2: '',
            week2: '',
            month2: '',
            frequency2: '',
        };
    }
    Event1Page.prototype.Add = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.b2data(this.b2d);
        loader.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Activity saved successfully',
            buttons: ['OK']
        });
        alert.present();
    };
    Event1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event1',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/event1/event1.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Add Activity</ion-title>\n    </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    <form >\n      <ion-list>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="b2d.message2" name="message2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" max="2050-12-31" [(ngModel)]="b2d.startdate2" name="startDate2"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>By when</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" min = "2019-03-12" max="2050-12-31" [(ngModel)]="b2d.enddate2" name="endDate2"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Frequency</ion-label>\n        <ion-input type="text" [(ngModel)]="b2d.frequency2" name="frequency2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Day</ion-label>\n        <ion-input type="text" [(ngModel)]="b2d.day2" name="day2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Week</ion-label>\n        <ion-input type="text" [(ngModel)]="b2d.week2" name="week2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Month</ion-label>\n        <ion-input type="text" [(ngModel)]="b2d.month2" name="month2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round (click)="Add()">Save</button>\n      </ion-item>\n      </ion-list>\n    </form>\n    </ion-content>\n  \n  '/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/event1/event1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], Event1Page);
    return Event1Page;
}());

//# sourceMappingURL=event1.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event2Page; });
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




/**
 * Generated class for the Event2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Event2Page = /** @class */ (function () {
    function Event2Page(navCtrl, navParams, alertCtrl, loadingCtrl, userservice, afauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userservice = userservice;
        this.afauth = afauth;
        this.b3d = {
            message3: '',
            startdate3: '',
            enddate3: '',
            day3: '',
            week3: '',
            month3: '',
            frequency3: '',
        };
    }
    Event2Page.prototype.Add = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.b3data(this.b3d);
        loader.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Activity saved successfully',
            buttons: ['OK']
        });
        alert.present();
    };
    Event2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event2',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/event2/event2.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Add Activity</ion-title>\n    </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    <form >\n      <ion-list>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="b3d.message3" name="message3"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" max="2050-12-31" [(ngModel)]="b3d.startdate3" name="startdate3"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>By when</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" min = "2019-03-12" max="2050-12-31" [(ngModel)]="b3d.enddate3" name="enddate3"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Frequency</ion-label>\n        <ion-input type="text" [(ngModel)]="b3d.frequency3" name="frequency3"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Day</ion-label>\n        <ion-input type="text" [(ngModel)]="b3d.day3" name="day3"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Week</ion-label>\n        <ion-input type="text" [(ngModel)]="b3d.week3" name="week3"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Time per Month</ion-label>\n        <ion-input type="text" [(ngModel)]="b3d.month3" name="month3"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round (click)="Add()">Save</button>\n      </ion-item>\n      </ion-list>\n    </form>\n    </ion-content>\n  \n  '/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/event2/event2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], Event2Page);
    return Event2Page;
}());

//# sourceMappingURL=event2.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeliefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the BeliefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeliefPage = /** @class */ (function () {
    function BeliefPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How to believe in yourself',
                video: 'https://www.youtube.com/embed/-ki9-oaPwHs?rel=0'
            },
            {
                title: 'A guide to believing in yourself',
                video: 'https://www.youtube-nocookie.com/embed/jpRqbP9Nv9k?rel=0'
            },
            {
                title: 'Believe in Yourself?',
                video: 'https://www.youtube-nocookie.com/embed/oupppoVp3Dk?rel=0'
            },
            {
                title: 'Believe in Yourself',
                video: 'https://www.youtube-nocookie.com/embed/4mjRM7sbhFk?rel=0'
            },
            {
                title: 'BELIEVE IN YOURSELF',
                video: 'https://www.youtube-nocookie.com/embed/AjZ0KbJcav0?rel=0'
            }
        ];
    }
    BeliefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-belief',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/belief/belief.html"*/'<!--\n  Generated template for the EngiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Belief</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/belief/belief.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BeliefPage);
    return BeliefPage;
}());

//# sourceMappingURL=belief.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the CommunicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunicationPage = /** @class */ (function () {
    function CommunicationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Think Fast, Talk Smart',
                video: 'https://www.youtube-nocookie.com/embed/HAnw168huqA?rel=0'
            },
            {
                title: '5 Ways to Improve your communication',
                video: 'https://www.youtube-nocookie.com/embed/xr1q-uBtIH4?rel=0'
            },
            {
                title: 'How to improve Communication Skills?',
                video: 'https://www.youtube-nocookie.com/embed/hE6I9apUvrk?rel=0'
            },
            {
                title: '3 Ways to Improve Your Communication Skills',
                video: 'https://www.youtube-nocookie.com/embed/D5hMN_XkPQA?rel=0'
            }
        ];
    }
    CommunicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-communication',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/communication/communication.html"*/'<!--\n  Generated template for the EngiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Communication</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/communication/communication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CommunicationPage);
    return CommunicationPage;
}());

//# sourceMappingURL=communication.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcentrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ConcentrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConcentrationPage = /** @class */ (function () {
    function ConcentrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: '5 Ways to Build Focus and Concentration',
                video: 'https://www.youtube-nocookie.com/embed/a-KCZ1sghLY?rel=0'
            },
            {
                title: 'Top Scientific Ways To Improve Your Concentration',
                video: 'https://www.youtube-nocookie.com/embed/WAQoUJrHrSQ?rel=0'
            },
            {
                title: 'How to Focus Better ',
                video: 'https://www.youtube-nocookie.com/embed/SsoCFt4BgV8?rel=0'
            },
            {
                title: 'How to Build FOCUS and CONCENTRATION',
                video: 'https://www.youtube-nocookie.com/embed/CnlSRI0AIrQ?rel=0'
            }
        ];
    }
    ConcentrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-concentration',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/concentration/concentration.html"*/'<!--\n  Generated template for the EngiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Concentration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/concentration/concentration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ConcentrationPage);
    return ConcentrationPage;
}());

//# sourceMappingURL=concentration.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfidencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ConfidencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfidencePage = /** @class */ (function () {
    function ConfidencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'The Skill of Confidence & How to Take Control of Your Mind!',
                video: 'https://www.youtube-nocookie.com/embed/TVAcs5AHhF4?rel=0'
            },
            {
                title: 'The skill of self confidence',
                video: 'https://www.youtube-nocookie.com/embed/w-HYZv6HzAs?rel=0  '
            },
            {
                title: 'Presenting & Public Speaking Tips',
                video: 'https://www.youtube-nocookie.com/embed/Q5WT2vweFRY?rel=0'
            },
            {
                title: 'The surprising secret to speaking with confidence ',
                video: 'https://www.youtube-nocookie.com/embed/a2MR5XbJtXU?rel=0'
            }
        ];
    }
    ConfidencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confidence',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/confidence/confidence.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Confidence</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/confidence/confidence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ConfidencePage);
    return ConfidencePage;
}());

//# sourceMappingURL=confidence.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreativityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the CreativityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreativityPage = /** @class */ (function () {
    function CreativityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'The science of improving your brain’s creativity',
                video: 'https://www.youtube-nocookie.com/embed/y44GBM99JOA?rel=0'
            },
            {
                title: 'How To Boost Your Creativity',
                video: 'https://www.youtube-nocookie.com/embed/_NHu6gM91aA?rel=0'
            },
            {
                title: 'How To Have Better Creative Thinking',
                video: 'https://www.youtube-nocookie.com/embed/zO2LdDpx-Tc?rel=0'
            },
            {
                title: 'Creative thinking',
                video: 'https://www.youtube-nocookie.com/embed/bEusrD8g-dM?rel=0'
            }
        ];
    }
    CreativityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creativity',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/creativity/creativity.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Creativity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/creativity/creativity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CreativityPage);
    return CreativityPage;
}());

//# sourceMappingURL=creativity.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the DisciplinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisciplinePage = /** @class */ (function () {
    function DisciplinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How to Become More Disciplined (animated short story)',
                video: 'https://www.youtube.com/embed/cPn3UOt1lxw?rel=0'
            },
            {
                title: 'TERRY CREWS - 5 KEYS TO SELF DISCIPLINE',
                video: 'https://www.youtube.com/embed/kpNbUN2_ebo?rel=0'
            },
            {
                title: 'POWER OF DISCIPLINE (ft. Akshay Kumar)',
                video: 'https://www.youtube.com/embed/KSf3vde-odQ?rel=0'
            },
            {
                title: 'SELF DISCIPLINE (Featuring Will Smith)',
                video: 'https://www.youtube.com/embed/ft_DXwgUXB0?rel=0'
            }
        ];
    }
    DisciplinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discipline',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/discipline/discipline.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Discipline</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/discipline/discipline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DisciplinePage);
    return DisciplinePage;
}());

//# sourceMappingURL=discipline.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the EntrepreneurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneurPage = /** @class */ (function () {
    function EntrepreneurPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: '50 Entrepreneurs share priceless advice ',
                video: 'https://www.youtube.com/embed/QoqohmccTSc?rel=0'
            },
            {
                title: 'The 15 Characteristics of Effective Entrepreneurs ',
                video: 'https://www.youtube.com/embed/sOjeQV5pHh4?rel=0'
            },
            {
                title: 'How To Become A Millionaire, Step-By-Step',
                video: 'https://www.youtube.com/embed/jfV2CnNQJCg?rel=0'
            },
            {
                title: 'Devi’s story: Digital skills helped her become a successful entrepreneur ',
                video: 'https://www.youtube.com/embed/eVDeOA5_0uk?rel=0'
            },
            {
                title: 'How to be an Entrepreneur ',
                video: 'https://www.youtube.com/embed/lJjILQu2xM8?rel=0'
            }
        ];
    }
    EntrepreneurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/entrepreneur/entrepreneur.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Entrepreneur</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/entrepreneur/entrepreneur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EntrepreneurPage);
    return EntrepreneurPage;
}());

//# sourceMappingURL=entrepreneur.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtiquettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the EtiquettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtiquettePage = /** @class */ (function () {
    function EtiquettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Good Manners: What to Say and Do (Polite English)',
                video: 'https://www.youtube.com/embed/4-8AlriF908?rel=0'
            },
            {
                title: '25 Etiquette Rules You Should Know And Follow ',
                video: 'https://www.youtube.com/embed/k1PVUa2TPaA?rel=0'
            },
            {
                title: 'Table Manners 101: Basic Dining Etiquette',
                video: 'https://www.youtube.com/embed/FDGGv7z5r2c?rel=0'
            },
            {
                title: 'How to Be a Good Friend | Good Manners',
                video: 'https://www.youtube.com/embed/n-QJLWWBUY4?rel=0'
            }
        ];
    }
    EtiquettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etiquette',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/etiquette/etiquette.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Etiquette</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/etiquette/etiquette.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EtiquettePage);
    return EtiquettePage;
}());

//# sourceMappingURL=etiquette.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the FocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FocusPage = /** @class */ (function () {
    function FocusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How To Stay Focused  ',
                video: 'https://www.youtube.com/embed/WhbYBb0huMs?rel=0'
            },
            {
                title: 'Stay Focused: 11 Psychological Tips ',
                video: 'https://www.youtube.com/embed/8RV_vYsHceQ?rel=0'
            },
            {
                title: 'Unwavering Focus',
                video: 'https://www.youtube.com/embed/4O2JK_94g3Y?rel=0'
            },
            {
                title: 'How to Focus Intensely ',
                video: 'https://www.youtube.com/embed/wfKv2qG8d_w?rel=0'
            }
        ];
    }
    FocusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-focus',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/focus/focus.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Focus</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/focus/focus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], FocusPage);
    return FocusPage;
}());

//# sourceMappingURL=focus.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimePage = /** @class */ (function () {
    function TimePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How to gain control of your free time ',
                video: 'https://www.youtube-nocookie.com/embed/n3kNlFMXslo?rel=0'
            },
            {
                title: 'How To Multiply Your Time ',
                video: 'https://www.youtube-nocookie.com/embed/y2X7c9TUQJ8?rel=0'
            },
            {
                title: 'The Philosophy of Time Management ',
                video: 'https://www.youtube-nocookie.com/embed/WXBA4eWskrc?rel=0'
            },
            {
                title: 'Timeboxing: Elon Musks Time Management Method',
                video: 'https://www.youtube-nocookie.com/embed/fbAYK4KQrso?rel=0'
            }
        ];
    }
    TimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/time/time.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Time management</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/time/time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TimePage);
    return TimePage;
}());

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TeamworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamworkPage = /** @class */ (function () {
    function TeamworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Teamwork Reimagined',
                video: 'https://www.youtube-nocookie.com/embed/UwsMogSQmYI?rel=0'
            },
            {
                title: 'Build a tower, build a team',
                video: 'https://www.youtube-nocookie.com/embed/H0_yKBitO8M?rel=0'
            },
            {
                title: 'Working together to make things happen',
                video: 'https://www.youtube-nocookie.com/embed/Fd_nkBHgX8s?rel=0'
            },
            {
                title: 'How to turn a group of strangers into a team',
                video: 'https://www.youtube-nocookie.com/embed/3boKz0Exros?rel=0'
            }
        ];
    }
    TeamworkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teamwork',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/teamwork/teamwork.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Teamwork</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/teamwork/teamwork.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TeamworkPage);
    return TeamworkPage;
}());

//# sourceMappingURL=teamwork.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the StressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StressPage = /** @class */ (function () {
    function StressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Why Am I Stressed? - Sadhguru',
                video: 'https://www.youtube-nocookie.com/embed/3J-cYxxHQGQ?rel=0'
            },
            {
                title: 'How to channel your stress to help you succeed',
                video: 'https://www.youtube-nocookie.com/embed/yrwWvdM_Yns?rel=0'
            },
            {
                title: 'How to make stress your friend',
                video: 'https://www.youtube-nocookie.com/embed/RcGyVTAoXEU?rel=0'
            },
            {
                title: 'Managing Stress ',
                video: 'https://www.youtube-nocookie.com/embed/hnpQrMqDoqE?rel=0'
            }
        ];
    }
    StressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stress',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/stress/stress.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Stress management</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/stress/stress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], StressPage);
    return StressPage;
}());

//# sourceMappingURL=stress.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialPage = /** @class */ (function () {
    function SocialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Social Well Being ',
                video: 'https://www.youtube-nocookie.com/embed/RijQpsWEdrE?rel=0'
            },
            {
                title: 'John Robbins on the Importance of Social Connections',
                video: 'https://www.youtube-nocookie.com/embed/tcRSmRlbHvw?rel=0'
            },
            {
                title: 'A Social Life | Award Winning Short Film ',
                video: 'https://www.youtube-nocookie.com/embed/GXdVPLj_pIk?rel=0'
            }
        ];
    }
    SocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/social/social.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Social Living</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/social/social.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SocialPage);
    return SocialPage;
}());

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicePage = /** @class */ (function () {
    function ServicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Help Yourself by Helping Others',
                video: 'https://www.youtube-nocookie.com/embed/PqtNaWXOFPM?rel=0'
            },
            {
                title: 'Reciprocal Service: The Gift of Serving Others',
                video: 'https://www.youtube-nocookie.com/embed/oIFBJkNm5bw?rel=0'
            },
            {
                title: 'Service is connecting your passion to someone else’s need',
                video: 'https://www.youtube-nocookie.com/embed/5iMQirTyGBw?rel=0'
            },
            {
                title: 'Finding Your Strength by Helping Others ',
                video: 'https://www.youtube-nocookie.com/embed/zu1VtUuxBW4?rel=0'
            }
        ];
    }
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/service/service.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SacrificePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the SacrificePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SacrificePage = /** @class */ (function () {
    function SacrificePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Sacrifice Is Necessary To Succeed ',
                video: 'https://www.youtube-nocookie.com/embed/pYJFixDC5l0?rel=0'
            },
            {
                title: 'The Importance of Sacrifice',
                video: 'https://www.youtube-nocookie.com/embed/OKBYSDb9IEg?rel=0'
            },
            {
                title: 'Why self sacrifice is necessary',
                video: 'https://www.youtube-nocookie.com/embed/qEdWxCnkL2Q?rel=0'
            },
            {
                title: 'Selflessness = Sacrifice',
                video: 'https://www.youtube-nocookie.com/embed/Gq50npA6s2E?rel=0'
            }
        ];
    }
    SacrificePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sacrifice',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/sacrifice/sacrifice.html"*/'<!--\n  Generated template for the SacrificePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Sacrifice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let video of videos">\n    <ion-card-header>\n     {{video.title}}\n    </ion-card-header>\n    <ion-card-content>\n      <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/sacrifice/sacrifice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SacrificePage);
    return SacrificePage;
}());

//# sourceMappingURL=sacrifice.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResiliencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ResiliencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResiliencePage = /** @class */ (function () {
    function ResiliencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'The Secret of Becoming Mentally Strong',
                video: 'https://www.youtube-nocookie.com/embed/TFbv757kup4'
            },
            {
                title: 'What Trauma Taught Me About Resilience',
                video: 'https://www.youtube-nocookie.com/embed/3qELiw_1Ddg?rel=0'
            },
            {
                title: 'The Power of Resilience',
                video: 'https://www.youtube-nocookie.com/embed/isfw8JJ-eWM?rel=0'
            },
            {
                title: 'Educating For Happiness and Resilience',
                video: 'https://www.youtube-nocookie.com/embed/DbC18wFkHNI?rel=0'
            },
            {
                title: 'Cultivating resilience',
                video: 'https://www.youtube-nocookie.com/embed/eLzVJVM1BUc?rel=0'
            }
        ];
    }
    ResiliencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resilience',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/resilience/resilience.html"*/'<!--\n  Generated template for the ResiliencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Resilience</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let video of videos">\n    <ion-card-header>\n     {{video.title}}\n    </ion-card-header>\n    <ion-card-content>\n      <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/resilience/resilience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ResiliencePage);
    return ResiliencePage;
}());

//# sourceMappingURL=resilience.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProblemPage = /** @class */ (function () {
    function ProblemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'The surprising secret that solves your problems quickly',
                video: 'https://www.youtube-nocookie.com/embed/tEPEHpgK09Q?rel=0'
            },
            {
                title: 'Figure It Out - The Art of Problem Solving',
                video: 'https://www.youtube-nocookie.com/embed/6_LX9mo0Thw?rel=0'
            },
            {
                title: 'Working backward to solve problems - Maurice Ashley ',
                video: 'https://www.youtube-nocookie.com/embed/v34NqCbAA1c?rel=0'
            },
            {
                title: 'A Young Scientists Guide to Problem Solving and Innovation',
                video: 'https://www.youtube-nocookie.com/embed/GBEPYDLD3vg?rel=0'
            }
        ];
    }
    ProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-problem',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/problem/problem.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Problem solving</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/problem/problem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProblemPage);
    return ProblemPage;
}());

//# sourceMappingURL=problem.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PracticePage = /** @class */ (function () {
    function PracticePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'What Are You Practicing Right Now?',
                video: 'https://www.youtube-nocookie.com/embed/AkXA8rgqiss?rel=0'
            },
            {
                title: 'Practice everyday ',
                video: 'https://www.youtube-nocookie.com/embed/nIp5Tfkgwf4?rel=0'
            },
            {
                title: 'How to practice effectively...for just about anything ',
                video: 'https://www.youtube-nocookie.com/embed/f2O6mQkFiiw?rel=0'
            },
            {
                title: 'PRACTICE',
                video: 'https://www.youtube-nocookie.com/embed/IRKVyqh6QcM?rel=0'
            }
        ];
    }
    PracticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-practice',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/practice/practice.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Practice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/practice/practice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PracticePage);
    return PracticePage;
}());

//# sourceMappingURL=practice.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerseverancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PerseverancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerseverancePage = /** @class */ (function () {
    function PerseverancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Grit: the power of passion and perseverance ',
                video: 'https://www.youtube-nocookie.com/embed/H14bBuluwB8?rel=0'
            },
            {
                title: 'Why it pays to work hard ',
                video: 'https://www.youtube-nocookie.com/embed/a6FvEwLBgBo?rel=0'
            },
            {
                title: 'Hard work can change your Destiny',
                video: 'https://www.youtube-nocookie.com/embed/fR4yJYfZ_aA?rel=0'
            },
            {
                title: 'Jack Ma - DO WHAT IS HARD ',
                video: 'https://www.youtube-nocookie.com/embed/OyGVCI8bMmE?rel=0'
            }
        ];
    }
    PerseverancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perseverance',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/perseverance/perseverance.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Perseverance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/perseverance/perseverance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PerseverancePage);
    return PerseverancePage;
}());

//# sourceMappingURL=perseverance.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PatiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatiencePage = /** @class */ (function () {
    function PatiencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How to Remain Calm With People',
                video: 'https://www.youtube-nocookie.com/embed/du035tg-SwY?rel=0?'
            },
            {
                title: 'The secret to self control',
                video: 'https://www.youtube-nocookie.com/embed/tTb3d5cjSFI?rel=0'
            },
            {
                title: 'TPatience - Who has time for that?',
                video: 'https://www.youtube-nocookie.com/embed/IeuWP26GtTI?rel=0'
            },
            {
                title: 'Patience | Elise Matsusaka',
                video: 'https://www.youtube-nocookie.com/embed/7y86Oj_LqWU?rel=0'
            }
        ];
    }
    PatiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patience',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/patience/patience.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Patience</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/patience/patience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PatiencePage);
    return PatiencePage;
}());

//# sourceMappingURL=patience.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the MotivationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MotivationPage = /** @class */ (function () {
    function MotivationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How to Stay Motivated all the time? ',
                video: 'https://www.youtube-nocookie.com/embed/t6Kw3n9CNrc?rel=0'
            },
            {
                title: 'This Simple Trick Will Keep You Motivated Everyday ',
                video: 'https://www.youtube-nocookie.com/embed/sTw_iAhonJ4?rel=0'
            },
            {
                title: 'The psychology of self-motivation',
                video: 'https://www.youtube-nocookie.com/embed/7sxpKhIbr0E?rel=0'
            },
            {
                title: '5 LIFE HACKS That Will MOTIVATE You To Do ANYTHING ',
                video: 'https://www.youtube-nocookie.com/embed/aG-1IRwYWqU?rel=0'
            }
        ];
    }
    MotivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-motivation',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/motivation/motivation.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Motivation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/motivation/motivation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MotivationPage);
    return MotivationPage;
}());

//# sourceMappingURL=motivation.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeditationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the MeditationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeditationPage = /** @class */ (function () {
    function MeditationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'The Scientific Power of Meditation',
                video: 'https://www.youtube-nocookie.com/embed/Aw71zanwMnY?rel=0'
            },
            {
                title: 'How To Meditate For Beginners',
                video: 'https://www.youtube-nocookie.com/embed/mMMerxh_12U?rel=0'
            },
            {
                title: 'Why Meditate?',
                video: 'https://www.youtube-nocookie.com/embed/aAVPDYhW_nw?rel=0'
            },
            {
                title: 'Dalai Lama - Why meditate?',
                video: 'https://www.youtube-nocookie.com/embed/yTCRdM71j2E?rel=0'
            }
        ];
    }
    MeditationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meditation',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/meditation/meditation.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Meditation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/meditation/meditation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MeditationPage);
    return MeditationPage;
}());

//# sourceMappingURL=meditation.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the LearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LearningPage = /** @class */ (function () {
    function LearningPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'How To Learn Anything Faster',
                video: 'https://www.youtube-nocookie.com/embed/rA2XHWM__yE?rel=0'
            },
            {
                title: 'Study Skills – Better learning',
                video: 'https://www.youtube-nocookie.com/embed/h9ven4N67i0?rel=0'
            },
            {
                title: 'The 9 BEST Scientific Study Tips',
                video: 'https://www.youtube-nocookie.com/embed/p60rN9JEapg?rel=0'
            },
            {
                title: 'Speed Learning: Learn In Half The Time',
                video: 'https://www.youtube-nocookie.com/embed/0r1LTe5KkSA?rel=0'
            }
        ];
    }
    LearningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-learning',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/learning/learning.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Learning</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/learning/learning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LearningPage);
    return LearningPage;
}());

//# sourceMappingURL=learning.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the LeadershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeadershipPage = /** @class */ (function () {
    function LeadershipPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Why good leaders make you feel safe',
                video: 'https://www.youtube-nocookie.com/embed/lmyZMtPVodo'
            },
            {
                title: 'Speak like a leader',
                video: 'https://www.youtube-nocookie.com/embed/bGBamfWasNQ?rel=0'
            },
            {
                title: 'Learn how to manage people and be a better leader',
                video: 'https://www.youtube-nocookie.com/embed/PWmhl6rzVpM?rel=0'
            },
            {
                title: 'What it takes to be a great leader',
                video: 'https://www.youtube-nocookie.com/embed/aUYSDEYdmzw?rel=0'
            },
            {
                title: 'Great leadership starts with self-leadership',
                video: 'https://www.youtube-nocookie.com/embed/vlpKyLklDDY?rel=0'
            }
        ];
    }
    LeadershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leadership',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/leadership/leadership.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Leadership</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let video of videos">\n      <ion-card-header>\n       {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n        <iframe width="100%" height="315" [src]="video.video | yt " allowfullscreen></iframe>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/leadership/leadership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LeadershipPage);
    return LeadershipPage;
}());

//# sourceMappingURL=leadership.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>Hey! How can we help you?\n    <ion-item>\n        <ion-input placeholder="Write your query here" ></ion-input>\n      </ion-item>\n    <button ion-button block>Submit</button>\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionPage; });
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



var VisionPage = /** @class */ (function () {
    function VisionPage(navCtrl, navParams, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.uvis = {
            vision: '',
        };
        this.ugo = {
            goal: '',
        };
    }
    VisionPage.prototype.vigo = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.uservision(this.uvis);
        this.userservice.usergoal(this.ugo);
        loader.dismiss();
        this.navCtrl.push('SkillPage');
    };
    VisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vision',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/vision/vision.html"*/'<!--\n  Generated template for the VisionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vision</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 style="text-align: center; font-size: 130%">Your Vision</h1>\n\n\n\n\n  <h2 style="text-align: center; font-size: 130%">Why am I here?</h2>\n      \n  <ion-list>\n    <ion-item>\n      <ion-input type=\'text\' [(ngModel)]="ugo.goal" placeholder="Why?" clearInput></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n\n        <ion-list>\n          <ion-item>\n            <ion-input type=\'text\' [(ngModel)]="uvis.vision" placeholder="Your Vision goes here!" clearInput></ion-input>\n          </ion-item>\n        </ion-list>\n    \n\n</ion-content>\n<ion-footer align=\'center\'>\n    <button ion-button round color="secondary" (click)=\'vigo()\'>Next</button>\n  </ion-footer>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/vision/vision.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], VisionPage);
    return VisionPage;
}());

//# sourceMappingURL=vision.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Privacy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-content>\n     <h1>\n        When you use our services, you’re trusting us with your\n        information. We understand this is a big responsibility and\n        work hard to protect your information and put you in\n        control.\n\n     </h1> \n      This Privacy Policy is meant to help you understand what information we collect, why we collect it, and\n      how you can update, manage, export, and delete your information.\n      You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a\nOrienting Account if you want to create and manage content or see more relevant\nresults. And you can use many services when you’re signed in, like watching YouTube videos. And across our services, you can adjust your privacy\nsettings to control what we collect and how your information is used.\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatusPage = /** @class */ (function () {
    function StatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatusPage');
    };
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-status',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/status/status.html"*/'<!--\n  Generated template for the StatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  \n  <img src="../../assets/imgs/pie.gif">\n  <ion-card-content>\n<ion-card-title>\n  Status of your goals\n</ion-card-title>\nThe Stutus of the entire process undertaken is displayed!\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/status/status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>terms</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n        You must be at least 13 years old to open an Orienting account.\n\n        Orienting can only be used by students who have undergone activities in their respective institutions.\n    \n        You are solely responsible for protecting your own account password and other account information.\n    \n        Do not use Orienting if you do not agree to the Terms of Use described below. Your use of Orienting means you agree to these Terms of Use.\n\n        By using our Services, you are agreeing to these terms. Please read them carefully.\n\nOur Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.\n\nUsing our Services\nYou must follow any policies made available to you within the Services.\n\nDon’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.\n\nUsing our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don’t remove, obscure, or alter any legal notices displayed in or along with our Services.\n\nOur Services display some content that is not Orienting\'s. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law. But that does not necessarily mean that we review content, so please don’t assume that we do.\n\nIn connection with your use of the Services, we may send you service announcements, administrative messages, and other information. You may opt out of some of those communications.\n\nSome of our Services are available on mobile devices. Do not use such Services in a way that distracts you and prevents you from obeying traffic or safety laws.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 261;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		887,
		72
	],
	"../pages/addal/addal.module": [
		888,
		30
	],
	"../pages/addtr/addtr.module": [
		889,
		29
	],
	"../pages/adduser/adduser.module": [
		890,
		71
	],
	"../pages/admin/admin.module": [
		891,
		28
	],
	"../pages/adminotp/adminotp.module": [
		892,
		70
	],
	"../pages/alumni/alumni.module": [
		893,
		27
	],
	"../pages/alumniprofile/alumniprofile.module": [
		894,
		26
	],
	"../pages/balance/balance.module": [
		895,
		69
	],
	"../pages/behaviour/behaviour.module": [
		896,
		25
	],
	"../pages/belief/belief.module": [
		897,
		68
	],
	"../pages/buddies/buddies.module": [
		898,
		24
	],
	"../pages/buddiesone/buddiesone.module": [
		899,
		23
	],
	"../pages/buddychat/buddychat.module": [
		900,
		22
	],
	"../pages/chatone/chatone.module": [
		901,
		67
	],
	"../pages/chats/chats.module": [
		902,
		66
	],
	"../pages/communication/communication.module": [
		903,
		65
	],
	"../pages/concentration/concentration.module": [
		904,
		64
	],
	"../pages/confidence/confidence.module": [
		905,
		63
	],
	"../pages/creativity/creativity.module": [
		906,
		62
	],
	"../pages/discipline/discipline.module": [
		907,
		61
	],
	"../pages/entrepreneur/entrepreneur.module": [
		908,
		60
	],
	"../pages/etiquette/etiquette.module": [
		909,
		59
	],
	"../pages/event/event.module": [
		910,
		58
	],
	"../pages/event1/event1.module": [
		911,
		57
	],
	"../pages/event2/event2.module": [
		912,
		56
	],
	"../pages/exposure/exposure.module": [
		913,
		21
	],
	"../pages/focus/focus.module": [
		914,
		55
	],
	"../pages/forum/forum.module": [
		915,
		20
	],
	"../pages/forumone/forumone.module": [
		916,
		19
	],
	"../pages/help/help.module": [
		917,
		54
	],
	"../pages/leadership/leadership.module": [
		918,
		53
	],
	"../pages/learning/learning.module": [
		919,
		52
	],
	"../pages/login/login.module": [
		920,
		51
	],
	"../pages/manage/manage.module": [
		921,
		18
	],
	"../pages/map/map.module": [
		922,
		17
	],
	"../pages/meditation/meditation.module": [
		923,
		50
	],
	"../pages/modal/modal.module": [
		924,
		49
	],
	"../pages/motivation/motivation.module": [
		925,
		48
	],
	"../pages/obstacles/obstacles.module": [
		926,
		16
	],
	"../pages/otp/otp.module": [
		927,
		0
	],
	"../pages/password/password.module": [
		928,
		47
	],
	"../pages/passwordreset/passwordreset.module": [
		929,
		15
	],
	"../pages/patience/patience.module": [
		930,
		46
	],
	"../pages/perseverance/perseverance.module": [
		931,
		45
	],
	"../pages/personalities/personalities.module": [
		932,
		14
	],
	"../pages/plan/plan.module": [
		933,
		44
	],
	"../pages/practice/practice.module": [
		934,
		43
	],
	"../pages/privacy/privacy.module": [
		935,
		42
	],
	"../pages/problem/problem.module": [
		936,
		41
	],
	"../pages/profile/profile.module": [
		937,
		13
	],
	"../pages/profilepic/profilepic.module": [
		938,
		12
	],
	"../pages/report/report.module": [
		939,
		11
	],
	"../pages/resilience/resilience.module": [
		940,
		40
	],
	"../pages/sacrifice/sacrifice.module": [
		941,
		39
	],
	"../pages/service/service.module": [
		942,
		38
	],
	"../pages/signup/signup.module": [
		943,
		10
	],
	"../pages/skill/skill.module": [
		944,
		9
	],
	"../pages/social/social.module": [
		945,
		37
	],
	"../pages/status/status.module": [
		946,
		36
	],
	"../pages/stress/stress.module": [
		947,
		35
	],
	"../pages/tabs/tabs.module": [
		948,
		8
	],
	"../pages/teamwork/teamwork.module": [
		949,
		34
	],
	"../pages/terms/terms.module": [
		950,
		33
	],
	"../pages/time/time.module": [
		951,
		32
	],
	"../pages/trainerprofile/trainerprofile.module": [
		952,
		7
	],
	"../pages/trainers/trainers.module": [
		953,
		6
	],
	"../pages/tutgoal/tutgoal.module": [
		954,
		5
	],
	"../pages/tutone/tutone.module": [
		955,
		4
	],
	"../pages/tutthree/tutthree.module": [
		956,
		3
	],
	"../pages/tuttwo/tuttwo.module": [
		957,
		2
	],
	"../pages/tutvis/tutvis.module": [
		958,
		1
	],
	"../pages/vision/vision.module": [
		959,
		31
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 306;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/details');
        this.persona = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/personalities');
        this.us = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/skills');
        this.uo = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/obstacles');
        this.ue = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/exposures');
        this.ub = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/behaviours');
        this.alum = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/orienting');
        this.tra = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/orienting');
        this.vis = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/vision');
        this.go = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/goal');
        this.fb = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/activity1fb');
        this.fb1 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/students/activity2fb');
        this.orienting = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/orienting');
        this.bd1 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/behaviour1data');
        this.bd2 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/behaviour2data');
        this.bd3 = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/students/behaviour3data');
    }
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: ''
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        fname: newuser.fname,
                        lname: newuser.lname,
                        colname: newuser.colname,
                        cname: newuser.cname,
                        photoURL: ''
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.addalumni = function (alumni) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(alumni.email, alumni.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: alumni.displayName,
                    photoURL: ''
                }).then(function () {
                    _this.alum.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: alumni.displayName,
                        //fname: alumni.fname,
                        //lname: alumni.lname,
                        aldes: alumni.aldes,
                        alskill: alumni.alskill,
                        photoURL: ''
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.addtrainer = function (trainers) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(trainers.email, trainers.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: trainers.displayName,
                    photoURL: ''
                }).then(function () {
                    _this.tra.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: trainers.displayName,
                        // fname: alumni.fname,
                        //lname: alumni.lname,
                        des: trainers.des,
                        spl: trainers.spl,
                        photoURL: ''
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updateuser = function (currentuser) {
        this.persona.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            p1: currentuser.p1,
            p2: currentuser.p2,
            p3: currentuser.p3,
        });
    };
    UserProvider.prototype.userskill = function (uskill) {
        this.us.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            skill1: uskill.skill1,
            skill2: uskill.skill2,
            skill3: uskill.skill3,
        });
    };
    UserProvider.prototype.userobstacle = function (uobs) {
        this.uo.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            obstacle1: uobs.obstacle1,
            obstacle2: uobs.obstacle2,
            obstacle3: uobs.obstacle3,
        });
    };
    UserProvider.prototype.userexposure = function (uex) {
        this.ue.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            exposure1: uex.exposure1,
            exposure2: uex.exposure2,
            exposure3: uex.exposure3,
        });
    };
    UserProvider.prototype.userbehaviour = function (ube) {
        this.ub.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            behaviour1: ube.behaviour1,
            behaviour2: ube.behaviour2,
            behaviour3: ube.behaviour3,
        });
    };
    UserProvider.prototype.uservision = function (uvis) {
        this.vis.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            vision: uvis.vision,
        });
    };
    UserProvider.prototype.usergoal = function (ugo) {
        this.go.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            goal: ugo.goal,
        });
    };
    UserProvider.prototype.userfb = function (ufb) {
        this.fb.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            feedback: ufb.feedback,
        });
    };
    UserProvider.prototype.userfb1 = function (ufb1) {
        this.fb1.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            feedback: ufb1.feedback,
        });
    };
    UserProvider.prototype.passwordreset = function (email) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.alum.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatename = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    fname: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedispname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.tra.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedes = function (newdes) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.alum.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    aldes: newdes,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatecol = function (newdes) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    colname: newdes,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatdes = function (newdes) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.tra.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    des: newdes,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updateskills = function (newskill) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.alum.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    alskill: newskill,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatskills = function (newskill) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.tra.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    spl: newskill,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatecourse = function (newskill) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: '',
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    cname: newskill,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getalumnidetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.alum.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.gettrainerdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.tra.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.skilldetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.us.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.obstacledetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.uo.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.exposuredetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.ue.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.behaviourdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.ub.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.goaldetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.go.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.visiondetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.vis.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getallusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.orienting.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.b1data = function (b1d) {
        this.bd1.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            message1: b1d.message1,
            startdate1: b1d.startdate1,
            enddate1: b1d.enddate1,
            day1: b1d.day1,
            week1: b1d.week1,
            month1: b1d.month1,
            frequency1: b1d.frequency1,
        });
    };
    UserProvider.prototype.b2data = function (b2d) {
        this.bd2.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            message2: b2d.message2,
            startdate2: b2d.startdate2,
            enddate2: b2d.enddate2,
            day2: b2d.day2,
            week2: b2d.week2,
            month2: b2d.month2,
            frequency2: b2d.frequency2,
        });
    };
    UserProvider.prototype.b3data = function (b3d) {
        this.bd3.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            message3: b3d.message3,
            startdate3: b3d.startdate3,
            enddate3: b3d.enddate3,
            day3: b3d.day3,
            week3: b3d.week3,
            month3: b3d.month3,
            frequency3: b3d.frequency3,
        });
    };
    UserProvider.prototype.b1det = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.bd1.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.b2det = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.bd2.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.b3det = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.bd3.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.personalities = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.persona.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtpProvider = /** @class */ (function () {
    function OtpProvider() {
        this.otp = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/otp');
    }
    OtpProvider.prototype.addotp = function (otp) {
        this.otp.set({
            randomNo: otp.randomNo,
        });
    };
    OtpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OtpProvider);
    return OtpProvider;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        this.id = '';
        this.ttl = 1209600;
        this.created = new Date(0);
        this.userId = 0;
        this.user = null;
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                id: {
                    name: 'id',
                    type: 'string'
                },
                ttl: {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                created: {
                    name: 'created',
                    type: 'Date',
                    default: new Date(0)
                },
                userId: {
                    name: 'userId',
                    type: 'number'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.issuedAt = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());

//# sourceMappingURL=BaseModels.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'any'
                },
                "username": {
                    name: 'username',
                    type: 'any'
                },
                "password": {
                    name: 'password',
                    type: 'any'
                },
                "email": {
                    name: 'email',
                    type: 'any'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'any'
                },
                "verificationToken": {
                    name: 'verificationToken',
                    type: 'any'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: ''
                },
            }
        };
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Question`.
     */
    Question.getModelName = function () {
        return "Question";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Question for dynamic purposes.
    **/
    Question.factory = function (data) {
        return new Question(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Question.getModelDefinition = function () {
        return {
            name: 'Question',
            plural: 'Questions',
            properties: {
                "questionSlug": {
                    name: 'questionSlug',
                    type: 'any'
                },
                "question": {
                    name: 'question',
                    type: 'any'
                },
                "negativeVotes": {
                    name: 'negativeVotes',
                    type: 'any',
                    default: 0
                },
                "positiveVotes": {
                    name: 'positiveVotes',
                    type: 'any',
                    default: 0
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {
                answers: {
                    name: 'answers',
                    type: 'Answer[]',
                    model: 'Answer'
                },
            }
        };
    };
    return Question;
}());

//# sourceMappingURL=Question.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Answer`.
     */
    Answer.getModelName = function () {
        return "Answer";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Answer for dynamic purposes.
    **/
    Answer.factory = function (data) {
        return new Answer(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Answer.getModelDefinition = function () {
        return {
            name: 'Answer',
            plural: 'Answers',
            properties: {
                "answer": {
                    name: 'answer',
                    type: 'any'
                },
                "negativeVotes": {
                    name: 'negativeVotes',
                    type: 'any',
                    default: 0
                },
                "positiveVotes": {
                    name: 'positiveVotes',
                    type: 'any',
                    default: 0
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "questionId": {
                    name: 'questionId',
                    type: 'any'
                },
            },
            relations: {
                question: {
                    name: 'question',
                    type: 'Question',
                    model: 'Question'
                },
            }
        };
    };
    return Answer;
}());

//# sourceMappingURL=Answer.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + value + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CookieBrowser);
    return CookieBrowser;
}());

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageBrowser);
    return StorageBrowser;
}());

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(65);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (include)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody)
            .map(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function () {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Confirm a user registration with email verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (uid)
            _urlParams.uid = uid;
        if (token)
            _urlParams.token = token;
        if (redirect)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (oldPassword)
            _urlParams.oldPassword = oldPassword;
        if (newPassword)
            _urlParams.newPassword = newPassword;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function () {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(65);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Question` model.
 */
var QuestionApi = /** @class */ (function (_super) {
    __extends(QuestionApi, _super);
    function QuestionApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.findByIdAnswers = function (id, fk) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Delete a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    QuestionApi.prototype.destroyByIdAnswers = function (id, fk) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Update a related item by id for answers.
     *
     * @param {any} id question id
     *
     * @param {any} fk Foreign key for answers
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.updateByIdAnswers = function (id, fk, data) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Queries answers of question.
     *
     * @param {any} id question id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.getAnswers = function (id, filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in answers of this model.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.createAnswers = function (id, data) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Deletes all answers of this model.
     *
     * @param {any} id question id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    QuestionApi.prototype.deleteAnswers = function (id) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Counts answers of question.
     *
     * @param {any} id question id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    QuestionApi.prototype.countAnswers = function (id, where) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.patchOrCreate = function (data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.patchAttributes = function (id, data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in answers of this model.
     *
     * @param {any} id question id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Question` object.)
     * </em>
     */
    QuestionApi.prototype.createManyAnswers = function (id, data) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/questions/:id/answers";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Question`.
     */
    QuestionApi.prototype.getModelName = function () {
        return "Question";
    };
    QuestionApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], QuestionApi);
    return QuestionApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Question.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(65);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Answer` model.
 */
var AnswerApi = /** @class */ (function (_super) {
    __extends(AnswerApi, _super);
    function AnswerApi(http, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation question.
     *
     * @param {any} id answer id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.getQuestion = function (id, refresh) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/answers/:id/question";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (refresh)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.patchOrCreate = function (data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/answers";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id answer id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Answer` object.)
     * </em>
     */
    AnswerApi.prototype.patchAttributes = function (id, data) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/answers/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Answer`.
     */
    AnswerApi.prototype.getModelName = function () {
        return "Answer";
    };
    AnswerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], AnswerApi);
    return AnswerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Answer.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_answer_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_answer_manage_answer__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { QuestionPage } from '../question/question'
// import { LearnDetailsPage } from '../learn-details/learn-details'

var QuestionDetailsPage = /** @class */ (function () {
    function QuestionDetailsPage(navCtrl, navParams, questionService, answerService, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionService = questionService;
        this.answerService = answerService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.answers = [];
        this.question = new __WEBPACK_IMPORTED_MODULE_2__sdk__["d" /* Question */]();
    }
    QuestionDetailsPage.prototype.createAnswerModal = function () {
        var _this = this;
        var create_answer_data = {
            mode: 'Create',
            questionId: this.questionId
        };
        var create_answer_modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__manage_answer_manage_answer__["a" /* ManageAnswerPage */], { data: create_answer_data });
        create_answer_modal.onDidDismiss(function (data) {
            _this.getAnswers();
        });
        create_answer_modal.present();
    };
    QuestionDetailsPage.prototype.editAnswerModal = function (answer) {
        var _this = this;
        var edit_answer_data = {
            mode: 'Edit',
            answer: answer,
            questionId: this.questionId
        };
        var edit_answer_modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__manage_answer_manage_answer__["a" /* ManageAnswerPage */], { data: edit_answer_data });
        edit_answer_modal.onDidDismiss(function (data) {
            _this.getAnswers();
        });
        edit_answer_modal.present();
    };
    QuestionDetailsPage.prototype.ionViewWillEnter = function () {
        this.questionId = this.navParams.get('id');
        this.getQuestion();
        this.getAnswers();
    };
    QuestionDetailsPage.prototype.getQuestion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.questionService.getQuestion(this.questionId)
            .then(function (res) {
            _this.question = res[0];
            loading.dismiss();
        });
    };
    QuestionDetailsPage.prototype.getAnswers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.answerService.getAnswers(this.questionId)
            .then(function (res) {
            _this.answers = res;
            loading.dismiss();
        });
    };
    QuestionDetailsPage.prototype.delete = function (answerId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete answer',
            message: 'Are you sure you want to delete this answer?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.answerService.deleteAnswer(answerId)
                            .then(function (res) { return _this.getAnswers(); });
                    }
                }
            ]
        });
        confirm.present();
    };
    QuestionDetailsPage.prototype.upVoteQuestion = function () {
        this.question.positiveVotes += 1;
        this.questionService.updateQuestion(this.question)
            .then(function (res) { return console.log(res); });
    };
    QuestionDetailsPage.prototype.downVoteQuestion = function () {
        this.question.negativeVotes += 1;
        this.questionService.updateQuestion(this.question)
            .then(function (res) { return console.log(res); });
    };
    QuestionDetailsPage.prototype.addPositiveVote = function (answer) {
        var _this = this;
        answer.positiveVotes += 1;
        this.answerService.updateAnswer(answer)
            .then(function (res) { return _this.getAnswers(); });
    };
    QuestionDetailsPage.prototype.addNegativeVote = function (answer) {
        var _this = this;
        answer.negativeVotes += 1;
        this.answerService.updateAnswer(answer)
            .then(function (res) { return _this.getAnswers(); });
    };
    QuestionDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'question-details-page',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/question-details/question-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Question details</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="question-details">\n    <ion-row class="details-content">\n      <ion-col no-padding col-12>\n        <h1 class="question-title">{{ question.question }}</h1>\n      </ion-col>\n      <ion-col no-padding col-12>\n        <p class="vote-call-to-action">\n          Was this question usefull? Rate it!\n        </p>\n        <ion-row class="question-actions-row">\n          <ion-col no-padding col-4>\n            <button class="question-action-button up-vote" ion-button icon-left round block small color="dark" (click)= "upVoteQuestion()">\n              <ion-icon name="arrow-up"></ion-icon>\n              <div>Up-vote</div>\n            </button>\n          </ion-col>\n          <ion-col no-padding col-3 class="score-col">\n            <div class="score-wrapper">\n              <span class="question-score" [ngClass]="{\'good-score\': (question.positiveVotes - question.negativeVotes) > 0, \'no-score\': (question.positiveVotes - question.negativeVotes) == 0, \'bad-score\': (question.positiveVotes - question.negativeVotes) < 0}">{{ question.positiveVotes - question.negativeVotes }}</span>\n              <button class="favourite-button" ion-button small round clear icon-only>\n                <ion-icon name="ios-star"></ion-icon>\n              </button>\n            </div>\n          </ion-col>\n          <ion-col no-padding col-4>\n            <button class="question-action-button down-vote" ion-button icon-left round block small color="dark" (click)= "downVoteQuestion()">\n              <ion-icon name="arrow-down"></ion-icon>\n              <div>Down-vote</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="answers.length == 0">\n    <h3 class="answers-call-out">\n      There are no answers to this question. Be the first one to answer!\n    </h3>\n  </div>\n\n  <div *ngIf="answers.length > 0">\n    <h3 class="answers-call-out">\n      <span class="call-out-explanation">We found </span>\n      <ion-badge class="call-out-tag">{{ answers.length }}</ion-badge>\n      <span> Answers for this question!</span>\n    </h3>\n\n    <ion-list class="answers-list">\n      <ion-item class="answer-item" *ngFor="let answer of answers">\n        <ion-row>\n          <ion-col class="votes-col" col-2>\n            <button class="vote-button up-vote" ion-button clear small (click)= "addPositiveVote(answer)">\n              <ion-icon name="arrow-up"></ion-icon>\n            </button>\n            <span class="answer-score" [ngClass]="{\'good-score\': (answer.positiveVotes - answer.negativeVotes) > 0, \'no-score\': (answer.positiveVotes - answer.negativeVotes) == 0, \'bad-score\': (answer.positiveVotes - answer.negativeVotes) < 0}">{{ answer.positiveVotes - answer.negativeVotes }}</span>\n            <button class="vote-button down-vote" ion-button clear small (click)= "addNegativeVote(answer)">\n              <ion-icon name="arrow-down"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-10>\n            <ion-row class="answer-details">\n              <ion-col col-12>\n                <p class="answer-text">{{ answer.answer }}</p>\n              </ion-col>\n              <ion-col col-4 class="votes-details">\n                <div class="details-wrapper">\n                  <span class="total-votes">{{ answer.positiveVotes + answer.negativeVotes }}</span>\n                  <span class="details-text">Votes</span>\n                </div>\n              </ion-col>\n              <ion-col col-4 class="actions-details">\n                <button class="edit-button" ion-button small round clear icon-only color="dark" (click)="editAnswerModal(answer)">\n                  <ion-icon name="md-create"></ion-icon>\n                </button>\n                <button class="delete-button" ion-button small round clear icon-only color="danger" (click)="delete(answer.id)">\n                  <ion-icon name="ios-trash-outline"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block (click)="createAnswerModal()" color="answer">\n      <b>Know the Answer? Don\'t be shy!</b>\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/question-details/question-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_answer_service__["a" /* AnswerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], QuestionDetailsPage);
    return QuestionDetailsPage;
}());

//# sourceMappingURL=question-details.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_answer_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sdk__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageAnswerPage = /** @class */ (function () {
    function ManageAnswerPage(navParams, viewCtrl, answerService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.answerService = answerService;
        this.answer = new __WEBPACK_IMPORTED_MODULE_5__sdk__["a" /* Answer */]();
        var data = navParams.get('data');
        this._mode = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data) && Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data.mode) ? data.mode : '';
        this._question_id = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data) && Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data.questionId) ? data.questionId : '';
        this._answer_id = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data) && Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(data.answerId) ? data.answerId : '';
    }
    ManageAnswerPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        if (data.answer) {
            this.answer = data.answer;
        }
        this.answerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            answer: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.answer.answer, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    ManageAnswerPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ManageAnswerPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = value;
        data.questionId = this._question_id;
        if (this.answer.answer) {
            data.id = this.answer.id;
            data.positiveVotes = this.answer.positiveVotes;
            data.negativeVotes = this.answer.negativeVotes;
            this.answerService.updateAnswer(data)
                .then(function (res) { return _this.dismiss(); });
        }
        else {
            this.answerService.createAnswer(value)
                .then(function (res) { return _this.dismiss(); });
        }
    };
    ManageAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'manage-answer-page',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/manage-answer/manage-answer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span>{{ _mode }} Answer</span>\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="modal-content">\n  <form [formGroup]="answerForm" class="modal-form" (ngSubmit)="onSubmit(answerForm.value)" >\n    <ion-row>\n      <ion-col offset-1 col-10>\n        <ion-item class="textarea-item">\n          <ion-label floating>Write your answer here</ion-label>\n          <ion-textarea formControlName="answer" rows="5"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col offset-1 col-10>\n        <button ion-button block type="submit" [disabled]="!answerForm.valid" color="answer">\n          <b>Answer</b>\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/manage-answer/manage-answer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_answer_service__["a" /* AnswerService */]])
    ], ManageAnswerPage);
    return ManageAnswerPage;
}());

//# sourceMappingURL=manage-answer.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_service__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageQuestionPage = /** @class */ (function () {
    function ManageQuestionPage(navParams, viewCtrl, questionService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.questionService = questionService;
        this.questionSlug = navParams.get('slug');
        this._detail_slug = Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["l" /* isPresent */])(this.questionSlug) ? this.questionSlug : '';
    }
    ManageQuestionPage.prototype.ionViewWillLoad = function () {
        this.questionForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            question: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    ManageQuestionPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ManageQuestionPage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(this._detail_slug);
        var data = value;
        data.questionSlug = this.questionSlug;
        this.questionService.createQuestion(value)
            .then(function (res) { return _this.dismiss(); });
    };
    ManageQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'manage-question-page',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/manage-question/manage-question.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span>Create Question</span>\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="modal-content">\n  <form [formGroup]="questionForm" class="modal-form" (ngSubmit)="onSubmit(questionForm.value)" >\n    <ion-row>\n      <ion-col offset-1 col-10>\n        <ion-item class="textarea-item">\n          <ion-label floating>Write your question here</ion-label>\n          <ion-textarea formControlName="question" rows="5"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col offset-1 col-10>\n        <button ion-button block type="submit" [disabled]="!questionForm.valid" color="ask">\n          <b>Ask</b>\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/manage-question/manage-question.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_question_service__["a" /* QuestionService */]])
    ], ManageQuestionPage);
    return ManageQuestionPage;
}());

//# sourceMappingURL=manage-question.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, loadingCtrl, userservice) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userservice = userservice;
        this.fb = {
            feedback: ''
        };
        this.anArray = [];
    }
    FeedbackPage.prototype.submit = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userfb(this.fb);
        loader.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Feedback',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/feedback/Feedback.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Key Take Away</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label color="primary"> Key Take Away </ion-label>\n<ion-input type="text" placeholder= "Please enter your key takeaway\'s from this activity" [(ngModel)]="fb.feedback"> </ion-input>\n<ion-footer position>\n    <button ion-button full  round color="secondary" (click)="submit()"> Submit</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/feedback/Feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(128);
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




var Feedback2Page = /** @class */ (function () {
    function Feedback2Page(navCtrl, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.fb1 = {
            feedback: ''
        };
        this.anArray = [];
    }
    Feedback2Page.prototype.submit = function () {
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.userservice.userfb1(this.fb1);
        loader.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Feedback2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback2',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/feedback2/feedback2.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Key Take Away (Activity 2)  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-label color="primary"> Key Take Away </ion-label>\n    <ion-input type="text" placeholder= "Please enter your key takeaway\'s from this activity" [(ngModel)]="fb1.feedback"> </ion-input>\n    <ion-footer position>\n        <button ion-button full  round color="secondary" (click)="submit()"> Submit</button>\n      </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/feedback2/feedback2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Feedback2Page);
    return Feedback2Page;
}());

//# sourceMappingURL=feedback2.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ImghandlerProvider = /** @class */ (function () {
    function ImghandlerProvider(filechooser) {
        this.filechooser = filechooser;
        this.firestore = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
    }
    /*
    
    For uploading an image to firebase storage.
   
    Called from - profilepic.ts
    Inputs - None.
    Outputs - The image url of the stored image.
     
     */
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.picmsgstore = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var uuid = _this.guid();
                                var imageStore = _this.firestore.ref('/picmsgs').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child('picmsg' + uuid);
                                imageStore.put(imgBlob).then(function (res) {
                                    resolve(res.downloadURL);
                                }).catch(function (err) {
                                    reject(err);
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    ImghandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ImghandlerProvider);
    return ImghandlerProvider;
}());

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdduserPage = /** @class */ (function () {
    function AdduserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdduserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdduserPage');
    };
    AdduserPage.prototype.addalum = function () {
        this.navCtrl.push('AddalPage');
    };
    AdduserPage.prototype.addtr = function () {
        this.navCtrl.push('AddtrPage');
    };
    AdduserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adduser',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/adduser/adduser.html"*/'<ion-header>\n    <ion-navbar color="hcolor">\n      <ion-title>\n        Add User\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <div class="Users">\n      <p style="font-size: 130%; font-family: Georgia, \'Times New Roman\', Times, serif">Please select the user you want to add</p>\n    <button ion-button full color="stup" (click)="addalum()"> <ion-icon name="contacts"> </ion-icon> Alumni  </button> \n    <button ion-button full color="stup" (click)="addtr()"> <ion-icon name="person"> </ion-icon> Trainer  </button> \n  </div>\n  </ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/adduser/adduser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AdduserPage);
    return AdduserPage;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminotpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otp_otp__ = __webpack_require__(412);
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
 * Generated class for the AdminotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminotpPage = /** @class */ (function () {
    function AdminotpPage(us, toastController) {
        this.us = us;
        this.toastController = toastController;
        this.otp = {
            randomNo: ''
        };
    }
    AdminotpPage.prototype.savedb = function () {
        this.us.addotp(this.otp);
        var toast = this.toastController.create({
            message: 'The One time password has been updated',
            duration: 2000
        });
        toast.present();
    };
    AdminotpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminotp',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/adminotp/adminotp.html"*/'<ion-header>\n    <ion-navbar color="stup">\n      <ion-title >OTP</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n     <h5 style="text-align:center"> Please enter a password </h5>\n   \n        <ion-input type="password" [(ngModel)]="otp.randomNo" placeholder="Enter password" style="align-self: center">  </ion-input>\n        \n        \n          <button ion-button (click)="savedb()" color="secondary" block > SUBMIT</button>\n       \n  </ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/adminotp/adminotp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_otp_otp__["a" /* OtpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AdminotpPage);
    return AdminotpPage;
}());

//# sourceMappingURL=adminotp.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event1_event1__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event2_event2__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(32);
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
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl, navParams, userservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userservice = userservice;
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanPage');
        this.loaddetails();
    };
    PlanPage.prototype.loaddetails = function () {
        var _this = this;
        this.userservice.behaviourdetails().then(function (res) {
            _this.behaviour1 = res.behaviour1;
            _this.behaviour2 = res.behaviour2;
            _this.behaviour3 = res.behaviour3;
        });
    };
    PlanPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */]);
    };
    PlanPage.prototype.addEvent1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event1_event1__["a" /* Event1Page */]);
    };
    PlanPage.prototype.addEvent2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event2_event2__["a" /* Event2Page */]);
    };
    PlanPage.prototype.submit = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/plan/plan.html"*/'<ion-header>\n    <ion-navbar>\n      <div style=" text-align: center"> \n      <ion-title>Set your targets!</ion-title>\n    </div>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <h2 style="font-size:20px; text-align:center;">Schedule the time for the Behaviourial changes you need to make. </h2>\n<h1>Click on the \'Eye icons\' to plan your progress!</h1>\n  <ion-list>\n     \n      <ion-item>\n          <ion-label color="primary" >Behaviour-1-{{behaviour1}}</ion-label>\n          <button item-right ion-button icon-only tooltip="This is Priority 1" positionV="top" (click)="addEvent()" >\n              <ion-icon name="eye"> </ion-icon>\n            </button>\n      </ion-item>\n  \n      <ion-item>\n          <ion-label color="primary" >Behaviour-2-{{behaviour2}}</ion-label>\n          <button item-right ion-button icon-only tooltip="This is Priority 2" positionV="top" (click)="addEvent1()" >\n              <ion-icon name="eye"> </ion-icon>\n            </button>\n      </ion-item>\n  \n      <ion-item>\n          <ion-label color="primary" >Behaviour-3-{{behaviour3}}</ion-label>\n          <button item-right ion-button icon-only tooltip="This is Priority 3" positionV="top" (click)="addEvent2()" >\n              <ion-icon name="eye"> </ion-icon>\n            </button>\n      </ion-item>\n  \n     \n    </ion-list>\n  \n   \n     \n  \n  </ion-content>\n  <ion-footer>\n      <button ion-button  (click)="submit()"\n      round color="secondary" >Finish</button>\n  </ion-footer>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/plan/plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(127);
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
 * Generated class for the ChatonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatonePage = /** @class */ (function () {
    function ChatonePage(navCtrl, navParams, requestservice, events, alertCtrl, chatservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.chatservice = chatservice;
    }
    ChatonePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyrequests();
        this.requestservice.getmyfriends();
        this.events.subscribe('gotrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
        this.events.subscribe('friends', function () {
            _this.myfriends = [];
            _this.myfriends = _this.requestservice.myfriends;
        });
    };
    ChatonePage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('gotrequests');
        this.events.unsubscribe('friends');
    };
    ChatonePage.prototype.addbuddy = function () {
        this.navCtrl.push('BuddiesPage');
    };
    ChatonePage.prototype.accept = function (item) {
        var _this = this;
        this.requestservice.acceptrequest(item).then(function () {
            var newalert = _this.alertCtrl.create({
                title: 'Friend added',
                subTitle: 'Tap on the friend to chat with him',
                buttons: ['Okay']
            });
            newalert.present();
        });
    };
    ChatonePage.prototype.ignore = function (item) {
        this.requestservice.deleterequest(item).then(function () {
        }).catch(function (err) {
            alert(err);
        });
    };
    ChatonePage.prototype.buddychat = function (buddy) {
        this.chatservice.initializebuddy(buddy);
        this.navCtrl.push('BuddychatPage');
    };
    ChatonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatone',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/chatone/chatone.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Chats</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addbuddy()">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list no-lines>\n  <ion-list-header>\n    Requests\n  </ion-list-header>\n  <ion-item-sliding *ngFor="let item of myrequests">\n    <ion-item>\n    <ion-avatar item-left>\n      <img src="{{item.photoURL}}">\n    </ion-avatar>\n    <h4>{{item.displayName}}</h4>\n    </ion-item>\n    <ion-item-options>\n      <button ion-button color="secondary" (click)="accept(item)">\n        <ion-icon name="checkmark"></ion-icon>\n        ADD\n      </button>\n      <button ion-button color="danger" (click)="ignore(item)">\n        <ion-icon name="trash"></ion-icon>\n        NOPE\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-list-header>\n    Friends\n  </ion-list-header>\n  <ion-item *ngFor="let item of myfriends" (click)="buddychat(item)">\n    <ion-avatar item-left>\n      <img src={{item.photoURL}}>\n    </ion-avatar>\n    <h3>{{item.displayName}}</h3>\n  </ion-item>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/chatone/chatone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]])
    ], ChatonePage);
    return ChatonePage;
}());

//# sourceMappingURL=chatone.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(127);
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
 * Generated class for the ChatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, navParams, requestservice, events, alertCtrl, chatservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.chatservice = chatservice;
    }
    ChatsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyfriend();
        this.requestservice.getmyrequest();
        this.myfriends = [];
        this.events.subscribe('getrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
        this.events.subscribe('friend', function () {
            _this.myfriends = [];
            _this.myfriends = _this.requestservice.myfriends;
        });
    };
    ChatsPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('getrequests');
        this.events.unsubscribe('friend');
    };
    ChatsPage.prototype.addbuddy = function () {
        this.navCtrl.push('BuddiesonePage');
    };
    ChatsPage.prototype.accept = function (item) {
        var _this = this;
        this.requestservice.acceptrequest(item).then(function () {
            var newalert = _this.alertCtrl.create({
                title: 'Friend added',
                subTitle: 'Tap on the friend to chat with him',
                buttons: ['Okay']
            });
            newalert.present();
        });
    };
    ChatsPage.prototype.ignore = function (item) {
        this.requestservice.deleterequest(item).then(function () {
        }).catch(function (err) {
            alert(err);
        });
    };
    ChatsPage.prototype.buddychat = function (buddy) {
        this.chatservice.initializebuddy(buddy);
        this.navCtrl.push('BuddychatPage');
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="hcolor">\n    <ion-title>Chats</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addbuddy()">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list no-lines>\n  <ion-list-header>\n    Requests\n  </ion-list-header>\n  <ion-item-sliding *ngFor="let item of myrequests">\n    <ion-item>\n    <ion-avatar item-left>\n      <img src="{{item.photoURL}}">\n    </ion-avatar>\n    <h4>{{item.displayName}}</h4>\n    </ion-item>\n    <ion-item-options>\n      <button ion-button color="secondary" (click)="accept(item)">\n        <ion-icon name="checkmark"></ion-icon>\n        ADD\n      </button>\n      <button ion-button color="danger" (click)="ignore(item)">\n        <ion-icon name="trash"></ion-icon>\n        NOPE\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-list-header>\n    Friends\n  </ion-list-header>\n  <ion-item *ngFor="let item of myfriends" (click)="buddychat(item)">\n    <ion-avatar item-left>\n      <img src={{item.photoURL}}>\n    </ion-avatar>\n    <h3>{{item.displayName}}</h3>\n  </ion-item>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/chats/chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_requests_requests__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_question_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_answer_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_details_question_details__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_question_manage_question__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LearnDetailsPage = /** @class */ (function () {
    function LearnDetailsPage(navCtrl, navParams, questionService, answerService, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionService = questionService;
        this.answerService = answerService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.questions = [];
        var category_param = navParams.get('category');
        this.category = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["l" /* isPresent */])(category_param) ? category_param : null;
    }
    LearnDetailsPage.prototype.createQuestionModal = function () {
        var _this = this;
        var create_question_modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__manage_question_manage_question__["a" /* ManageQuestionPage */], { slug: this.category.slug });
        create_question_modal.onDidDismiss(function (data) {
            _this.getQuestions();
        });
        create_question_modal.present();
    };
    LearnDetailsPage.prototype.ionViewWillEnter = function () {
        this.getQuestions();
    };
    LearnDetailsPage.prototype.getQuestions = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.questionService.getQuestionsBySlug(this.category.slug)
            .then(function (res) {
            _this.questions = res;
            loading.dismiss();
        });
    };
    LearnDetailsPage.prototype.delete = function (questionId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete question',
            message: 'Are you sure you want to delete this question?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.questionService.deleteQuestion(questionId)
                            .then(function (res) { return _this.getQuestions(); });
                        _this.answerService.getAnswers(questionId)
                            .then(function (answers) {
                            for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
                                var answer = answers_1[_i];
                                _this.answerService.deleteAnswer(answer.id);
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LearnDetailsPage.prototype.addPositiveVote = function (question) {
        var _this = this;
        var data = question;
        data.positiveVotes += 1;
        data.questionSlug = this.category.slug;
        this.questionService.updateQuestion(data)
            .then(function (res) { return _this.getQuestions(); });
    };
    LearnDetailsPage.prototype.addNegativeVote = function (question) {
        var _this = this;
        var data = question;
        data.negativeVotes += 1;
        data.questionSlug = this.category.slug;
        this.questionService.updateQuestion(data)
            .then(function (res) { return _this.getQuestions(); });
    };
    LearnDetailsPage.prototype.countAnswers = function (questionId) {
        return this.answerService.countAnswers(questionId)
            .then(function (res) { return console.log(res); });
    };
    LearnDetailsPage.prototype.openAnswers = function (question) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__question_details_question_details__["a" /* QuestionDetailsPage */], {
            id: question.id
        });
    };
    LearnDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'learn-details-page',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/learn-details/learn-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>Forum</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="category-concept-details" [style.background-color]="category.background">\n    <ion-col no-padding col-12>\n      <h2 class="category-title">Learn all about {{ category.title }}!</h2>\n    </ion-col>\n    <ion-col no-padding col-12>\n      <p class="category-description">\n        {{ category.description }}\n      </p>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="questions.length == 0">\n    <h3 class="questions-call-out">\n      There are no questions at the time\n    </h3>\n  </div>\n\n  <div *ngIf="questions.length > 0">\n    <h3 class="questions-call-out">\n      <span>Find all the Questions and Answers about </span>\n      <ion-badge class="call-out-tag">{{ category.title }}</ion-badge>\n      <span class="call-out-explanation"> from the community</span>\n    </h3>\n\n    <ion-list class="questions-list">\n      <ion-item class="question-item" *ngFor="let question of questions">\n        <ion-row>\n          <ion-col class="votes-col" col-2>\n            <button class="vote-button up-vote" ion-button clear small (click)= "addPositiveVote(question)">\n              <ion-icon name="arrow-up"></ion-icon>\n            </button>\n            <span class="question-score" [ngClass]="{\'good-score\': (question.positiveVotes - question.negativeVotes) > 0, \'no-score\': (question.positiveVotes - question.negativeVotes) == 0, \'bad-score\': (question.positiveVotes - question.negativeVotes) < 0}">{{ question.positiveVotes - question.negativeVotes }}</span>\n            <button class="vote-button down-vote" ion-button clear small (click)= "addNegativeVote(question)">\n              <ion-icon name="arrow-down"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-10>\n            <ion-row class="question-details">\n              <ion-col col-12>\n                <h2 class="question-text" (click)="openAnswers(question)">{{ question.question }}</h2>\n              </ion-col>\n              <ion-col col-4 class="votes-details">\n                <div class="details-wrapper">\n                  <span class="total-votes">{{ question.positiveVotes + question.negativeVotes }}</span>\n                  <span class="details-text">Votes</span>\n                </div>\n              </ion-col>\n              <ion-col col-4 class="answers-details" (click)="openAnswers(question)">\n                <div class="details-wrapper">\n                  <span class="total-answers">{{ question.answers.length }}</span>\n                  <span class="details-text">{{ (question.answers.length > 1 || question.answers.length == 0) ? \'Answers\' : \'Answer\' }}</span>\n                </div>\n              </ion-col>\n              <ion-col col-4 class="actions-details">\n                <button class="delete-button" ion-button small round clear icon-only color="danger" (click)="delete(question.id)">\n                  <ion-icon name="ios-trash-outline"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block (click)="createQuestionModal()" color="ask">\n      <b>Have a Question? Ask!</b>\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/learn-details/learn-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_answer_service__["a" /* AnswerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], LearnDetailsPage);
    return LearnDetailsPage;
}());

//# sourceMappingURL=learn-details.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LearnService = /** @class */ (function () {
    function LearnService(http) {
        this.http = http;
    }
    LearnService.prototype.getFeedCategories = function () {
        return this.http.get("./assets/categories/categories.json")
            .map(function (res) { return res.json(); });
    };
    LearnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LearnService);
    return LearnService;
}());

//# sourceMappingURL=learn.service.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_balance__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__belief_belief__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication_communication__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__concentration_concentration__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__focus_focus__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__etiquette_etiquette__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entrepreneur_entrepreneur__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discipline_discipline__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__creativity_creativity__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confidence_confidence__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__time_time__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__teamwork_teamwork__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stress_stress__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__social_social__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sacrifice_sacrifice__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resilience_resilience__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__problem_problem__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__practice_practice__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__perseverance_perseverance__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__patience_patience__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__motivation_motivation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__meditation_meditation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__learning_learning__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__leadership_leadership__ = __webpack_require__(245);
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
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VideoPage.prototype.balance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__balance_balance__["a" /* BalancePage */]);
    };
    VideoPage.prototype.belief = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__belief_belief__["a" /* BeliefPage */]);
    };
    VideoPage.prototype.communication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__communication_communication__["a" /* CommunicationPage */]);
    };
    VideoPage.prototype.concentration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__concentration_concentration__["a" /* ConcentrationPage */]);
    };
    VideoPage.prototype.confidence = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__confidence_confidence__["a" /* ConfidencePage */]);
    };
    VideoPage.prototype.creativity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__creativity_creativity__["a" /* CreativityPage */]);
    };
    VideoPage.prototype.discipline = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__discipline_discipline__["a" /* DisciplinePage */]);
    };
    VideoPage.prototype.entrepreneur = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__entrepreneur_entrepreneur__["a" /* EntrepreneurPage */]);
    };
    VideoPage.prototype.etiquette = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__etiquette_etiquette__["a" /* EtiquettePage */]);
    };
    VideoPage.prototype.focus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__focus_focus__["a" /* FocusPage */]);
    };
    VideoPage.prototype.leadership = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__leadership_leadership__["a" /* LeadershipPage */]);
    };
    VideoPage.prototype.learning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__learning_learning__["a" /* LearningPage */]);
    };
    VideoPage.prototype.meditation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__meditation_meditation__["a" /* MeditationPage */]);
    };
    VideoPage.prototype.motivation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__motivation_motivation__["a" /* MotivationPage */]);
    };
    VideoPage.prototype.patience = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__patience_patience__["a" /* PatiencePage */]);
    };
    VideoPage.prototype.perseverance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__perseverance_perseverance__["a" /* PerseverancePage */]);
    };
    VideoPage.prototype.practice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__practice_practice__["a" /* PracticePage */]);
    };
    VideoPage.prototype.problem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__problem_problem__["a" /* ProblemPage */]);
    };
    VideoPage.prototype.resilience = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__resilience_resilience__["a" /* ResiliencePage */]);
    };
    VideoPage.prototype.sacrifice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__sacrifice_sacrifice__["a" /* SacrificePage */]);
    };
    VideoPage.prototype.service = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__service_service__["a" /* ServicePage */]);
    };
    VideoPage.prototype.social = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__social_social__["a" /* SocialPage */]);
    };
    VideoPage.prototype.stress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__stress_stress__["a" /* StressPage */]);
    };
    VideoPage.prototype.teamwork = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__teamwork_teamwork__["a" /* TeamworkPage */]);
    };
    VideoPage.prototype.time = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__time_time__["a" /* TimePage */]);
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/video/video.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\nCategories\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item (click)="balance()" detail-push>\n        <ion-label> Balance </ion-label>\n   </ion-item> \n   <ion-item (click)=" belief()" detail-push>\n          <ion-label> Belief </ion-label>\n   </ion-item> \n   <ion-item (click)="communication()" detail-push>\n            <ion-label> Communication </ion-label>    \n   </ion-item> <ion-item (click)=" concentration()" detail-push>\n              <ion-label> Concentration </ion-label>\n   </ion-item> \n   <ion-item (click)="confidence()" detail-push>\n        <ion-label> Confidence </ion-label>\n  </ion-item> <ion-item (click)="creativity()" detail-push>\n       <ion-label> Creativity </ion-label>\n  </ion-item> \n  <ion-item (click)="discipline()" detail-push>\n       <ion-label> Discipline </ion-label>\n  </ion-item> \n  <ion-item (click)="entrepreneur()" detail-push>\n       <ion-label> Entrepreneur </ion-label>\n  </ion-item> \n  <ion-item (click)="etiquette()" detail-push>\n       <ion-label> Etiquette </ion-label>\n  </ion-item> \n  <ion-item (click)="focus()" detail-push>\n       <ion-label> Focus </ion-label>\n  </ion-item> \n  <ion-item (click)="leadership()" detail-push>\n       <ion-label> Leadership </ion-label>\n  </ion-item> \n  <ion-item (click)="learning()" detail-push>\n       <ion-label> Learning </ion-label>\n  </ion-item>  \n  <ion-item (click)="meditation()" detail-push>\n     <ion-label> Meditation </ion-label>\n  </ion-item> \n  <ion-item (click)="motivation()" detail-push>\n      <ion-label> Motivation </ion-label>\n  </ion-item> \n  <ion-item (click)="patience()" detail-push>\n       <ion-label> Patience </ion-label>\n  </ion-item> \n  <ion-item (click)=" perseverance()" detail-push>\n       <ion-label> Perseverance </ion-label>\n  </ion-item> \n  <ion-item (click)="  practice()" detail-push>\n       <ion-label> Practice </ion-label>\n  </ion-item> \n  <ion-item (click)="problem()" detail-push>\n       <ion-label> Problem solving</ion-label>\n  </ion-item> \n  <ion-item (click)="  resilience()" detail-push>\n       <ion-label> Resilience</ion-label>\n  </ion-item> \n  <ion-item (click)="sacrifice()" detail-push>\n       <ion-label> Sacrifice </ion-label>\n  </ion-item> \n  <ion-item (click)="service()" detail-push>\n       <ion-label> Service </ion-label>\n  </ion-item> \n  <ion-item (click)="social()" detail-push>\n      <ion-label> Social living </ion-label>\n  </ion-item> \n  <ion-item (click)="stress()" detail-push>\n       <ion-label> Stress management </ion-label>\n  </ion-item> \n  <ion-item (click)="teamwork()" detail-push>\n       <ion-label> Teamwork </ion-label>\n  </ion-item> \n  <ion-item (click)="time()" detail-push>\n        <ion-label> Time management </ion-label>\n  </ion-item> \n   \n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, view, modal, social, pop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.social = social;
        this.pop = pop;
        this.quote = [
            'Strive not to be a success, but rather to be of value ~ Albert Einstein',
            'The only people who never fail are those who never try ~Ilka Chase',
            'Failure is just another way to learn how to do something right ~ Marian Wright Edelman',
            'I failed my way to success ~ Thomas Edison',
            'Every failure brings with it the seed of an equivalent success ~ Napoleon Hill',
            'Only those who dare to fail greatly can ever achieve greatly ~ John F. Kennedy',
            'It is hard to fail, but it is worse never to have tried to succeed ~ Theodore Roosevelt',
            'Imagination is more important than knowledge ~ Albert Einstein',
            'Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly \n~ Langston Hughes',
            'The future belongs to those who believe in the beauty of their dreams ~ Eleanor Roosevelt',
            'Go confidently in the direction of your dreams. Live the life you have imagined ~ Henry David Thoreau',
            'You cannot depend on your eyes when your imagination is out of focus ~ Mark Twain',
            'Commitment leads to action. Action brings your dream closer ~ Marcia Wieder',
            'Take time to deliberate; but when the time for action arrives, stop thinking and go in ~Andrew Jackson',
            'The art of leadership is saying no, not yes. It is very easy to say yes ~ Tony Blair',
            'I avoid looking forward or backward, and try to keep looking upward ~ Charlotte Bronte',
            'Every artist was first an amateur ~ Ralph Waldo Emerson',
            'We can do anything we want to do if we stick to it long enough ~ Helen Keller',
            'Insist on yourself. Never imitate ~ Ralph Waldo Emerson',
            'Our business in life is not to get ahead of others, but to get ahead of ourselves ~ E. Joseph Cossman',
            'The only journey is the one within ~ Rainer Maria Rilke',
            'The secret of success is to know something nobody else knows ~ Aristotle Onassis',
            'The art of being wise is knowing what to overlook ~ William James',
            'A goal is a dream with a deadline ~ Napoleon Hill',
            'I have not failed. I’ve just found 10,000 ways that won’t work ~ Thomas Edison',
            'Every single person I know who is successful at what they do is successful because they love doing it ~ Joe Penna',
            'Whenever an individual or a business decides that success has been attained, progress stops ~ Thomas J. Watson',
            'The road to success is always under construction ~ Arnold Palmer',
            'Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny ~ Chinese Proverb',
            'Don’t stand by the water and long for fish; go home and weave a net ~ Chinese Proverb',
            'A ship in harbor is safe, but that’s not what ships are for ~ John Shedd',
            'You won’t get anything unless you have the vision to imagine it ~ John Lennon',
            'You may be disappointed if you fail, but you are doomed if you don’t try ~ Beverly Sills',
            'I am not a product of my circumstances. I am a product of my decisions ~ Stephen Covey'
        ];
        this.randomQuoteIndex = this.quote[Math.floor(Math.random() * this.quote.length)];
        this.message = this.randomQuoteIndex;
    }
    ModalPage.prototype.closePop = function () {
        this.view.dismiss();
    };
    ModalPage.prototype.share = function () {
        this.social.share(this.message + '\nOrienting App')
            .then(function () {
            //success
        }).catch(function () {
            //error
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/modal/modal.html"*/'<ion-header>\n\n  <ion-navbar>\n     \n    <ion-title style="margin-top:6%"><i>Quote</i></ion-title>\n    <div style="margin-left:60%; margin-top:-15%">\n            <button ion-button color="light"  size="small" (click)="share()">\n        <ion-icon  name="share-alt"></ion-icon>\n    </button>\n    </div>\n        <div style="margin-left:80%; margin-top:-18%">\n      <button ion-button color="light"  size="small" (click)="closePop()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n    </div>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="page-modal">\n  {{randomQuoteIndex}}\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/pages/password/password.html"*/'<!--\n  Generated template for the PasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <ion-label>\n      Change password\n    </ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n      <ion-label >\n        Reset password\n      </ion-label>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk__ = __webpack_require__(63);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
__WEBPACK_IMPORTED_MODULE_2__sdk__["c" /* LoopBackConfig */].setBaseURL('https://q-a-example-loopback-api.herokuapp.com');
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_imghandler_imghandler__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_status_status__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_password_password__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_learn_service__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_answer_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_learn_details_learn_details__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_question_details_question_details__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_manage_question_manage_question__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_manage_answer_manage_answer__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_question_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sdk_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_chats_chats__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_feedback_feedback__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_feedback2_feedback2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_vision_vision__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_youtube_youtube__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_video_video__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_youtube_video_player_ngx__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_requests_requests__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_chat_chat__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_database__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_chatone_chatone__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_balance_balance__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_belief_belief__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_communication_communication__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_concentration_concentration__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_confidence_confidence__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_creativity_creativity__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_discipline_discipline__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_entrepreneur_entrepreneur__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_etiquette_etiquette__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_focus_focus__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_leadership_leadership__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_learning_learning__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_meditation_meditation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_motivation_motivation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_patience_patience__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_perseverance_perseverance__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_practice_practice__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_problem_problem__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_resilience_resilience__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_sacrifice_sacrifice__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_service_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_stress_stress__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_social_social__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_teamwork_teamwork__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_time_time__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pipes_yt_yt__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_modal_modal__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_social_sharing__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_plan_plan__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_event1_event1__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_event2_event2__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_event_event__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__providers_otp_otp__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_75_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_adduser_adduser__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_adminotp_adminotp__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































































__WEBPACK_IMPORTED_MODULE_75_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__["a" /* config */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_learn_details_learn_details__["a" /* LearnDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_question_details_question_details__["a" /* QuestionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_manage_question_manage_question__["a" /* ManageQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_manage_answer_manage_answer__["a" /* ManageAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_feedback2_feedback2__["a" /* Feedback2Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_chatone_chatone__["a" /* ChatonePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_belief_belief__["a" /* BeliefPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_communication_communication__["a" /* CommunicationPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_concentration_concentration__["a" /* ConcentrationPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_confidence_confidence__["a" /* ConfidencePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_creativity_creativity__["a" /* CreativityPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_discipline_discipline__["a" /* DisciplinePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_entrepreneur_entrepreneur__["a" /* EntrepreneurPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_etiquette_etiquette__["a" /* EtiquettePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_focus_focus__["a" /* FocusPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_leadership_leadership__["a" /* LeadershipPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_learning_learning__["a" /* LearningPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_meditation_meditation__["a" /* MeditationPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_motivation_motivation__["a" /* MotivationPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_patience_patience__["a" /* PatiencePage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_perseverance_perseverance__["a" /* PerseverancePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_practice_practice__["a" /* PracticePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_resilience_resilience__["a" /* ResiliencePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_sacrifice_sacrifice__["a" /* SacrificePage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_social_social__["a" /* SocialPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_stress_stress__["a" /* StressPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_teamwork_teamwork__["a" /* TeamworkPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_time_time__["a" /* TimePage */],
                __WEBPACK_IMPORTED_MODULE_67__pipes_yt_yt__["a" /* YtPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_event1_event1__["a" /* Event1Page */],
                __WEBPACK_IMPORTED_MODULE_72__pages_event2_event2__["a" /* Event2Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_adduser_adduser__["a" /* AdduserPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_adminotp_adminotp__["a" /* AdminotpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addal/addal.module#AddalPageModule', name: 'AddalPage', segment: 'addal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addtr/addtr.module#AddtrPageModule', name: 'AddtrPage', segment: 'addtr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adduser/adduser.module#AdduserPageModule', name: 'AdduserPage', segment: 'adduser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminotp/adminotp.module#AdminotpPageModule', name: 'AdminotpPage', segment: 'adminotp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alumni/alumni.module#AlumniPageModule', name: 'AlumniPage', segment: 'alumni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alumniprofile/alumniprofile.module#AlumniprofilePageModule', name: 'AlumniprofilePage', segment: 'alumniprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balance/balance.module#BalancePageModule', name: 'BalancePage', segment: 'balance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/behaviour/behaviour.module#BehaviourPageModule', name: 'BehaviourPage', segment: 'behaviour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/belief/belief.module#BeliefPageModule', name: 'BeliefPage', segment: 'belief', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buddies/buddies.module#BuddiesPageModule', name: 'BuddiesPage', segment: 'buddies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buddiesone/buddiesone.module#BuddiesonePageModule', name: 'BuddiesonePage', segment: 'buddiesone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buddychat/buddychat.module#BuddychatPageModule', name: 'BuddychatPage', segment: 'buddychat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatone/chatone.module#ChatonePageModule', name: 'ChatonePage', segment: 'chatone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communication/communication.module#CommunicationPageModule', name: 'CommunicationPage', segment: 'communication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/concentration/concentration.module#ConcentrationPageModule', name: 'ConcentrationPage', segment: 'concentration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confidence/confidence.module#ConfidencePageModule', name: 'ConfidencePage', segment: 'confidence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creativity/creativity.module#CreativityPageModule', name: 'CreativityPage', segment: 'creativity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discipline/discipline.module#DisciplinePageModule', name: 'DisciplinePage', segment: 'discipline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrepreneur/entrepreneur.module#EntrepreneurPageModule', name: 'EntrepreneurPage', segment: 'entrepreneur', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/etiquette/etiquette.module#EtiquettePageModule', name: 'EtiquettePage', segment: 'etiquette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event1/event1.module#Event1PageModule', name: 'Event1Page', segment: 'event1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event2/event2.module#Event2PageModule', name: 'Event2Page', segment: 'event2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exposure/exposure.module#ExposurePageModule', name: 'ExposurePage', segment: 'exposure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/focus/focus.module#FocusPageModule', name: 'FocusPage', segment: 'focus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forumone/forumone.module#ForumonePageModule', name: 'ForumonePage', segment: 'forumone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leadership/leadership.module#LeadershipPageModule', name: 'LeadershipPage', segment: 'leadership', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/learning/learning.module#LearningPageModule', name: 'LearningPage', segment: 'learning', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage/manage.module#ManagePageModule', name: 'ManagePage', segment: 'manage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meditation/meditation.module#MeditationPageModule', name: 'MeditationPage', segment: 'meditation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/motivation/motivation.module#MotivationPageModule', name: 'MotivationPage', segment: 'motivation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/obstacles/obstacles.module#ObstaclesPageModule', name: 'ObstaclesPage', segment: 'obstacles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passwordreset/passwordreset.module#PasswordresetPageModule', name: 'PasswordresetPage', segment: 'passwordreset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patience/patience.module#PatiencePageModule', name: 'PatiencePage', segment: 'patience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perseverance/perseverance.module#PerseverancePageModule', name: 'PerseverancePage', segment: 'perseverance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalities/personalities.module#PersonalitiesPageModule', name: 'PersonalitiesPage', segment: 'personalities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan/plan.module#PlanPageModule', name: 'PlanPage', segment: 'plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/practice/practice.module#PracticePageModule', name: 'PracticePage', segment: 'practice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problem/problem.module#ProblemPageModule', name: 'ProblemPage', segment: 'problem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilepic/profilepic.module#ProfilepicPageModule', name: 'ProfilepicPage', segment: 'profilepic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resilience/resilience.module#ResiliencePageModule', name: 'ResiliencePage', segment: 'resilience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sacrifice/sacrifice.module#SacrificePageModule', name: 'SacrificePage', segment: 'sacrifice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/skill/skill.module#SkillPageModule', name: 'SkillPage', segment: 'skill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/status/status.module#StatusPageModule', name: 'StatusPage', segment: 'status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stress/stress.module#StressPageModule', name: 'StressPage', segment: 'stress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teamwork/teamwork.module#TeamworkPageModule', name: 'TeamworkPage', segment: 'teamwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time/time.module#TimePageModule', name: 'TimePage', segment: 'time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainerprofile/trainerprofile.module#TrainerprofilePageModule', name: 'TrainerprofilePage', segment: 'trainerprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainers/trainers.module#TrainersPageModule', name: 'TrainersPage', segment: 'trainers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutgoal/tutgoal.module#TutgoalPageModule', name: 'TutgoalPage', segment: 'tutgoal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutone/tutone.module#TutonePageModule', name: 'TutonePage', segment: 'tutone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutthree/tutthree.module#TutthreePageModule', name: 'TutthreePage', segment: 'tutthree', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tuttwo/tuttwo.module#TuttwoPageModule', name: 'TuttwoPage', segment: 'tuttwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutvis/tutvis.module#TutvisPageModule', name: 'TutvisPage', segment: 'tutvis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vision/vision.module#VisionPageModule', name: 'VisionPage', segment: 'vision', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_5__app_firebaseconfig__["a" /* config */]),
                __WEBPACK_IMPORTED_MODULE_29__sdk_index__["f" /* SDKBrowserModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_learn_details_learn_details__["a" /* LearnDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_question_details_question_details__["a" /* QuestionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_manage_question_manage_question__["a" /* ManageQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_manage_answer_manage_answer__["a" /* ManageAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_feedback2_feedback2__["a" /* Feedback2Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_chatone_chatone__["a" /* ChatonePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_belief_belief__["a" /* BeliefPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_communication_communication__["a" /* CommunicationPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_concentration_concentration__["a" /* ConcentrationPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_confidence_confidence__["a" /* ConfidencePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_creativity_creativity__["a" /* CreativityPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_discipline_discipline__["a" /* DisciplinePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_entrepreneur_entrepreneur__["a" /* EntrepreneurPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_etiquette_etiquette__["a" /* EtiquettePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_focus_focus__["a" /* FocusPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_leadership_leadership__["a" /* LeadershipPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_learning_learning__["a" /* LearningPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_meditation_meditation__["a" /* MeditationPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_motivation_motivation__["a" /* MotivationPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_patience_patience__["a" /* PatiencePage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_perseverance_perseverance__["a" /* PerseverancePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_practice_practice__["a" /* PracticePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_resilience_resilience__["a" /* ResiliencePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_sacrifice_sacrifice__["a" /* SacrificePage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_social_social__["a" /* SocialPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_stress_stress__["a" /* StressPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_teamwork_teamwork__["a" /* TeamworkPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_time_time__["a" /* TimePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_event1_event1__["a" /* Event1Page */],
                __WEBPACK_IMPORTED_MODULE_72__pages_event2_event2__["a" /* Event2Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_adduser_adduser__["a" /* AdduserPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_adminotp_adminotp__["a" /* AdminotpPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_28__services_question_service__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_23__services_answer_service__["a" /* AnswerService */],
                __WEBPACK_IMPORTED_MODULE_22__services_learn_service__["a" /* LearnService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_youtube_youtube__["a" /* youtubeProvider */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_youtube_video_player_ngx__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_38__providers_requests_requests__["a" /* RequestsProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_40_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_74__providers_otp_otp__["a" /* OtpProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_custom_User__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_custom_Question__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_custom_Answer__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_index__ = __webpack_require__(850);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__models_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_14__models_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_index__ = __webpack_require__(851);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15__services_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_15__services_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lb_config__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_16__lb_config__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
* @module SDKModule
*
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/














/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__["a" /* JSONSearchParams */],
                __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_11__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_12__services_custom_Question__["a" /* QuestionApi */],
                __WEBPACK_IMPORTED_MODULE_13__services_custom_Answer__["a" /* AnswerApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__["a" /* StorageBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__["a" /* ErrorHandler */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONSearchParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
var JSONSearchParams = /** @class */ (function () {
    function JSONSearchParams() {
    }
    JSONSearchParams.prototype.setJSON = function (obj) {
        this._usp = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */](this._JSON2URL(obj, false));
    };
    JSONSearchParams.prototype.getURLSearchParams = function () {
        return this._usp;
    };
    JSONSearchParams.prototype._JSON2URL = function (obj, parent) {
        var parts = [];
        for (var key in obj)
            parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    };
    JSONSearchParams.prototype._parseParam = function (key, value, parent) {
        var processedKey = parent ? parent + '[' + key + ']' : key;
        if (value && ((typeof value) === 'object' || Array.isArray(value))) {
            return this._JSON2URL(value, processedKey);
        }
        return processedKey + '=' + value;
    };
    JSONSearchParams = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JSONSearchParams);
    return JSONSearchParams;
}());

//# sourceMappingURL=search.params.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ErrorHandler);
    return ErrorHandler;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.issuedAt = this.load('issuedAt');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign(this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Wether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        if (this.token.rememberMe) {
            this.persist('id', this.token.id);
            this.persist('user', this.token.user);
            this.persist('userId', this.token.userId);
            this.persist('issuedAt', this.token.issuedAt);
            this.persist('created', this.token.created);
            this.persist('ttl', this.token.ttl);
            this.persist('rememberMe', this.token.rememberMe);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.persist = function (prop, value) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    return LoopBackConfig;
}());

//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Question__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Answer__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */




var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */],
            Question: __WEBPACK_IMPORTED_MODULE_2__models_Question__["a" /* Question */],
            Answer: __WEBPACK_IMPORTED_MODULE_3__models_Answer__["a" /* Answer */],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SDKModels);
    return SDKModels;
}());

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(417);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Question__ = __webpack_require__(418);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Answer__ = __webpack_require__(419);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Answer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BaseModels__ = __webpack_require__(415);
/* unused harmony namespace reexport */
/* tslint:disable */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(852);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(853);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(120);
/* unused harmony namespace reexport */
/* tslint:disable */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(422);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Question__ = __webpack_require__(423);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Answer__ = __webpack_require__(424);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Answer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SDKModels__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__(416);
/* unused harmony namespace reexport */
/* tslint:disable */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyCZgOdGj-xW1jXhlrNISXna7CREFYKjo8I",
    authDomain: "orienting-1c59e.firebaseapp.com",
    databaseURL: "https://orienting-1c59e.firebaseio.com",
    projectId: "orienting-1c59e",
    storageBucket: "orienting-1c59e.appspot.com",
    messagingSenderId: "951321548348"
};
//# sourceMappingURL=app.firebaseconfig.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_status_status__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_privacy_privacy__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terms_terms__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authservice, socialSharing, popoverCtrl) {
        this.authservice = authservice;
        this.socialSharing = socialSharing;
        this.popoverCtrl = popoverCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.text = 'Hey! I have been using Orienting to help me achieve my goals. Check it out!';
        this.image = ("/assets/imgs/orientating.png");
        this.url = null;
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth.Auth.Persistence.LOCAL)
            .then(function () {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
        })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.shareTwitter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Either URL or Image
                this.socialSharing.shareViaTwitter(this.text, null, this.image).then(function () {
                    // Success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.shareWhatsApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Text + Image or URL works
                this.socialSharing.shareViaWhatsApp(this.text, null, this.image).then(function () {
                    // Success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.shareEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.socialSharing.shareViaEmail(this.text, null, null).then(function () {
                    //success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.shareFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Image or URL works
                this.socialSharing.shareViaFacebook(this.text, this.image).then(function () {
                    //success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.navToStatus = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_status_status__["a" /* StatusPage */]);
    };
    MyApp.prototype.Password = function () {
        this.nav.push('PasswordresetPage');
    };
    MyApp.prototype.navToPrivacy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_privacy_privacy__["a" /* PrivacyPage */]);
    };
    MyApp.prototype.navToAbout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.navToTerms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_terms_terms__["a" /* TermsPage */]);
    };
    MyApp.prototype.navToHelp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.newacc = function () {
        this.nav.push('SignupPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marceldcouto/orienting/src/app/app.html"*/'<ion-menu [content]="content" side="right">\n        <ion-content padding>\n                <div>\n                 <ion-item> \n                  <ion-label>\n                  <b> Account</b>\n                  </ion-label>\n                </ion-item>\n                \n                <ion-list>\n                  <ion-item>\n                      <ion-label>Turn notifications on</ion-label>\n                      <ion-toggle></ion-toggle>\n                   </ion-item>\n                  <ion-item>\n                    <ion-label menuClose (click)="navToStatus() "> Activity status</ion-label>\n                    </ion-item>\n                </ion-list>\n                </div>\n                \n                <div>\n                <ion-item>\n                  <ion-label>\n                      <b>Privacy</b> \n                  </ion-label>\n                  </ion-item>\n                  <ion-list>\n                    <ion-item>\n                  <ion-label menuClose (click)="Password()" >Password</ion-label>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label menuClose (click)="navToPrivacy()">\n                      Privacy policy\n                    </ion-label>\n                    </ion-item>\n                    \n                </ion-list>\n                </div>\n                \n                <div>\n                \n                  <ion-item>\n                      <ion-label><b>About</b></ion-label>\n                  </ion-item>\n                <ion-list>\n                  <ion-item>\n                  <ion-label menuClose (click)="navToAbout()">\n                   About us      \n                  </ion-label>  \n                  </ion-item>\n                  <ion-item>\n                    <ion-label menuClose (click)="navToTerms()">\n                  Terms of use\n                  </ion-label>\n                  </ion-item>\n                  </ion-list>\n                </div>\n                \n                  <div>  \n                    <ion-item>\n                    <ion-label>\n                    <b> Share on social accounts </b>  \n                  </ion-label>\n                    </ion-item>\n                  <ion-list>\n\n                  <ion-item padding>\n                    <ion-icon name="logo-facebook" (click)="shareFacebook()"> Share on Facebook</ion-icon>\n                   \n                  </ion-item>\n                 \n                    <ion-item padding>\n                          <ion-icon name ="logo-whatsapp" (click)="shareWhatsApp()">  Share on WhatsApp</ion-icon>\n                         \n                    </ion-item>\n\n                        <ion-item padding>\n                          <ion-icon name ="logo-twitter" (click)="shareTwitter()">  Share on Twitter</ion-icon>\n                         \n                        \n                        </ion-item> \n                    </ion-list>\n                  </div>\n                    \n                  <div>\n                      <ion-item>\n                          <ion-label>\n                          <b> Support </b>  \n                        </ion-label>\n                          </ion-item>\n                          <ion-list>\n                            <ion-item>\n                            <ion-label menuClose (click)="navToHelp()">  \n                              Help\n                            </ion-label>\n                            </ion-item>\n                          </ion-list>\n                  </div>\n                \n                  <div>\n                      <ion-item>\n                          <ion-label>\n                          <b> Logins </b>  \n                        </ion-label>\n                          </ion-item>\n                          <ion-list>\n                            <ion-item>\n                            <ion-label (click)="newacc()">  \n                              Add another account\n                              \n                            </ion-label>\n                            </ion-item>\n                          </ion-list>\n                  </div>\n                  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content ></ion-nav>\n'/*ion-inline-end:"/Users/marceldcouto/orienting/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return youtubeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var youtubeProvider = /** @class */ (function () {
    function youtubeProvider(http) {
        this.http = http;
        this.apiKey = 'AIzaSyA-P_S1FYZkIrOkAzGEp99yk1pHx6B4d88';
    }
    youtubeProvider.prototype.getPlaylistsForChannel = function (channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    youtubeProvider.prototype.getListVideos = function (listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    youtubeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], youtubeProvider);
    return youtubeProvider;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
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
 * Generated class for the YtPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YtPipe = /** @class */ (function () {
    function YtPipe(dom) {
        this.dom = dom;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    YtPipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    YtPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'yt',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YtPipe);
    return YtPipe;
}());

//# sourceMappingURL=yt.js.map

/***/ })

},[493]);
//# sourceMappingURL=main.js.map