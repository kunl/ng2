System.register(['angular2/core', 'angular2/platform/browser', './child'], function(exports_1, context_1) {
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
    var core_1, browser_1, child_1;
    var DynamicComponentDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (child_1_1) {
                child_1 = child_1_1;
            }],
        execute: function() {
            DynamicComponentDemo = (function () {
                function DynamicComponentDemo(loader, vcRef, title) {
                    this.loader = loader;
                    this.vcRef = vcRef;
                    title.setTitle('自定义 title');
                }
                DynamicComponentDemo.prototype.ngOnInit = function () { };
                DynamicComponentDemo.prototype.loaderAction = function () {
                    var _this = this;
                    var child = this.loader.loadNextToLocation(child_1.ChildComponent, this.vcRef)
                        .then(function (chidRef) {
                        var instance = chidRef.instance;
                        instance.ref = chidRef;
                        instance.name = '动态';
                        instance.finally.subscribe(function (user) {
                            chidRef.destroy();
                            _this.user = user;
                            console.log('done');
                        });
                    });
                };
                DynamicComponentDemo = __decorate([
                    core_1.Component({
                        selector: 'dynamic-demo',
                        template: "\n    <p> \n      <button class=\"btn\" (click)=\"loaderAction()\">\u5F39\u51FA\u7EC4\u4EF6</button>\n    </p>\n    <section *ngIf=\"user\">\n    \n        <div class=\"card\">\n        <div class=\"card-block\">\n            <h5 class=\"card-title\">\u7528\u6237\u8F93\u5165\u7ED3\u679C\uFF1A</h5>\n        </div>\n            <div class=\"card-block\">\n                <blockquote>\n                    <pre>\n                    \u7528\u6237\u540D\uFF1A{{user.username}}\n                    \u624B\u673A\u53F7\uFF1A{{user.telphone}}\n                    </pre>\n                </blockquote>\n            </div>\n        </div>\n  \n    </section>\n    \n    ",
                        providers: [browser_1.Title]
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ViewContainerRef, browser_1.Title])
                ], DynamicComponentDemo);
                return DynamicComponentDemo;
            }());
            exports_1("DynamicComponentDemo", DynamicComponentDemo);
        }
    }
});
//# sourceMappingURL=parent.js.map