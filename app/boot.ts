/**
 * Created by kunl on 2016/1/5-0005.
 */

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'

import {AppComponent} from './example/app.component';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);