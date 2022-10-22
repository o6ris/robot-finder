import React from 'react'

function Home() {
  return (
    <div> 
      <div className='robot-header d-flex flex-column justify-content-center align-items-center'>
        <h1 className='mb-3 w-50'><small>Here's my first react application to find your favorite robot</small></h1>
        
        <button onClick={() => alert('bonjour')} className='robot-button-white w-25'>Find your Robot</button>
      </div>
      <div className='robot-main'>
      </div>
    </div>
  )
}

export default Home