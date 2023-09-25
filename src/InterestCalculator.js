//Import Vitals
//React
import React, { useState } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Component
function InterestCalc() {
    //Set state variables
  const [totalConsumerAmount, setTotalConsumerAmount] = useState("");
  const [numberOfMonths, setNumberOfMonths] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  // Validate inputs before firing function

  const validateInputs = () => {
    if (!totalConsumerAmount || !numberOfMonths) {
      alert("Please fill in both total amount and number of months.");
    } else {
      calculatePayments();
    }
  };

  //internal calculator
  const calculatePayments = () => {

    // Parse input values to numbers
    const totalAmount = parseFloat(totalConsumerAmount) || 0;
    const months = parseInt(numberOfMonths) || 0;
    
    // Calculate the monthly interest rate
    const annualInterestRate = 20; // 20% annual interest rate
    const monthlyInterestRate = (annualInterestRate / 12) / 100; // Convert to decimal and divide by 12
    
    // Calculate the monthly payment courtesy of openAi for solution and assign new variables for manipulation.
    const numerator = totalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;
    //Deduce total to new variable.
    const monthlyPaymentValue = numerator / denominator;

    // Calculate the total payment and assign to totalPaymentValue 
    const totalPaymentValue = monthlyPaymentValue * months;

    // Format currency to ZAR (South African Rand) and assign to formatter
    const formatter = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' });

    // Update state variables
    setMonthlyPayment(formatter.format(monthlyPaymentValue.toFixed(2)));
    setTotalPayment(formatter.format(totalPaymentValue.toFixed(2)));
  };
// JSX with varaibles declared inside React Bootstrap.
  return (
    <div className="justify-content-center text-center">
      <h2 className="centre-header">INTEREST CALCULATOR</h2>
      <Container className="calculator-container">
        <Row>
          <Col className="col1">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="total-consumer-amount">TOTAL</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={totalConsumerAmount}
                onChange={(e) => setTotalConsumerAmount(e.target.value)}
                required
              />
            </InputGroup>
          </Col>
          <Col className="col2">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="number-of-months">MONTHS</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={numberOfMonths}
                onChange={(e) => setNumberOfMonths(e.target.value)}
                required
              />
            </InputGroup>
          </Col>
          <Col className="col3">
            <h5>Interest @ 20%</h5>
          </Col>
          <Col className="col4">
            <Button variant="dark" onClick={validateInputs}>
              CALCULATE INTEREST
            </Button>
          </Col>
        </Row>
      </Container>
  
      {/* Display monthly and total payments in a similar structure */}
      {monthlyPayment && totalPayment && (
        <Container className="calculator-container">
          <Row>
            <Col className="col1">
              <p>Monthly Payment: {monthlyPayment}</p>
            </Col>
          </Row>
          <Row>
            <Col className="col1">
              <p>Total Payment: {totalPayment}</p>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}



export default InterestCalc;
