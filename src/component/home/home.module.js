import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
export var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule
                    ],
                    exports: [HomeComponent],
                    declarations: [
                        HomeComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    HomeModule.ctorParameters = [];
    return HomeModule;
}());
//# sourceMappingURL=home.module.js.map