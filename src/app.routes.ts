import { Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './component/home/home.component';
import {Footer} from './component/footer.component';

import {TabsDemoComponent} from './example/+tabs/tabs.demo';
import {LifecycleComponent} from './example/lifecycle/lifecycle';

import {ColorDemo} from './example/+colors/color.demo';
import {AttrsDemoComponent} from './example/+attr/attrs.demo';
import {HostDemo} from './example/+host/host.demo';
import {DynamicComponentDemo} from './example/dynamic-component/parent';
import {ViewChildComponentDemo} from './example/+view-child/viewchild.demo';


import {PaginationDemo} from './example/pagination/pagination.demo';
import {DialogDemo} from './example/+dialog/dialog.demo';
import {D3DemoComponent} from './example/d3/d3.demo';
import {EchartsDemoComponent} from './example/echarts/echarts.demo';
import {FormsDemoComponent} from './example/forms/forms-demo';

export declare var System;


const appRoutes: Routes = [
    { path: '',  redirectTo: 'tabs', pathMatch: 'full' },
    // { path: 'home',  component: HomeComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'attrs', component: AttrsDemoComponent },
    { path: 'host', component: HostDemo },
    { path: 'color',  component: ColorDemo },
    { path: 'dynamic', component: DynamicComponentDemo },
    { path: 'viewchild', component: ViewChildComponentDemo },

    { path: 'http',   loadChildren: () => System.import('./example/+http/http.module').then(module => module['HttpDemoModule']) },

    { path: 'pagination', component: PaginationDemo },
    { path: 'dialog', component: DialogDemo },
    { path: 'd3', component: D3DemoComponent },
    { path: 'echarts', component: EchartsDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
];

export {appRoutes} 