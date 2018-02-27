import { Routes } from '@angular/router';

// import { AboutComponent } from './components/about/about.component';
import { contactComponent } from './components/contact/contact.component';
import { HomeModule } from './components/home/home.module';


import { ListComponent } from './components/home/list/list.component';
import { DetailComponent } from './components/home/detail/detail.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', component: contactComponent },

    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    { path: 'about', loadChildren: './components/about/about.module#AboutModule'  },
    { path: 'news', loadChildren: './components/news/news.module#NewsModule' },
    

    { path: 'colors', loadChildren: './components/colors/colors.module#ColorsModule' },
    { path: 'tabs', loadChildren: './components/tabs/tabs.module#TabsModule' },
    { path: 'http', loadChildren: './components/http/http.module#Http_Module' },
    { path: 'd3', loadChildren: './components/d3/d3.module#D3Module' },
    { path: 'map', loadChildren: './components/map/baidu_map.module#BaiduMapModule' },
    { path: 'echarts', loadChildren: './components/echarts/echarts.module#EchartsModule' },
    { path: 'ngcontent', loadChildren: './components/ngcontent/ngcontent.module#NgcontentModule'},
    { path: 'range', loadChildren: './components/range/range.module#RangeModule'}
];