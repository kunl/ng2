/**
 * Created by kunl on 2016/1/5-0005.
 */
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('@angular/common/index');
var app_component_1 = require('./example/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(index_1.LocationStrategy, { useClass: index_1.HashLocationStrategy })
]);
//# sourceMappingURL=boot.js.map