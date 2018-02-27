import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CounterComponent, WrapperContent, NgcontentComponent } from './ngcontent.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           {
            path: '',
            component: NgcontentComponent
           }
        ])
    ],
    declarations: [
        CounterComponent,
        WrapperContent,
        NgcontentComponent
    ]
})
export class NgcontentModule {}