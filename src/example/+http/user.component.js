import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './http.service';
export var UserComponent = (function () {
    function UserComponent(service, route) {
        this.service = service;
        this.id = '10';
        this.user = {
            name: '',
            age: 0,
            imageUrl: '',
            createdAt: 0,
            id: ''
        };
        console.log(route);
        // console.log('当前的 id:',.getParam('id'))
        // this.id = params.getParam('id');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUser(this.id).subscribe(function (user) {
            _this.user = user;
            console.log(user);
        });
    };
    UserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user',
                    templateUrl: 'user.component.html'
                },] },
    ];
    /** @nocollapse */
    UserComponent.ctorParameters = [
        { type: HttpService, },
        { type: ActivatedRoute, },
    ];
    return UserComponent;
}());
//# sourceMappingURL=user.component.js.map