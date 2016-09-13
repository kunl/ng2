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
var LabelItem = (function () {
    function LabelItem() {
    }
    return LabelItem;
}());
LabelItem = __decorate([
    core_1.Directive({ selector: 'label' }),
    __metadata("design:paramtypes", [])
], LabelItem);
exports.LabelItem = LabelItem;
var ViewChildComponentDemo = (function () {
    function ViewChildComponentDemo(_el, _render) {
        this._el = _el;
        this._render = _render;
        var dom = this._el.nativeElement;
        var inputs = dom.querySelectorAll('input');
        console.log(dom); // 可以获取到当前的 dom element
        console.log(inputs); // 获取不到 input， 只能在 OnInit 之后获取到
    }
    ViewChildComponentDemo.prototype.ngOnInit = function () {
        // constructor 之后并只能获取到 eleremt ref
        // component 初始化之后 
        this.username = this._el.nativeElement.querySelector('#input-username');
        // 添加 class 
        this._render.setElementClass(this.username, 'focused', true);
        // 设置为 disabled
        this._render.setElementProperty(this.username, 'disabled', 'true');
        console.log(this.username);
    };
    ViewChildComponentDemo.prototype.ngAfterViewInit = function () {
        console.log(this._render);
        // view 初始化之后， this.emailRef 才有值
        var email = this.emailRef.nativeElement;
        this._render.setElementClass(email, 'focused', true);
        // 设置默认值
        this._render.setElementProperty(email, 'value', 'test@xxx.com');
    };
    return ViewChildComponentDemo;
}());
__decorate([
    core_1.ViewChild('myemail'),
    __metadata("design:type", core_1.ElementRef)
], ViewChildComponentDemo.prototype, "emailRef", void 0);
ViewChildComponentDemo = __decorate([
    core_1.Component({
        selector: 'view-child',
        styles: ['.focused{border-color: red}'],
        template: "\n        <div class=\"form-group row\">\n            <label for=\"input-email\" class=\"col-sm-1 form-control-label\">\u90AE\u7BB1</label>\n            <div class=\"col-sm-5\">\n            <input #myemail type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"Email\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"input-username\" class=\"col-sm-1 form-control-label\">\u7528\u6237\u540D</label>\n            <div class=\"col-sm-5\">\n            <input type=\"text\" class=\"form-control\" id=\"input-username\" placeholder=\"Password\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-5\">\n                <div class=\"card\">{{it}}</div>\n            </div>\n        </div>\n    \n    ",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ViewChildComponentDemo);
exports.ViewChildComponentDemo = ViewChildComponentDemo;
//# sourceMappingURL=viewchild.demo.js.map