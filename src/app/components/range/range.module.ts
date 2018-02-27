import { CommonModule } from '@angular/common';
import { Directive, Input, ViewContainerRef, TemplateRef, NgModule, Component } from '@angular/core';
@Directive({
    selector: '[range]'
})
export class RangeDirective {
    _range: number[]

    @Input()
    set range(value: number) {
        this.vcr.clear();
        this._range = this.generateRange(value[0], value[1]);

        this._range.forEach(num => {
            this.vcr.createEmbeddedView(this.tpl, {
                $implicit: num
            })
        })

    }

    constructor(
        private vcr: ViewContainerRef,
        private tpl: TemplateRef<any>
    ){}


    private generateRange(from: number, to: number) : number[] {
        let numbers: number[] = [];

        for(let i = from; i<= to; i++) {
            numbers.push(i);
        }
        return numbers;
    }

}


@Component({
    selector: 'app-range',
    template: `
        <div>

        <h1>Your age:</h1>
        <select>
          <ng-container *range="[18, 25]; let num">
            <option >{{num}}</option>
          </ng-container>
        </select>
        
        </div>
    `
})
export class RangeComponent {}

@NgModule({
    imports: [CommonModule],
    declarations: [
        RangeDirective,
        RangeComponent
    ],
    exports: [RangeComponent],
    schemas: []
})
export class RangeModule {}