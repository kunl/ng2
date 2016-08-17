/**
 * Created by kunl on 2016/1/5-0005.
 */
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
var UserDefault = (function () {
    function UserDefault() {
        this.name = 'xxx';
        this.age = 111;
        this.url = 'http://127.0.0.1';
    }
    return UserDefault;
}());
var app_component_1 = require('./example/app.component');
var home_component_1 = require('./component/home/home.component');
var app_routes_1 = require('./example/app.routes');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var BootModule = (function () {
    function BootModule() {
    }
    BootModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                // { provide: APP_BASE_HREF, useValue: './'},
                { provide: 'User', useClass: UserDefault },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ].concat(app_routes_1.APP_ROUTER_PROVIDERS)
        }), 
        __metadata('design:paramtypes', [])
    ], BootModule);
    return BootModule;
}());
exports.BootModule = BootModule;
//# sourceMappingURL=boot.js.map