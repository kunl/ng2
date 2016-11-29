import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child';
import { DynamicComponentDemo } from './parent';


@NgModule({
    imports: [ BrowserModule, FormsModule ],
    exports: [],
    declarations: [DynamicComponentDemo, ChildComponent],
    providers: [],
})
export class DynamicModule { }
