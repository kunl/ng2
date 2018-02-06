import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../http.service';
import { User } from '../../../model/';
export { User }

@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    private id: string = '10';
    user: User = {
        name: '',
        age: 0,
        imageUrl: '',
        createdAt: 0,
        id: ''
    };

    constructor(private _service: HttpService, public _route: ActivatedRoute) {
        // console.log(_route)
        // console.log('当前的 id:',.getParam('id'))
        // this.id = params.getParam('id');
    }



    ngOnInit() {
        this._route.params.map(params => params['id'])
            .subscribe(id => {
                this.getUserById(id);
            })
    }

    getUserById(id) {
        this._service.getUser(id).subscribe(user => {
            this.user = user
            console.log(user)
        });
    }

}