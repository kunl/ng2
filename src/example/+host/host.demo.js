import { Component, Injectable, Input } from '@angular/core';
export var HostService = (function () {
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
    HostService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HostService.ctorParameters = [];
    return HostService;
}());
export var com1 = (function () {
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
    com1.decorators = [
        { type: Component, args: [{
                    selector: 'com1',
                    template: "\n        {{number}}, {{name}}\n    "
                },] },
    ];
    /** @nocollapse */
    com1.ctorParameters = [
        { type: HostService, },
    ];
    com1.propDecorators = {
        'name': [{ type: Input },],
    };
    return com1;
}());
export var HostDemo = (function () {
    function HostDemo(data) {
        this.data = data;
        this.currname = ' host 的 name';
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
    HostDemo.decorators = [
        { type: Component, args: [{
                    selector: 'host',
                    template: "\n        <com1 [name]='currname'></com1> <br>\n        \u5F53\u524D\u6570\u5B57{{number}}\n        <button class=\"btn btn-sm\" (click)='changeNum()'>\u53D8\u4E00\u4E0B</button>\n        <br>\n        <p>\u4E0D\u540C\u7EC4\u4EF6\u4E4B\u95F4\u901A\u8FC7 service \u8FDB\u884C\u6570\u636E\u4EA4\u4E92</p>\n        <a href=\"https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts\" target=\"_blank\">https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts</a>\n  \n    "
                },] },
    ];
    /** @nocollapse */
    HostDemo.ctorParameters = [
        { type: HostService, },
    ];
    return HostDemo;
}());
//# sourceMappingURL=host.demo.js.map