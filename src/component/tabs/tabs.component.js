import { Component, Input, ContentChildren } from '@angular/core';
export var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "\n        <div [hidden]=\"!active\">\n            <ng-content></ng-content>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = [];
    TabComponent.propDecorators = {
        'title': [{ type: Input, args: ['tabTitle',] },],
        'active': [{ type: Input },],
    };
    return TabComponent;
}());
export var TabsComponent = (function () {
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
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabs',
                    template: "\n       <div class=\"btn-group btn-group-sm\">\n        <button class=\"btn btn-secondary\" *ngFor='let tab of tabs' (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n            {{tab.title}}\n        </button>\n       </div>\n       <div class=\"card\">\n            <div  class=\"card-block\">\n                <ng-content></ng-content>\n            </div>\n       </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = [];
    TabsComponent.propDecorators = {
        'tabs': [{ type: ContentChildren, args: [TabComponent,] },],
    };
    return TabsComponent;
}());
export var TABS_DIRECTIVES = [TabsComponent, TabComponent];
//# sourceMappingURL=tabs.component.js.map