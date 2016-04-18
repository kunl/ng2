System.register(['angular2/core', '../../component/colors/color'], function(exports_1) {
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
    var core_1, color_1;
    var ColorDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_1_1) {
                color_1 = color_1_1;
            }],
        execute: function() {
            ColorDemo = (function () {
                function ColorDemo() {
                    this.configColor = '#333';
                }
                ColorDemo = __decorate([
                    core_1.Component({
                        selector: 'colors',
                        template: "\n        <p color='red'>\u7EA2\u8272\u6587\u5B57</p>\n        <p color='blue'>\u84DD\u8272\u6587\u5B57</p>\n        <p color='#f00'>\u84DD\u8272\u6587\u5B57</p>\n        \n        <p [color]='myColor'>\u9ED1\u8272\u6587\u5B57</p>\n    ",
                        directives: [color_1.ColorDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColorDemo);
                return ColorDemo;
            }());
            exports_1("ColorDemo", ColorDemo);
        }
    }
});
//# sourceMappingURL=color.demo.js.map