import {RouterConfig} from '@angular/router';

import {HttpDemo} from './http.demo';
import {UserComponent} from './user.component';

export const HttpRouters: RouterConfig = [
    { 
        path: 'http',
        component: HttpDemo, 
        children: [
            { path: '', component: HttpDemo},
            { path: ':id', component: UserComponent }
        ]
    },
    
];