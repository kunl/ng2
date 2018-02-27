import { Component, ContentChild, TemplateRef } from '@angular/core';

let num = 0;

@Component({
    selector: 'counter',
    template: '<p>{{this.id}}</p>'
})

export class CounterComponent {
    id: number

    constructor() {
        this.id = ++num;
    }
}

@Component({
    selector: 'wrapper',
    template: `
        <div>
            <ng-content select='.test'></ng-content>    
         外部
           

        <ng-container *ngFor="let it of [1,2,3]" [ngTemplateOutlet]='template'></ng-container>

        <hr>
        <ng-content></ng-content>
        </div>
    `
})
export class WrapperContent {
    @ContentChild(TemplateRef) template: TemplateRef<CounterComponent>;
}

@Component({
    template: `
        <wrapper>
        
        
            <counter></counter>
            <hr>
        
            <ng-container ngProjectAs=".test" *ngIf='2<3'>
                <counter class="test"></counter>
            </ng-container>

            <ng-template>
                <counter></counter>
            </ng-template>
            
            <ng-template>
                <counter></counter>
            </ng-template>
            
        </wrapper>
    `
})
export class NgcontentComponent{}