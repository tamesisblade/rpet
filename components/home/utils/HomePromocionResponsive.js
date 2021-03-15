import React from 'react'

function HomePromocionResponsive() {
    return (
        <div>
            <div
             className="container" 
             style=
             {{ 
                backgroundImage: `url("./img/home/home-promocion.jpg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                
                color:"white"
            }}
            >
               <div style={{paddingTop:"30px;"}}>
                    <div className="row">
                        <div className="col-lg-3">
                            <h3>Sale up to 30%</h3>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-5">
                            <h1 className="home-promocion-h1" style={{fontSize:"30px"}}>Everything For Pet</h1>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-5  col-9 col-sm-9">
                            <p>
                                Healthy Pets! We hand pick and research the foods we carry to take the worry out of the process of buying the right food for your pet. We sale up to 30% everything for pet.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-lg-3 col-3 col-sm-3">
                            <button style={{background:"none",padding:"0px 30px",border:"1px #fff solid",color:"#fff", marginBottom:"10px"}}>
                                View Now
                            </button>
                        </div>
                    </div>
                </div>
           </div>   
        </div>
    )
}

export default HomePromocionResponsive
