import Link from 'next/link'
import React from 'react'


function Menu() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
             
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"  />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0' style={{padding:"10px"}}>
                            <li className="nav-item menuitem " style={{margin:"0px 20px 0px 0px"}}>
                                <Link href="/">
                                <a className="nav-link active" aria-current="page">HOME</a>
                                </Link>
                            </li>
                            <li className="nav-item menuitem" style={{margin:"0px 20px 0px 0px"}}>
                                <Link href="/shop">
                                    <a className="nav-link" >SHOP</a>
                                </Link>    
                            </li>
                            <li className="nav-item menuitem" style={{margin:"0px 20px 0px 0px"}}>
                                <Link href="/featured">
                                    <a className="nav-link" >FEATURED</a>
                                </Link>
                            </li>
                            <li className="nav-item menuitem" style={{margin:"0px 20px 0px 0px"}}>
                                <Link href="/paginas">
                                    <a className="nav-link" >PAGINAS</a>
                                </Link>
                              
                            </li>
                            <li className="nav-item menuitem" style={{margin:"0px 20px 0px 0px"}}>
                                <Link href="/blogs">
                                    <a className="nav-link" >BLOGS</a>
                                </Link>
                                
                            </li>

                    
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
