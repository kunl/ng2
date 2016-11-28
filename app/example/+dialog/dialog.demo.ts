import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'dialog-demo',
    templateUrl: 'dialog.demo.html'
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