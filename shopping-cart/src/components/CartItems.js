import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidepanel from "./Sidepanel";

function CartItems({data, getCheckout}){
	
	// const cartItems = data;

	const [ cartItems, setCartItems ] =  useState (data);

	const [ myCart, setMycart ] =  useState ([]);

	function addToCart(item){
		let existFlag = false;
		let newArr = [...myCart];
		newArr.map((ele,i) => {
			if(ele.id === item.id){
				newArr[i].count = newArr[i].count+1; 
				existFlag = true;
				return;
			}
		});
		if(!existFlag){
			item.count = 1;
			setMycart(oldArray => [...oldArray, item]);
		}else{
			setMycart(newArr);
		} 
	}

	function removeCartItem(id){
		const newArr = [...myCart];
		const filteritem = newArr.filter((item) => item.id !== id);
		setMycart(filteritem);
	}

	function showCheckout(){
		const newArr = [...myCart];
		const totalAmount = newArr.reduce((total, item) => {
			return Number(total) + Number(item.price * item.count);
		  }, 0);
		  getCheckout(totalAmount); 
	}

	function SearchItem(e){
		const newArr = data;
		const searchValue = e.target.value;
		const filtered = !searchValue
			? data : newArr.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()) );
		setCartItems(filtered);
	}

	useEffect(()=>{
		
	})
	
	return(
		<section className="section">
			<Card.Text>
				<input type="email" placeholder="Search by Title or Description" className="input" onChange={(e)=>SearchItem(e)}></input>
			</Card.Text>
			<Row className="items">
				<Col md={9}>	
					<Row xs={1}  md={3} lg ={4}>
						{cartItems && cartItems.map((item,i) => (
							<div className="cart-items" key={i}>
								<Col>
									<Card>
										<Card.Img variant="top" className="cart-img" src={item.image} />
										<Card.Body>
											<Card.Title className="font-14">{item.title}</Card.Title>
											<Card.Text className="font-14">Price: ${item.price}</Card.Text>
											<Card.Text className="ellipsis font-14">
												{item.description}
											</Card.Text>
											<Button className="btn-primary width-100 " onClick={() => addToCart(item)}>Add To Cart</Button>
										</Card.Body>
									</Card>
									
								</Col>
							</div>
						))}
					</Row>
				</Col>
				<Col md={3}>
					<Sidepanel 
						myCart = {myCart} 
						removeCartItem={removeCartItem}
						showCheckout={showCheckout}
					></Sidepanel>
				</Col>
			</Row>

		</section>
	)
	
}


export default CartItems;