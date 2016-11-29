import { Directive, Component, HostBinding } from '@angular/core';
export var CusonmComponent = (function () {
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
    CusonmComponent.decorators = [
        { type: Directive, args: [{
                    selector: '[custom]',
                    inputs: ['custom']
                },] },
    ];
    /** @nocollapse */
    CusonmComponent.ctorParameters = [];
    CusonmComponent.propDecorators = {
        'isHidden': [{ type: HostBinding, args: ['hidden',] },],
        'isDisabled': [{ type: HostBinding, args: ['disabled',] },],
        'value': [{ type: HostBinding, args: ['value',] },],
    };
    return CusonmComponent;
}());
export var DisabledComponent = (function () {
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
    DisabledComponent.decorators = [
        { type: Component, args: [{
                    selector: 'disabled',
                    template: "\n        <div class=\"form-group\">disabled \u5C5E\u6027\n            <input type=\"text\" [disabled]='isDisabled' class=\"form-control\" value=\"\u9ED8\u8BA4\u7684value\">\n            <input type=\"checkbox\" [disabled]='isDisabled' class=\"form-control\" checked>\n        </div>\n        \n        <div>readonly \u5C5E\u6027\n            <input type=\"text\" [readonly]='isDisabled' class=\"form-control\" value=\"\u9ED8\u8BA4\u7684value\">\n        </div>\n        \n        <hr>\n         <p>\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u63A7\u5236 \u6307\u4EE4\u7684 \u591A\u4E2A\u5C5E\u6027</p>\n        <input type='text' [custom]='myCustom' value=\"11123\">\n        \n        <input type='text' [custom]='getCustom()' value=\"11123\">\n        <br>\n        <button class=\"btn btn-sm\" (click)=\"changeAttrs()\">\u5207\u6362</button>\n    "
                },] },
    ];
    /** @nocollapse */
    DisabledComponent.ctorParameters = [];
    return DisabledComponent;
}());
//# sourceMappingURL=disabled.js.map