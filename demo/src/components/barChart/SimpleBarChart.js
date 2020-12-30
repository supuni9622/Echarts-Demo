import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EBarChart = ({xAxisData,seriesData }) => {
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
                             dataZoom: {
                         title: {
                         show: true,
                         dataZoom: 'Range Zoom',
                         dataZoomReset: 'Undo Zoom'
                         },
                        },
                            series: [{
                                data: [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(220, 220, 220, 0.8)'
                                }
                            }]
                        }}
                    /> 
                </div>
        </>
    )
}

export default EBarChart