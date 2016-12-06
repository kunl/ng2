import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { contactComponent } from './components/contact/contact.component';


import { rootRouterConfig } from './app.router'
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    contactComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
