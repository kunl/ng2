
import {Component, Injector} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from '../component/home/home.component';
import {Footer} from '../component/footer.component';

import {TabsDemo} from './+tabs/tabs.demo';
import {LifecycleComponent} from './lifecycle/lifecycle';

import {ColorDemo} from './+colors/color.demo';
import {AttrsDemoComponent} from './+attr/attrs.demo';
import {HostDemo} from './+host/host.demo';
import {DynamicComponentDemo} from './dynamic-component/parent';
import {ViewChildComponentDemo} from './+view-child/viewchild.demo';

import {HttpDemo} from './+http/http.demo';
import {PaginationDemo} from './pagination/pagination.demo';


import {isPresent} from '@angular/compiler/src/facade/lang'

let routers  = [
    { path: '/home',  component: HomeComponent, nick: '首页' },
    // { path: '/lifecycle', component: LifecycleComponent, nick: '声明周期' },
    { path: '/tabs', component: TabsDemo, nick: 'tabs' },
    { path: '/attrs', component: AttrsDemoComponent, nick: '属性 Directive' },
    { path: '/host', component: HostDemo, nick: 'host' },
    { path: '/color',  component: ColorDemo, nick: 'color demo' },
    { path: '/dynamic', component: DynamicComponentDemo, nick: '动态组件' },
    { path: '/viewchild', component: ViewChildComponentDemo, nick: 'viewchild' },
    { path: '/http', component: HttpDemo, nick: 'http' },
    { path: '/pagination', component: PaginationDemo, nick: '分页' },
];

@Component({
    moduleId: module.id,
    selector: 'example-app',
    directives: [ROUTER_DIRECTIVES, Footer],
    styles: [
        `
        .header-title {padding: 0 20px}
        .router-link-active{border-right: 4px solid #00dcc1}
        .content {padding: 20px; min-height: 70vh}
        nav li {cursor: pointer}
        `
    ],
    templateUrl: 'app.component.html' 
})

@Routes(routers.map(_ => { return {path: _.path, component: _.component}}))

export class AppComponent{
    
    routers = routers;
    
    constructor(private router: Router, injector: Injector){
        
        let user = injector.get('User');
        
        console.log(user)
    }
    
    ngOnInit(){
        
    }
}
