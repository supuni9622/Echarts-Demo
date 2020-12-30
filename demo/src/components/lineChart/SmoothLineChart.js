import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChart = () => {

    return (
        <>
            <div className="mx-2">
                <ReactEcharts
                    option={{
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true
                        }]
                    }}
                    /> 
                </div>
        </>
    )
}

export default LineChart