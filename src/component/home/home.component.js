import { Component, ElementRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
export var HomeComponent = (function () {
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
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'home',
                    template: "\n        <h1>kunl \u7684 Angular2 demo </h1>\n        "
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = [
        { type: ElementRef, },
        { type: EventManager, },
    ];
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map