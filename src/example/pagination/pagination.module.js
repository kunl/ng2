import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PaginationDirective } from './pagination';
import { PaginationDemo } from './pagination.demo';
export var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, FormsModule],
                    exports: [],
                    declarations: [PaginationDemo, PaginationDirective],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = [];
    return PaginationModule;
}());
//# sourceMappingURL=pagination.module.js.map