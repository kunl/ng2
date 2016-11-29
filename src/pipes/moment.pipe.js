import { Pipe } from '@angular/core';
import * as moment from 'moment';
export var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        // let time = moment(value, args);
        // console.log(time)
        console.log(args);
        return moment(value).format(args);
    };
    MomentPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'moment_pipe'
                },] },
    ];
    /** @nocollapse */
    MomentPipe.ctorParameters = [];
    return MomentPipe;
}());
//# sourceMappingURL=moment.pipe.js.map