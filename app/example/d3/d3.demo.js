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
var core_1 = require('@angular/core');
var d3 = require('d3');
var D3DemoComponent = (function () {
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
    D3DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'd3-demo',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], D3DemoComponent);
    return D3DemoComponent;
}());
exports.D3DemoComponent = D3DemoComponent;
//# sourceMappingURL=d3.demo.js.map