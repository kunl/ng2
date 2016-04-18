System.register(['angular2/core', '../../component/tabs/tabs.component'], function(exports_1) {
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
    var core_1, tabs_component_1;
    var TabsDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            }],
        execute: function() {
            TabsDemo = (function () {
                function TabsDemo() {
                }
                TabsDemo = __decorate([
                    core_1.Component({
                        selector: 'tabs-demo',
                        template: "\n        <tabs>\n            <tab tabTitle='\u4E0B\u96E8'>\u6211\u5E02\u6700\u8FD1\u51E0\u5929\u51FA\u73B0\u5F3A\u964D\u96E8</tab>\n            <tab tabTitle='\u590F\u5929'>\u4E0B\u5468\u6211\u5E02\u5C06\u6B63\u5F0F\u5F00\u542F\u590F\u5929\u6A21\u5F0F</tab>\n        </tabs>\n    ",
                        directives: [tabs_component_1.TABS_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsDemo);
                return TabsDemo;
            }());
            exports_1("TabsDemo", TabsDemo);
        }
    }
});
//# sourceMappingURL=tabs.demo.js.map