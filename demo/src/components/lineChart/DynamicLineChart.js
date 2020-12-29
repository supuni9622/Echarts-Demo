import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChart = () => {

    const lineabc = [
        {
            key: '1',
            data : [12,45,78]
        },
        {
            key: '2',
            data : [52,45,98]
        },
        {
            key: '3',
            data : [67,34,25]
        }
    ]

    const lineChartData = lineabc.map((item)=>{
        return(
            {
                name: item.key,
                type: 'line',
                //stack: '',
                data: item.data,
                smooth: true
            }
        )   
    });

    return (
        <>
            <div className="mx-2">
                <ReactEcharts
                    option={{
                    color: ["#3398DB",'#003366', '#006699', '#4cabce'],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['one', 'two', 'three']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    legend: {
                        data: ['1', '2', '3']
                    },
                    tooltip: {
                        axisPointer: {
                        animation: true
                        }
                    },
                    series : lineChartData
                    }}
                    /> 
                </div>
        </>
    )
}

export default LineChart