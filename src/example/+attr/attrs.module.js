import { NgModule } from '@angular/core';
import { AttrsDemoComponent } from './attrs.demo';
import { CusonmComponent, DisabledComponent } from './disabled';
export var AttrsDemoModule = (function () {
    function AttrsDemoModule() {
    }
    AttrsDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [],
                    declarations: [AttrsDemoComponent, CusonmComponent, DisabledComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    AttrsDemoModule.ctorParameters = [];
    return AttrsDemoModule;
}());
//# sourceMappingURL=attrs.module.js.map