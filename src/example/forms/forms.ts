import { NgModule,  } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormsDemoComponent }   from './forms-demo';
import { FormsComponent }   from './forms.component';
import { FormsReactiveComponent }   from './forms-reactive.component';

import { MyValidator } from './validator'

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule],
    declarations: [ FormsComponent, FormsReactiveComponent, FormsDemoComponent],
    exports: [FormsDemoComponent],
    providers: [],
})
export class FormsDemoModule { }
