const baroptions = {
    title: {
        text: '',
        textStyle: {
            color: '#ffffff'
        }
    },
    legend: {
        data: [
            '图例',
        ],
        textStyle: {
            color: 'rgba(181, 179, 179, 1)'
        }
    },
    grid: {
        // width: '80%', 
        // right: '10%',
        // top: '10%', 
        
    },
    xAxis: {
        type: 'category',
        data: ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6', 'ex7'],
        axisLabel: {
            color: 'rgba(181, 179, 179, 1)',
            rotate: 30
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    width: 0.5,
                    opacity: 0.4,
                    color: ['#aaa', '#ddd']
                }
            }
        },

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
            name: '图例',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'bar',
        },
    ],
    animation: false,
}
export default baroptions;