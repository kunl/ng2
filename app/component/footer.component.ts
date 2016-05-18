
import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    styles: [
        `
        .footer {
            background: #fff;
            border-top: 1px solid #ddd;
            text-align: center
        }
        `
    ],
    template: `
        <nav class="navbar navbar-fixed-bottom navbar-dark footer">
            <a href="https://github.com/kunl/ng2">github 上有源码，或者 F12 sources 面板也可以看到</a>
        </nav>
    `
})

export class Footer{}