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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var module_1 = require("../+tabs/module");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_component_1 = require("../../component/home/home.component");
var footer_component_1 = require("../../component/footer.component");
var color_module_1 = require("../+colors/color.module");
var attrs_module_1 = require("../+attr/attrs.module");
var host_module_1 = require("../+host/host.module");
var parent_1 = require("../dynamic-component/parent");
var viewchild_demo_1 = require("../+view-child/viewchild.demo");
var pagination_module_1 = require("../pagination/pagination.module");
var dialog_module_1 = require("../+dialog/dialog.module");
var d3_demo_1 = require("../d3/d3.demo");
var echarts_demo_1 = require("../echarts/echarts.demo");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule,
            module_1.TabDemoModule,
            attrs_module_1.AttrsDemoModule,
            color_module_1.ColorModule,
            host_module_1.HostModule,
            pagination_module_1.PaginationModule,
            dialog_module_1.DialogModule,
            d3_demo_1.D3Module,
            echarts_demo_1.EchartsDemoModule
        ],
        declarations: [
            app_component_1.AppComponent,
            footer_component_1.Footer,
            home_component_1.HomeComponent,
            parent_1.DynamicComponentDemo,
            viewchild_demo_1.ViewChildComponentDemo
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: 'User', useClass: UserDefault },
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map