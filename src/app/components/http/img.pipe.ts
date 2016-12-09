import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'img_pipe'
})

export class ImgPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        let no_img_url = 'http://tva4.sinaimg.cn/crop.8.26.613.613.180/6efef90djw8eo4z1ul47zj20hs0hsjsc.jpg'
        if(value){
            return value.match('^http*') ? value : no_img_url;
        }else{
            return no_img_url;
        }
    }
}