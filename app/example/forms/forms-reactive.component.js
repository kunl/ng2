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
var validator_1 = require("./validator");
var FormsReactiveComponent = (function () {
    function FormsReactiveComponent(fb) {
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
            name: ['kunl', forms_1.Validators.required, validator_1.MyValidator.asyncTemeout],
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
    FormsReactiveComponent.prototype.submit = function () {
        console.log(this.person);
        console.log(this.name);
    };
    return FormsReactiveComponent;
}());
FormsReactiveComponent = __decorate([
    core_1.Component({
        selector: 'reactive-forms',
        styles: ["\n        .error {\n            border: 1px solid red;\n        }\n        input:focus{\n            outline: none 0;\n        }\n    "],
        template: "\n        <form [formGroup]=\"person\" (ngSubmit)=\"submit()\" novalidate>\n\n            <div formGroupName=\"user\">\n\n                <input type=\"text\" [class.error]=\"name.hasError('asyncErr')\" [formControl]=\"user.get('name')\" required [(ngModel)]=\"myperson.name\">\n                <p *ngIf=\"name.hasError('required')\">name \u5FC5\u987B</p>\n                <p *ngIf=\"name.hasError('asyncErr')\">name \u5F02\u6B65\u6821\u9A8C</p>\n                <p *ngIf=\"name.hasError('nameerror')\">name \u5FC5\u987B \u4E3A</p>\n                <br>\n                <input type=\"text\" formControlName=age >\n            </div>\n            \n\n            <input type=\"radio\" [formControl]=\"person.get('color')\" value=\"red\" > red\n            <input type=\"radio\" [formControl]=\"person.get('color')\" value=\"blue\" > blue\n\n            <select [formControl]=\"city\">\n                <option *ngFor=\"let c of citys\" [value]=\"c.value\" >{{c.name}}</option>\n            </select>\n\n            <button>\u63D0\u4EA4</button>\n        </form>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormsReactiveComponent);
exports.FormsReactiveComponent = FormsReactiveComponent;
//# sourceMappingURL=forms-reactive.component.js.map