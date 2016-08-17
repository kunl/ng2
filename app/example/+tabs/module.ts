import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { TabsDemoComponent } from './tabs.demo';
@NgModule({
    imports: [CommonModule],
    declarations: [TabsDemoComponent],
    exports: [TabsDemoComponent]
})

export class TabDemoModule {}