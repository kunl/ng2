import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


let routers  = [
    { path: '/home', nick: 'home' },
    { path: '/tabs', nick: 'tabs' },
    // { path: '/attrs', nick: '属性 Directive' },
    // { path: '/host', nick: 'host' },
    { path: '/colors', nick: 'color directive' },
    // { path: '/dynamic', nick: '动态组件' },
    // { path: '/viewchild', nick: 'viewchild' },
    { path: '/http', nick: 'http' },
    // { path: '/pagination', nick: '分页' },
    // { path: '/dialog', nick: '模态框' },
    { path: '/d3', nick: 'D3' },
    { path: '/map', nick: 'map' },
    { path: '/echarts', nick: 'Echarts' },
    // { path: '/forms', nick: 'Forms' }
    { path: '/about', nick: 'About' }
];


@Component({
    selector: 'my-app',
    styles: [
        `
        a{
            text-decoration: none;
            margin-right: 20px;
            padding: 5px 10px;
            border-bottom: 1px solid transparent;
        }

        a.active {
            border-color: pink
        }

        .content {
            box-sizing: border-box;
            margin: 20px auto;
            width: 70vw;
            padding: 30px
        }
        `
    ],
    template: `
        <Header></Header>

        <div class="wrap">
            
            <nav class="sidebar">
                <ul class="side-list list-group">
                    <li *ngFor="let it of routers" class="list-group-item">
                        <a  [routerLink]='[it.path]' routerLinkActive="active">{{it.nick}}</a>
                    </li>
                </ul>
            </nav>

            <div class="content">    
                <router-outlet></router-outlet>
            </div>
            
        </div>

        <Footer></Footer>  
  `,
})
export class AppComponent {
    name = 'Angular';
    routers = routers;

    constructor( @Inject(ActivatedRoute) public _route: ActivatedRoute) {
        console.log(this._route)
    }

}
