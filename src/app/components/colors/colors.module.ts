import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ColorsComponent }   from './colors.component';
import { ColorDirective } from './colors.directive'

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: ColorsComponent}])],
    exports: [],
    declarations: [ColorsComponent, ColorDirective],
    providers: [],
})
export class ColorsModule { }
