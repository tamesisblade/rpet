import React from 'react'
import CardIconos1 from '../../utils/CardIconos1'
function Cardf2c1({ imagenSelect }) {

    function ImagenMenu(){
        if(imagenSelect == 'uno'){
            return(
                <img src="./img/home/products/sale/home-product-f2c1.jpg" className="img-fluid home-product-image"/>
            )
        }
        if(imagenSelect == 'dos'){
            return(
                <img src="./img/home/products/sale/home-product-f2c1dos.jpg" className="img-fluid home-product-image"/>
            )
        }
        if(imagenSelect == 'tres'){
            return(
                <img src="./img/home/products/sale/home-product-f2c1tres.jpg" className="img-fluid home-product-image"/>
            )
        }
         if(imagenSelect == 'cuatro'){
            return(
                <img src="./img/home/products/sale/home-product-f2c1cuatro.jpg" className="img-fluid home-product-image"/>
            )
        }
        return(
            <div>
                <img src="./img/home/products/sale/home-product-f2c1.jpg" className="img-fluid home-product-image"/>
            </div>
        )
       
    }

    return (
    <div>
        <div class="home-product-card-container">
            <div className="card1">
                <div  style={{overflow:"hidden"}}>
                    <ImagenMenu/>
                
                </div>
        
          
                {/* Iconos hover parte derecha    */}

                <CardIconos1/>
          
          
          
          
            </div>
  
        </div>
    </div>
    )
}

export default Cardf2c1
