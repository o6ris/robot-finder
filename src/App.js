import React, {useState} from 'react';
import './App.css';
import RobotFinder from './pages/RobotFinder';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import NavBar from './components/NavBar';
import RobotFile from './pages/RobotFile';
import Robots from './data/data';


function App() {
  // Create the state page with value 'home' per default
  const [page, setPage] = useState('Home')

  

  
  return (
    <div>
      {/* Call the component NavBar and send it the setPage function */}
      <NavBar setPage={setPage}/>

      {/* 3 ternary that display 3 page depending on page state value */}
      {page === 'RobotFinder'?<RobotFinder setPage={setPage} page={page} />:''}
      {page === 'Home'?<Home setPage={setPage}/>:''}
      {/* {page === 'Page2'?<Page2 />:''} */}

      {/* I filter Robots by ID and give it to page state as value.
      And map Robots to display Only one robot by its ID in RobotFile */}
      {
      Robots
      .filter(robot => page === robot.id)
      // Here I send page value to RobotFile
      .map((robot,index) => <RobotFile 
      robot={robot} 
      index={index} 
      page={page}
      setPage={setPage}
      /> )
      }
    </div>
  );
}

export default App;
