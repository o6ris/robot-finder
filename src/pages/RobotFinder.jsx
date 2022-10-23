import React, {useState} from 'react'
import RoboCard from '../components/RoboCard';
import Robots from '../data/data';
import SearchRobot from '../components/SearchRobot';
import ShowMoreRobots from '../components/ShowMoreRobots';


function RobotFinder({setPage}) {
  const [searchRobot, setSearchRobot] = useState('')
  const [numberOfRobots, setNumberOfRobots] = useState(0)
  return (
    <div className='robot-main'>
      <h1>Robot finder</h1>
      {/* search bar */}
      <SearchRobot setSearchRobot={setSearchRobot}/>

      {/* robots display */}
      <div className="robots-display">

        {/* filter Robots per name, display only 4 robots with slice and map function. */}
        {Robots
        .filter(robot => robot.name.toLowerCase().includes(searchRobot.toLowerCase()))
        .slice(0,numberOfRobots+4)
        .map((robot,index) =>{
          return(
            <div>
              <RoboCard index={index} robot={robot} setPage={setPage}  />
            </div>
          )
        })}
      </div>

      {/* show more button */}  
      <ShowMoreRobots numberOfRobots={numberOfRobots} setNumberOfRobots={setNumberOfRobots} robots={Robots}/>
    </div>
  )
}

export default RobotFinder