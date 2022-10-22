import React from 'react'

function NavBar({setPage}) {
  return (
    <div>
        <nav>
          <ul className='robot-navbar'>
            <li onClick={() => setPage('Home')}>Home</li>
            <div className='robot-menu'>
                <li onClick={() => setPage('RobotFinder')}>Robot Finder</li>
                <li onClick={() => setPage('Page2')}>Page 2</li>
            </div>
          </ul>
        </nav>
      </div>
  )
}

export default NavBar