import { Routes, RouterModule} from '@angular/router';

// import { HomeComponent } from './component/home/home.component'
import { FooterComponent } from './component/footer.component'
import { HomeModule } from './component/home/home.module'


// import {TabDemoModule} from './example/+tabs/module';
// import {LifecycleComponent} from './example/lifecycle/lifecycle';

// import {ColorDemo} from './example/+colors/color.demo';
// import {AttrsDemoComponent} from './example/+attr/attrs.demo';
// import {HostDemo} from './example/+host/host.demo';
// import {DynamicComponentDemo} from './example/dynamic-component/parent';
// import {ViewChildComponentDemo} from './example/+view-child/viewchild.demo';


// import {PaginationDemo} from './example/pagination/pagination.demo';
// import {DialogDemo} from './example/+dialog/dialog.demo';
// import {D3DemoComponent} from './example/d3/d3.demo';
// import {EchartsDemoComponent} from './example/echarts/echarts.demo';
// import {FormsDemoComponent} from './example/forms/forms-demo';


const appRoutes: Routes = [
    { path: '',  redirectTo: 'home3', pathMatch: 'full' },
    { path: 'home3',  component: FooterComponent },
    // { path: 'home',  loadChildren: function loadHome(){ return HomeModule} },
    // { path: 'home2',  loadChildren: function loadHome(){ return HomeModule} },
    // { path: 'tabs', loadChildren: () =>  TabDemoModule},
    // { path: 'attrs', component: AttrsDemoComponent },
    // { path: 'host', component: HostDemo },
    // { path: 'color',  component: ColorDemo },
    // { path: 'dynamic', component: DynamicComponentDemo },
    // { path: 'viewchild', component: ViewChildComponentDemo },
    // { path: 'pagination', component: PaginationDemo },
    // { path: 'dialog', component: DialogDemo },
    // { path: 'd3', component: D3DemoComponent },
    // { path: 'echarts', component: EchartsDemoComponent },
    // { path: 'forms', component: FormsDemoComponent },
    // { path: 'http',   loadChildren: './example/+http/http.module#HttpDemoModule'}
];

export {appRoutes} 