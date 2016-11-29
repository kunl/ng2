import { Component, Input, Output, EventEmitter } from '@angular/core';
export var DialogDirective = (function () {
    function DialogDirective() {
        /**
         * show 是否显示
         * openChange 改变外部的 open
         * next 确认(true)，或取消(false)的 callback
         */
        this.show = false;
        this.openChange = new EventEmitter();
        this.n = 0;
    }
    DialogDirective.prototype.ngOnInit = function () {
        console.log(this);
    };
    DialogDirective.prototype.close = function () {
        this.show = false;
        this.openChange.next(false);
    };
    DialogDirective.prototype._next = function () {
        this.close();
        this.next(true);
    };
    DialogDirective.prototype._cancel = function () {
        this.close();
        this.next(false);
    };
    DialogDirective.decorators = [
        { type: Component, args: [{
                    selector: 'my-dialog',
                    template: "\n    <section *ngIf=\"show\">\n    <div class=\"modal-backdrop in\"></div>\n    <div class=\"modal in\" style=\"display: block;\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" (click)=\"_cancel()\">\n                    <span aria-hidden=\"true\">\u00D7</span>\n                    </button>\n                    <h4 class=\"modal-title\">\n                    <ng-content select=\"[title]\"></ng-content>\n                    </h4>\n                </div>\n                <div class=\"modal-body\">\n                    <ng-content select=\"[body]\"></ng-content>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\" (click)=\"_cancel()\">Close</button>\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"_next()\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    </section>\n    "
                },] },
    ];
    /** @nocollapse */
    DialogDirective.ctorParameters = [];
    DialogDirective.propDecorators = {
        'show': [{ type: Input, args: ['open',] },],
        'openChange': [{ type: Output },],
        'next': [{ type: Input },],
    };
    return DialogDirective;
}());
//# sourceMappingURL=dialog.js.map