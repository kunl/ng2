import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DialogDirective} from './dialog'
import { DialogDemo } from './dialog.demo';
 
@NgModule({
    imports: [ BrowserModule ],
    // exports: [ DialogDemo ],
    declarations: [DialogDemo, DialogDirective],
    providers: [],
})
export class DialogModule { }
