import React from "react";
import Heading from "./Heading";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Sidepanel({myCart, removeCartItem, showCheckout}){
	const cartItems = myCart;

	function getEmptyMsg(){
		return(
			<div className="text-centre">
				<Card.Body>
					<Card.Text>
						Your cart is empty!
					</Card.Text>
				</Card.Body>
			</div>
		);
	}

	return(
		<section className="sidepanel-section">
			<div className="sidepanel">
				<Heading></Heading>
					{cartItems.map((item,i) => (
					<div className="my-cart padding-2" key={i}>
							<Card>
								
								<Card.Body>
									<Card.Title className="font-14">{item.title}</Card.Title>
									<Card.Text className="font-14">
										Price: ${item.price}
									</Card.Text>
									<Card.Text>Qty: {item.count}</Card.Text>
									<Button className="btn-secondary float-rt" onClick={() =>removeCartItem(item.id)}>Remove</Button>
								</Card.Body>
							</Card>
						</div>
					))}
					{cartItems?.length === 0 ? getEmptyMsg():""}
					
				</div>
				{cartItems?.length>0 && <Button className="btn-primary fixed-btn width-100" onClick={() => showCheckout() }>Checkout</Button>}
		</section>
	)
}

export default Sidepanel;