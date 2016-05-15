import { Component, OnInit } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HttpService } from './http.service';
import { UserComponent } from './user.component';

@Component({
    moduleId: module.id,
    selector: 'http',
    providers: [HTTP_PROVIDERS, HttpService],
    templateUrl: 'http.demo.html',
    styleUrls: ['http.demo.css'],
    directives: [ROUTER_DIRECTIVES]
})


@Routes([
    { path: '/user', component: UserComponent }
])

export class HttpDemo implements OnInit {
    private users: any;
    
    link = './user(abc:user\//def:user)';
    
    constructor(private http_service: HttpService) { 
        console.log(444)
    }

    ngOnInit() { 
        this.http_service.getUsers().subscribe(data => {
            this.users = data.json();
        })
    }
    

}