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


import { AppComponent } from './app.component';
import {TabDemoModule} from '../+tabs/module';



import {HomeModule} from '../../component/home/home.module';
import {APP_ROUTER_PROVIDERS, routing} from './app.routes';
import {Footer} from '../../component/footer.component';



@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule, HomeModule, TabDemoModule],
    declarations: [Footer],
    bootstrap: [AppComponent],
    providers: [
        { provide: 'User', useClass: UserDefault },
        ...APP_ROUTER_PROVIDERS
    ]
})

export class AppModule {

}