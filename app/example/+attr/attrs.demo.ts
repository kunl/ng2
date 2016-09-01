import { Component, OnInit } from '@angular/core';
import {DisabledComponent} from './disabled';

@Component({
    selector: 'attrs',
    template: `
     <disabled></disabled>
    `
})
export class AttrsDemoComponent {
    constructor(){
        console.log('attrs')
    }
}