import { NgModule } from '@angular/core';

import { ColorDemo }   from './color.demo';

import {ColorDirective} from '../../component/colors/color'

@NgModule({
    imports: [],
    exports: [],
    declarations: [ColorDemo, ColorDirective],
    providers: [],
})
export class ColorModule { }
