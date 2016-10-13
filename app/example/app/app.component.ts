
import {Component, Injector} from '@angular/core';

let routers  = [
    { path: '/home', nick: '首页' },
    { path: '/tabs', nick: 'tabs' },
    { path: '/attrs', nick: '属性 Directive' },
    { path: '/host', nick: 'host' },
    { path: '/color', nick: 'color demo' },
    { path: '/dynamic', nick: '动态组件' },
    { path: '/viewchild', nick: 'viewchild' },
    { path: '/http', nick: 'http' },
    { path: '/pagination', nick: '分页' },
    { path: '/dialog', nick: '模态框' },
    { path: '/d3', nick: 'D3' },
    { path: '/echarts', nick: 'Echarts' },
    { path: '/forms', nick: 'Forms' }
];

@Component({
    moduleId: module.id,
    selector: 'example-app',
    styles: [
        `
        .header-title {padding: 0 20px}
        .router-link-active{border-right: 4px solid #00dcc1}
        .content {padding: 0 20px; min-height: 70vh}
        nav li {cursor: pointer}
        `
    ],
    templateUrl: 'app.component.html' 
})



export class AppComponent{
    
     //return `${params.seriesName} : ${vardata[params.dataIndex]} <br/> <a id="detail" onclick="get(${vardata})">点击查看详情</a>` 

    routers = routers;
    
    constructor(injector: Injector){
        
        let user = injector.get('User');
        
        console.log(user)
    }
    
    ngOnInit(){
        
    }
}
