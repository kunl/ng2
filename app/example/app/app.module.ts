class UserDefault{
    name =  'xxx';
    age = 111;
    url = 'http://127.0.0.1';
}


import { NgModule } from '@angular/core';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'



import {TabDemoModule} from '../+tabs/module';
import {HomeModule} from '../../component/home/home.module';
import {HttpDemoModule} from '../+http/http.module';


import {APP_ROUTER_PROVIDERS, routing} from './app.routes';

import { AppComponent } from './app.component';
import {HomeComponent} from '../../component/home/home.component';
import {Footer} from '../../component/footer.component';

import {TabsDemoComponent} from '../+tabs/tabs.demo';
import {LifecycleComponent} from '../lifecycle/lifecycle';

import {ColorDemo} from '../+colors/color.demo';
import {AttrsDemoComponent} from '../+attr/attrs.demo';
import {HostDemo} from '../+host/host.demo';
import {DynamicComponentDemo} from '../dynamic-component/parent';
import {ViewChildComponentDemo} from '../+view-child/viewchild.demo';

import {PaginationDemo} from '../pagination/pagination.demo';
import {DialogDemo} from '../+dialog/dialog.demo'


@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule, TabDemoModule, HttpDemoModule],
    declarations: [
        AppComponent,
        Footer, 
        HomeComponent, 
        ColorDemo,
        AttrsDemoComponent,
        HostDemo,
        DynamicComponentDemo,
        ViewChildComponentDemo,
        PaginationDemo,
        DialogDemo
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: 'User', useClass: UserDefault },
        ...APP_ROUTER_PROVIDERS
    ]
})

export class AppModule {

}