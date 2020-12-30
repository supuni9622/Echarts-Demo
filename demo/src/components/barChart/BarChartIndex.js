import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import SimpleBarChart from './SimpleBarChart';
import DoubleBarChart from './DoubleBarChart';
import EnterpriseSingleBar from './EnterpriseDoubleBar';
import EnterpriseDoubleBar from './EnterpriseDoubleBar';

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

const fromDate = '2020-12-2';
const toDate = '2020-12-29';

const dateSeries = getDatesSeries(fromDate,toDate);

const dailyReportData = [{"date":"2020-12-04","newCount":1,"activeCount":1},{"date":"2020-12-08","newCount":1,"activeCount":1}]


const dateTransform = dateSeries.reduce((result, key) => {
    result.push(moment(key).format("MMM-DD"));
    return result;
  }, []);

  const dateSeriesForMemberSeries = dateSeries.reduce((result, data) => {
    result[data] = { date: moment(data).format("MMM-DD"), activeCount: 0 , customersCreatedCount : 0 };
    return result;
  }, {});

const memberSeriesData = dailyReportData.reduce((result,  { date, activeCount, newCount }) => {
  if (result[date]) {
  result[date] = { date: moment(date).format("MMM-DD"), activeCount: activeCount, customersCreatedCount : newCount }
  }
  return result;
},  dateSeriesForMemberSeries)

const memberSeriesArray = Object.values(memberSeriesData);

const activeCountArray = memberSeriesArray.reduce((result, {activeCount}) => {
  result.push(activeCount);
  return result;
}, []);

const newCountArray = memberSeriesArray.reduce((result, {customersCreatedCount}) => {
  result.push(customersCreatedCount);
  return result;
}, []);

console.debug('Test', newCountArray);

const BarChartIndex = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Basic Bar Chart</h6>
                <div className="p-2">
                   <SimpleBarChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart</h6>
                <div className="p-2">
                    <DoubleBarChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Single Bar Chart with Dynamic Data</h6>
                <div className="p-2">
                    <EnterpriseSingleBar xAxisData={dateTransform} seriesData={activeCountArray}/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Double Bar Chart with Dynamic Data</h6>
                <div className="p-2">
                   <EnterpriseDoubleBar xAxisData={dateTransform}
                    bar1SeriesData={newCountArray}
                    bar2SeriesData={activeCountArray}
                    bar1Name='New Members'
                    bar2Name='Return Members'/>
                </div>
            </Card>
        </div>
    )
}

export default BarChartIndex
