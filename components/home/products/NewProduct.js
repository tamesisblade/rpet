import React,{useState} from 'react'
import Cardf1c1 from './cards/Cardf1c1';

function NewProduct() {
const [imagenSelect, setImagenSelect] = useState('');

const handleMenuIcon = (name) => {
    setImagenSelect(name);
}

    return (
        <div className="row">
            <div className="col-lg-3">

                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c1 imagenSelect={  imagenSelect }/>
                        
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Stainless Steel Bowl Dog & Cat</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <h5 className="home-product-price">$15.99</h5>
                    </div>
                </div>
                {/* home-product-f1c1dos */}
                <div className="row m-1">
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-start">
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('uno')}
                                    src="./img/home/products/home-product-f1c1.jpg"
                                    className="img-fluid home-product-menu-image"
                                />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('dos')}
                                    src="./img/home/products/home-product-f1c1dos.jpg" 
                                    className="img-fluid home-product-menu-image"
                                    />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('tres')}
                                    src="./img/home/products/home-product-f1c1tres.jpg" 
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                        </div>
                    </div>

                  

                </div>

            </div>
            <div className="col-lg-3">
                2
            </div>
            <div className="col-lg-3">
                3
            </div>
            <div className="col-lg-3">
                4
            </div>
        </div>
    )
}

export default NewProduct
