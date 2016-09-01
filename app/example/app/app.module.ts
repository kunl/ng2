class UserDefault{
    name =  'xxx';
    age = 111;
    url = 'http://127.0.0.1';
}


import { NgModule } from '@angular/core';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import {TabDemoModule} from '../+tabs/module';
import {HomeModule} from '../../component/home/home.module';


import {routing} from './app.routes';

import { AppComponent } from './app.component';
import  {HomeComponent } from '../../component/home/home.component';
import {Footer} from '../../component/footer.component';

import {TabsDemoComponent} from '../+tabs/tabs.demo';
import {LifecycleComponent} from '../lifecycle/lifecycle';

import { ColorModule } from '../+colors/color.module';
import {AttrsDemoModule} from '../+attr/attrs.module';
import {HostDemo} from '../+host/host.demo';
import {DynamicComponentDemo} from '../dynamic-component/parent';
import {ViewChildComponentDemo} from '../+view-child/viewchild.demo';

import {PaginationDemo} from '../pagination/pagination.demo';
import { DialogModule } from '../+dialog/dialog.module';
import {D3DemoComponent} from '../d3/d3.demo';


@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule, 
    
    TabDemoModule,
    AttrsDemoModule,
    ColorModule,
    DialogModule
    ],
    declarations: [
        AppComponent,
        Footer, 
        HomeComponent, 
        HostDemo,
        DynamicComponentDemo,
        ViewChildComponentDemo,
        PaginationDemo,
        D3DemoComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: 'User', useClass: UserDefault },
    ]
})

export class AppModule {}