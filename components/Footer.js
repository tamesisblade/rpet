import React from 'react'

function Footer() {
    return (
        <div className="container-fluid mt-5 ">
            <div className="row ">
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid footer-img" src="./img/home/logo.jpg" width="200"/>
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-9">
                           <ul  className="text-center text-sm-center" style={{listStyle:"none",position:"relative",right:"20px"}}>
                               <li >No 24 New York City 184/2</li>
                               <li>+ (174) 1800-664-6766</li>
                               <li>petoria@example.com</li>
                               <li>petoria-store.com </li>
                               
                           </ul>
                        </div>

                    </div>

                    <div className="row mt-2 mb-3 mb-sm-3" style={{marginLeft:"2px"}}>
                        <div className="col-lg-8 col-4 col-sm-4  col-md-4 offset-md-5  offset-3 offset-sm-3 offset-lg-0">
                            <div className="row ">
                                <div className="col-lg-2 col-1 col-sm-1">
                                    <i className="fab fa-twitter footer-icon"></i>
                                </div>
                                <div className="col-lg-2 col-1 col-sm-1">
                                    <i className="fab fa-dribbble  footer-icon"></i>
                                </div>
                                <div className="col-lg-2 col-1 col-sm-1">
                                    <i className="fab fa-behance  footer-icon"></i>
                                </div>
                                <div className="col-lg-2 col-1 col-sm-1">
                                    <i className="fab fa-instagram  footer-icon"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-8">
                            <h5 class="footer-titulo">Help & Infomation</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr  className="footer-hr" style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p footer-subtitulo">Pagination</p>
                            <p className="footer-p footer-subtitulo">Terms & Conditions</p>
                            <p className="footer-p footer-subtitulo">Contact </p>
                            <p className="footer-p footer-subtitulo">Accessories</p>
                            <p className="footer-p footer-subtitulo">Term Of Use</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    
                <div className="row">
                        <div className="col-lg-8">
                            <h5 className="footer-titulo">About us</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr className="footer-hr" style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p footer-subtitulo">Help Center </p>
                            <p className="footer-p footer-subtitulo">Address Store </p>
                            <p className="footer-p footer-subtitulo">Privacy Policy  </p>
                            <p className="footer-p footer-subtitulo">Receivers & Amplifiers </p>
                            <p className="footer-p footer-subtitulo">Petoria</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    
                <div className="row">
                        <div className="col-lg-8">
                            <h5 className="footer-titulo">Profile</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <hr className="footer-hr"  style={{width:"40px",color:"black"}}></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <p className="footer-p footer-subtitulo">My Account </p>
                            <p className="footer-p footer-subtitulo">Checkout </p>
                            <p className="footer-p footer-subtitulo">Order Tracking  </p>
                            <p className="footer-p footer-subtitulo">Help & Suppport</p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
