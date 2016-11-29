import { Injectable } from '@angular/core';

import { FormControl } from '@angular/forms';

export class MyValidator {
    static asyncTemeout(f: FormControl){
        return new Promise((resolve) => {
            setTimeout(function(){
                
                if(f.value == 'kunl'){
                    resolve(null)
                }{
                    resolve({
                        asyncErr: true
                    })
                }
            },1000)
        })
    }

    static checkName (f: FormControl){
        return (f.value == 'kunl' ? null : {'nameerror': true})
    }

}
