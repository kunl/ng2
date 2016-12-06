import { Routes } from '@angular/router';

// import { AboutComponent } from './components/about/about.component';
import { contactComponent } from './components/contact/contact.component';
import { HomeModule } from './components/home/home.module';


import { ListComponent } from './components/home/list/list.component';
import { DetailComponent } from './components/home/detail/detail.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    { path: 'about', loadChildren: './components/about/about.module#AboutModule'  },
    { path: 'contact', component: contactComponent },
    { path: 'news', loadChildren: './components/news/news.module#NewsModule' },

    { path: 'tabs', loadChildren: './components/tabs/tabs.module#TabsModule' },
    { path: 'd3', loadChildren: './components/d3/d3.module#D3Module' },
    { path: 'echarts', loadChildren: './components/echarts/echarts.module#EchartsModule' },
];