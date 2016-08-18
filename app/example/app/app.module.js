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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var module_1 = require('../+tabs/module');
var http_module_1 = require('../+http/http.module');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var home_component_1 = require('../../component/home/home.component');
var footer_component_1 = require('../../component/footer.component');
var color_demo_1 = require('../+colors/color.demo');
var attrs_demo_1 = require('../+attr/attrs.demo');
var host_demo_1 = require('../+host/host.demo');
var parent_1 = require('../dynamic-component/parent');
var viewchild_demo_1 = require('../+view-child/viewchild.demo');
var pagination_demo_1 = require('../pagination/pagination.demo');
var dialog_demo_1 = require('../+dialog/dialog.demo');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule, module_1.TabDemoModule, http_module_1.HttpDemoModule],
            declarations: [
                app_component_1.AppComponent,
                footer_component_1.Footer,
                home_component_1.HomeComponent,
                color_demo_1.ColorDemo,
                attrs_demo_1.AttrsDemoComponent,
                host_demo_1.HostDemo,
                parent_1.DynamicComponentDemo,
                viewchild_demo_1.ViewChildComponentDemo,
                pagination_demo_1.PaginationDemo,
                dialog_demo_1.DialogDemo
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: 'User', useClass: UserDefault }
            ].concat(app_routes_1.APP_ROUTER_PROVIDERS)
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map