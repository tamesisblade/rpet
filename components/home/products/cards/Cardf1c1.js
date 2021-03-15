import React from 'react'

function Cardf1c1({imagenSelect}) {

  function ImagenMenu(){
    if(imagenSelect == 'uno'){
        return(
            <img src="./img/home/products/home-product-f1c1.jpg" className="img-fluid home-product-image"/>
        )
    }
    if(imagenSelect == 'dos'){
        return(
            <img src="./img/home/products/home-product-f1c1dos.jpg" className="img-fluid home-product-image"/>
        )
    }
    if(imagenSelect == 'tres'){
        return(
            <img src="./img/home/products/home-product-f1c1tres.jpg" className="img-fluid home-product-image"/>
        )
    }
    return(
        <div>
            <img src="./img/home/products/home-product-f1c1.jpg" className="img-fluid home-product-image"/>
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
        <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
            ></script>
  
 
            <script src="./js/app.js"></script>
      </div>

    )
}

export default Cardf1c1
