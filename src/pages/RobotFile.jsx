import React, {useState} from 'react'
import RobotAddress from '../components/RobotAddress'

function RobotFile({robot, page}) {

  const[showLocalisation, setShowLocalisation] = useState(false);
 
    return (
      <div className='robot-singleCard d-flex flex-column rounded-4'>
        
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
            {/* Here I all these props to RobotAddress because I'll need them */}
            <RobotAddress
            address={robot.address}
            page={page}
            robot={robot}
            showLocalisation = {showLocalisation}
            setShowLocalisation={setShowLocalisation}/>
            </div>
            
        </div>
      
        <div className={!showLocalisation?'d-none':'d-flex flex-column align-items-center mt-5'}>
          <h3>Geolocalisation</h3>
          <div className='robot-geolocalisation'>
              <ul>
                <li>lat : {robot.address.geo.lat}</li>
                <li>lng : {robot.address.geo.lng}</li>
              </ul>
          </div>
        </div>
    </div>
    )
  
}

export default RobotFile