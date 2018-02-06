import {Component} from '@angular/core';

@Component({
    selector: 'colors',
    template: `
        <p color>红色文字</p>
        <p color='blue'>蓝色文字</p>
        <p color='#f00'>蓝色文字</p>
        
        <p><span [style.color]='myColor'>黑色文字</span> 点击更换文字颜色 {{myColor}}</p>
        <button class="btn btn-sma btn-success-outline" (click)="setColor()">换色</button>
    `
})

export class ColorsComponent{
    myColor: string = '#333';
    
    setColor(){
        this.myColor = this.myColor == 'red' ? '#999' : 'red';
        console.log(this.myColor)
    }
}
