import React from 'react';
import {Card} from 'react-bootstrap';
import PieChart from './PieChart';

const memberDistributionData = {"gender":{"female":1,"male":1},"age":{"other":1,"45-54":1},"tier":{"":2}};

const genderData = Object.keys(memberDistributionData.gender).map((key) => ({ 'value' : memberDistributionData.gender[key],'name' : key}));
      const ageData = Object.keys(memberDistributionData.age).map((key) => ({'value' : memberDistributionData.age[key], 'name' : key}));
      const tierData = Object.keys(memberDistributionData.tier).map((key) => ({'value' : memberDistributionData.tier[key], 'name' : key}));

      const tierNameArray = tierData.reduce((result, {name}) => {
        result.push(name);
        return result;
      }, []);

      const genderNameArray = genderData.reduce((result, {name}) => {
        result.push(name);
        return result;
      }, []);

      const ageNameArray = ageData.reduce((result, {name}) => {
        result.push(name);
        return result;
      }, []);


const PieChartIndex = () => {
    return (
        <div className='mb-3 d-flex justify-content-between'>
        <Card className='p-3 mb-3 mr-2'>
          <PieChart title='Tier Distribution' data={tierData} ledgendNames={tierNameArray}/>

        </Card>
        <Card className='p-3 mb-3 mr-2'>
          <PieChart title='Age Distribution' data={ageData} ledgendNames={ageNameArray}/>
        </Card>
        <Card className='p-3 mb-3'>
          <PieChart title='Gender Distribution' data={genderData} ledgendNames={genderNameArray}/>
        </Card>
      </div>
    )
}

export default PieChartIndex
