import React, { useState } from "react";
import ProductDetails from "./ProductDetail";
import Payment from "./Payment";
import CartNoOfItems from "./CartNoOfItems";
import closeIcon from '../Assets/Navbar/close.svg'
import {useNavigate} from 'react-router-dom'
const Cart = ({cartItems, removeItemFromCart, itemsCount, increaseQuantity,toggleCart}) => {
 

  // function addItemToCart(selectedProduct) {
  //   // Assuming the "products" array is defined or imported from somewhere
  //   // const existingItem = products.find((item) => item.product_name.includes(selectedProduct.product_name));
  //   // setCartItems([...cartItems, existingItem]);
  // }

  const navigate = useNavigate();

  const cartContainerStyle={
    width:"300px",
    backgroundColor:'rgb(211,224,237)',
    position:'fixed',
    top:'0px',
    right:'20px',
    border: '5px solid white',
    borderRadius:'20px',
    paddingTop: '20px'}

  const CartStyle={
    
  }

  const buttonStyle={
    width:"70px",
    fontSize:'12px'
  }

  return (
    <>
    <div className="container">

    </div>
    <div className="container" style={CartStyle}>
      <h4>Cart:</h4>
      <img onClick={toggleCart} style={{position:'absolute', float:"right",top:"1%", right:'1%', width:'50px',height:'50px'}} src={closeIcon}></img>
      <div className="row">
      {cartItems.map((item) => (
        <div key={item.product_name} className="container" style={{height:'270px'}}>
          <div key={item.id}>
            <img src={item.product_full_image} style={{width:'100px',height:'100px'}}></img>
            <h5 style={{fontSize:'15px'}}>{item.product_name}</h5>
            <p>{item.unit_price}</p>
            <p>Qty selected: {itemsCount}</p>
            <div className="row">
              <div className="col">
                <button style={buttonStyle} name={item.product_name} className="btn btn-secondary" onClick={removeItemFromCart}>Remove</button>
              </div>
              <div className="col">
                <button key={item.product_name} name={item.product_name.slice(0,6)} style={buttonStyle} className="btn btn-secondary" onClick={increaseQuantity}>Qty+</button>
              </div>
            </div>
            
          </div>
        </div>

      ))}
      </div>
      <div className="container">
        <CartNoOfItems cartItems={cartItems}/>
      </div>
      <button onClick={()=> navigate('Checkout')} className="btn btn-success">Checkout</button>
    </div>
    </>
    
  );
};


export default Cart;

