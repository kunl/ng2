import {Directive, Input, ElementRef, Renderer , HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[color]'
})

export class ColorDirective {
    private _element: HTMLElement;
    private _defaultColor:string = 'yellow';
    @Input() color: string;

    constructor(elRef: ElementRef, private _render: Renderer){
        this._element = elRef.nativeElement;
    }
    
    @HostBinding('style.color' ) get c() { return this.color || this._defaultColor};
    
    @HostListener('mouseenter') onMouseEnter(){
        this._render.setElementStyle(this._element, 'color', 'green');
    }
    @HostListener('mouseleave') onMouseLeave(){
        this._render.setElementStyle(this._element, 'color', this.color);
    }

    // ngOnInit(){
    //     this._render.setElementStyle(this._ele.nativeElement, 'color', this.color);
    // }
    
    
}
