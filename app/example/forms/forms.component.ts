import { Component, OnInit, Output,
     Input, EventEmitter, Sanitizer,
     ViewChild,
      ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormControl, FormBuilder, NgForm, FormGroup, AbstractControl, Validators, AbstractFormGroupDirective } from '@angular/forms'

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id,
    selector: 'forms-demo',
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
export class FormsDemoComponent implements OnInit {

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



@Component({
    selector: 'forms-group',
    template: `
        <form [formGroup]="person" (ngSubmit)="submit()" novalidate>


            <div formGroupName="user">

                <input type="text" [formControl]="user.get('name')" required [(ngModel)]="myperson.name">
                <p *ngIf="name.hasError('required')">name 必须</p>
                <p *ngIf="name.hasError('nameerror')">name 必须 为</p>

                <input type="text" formControlName=age >
            </div>
            

            <input type="radio" [formControl]="person.get('color')" value="red" > red
            <input type="radio" [formControl]="person.get('color')" value="blue" > blue

            <select [formControl]="city">
                <option *ngFor="let c of citys" [value]="c.value" >{{c.name}}</option>
            </select>

            <button>提交</button>
        </form>
    `
})

export class FormsGroupComponent {

    citys = [
        {
            name: '北京',
            value: 'beijing'
        },
        {
            name: '上海',
            value: 'shanghai'
        },
        {
            name: '天津',
            value: 'tianjin'
        }
    ]
    myperson = {
        name: 'a啊啊啊',
        sex: '1',
        check: true
    }


    person: FormGroup;
    user: FormGroup;

    name: AbstractControl;
    city: AbstractControl;

    constructor(fb: FormBuilder){
        let age = new FormControl(24);
        let user: FormGroup;

        user = this.user = fb.group({
            name: ['kunl'],
            age
        });

        this.person = fb.group({
            color: ['blue'],
            city: ['tianjin'],
            user
        })

        this.name = this.user.controls['name'];
        this.city = this.person.get('city');

        this.name.valueChanges.subscribe((e) => {
            console.log(e)
        })
         age.valueChanges.subscribe((e) => {
            console.log(e)
        })

        
    }

    submit(){
        console.log(this.person)
    }

}

function name(f: FormGroup){
    return (f.value == 'kunl' ? null : {'nameerror': true})
}