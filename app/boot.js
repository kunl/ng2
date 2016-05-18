/**
 * Created by kunl on 2016/1/5-0005.
 */
"use strict";
var UserDefault = (function () {
    function UserDefault() {
        this.name = 'xxx';
        this.age = 111;
        this.url = 'http://127.0.0.1';
    }
    return UserDefault;
}());
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_component_1 = require('./example/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    core_1.provide('User', { useClass: UserDefault })
]);
//# sourceMappingURL=boot.js.map