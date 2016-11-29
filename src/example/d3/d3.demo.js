import { Component, ElementRef, NgModule } from '@angular/core';
import * as d3 from 'd3';
export var D3DemoComponent = (function () {
    function D3DemoComponent(_elRef) {
        this._elRef = _elRef;
    }
    D3DemoComponent.prototype.ngOnInit = function () {
        console.log(this._elRef);
        var test = d3.select(this._elRef.nativeElement);
        test.
            append('div')
            .html('d3 生成')
            .style("background-color", "#1be2a6");
    };
    D3DemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'd3-demo',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    D3DemoComponent.ctorParameters = [
        { type: ElementRef, },
    ];
    return D3DemoComponent;
}());
export var D3Module = (function () {
    function D3Module() {
    }
    D3Module.decorators = [
        { type: NgModule, args: [{
                    declarations: [D3DemoComponent]
                },] },
    ];
    /** @nocollapse */
    D3Module.ctorParameters = [];
    return D3Module;
}());
//# sourceMappingURL=d3.demo.js.map