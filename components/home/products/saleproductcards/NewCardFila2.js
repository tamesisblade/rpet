import React,{useState} from 'react'

import Cardf2c1 from './cards/Cardf2c1';
import Cardf2c2 from './cards/Cardf2c2';
import Cardf2c3 from './cards/Cardf2c3';


function NewCardFila2() {

    const [imagenSelect, setImagenSelect] = useState('');
    const [imagenSelectColumn2, setImagenSelectColumn2] = useState('');

    const handleMenuIcon = (name) => {
        setImagenSelect(name);
    }
    const handleMenuIconColum2 = (name) => {
        setImagenSelectColumn2(name);
    }


    return (
    <div className="row">
        <div className="col-lg-3">

            <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c1 imagenSelect ={ imagenSelect }/>
                    
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h5 className="home-product-title">Rectangular Cat & Dog Bed</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10">
                    <h5 className="home-product-price">$32.00</h5>
                </div>
            </div>

            <div className="row m-1">
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-start">
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('uno')}
                                    src="./img/home/products/sale/home-product-f2c1.jpg"
                                    className="img-fluid home-product-menu-image"
                                    width="1000"
                                />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('dos')}
                                    src="./img/home/products/sale/home-product-f2c1dos.jpg" 
                                    className="img-fluid home-product-menu-image"
                                    width="1000"
                                    />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('tres')}
                                    src="./img/home/products/sale/home-product-f2c1tres.jpg" 
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIcon('cuatro')}
                                    src="./img/home/products/sale/home-product-f2c1cuatro.jpg" 
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                        </div>
                    </div>

                  

                </div>
           
    

        </div>
        {/* Termina Menu Product Fila 1 Columna 1 */}
        <div className="col-lg-3">
            
            <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c2 imagenSelect={  imagenSelectColumn2 }/>
                    
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-12">
                    <h5 className="home-product-title">Insulated Dog & Cat Puffer Coat</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10">
                    <h5 className="home-product-price">$70.00</h5>
                </div>
            </div>

            <div className="row m-1">
                    <div className="col-lg-5">
                        <div className="d-flex justify-content-start">
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum2('uno')}
                                    src="./img/home/products/sale/home-product-f2c2.jpg"
                                    className="img-fluid home-product-menu-image"
                                    width="1000"
                                />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum2('dos')}
                                    src="./img/home/products/sale/home-product-f2c2dos.jpg"
                                    className="img-fluid home-product-menu-image"
                                    width="1000"
                                    />
                            </div>
                            <div>
                                <img 
                                    onClick={() => handleMenuIconColum2('tres')}
                                    src="./img/home/products/sale/home-product-f2c2tres.jpg"
                                    width="1000"
                                    className="img-fluid home-product-menu-image"/>
                            </div>
                        </div>
                    </div>

                  

                </div>


        </div>

        


        {/* Termina Menu Product Fila 1 Columna 2 */}

        <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf2c3/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Dry Food For Cats Whiskas</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$43.00 </h5>
                    </div>
                </div>

            
            
            
        </div>
        {/* Termina Menu Product Fila 1 Columna 3 */}
    
     </div>
    )
}

export default NewCardFila2
