import { Component, OnInit, DynamicComponentLoader, ViewContainerRef, ComponentRef  } from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {ChildComponent} from './child';

@Component({
    selector: 'dynamic-demo',
    template: `
    <p> 
      <button class="btn" (click)="loaderAction()">弹出组件</button>
    </p>
    <section *ngIf="user">
    
        <div class="card">
        <div class="card-block">
            <h3 class="card-title">用户输入结果：</h3>
        </div>
            <div class="card-block">
                <blockquote>
                    <pre>
                    用户名：{{user.username}}
                    密码：{{user.password}}
                    </pre>
                </blockquote>
            </div>
        </div>
  
    </section>
    
    `,
    providers: [Title]
})
export class DynamicComponentDemo implements OnInit {
    constructor(
        private loader: DynamicComponentLoader,
        private vcRef: ViewContainerRef,
        title: Title
       
    ) {
        title.setTitle('自定义 title')
    }
    


    ngOnInit() { }
    
    loaderAction(){
        var child = this.loader.loadNextToLocation(ChildComponent, this.vcRef)
        .then((chidRef: ComponentRef) => {
            let instance = chidRef.instance;
            
            instance.ref = chidRef
            instance.name = '动态';
            
            instance.finally.subscribe((user)=>{
                chidRef.destroy();
                this.user = user;
                console.log('done');
                
            })
        })
    }

}