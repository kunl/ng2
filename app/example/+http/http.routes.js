"use strict";
var router_1 = require("@angular/router");
var http_demo_1 = require("./http.demo");
var user_component_1 = require("./user.component");
exports.HttpRouters = [
    {
        path: '',
        component: http_demo_1.HttpDemo,
        children: [
            { path: '', component: http_demo_1.HttpDemo },
            { path: ':id', component: user_component_1.UserComponent }
        ]
    },
];
exports.routing = router_1.RouterModule.forChild(exports.HttpRouters);
//# sourceMappingURL=http.routes.js.map