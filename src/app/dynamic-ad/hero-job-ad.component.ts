import { Component, Input, AfterViewInit } from '@angular/core';

export interface AdComponent {
    data: any;
}

@Component({
    template: `
        <div class="job-ad">
            招聘 广告
            <h4>{{data?.name}}</h4>
            {{data?.bio}}
        </div>
    `
})
export class HeroJobAdComponent implements AdComponent {
  
    @Input() data: any = null;
    
 
}