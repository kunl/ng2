import { Component, OnInit } from '@angular/core';

import {DialogDirective} from './dialog'

@Component({
    moduleId: module.id,
    selector: 'dialog-demo',
    templateUrl: 'dialog.demo.html',
    directives: [DialogDirective]
})
export class DialogDemo implements OnInit {
    private open: boolean = false;
    
    constructor() { }

    ngOnInit() { }


    show(){
        console.log(this.open)
        this.open = true;
    }
    
    close(){
        this.open = false;
    }
    
    change(e:boolean){
        console.log('change',e);
    }
    
}