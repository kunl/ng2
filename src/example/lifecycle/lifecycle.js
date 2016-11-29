import { Component, ChangeDetectionStrategy } from '@angular/core';
export var LifecycleComponent = (function () {
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
    LifecycleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lifecycle',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n        <input type=\"text\" [(ngModel)]=\"text\">\n    \n    "
                },] },
    ];
    /** @nocollapse */
    LifecycleComponent.ctorParameters = [];
    return LifecycleComponent;
}());
//# sourceMappingURL=lifecycle.js.map