import React from "react";
function Fullpage(){
    return(
        <>
        <div className="fullPage">
            <img className="./img/cartImg" src=" " alt=""/>
            <div className="cartText">
                <h1>Trends Offer : Trending Shop <br></br> Now</h1>
                <h2>Special Price</h2>
                <h2>$11</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div className="btn">
                    <button>Buy Now</button>
                    <button >Add To Cart</button>

                </div>
                <div className="btns">
                    <button className="relode">Back </button>
                </div>
            </div>
            

        </div>
         {/* add to cart  */}
         <div className="addCart">

</div>

<div className="blogContent">
    <div className="head">
        <h1>Trends Top <span>Blog's</span></h1>
    </div>

    <div className="trd">
        <div className="trending">
            <img src="./img/tr1.webp" alt=""/>
            <div className="txt">
                <h3>Trending Girl Cloths</h3><br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, animi expedita?</p><br/>
                <a href="#">Read More</a>
            </div>
        </div>
        <div className="trending">
            <img src="./img/tr3.webp" alt=""/>
            <div className="txt">
                <h3>Trending Boys Cloths</h3> <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, animi expedita?</p><br/>
                <a href="#">Read More</a>
            </div>
        </div>

    </div>
</div>


        </>
    )
}
export default Fullpage