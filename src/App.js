import React, {useState} from 'react';
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';
import SearchRobot from './components/SearchRobot';

function App() {

  const [searchRobot, setSearchRobot] = useState('')


  return (
    <div>
      <h1>Robot finder</h1>
      <SearchRobot setSearchRobot={setSearchRobot}/>
      <div className="robots-display">
        
        {Robots
        .filter(robot => robot.name.toLowerCase().includes(searchRobot.toLowerCase()))
        .slice(0,6)
        .map((robot,index) =>{
          return(
            <div>
              <RoboCard index={index} robot={robot}  />
            </div>
          )
        })}
      </div>
      <div className='d-flex justify-content-center'>
        <button className='robot-button mb-5'>Show More</button>
      </div>
    </div>
  );
}

export default App;
