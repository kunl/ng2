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
var routers = [
    { path: '/home', nick: '首页' },
    // { path: '/lifecycle', nick: '生命周期' },
    { path: '/tabs', nick: 'tabs' },
    { path: '/attrs', nick: '属性 Directive' },
    { path: '/host', nick: 'host' },
    { path: '/color', nick: 'color demo' },
    { path: '/dynamic', nick: '动态组件' },
    { path: '/viewchild', nick: 'viewchild' },
    { path: '/http', nick: 'http' },
    { path: '/pagination', nick: '分页' },
    { path: '/dialog', nick: '模态框' },
    { path: '/d3', nick: 'D3' },
    { path: '/echarts', nick: 'Echarts' },
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