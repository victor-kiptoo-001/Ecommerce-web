import React from 'react';

const CartNoOfItems = ({ cartItems }) => {
  const getTotalItems = () => {
    // Calculate the total number of items in the cart.
    //return cartItems.reduce((total, item) => total + item.quantity, 0);
    
    return cartItems.length
  };

  const getTotalValue=function(){
    const initialValue = 0;
    const total = cartItems.reduce((accumulator, {unit_price}) => accumulator + unit_price, initialValue);
    return total
  }


  return (
    <div>
      <br></br>
      <span>Cart Items: {getTotalItems()}</span>
      <br></br>
      <h2 style={{fontFamily:"Franklin-Gothic-Medium"}}>Total: {getTotalValue()}</h2>
    </div>
  );
};

export default CartNoOfItems;
