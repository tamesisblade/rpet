import React,{useState} from 'react'
import Cardf1c1 from './cards/Cardf1c1';
import Cardf1c2 from './cards/Cardf1c2';
import Cardf1c3 from './cards/Cardf1c3';
import Cardf1c4 from './cards/Cardf1c4';

function NewCardFila1() {


    return (
       
        <div className="row">
            <div className="col-lg-3">

                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c1 />
                        
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
            {/* Termina Menu Product Fila 1 Columna 1 */}
            <div className="col-lg-3">
                
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c2/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Pate Dog Pedigree Puppy</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$27.00</h5>
                    </div>
                </div>
            </div>

            {/* Termina Menu Product Fila 1 Columna 2 */}

            <div className="col-lg-3">
            <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c3 />
                        
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Treats Dog Fish Chicken Wraps</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$38.99</h5>
                    </div>
                </div>
               
              
            </div>
            {/* Termina Menu Product Fila 1 Columna 3 */}
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-12  home-product-image">
                        <Cardf1c4/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h5 className="home-product-title">Cat Food Organic Ingredients</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10">
                        <h5 className="home-product-price">$60.00 </h5>
                    </div>
                </div>
            </div>
            {/* Termina Menu Product Fila 1 Columna 4 */}
        </div>
        
    )
}

export default NewCardFila1
