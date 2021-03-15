import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import SliderHome from '../components/home/SliderHome'
import Welcome from '../components/home/Welcome'
import HomeAnimal from '../components/home/HomeAnimal'
import HomePromocion from '../components/home/HomePromocion'
import HomeSuscribe from '../components/home/HomeSuscribe'
import Products from '../components/home/Products'

export default function Home() {
 

  return (

    <div className={styles.container}>

     
      <Container>

            <SliderHome/> 
            <Welcome/> 
            <HomeAnimal/>
            <Products/>
            <HomePromocion/>
            <HomeSuscribe/>          
          
      </Container> 

    
    </div>
  )
}
