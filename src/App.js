import React from 'react';
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';

function App() {
  
  return (
    <div className="App">
      {Robots.map((robot,index) =>{
        return(
          <div>
            <h1>Robot finder</h1>
            <RoboCard index={index} robot={robot}  />
          </div>
        )
      })}
    </div>
  );
}

export default App;
