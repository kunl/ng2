import { Component, OnInit } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, UrlTree } from '@angular/router';

import { HttpService } from './http.service';
import { UserComponent } from './user.component';

import { User } from '../../service/model';

@Component({
    moduleId: module.id,
    selector: 'http',
    providers: [HTTP_PROVIDERS, HttpService],
    templateUrl: 'http.demo.html',
    styleUrls: ['http.demo.css'],
    directives: [ROUTER_DIRECTIVES]
})


@Routes([
    { path: '/user/:id', component: UserComponent }
])

export class HttpDemo implements OnInit {
    private users: User[] = [];
    
    
    constructor(private http_service: HttpService) { 
        this.http_service.getUsers().subscribe(data => this.users = data);
    }

    ngOnInit() { 
        
    }
    
    del(it:User){
            
        this.http_service.del(it.id).subscribe(
            data => {this.users = this.users.filter(item => item!=it)},
        
            err => alert(err)        
        );
    }
    

}