
import {Component} from 'angular2/core';

import {Header} from './component/header.component';
import {Footer} from './component/footer.component';

@Component({
    selector: 'my-app',
    directives: [Header, Footer],
    template: `
        <header></header>
        <p>Angular2...</p>
        <footer></footer>
    `
})

export class AppComponent{

}