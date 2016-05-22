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
var core_1 = require('@angular/core');
var dialog_1 = require('./dialog');
var DialogDemo = (function () {
    function DialogDemo() {
        this.open = false;
    }
    DialogDemo.prototype.ngOnInit = function () { };
    DialogDemo.prototype.show = function () {
        console.log(this.open);
        this.open = true;
    };
    DialogDemo.prototype.close = function () {
        this.open = false;
    };
    DialogDemo.prototype.change = function (e) {
        console.log('change', e);
    };
    DialogDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-demo',
            templateUrl: 'dialog.demo.html',
            directives: [dialog_1.DialogDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogDemo);
    return DialogDemo;
}());
exports.DialogDemo = DialogDemo;
//# sourceMappingURL=dialog.demo.js.map