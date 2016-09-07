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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_routes_1 = require('./http.routes');
var http_demo_1 = require('./http.demo');
var user_component_1 = require('./user.component');
var HttpDemoModule = (function () {
    function HttpDemoModule() {
    }
    HttpDemoModule = __decorate([
        core_1.NgModule({
            imports: [http_routes_1.routing, common_1.CommonModule, forms_1.FormsModule],
            exports: [http_demo_1.HttpDemo, user_component_1.UserComponent],
            declarations: [http_demo_1.HttpDemo, user_component_1.UserComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpDemoModule);
    return HttpDemoModule;
}());
exports.HttpDemoModule = HttpDemoModule;
//# sourceMappingURL=http.module.js.map