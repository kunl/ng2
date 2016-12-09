import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [FormsModule],
    declarations: [ DialogComponent ],
    exports: [DialogComponent]

})

export class DialogModule {}