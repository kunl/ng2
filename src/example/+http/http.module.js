import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpRouters } from './http.routes';
import { HttpDemo } from './http.demo';
import { UserComponent } from './user.component';
import { ImgPipe } from './img.pipe';
import { PipeModule } from '../../pipes/pipe.module';
export var HttpDemoModule = (function () {
    function HttpDemoModule() {
    }
    HttpDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(HttpRouters), CommonModule, FormsModule, PipeModule],
                    exports: [HttpDemo, UserComponent],
                    declarations: [HttpDemo, UserComponent, ImgPipe]
                },] },
    ];
    /** @nocollapse */
    HttpDemoModule.ctorParameters = [];
    return HttpDemoModule;
}());
//# sourceMappingURL=http.module.js.map