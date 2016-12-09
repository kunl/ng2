import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HttpService } from './http.service';
import { HttpComponent } from './http.component';
import { UserComponent } from './user/user.component';

import { ImgPipe } from './img.pipe'
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: HttpComponent, 
            children: [
                // { path: '', redirectTo: 'list', pathMatch: 'full' },
                { path: 'list', component: HttpComponent},
                { path: 'user/:id', component: UserComponent }
            ]
        }
    ]),HttpModule, CommonModule, FormsModule, PipeModule],

    declarations: [HttpComponent, UserComponent, ImgPipe],
    providers: [HttpService]
})

export class Http_Module {

}