import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogDirective } from './dialog';
import { DialogDemo } from './dialog.demo';
export var DialogModule = (function () {
    function DialogModule() {
    }
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule],
                    // exports: [ DialogDemo ],
                    declarations: [DialogDemo, DialogDirective],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    DialogModule.ctorParameters = [];
    return DialogModule;
}());
//# sourceMappingURL=dialog.module.js.map