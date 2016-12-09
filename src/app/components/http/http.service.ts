import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { User } from './user/user.component';

@Injectable()
export class HttpService {
    
    url = 'http://5737ef8cc0a1be11000e6895.mockapi.io/'
    
    users = this.url + 'users';

    constructor(private http: Http) { 
        
    }

    getUsers(): Observable<User[]>{
        return this.http.get( this.users).map(res => res.json());
    }
    
    getUserPromise(): Promise<User[]>{
        return this.http.get( this.users).toPromise().then(response => response.json().data as User[])
    }
    
    getUser(id:string): Observable<User>{
        return this.http.get(this.users +`/${id}`).map(res => res.json());
    }
    
    del(id:string){
        return this.http.delete(this.users + `/${id}`).map(res => res.json());
    }
}