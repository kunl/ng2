import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PaginationDirective } from './pagination';
import { PaginationDemo }   from './pagination.demo';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    exports: [],
    declarations: [PaginationDemo, PaginationDirective],
    providers: [],
})
export class PaginationModule { }
