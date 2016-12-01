import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  exports: [HomeComponent],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }