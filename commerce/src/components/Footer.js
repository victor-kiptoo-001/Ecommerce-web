import React from "react";
import facebooklogo from '../Assets/Footer/facebooklinkimage.png'
import instagramlogo from '../Assets/Footer/instagramlinkimage.png'
function Footer(){

    const footerStyle={
        height:"auto",
        backgroundColor: '#1D7773',
        overflow: 'hidden'
    }

    const footerInfoStyle={
        float:"left",
        color:"white"
    }

    const socialMediaLinksStyle={
        width:"50px",
        height: "50px",
        padding: "5px"
    }

    return(
        <footer className="bottom" style={footerStyle}>
            <div className="row">
                <div className="col">
                    <div className="container" style={footerInfoStyle}>
                    <h6>Find Us</h6>
                    <p style={{fontSize:"12px"}}>Fleet Street
                        Nairobi City Centre
                    </p>
                    <p style={{fontSize:"12px"}}>Open 9AM - 6PM</p>
                    <h6>Contact Us</h6>
                    <p style={{fontSize:"12px"}}>0792 000 000 </p>
                    
                </div>
            </div>
                <div className="col" style={{color:"white"}}>
                    <h4>Social Media</h4>
                    <img src={facebooklogo} style={socialMediaLinksStyle}></img>
                    <img src={instagramlogo} style={socialMediaLinksStyle}></img>
                </div>


            </div>
        </footer>
    )
}

export default Footer