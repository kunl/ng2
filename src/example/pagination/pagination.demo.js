import { Component } from '@angular/core';
export var PaginationDemo = (function () {
    function PaginationDemo() {
        this.mypage = 3;
        this.mytotal = 35;
        this.mysize = 10;
    }
    PaginationDemo.prototype.ngOnInit = function () {
    };
    PaginationDemo.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    PaginationDemo.decorators = [
        { type: Component, args: [{
                    selector: 'pagination-demo',
                    template: "\n        <pagination [(page)]=\"mypage\" [total]=\"mytotal\" [pagesize]=\"mysize\"></pagination>\n    "
                },] },
    ];
    /** @nocollapse */
    PaginationDemo.ctorParameters = [];
    return PaginationDemo;
}());
//# sourceMappingURL=pagination.demo.js.map