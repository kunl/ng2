import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './component/home/home.module';
import { Footer } from './component/footer.component';
import { TabDemoModule } from './example/+tabs/module';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './example/lifecycle/lifecycle';
import { ColorModule } from './example/+colors/color.module';
import { AttrsDemoModule } from './example/+attr/attrs.module';
import { HostModule } from './example/+host/host.module';
import { DynamicModule } from './example/dynamic-component/dynamic.module';
import { ViewChildComponentDemo, LabelItem } from './example/+view-child/viewchild.demo';
import { PaginationModule } from './example/pagination/pagination.module';
import { DialogModule } from './example/+dialog/dialog.module';
import { D3Module } from './example/d3/d3.demo';
import { EchartsDemoModule } from './example/echarts/echarts.demo';
import { FormsDemoModule } from './example/forms/forms';
import { PipeModule } from './pipes/pipe.module';
export var UserDefault = (function () {
    function UserDefault() {
        this.name = 'xxx';
        this.age = 111;
        this.url = 'http://127.0.0.1';
    }
    return UserDefault;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpModule,
                        FormsModule,
                        RouterModule.forRoot(appRoutes, { useHash: true }),
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map