import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';

@Pipe({
    name: 'moment_pipe'
})

export class MomentPipe implements PipeTransform{
    transform(value: any, args: any) {
        // let time = moment(value, args);

        // console.log(time)
        
        console.log(args)
    }
}