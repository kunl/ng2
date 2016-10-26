import { Component, OnInit, ElementRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser'
@Component({
    selector: 'home',
    template: `
        <h1>kunl 的 Angular2 demo </h1>
        
        `
})
export class HomeComponent implements OnInit {
    constructor( private el: ElementRef, private em:EventManager) { }

    ngOnInit() {

        var button = document.createElement('button');
        button.innerText = '点击'

        this.em.addEventListener(button, 'click', this.say)
        this.el.nativeElement.appendChild(button)
    }

    say(e:MouseEvent){
        console.log(3333, e)
    }

}