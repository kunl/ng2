import { Component, OnInit } from 'angular2/core';
import {DisabledComponent} from './disabled';

@Component({
    selector: 'attrs',
    template: `
     <disabled></disabled>
    `,
    directives: [DisabledComponent]
})
export class AttrsDemoComponent {
}