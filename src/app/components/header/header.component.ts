
import {Component} from '@angular/core';

@Component({
    selector: 'Header',
    template: `
       <header class="header">
            <div class="header-content">
                <nav class="navigation">
                 <a [routerLink]="['/about']" routerLinkActive="active">
        About
        </a>
        
        <a [routerLink]="['/contact']" routerLinkActive="active">
        contact
        </a>

        <a [routerLink]="['/home']" routerLinkActive="active">
        home
        </a>

        <a [routerLink]="['/news']" routerLinkActive="active">
        news
        </a>
        
                    <a  href="https://github.com/kunl/ng2" title="github">GitHub</a>
                    <a  href="https://kunl.in" title="blog">Blog</a>
                    <a  href="https://twitter.com/le720" title="忆年">twitter</a>
                </nav>
                <h1 class="header-title">Kunl's Angular demo</h1>
            </div>
      </header>
    `
})

export class HeaderComponent{

}
