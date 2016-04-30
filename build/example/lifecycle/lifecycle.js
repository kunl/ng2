System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var LifecycleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LifecycleComponent = (function () {
                function LifecycleComponent() {
                    this.num = 0;
                    this.text = '初始';
                }
                LifecycleComponent.prototype.ngOnInit = function () {
                    this._log('init');
                };
                LifecycleComponent.prototype.ngOnchanges = function () {
                    this._log('changes');
                };
                LifecycleComponent.prototype.ngDoCheck = function () {
                    this._log('do check');
                };
                LifecycleComponent.prototype.ngAfterContentInit = function () {
                    this._log('content init');
                };
                LifecycleComponent.prototype.ngAfterContentChecked = function () {
                    this._log('content checked');
                };
                LifecycleComponent.prototype.ngAfterViewInit = function () {
                    this._log('view init');
                };
                LifecycleComponent.prototype.ngAfterViewChecked = function () {
                    this._log('view checked');
                };
                LifecycleComponent.prototype.ngOnDestory = function () {
                    this._log('destory');
                };
                LifecycleComponent.prototype._log = function (msg) {
                    console.log(this.num++ + " -- " + msg);
                };
                LifecycleComponent = __decorate([
                    core_1.Component({
                        selector: 'lifecycle',
                        changeDetection: core_1.ChangeDetectionStrategy.CheckOnce,
                        template: "\n        <input type=\"text\" [(ngModel)]=\"text\">\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LifecycleComponent);
                return LifecycleComponent;
            }());
            exports_1("LifecycleComponent", LifecycleComponent);
        }
    }
});
//# sourceMappingURL=lifecycle.js.map