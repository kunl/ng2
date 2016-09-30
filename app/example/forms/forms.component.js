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
var FormsDemoComponent = (function () {
    function FormsDemoComponent() {
        this.person = {
            name: 'a啊啊啊',
            sex: '1',
            check: true
        };
    }
    FormsDemoComponent.prototype.ngOnInit = function () {
        console.log(this.myForm);
    };
    FormsDemoComponent.prototype.onSubmit = function (f) {
        console.dir(f);
    };
    return FormsDemoComponent;
}());
__decorate([
    core_1.ViewChild('f'),
    __metadata("design:type", forms_1.NgForm)
], FormsDemoComponent.prototype, "myForm", void 0);
FormsDemoComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id,
        selector: 'forms-demo',
        template: "\n    <div class=\"ui raised segment\">\n       <h2 class=\"ui header\">Demo Form: Sku</h2>\n\n       <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"  class=\"ui form\" novalidate>\n           <div class=\"field\">\n               <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" name=\"skuss\" [(ngModel)]=person.name>\n           </div>\n           <div class=\"field\">\n               <input type=\"text\" #name_a=\"ngModel\" id=\"skuInput\" pattern=\"/^A*/\" placeholder=\"SKU\" name=\"sss\" ngModel=\"a33\">\n               <p *ngIf=\"name_a.valid\">afsasf</p>\n           </div>\n\n            <input type=\"radio\"  value=\"1\" name=sex [(ngModel)]=person.sex>\u7537 \n\n            <input type=\"radio\"  value=\"2\" name=sex [(ngModel)]=person.sex>\u5973\n\n\n            <input type=\"checkbox\"   name=check [(ngModel)]=person.check>\n   \n            <button md-fab>aafafsafs\n            </button>\n         <button class=\"ui button\">Submit</button>\n      </form>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], FormsDemoComponent);
exports.FormsDemoComponent = FormsDemoComponent;
var FormsGroupComponent = (function () {
    function FormsGroupComponent(fb) {
        this.citys = [
            {
                name: '北京',
                value: 'beijing'
            },
            {
                name: '上海',
                value: 'shanghai'
            },
            {
                name: '天津',
                value: 'tianjin'
            }
        ];
        this.myperson = {
            name: 'a啊啊啊',
            sex: '1',
            check: true
        };
        var age = new forms_1.FormControl(24);
        var user;
        user = this.user = fb.group({
            name: ['kunl'],
            age: age
        });
        this.person = fb.group({
            color: ['blue'],
            city: ['tianjin'],
            user: user
        });
        this.name = this.user.controls['name'];
        this.city = this.person.get('city');
        this.name.valueChanges.subscribe(function (e) {
            console.log(e);
        });
        age.valueChanges.subscribe(function (e) {
            console.log(e);
        });
    }
    FormsGroupComponent.prototype.submit = function () {
        console.log(this.person);
    };
    return FormsGroupComponent;
}());
FormsGroupComponent = __decorate([
    core_1.Component({
        selector: 'forms-group',
        template: "\n        <form [formGroup]=\"person\" (ngSubmit)=\"submit()\" novalidate>\n\n\n            <div formGroupName=\"user\">\n\n                <input type=\"text\" [formControl]=\"user.get('name')\" required [(ngModel)]=\"myperson.name\">\n                <p *ngIf=\"name.hasError('required')\">name \u5FC5\u987B</p>\n                <p *ngIf=\"name.hasError('nameerror')\">name \u5FC5\u987B \u4E3A</p>\n\n                <input type=\"text\" formControlName=age >\n            </div>\n            \n\n            <input type=\"radio\" [formControl]=\"person.get('color')\" value=\"red\" > red\n            <input type=\"radio\" [formControl]=\"person.get('color')\" value=\"blue\" > blue\n\n            <select [formControl]=\"city\">\n                <option *ngFor=\"let c of citys\" [value]=\"c.value\" >{{c.name}}</option>\n            </select>\n\n            <button>\u63D0\u4EA4</button>\n        </form>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormsGroupComponent);
exports.FormsGroupComponent = FormsGroupComponent;
function name(f) {
    return (f.value == 'kunl' ? null : { 'nameerror': true });
}
//# sourceMappingURL=forms.component.js.map