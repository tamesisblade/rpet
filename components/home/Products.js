import React,{useState} from 'react'
import Link from 'next/link'
import NewProduct from './products/NewProduct'
import BestProduct from './products/BestProduct'
import SaleProduct from './products/SaleProduct'

function Products() {
    const [activeItem, setActiveItem] = useState('');
    const handleMenu  = (name) =>{
        setActiveItem(name)
    }

    function Activo(){
        if(activeItem == "new"){
            return(
                <NewProduct/>
            )
               
        }
        if(activeItem == "best"){
            return(
                <BestProduct/>
            )
               
        }
        if(activeItem == "sale"){
            return(
                <SaleProduct/>
            )
               
        }
        return(
            <NewProduct/>
        )
      
            
            
        

        
    }
    return (
        <div>
            <div className="row mt-5" >
                <div className="col-lg-12">
                    <h3 className="text-center">Our Products</h3>
                </div>
            </div>
            <div className="row mt-2" >
            
              <div className="d-flex justify-content-center">
                    <div>
                      
                       
                        <a
                            className="home-product-menu"
                            onClick={() => handleMenu('new')}
                            
                            >
                                  {/* <span className="text-success ">{activeItem}</span> */}
                             NEW ARRIVALS
                        </a>
                      
                       
                       
                    </div>

                    <a>
                        <button
                            className="home-product-menu"
                            onClick={() => handleMenu('best')}
                            
                            >
                             BEST SELLERS
                        </button>
                        
                    </a>

                    <a>
                        <button
                            className="home-product-menu"
                            onClick={() => handleMenu('sale')}
                            
                            >
                             SALES
                        </button>
                      
                       
                          
                      
                        
                    </a>
                </div>

            </div>
            <div className="row mt-4">
                <Activo/>
            </div>
        </div>
    )
}

export default Products
