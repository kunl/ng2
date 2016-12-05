import { Component, OnInit, AfterViewInit, ElementRef, Renderer, NgModule } from '@angular/core';

import * as echarts from 'echarts';
import { option } from './options';

@Component({
    selector: 'echarts-demo',
    template: ''
})
export class EchartsDemoComponent implements OnInit {
    ele:any = null;

    constructor(private _elRef: ElementRef, private _rn: Renderer) { 
        this.ele = _elRef.nativeElement;
        
    }

    ngOnInit() { 
      this.initEcharts();
     
    }

    initEcharts(){
        // var div  = this.ele.querySelector('div');
        
        this._rn.setElementStyle(this.ele, 'color', 'green');
        this._rn.setElementStyle(this.ele, 'width', '800px');
        this._rn.setElementStyle(this.ele, 'height', '600px');


        var myChart = echarts.init(this.ele);

        console.log(myChart)
        
        // 指定图表的配置项和数据
        // var option = {
        //     title: {
        //         text: 'ECharts 入门示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // };

        setInterval(function (){
            option.series[0].data[0].value = <any>(Math.random()*100).toFixed(2) - 0;
            option.series[1].data[0].value = <any>(Math.random()*7).toFixed(2) - 0;
            option.series[2].data[0].value = <any>(Math.random()*2).toFixed(2) - 0;
            option.series[3].data[0].value = <any>(Math.random()*2).toFixed(2) - 0;
            myChart.setOption(option,true);
        },2000);

        myChart.setOption(option);

        myChart.on('click', (params: any) => {
            console.log(params)
        })
    }

}


@NgModule({
    declarations: [EchartsDemoComponent]
})
export class EchartsDemoModule {}