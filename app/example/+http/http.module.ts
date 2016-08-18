import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './http.routes';


import { HttpDemo } from './http.demo';
import { UserComponent } from './user.component';
@NgModule({
    imports: [routing, CommonModule, FormsModule],
    exports: [HttpDemo, UserComponent],
    declarations: [HttpDemo, UserComponent]
})

export default class HttpDemoModule {

}