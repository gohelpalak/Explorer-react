import React from "react";
function Contact(){
    return(
        <>
         {/* contact  */}

         <div className="contact">
            <div className="contactBanner">
                <h1>#Let's Connect</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure eos!</p>

            </div>
            <div className="connect">
                <div className="connectText">
                    <h1>Visit Our Office or Contact <br></br> Us Today</h1>
                    <p>Address : Dablin Park, England, New york</p>
                    <p>Contact : dumiemail@gmail.com</p>
                    <p>Number : 999999000011</p>
                </div>
                <img src="./img/map.PNG" alt=""/>
            </div>

            <div className="form">
                <h1>Connect with Us. Fill Form</h1>
                <input type="text" placeholder="Enter Your FirstName"/> <br/>
                <input type="text" placeholder="Enter Your LsstName"/><br/>
                <input type="text" placeholder="Enter Your Email"/><br/>
                <input type="text" placeholder="Enter Your Number"/><br/>
                <input type="text" placeholder="Enter Your Address"/><br/>
                <button>Submit</button>

            </div>
        </div>
        <div className="letter">
            <div className="sign">
                <h2>Sign Up for NewsLetter</h2>
                <p>Lorem ipsum dolor sit, amet consectetur Special Offer</p>
            </div>
            <div className="inp">
                <input type="text" placeholder="Enter Email Address"/>
                <button>Sign Up</button>
            </div>
        </div>

        </>
    )
}
export default Contact