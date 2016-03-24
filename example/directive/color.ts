import {Directive, Component, Input, OnInit, ElementRef, Renderer} from 'angular2/core';


@Directive({
    selector: '[color]'
})
export class ColorDirective implements OnInit {

    @Input() color: string;

    constructor(private _ele: ElementRef, private _render: Renderer){
        console.log(this.color);
    }

    ngOnInit(){
        this._render.setElementStyle(this._ele.nativeElement, 'color', this.color);
    }

}
