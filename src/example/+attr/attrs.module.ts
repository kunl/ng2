import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AttrsDemoComponent }   from './attrs.demo';
import { CusonmComponent, DisabledComponent } from './disabled';

@NgModule({
    imports: [],
    exports: [],
    declarations: [AttrsDemoComponent, CusonmComponent, DisabledComponent],
    providers: [],
})
export class AttrsDemoModule { }
