import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
     BrowserModule
    ],
     exports: [HomeComponent],
    declarations: [
      HomeComponent
    ]
})

export class HomeModule {}