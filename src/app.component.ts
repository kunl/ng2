
import {Component, Injector} from '@angular/core';

let routers  = [
    { path: '/home', nick: '首页' },
    // { path: '/tabs', nick: 'tabs' },
    // { path: '/attrs', nick: '属性 Directive' },
    // { path: '/host', nick: 'host' },
    // { path: '/color', nick: 'color demo' },
    // { path: '/dynamic', nick: '动态组件' },
    // { path: '/viewchild', nick: 'viewchild' },
    // { path: '/http', nick: 'http' },
    // { path: '/pagination', nick: '分页' },
    // { path: '/dialog', nick: '模态框' },
    // { path: '/d3', nick: 'D3' },
    // { path: '/echarts', nick: 'Echarts' },
    // { path: '/forms', nick: 'Forms' }
];

@Component({
    selector: 'example-app',
    // templateUrl: 'app.component.html' 
    template: `
    
        <Header></Header>

        <div class="wrap">
            
            <nav class="sidebar">
                <ul class="side-list list-group">
                    
                </ul>
            </nav>

            <div class="content">
                <router-outlet></router-outlet>
            </div>
            
        </div>

        <Footer></Footer>  

    `
})



export class AppComponent{
    

    routers = routers;
    
    constructor(injector: Injector){
        
        let user = injector.get('User');
        
        console.log(user)
    }
    
    ngOnInit(){
        
    }
}
