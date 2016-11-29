import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {HttpDemo} from './http.demo';
import {UserComponent} from './user.component';

export const HttpRouters = [
    { 
        path: '',
        component: HttpDemo, 
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: HttpDemo},
            { path: ':id', component: UserComponent }
        ]
    }
    
];