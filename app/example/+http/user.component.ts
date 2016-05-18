import { Component, OnInit, Input } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { HttpService } from './http.service';
import { User } from '../../service/model';


@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    private id:string;
    private user: User = {
        name: '',
        age: 0,
        imageUrl: '',
        createdAt: 0,
        id: ''
    };
    
    constructor(private service: HttpService, segment: RouteSegment) { 
        console.log(segment)
        console.log('当前的 id:',segment.getParam('id'))
        this.id = segment.getParam('id');
    }

        
    
    ngOnInit(){
        this.service.getUser(this.id).subscribe(user => {
            this.user = user
            console.log(user)
        });
    }


}