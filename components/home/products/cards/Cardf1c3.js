import React from 'react'

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
        
          
          <div class="content">
            <div class="size">
          
            <p type="button" className="home-product-card-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                <i class="fas fa-heart"></i>
              </p>

              <p type="button" className="home-product-card-icon"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                ...
              </p>

              <p type="button" className="home-product-card-icon"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                <i class="fas fa-search"></i>
              </p>
            
             
            </div>

          </div>

      
          
          
          
          
        </div>
  
      </div>

    )
}

export default Cardf1c3
