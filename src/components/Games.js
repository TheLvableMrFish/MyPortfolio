import React from 'react'

import games from '../data/games'

import Cards from './Cards'

const Games =()=>{

    return(
        <>
        <main className='container' id='games'>
            <h2 className='projects-header'>Games:</h2>
            <div className='row'>
                <Cards
                data={games}
                />
            </div>
        </main>
        </>
    )
}

export default Games