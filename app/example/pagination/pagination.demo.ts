import { Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

import { PaginationDirective } from './pagination';

@Component({
    moduleId: module.id,
    selector: 'pagination-demo',
    template: `
        <pagination [(page)]="mypage" [total]="mytotal" [rows]="myrows"></pagination>
    `,
    directives: [PaginationDirective]
})
export class PaginationDemo implements OnInit, OnChanges {
    
    mypage = 3;
    mytotal = 5;
    myrows = 20;
    
    ngOnInit(){
        
    }
    
    ngOnChanges(changes){
        console.log(changes)
    }
    
}