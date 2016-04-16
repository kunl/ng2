import {Component} from 'angular2/core';
import {TABS_DIRECTIVES} from '../../component/tabs/tabs.component';

@Component({
    selector: 'tabs-demo',
    template: `
        <tabs>
            <tab tabTitle='下雨'>我市最近几天出现强降雨</tab>
            <tab tabTitle='夏天'>下周我市将正式开启夏天模式</tab>
        </tabs>
    `,
    directives: [TABS_DIRECTIVES]
})

export class TabsDemo{}