import { Component, OnInit, Injectable, ViewContainerRef, Renderer } from 'angular2/core';

@Injectable()
export class HostService{
    private num: number = 0;
    
    getNum(){
        return this.num;
    }
    
    setNum(n){
        console.log(n)
        this.num += n;
    }
}

@Component({
    selector: 'com1',
    template: '{{number}}'
})

export class com1 {

    
    constructor(private hs: HostService , viwRef: ViewContainerRef, render: Renderer){
         
        console.log(this.hs)
        console.log(viwRef.element)
    }
    
    get number(){
        return this.hs.getNum();
    }
}


@Component({
    selector: 'host',
    directives: [com1],
    providers: [HostService],
    template: `
        <com1></com1> <br>
        当前数字{{number}}
        <button (click)='changeNum()'>变一下</button>
    `
})
export class HostDemo implements OnInit {
    
    constructor( private data: HostService) {
        
    }

    ngOnInit() { }
    
    get number(){
        return this.data.getNum();
    }

    changeNum(){
        this.data.setNum(1);
    }
}