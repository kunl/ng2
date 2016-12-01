import { HomeComponent } from './component/home/home.component';
import { TabDemoModule } from './example/+tabs/module';
import { ColorDemo } from './example/+colors/color.demo';
import { AttrsDemoComponent } from './example/+attr/attrs.demo';
import { HostDemo } from './example/+host/host.demo';
import { DynamicComponentDemo } from './example/dynamic-component/parent';
import { ViewChildComponentDemo } from './example/+view-child/viewchild.demo';
import { PaginationDemo } from './example/pagination/pagination.demo';
import { DialogDemo } from './example/+dialog/dialog.demo';
import { D3DemoComponent } from './example/d3/d3.demo';
import { EchartsDemoComponent } from './example/echarts/echarts.demo';
import { FormsDemoComponent } from './example/forms/forms-demo';
var appRoutes = [
    { path: '', redirectTo: 'tabs', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tabs', loadChildren: function () { return TabDemoModule; } },
    { path: 'attrs', component: AttrsDemoComponent },
    { path: 'host', component: HostDemo },
    { path: 'color', component: ColorDemo },
    { path: 'dynamic', component: DynamicComponentDemo },
    { path: 'viewchild', component: ViewChildComponentDemo },
    { path: 'pagination', component: PaginationDemo },
    { path: 'dialog', component: DialogDemo },
    { path: 'd3', component: D3DemoComponent },
    { path: 'echarts', component: EchartsDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
    { path: 'http', loadChildren: function () { return System.import('./example/+http/http.module').then(function (module) { return module['HttpDemoModule']; }); } }
];
export { appRoutes };
//# sourceMappingURL=app.routes.js.map