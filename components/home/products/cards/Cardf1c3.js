import React from 'react'
import CardIconos1 from './CardIconos1'

function Cardf1c3({imagenSelect}) {

    function ImagenMenu(){
        if(imagenSelect == 'uno'){
            return(
                <img src="./img/home/products/home-product-f1c3.jpg" className="img-fluid home-product-image"/>
            )
        }
        if(imagenSelect == 'dos'){
            return(
                <img src="./img/home/products/home-product-f1c3dos.jpg" className="img-fluid home-product-image"/>
            )
        }
        if(imagenSelect == 'tres'){
            return(
                <img src="./img/home/products/home-product-f1c3tres.jpg" className="img-fluid home-product-image"/>
            )
        }
        return(
            <div>
                <img src="./img/home/products/home-product-f1c3.jpg" className="img-fluid home-product-image"/>
            </div>
        )
       
    }

    return (
        <div class="home-product-card-container">
        <div className="card1">
          <div  style={{overflow:"hidden"}}>
            <ImagenMenu/>
         
          </div>
        
          
         {/* Iconos hover parte derecha    */}

         <CardIconos1/>
          

      
          
          
          
          
        </div>
  
      </div>

    )
}

export default Cardf1c3
