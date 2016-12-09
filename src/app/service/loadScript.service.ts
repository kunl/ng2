import { Injectable } from '@angular/core';

@Injectable()
export class LoadScriptService {
    doc = document;

    constructor() { }

    load(src):Promise<any>{
        return new Promise((resolve, reject) => {

            let script = this.doc.createElement('script');

            if (!src) {
                new Error('src');
            }
            script.src = src;
            this.doc.querySelector('head').appendChild(script);

            script.onload = function(){
                resolve();
                script.remove()
            }

            script.onerror = function() {
                reject()
            }

        })



    }
}