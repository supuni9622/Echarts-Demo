import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EBarChart = ({xAxisData,seriesData }) => {

    console.debug('Test 1', seriesData);

    return (
        <>
                <div className="mx-2">
                    <ReactEcharts
                        option={{
                        color: ["#3398DB"],
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
                        legend: {},
                        tooltip: {
                            axisPointer: {
                            animation: true
                            }
                        },
                        //grid: {},
                        series: [{ 
                            data: seriesData,
                            type: 'bar',
                            //barWidth: "60%",
                        }]
                    }}
                    /> 
                </div>
        </>
    )
}

export default EBarChart