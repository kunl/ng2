import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
    selector: 'ad',
    template: `
    
        <div>
             <ad-banner [ads]="ads"></ad-banner>       
        </div>
    
    `
})

export class AdComponent implements OnInit {
    ads: AdItem[];

    constructor(private adService: AdService) {}

    ngOnInit() {
        this.ads = this.adService.getAds();
 
    }
}