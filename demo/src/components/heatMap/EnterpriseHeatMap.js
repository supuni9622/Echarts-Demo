import React from 'react';
import ReactEcharts from 'echarts-for-react';

const hours = ['0', '1', '2', '3', '4', '5', '6',
        '7', '8', '9','10','11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'];

const days = ['Sunday', 'Saturday', 'Friday',
        'Thursday', 'Wednusday', 'Tuesday', 'Monday'];

const daySlotMap = {
    "Monday": 6,
    "Tuesday": 5,
    "Wednesday": 4,
    "Thursday": 3,
    "Friday": 2,
    "Saturday": 1,
    "Sunday": 0  
    };

const HeatMap = () => {

    const data = [{"hourOfDay":"19","dayOfWeekValues":[{"dayOfWeek":"Friday","count":1}]},{"hourOfDay":"20","dayOfWeekValues":[{"dayOfWeek":"Tuesday","count":1}]}]

    const heatMapData = [];

    data.forEach(({ hourOfDay, dayOfWeekValues = [] }) => {
        dayOfWeekValues.forEach(({
          dayOfWeek,
          count
        }) => {
          heatMapData.push([Number(hourOfDay),daySlotMap[dayOfWeek],count]);
        });
    
      });

      //console.debug('Data ', heatMapData);

    return (
        <>
            <ReactEcharts
                option={{
                    tooltip: {
                        position: 'top'
                    },
                    animation: true,
                    grid: {
                        height: '70%',
                        //top: '20%',
                        //bottom:'50%'
                    },
                    color: ["#3398DB",'#003366', '#006699', '#4cabce'],
                    xAxis: {
                        type: 'category',
                        data: hours,
                        position:'top',
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
                    // visualMap: {
                    //     min: 0,
                    //     max: 10,
                    //     calculable: true,
                    //     orient: 'horizontal',
                    //     left: 'center',
                    //     bottom: '15%'
                    // },
                    series: [{
                        name: 'Transactions',
                        type: 'heatmap',
                        data: heatMapData,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0,0.5)'
                            }
                        },
                        // color: {
                        //     type: 'linear',
                        //     x: 0,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 1,
                        //     colorStops: [{
                        //         offset: 0, color: 'rgb(0, 151, 230' // color at 0% position
                        //     }, {
                        //         offset: 1, color: 'rgb(0, 151, 230' // color at 100% position
                        //     }]
            
                        // },
                        borderColor: {
                            type: 'solid',
                            borderWidth : 2,
                            // colorStops: [{
                            //     offset: 0, color: "#000" // color at 0% position
                            // }, {
                            //     offset: 1, color: 'blue' // color at 100% position
                            // }],
                            global: false // false by default
                        },
                    }]
                }}
            />
        </>
    )
}

export default HeatMap