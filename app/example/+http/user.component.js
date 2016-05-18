"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_service_1 = require('./http.service');
var UserComponent = (function () {
    function UserComponent(service, segment) {
        this.service = service;
        this.user = {
            name: '',
            age: 0,
            imageUrl: '',
            createdAt: 0,
            id: ''
        };
        console.log(segment);
        console.log('当前的 id:', segment.getParam('id'));
        this.id = segment.getParam('id');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUser(this.id).subscribe(function (user) {
            _this.user = user;
            console.log(user);
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.RouteSegment])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map