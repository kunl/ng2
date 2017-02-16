import { Component, Input } from '@angular/core';

export interface AdComponent {
    data: any;
}


@Component({
    template: `
        <div class="hero-profile">
            求职广告
            <h4>{{data.name}}</h4>
            <p>{{data.bio}}</p>
        </div>

    `
})

export class HeroProfileComponent implements AdComponent {
    @Input() data: any;


}