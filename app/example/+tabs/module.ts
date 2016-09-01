import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {TABS_DIRECTIVES} from '../../component/tabs/tabs.component';

import { TabsDemoComponent } from './tabs.demo';
@NgModule({
    imports: [CommonModule],
    declarations: [TabsDemoComponent, TABS_DIRECTIVES],
    exports: [TabsDemoComponent]
})

export class TabDemoModule {}