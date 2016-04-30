
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from '../component/home/home.component';
import {Footer} from '../component/footer.component';

import {TabsDemo} from './tabs/tabs.demo';
import {LifecycleComponent} from './lifecycle/lifecycle';

import {ColorDemo} from './colors/color.demo';
import {AttrsDemoComponent} from './attr/attrs.demo';
import {HostDemo} from './host/host.demo';
import {DynamicComponentDemo} from './dynamic-component/parent';
import {ViewChildComponentDemo} from './view-child/viewchild.demo';

@Component({
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
    template: `
        <div class="container-fluid">
            <div class="row"><p class="header-title">Angular2 demo of kunl</p></div>
            <div class="row">
                <div class="col-sm-2">
                    <nav class="list-group">
                      <li class="list-group-item" [routerLink]='["Home"]'>Home</li>
                      <!-- <li class="list-group-item" [routerLink]='["LifecycleComponent"]'>Lifecycle </li> -->
                        <li class="list-group-item" [routerLink]='["TabsDemo"]'>Tabs demo</li>
                        <li class="list-group-item" [routerLink]='["ColorDemo"]'>Colors demo</li>
                        <li class="list-group-item" [routerLink]='["AttrsDemoComponent"]'>Attrs demo</li>
                        <li class="list-group-item" [routerLink]='["HostDemo"]'>Host demo</li>
                        <li class="list-group-item" [routerLink]='["DynamicComponentDemo"]'>Dynamic Component demo</li>
                        <li class="list-group-item" [routerLink]='["ViewChildComponentDemo"]'>ViewChild demo</li>
                    </nav>
                </div>
                <div class="col-sm-10">
                
                    <div class="card content">
                        <router-outlet></router-outlet>
                    </div>
                    
                </div>
            </div>
            <footer></footer>
        </div>
    `
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/lifecycle', name: 'LifecycleComponent', component: LifecycleComponent },
    { path: '/tabs', name: 'TabsDemo', component: TabsDemo },
    { path: '/attrs', name: 'AttrsDemoComponent', component: AttrsDemoComponent },
    { path: '/host', name: 'HostDemo', component: HostDemo },
    { path: '/color', name: 'ColorDemo', component: ColorDemo },
    { path: '/dynamic', name: 'DynamicComponentDemo', component: DynamicComponentDemo },
    { path: '/viewchild', name: 'ViewChildComponentDemo', component: ViewChildComponentDemo },
])

export class AppComponent{

}