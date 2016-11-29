import { Component, Injector } from '@angular/core';
var routers = [
    { path: '/home', nick: '首页' },
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
    { path: '/forms', nick: 'Forms' }
];
export var AppComponent = (function () {
    function AppComponent(injector) {
        this.routers = routers;
        var user = injector.get('User');
        console.log(user);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'example-app',
                    templateUrl: 'app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: Injector, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map