// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import CustomerDashboard from './Components/CustomerDashboard';
import VendorDashboard from './Components/VendorDashboard';

function App() {
  return (
  
    <Router>
      <Navbar/>
      <CustomerDashboard/>
        <Login/>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/customer-dashboard" component={CustomerDashboard} />
        <Route path="/vendor-dashboard" component={VendorDashboard} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
