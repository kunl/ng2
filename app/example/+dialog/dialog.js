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
var DialogDirective = (function () {
    function DialogDirective() {
        /**
         * show 是否显示
         * openChange 改变外部的 open
         * next 确认(true)，或取消(false)的 callback
         */
        this.show = false;
        this.openChange = new core_1.EventEmitter();
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
    return DialogDirective;
}());
__decorate([
    core_1.Input('open'),
    __metadata("design:type", Boolean)
], DialogDirective.prototype, "show", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DialogDirective.prototype, "openChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DialogDirective.prototype, "next", void 0);
DialogDirective = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dialog',
        template: "\n    <section *ngIf=\"show\">\n    <div class=\"modal-backdrop in\"></div>\n    <div class=\"modal in\" style=\"display: block;\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" (click)=\"_cancel()\">\n                    <span aria-hidden=\"true\">\u00D7</span>\n                    </button>\n                    <h4 class=\"modal-title\">\n                    <ng-content select=\"[title]\"></ng-content>\n                    </h4>\n                </div>\n                <div class=\"modal-body\">\n                    <ng-content select=\"[body]\"></ng-content>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\" (click)=\"_cancel()\">Close</button>\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"_next()\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    </section>\n    "
    }),
    __metadata("design:paramtypes", [])
], DialogDirective);
exports.DialogDirective = DialogDirective;
//# sourceMappingURL=dialog.js.map