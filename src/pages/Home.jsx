import React from 'react'

function Home({setPage}) {
  return (
    <div className='robot-home-container'> 
      <div className='robot-header d-flex flex-column justify-content-center align-items-center'>
        <h1 className='mb-3 w-75'><small>Here's my first react web application : Find your favorite robot</small></h1>
        {/* On click the button allows to navigate to robot finder page */}
        <button onClick={() => setPage('RobotFinder')} className='robot-button-white w-50'>Find your Robot</button>
      </div>
      <div className='robot-main'>
      </div>
    </div>
  )
}

export default Home