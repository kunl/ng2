import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';

@Component({
    selector: 'ad-banner',
    template: `
        <div>
            <h2>侧栏广告位</h2>
            <template ad-host></template>          
        </div>
    `
})

export class AdBannerComponent implements AfterViewInit, OnDestroy {
    interval: any;
    @Input() ads: AdItem[];
    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {

        this.loadComponent();
        this.getAds();

    }

    loadComponent() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;

        let adItem = this.ads[this.currentAddIndex];

        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);

        componentRef.instance.data = adItem.data;

        this._cdr.detectChanges();
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 2000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}