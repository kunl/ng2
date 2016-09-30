import { NgModule,  } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormsDemoComponent, FormsGroupComponent }   from './forms.component';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule],
    exports: [FormsDemoComponent, FormsGroupComponent],
    declarations: [FormsDemoComponent, FormsGroupComponent],
    providers: [],
})
export class FormsDemoModule { }
