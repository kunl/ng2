import { Component } from '@angular/core';
export var DialogDemo = (function () {
    function DialogDemo() {
        this.open = false;
    }
    DialogDemo.prototype.ngOnInit = function () { };
    DialogDemo.prototype.show = function () {
        console.log(this.open);
        this.open = true;
    };
    DialogDemo.prototype.close = function () {
        this.open = false;
    };
    DialogDemo.prototype.change = function (e) {
        console.log('change', e);
    };
    DialogDemo.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-demo',
                    templateUrl: 'dialog.demo.html'
                },] },
    ];
    /** @nocollapse */
    DialogDemo.ctorParameters = [];
    return DialogDemo;
}());
//# sourceMappingURL=dialog.demo.js.map