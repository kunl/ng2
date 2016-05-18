
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


@Component({
    moduleId: module.id,
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
    templateUrl: 'app.component.html' 
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
    { path: '/http', component: HttpDemo },
])



export class AppComponent{
    constructor(private router: Router, injector: Injector){
        
        let user = injector.get('User');
        
        console.log(user)
    }
    
    ngOnInit(){
        // this.router.navigate(['/home']);
    }
}


let trains = [
    {
        from: 101,
        num: 1,
        process: 2,
        to: 103
    },
    
    {
        from: 101,
        num: 1,
        process: 2,
        to: 103
    },
    
    {
        from: 101,
        num: 1,
        process: 2,
        to: 103
    }
    
]