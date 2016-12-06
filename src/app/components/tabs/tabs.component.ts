import {Component} from '@angular/core';


@Component({
    selector: 'tabs-demo',
    template: `
        <tabs>
            <tab tabTitle='下雨'>
            我市最近几天出现强降雨 <br>
            我市最近几天出现强降雨 <br>
            我市最近几天出现强降雨 <br>
            我市最近几天出现强降雨
            </tab>
            <tab tabTitle='夏天'>
            下周我市将正式开启夏天模式 <br>
            下周我市将正式开启夏天模式 <br>
            下周我市将正式开启夏天模式 <br>
            下周我市将正式开启夏天模式
            </tab>
            <tab tabTitle='闷热'>
            五月多雨闷热 <br>
            五月多雨闷热 <br>
            五月多雨闷热 <br>
            五月多雨闷热
            </tab>
        </tabs>
        <a href="https://github.com/kunl/ng2/blob/gh-pages/app/example/tabs/tabs.demo.ts" target="_blank">https://github.com/kunl/ng2/blob/gh-pages/app/example/tabs/tabs.demo.ts</a>
        <a href="https://github.com/kunl/ng2/blob/gh-pages/app/component/tabs/tabs.component.ts" target="_blank">https://github.com/kunl/ng2/blob/gh-pages/app/component/tabs/tabs.component.ts</a>
    `
})

export class TabsComponent{}