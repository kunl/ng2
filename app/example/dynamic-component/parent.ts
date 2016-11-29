import { Component, OnInit,  ViewContainerRef, ComponentRef  } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ChildComponent} from './child';
import {User} from './user';
@Component({
    selector: 'dynamic-demo',
    template: `
    <p> 
      <button class="btn" (click)="loaderAction()">弹出组件</button>
    </p>
    <div *ngIf="user">
    
        <div class="card">
        <div class="card-block">
            <h5 class="card-title">用户输入结果：</h5>
        </div>
            <div class="card-block">
                <blockquote>
                    <pre>
                    用户名：{{user.username}}
                    手机号：{{user.telphone}}
                    </pre>
                </blockquote>
            </div>
        </div>
  
    </div>
    
    `,
    providers: [Title]
})
export class DynamicComponentDemo implements OnInit {
    user: User;
    constructor(
        private vcRef: ViewContainerRef,
        title: Title
       
    ) {
        title.setTitle('自定义 title')
    }
    


    ngOnInit() { }
    
    loaderAction(){
        // var child = this.loader.loadNextToLocation(ChildComponent, this.vcRef)
        // .then((chidRef) => {
        //     let instance = chidRef.instance;
            
        //     instance.ref = chidRef
        //     instance.name = '动态';
            
        //     instance.finally.subscribe((user: User)=>{
        //         chidRef.destroy();
        //         this.user = user;
        //         console.log('done');
                
        //     })
        // })
    }

}