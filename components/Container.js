import React from 'react'
import Navigation from './Navigation'

import Head from 'next/head'
import Footer from './Footer'
import Copyright from './Copyright'

function Container(props) {
    return (
        <div>
            <Head>
                <title>Next.js Projecto</title>
                
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <link rel="stylesheet" href="../node_modules/react-modal-video/css/modal-video.min.css"/>
           
            </Head>

            <Navigation/>
            <div className="container-fluid ">
                
                {props.children}
            </div>
            <div className="mt-3">
             <Footer/>
             
            </div>
            <div className="mt-3 d-none d-sm-none d-lg-block">
             <Copyright/>
            </div>
            <div className="row mt-5">
            </div>
           


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
         
         </div>
    )
}

export default Container
