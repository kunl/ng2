import { Directive, Component, ViewChild, AfterViewInit, 
    AfterContentInit, ElementRef, Renderer, 
    OnInit } from 'angular2/core';

@Directive({selector: 'label'})
export class LabelItem{}

@Component({
    selector: 'view-child',
    styles: ['.focused{border-color: red}'],
    template:`
        <div class="form-group row">
            <label for="input-email" class="col-sm-1 form-control-label">邮箱</label>
            <div class="col-sm-5">
            <input #myemail type="email" class="form-control" id="input-email" placeholder="Email">
            </div>
        </div>
        <div class="form-group row">
            <label for="input-username" class="col-sm-1 form-control-label">用户名</label>
            <div class="col-sm-5">
            <input type="text" class="form-control" id="input-username" placeholder="Password">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-5">
                <div class="card">{{it}}</div>
            </div>
        </div>
    
    `,
})
export class ViewChildComponentDemo implements OnInit, AfterViewInit {
    
    private @ViewChild('myemail') emailRef: ElementRef;
    private username: any;

    constructor(private _el: ElementRef, private _render: Renderer) {
        let dom = this._el.nativeElement;
        
        let inputs = dom.querySelectorAll('input');
        console.log(dom) // 可以获取到当前的 dom element
        console.log(inputs) // 获取不到 input， 只能在 OnInit 之后获取到
    }

    ngOnInit() {
        // constructor 之后并只能获取到 eleremt ref
        // component 初始化之后 
        this.username = this._el.nativeElement.querySelector('#input-username');
        
        // 添加 class 
        this._render.setElementClass(this.username, 'focused', true)
        
        // 设置为 disabled
        this._render.setElementProperty(this.username, 'disabled', 'true')
        
        console.log(this.username)
    }
    
    ngAfterViewInit() {
        console.log(this._render)
        // view 初始化之后， this.emailRef 才有值
        let email = this.emailRef.nativeElement;
        this._render.setElementClass(email, 'focused', true)
        
        // 设置默认值
        this._render.setElementProperty(email, 'value', 'test@xxx.com')
        
    }

   
}