import React from "react";
import closeIcon from '../Assets/Navbar/close.svg'


const ProductDetails = ({ selectedProduct, addItemToCart, hideMore }) => {

  return (
/*     <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p> */
      /* Add more details here based on your product data */
/*     </div> */

<div  className='container' style={{display:'block',position:'fixed',top:"1%", left:'10%', backgroundColor:'rgba(50,50,50,0.7)', height:'100%', width:'100%'}}>
<div className='container' style={{ position:'relative',top:"30%", backgroundColor:'white'}}>
  <div className='row'>
    <div className='col'>
    <img src={selectedProduct.product_full_image} style={{width:'300px', height:'300px'}}></img>
  </div>
  <div className='col'>
    <div className='container' style={{backgroundColor:'white', height:''}}>
    <h5>{selectedProduct.product_name}</h5>
    <p style={{fontSize:'14px'}}>{selectedProduct.product_description}</p>
    <h5>KES {selectedProduct.unit_price}</h5>
    <img style={{ width: "50px", height: "50px", float:'right' }} src={closeIcon} onClick={hideMore}></img>
    <button name={selectedProduct.product_name.slice(0,7)} className='btn btn-primary' onClick={addItemToCart}>Add to Cart</button>
  </div>
  </div>
</div>
</div>


</div>  
  );
};

export default ProductDetails