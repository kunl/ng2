
import {Component} from '@angular/core';
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

@Component({
    // moduleId: module.id,
    selector: 'example-app',
    directives: [ROUTER_DIRECTIVES, Footer],
    styles: [
        `
        .header-title {padding: 20px}
        .router-link-active{border-right: 4px solid #00dcc1}
        .content {padding: 20px; min-height: 70vh}
        nav li {cursor: pointer}
        `
    ],
    templateUrl: 'app/example/app.component.html' 
})

@Routes([
    { path: '/home',  component: HomeComponent },
    { path: '/lifecycle', component: LifecycleComponent },
    { path: '/tabs', component: TabsDemo },
    { path: '/attrs', component: AttrsDemoComponent },
    { path: '/host', component: HostDemo },
    { path: '/color',  component: ColorDemo },
    { path: '/dynamic', component: DynamicComponentDemo },
    { path: '/viewchild', component: ViewChildComponentDemo },
])



export class AppComponent{
    constructor(private router: Router){
        
    }
    
    ngOnInit(){
        this.router.navigate(['/home']);
    }
}