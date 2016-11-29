import { NgModule } from '@angular/core';
import { ColorDemo } from './color.demo';
import { ColorDirective } from '../../component/colors/color';
export var ColorModule = (function () {
    function ColorModule() {
    }
    ColorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [],
                    declarations: [ColorDemo, ColorDirective],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    ColorModule.ctorParameters = [];
    return ColorModule;
}());
//# sourceMappingURL=color.module.js.map