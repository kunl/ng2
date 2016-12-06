import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import {TabsComponent} from './tabs.component';
import {TABS_DIRECTIVES} from './tab.directive';


@NgModule({
    imports: [CommonModule,
    RouterModule.forChild([
        {path: '', component: TabsComponent}
    ])],
    declarations: [ TabsComponent, TABS_DIRECTIVES],
    exports: [ TabsComponent ]
})

export class TabsModule {}