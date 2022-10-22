import React from 'react'

function SearchRobot({setSearchRobot}) {
  return (
    <div className='text-center'>
        <input onChange={(e) => setSearchRobot(e.target.value)} className='robot-search-bar' type="text" placeholder='Search a robot' />
    </div>
  )
}

export default SearchRobot