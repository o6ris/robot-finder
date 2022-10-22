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
        .map((robot,index) =>{
          return(
            <div>
              <RoboCard index={index} robot={robot}  />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
