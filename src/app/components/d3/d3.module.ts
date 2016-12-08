import { Component, OnInit,  ElementRef, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import * as d3 from 'd3';

@Component({
    selector: 'd3-demo',
    template: ''
})
export class D3Component implements OnInit {
    constructor(private _elRef: ElementRef) { 

    }

    ngOnInit() { 
        console.log(this._elRef);
        let test = d3.select(this._elRef.nativeElement);

        test.
        append('div')
        .html('d3 生成')
        .style("background-color", "#1be2a6")
        .style('padding', '1rem')
      
    }

}

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: D3Component}])],
    declarations: [D3Component]
})
export class D3Module {}