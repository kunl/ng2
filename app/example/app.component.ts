
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from '../component/home/home.component';
import {Footer} from '../component/footer.component';

import {TabsDemo} from './tabs/tabs.demo';
import {ColorDemo} from './colors/color.demo';

@Component({
    selector: 'example-app',
    directives: [ROUTER_DIRECTIVES, Footer],
    styles: [
        `
        .header-title {padding: 20px}
        .router-link-active{border-right: 4px solid #00dcc1}
        .content {padding: 20px; min-height: 70vh}
        `
    ],
    template: `
        <div class="container-fluid">
            <div class="row"><p class="header-title">Angular2 demo of kunl</p></div>
            <div class="row">
                <div class="col-sm-2">
                    <nav class="list-group">
                        <li class="list-group-item" [routerLink]='["Home"]'>Home</li>
                        <li class="list-group-item" [routerLink]='["TabsDemo"]'>Tabs demo</li>
                        <li class="list-group-item" [routerLink]='["ColorDemo"]'>Colors demo</li>
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
    { path: '/tabs', name: 'TabsDemo', component: TabsDemo },
    { path: '/colors', name: 'ColorDemo', component: ColorDemo }
])

export class AppComponent{

}