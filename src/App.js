import React, {useState} from 'react';
import './App.css';
import RobotFinder from './pages/RobotFinder';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import NavBar from './components/NavBar';


function App() {
  const [page, setPage] = useState('Home')
  return (
    <div>
      <NavBar setPage={setPage}/>
      {page === 'RobotFinder'?<RobotFinder />:''}
      {page === 'Home'?<Home />:''}
      {page === 'Page2'?<Page2 />:''}
    </div>
  );
}

export default App;
