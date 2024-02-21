import React from 'react';

const CartNoOfProducts = ({ cartProducts }) => {
  const getTotalProducts = () => {
    // Calculate the total number of products in the cart.
    return cartProducts.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <div>
      <span>Cart Items: {getTotalProducts()}</span>
    </div>
  );
};

export default CartNoOfproducts;
