import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    template: `
        <div class="col-md-6">
            <div class="form">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">name</span>
                    <input type="text" class="form-control" placeholder="name">
                </div>
                
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">age</span>
                    <input type="number" class="form-control" placeholder="age">
                </div>
                
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">image</span>
                    <input type="text" class="form-control" placeholder="image_url">
                </div>
                
            </div>
        </div>
    
    `
})
export class UserComponent implements OnInit {
    constructor() { 
        console.log(333)
    }

    ngOnInit() { }


}