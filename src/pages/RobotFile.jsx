import React from 'react'
import RobotAddress from '../components/RobotAddress'

function RobotFile({robot}) {
 
 
    return (
      <div className='robot-card d-flex flex-column rounded-4'>
        
        <h1>{robot.name} <span className='robot-id-singlePage fs-6'>id : {robot.id}</span></h1>
        <p className='text-center'>You can call me {robot.username} and I work for {robot.company.name}.
        I Always say : '{robot.company.catchPhrase}'</p>
        <div className='d-flex align-items-center justify-content-around '>
            <div>
                <img src={`https://robohash.org/${robot.id}/set=set3`} alt="" />
            </div>

            <div>
                <div>
                    
                  <p className='fs-4'><strong>Phone :</strong> {robot.phone}</p>
                  <p className='fs-4'><strong>Email</strong> : {robot.email}</p>
                  <p className='fs-4'><strong>Website</strong> : {robot.website}</p>
                    
                </div>
            </div>

            <div>
                <RobotAddress address={robot.address}/>
            </div>
            
        </div>
    </div>
    )
  
}

export default RobotFile