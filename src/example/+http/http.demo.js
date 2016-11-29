import { Component } from '@angular/core';
import { HttpService } from './http.service';
export var HttpDemo = (function () {
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
    HttpDemo.decorators = [
        { type: Component, args: [{
                    selector: 'http',
                    providers: [HttpService],
                    templateUrl: 'http.demo.html',
                    styleUrls: ['http.demo.css']
                },] },
    ];
    /** @nocollapse */
    HttpDemo.ctorParameters = [
        { type: HttpService, },
    ];
    return HttpDemo;
}());
//# sourceMappingURL=http.demo.js.map