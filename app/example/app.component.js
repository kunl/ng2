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
var color_demo_1 = require('./+colors/color.demo');
var attrs_demo_1 = require('./+attr/attrs.demo');
var host_demo_1 = require('./+host/host.demo');
var parent_1 = require('./dynamic-component/parent');
var viewchild_demo_1 = require('./+view-child/viewchild.demo');
var http_demo_1 = require('./+http/http.demo');
var pagination_demo_1 = require('./pagination/pagination.demo');
var dialog_demo_1 = require('./+dialog/dialog.demo');
var routers = [
    { path: '/home', component: home_component_1.HomeComponent, nick: '首页' },
    // { path: '/lifecycle', component: LifecycleComponent, nick: '声明周期' },
    { path: '/tabs', component: tabs_demo_1.TabsDemo, nick: 'tabs' },
    { path: '/attrs', component: attrs_demo_1.AttrsDemoComponent, nick: '属性 Directive' },
    { path: '/host', component: host_demo_1.HostDemo, nick: 'host' },
    { path: '/color', component: color_demo_1.ColorDemo, nick: 'color demo' },
    { path: '/dynamic', component: parent_1.DynamicComponentDemo, nick: '动态组件' },
    { path: '/viewchild', component: viewchild_demo_1.ViewChildComponentDemo, nick: 'viewchild' },
    { path: '/http', component: http_demo_1.HttpDemo, nick: 'http' },
    { path: '/pagination', component: pagination_demo_1.PaginationDemo, nick: '分页' },
    { path: '/dialog', component: dialog_demo_1.DialogDemo, nick: '模态框' },
];
var AppComponent = (function () {
    function AppComponent(injector) {
        this.routers = routers;
        var user = injector.get('User');
        console.log(user);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'example-app',
            directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.Footer],
            styles: [
                "\n        .header-title {padding: 0 20px}\n        .router-link-active{border-right: 4px solid #00dcc1}\n        .content {padding: 0 20px; min-height: 70vh}\n        nav li {cursor: pointer}\n        "
            ],
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map