import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import HeatMapIndex from './components/heatMap/HeatMapIndex';
import LineChartIndex from './components/lineChart/LineChartIndex';
import BarChartIndex from './components/barChart/BarChartIndex';
import PieChartIndex from './components/pieChart/PieChartIndex';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <div className='side'>
          <Navigation/>
        </div>
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/heat-map' component={HeatMapIndex}/>
            <Route path='/line-chart' component={LineChartIndex}/>
            <Route path='/bar-chart' component={BarChartIndex}/>
            <Route path='/pie-chart' component={PieChartIndex}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
