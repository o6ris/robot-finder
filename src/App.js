import React, {useState} from 'react';
import './App.css';
import RobotFinder from './pages/RobotFinder';
import Home from './pages/Home';
import Page2 from './pages/Page2';


function App() {
  const [page, setPage] = useState('Home')
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li onClick={() => setPage('Home')}>Home</li>
            <li onClick={() => setPage('RobotFinder')}>Robot Finder</li>
            <li onClick={() => setPage('Page2')}>Page 2</li>
          </ul>
        </nav>
      </div>
      {page === 'RobotFinder'?<RobotFinder />:''}
      {page === 'Home'?<Home />:''}
      {page === 'Page2'?<Page2 />:''}
    </div>
  );
}

export default App;
