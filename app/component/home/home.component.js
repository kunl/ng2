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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = (function () {
    function HomeComponent(el, em) {
        this.el = el;
        this.em = em;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var button = document.createElement('button');
        button.innerText = '点击';
        this.em.addEventListener(button, 'click', this.say);
        this.el.nativeElement.appendChild(button);
    };
    HomeComponent.prototype.say = function (e) {
        console.log(3333, e);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n        <h1>kunl \u7684 Angular2 demo </h1>\n        \n        "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map