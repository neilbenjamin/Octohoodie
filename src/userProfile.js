import React from "react";
import Button from 'react-bootstrap/Button';
import "./header-style.css";
//function passed as a prop to update logged in state
function logOut({ onLogout }) {
  function handleClick() {
    onLogout();
    window.alert("User has logged out");
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button variant="info" onClick={handleClick} className="logged-out-btn">
        LOG OUT
      </Button>
    </div>
  );
}

export default logOut;
