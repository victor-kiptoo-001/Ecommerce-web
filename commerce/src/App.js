import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart'
import Home from './components/Home';
import DisplayProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import cartIcon from './Assets/Navbar/cart.png'
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import  Checkout from './components/Checkout'
import CheckoutForm from './components/CheckoutProcess'
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems]= useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const increaseQuantity = (event) => {
    //alert(event.target.name)
    const searchTerm = event.target.name
    const checkIfisAlreadyInCart = cartItems.find((item)=> item.product_name.includes(searchTerm))
    //alert(checkIfisAlreadyInCart)

    if (checkIfisAlreadyInCart.length != 0){
      setItemsCount((prevCount) => prevCount + 1);
    }
    //setItemsCount((prevCount) => prevCount + 1);
  };



  function toggleCart(){
    setShowCart(!showCart)
  }

  function removeItemFromCart(event){
    const nameOfItemSelected = event.target.name;
    //alert(nameOfItemSelected + "  Is to be removed")
    const returnItem = cartItems.filter((item)=> !item.product_name.includes(nameOfItemSelected))
    setCartItems(returnItem)
  }


  let cardStyle={
    width:"18rem"
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div className='container-fluid'>
          <DisplayProductList cartItems={cartItems} setCartItems={setCartItems}/>
          {showCart ? ( <div className='container' style={{width:"300px",backgroundColor:'rgb(211,224,237)', position:'fixed', top:'0px', right:'20px',border: '5px solid white', borderRadius:'20px', paddingTop: '20px'}}>
          <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} itemsCount={itemsCount} increaseQuantity={increaseQuantity} toggleCart={toggleCart}/>
      </div>):(<>
        <div style={{position:'fixed', top:'10%',right:"5%", backgroundColor:'white', border:"2px solid black", height:"90px", borderRadius:"20px"}}>
          <img onClick={toggleCart} src={cartIcon} style={{position:'fixed', top:'10%',right:"5%", width:'50px',height:'50px'}}></img>
          <p style={{position:'relative', top:'40px'}}>{cartItems.length} items in cart</p>
        </div>
      </>)}
          </div>} />
        <Route path="/Checkout" element={<Checkout cartItems={cartItems}/>} />
      </Routes> 

    <Footer />  
    </>


  );
}

export default App;
