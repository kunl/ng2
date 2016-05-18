/**
 * Created by kunl on 2016/1/5-0005.
 */

class UserDefault{
    name =  'xxx';
    age = 111;
    url = 'http://127.0.0.1';
}


import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router'
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './example/app.component';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide('User', {useClass: UserDefault})
]);