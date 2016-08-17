/**
 * Created by kunl on 2016/1/5-0005.
 */

class UserDefault{
    name =  'xxx';
    age = 111;
    url = 'http://127.0.0.1';
}


import {AppComponent} from './example/app.component';
import {HomeComponent} from './component/home/home.component';
import {APP_ROUTER_PROVIDERS, routing} from './example/app.routes';


import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [
        // { provide: APP_BASE_HREF, useValue: './'},
        { provide: 'User', useClass: UserDefault },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        ...APP_ROUTER_PROVIDERS
    ]
})

export class BootModule {

}