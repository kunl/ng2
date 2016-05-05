System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TabComponent, TabsComponent, TABS_DIRECTIVES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabComponent = (function () {
                function TabComponent() {
                    this.active = false;
                }
                __decorate([
                    core_1.Input('tabTitle'), 
                    __metadata('design:type', String)
                ], TabComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TabComponent.prototype, "active", void 0);
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        template: "\n        <div [hidden]=\"!active\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            }());
            exports_1("TabComponent", TabComponent);
            TabsComponent = (function () {
                function TabsComponent() {
                }
                TabsComponent.prototype.ngAfterContentInit = function () {
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // content 初始化之后，判断是否有默认显示的 tab
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                TabsComponent.prototype.selectTab = function (tab) {
                    // 隐藏所有  
                    this.tabs.map(function (tab) { return tab.active = false; });
                    // 显示当前
                    tab.active = true;
                };
                __decorate([
                    core_1.ContentChildren(TabComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], TabsComponent.prototype, "tabs", void 0);
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n       <div class=\"btn-group btn-group-sm\">\n        <button class=\"btn btn-secondary\" *ngFor='let tab of tabs' (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n            {{tab.title}}\n        </button>\n       </div>\n       <div class=\"card\">\n            <div  class=\"card-block\">\n                <ng-content></ng-content>\n            </div>\n       </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsComponent);
                return TabsComponent;
            }());
            exports_1("TabsComponent", TabsComponent);
            exports_1("TABS_DIRECTIVES", TABS_DIRECTIVES = [TabsComponent, TabComponent]);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map