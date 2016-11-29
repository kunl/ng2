import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'forms-demo',
    template: `
    <forms></forms>

    <hr>

    <reactive-forms></reactive-forms>
    
    `
})
export class FormsDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}