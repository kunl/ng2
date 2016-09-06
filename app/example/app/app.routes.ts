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


// import {HttpRouters} from '../+http/http.routes';
// import { HttpDemoModule } from '../+http/http.module';

import {PaginationDemo} from '../pagination/pagination.demo';
import {DialogDemo} from '../+dialog/dialog.demo';
import {D3DemoComponent} from '../d3/d3.demo';

const appRoutes: Routes = [
    { path: '',  redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'attrs', component: AttrsDemoComponent },
    { path: 'host', component: HostDemo },
    { path: 'color',  component: ColorDemo },
    { path: 'dynamic', component: DynamicComponentDemo },
    { path: 'viewchild', component: ViewChildComponentDemo },

    { path: 'http', loadChildren: 'app/example/+http/http.module'},
    // ...HttpRouters,
    
    { path: 'pagination', component: PaginationDemo },
    { path: 'dialog', component: DialogDemo },
    { path: 'd3', component: D3DemoComponent },
];

let routing = RouterModule.forRoot(appRoutes, { useHash: true }) 
export {routing} 