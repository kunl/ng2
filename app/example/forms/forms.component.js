"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormsComponent = (function () {
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
    return FormsComponent;
}());
__decorate([
    core_1.ViewChild('f'),
    __metadata("design:type", forms_1.NgForm)
], FormsComponent.prototype, "myForm", void 0);
FormsComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id,
        selector: 'forms',
        template: "\n    <div class=\"ui raised segment\">\n       <h2 class=\"ui header\">Demo Form: Sku</h2>\n\n       <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"  class=\"ui form\" novalidate>\n           <div class=\"field\">\n               <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" name=\"skuss\" [(ngModel)]=person.name>\n           </div>\n           <div class=\"field\">\n               <input type=\"text\" #name_a=\"ngModel\" id=\"skuInput\" pattern=\"/^A*/\" placeholder=\"SKU\" name=\"sss\" ngModel=\"a33\">\n               <p *ngIf=\"name_a.valid\">afsasf</p>\n           </div>\n\n            <input type=\"radio\"  value=\"1\" name=sex [(ngModel)]=person.sex>\u7537 \n\n            <input type=\"radio\"  value=\"2\" name=sex [(ngModel)]=person.sex>\u5973\n\n\n            <input type=\"checkbox\"   name=check [(ngModel)]=person.check>\n   \n            <button md-fab>aafafsafs\n            </button>\n         <button class=\"ui button\">Submit</button>\n      </form>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map