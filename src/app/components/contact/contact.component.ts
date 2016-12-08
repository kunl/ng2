import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    template: `
        <h2>contact page</h2>

        <dialog-demo></dialog-demo>
    `
})
export class contactComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}