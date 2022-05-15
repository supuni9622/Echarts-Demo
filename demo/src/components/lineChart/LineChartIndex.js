import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import BasicLineChart from './BasicLineChart';
import SmoothLineChart from './SmoothLineChart';
import StackedLineChart from './StackedLineChart';
import EnterpriseLineChart from './EnterpriseLineChart';
import DynamicLineChart from './DynamicLineChart';
import MultipleLinesChart from './MultipleLinesChart';


const data2 = [
    {
      rewardId: 1,
      date: "2020-12-12",
      count: 12
    },
    {
      rewardId: 1,
      date: "2020-12-13",
      count: 44
    },
    {
        rewardId: 1,
        date: "2020-12-15",
        count: 30
      },
      {
        rewardId: 2,
        date: "2020-12-12",
        count: 34
      },
    {
      rewardId: 2,
      date: "2020-12-13",
      count: 10
    },
   
    {
      rewardId: 2,
      date: "2020-12-14",
      count: 34
    },
    
    {
      rewardId: 2,
      date: "2020-12-18",
      count: 10
    },
  ];

  const getDatesSeries = (startDate, stopDate) => {
    let dateArray = [];
    let currentDate = moment(startDate);
    let endDate = moment(stopDate);
    while (currentDate <= endDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
};

const fromDate = '2020-12-11';
const toDate = '2020-12-19';

const dateSeries = getDatesSeries(fromDate,toDate);

console.debug('datessss', dateSeries);

     
const removeLineKeyDuplication = (data, key) => {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  };

  const transformLines = data2.reduce((result, { rewardId }) => {
    result.push({ key: rewardId });
    return result;
  }, []);

  const lineChartLineOptions = removeLineKeyDuplication(transformLines, line => line.key)

  console.log('Today 576576', lineChartLineOptions);

  const lineChartData12 = lineChartLineOptions.map((item)=>{
    return(
        {
            key : item.key,
            counts : [],
        }
    )   
});

console.log('Today 3', lineChartData12);
data2.forEach(({
    rewardId,
    count,
    date
  }) => {
    lineChartData12.forEach(({ key, counts= []}) => {
      if(key===rewardId){    
         counts.push(count)
      }
    }); 
  });

var UserMatrix = [{
    ID: 1,
    Name: "Sid Edelmann",
    UPI: 20483,
    Guru: "Yes",
    Views: {
        February: 12,
        March: 8,
        April: 10,
        May: 11,
        June: 8
    },
    Ratings: {
        February: 1,
        March: 2,
        April: 0,
        May: 0,
        June: 0
    },
    Comments: {
        February: 1,
        March: 1,
        April: 0,
        May: 0,
        June: 1
    },
    TotalViews: {
        FebJune: 49
    },
    TotalRatings: {
        FebJune: 3
    },
    AverageRatings: {
        FebJune: '#'
    },
    TotalComments: {
        FebJune: 3
    }
}, {
    ID: 6,
    Name: "Parthasarathy Perumbali",
    UPI: "999999",
    Guru: "",
    Views: {
        February: "8",
        March: "5",
        April: "4",
        May: "1",
        June: "8"
    },
    Ratings: {
        February: "2",
        March: "1",
        April: "2",
        May: "1",
        June: "2"
    },
    Comments: {
        February: "3",
        March: "0",
        April: "0",
        May: "0",
        June: "0"
    },
    TotalViews: {
        FebJune: "26"
    },
    TotalRatings: {
        FebJune: "8"
    },
    AverageRatings: {
        FebJune: "#"
    },
    TotalComments: {
        FebJune: "3"
    }
}];

var finalArr = [];
var months = ["February", "March", "April", "May", "June"];
//var attr = ["Views", "Ratings", "Comments"];
UserMatrix.forEach(function (user) {
    months.forEach(function (m) {
        finalArr.push({
            Name: user.Name,
            Month: m,
            Views: user.Views[m],
            Ratings: user.Ratings[m],
            Comments: user.Comments[m]
        });
    });
});

console.log('Test----------------', finalArr);

//=================================================================



const LineChartIndex = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Basic Line Chart</h6>
                <div className="p-2">
                   <BasicLineChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Smooth Line Chart</h6>
                <div className="p-2">
                    <SmoothLineChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Stacked Line Chart</h6>
                <div className="p-2">
                  <StackedLineChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Multiple Line Chart with Static Data</h6>
                <div className="p-2">
                   <MultipleLinesChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Multiple Line Chart with Dynamic Data Test Component</h6>
                <div className="p-2">
                   <DynamicLineChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Multiple Line Chart with Dynamic Data</h6>
                <div className="p-2">
                   <EnterpriseLineChart lineOptions={lineChartLineOptions} xAxisData={['Dec-12','Dec-15','Dec-17','Dec-19','Dec-21']} data={lineChartData12}/>
                </div>
            </Card>
        </div>
    )
}

export default LineChartIndex
