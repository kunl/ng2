import { Component, Input, Output, EventEmitter } from '@angular/core';
export var ChildComponent = (function () {
    function ChildComponent() {
        this.data = {
            username: '用户名',
            telphone: 13999999999
        };
        // @Input() ref: ComponentRef;
        this.finally = new EventEmitter();
    }
    ChildComponent.prototype.cancel = function () {
        // this.ref.destroy();
        console.log("cancelaaa");
    };
    ChildComponent.prototype.destory = function () {
        this.finally.emit(this.data);
    };
    ChildComponent.decorators = [
        { type: Component, args: [{
                    selector: 'child',
                    template: "\n        <div class=\"modal-backdrop in\"></div>\n        <div class=\"modal fade in\" style=\"display: block\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cancel()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\">Modal title</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>One fine body {{name}};</p>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.username\" placeholder=\"\u7528\u6237\u540D\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"telphone\" class=\"form-control\" [(ngModel)]=\"data.telphone\"  placeholder=\"\u624B\u673A\u53F7\">\n                    </div>\n                    <div>{{data | json}}</div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"cancel()\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"destory()\">Save changes</button>\n                </div>\n                </div>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    ChildComponent.ctorParameters = [];
    ChildComponent.propDecorators = {
        'name': [{ type: Input },],
        'finally': [{ type: Output },],
    };
    return ChildComponent;
}());
//# sourceMappingURL=child.js.map