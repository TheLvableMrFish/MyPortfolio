import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import TypeIntro from '../components/TypeIntro'
import Logo from '../components/Logo'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Games from '../components/Games'

const Home =()=>{
    return(
        <>
        <Header />
        <TypeIntro />
        <Logo />
        <About />
        <Gallery />
        <Games />
        <Footer />
        </>
    )
}

export default Home