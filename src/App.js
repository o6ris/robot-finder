import React from 'react';
/** Import de la donnée */
import './App.css';
import RoboCard from './components/RoboCard';
import Robots from './data/data';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <RoboCard />
    </div>
  );
}

export default App;
