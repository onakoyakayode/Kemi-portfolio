import React from 'react';
import './App.css';
import Home from './component/Home/Home'
import Portfolio from './component/Portfolio/Portfolio';
import Header from './component/Header/Header';
import Resume from './component/Resume/Resume';
import Contact from './component/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename='/index.html'>
        <Routes>
          <Route exact path='/home' element = {<Home />} /> 
        </Routes>
        <Routes>
          < Route path='/header' element = {<Header />} />
        </Routes>
        <Routes>
          <Route path='/portfolio' element = {<Portfolio />} />
        </Routes>
        <Routes>
          <Route path='/resume' element = {<Resume />} />
        </Routes>
        <Routes>
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
