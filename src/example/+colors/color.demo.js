import { Component } from '@angular/core';
export var ColorDemo = (function () {
    function ColorDemo() {
        this.myColor = '#333';
    }
    ColorDemo.prototype.setColor = function () {
        this.myColor = this.myColor == 'red' ? '#999' : 'red';
        console.log(this.myColor);
    };
    ColorDemo.decorators = [
        { type: Component, args: [{
                    selector: 'colors',
                    template: "\n        <p color>\u7EA2\u8272\u6587\u5B57</p>\n        <p color='blue'>\u84DD\u8272\u6587\u5B57</p>\n        <p color='#f00'>\u84DD\u8272\u6587\u5B57</p>\n        \n        <p><span [color]='myColor'>\u9ED1\u8272\u6587\u5B57</span> \u70B9\u51FB\u66F4\u6362\u6587\u5B57\u989C\u8272 {{myColor}}</p>\n        <button class=\"btn btn-sma btn-success-outline\" (click)=\"setColor()\">\u6362\u8272</button>\n    "
                },] },
    ];
    /** @nocollapse */
    ColorDemo.ctorParameters = [];
    return ColorDemo;
}());
//# sourceMappingURL=color.demo.js.map