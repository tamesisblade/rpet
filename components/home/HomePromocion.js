import React from 'react'
import HomePromocionResponsive from './utils/HomePromocionResponsive'

function HomePromocion() {
    return (
       
<div>
    <div className="d-block d-sm-block d-lg-none ">
         <HomePromocionResponsive/>
    </div>    

       
    <div style={{overflow:"hidden"}}>     
        <div className="home-promocion-bg d-none d-sm-none d-lg-block" style={{ 
            backgroundImage: `url("./img/home/home-promocion.jpg")`,
            backgroundPosition: "center",
            height: "70vh",
            backgroundSize: "cover"
            
          }}>
            
           <div className="container " style={{marginLeft:"110px", marginTop:"50px", color:"#fff"}}>
               <div style={{paddingTop:"80px;"}}>
                    <div className="row">
                        <div className="col-lg-3">
                            <h3>Sale up to 30%</h3>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-5">
                            <h1 className="home-promocion-h1" style={{fontSize:"50px"}}>Everything For Pet</h1>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-5">
                            <p>
                                Healthy Pets! We hand pick and research the foods we carry to take the worry out of the process of buying the right food for your pet. We sale up to 30% everything for pet.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-3">
                            <button style={{background:"none",padding:"15px 20px",border:"1px #fff solid",color:"#fff"}}>
                                View Now
                            </button>
                        </div>
                    </div>
                </div>
           </div>   
        </div>     
    </div>
</div>
    )
}

export default HomePromocion
