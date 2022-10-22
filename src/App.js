import React, {useState} from 'react';
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';
import SearchRobot from './components/SearchRobot';

function App() {

  const [searchRobot, setSearchRobot] = useState('')
  const [numberOfRobots, setNumberOfRobots] = useState(0)

  return (
    <div>
      <h1>Robot finder</h1>
      <SearchRobot setSearchRobot={setSearchRobot}/>
      <div className="robots-display">
        
        {Robots
        .filter(robot => robot.name.toLowerCase().includes(searchRobot.toLowerCase()))
        .slice(0,numberOfRobots+4)
        .map((robot,index) =>{
          return(
            <div>
              <RoboCard index={index} robot={robot}  />
            </div>
          )
        })}
      </div>
      <div className='d-flex justify-content-center'>
        <button onClick={() => setNumberOfRobots(numberOfRobots+4) } className='robot-button mb-5'>
        {numberOfRobots >= Robots.length?'No more Robots':'Show More'}
          </button>
    
      </div>
    </div>
  );
}

export default App;
