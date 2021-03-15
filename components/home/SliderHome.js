import React from 'react'
import Layout from './SliderHome'
import styles from '../../styles/Home.module.css'
import HomeSliderResponsive from './utils/HomeSliderResponsive'
function SliderHome() {
    return (
    <div>
     
       
     <div id="carouselExampleIndicators"  className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
         
        </div>
       
       {/*HOME SLIDER RESPONSIVE*/}
        <HomeSliderResponsive/>
       {/*END HOME SLIDER RESPONSIVE*/}
        <div className="carousel-inner d-none d-sm-none d-md-block d-lg-block" >
          <div className="carousel-item active " >
            <img src="./img/home/fondohome.jpg" className="d-block w-100 home-slider-img"  alt="..." />
            <div className="carousel-caption d-none d-md-block ">

                 <div className="" style={{width:"200px", position:"relative",bottom:"120px",right:"50px"}}>
                        <p style={{fontSize:"18px"}}>Sale Up To 10%</p>
                </div>

                <div className="" style={{width:"600px" , position:"relative",bottom:"130px",right:"60px"}}>
                        <p  style={{fontSize:"60px"}}>Accesories For Pet</p>
                </div>

                <div className=" " style={{width:"550px" , position:"relative",bottom:"130px",right:"25px"}}>
                        <p  style={{fontSize:"20px"}}>Make your Pet's Day With Our Range Of Pet accessories at Petoria today. Our Pet Bandamas are handmade to the highest quality for you pet!</p>
                </div>
                <div className=" " style={{width:"200px" , position:"relative",bottom:"120px",right:"60px"}}>
                       <button style={{position:"relative", left:"10px",color:"#fff", background:"none",border:"1px #fff solid",padding:"15px"}}>VIEW NOW</button>
                </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./img/home/fondohome2.jpg" className="d-block w-100 home-slider-img" alt="..." />
            <div className="carousel-caption d-none d-sm-none d-md-block ">
              
                <div className="word-slider2 " style={{width:"200px", position:"relative",bottom:"110px",left:"850px"}}>
                        <p style={{fontSize:"18px"}}>Sale 25% Off</p>
                </div>

                <div className="word-slider2 " style={{width:"600px" , position:"relative",bottom:"130px",left:"500px"}}>
                        <p  style={{fontSize:"60px"}}>Love Your Pets</p>
                </div>

                <div className="word-slider2  " style={{width:"500px" , position:"relative",bottom:"140px",left:"515px"}}>
                        <p  style={{fontSize:"20px"}}>Shop Petoria for the best pet food. Toys and treats and pet supplements plus so much more!</p>
                </div>
                <div className="word-slider2 " style={{width:"200px" , position:"relative",bottom:"135px",left:"850px"}}>
                       <button style={{position:"relative", left:"0px",color:"#fff", background:"none",border:"1px #fff solid",padding:"15px"}}>VIEW NOW</button>
                </div>
            </div>
          </div>

         
         
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
   

     <br>
     </br>

        </div>
    )
}

export default SliderHome
