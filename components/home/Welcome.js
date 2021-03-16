import React from 'react'
import styles from '../../styles/Home.module.css'
import Modal from './Modal'
import VideoModal from './VideoModal'
function Welcome() {
    return (
        <div>
            <div className="row mt-5">
                {/*PARA EL  RESPONSIVE */}
                <div className="col-lg-6 col-12  col-sm-12 d-block d-sm-block d-lg-none d-xl-none">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="text-center text-sm-left">The Best Things For Pets</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <h5 className="text-center text-sm-left" style={{fontSize:"30px"}}>Welcome To Petoria</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-2 p-sm-2">
                            Petoria the ultimate pet shop experience. It really is a paradise for pets and pet owners. We have all the pet supplies, pet food, toys and accessories you and your pet need at great value prices. All our store colleagues are fully trained in pet care and dedicated to the welfare of your animals, with most of them being experienced pet owners.
                            <p></p>
                            So when you are a new owner or an expert, our store colleagues are on hand to help you make the right choices. We also have a fantastic range of free, informative care for you to take away, offering help and advice on how to look after your pet.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mt-4 mb-4 mb-sm-4  ">
                            <button className="home-welcome-button"  style={{fontSize: "20px", background: "none",padding: "15px 20px", border: "1px #000 solid"}}>
                                View Now
                            </button>
                        </div>
                    </div>
                </div>
                 {/*PARA EL  RESPONSIVE */}

                <div className="col-lg-6 col-md-12 col-12 col-sm-12">
                    
                    <Modal/>  
                </div>

                <div className="col-lg-6 d-none d-sm-none d-lg-block d-xl-block">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5>The Best Things For Pets</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <h5 style={{fontSize:"50px"}}>Welcome To Petoria</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                            Petoria the ultimate pet shop experience. It really is a paradise for pets and pet owners. We have all the pet supplies, pet food, toys and accessories you and your pet need at great value prices. All our store colleagues are fully trained in pet care and dedicated to the welfare of your animals, with most of them being experienced pet owners.
                            <p></p>
                            So when you are a new owner or an expert, our store colleagues are on hand to help you make the right choices. We also have a fantastic range of free, informative care for you to take away, offering help and advice on how to look after your pet.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mt-4">
                            <button className="welcome_view_button">View Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Welcome
