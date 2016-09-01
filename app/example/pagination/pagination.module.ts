import { NgModule } from '@angular/core';

import { PaginationDirective } from './pagination';
import { PaginationDemo }   from './pagination.demo';

@NgModule({
    imports: [],
    exports: [],
    declarations: [PaginationDemo, PaginationDirective],
    providers: [],
})
export class NameModule { }
