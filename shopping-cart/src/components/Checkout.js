import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AlertMessage  from "./AlertMessage";
import { Col, Row } from "react-bootstrap";


function Checkout({amount, getCart}){

	const [ emailStatus, setEmailStatus ] = useState(false);
	const [success, setSucess] = useState(false);

	function validateEmail(e){
		const email = e.target.value;
		const mailformat = /\S+@\S+\.\S+/;
		if(mailformat.test(email))
		{	
			setEmailStatus(true);
			return true;
		}
		setEmailStatus(false);
		return false;
	}

	function submit(){
		if(emailStatus){
			setSucess(true);
			setTimeout(()=>{
				getCart();
			},2500);
			
		}
	}

	return(
		<section className="section">
			<Row>
				<Col md={3}></Col>
				<Col md={6}>
				<Card border="info" className="text-center">
		
					<Card.Body>
						<Card.Title>Thank you, for shopping with us !!</Card.Title>
						<hr />
						<Card.Text>
						Total Amount : ${amount.toFixed(2)}
						</Card.Text>

						<Card.Text>
						Enter your email:*
						<input type="email" className="input" onChange={(e)=>validateEmail(e)}></input>
					
						</Card.Text> 
						{!emailStatus && <AlertMessage variant="warning" message="Please enter a valid email address."></AlertMessage>}

						<Button className="btn-primary width-100" onClick={()=>submit()}>Submit</Button>
						<div>
						<br></br>
						{success && <AlertMessage variant="success" message="Order placed successfully,Thanks!!..."></AlertMessage>}
						</div>
						
						
					</Card.Body>
					
					</Card>
				</Col>
			</Row>
		</section>
	)
}

export default Checkout;