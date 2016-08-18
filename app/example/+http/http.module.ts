import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HttpDemo } from './http.demo';
import { UserComponent } from './user.component';
@NgModule({
    imports: [RouterModule, CommonModule, FormsModule],
    exports: [HttpDemo, UserComponent],
    declarations: [HttpDemo, UserComponent]
})

export class HttpDemoModule {

}