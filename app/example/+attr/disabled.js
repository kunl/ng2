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
var CusonmComponent = (function () {
    function CusonmComponent() {
        this._isDisabled = false;
        this._isHidden = false;
        this._value = '1111';
    }
    Object.defineProperty(CusonmComponent.prototype, "isHidden", {
        get: function () {
            return this.custom.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CusonmComponent.prototype, "isDisabled", {
        get: function () {
            return this.custom.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CusonmComponent.prototype, "value", {
        get: function () {
            return this.custom.val;
        },
        enumerable: true,
        configurable: true
    });
    CusonmComponent.prototype.ngAfterContentInit = function () {
        console.log(this.custom);
    };
    __decorate([
        core_1.HostBinding('hidden'), 
        __metadata('design:type', Object)
    ], CusonmComponent.prototype, "isHidden", null);
    __decorate([
        core_1.HostBinding('disabled'), 
        __metadata('design:type', Object)
    ], CusonmComponent.prototype, "isDisabled", null);
    __decorate([
        core_1.HostBinding('value'), 
        __metadata('design:type', Object)
    ], CusonmComponent.prototype, "value", null);
    CusonmComponent = __decorate([
        core_1.Directive({
            selector: '[custom]',
            inputs: ['custom']
        }), 
        __metadata('design:paramtypes', [])
    ], CusonmComponent);
    return CusonmComponent;
}());
exports.CusonmComponent = CusonmComponent;
var DisabledComponent = (function () {
    function DisabledComponent() {
        this.isDisabled = true;
        this.const = 0;
        this.myCustom = {
            isDisabled: true,
            isHidden: false,
            val: '改变值了'
        };
    }
    DisabledComponent.prototype.changeAttrs = function () {
        this.isDisabled = this.isDisabled ? false : true;
        // this.myCustom.isDisabled = !this.myCustom.isDisabled
        // this.myCustom.isHidden = !this.myCustom.isHidden
        this.myCustom = {
            isDisabled: !this.myCustom.isDisabled,
            isHidden: !this.myCustom.isHidden,
            val: '-----------改变值了' + this.const
        };
        this.const++;
        // console.log(this.myCustom)
    };
    DisabledComponent.prototype.ngOnInit = function () { };
    DisabledComponent.prototype.getCustom = function () {
        return {
            isDisabled: true,
            isHidden: false,
            val: '方法返回 对象 改变值了' + this.const
        };
    };
    DisabledComponent = __decorate([
        core_1.Component({
            selector: 'disabled',
            template: "\n        <div class=\"form-group\">disabled \u5C5E\u6027\n            <input type=\"text\" [disabled]='isDisabled' class=\"form-control\" value=\"\u9ED8\u8BA4\u7684value\">\n            <input type=\"checkbox\" [disabled]='isDisabled' class=\"form-control\" checked>\n        </div>\n        \n        <div>readonly \u5C5E\u6027\n            <input type=\"text\" [readonly]='isDisabled' class=\"form-control\" value=\"\u9ED8\u8BA4\u7684value\">\n        </div>\n        \n        <hr>\n         <p>\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u63A7\u5236 \u6307\u4EE4\u7684 \u591A\u4E2A\u5C5E\u6027</p>\n        <input type='text' [custom]='myCustom' value=\"11123\">\n        \n        <input type='text' [custom]='getCustom()' value=\"11123\">\n        <br>\n        <button class=\"btn btn-sm\" (click)=\"changeAttrs()\">\u5207\u6362</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DisabledComponent);
    return DisabledComponent;
}());
exports.DisabledComponent = DisabledComponent;
//# sourceMappingURL=disabled.js.map