import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HomeModule } from '../../component/home/home.module';
import {Footer} from '../../component/footer.component';

import {TabDemoModule} from '../+tabs/module';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';


import {LifecycleComponent} from '../lifecycle/lifecycle';

import { ColorModule } from '../+colors/color.module';
import { AttrsDemoModule } from '../+attr/attrs.module';
import { HostModule } from '../+host/host.module';
import { DynamicModule } from '../dynamic-component/dynamic.module';
import { ViewChildComponentDemo, LabelItem } from '../+view-child/viewchild.demo';
import { PaginationModule } from '../pagination/pagination.module';
import { DialogModule } from '../+dialog/dialog.module';
import { D3Module } from '../d3/d3.demo';
import { EchartsDemoModule } from '../echarts/echarts.demo';
import { FormsDemoModule } from '../forms/forms';

import { PipeModule } from '../../pipes/pipe.module';


export class UserDefault{
    name =  'xxx';
    age = 111;
    url = 'http://127.0.0.1';
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { useHash: true }) ,
    
        
        HomeModule,        
        TabDemoModule,
        AttrsDemoModule,
        ColorModule,
        HostModule,
        DynamicModule,

        
        PaginationModule,
        DialogModule,
        D3Module,
        EchartsDemoModule,
        FormsDemoModule,
        PipeModule
    ],
    declarations: [
        AppComponent,
        Footer, 

        LabelItem,
        ViewChildComponentDemo,

        LifecycleComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: 'User', useClass: UserDefault }
    ]
})

export class AppModule {}