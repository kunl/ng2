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
            <side-bar [sidebar]='routers'></side-bar>
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
