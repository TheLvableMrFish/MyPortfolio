import React from 'react'

import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer =()=>{
    return(
        <>
        <footer className='footer'>
            <div className='container'>
                <div className='row d-lg-none'>
                    <div className='col-12 d-flex justify-content-center'>Find me:</div>
                    <div className='col-4'>
                        <a className="nav-link nav-link-icon gitHub" target="_blank" rel="noreferrer" href="https://github.com/TheLvableMrFish"><FaGithub /></a>
                    </div>
                    <div className='col-4'>
                        <a className="nav-link nav-link-icon twitter" target="_blank" rel="noreferrer" href="https://twitter.com/LovableMrFish"><FaTwitter /></a>
                    </div>
                    <div className='col-4'>
                        <a className="nav-link nav-link-icon linkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-pagano-978813220/"><FaLinkedinIn /></a>
                    </div>
                </div>
                <p className="colophon-text">Fishy Projects Site by Christian Pagano &copy;2022</p>
            </div>
        </footer>
        </>
    )
}

export default Footer