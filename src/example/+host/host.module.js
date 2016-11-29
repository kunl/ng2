import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HostDemo, HostService, com1 } from './host.demo';
export var HostModule = (function () {
    function HostModule() {
    }
    HostModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule],
                    declarations: [com1, HostDemo],
                    providers: [HostService],
                },] },
    ];
    /** @nocollapse */
    HostModule.ctorParameters = [];
    return HostModule;
}());
//# sourceMappingURL=host.module.js.map