import React,{useState} from 'react'
import Cardf1c1 from './cards/Cardf1c1';
import Cardf1c2 from './cards/Cardf1c2';
import Cardf1c3 from './cards/Cardf1c3';
import Cardf1c4 from './cards/Cardf1c4';

function NewCardFila1() {

    const [imagenSelect, setImagenSelect] = useState('');
    const [imagenSelectColumn3, setImagenSelectColumn3] = useState('');
    const handleMenuIcon = (name) => {
        setImagenSelect(name);
    }
    const handleMenuIconColum3 = (name) => {
        setImagenSelectColumn3(name);
    }

    return (
       
        <div className="row ml-1 ml-sm-1" >
            <div className="col-lg-3 col-6 col-sm-6">

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
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$15.99</h5>
                    </div>
                </div>
               
                <div className="row m-1">
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-start">
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('uno')}
                                    src="./img/home/products/new/home-product-f1c1.jpg"
                                    className="img-fluid home-product-menu-image"
                                />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('dos')}
                                    src="./img/home/products/new/home-product-f1c1dos.jpg" 
                                    className="img-fluid home-product-menu-image"
                                    />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('tres')}
                                    src="./img/home/products/new/home-product-f1c1tres.jpg" 
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                        </div>
                    </div>

                  

                </div>

            </div>
            {/* Termina Menu Product Fila 1 Columna 1 */}
            <div className="col-lg-3 col-6 col-sm-6">
                
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c2/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Puppy Dog Food Pro Pac</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$36.99</h5>
                    </div>
                </div>
            </div>

            {/* Termina Menu Product Fila 1 Columna 2 */}

            <div className="col-lg-3 col-6 col-sm-6">
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c3 imagenSelect={  imagenSelectColumn3 }/>
                        
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Soft Dog & Cat Carrier Bag</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$48.50</h5>
                    </div>
                </div>
               
                <div className="row m-1">
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-start">
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum3('uno')}
                                    src="./img/home/products/new/home-product-f1c3.jpg"
                                    className="img-fluid home-product-menu-image"
                                />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum3('dos')}
                                    src="./img/home/products/new/home-product-f1c3dos.jpg"
                                    className="img-fluid home-product-menu-image"
                                    width="1000"
                                    />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum3('tres')}
                                    src="./img/home/products/new/home-product-f1c3tres.jpg"
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                        </div>
                    </div>

                  

                </div>
            </div>
            {/* Termina Menu Product Fila 1 Columna 3 */}
            <div className="col-lg-3 col-6 col-sm-6" >
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c4/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Adult Cat Food Earthborn</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$40.00 <span style={{marginLeft:"5px" , color:"#ccc",textDecoration:"line-through"}}>$50.00</span></h5>
                    </div>
                </div>
            </div>
            {/* Termina Menu Product Fila 1 Columna 4 */}
        </div>
        
    )
}

export default NewCardFila1
