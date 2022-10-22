import React from 'react'

function ShowMoreRobots({numberOfRobots, setNumberOfRobots, robots }) {
  return (
    <div className='d-flex justify-content-center'>
        <button onClick={() => setNumberOfRobots(numberOfRobots+4) } className='robot-button mb-5'>
        {numberOfRobots >= robots.length?'No more Robots':'Show More'}
          </button>
    
      </div>
  )
}

export default ShowMoreRobots