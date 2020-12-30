import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChart = ({xAxisData,data,lineOptions}) => {

    const lineChartData = data.map((item)=>{
        return(
            {
                name: item.key,
                type: 'line',
                //stack: '',
                data: item.counts,
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
                        //data: ['Dec-11', 'Dec-12', 'Dec-13', 'Dec-14', 'Dec-15','Dec-16','Dec-17','Dec-18','Dec-19']
                        data:xAxisData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    legend: {
                        data: lineOptions
                    },
                    tooltip: {
                        axisPointer: {
                        animation: true
                        }
                    },
                    series : lineChartData
                    // series: [{ 
                    //     data: seriesData,
                    //     type: 'line',
                    //     smooth: true
                    //     }]
                    }}
                    /> 
                </div>
        </>
    )
}

export default LineChart