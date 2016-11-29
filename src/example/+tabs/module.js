import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TABS_DIRECTIVES } from '../../component/tabs/tabs.component';
import { TabsDemoComponent } from './tabs.demo';
export var TabDemoModule = (function () {
    function TabDemoModule() {
    }
    TabDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TabsDemoComponent, TABS_DIRECTIVES],
                    exports: [TabsDemoComponent]
                },] },
    ];
    /** @nocollapse */
    TabDemoModule.ctorParameters = [];
    return TabDemoModule;
}());
//# sourceMappingURL=module.js.map