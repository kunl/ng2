System.register(['angular2/core', 'angular2/platform/browser', './child'], function(exports_1) {
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
                function DynamicComponentDemo(loader, ref, vm, title, hv) {
                    this.loader = loader;
                    this.ref = ref;
                    this.vm = vm;
                    this.hv = hv;
                    title.setTitle('自定义 title');
                }
                DynamicComponentDemo.prototype.detach = function () {
                    this.vm.destroyRootHostView(this.hv);
                };
                DynamicComponentDemo.prototype.ngOnInit = function () { };
                DynamicComponentDemo.prototype.loaderAction = function () {
                    var child = this.loader.loadNextToLocation(child_1.ChildComponent, this.ref)
                        .then(function (chidRef) {
                        var instance = chidRef.instance;
                        instance.ref = chidRef;
                        instance.name = '动态';
                        instance.finally.subscribe(function () {
                            chidRef.dispose();
                            console.log('done');
                        });
                    });
                };
                DynamicComponentDemo = __decorate([
                    core_1.Component({
                        selector: 'dynamic-demo',
                        template: "\n    <button class=\"btn\" (click)=\"loaderAction()\">\u52A0\u8F7D\u7EC4\u4EF6</button>\n    <button class=\"btn\" (click)=\"detach()\">detach</button>\n    ",
                        providers: [browser_1.Title, core_1.HostViewRef]
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef, core_1.AppViewManager, browser_1.Title, core_1.HostViewRef])
                ], DynamicComponentDemo);
                return DynamicComponentDemo;
            }());
            exports_1("DynamicComponentDemo", DynamicComponentDemo);
        }
    }
});
//# sourceMappingURL=parent.js.map