/**
 *
 * Created by kunl on 2016/1/5-0005.
 */
import {Component} from 'angular2/core';

import {Header} from './component/header.component';
import {Footer} from './component/footer.component';

@Component({
    selector: 'my-app',
    directives: [Header, Footer],
    template: `
        <header></header>
        <h1>Angular2...</h1>
        <footer></footer>
    `
})

export class AppComponent{}