import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
    getAds() {
        return [

            new AdItem(HeroJobAdComponent, { name: '测试1', bio: '测试广告1' }),
            new AdItem(HeroJobAdComponent, { name: '测试2', bio: '测试广告2' }),

            new AdItem(HeroProfileComponent, { name: '测试3', bio: '测试广告3' }),
            new AdItem(HeroProfileComponent, { name: '测试4', bio: '测试广告4' }),
        ]
    }
}