import React, {useState} from 'react';
import './App.css';
import RobotFinder from './pages/RobotFinder';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import NavBar from './components/NavBar';
import RobotFile from './pages/RobotFile';


function App() {
  // Create the state page with value 'home' per default
  const [page, setPage] = useState('Home')
  return (
    <div>
      {/* Call the component NavBar and send it the setPage function */}
      <NavBar setPage={setPage}/>
      {/* 3 ternary that display 3 page depending on page state value */}
      {page === 'RobotFinder'?<RobotFinder setPage={setPage}/>:''}
      {page === 'Home'?<Home setPage={setPage}/>:''}
      {page === 'Page2'?<Page2 />:''}
      {page === 'RobotFile'?<RobotFile />:''}
    </div>
  );
}

export default App;
