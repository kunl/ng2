
import {Component, Injector} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


let routers  = [
    { path: '/home', nick: '首页' },
    // { path: '/lifecycle', nick: '生命周期' },
    { path: '/tabs', nick: 'tabs' },
    { path: '/attrs', nick: '属性 Directive' },
    { path: '/host', nick: 'host' },
    { path: '/color', nick: 'color demo' },
    { path: '/dynamic', nick: '动态组件' },
    { path: '/viewchild', nick: 'viewchild' },
    { path: '/http', nick: 'http' },
    { path: '/pagination', nick: '分页' },
    { path: '/dialog', nick: '模态框' },
];

@Component({
    moduleId: module.id,
    selector: 'example-app',
    styles: [
        `
        .header-title {padding: 0 20px}
        .router-link-active{border-right: 4px solid #00dcc1}
        .content {padding: 0 20px; min-height: 70vh}
        nav li {cursor: pointer}
        `
    ],
    templateUrl: 'app.component.html' 
})



export class AppComponent{
    
    routers = routers;
    
    constructor(injector: Injector){
        
        let user = injector.get('User');
        
        console.log(user)
    }
    
    ngOnInit(){
        
    }
}
