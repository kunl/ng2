import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaiduMaptService } from '../../service/baiduMap.service'
// import * as d3 from 'd3';

@Component({
    selector: 'baidu-demo',
    styles: [`
        #map {
            width: 400px;
            height: 400px;
        }
    `],
    template: `
        <div id="map"></div>
    `
})
export class BaiduMapComponent implements OnInit {
    constructor(private _elRef: ElementRef, private _baiduMap: BaiduMaptService) {

    }

    ngOnInit() {
        let key = 'C78b0c2c170e47e6f8e074e592785837';

        let src = 'http://api.map.baidu.com/api?v=2.0&ak=${key}&callback=initialize'

        this._baiduMap.init(key).then(() => {
            this.initMap(window['BMap'])
        })

    }

    initMap(BMap) {
        var map = new BMap.Map("map");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.ScaleControl());    // 右下比例尺
        map.setDefaultCursor("Crosshair");//鼠标样式
    }

}

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: BaiduMapComponent }])],
    declarations: [BaiduMapComponent]
})
export class BaiduMapModule { }