import React, {useState} from 'react';
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';
import SearchRobot from './components/SearchRobot';
import ShowMoreRobots from './components/ShowMoreRobots';
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
      <ShowMoreRobots numberOfRobots={numberOfRobots} setNumberOfRobots={setNumberOfRobots} robots={Robots}/>
    </div>
  );
}

export default App;
