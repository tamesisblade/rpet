import React,{useState} from 'react'

import Cardf2c1 from './cards/Cardf2c1';
import Cardf2c2 from './cards/Cardf2c2';
import Cardf2c3 from './cards/Cardf2c3';
import Cardf2c4 from './cards/Cardf2c4';

function NewCardFila2() {

    

    return (
    <div className="row ml-1 ml-sm-1">
        <div className="col-lg-3 col-6 col-sm-6">

            <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c1 />
                    
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h5 className="home-product-title">Cat Treats Mety Bites Orgo</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10">
                    <h5 className="home-product-price">$35.00</h5>
                </div>
            </div>
           
    

        </div>
        {/* Termina Menu Product Fila 1 Columna 1 */}
        <div className="col-lg-3 col-6 col-sm-6">
            
            <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c2/>
                    
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

        {/* Termina Menu Product Fila 1 Columna 2 */}

        <div className="col-lg-3 col-6 col-sm-6">
        <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c3/>
                    
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h5 className="home-product-title">Royal Canin Fit & Active Cats</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10">
                    <h5 className="home-product-price">$40.00 </h5>
                </div>
            </div>
           
           
        </div>
        {/* Termina Menu Product Fila 1 Columna 3 */}
        <div className="col-lg-3 col-6 col-sm-6">
            <div className="row">
                <div className="col-lg-12  home-product-image">
                    <Cardf2c4/>
                    
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-12">
                    <h5 className="home-product-title">Cats Treats Trixie Tuna Rolls</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10">
                    <h5 className="home-product-price">$28.99</h5>
                </div>
            </div>
        </div>
        {/* Termina Menu Product Fila 1 Columna 4 */}
    </div>
    )
}

export default NewCardFila2
