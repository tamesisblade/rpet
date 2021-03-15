import React from 'react'

function Copyright() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <p>© Copyright 2021 | Petoria By EngoTheme Powered by Shopify.</p>
                </div>
                <div className="col-lg-6  d-flex justify-content-end">

                    <div>
                        <i class="fab fa-cc-amex" style={{fontSize:"25px",padding:"12px"}}>
                            
                        </i>
                    </div>
                    <div>
                        <i class="fab fa-cc-visa" style={{fontSize:"25px",padding:"12px"}}></i>
                    </div>
                    <div>
                        <i class="fab fa-paypal"  style={{fontSize:"25px",padding:"12px"}}></i>
                    </div>
                    <div>
                        <i class="fab fa-cc-mastercard" style={{fontSize:"25px",padding:"12px"}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright
