import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const RouterConfig: Routes = [


  {
    path: '', component: HomeComponent,
    children: [
      { path: 'detail/:id', component: DetailComponent },

    ]
  },


];