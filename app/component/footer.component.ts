
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
        <nav class="navbar navbar-fixed-bottom navbar-dark bg-primary">
            <a href="https://github.com/kunl/ng2">github 上有源码，或者 F12 sources 面板也可以看到</a>
        </nav>
    `
})

export class Footer{}