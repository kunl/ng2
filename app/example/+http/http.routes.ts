import {Routes} from '@angular/router';
import { RouterModule } from '@angular/router'
import {HttpDemo} from './http.demo';
import {UserComponent} from './user.component';

export const HttpRouters: Routes = [
    { 
        path: '',
        
        component: HttpDemo, 
        children: [
            { path: '', component: HttpDemo},
            { path: ':id', component: UserComponent }
        ]
    },
    
];

export const routing = RouterModule.forChild(HttpRouters)