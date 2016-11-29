import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.url = 'http://5737ef8cc0a1be11000e6895.mockapi.io/';
        this.users = this.url + 'users';
    }
    HttpService.prototype.getUsers = function () {
        return this.http.get(this.users).map(function (res) { return res.json(); });
    };
    HttpService.prototype.getUserPromise = function () {
        return this.http.get(this.users).toPromise().then(function (response) { return response.json().data; });
    };
    HttpService.prototype.getUser = function (id) {
        return this.http.get(this.users + ("/" + id)).map(function (res) { return res.json(); });
    };
    HttpService.prototype.del = function (id) {
        return this.http.delete(this.users + ("/" + id)).map(function (res) { return res.json(); });
    };
    HttpService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpService.ctorParameters = [
        { type: Http, },
    ];
    return HttpService;
}());
//# sourceMappingURL=http.service.js.map