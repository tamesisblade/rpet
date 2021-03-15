import React from 'react'

function HomeSuscribe() {
    return (
        <div className="container " style={{marginTop:"60px"}}>
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src="./img/home/home-suscribe.jpg"/>
                </div>

                <div className="col-lg-6 mt-3">
                    <div className="mt-5" style={{padding:"60px 40px",background:"none",border:"1px #000 solid"}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">Subscribe our newsletter</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-center">Follow us and receive deals up to 30% all item</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter your email.." aria-label="Username" />
                                        <span className="input-group-text" style={{background:"#f97833"}}>
                                            <i className="fab fa-telegram-plane" style={{ color:"white",fontSize:"30px"}}></i>
                                        </span>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSuscribe
