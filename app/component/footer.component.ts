
import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    styles: [
        `
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center
        }
        `
    ],
    template: `
        <div class="card footer">
            <div class="card-blcok">
                <a href="https://github.com/kunl/ng2">github 上有源码，或者 F12 sources 面板也可以看到</a>
            </div>
        </div>
    `
})

export class Footer{}