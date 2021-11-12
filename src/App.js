import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './components/home';
import SideBar from './components/sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<SideBar/>} />
        {/* <Route path="/home" component={(props) => <Home {...props} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
