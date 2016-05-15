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
var router_1 = require('@angular/router');
var home_component_1 = require('../component/home/home.component');
var footer_component_1 = require('../component/footer.component');
var tabs_demo_1 = require('./+tabs/tabs.demo');
var lifecycle_1 = require('./lifecycle/lifecycle');
var color_demo_1 = require('./+colors/color.demo');
var attrs_demo_1 = require('./+attr/attrs.demo');
var host_demo_1 = require('./+host/host.demo');
var parent_1 = require('./dynamic-component/parent');
var viewchild_demo_1 = require('./+view-child/viewchild.demo');
var http_demo_1 = require('./+http/http.demo');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'example-app',
            directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.Footer],
            styles: [
                "\n        .header-title {padding: 20px}\n        .router-link-active{border-right: 4px solid #00dcc1}\n        .content {padding: 20px; min-height: 70vh}\n        nav li {cursor: pointer}\n        "
            ],
            templateUrl: 'app/example/app.component.html'
        }),
        router_1.Routes([
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/lifecycle', component: lifecycle_1.LifecycleComponent },
            { path: '/tabs', component: tabs_demo_1.TabsDemo },
            { path: '/attrs', component: attrs_demo_1.AttrsDemoComponent },
            { path: '/host', component: host_demo_1.HostDemo },
            { path: '/color', component: color_demo_1.ColorDemo },
            { path: '/dynamic', component: parent_1.DynamicComponentDemo },
            { path: '/viewchild', component: viewchild_demo_1.ViewChildComponentDemo },
            { path: '/http', component: http_demo_1.HttpDemo },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map