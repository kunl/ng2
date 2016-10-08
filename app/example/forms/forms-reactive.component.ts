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




import { MyValidator } from './validator'

@Component({
    selector: 'reactive-forms',
    styles: [`
        .error {
            border: 1px solid red;
        }
        input:focus{
            outline: none 0;
        }
    `],
    template: `
        <form [formGroup]="person" (ngSubmit)="submit()" novalidate>

            <div formGroupName="user">

                <input type="text" [class.error]="name.hasError('asyncErr')" [formControl]="user.get('name')" required [(ngModel)]="myperson.name">
                <p *ngIf="name.hasError('required')">name 必须</p>
                <p *ngIf="name.hasError('asyncErr')">name 异步校验</p>
                <p *ngIf="name.hasError('nameerror')">name 必须 为</p>
                <br>
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

export class FormsReactiveComponent {

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
            name: ['kunl', Validators.required, MyValidator.asyncTemeout ],
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
        console.log(this.name)

    }


}

