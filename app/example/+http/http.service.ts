import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {
    
    url = 'http://5737ef8cc0a1be11000e6895.mockapi.io/'
    
    users = this.url + 'users';

    constructor(private http: Http) { 
        
    }
    

    getUsers(): Observable<any>{
        return this.http.get( this.users)
    }
    
    getUser(id:string){
        return this.http.get(this.users +`/${id}`);
    }
}