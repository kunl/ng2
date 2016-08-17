"use strict";
var http_demo_1 = require('./http.demo');
var user_component_1 = require('./user.component');
exports.HttpRouters = [
    {
        path: 'http',
        component: http_demo_1.HttpDemo,
        children: [
            { path: '', component: http_demo_1.HttpDemo },
            { path: ':id', component: user_component_1.UserComponent }
        ]
    },
];
//# sourceMappingURL=http.routes.js.map