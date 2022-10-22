import React from 'react'

function ShowMoreRobots({numberOfRobots, setNumberOfRobots, robots }) {
  return (
    <div className='d-flex justify-content-center'>
      {/* Change the value of the state to display +4 robots at each click.
      Change the text button when there's no more robots to display.*/}
        <button onClick={() => setNumberOfRobots(numberOfRobots+4) } className='robot-button mb-5'>
        {numberOfRobots >= robots.length?'No more Robots':'Show More'}
          </button>
    
      </div>
  )
}

export default ShowMoreRobots