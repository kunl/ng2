import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: AboutComponent
        }
    ])],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
