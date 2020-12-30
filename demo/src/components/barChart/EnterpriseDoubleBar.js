import React from 'react';
import ReactEcharts from 'echarts-for-react';

const DoubleBarChart = ({xAxisData,bar1SeriesData,bar2SeriesData,bar1Name,bar2Name}) => {

    return (
        <>
                <div className="mx-2">
                    <ReactEcharts
                        option={{
                        color: ["#3398DB",'#003366', '#006699', '#4cabce'],
                        xAxis: {
                            type: 'category',
                            data: xAxisData
                        },
                        yAxis: {
                            type: 'value'
                        },
                        // dataZoom: {
                        //  title: {
                        //  show: true,
                        //  dataZoom: 'Range Zoom',
                        //  dataZoomReset: 'Undo Zoom'
                        //  },
                        // },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            data: [bar1Name, bar2Name]
                        },
                        // tooltip: {
                        //     axisPointer: {
                        //     animation: true
                        //     }
                        // },
                        //grid: {},
                        series: [
                        {
                            name: bar1Name,
                            type: 'bar',
                            barGap: 0,
                            data: bar1SeriesData,
                            //barWidth: "60%"
                        },
                        {
                            name: bar2Name,
                            type: 'bar',
                            data: bar2SeriesData,
                            //barWidth: "60%"
                        },
                    ]
                    }}
                    /> 
                </div>
        </>
    )
}

export default DoubleBarChart