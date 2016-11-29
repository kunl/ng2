import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsDemoComponent } from './forms-demo';
import { FormsComponent } from './forms.component';
import { FormsReactiveComponent } from './forms-reactive.component';
export var FormsDemoModule = (function () {
    function FormsDemoModule() {
    }
    FormsDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, ReactiveFormsModule, BrowserModule],
                    declarations: [FormsComponent, FormsReactiveComponent, FormsDemoComponent],
                    exports: [FormsDemoComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    FormsDemoModule.ctorParameters = [];
    return FormsDemoModule;
}());
//# sourceMappingURL=forms.js.map