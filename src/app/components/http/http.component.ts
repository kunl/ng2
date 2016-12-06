import { Component, OnInit } from '@angular/core';

import { UserComponent, User } from './user/user.component';
import { HttpService } from './http.service';

@Component({
    selector: 'http',
    templateUrl: 'http.component.html',
    styles: [`
    .card-img-top{
        max-height: 100px;
    }
    .input-group-addon {
        width: 80px
    }
    .input-group {
        margin-bottom: 16px
    }
    `]
})

export class HttpComponent implements OnInit {
    private users: User[] = [];
    
    
    constructor(private http_service: HttpService) { 
       
    }

    ngOnInit() { 
        console.log(1)
        this.http_service.getUsers().subscribe(data => this.users = data);
    }
    
    del(it:User){
            
        this.http_service.del(it.id).subscribe(
            data => {this.users = this.users.filter(item => item!=it)},
        
            err => alert(err)        
        );
    }
    

}