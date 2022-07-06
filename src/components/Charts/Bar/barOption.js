const baroptions = {
    title: {
        text: 'test',
        textStyle: {
            color: '#ffffff'
        }
    },
    legend: {
        data: [
            '3-11岁任务数',
            '3-11岁全程接种量',
            '60岁任务数',
            '60岁全程接种量',
            '80岁任务数',
            '80岁全程接种量',
            '完成率',
        ],
    },
    xAxis: {
        type: 'category',
        data: ['街道1', '街道2', '街道3', '街道4', '街道5', '街道6', '街道7'],
        axisLabel: {
            color: 'yellow'
        }
    },
    yAxis: [
        { type: 'value' },

    ],
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            color: '#fff',
            align: 'left',
            fontSize: 14,
        },
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    series: [
        {
            name: '3-11岁任务数',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'bar',
        },
    ],
}
export default baroptions;