import React from 'react';
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';

function App() {
  
  return (
    <div>
      <h1>Robot finder</h1>
      <div className='text-center'>
        <input className='robot-search-bar' type="text" placeholder='Search a robot' />
      </div>
      <div className="robots-display">
        
        {Robots.map((robot,index) =>{
          return(
            <div>
              
              <RoboCard index={index} robot={robot}  />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
