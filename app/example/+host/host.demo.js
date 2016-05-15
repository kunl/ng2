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
var core_1 = require('@angular/core');
var HostService = (function () {
    function HostService() {
        this.num = 0;
    }
    HostService.prototype.getNum = function () {
        return this.num;
    };
    HostService.prototype.setNum = function (n) {
        console.log(n);
        this.num += n;
    };
    HostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HostService);
    return HostService;
}());
exports.HostService = HostService;
var com1 = (function () {
    function com1(hs) {
        this.hs = hs;
    }
    Object.defineProperty(com1.prototype, "number", {
        get: function () {
            return this.hs.getNum();
        },
        enumerable: true,
        configurable: true
    });
    com1 = __decorate([
        core_1.Component({
            selector: 'com1',
            template: "{{number}}\n  \n    "
        }), 
        __metadata('design:paramtypes', [HostService])
    ], com1);
    return com1;
}());
exports.com1 = com1;
var HostDemo = (function () {
    function HostDemo(data) {
        this.data = data;
    }
    HostDemo.prototype.ngOnInit = function () { };
    Object.defineProperty(HostDemo.prototype, "number", {
        get: function () {
            // getter 从 service 获取 num
            return this.data.getNum();
        },
        enumerable: true,
        configurable: true
    });
    HostDemo.prototype.changeNum = function () {
        // 调用 service 设置num
        this.data.setNum(1);
    };
    HostDemo = __decorate([
        core_1.Component({
            selector: 'host',
            directives: [com1],
            providers: [HostService],
            template: "\n        <com1></com1> <br>\n        \u5F53\u524D\u6570\u5B57{{number}}\n        <button class=\"btn btn-sm\" (click)='changeNum()'>\u53D8\u4E00\u4E0B</button>\n        <br>\n        <p>\u4E0D\u540C\u7EC4\u4EF6\u4E4B\u95F4\u901A\u8FC7 service \u8FDB\u884C\u6570\u636E\u4EA4\u4E92</p>\n        <a href=\"https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts\" target=\"_blank\">https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts</a>\n  \n    "
        }), 
        __metadata('design:paramtypes', [HostService])
    ], HostDemo);
    return HostDemo;
}());
exports.HostDemo = HostDemo;
//# sourceMappingURL=host.demo.js.map