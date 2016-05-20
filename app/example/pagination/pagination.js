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
var PaginationDirective = (function () {
    function PaginationDirective() {
        this.pageChange = new core_1.EventEmitter();
    }
    PaginationDirective.prototype.ngOnInit = function () {
        this.pages = [1, 2, 3];
    };
    PaginationDirective.prototype.go = function (page) {
        this._current = page;
        this.pageChange.next(page);
        console.log(this.hasNext);
        console.log(this._current);
    };
    /** 当前页 添加 class */
    PaginationDirective.prototype.isCurrent = function (page) {
        return page == this._current;
    };
    Object.defineProperty(PaginationDirective.prototype, "hasPrev", {
        /**是否有上一页， 下一页 */
        get: function () {
            return this._current > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationDirective.prototype, "hasNext", {
        get: function () {
            return this._current < this.total;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('page'), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "_current", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "total", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "rows", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "pageChange", void 0);
    PaginationDirective = __decorate([
        core_1.Component({
            moduleId: module.id,
            styles: ["\n        .current-page {color: #00dcc1}\n        .pagination .page{\n            display: inline-block;\n            padding: 2px 12px;\n            margin-right: -1px;\n            border: 1px solid #00dcc1;\n            background: #fff;\n            border-radius: 2px\uFF1B\n        }\n        button:focus{outline: none}\n        .pagination a {cursor: pointer;}\n        \n    "],
            selector: 'pagination',
            templateUrl: 'pagination.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationDirective);
    return PaginationDirective;
}());
exports.PaginationDirective = PaginationDirective;
//# sourceMappingURL=pagination.js.map