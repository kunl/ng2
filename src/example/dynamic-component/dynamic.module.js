import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child';
import { DynamicComponentDemo } from './parent';
export var DynamicModule = (function () {
    function DynamicModule() {
    }
    DynamicModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, FormsModule],
                    exports: [],
                    declarations: [DynamicComponentDemo, ChildComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    DynamicModule.ctorParameters = [];
    return DynamicModule;
}());
//# sourceMappingURL=dynamic.module.js.map