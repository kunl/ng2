import { Directive, Input, ElementRef, Renderer, HostBinding, HostListener } from '@angular/core';
export var ColorDirective = (function () {
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
    // ngOnInit(){
    //     this._render.setElementStyle(this._ele.nativeElement, 'color', this.color);
    // }
    ColorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[color]'
                },] },
    ];
    /** @nocollapse */
    ColorDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    ColorDirective.propDecorators = {
        'color': [{ type: Input },],
        'c': [{ type: HostBinding, args: ['style.color',] },],
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    };
    return ColorDirective;
}());
//# sourceMappingURL=color.js.map