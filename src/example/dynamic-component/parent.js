import { Component, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
export var DynamicComponentDemo = (function () {
    function DynamicComponentDemo(vcRef, title) {
        this.vcRef = vcRef;
        title.setTitle('自定义 title');
    }
    DynamicComponentDemo.prototype.ngOnInit = function () { };
    DynamicComponentDemo.prototype.loaderAction = function () {
        // var child = this.loader.loadNextToLocation(ChildComponent, this.vcRef)
        // .then((chidRef) => {
        //     let instance = chidRef.instance;
        //     instance.ref = chidRef
        //     instance.name = '动态';
        //     instance.finally.subscribe((user: User)=>{
        //         chidRef.destroy();
        //         this.user = user;
        //         console.log('done');
        //     })
        // })
    };
    DynamicComponentDemo.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-demo',
                    template: "\n    <p> \n      <button class=\"btn\" (click)=\"loaderAction()\">\u5F39\u51FA\u7EC4\u4EF6</button>\n    </p>\n    <div *ngIf=\"user\">\n    \n        <div class=\"card\">\n        <div class=\"card-block\">\n            <h5 class=\"card-title\">\u7528\u6237\u8F93\u5165\u7ED3\u679C\uFF1A</h5>\n        </div>\n            <div class=\"card-block\">\n                <blockquote>\n                    <pre>\n                    \u7528\u6237\u540D\uFF1A{{user.username}}\n                    \u624B\u673A\u53F7\uFF1A{{user.telphone}}\n                    </pre>\n                </blockquote>\n            </div>\n        </div>\n  \n    </div>\n    \n    ",
                    providers: [Title]
                },] },
    ];
    /** @nocollapse */
    DynamicComponentDemo.ctorParameters = [
        { type: ViewContainerRef, },
        { type: Title, },
    ];
    return DynamicComponentDemo;
}());
//# sourceMappingURL=parent.js.map