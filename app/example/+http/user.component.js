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
var UserComponent = (function () {
    function UserComponent() {
        console.log(333);
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            template: "\n        <div class=\"col-md-6\">\n            <div class=\"form\">\n                <div class=\"input-group input-group-sm\">\n                    <span class=\"input-group-addon\">name</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"name\">\n                </div>\n                \n                <div class=\"input-group input-group-sm\">\n                    <span class=\"input-group-addon\">age</span>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"age\">\n                </div>\n                \n                <div class=\"input-group input-group-sm\">\n                    <span class=\"input-group-addon\">image</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"image_url\">\n                </div>\n                \n            </div>\n        </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map