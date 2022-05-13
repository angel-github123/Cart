import React, { useState } from "react";
import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";
import Title from "../components/Title";
import data from "./data";

function List(){

	const [ amount, setAmount ] =  useState (0);
	const [ page, setPage ] = useState("cart");

	function getCheckout(value){
		console.log(value);
		setAmount(value);
		setPage("checkout");
	}

	function getCart(){
		setAmount(0);
		setPage("cart");
	}
	
	return( 
		<div>
			{page === "cart" && 
			<><Title title="Shopping cart"></Title><CartItems data={data} getCheckout={getCheckout}></CartItems></>}

			{page === "checkout" && <><Title title="Complete your order"></Title><Checkout amount={amount} getCart={getCart}></Checkout></>}
			
			
		</div>
	);
}

export default List;