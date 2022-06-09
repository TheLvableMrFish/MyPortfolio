import React from 'react'

const Cards =(props)=>{

    let cards = props.data.map(el => { return (
        <div key={el.id} className='col-lg-4'>
            <h2 className='card-title'>{el.title}</h2>
            <div className='card-card'>
                <img className='img-fluid w-100 project-img' src={`./dbMedia${el.img}`} alt={el.title} />
                {el.link === '#' ? null :
                    <a className='site-link' target='_blank' href={`${el.link}`}> Site </a>
                }
                {el.code === '#' ? null : 
                    <a className='code-link' target='_blank' href={`${el.code}`}> Code </a>
                }
            </div>
        </div>
        )
    })

    return(
        <>{cards}</>
    )
}

export default Cards