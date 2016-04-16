import {Component} from 'angular2/core';

import {ColorDirective} from '../../component/colors/color'

@Component({
    selector: 'colors',
    template: `
        <p color='red'>红色文字</p>
        <p color='blue'>蓝色文字</p>
        <p color='#f00'>蓝色文字</p>
        
        <p [color]='myColor'>黑色文字</p>
    `,
    directives: [ColorDirective]
})

export class ColorDemo{
    private configColor: string = '#333';
    
}
