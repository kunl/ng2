import {Directive, Component, OnInit, 
    AfterContentInit, HostBinding, OnChanges, ChangeDetectionStrategy } from '@angular/core';

interface Custom {
    isDisabled: boolean,
    isHidden: boolean,
    val: string
}

@Directive({
    selector: '[custom]',
    inputs: ['custom']
})

export class CusonmComponent {
    private _isDisabled: boolean = false;
    private _isHidden: boolean = false;
    private _value: string = '1111';
    
    private custom : Custom;
    
    @HostBinding('hidden') get isHidden(){
        return this.custom.isHidden;
    }
    
    @HostBinding('disabled') get isDisabled(){
        return this.custom.isDisabled;
    }
    
    @HostBinding('value') get value(){
        return this.custom.val;
    }
   
  
    
    ngAfterContentInit(){
        console.log(this.custom)
    }
}


@Component({
    selector: 'disabled',
    template: `
        <div class="form-group">disabled 属性
            <input type="text" [disabled]='isDisabled' class="form-control" value="默认的value">
            <input type="checkbox" [disabled]='isDisabled' class="form-control" checked>
        </div>
        
        <div>readonly 属性
            <input type="text" [readonly]='isDisabled' class="form-control" value="默认的value">
        </div>
        
        <hr>
         <p>通过一个对象控制 指令的 多个属性</p>
        <input type='text' [custom]='myCustom' value="11123">
        
        <input type='text' [custom]='getCustom()' value="11123">
        <br>
        <button class="btn btn-sm" (click)="changeAttrs()">切换</button>
    `,
    directives: [CusonmComponent]
})
export class DisabledComponent implements OnInit {
    
    private isDisabled: boolean = true;
    
    private const:number = 0;
    
    private myCustom: Custom = {
        isDisabled: true,
        isHidden: false,
        val: '改变值了'
    }
    
    constructor() { }

    changeAttrs(){
        this.isDisabled = this.isDisabled ? false : true;
        
        // this.myCustom.isDisabled = !this.myCustom.isDisabled
        // this.myCustom.isHidden = !this.myCustom.isHidden
        
        this.myCustom = {
             isDisabled : !this.myCustom.isDisabled,
             isHidden : !this.myCustom.isHidden,
             val: '-----------改变值了' + this.const
        }
        
        this.const ++;
        // console.log(this.myCustom)
    }
    
    ngOnInit() { }

    getCustom(){
        return {
            isDisabled : true,
            isHidden : false,
            val: '方法返回 对象 改变值了' + this.const
        }
    }

}