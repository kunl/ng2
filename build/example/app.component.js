System.register(['angular2/core', 'angular2/router', '../component/home/home.component', '../component/footer.component', './tabs/tabs.demo', './colors/color.demo', './attr/attrs.demo', './host/host.demo', './dynamic-component/parent'], function(exports_1) {
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
    var core_1, router_1, home_component_1, footer_component_1, tabs_demo_1, color_demo_1, attrs_demo_1, host_demo_1, parent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (tabs_demo_1_1) {
                tabs_demo_1 = tabs_demo_1_1;
            },
            function (color_demo_1_1) {
                color_demo_1 = color_demo_1_1;
            },
            function (attrs_demo_1_1) {
                attrs_demo_1 = attrs_demo_1_1;
            },
            function (host_demo_1_1) {
                host_demo_1 = host_demo_1_1;
            },
            function (parent_1_1) {
                parent_1 = parent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'example-app',
                        directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.Footer],
                        styles: [
                            "\n        .header-title {padding: 20px}\n        .router-link-active{border-right: 4px solid #00dcc1}\n        .content {padding: 20px; min-height: 70vh}\n        "
                        ],
                        template: "\n        <div class=\"container-fluid\">\n            <div class=\"row\"><p class=\"header-title\">Angular2 demo of kunl</p></div>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <nav class=\"list-group\">\n                        <li class=\"list-group-item\" [routerLink]='[\"Home\"]'>Home</li>\n                        <li class=\"list-group-item\" [routerLink]='[\"TabsDemo\"]'>Tabs demo</li>\n                        <li class=\"list-group-item\" [routerLink]='[\"ColorDemo\"]'>Colors demo</li>\n                        <li class=\"list-group-item\" [routerLink]='[\"AttrsDemoComponent\"]'>Attrs demo</li>\n                        <li class=\"list-group-item\" [routerLink]='[\"HostDemo\"]'>Host demo</li>\n                        <li class=\"list-group-item\" [routerLink]='[\"DynamicComponentDemo\"]'>Dynamic Component demo</li>\n                    </nav>\n                </div>\n                <div class=\"col-sm-10\">\n                \n                    <div class=\"card content\">\n                        <router-outlet></router-outlet>\n                    </div>\n                    \n                </div>\n            </div>\n            <footer></footer>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/tabs', name: 'TabsDemo', component: tabs_demo_1.TabsDemo },
                        { path: '/attrs', name: 'AttrsDemoComponent', component: attrs_demo_1.AttrsDemoComponent },
                        { path: '/host', name: 'HostDemo', component: host_demo_1.HostDemo },
                        { path: '/color', name: 'ColorDemo', component: color_demo_1.ColorDemo },
                        { path: '/dynamic', name: 'DynamicComponentDemo', component: parent_1.DynamicComponentDemo },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map