import React from 'react';
import ReactEcharts from 'echarts-for-react';

const hours = ['0', '1', '2', '3', '4', '5', '6',
        '7', '8', '9','10','11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'];
const days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

let data = [[3,0,8],[0,1,5],[0,2,9]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

const Echarts = () => {
    return (
        <>
            <ReactEcharts
                option={{
                    tooltip: {
                        position: 'top'
                    },
                    animation: true,
                    grid: {
                        height: '50%',
                        top: '20%'
                    },
                    xAxis: {
                        type: 'category',
                        data: hours,
                        splitArea: {
                            show: true
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: days,
                        splitArea: {
                            show: true
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 10,
                        calculable: true,
                        orient: 'horizontal',
                        left: 'center',
                        bottom: '15%'
                    },
                    series: [{
                        name: 'Punch Card',
                        type: 'heatmap',
                        data: data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                }}
            />
        </>
    )
}

export default Echarts