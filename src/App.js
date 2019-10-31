import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MovieList from './Pages/MovieList';
import MovieStat from './Pages/MovieStat';
import './style/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-nav">
          {/* <li> */}
            <Link to="/">Home</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/stat">Click Statistics</Link>
          {/* </li> */}
        </div>
        <div className="app-list-container">
          <Route exact path = '/' component={MovieList} />
        </div>
          <Route path='/stat' component={MovieStat} />
      </div>
    </Router>
  );
}

export default App;
