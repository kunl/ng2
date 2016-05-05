System.register(['@angular/core', '@angular/router', '../component/home/home.component', '../component/footer.component', './+tabs/tabs.demo', './lifecycle/lifecycle', './+colors/color.demo', './+attr/attrs.demo', './+host/host.demo', './dynamic-component/parent', './+view-child/viewchild.demo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, footer_component_1, tabs_demo_1, lifecycle_1, color_demo_1, attrs_demo_1, host_demo_1, parent_1, viewchild_demo_1;
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
            function (lifecycle_1_1) {
                lifecycle_1 = lifecycle_1_1;
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
            },
            function (viewchild_demo_1_1) {
                viewchild_demo_1 = viewchild_demo_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
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
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map