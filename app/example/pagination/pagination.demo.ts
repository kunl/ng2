import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChange } from '@angular/core';

import { PaginationDirective } from './pagination';

@Component({
    moduleId: module.id,
    selector: 'pagination-demo',
    template: `
        <pagination [(page)]="mypage" [total]="mytotal" [pagesize]="mysize"></pagination>
    `,
    directives: [PaginationDirective]
})
export class PaginationDemo implements OnInit, OnChanges {
    
    mypage = 3;
    mytotal = 35;
    mysize = 10;
    
    ngOnInit(){
        
    }
    
    ngOnChanges(changes: {[key:string]: SimpleChange}){
        console.log(changes)
    }
    
}