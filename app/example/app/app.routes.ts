import { Routes, RouterModule} from '@angular/router';


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
import {DialogDemo} from '../+dialog/dialog.demo';
import {D3DemoComponent} from '../d3/d3.demo';
import {EchartsDemoComponent} from '../echarts/echarts.demo';
import {FormsDemoComponent} from '../forms/forms-demo';

declare var System;


const appRoutes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'attrs', component: AttrsDemoComponent },
    { path: 'host', component: HostDemo },
    { path: 'color',  component: ColorDemo },
    { path: 'dynamic', component: DynamicComponentDemo },
    { path: 'viewchild', component: ViewChildComponentDemo },

    { path: 'http',   loadChildren: () => System.import('../+http/http.module').then(module => module['HttpDemoModule']) },

    { path: 'pagination', component: PaginationDemo },
    { path: 'dialog', component: DialogDemo },
    { path: 'd3', component: D3DemoComponent },
    { path: 'echarts', component: EchartsDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
];

export {appRoutes} 