System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var DisabledComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DisabledComponent = (function () {
                function DisabledComponent() {
                    this.isDisabled = true;
                }
                DisabledComponent.prototype.changeAttrs = function () {
                    this.isDisabled = this.isDisabled ? false : true;
                };
                DisabledComponent.prototype.ngOnInit = function () { };
                DisabledComponent = __decorate([
                    core_1.Component({
                        selector: 'disabled',
                        template: "\n        <input type=\"text\" [attr.disabled]='isDisabled'>\n        <button class=\"btn btn-sm\" (click)=\"changeAttrs()\">\u5207\u6362<button>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], DisabledComponent);
                return DisabledComponent;
            }());
            exports_1("DisabledComponent", DisabledComponent);
        }
    }
});
//# sourceMappingURL=disabled.js.map