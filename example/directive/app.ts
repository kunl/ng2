import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';

import {ColorDirective} from './color'

@Component({
    selector: 'my-app',
    template: `
        <p color='red'>红色文字</p>
        <p color='blue'>蓝色文字</p>
        <p color='#f00'>蓝色文字</p>
    `,
    directives: [ColorDirective]
})
export class AppComponent{}

bootstrap(AppComponent)