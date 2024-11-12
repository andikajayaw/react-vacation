import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage"

import './assets/scss/style.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={LandingPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
