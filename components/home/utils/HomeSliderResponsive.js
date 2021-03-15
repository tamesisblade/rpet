import React from 'react'

function HomeSliderResponsive() {
    return (
        <div style={{position:"relative"}}>
             <div className="carousel-inner d-block d-sm-block d-md-none d-lg-none" >
                <div className="carousel-item active " >
                    <img src="./img/home/fondohome.jpg" className="d-block w-100 home-slider-img"  alt="..." />
                    <div className="carousel-caption  ">

                        <div className="word-slider " style={{width:"100px", position:"relative",bottom:"0px",left:"0px"}}>
                                <p style={{fontSize:"14px"}}>Sale Up To 10%</p>
                        </div>

                        <div className="word-slider " style={{width:"250px" , position:"relative",bottom:"0px",left:"0px"}}>
                                <p  style={{fontSize:"25px"}}>Accesories For Pet</p>
                        </div>

                        <div className="word-slider " style={{width:"250px" , position:"relative",bottom:"0px",left:"0px"}}>
                                <p  style={{fontSize:"15px"}}>Make your Pet's Day With Our Range Of Pet accessories at Petoria today. Our Pet Bandamas are handmade to the highest quality for you pet!</p>
                        </div>
                        <div className="word-slider  " style={{width:"150px" , position:"relative",bottom:"0px",left:"0px"}}>
                            <button style={{position:"relative", color:"#fff", background:"none",border:"1px #fff solid",padding:"5px 20px"}}>VIEW NOW</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./img/home/fondohome2.jpg" className="d-block w-100 home-slider-img" alt="..." />
                    <div className="carousel-caption  ">
                    
                        <div className="word-slider2 " style={{width:"100px", position:"relative",bottom:"25px",left:"150px"}}>
                                <p style={{fontSize:"15px"}}>Sale 25% Off</p>
                        </div>

                        <div className="word-slider2  " style={{width:"250px" , position:"relative",bottom:"40px",left:"43px"}}>
                                <p  style={{fontSize:"25px"}}>Love Your Pets</p>
                        </div>

                        <div className="word-slider2 " style={{width:"250px" , position:"relative",bottom:"45px",left:"10px"}}>
                                <p  style={{fontSize:"15px"}}>Shop Petoria for the best pet food. Toys and treats and pet supplements plus so much more!</p>
                        </div>
                        <div className="word-slider2 " style={{width:"150px" , position:"relative",bottom:"45px",left:"120px"}}>
                            <button style={{ color:"#fff", background:"none",border:"1px #fff solid",padding:"5px 20px"}}>VIEW NOW</button>
                        </div>
                    </div>
                </div>

         
         
            </div>
        </div>
    )
}

export default HomeSliderResponsive
