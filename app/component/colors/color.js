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
var ColorDirective = (function () {
    function ColorDirective(elRef, _render) {
        this._render = _render;
        this._defaultColor = 'yellow';
        this._element = elRef.nativeElement;
    }
    Object.defineProperty(ColorDirective.prototype, "c", {
        get: function () { return this.color || this._defaultColor; },
        enumerable: true,
        configurable: true
    });
    ;
    ColorDirective.prototype.onMouseEnter = function () {
        this._render.setElementStyle(this._element, 'color', 'green');
    };
    ColorDirective.prototype.onMouseLeave = function () {
        this._render.setElementStyle(this._element, 'color', this.color);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColorDirective.prototype, "color", void 0);
    __decorate([
        core_1.HostBinding('style.color'), 
        __metadata('design:type', Object)
    ], ColorDirective.prototype, "c", null);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ColorDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ColorDirective.prototype, "onMouseLeave", null);
    ColorDirective = __decorate([
        core_1.Directive({
            selector: '[color]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ColorDirective);
    return ColorDirective;
}());
exports.ColorDirective = ColorDirective;
//# sourceMappingURL=color.js.map