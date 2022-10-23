import React, {useState} from 'react'
import RobotAddress from './RobotAddress';
import RobotFile from '../pages/RobotFile';
function RoboCard({robot, setPage}) {

  

  return (
    <div onClick={() => setPage('RobotFile')} className='robot-card d-flex flex-column rounded-4'>
        {/* {console.log(robot)} */}
        <h1>{robot.name}</h1>
        <div className='d-flex align-items-center justify-content-around '>
            <div>
                <img src={`https://robohash.org/${robot.id}/set=set3`} alt="" />
            </div>

            <div className='flex-column'>
                <div>
                    <div>
                        <ul>
                            <li><strong>Phone :</strong> {robot.phone}</li>
                            <li><strong>Email</strong> : {robot.email}</li>
                            <li><strong>Website</strong> : {robot.website}</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <RobotAddress address={robot.address}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoboCard