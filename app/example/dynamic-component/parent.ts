import { Component, OnInit, DynamicComponentLoader, ElementRef, ComponentRef, AppViewManager, HostViewRef  } from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {ChildComponent} from './child';

@Component({
    selector: 'dynamic-demo',
    template: `
    <button class="btn" (click)="loaderAction()">加载组件</button>
    <button class="btn" (click)="detach()">detach</button>
    `,
    providers: [Title, HostViewRef]
})
export class DynamicComponentDemo implements OnInit {
    constructor(
        private loader: DynamicComponentLoader,
        private ref: ElementRef,
        private vm: AppViewManager,
        title: Title,
        private hv: HostViewRef
       
    ) {
        title.setTitle('自定义 title')
    }
    
    detach(){
        this.vm.destroyRootHostView(this.hv)
    }

    ngOnInit() { }
    
    loaderAction(){
        var child = this.loader.loadNextToLocation(ChildComponent, this.ref)
        .then((chidRef: ComponentRef) => {
            let instance = chidRef.instance;
            
            instance.ref = chidRef
            instance.name = '动态';
            
            instance.finally.subscribe(()=>{
                chidRef.dispose();
                console.log('done')
            })
        })
    }

}