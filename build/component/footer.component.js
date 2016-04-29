System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Footer = (function () {
                function Footer() {
                }
                Footer = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        styles: [
                            "\n        .footer {\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            text-align: center\n        }\n        "
                        ],
                        template: "\n        <div class=\"card footer\">\n            <div class=\"card-blcok\">\n                <a href=\"https://github.com/kunl/ng2\">github \u4E0A\u6709\u6E90\u7801\uFF0C\u6216\u8005 F12 sources \u9762\u677F\u4E5F\u53EF\u4EE5\u770B\u5230</a>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
        }
    }
});
//# sourceMappingURL=footer.component.js.map