import { Pipe } from '@angular/core';
export var ImgPipe = (function () {
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
    ImgPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'img_pipe'
                },] },
    ];
    /** @nocollapse */
    ImgPipe.ctorParameters = [];
    return ImgPipe;
}());
//# sourceMappingURL=img.pipe.js.map