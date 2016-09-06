import { Component, OnInit, Injectable, ViewContainerRef, Renderer, Input } from '@angular/core';

@Injectable()
export class HostService{
    private num: number = 0;
    
    getNum(){
        return this.num;
    }
    
    setNum(n: number){
        console.log(n)
        this.num += n;
    }
}

@Component({
    selector: 'com1',
    template: `
        {{number}}, {{name}}
    `
})

export class com1 {

    @Input() name:string;

    constructor(private hs: HostService ){
    }
    
    get number(){
        return this.hs.getNum();
    }
}


@Component({
    selector: 'host',
    template: `
        <com1 [name]='currname'></com1> <br>
        当前数字{{number}}
        <button class="btn btn-sm" (click)='changeNum()'>变一下</button>
        <br>
        <p>不同组件之间通过 service 进行数据交互</p>
        <a href="https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts" target="_blank">https://github.com/kunl/ng2/blob/gh-pages/app/example/host/host.demo.ts</a>
  
    `
})
export class HostDemo implements OnInit {
    
    constructor( private data: HostService) {
        
    }
    currname = ' host 的 name'
    ngOnInit() { }
    
    get number(){
        // getter 从 service 获取 num
        return this.data.getNum();
    }

    changeNum(){
        // 调用 service 设置num
        this.data.setNum(1);
    }
}