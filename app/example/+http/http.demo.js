"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('./http.service');
var HttpDemo = (function () {
    function HttpDemo(http_service) {
        var _this = this;
        this.http_service = http_service;
        this.users = [];
        this.http_service.getUsers().subscribe(function (data) { return _this.users = data; });
    }
    HttpDemo.prototype.ngOnInit = function () {
    };
    HttpDemo.prototype.del = function (it) {
        var _this = this;
        this.http_service.del(it.id).subscribe(function (data) { _this.users = _this.users.filter(function (item) { return item != it; }); }, function (err) { return alert(err); });
    };
    HttpDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'http',
            providers: [http_service_1.HttpService],
            templateUrl: 'http.demo.html',
            styleUrls: ['http.demo.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], HttpDemo);
    return HttpDemo;
}());
exports.HttpDemo = HttpDemo;
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.say = function (name) {
        return 'name is ' + name;
    };
    B.prototype.wtf = function () {
        this.say('waht the fuck...' + this.getDate());
    };
    return B;
}(Date));
var b = new B;
b.wtf();
//# sourceMappingURL=http.demo.js.map