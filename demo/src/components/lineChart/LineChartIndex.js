import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import BasicLineChart from './BasicLineChart';
import SmoothLineChart from './SmoothLineChart';
import StackedLineChart from './StackedLineChart';
import EnterpriseLineChart from './EnterpriseLineChart';
import DynamicLineChart from './DynamicLineChart';

const LineChartIndex = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Basic Line Chart</h6>
                <div className="p-2">
                   
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Smooth Line Chart</h6>
                <div className="p-2">
                    
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Stacked Line Chart</h6>
                <div className="p-2">
                  
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Stacked Line Chart with Dynamic Data Test Component</h6>
                <div className="p-2">
                   <DynamicLineChart/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Stacked Line Chart with Dynamic Data</h6>
                <div className="p-2">
                   
                </div>
            </Card>
        </div>
    )
}

export default LineChartIndex
