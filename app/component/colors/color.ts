import {Directive, Input, ElementRef, Renderer , HostBinding} from '@angular/core';

@Directive({
    selector: '[color]'
 
})

export class ColorDirective {

    @Input() color: string;

    constructor(private _ele: ElementRef, private _render: Renderer){

    }
    
    @HostBinding('style.color' ) get c() { return this.color};
    

    // ngOnInit(){
    //     this._render.setElementStyle(this._ele.nativeElement, 'color', this.color);
    // }
    
    
}
