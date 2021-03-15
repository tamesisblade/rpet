import React,{useState} from 'react'
import Link from 'next/link'
import NewProduct from './products/newproduct';
import BestProduct from './products/bestproduct';
import SaleProduct from './products/saleproduct';
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
                      
                       
                        <button
                            className="home-product-menu"
                            onClick={() => handleMenu('new')}
                            
                            >
                                  {/* <span className="text-success ">{activeItem}</span> */}
                             NEW ARRIVALS
                        </button>
                      
                       
                       
                    </div>

                    <div>
                        <button
                            className="home-product-menu"
                            onClick={() => handleMenu('best')}
                            
                            >
                             BEST SELLERS
                        </button>
                        
                    </div>

                    <div>
                        <button
                            className="home-product-menu"
                            onClick={() => handleMenu('sale')}
                            
                            >
                             SALES
                        </button>
                      
                       
                          
                      
                        
                    </div>
                </div>

            </div>
            <div className="row mt-4">
                <Activo/>
            </div>
        </div>
    )
}

export default Products
