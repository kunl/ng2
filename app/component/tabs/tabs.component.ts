import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList, Query } from 'angular2/core';


@Component({
    selector: 'tab',
    template: `
        <div [hidden]="!active">
            <ng-content></ng-content>
        </div>
    `
})

export class TabComponent {
    @Input('tabTitle') title: string;
    @Input() active = false;
}


@Component({
    selector: 'tabs',
    template: `
       <ul>
        <li *ngFor='#tab of tabs' (click)="selectTab(tab)" [class.active]="tab.active">
            <a href="javascript:;">{{tab.title}}</a>
        </li>
       </ul>
       <ng-content></ng-content>
    `
})


export class TabsComponent implements AfterContentInit {
  // 获取所有 TabComponent
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
 
  ngAfterContentInit() {
    
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    // content 初始化之后，判断是否有默认显示的 tab
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
    
  }
  
  selectTab(tab: TabComponent){
    
    // 隐藏所有  
    this.tabs.map(tab => tab.active = false);
    // 显示当前
    tab.active = true;
  }

}


export const TABS_DIRECTIVES = [TabsComponent, TabComponent];