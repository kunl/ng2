/**
 * Created by kunl on 2016/1/5-0005.
 */

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router'
import {LocationStrategy, HashLocationStrategy} from '@angular/common/index';

import {AppComponent} from './example/app.component';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);