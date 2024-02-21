import React from "react";
import shoe1 from '../Assets/Home/shoe.jpeg'
import shoe2 from '../Assets/Home/shoes2.jpg'
import customAsset from '../Assets/Home/Asset 1.svg'

function Home(){
     const carouselContainerStyle={
        height:"500px",
        width: "auto"        
    } 
    const imageStyle={
        position:"relative",
        width:"100%",
        height:"500px"
    }

    const containerStyle={
        fontFamily: "Franklin-Gothic-Medium",
        height:"250px",
        textAlign: "center"
    }

    const customAssetContainer={
        position:"relative",
        width: "70%",
        height: "auto"
    }

    return(
        <>
{/*     <div className="container-fluid" style={carouselContainerStyle}>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src= style={imageStyle} class="d-block" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src={shoe2} style={imageStyle} class="d-block" alt="..."></img>
                </div>
            </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div> */}





{/*         <div className="container-fluid">
            <img src={homePageimage}></img>
        </div> */}
        </>
    )
}

export default Home