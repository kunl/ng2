import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../service/model';


@Injectable()
export class HttpService {
    
    url = 'http://5737ef8cc0a1be11000e6895.mockapi.io/'
    
    users = this.url + 'users';

    constructor(private http: Http) { 
        
    }
    

    getUsers(): Observable<User[]>{
        return this.http.get( this.users).map(res => res.json());
    }
    
    getUser(id:string): Observable<User>{
        return this.http.get(this.users +`/${id}`).map(res => res.json());
    }
    
    del(id:string){
        return this.http.delete(this.users + `/${id}`).map(res => res.json());
    }
}