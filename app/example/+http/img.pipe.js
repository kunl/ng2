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
var ImgPipe = (function () {
    function ImgPipe() {
    }
    ImgPipe.prototype.transform = function (value, args) {
        var no_img_url = 'http://tva4.sinaimg.cn/crop.8.26.613.613.180/6efef90djw8eo4z1ul47zj20hs0hsjsc.jpg';
        if (value) {
            return value.match('^http*') ? value : no_img_url;
        }
        else {
            return no_img_url;
        }
    };
    return ImgPipe;
}());
ImgPipe = __decorate([
    core_1.Pipe({
        name: 'img_pipe'
    }),
    __metadata("design:paramtypes", [])
], ImgPipe);
exports.ImgPipe = ImgPipe;
//# sourceMappingURL=img.pipe.js.map