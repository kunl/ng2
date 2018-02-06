import { Component, Input } from '@angular/core';

@Component({
    selector: 'side-bar',
    styles: [
        `
        a{
            display: block;
            text-decoration: none;
            margin-right: 20px;
            padding: 2px 10px;
            border-bottom: 1px solid transparent;
        }

        .side-list {
            margin-right: -1px;
        }
        .list-group-item {
            margin-bottom: -1px;
            border: 1px solid #ccc;
        }

        .list-group-item.active {
            background: rgba(111, 111, 111, .06)
        }
        
        `
    ],
    template: `
    <nav class="sidebar">
        <ul class="side-list list-group">
            <li *ngFor="let it of sidebar" class="list-group-item" routerLinkActive="active">
                <a  [routerLink]='[it.path]' >{{it.nick}}</a>
            </li>
        </ul>
    </nav>

    `
})
export class SideBarComponent {

    @Input() sidebar;
}