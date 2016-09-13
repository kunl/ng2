"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.url = 'http://5737ef8cc0a1be11000e6895.mockapi.io/';
        this.users = this.url + 'users';
    }
    HttpService.prototype.getUsers = function () {
        return this.http.get(this.users).map(function (res) { return res.json(); });
    };
    HttpService.prototype.getUser = function (id) {
        return this.http.get(this.users + ("/" + id)).map(function (res) { return res.json(); });
    };
    HttpService.prototype.del = function (id) {
        return this.http.delete(this.users + ("/" + id)).map(function (res) { return res.json(); });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map