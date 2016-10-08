import { Component, OnInit, Output,
     Input, EventEmitter, Sanitizer,
     ViewChild,
      ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { 
    FormControl,
    FormBuilder, 
    NgForm, 
    FormGroup, 
    AbstractControl, 
    Validators, 
    AbstractFormGroupDirective 
} from '@angular/forms'

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id,
    selector: 'forms',
    template: `
    <div class="ui raised segment">
       <h2 class="ui header">Demo Form: Sku</h2>

       <form #f="ngForm" (ngSubmit)="onSubmit(f)"  class="ui form" novalidate>
           <div class="field">
               <input type="text" id="skuInput" placeholder="SKU" name="skuss" [(ngModel)]=person.name>
           </div>
           <div class="field">
               <input type="text" #name_a="ngModel" id="skuInput" pattern="/^A*/" placeholder="SKU" name="sss" ngModel="a33">
               <p *ngIf="name_a.valid">afsasf</p>
           </div>

            <input type="radio"  value="1" name=sex [(ngModel)]=person.sex>男 

            <input type="radio"  value="2" name=sex [(ngModel)]=person.sex>女


            <input type="checkbox"   name=check [(ngModel)]=person.check>
   
            <button md-fab>aafafsafs
            </button>
         <button class="ui button">Submit</button>
      </form>
    </div>
    `
})
export class FormsComponent implements OnInit {

    @ViewChild('f') myForm: NgForm;

    person = {
        name: 'a啊啊啊',
        sex: '1',
        check: true
    }

    ngOnInit(){
        console.log(this.myForm)
    }

    onSubmit(f: FormGroup) { 
           console.dir(f)
    }

}