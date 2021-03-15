import React from 'react'
import styles from '../../styles/Home.module.css'
function HomeAnimal() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4">

                    <div className="row">
                        <div className="col-lg-12">
                            <div  style={{borderRadius:"50%", overflow:"hidden"}}>
                            <img src="./img/home/home-animal1.jpg" className="img-fluid home-animal-image" width="300" style={{borderRadius:"50%"}}/>
    
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <h3 className="text-center home-animal-p">Golden</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{opacity:"0.7"}}>
                                The Golden Retriever is an active, playful dog, and they are very loyal and intelligent
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div  style={{borderRadius:"50%", overflow:"hidden"}}>
                                <img src="./img/home/home-animal2.jpg" className="img-fluid home-animal-image" width="300" style={{borderRadius:"50%"}}/>
                            </div>
                           
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <h3 className="text-center home-animal-p">Kitten</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{opacity:"0.7"}}>
                                Kittens require a high calorie diet, and should contain more protein than that of an adult cat.
                            </p>
                        </div>
                    </div> 

                </div>
                
                <div className="col-lg-4">
                <div className="row">
                        <div className="col-lg-12">
                            <div  style={{borderRadius:"50%", overflow:"hidden"}}>
                                <img src="./img/home/home-animal3.jpg " className="img-fluid home-animal-image" width="300" style={{borderRadius:"50%"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <h3 className="text-center home-animal-p">Beagle</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{opacity:"0.7"}}>
                                Beagle dogs are easy to raise, friendly and lovable to humans, able to watch the house and play.
                            </p>
                        </div>
                    </div> 
                </div>
               
            </div>
        </div>
    )
}

export default HomeAnimal
