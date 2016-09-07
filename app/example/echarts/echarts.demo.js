"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var echarts = require('echarts');
var options_1 = require('./options');
var EchartsDemoComponent = (function () {
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
            options_1.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            options_1.option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
            options_1.option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            options_1.option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            myChart.setOption(options_1.option, true);
        }, 2000);
        myChart.setOption(options_1.option);
    };
    EchartsDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'echarts-demo',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], EchartsDemoComponent);
    return EchartsDemoComponent;
}());
exports.EchartsDemoComponent = EchartsDemoComponent;
var EchartsDemoModule = (function () {
    function EchartsDemoModule() {
    }
    EchartsDemoModule = __decorate([
        core_1.NgModule({
            declarations: [EchartsDemoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], EchartsDemoModule);
    return EchartsDemoModule;
}());
exports.EchartsDemoModule = EchartsDemoModule;
//# sourceMappingURL=echarts.demo.js.map