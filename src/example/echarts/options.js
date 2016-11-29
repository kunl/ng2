export var option = {
    tooltip: {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show: true,
        feature: {
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: '速度',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {
                lineStyle: {
                    width: 10
                }
            },
            axisTick: {
                length: 15,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            title: {
                textStyle: {
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic'
                }
            },
            detail: {
                textStyle: {
                    fontWeight: 'bolder'
                }
            },
            data: [{ value: 40, name: 'km/h' }]
        },
        {
            name: '转速',
            type: 'gauge',
            center: ['20%', '55%'],
            radius: '35%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
                lineStyle: {
                    width: 8
                }
            },
            axisTick: {
                length: 12,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],
            },
            detail: {
                textStyle: {
                    fontWeight: 'bolder'
                }
            },
            data: [{ value: 1.5, name: 'x1000 r/min' }]
        },
        {
            name: '油表',
            type: 'gauge',
            center: ['77%', '50%'],
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
                lineStyle: {
                    width: 8
                }
            },
            axisTick: {
                splitNumber: 5,
                length: 10,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (v) {
                    switch (v + '') {
                        case '0': return 'E';
                        case '1': return 'Gas';
                        case '2': return 'F';
                    }
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                width: 2
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{ value: 0.5, name: 'gas' }]
        },
        {
            name: '水表',
            type: 'gauge',
            center: ['77%', '50%'],
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
                lineStyle: {
                    width: 8
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: function (v) {
                    switch (v + '') {
                        case '0': return 'H';
                        case '1': return 'Water';
                        case '2': return 'C';
                    }
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                width: 2
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{ value: 0.5, name: 'gas' }]
        }
    ]
};
//# sourceMappingURL=options.js.map