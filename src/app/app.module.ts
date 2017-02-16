import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { contactComponent } from './components/contact/contact.component';

import { DialogModule } from './components/dialog/dialog.module';

import { AdModule } from './dynamic-ad/ad.module'



import { LoadScriptService } from './service/loadScript.service'
import { BaiduMaptService } from './service/baiduMap.service'
import { rootRouterConfig } from './app.router'
@NgModule({
  imports: [
    BrowserModule,
    DialogModule,
    AdModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    contactComponent

  ],
  providers: [LoadScriptService, BaiduMaptService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
