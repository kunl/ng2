import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
export var FormsComponent = (function () {
    function FormsComponent() {
        this.person = {
            name: 'a啊啊啊',
            sex: '1',
            check: true
        };
    }
    FormsComponent.prototype.ngOnInit = function () {
        console.log(this.myForm);
    };
    FormsComponent.prototype.onSubmit = function (f) {
        console.dir(f);
    };
    FormsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'forms',
                    template: "\n    <div class=\"ui raised segment\">\n       <h2 class=\"ui header\">Demo Form: Sku</h2>\n\n       <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"  class=\"ui form\" novalidate>\n           <div class=\"field\">\n               <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" name=\"skuss\" [(ngModel)]=person.name>\n           </div>\n           <div class=\"field\">\n               <input type=\"text\" #name_a=\"ngModel\" id=\"skuInput\" pattern=\"/^A*/\" placeholder=\"SKU\" name=\"sss\" ngModel=\"a33\">\n               <p *ngIf=\"name_a.valid\">afsasf</p>\n           </div>\n\n            <input type=\"radio\"  value=\"1\" name=sex [(ngModel)]=person.sex>\u7537 \n\n            <input type=\"radio\"  value=\"2\" name=sex [(ngModel)]=person.sex>\u5973\n\n\n            <input type=\"checkbox\"   name=check [(ngModel)]=person.check>\n   \n            <button md-fab>aafafsafs\n            </button>\n         <button class=\"ui button\">Submit</button>\n      </form>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    FormsComponent.ctorParameters = [];
    FormsComponent.propDecorators = {
        'myForm': [{ type: ViewChild, args: ['f',] },],
    };
    return FormsComponent;
}());
//# sourceMappingURL=forms.component.js.map