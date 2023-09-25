// App.js
//React 
import React, { useState } from 'react';
//Router
import { Routes, Route, Link } from 'react-router-dom';
//Pages
import ProductComponent from "./Product"
import LandingPageComponent from './LandingPage';
import MainHeader from "./octoHeader";
import Legal from "./Legal"
import UserProfile from"./userProfile";
import InterestCalc from "./InterestCalculator";
import Toggle from "./stateTest"
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//CSS
import "./header-style.css";


//Prop Variables
const productPromoProp = "Sale";

function App() {
  //Set state for user logged in/out...? Currently set to true i.e. user is logged in. s
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //Function prop to change state of user logged in to be passed to btn handle event.
  const handleLogout = () => {
    // Call this function to log the user out
    setIsLoggedIn(false);
  };
  return (
    <div>
     {/* NavBar JSX */}
     <MainHeader isLoggedIn={isLoggedIn} />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">OCTOHOODIE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/legal">Legal</Nav.Link>
            <Nav.Link as={Link} to="/userprofile">User</Nav.Link>
            <Nav.Link as={Link} to="/calculator">Interest Calculator</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      {/* //Global Routing */}
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/product" element={<ProductComponent productPromoProp = {productPromoProp} />} />
        <Route path="/legal" element={<Legal />} />
        {/* //onLogout variable defined with value if handleLogout to be used by btn */}
        <Route path="/userprofile" element={<UserProfile UserProfile onLogout={handleLogout}/>} />
        <Route path="/calculator" element={<InterestCalc/>} />
        <Route path="/toggle" element={<Toggle/>} />
        {/* Toggle state when dom reload */}
        <Route path="/toggle" element={<Toggle onLogout={handleLogout} />}
        />
      </Routes>

    </div>
  );
}
export default App;


