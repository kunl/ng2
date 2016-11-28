import { Component, OnInit, AfterViewInit, ElementRef, Renderer, NgModule } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'd3-demo',
    template: ''
})
export class D3DemoComponent implements OnInit {
    constructor(private _elRef: ElementRef) { 

    }

    ngOnInit() { 
        console.log(this._elRef);
        let test = d3.select(this._elRef.nativeElement);

        test.
        append('div')
        .html('d3 生成')
        .style("background-color", "#1be2a6")
      
    }

}


@NgModule({
    declarations: [D3DemoComponent]
})
export class D3Module {}