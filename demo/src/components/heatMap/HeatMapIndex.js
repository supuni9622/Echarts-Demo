import React from 'react';
import HeatMapDefault from './HeatMapDefault';
import EnterpriseHeatMap from './EnterpriseHeatMap';
import {Card} from 'react-bootstrap';

const HeatMapIndex = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Heat Map</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Default Heat Map</h6>
                <div className="p-2">
                   <HeatMapDefault/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Heat Map with Dynamic Data</h6>
                <div className="p-2">
                    <EnterpriseHeatMap/>
                </div>
            </Card>
        </div>
    )
}

export default HeatMapIndex
