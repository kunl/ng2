"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../component/home/home.component');
var tabs_demo_1 = require('./+tabs/tabs.demo');
var color_demo_1 = require('./+colors/color.demo');
var attrs_demo_1 = require('./+attr/attrs.demo');
var host_demo_1 = require('./+host/host.demo');
var parent_1 = require('./dynamic-component/parent');
var viewchild_demo_1 = require('./+view-child/viewchild.demo');
var http_routes_1 = require('./+http/http.routes');
var pagination_demo_1 = require('./pagination/pagination.demo');
var dialog_demo_1 = require('./+dialog/dialog.demo');
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'tabs', component: tabs_demo_1.TabsDemo },
    { path: 'attrs', component: attrs_demo_1.AttrsDemoComponent },
    { path: 'host', component: host_demo_1.HostDemo },
    { path: 'color', component: color_demo_1.ColorDemo },
    { path: 'dynamic', component: parent_1.DynamicComponentDemo },
    { path: 'viewchild', component: viewchild_demo_1.ViewChildComponentDemo }
].concat(http_routes_1.HttpRouters, [
    { path: 'pagination', component: pagination_demo_1.PaginationDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(appRoutes)
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, {
    useHash: true,
    enableTracing: false
});
//# sourceMappingURL=app.routes.js.map