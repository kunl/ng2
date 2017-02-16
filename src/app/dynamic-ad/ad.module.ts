import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdComponent } from './ad.component';
import { AdDirective } from './ad.directive';

import { AdBannerComponent } from './ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';

import { AdService } from './ad.service';

@NgModule({
    imports: [BrowserModule],
    exports: [AdComponent],
    entryComponents: [HeroJobAdComponent, HeroProfileComponent],
    declarations: [AdComponent, AdDirective, AdBannerComponent, HeroJobAdComponent, HeroProfileComponent],
    providers: [AdService],
})
export class AdModule { }

