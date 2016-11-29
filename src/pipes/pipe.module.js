import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';
export var PipeModule = (function () {
    function PipeModule() {
    }
    PipeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MomentPipe
                    ],
                    exports: [
                        MomentPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    PipeModule.ctorParameters = [];
    return PipeModule;
}());
//# sourceMappingURL=pipe.module.js.map