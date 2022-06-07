import React from 'react'
import { useState, useEffect } from 'react'

import gallery from '../data/gallery'

import Cards from './Cards'

const Gallery =()=>{

    // just wanted to show I know about useState/useEffect
    // serves no point
    const [gal, setGal] = useState()
    
    useEffect(()=>{
        setGal(gallery)
    }, [])

    return(
        <>
        <main className='container' id='gallery'>
            <h2 className='projects-header'>Projects:</h2>
            <div className='row'>
                {gal && <Cards
                data={gal}
                />}
            </div>
        </main>
        </>
    )
}

export default Gallery