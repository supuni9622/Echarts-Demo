import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = ({data,title,ledgendNames}) => {

    return (
        <>
        <div style={{minWidth:'300px'}}>
            <h6>{title}</h6>
                <div className="mx-2">
                    <ReactEcharts
                        option = {{
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b}: {c} ({d}%)'
                            },
                            color: ["#3398DB",'#003366', '#006699', '#4cabce'],
                            legend: {
                                orient: 'vertical',
                                left: 10,
                                data: ledgendNames
                            },
                            series: [
                                {
                                    name: title,
                                    type: 'pie',
                                    radius: ['50%', '70%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    data : data
                                }
                            ]
                        }}
                    /> 
                </div>
            </div>
        </>
    )
}

export default PieChart