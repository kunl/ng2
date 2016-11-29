import { Directive, Component, ViewChild, ElementRef, Renderer } from '@angular/core';
export var LabelItem = (function () {
    function LabelItem() {
    }
    LabelItem.decorators = [
        { type: Directive, args: [{ selector: 'label' },] },
    ];
    /** @nocollapse */
    LabelItem.ctorParameters = [];
    return LabelItem;
}());
export var ViewChildComponentDemo = (function () {
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
    ViewChildComponentDemo.decorators = [
        { type: Component, args: [{
                    selector: 'view-child',
                    styles: ['.focused{border-color: red}'],
                    template: "\n        <div class=\"form-group row\">\n            <label for=\"input-email\" class=\"col-sm-1 form-control-label\">\u90AE\u7BB1</label>\n            <div class=\"col-sm-5\">\n            <input #myemail type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"Email\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"input-username\" class=\"col-sm-1 form-control-label\">\u7528\u6237\u540D</label>\n            <div class=\"col-sm-5\">\n            <input type=\"text\" class=\"form-control\" id=\"input-username\" placeholder=\"Password\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-5\">\n                <div class=\"card\">{{it}}</div>\n            </div>\n        </div>\n    \n    ",
                },] },
    ];
    /** @nocollapse */
    ViewChildComponentDemo.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    ViewChildComponentDemo.propDecorators = {
        'emailRef': [{ type: ViewChild, args: ['myemail',] },],
    };
    return ViewChildComponentDemo;
}());
//# sourceMappingURL=viewchild.demo.js.map