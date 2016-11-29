import { Component, ElementRef, Renderer, NgModule } from '@angular/core';
import * as echarts from 'echarts';
import { option } from './options';
export var EchartsDemoComponent = (function () {
    function EchartsDemoComponent(_elRef, _rn) {
        this._elRef = _elRef;
        this._rn = _rn;
        this.ele = null;
        this.ele = _elRef.nativeElement;
    }
    EchartsDemoComponent.prototype.ngOnInit = function () {
        this.initEcharts();
    };
    EchartsDemoComponent.prototype.initEcharts = function () {
        // var div  = this.ele.querySelector('div');
        this._rn.setElementStyle(this.ele, 'color', 'green');
        this._rn.setElementStyle(this.ele, 'width', '800px');
        this._rn.setElementStyle(this.ele, 'height', '600px');
        var myChart = echarts.init(this.ele);
        console.log(myChart);
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
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            myChart.setOption(option, true);
        }, 2000);
        myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params);
        });
    };
    EchartsDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'echarts-demo',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    EchartsDemoComponent.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    return EchartsDemoComponent;
}());
export var EchartsDemoModule = (function () {
    function EchartsDemoModule() {
    }
    EchartsDemoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EchartsDemoComponent]
                },] },
    ];
    /** @nocollapse */
    EchartsDemoModule.ctorParameters = [];
    return EchartsDemoModule;
}());
//# sourceMappingURL=echarts.demo.js.map