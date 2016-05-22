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
        /**页码长度 */
        this.pagesLength = 7;
        this.pagesizeArray = [10, 50, 100];
    }
    PaginationDirective.prototype.ngOnInit = function () {
        this.getPagesArray();
    };
    Object.defineProperty(PaginationDirective.prototype, "pageCount", {
        /** 页码数量 */
        get: function () {
            return Math.ceil(+this.total / +this.pagesize);
        },
        enumerable: true,
        configurable: true
    });
    PaginationDirective.prototype.go = function (page) {
        console.log('点击了 ', page);
        if (isNaN(page)) {
            return;
        }
        ;
        this.current = page;
        this.pageChange.next(page);
        this.getPagesArray();
    };
    /** 当前页 添加 class */
    PaginationDirective.prototype.isCurrent = function (page) {
        return page == this.current;
    };
    /**获取页码列表 */
    PaginationDirective.prototype.getPagesArray = function () {
        this.pages = [];
        var _a = this.start_end(), start = _a.start, end = _a.end;
        var num = +end - start + 1;
        // if(start != 1){
        //     this.pages.unshift(1);
        // }
        console.log('end', end, 'start', start);
        if (end < this.total) {
            if (end <= +this.total - 1) {
                (_b = this.pages).push.apply(_b, ['...', this.total]);
                num -= 2;
            }
            else {
                this.pages.push(this.total);
                num--;
            }
        }
        while (num--) {
            this.pages.unshift(start + num);
        }
        var _b;
    };
    /**页码 开始，结束 */
    PaginationDirective.prototype.start_end = function () {
        var start = 1;
        var end = this.total;
        start = Math.max(+this.current - Math.floor(this.pagesLength / 2), 1);
        // if(this.current > Math.floor( this.pagesLength /2 )){
        //     start = 1
        // }else{
        //     start = +this.current;
        // }
        end = start + this.pagesLength - 1;
        /**
         * 如果 total=30， current=29，pagesLength=7
         * 根据 end = start + this.pagesLength - 1;
         * 则end=[29 - (7+1)/2 ] + 7 -1 = 31,大于total
         */
        if (end > this.total) {
            end = this.total;
            start = Math.max(+this.total - this.pagesLength + 1, 1);
        }
        return { start: start, end: end };
    };
    Object.defineProperty(PaginationDirective.prototype, "hasPrev", {
        /**是否有上一页， 下一页 */
        get: function () {
            return this.current > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationDirective.prototype, "hasNext", {
        get: function () {
            return this.current < this.total;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('page'), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "current", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "total", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "pagesize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationDirective.prototype, "pageChange", void 0);
    PaginationDirective = __decorate([
        core_1.Component({
            moduleId: module.id,
            styles: ["\n        // .current-page {color: #00dcc1}\n        .current-page {color: red}\n        .pagination .page{\n            display: inline-block;\n            padding: 2px 12px;\n            margin-right: -1px;\n            border: 1px solid #00dcc1;\n            background: #fff;\n            border-radius: 2px\uFF1B\n        }\n        button:focus{outline: none}\n        .pagination a {cursor: pointer;}\n        \n    "],
            selector: 'pagination',
            templateUrl: 'pagination.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationDirective);
    return PaginationDirective;
}());
exports.PaginationDirective = PaginationDirective;
//# sourceMappingURL=pagination.js.map