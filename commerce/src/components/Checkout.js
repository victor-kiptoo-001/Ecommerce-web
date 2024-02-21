import React from "react";
import CheckoutForm from "./CheckoutProcess";
import CartNoOfItems from "./CartNoOfItems";
import customAsset from '../Assets/Home/Asset 1.svg';
import { useNavigate } from "react-router-dom";

function Checkout({cartItems}){

  const navigate = useNavigate();
  
    const cardStyle={
      width:'300px'
    }
  
    const buttonStyle={
      width:"70px",
      fontSize:'12px'
    }

    const containerStyle={
      fontFamily: "Franklin-Gothic-Medium",
      height:"280px",
      textAlign: "center",
      paddingTop:"20px"
    }

    const customAssetContainer={
      position:"relative",
      width: "80%",
      height: "auto"
  }

    return(
        <>
        <div className='container-fluid'>
          <div className="container" style={containerStyle}>
            <h1 style={{color:"#1D7773", fontSize:"72px"}}>Checkout</h1>
          <div className="container" style={customAssetContainer}>
            <img src={customAsset}></img>
          </div>
          <div className="container">
            <p>Not Done yet?</p>
            <button onClick={()=> navigate('/')} className="btn btn-primary">Go back to Shopping</button>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="row">
            {cartItems.map(product => (
            <div key={product.product_name} className="col" style={{padding:"10px"}}>
            <div  className="card" style={cardStyle}>
              <img style={{position:"relative", marginLeft:"15%", width:"200px", height:"200px"}} className="card-img-top" src={product.product_full_image} alt="Card image cap"></img>
              <div className='card-header' style={{height:"10rem"}}>
                <p style={{fontFamily:"Franklin-Gothic-Medium",fontSize:"20px", color:"black"}} className='card-text'>{product.product_name.slice(0,20)}</p>
              </div>
              <div className='card-header'>
                <h5 style={{color:"black"}}>Price: {product.unit_price}</h5>
              </div>
              <div className='card-header'>
              <div className='row'>
              </div>
              </div>
          </div>
        </div>
          ))}
          </div>
        </div>
        <div className="container">
          <CartNoOfItems cartItems={cartItems}/>
        </div>
        <CheckoutForm />
        </>
    )
}
export default Checkout;