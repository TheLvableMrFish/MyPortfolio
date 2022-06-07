import React from 'react'

import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Header =()=>{
    return(
        <>
        {/* Navbar from bootstrap Outline on https://getbootstrap.com/docs/5.0/components/navbar/ */}
        <header className='header' id='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand nav-link-header" href="/MyPortfolio">Home#</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link nav-link-text" href="#about">&#8725;About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-text" href="#gallery">&#8725;Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-text" href="#games">&#8725;Games</a>
                    </li>
                </ul>
                <div className='d-none d-lg-block'>
                <ul className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link nav-link-icon gitHub" target="_blank" rel="noreferrer" href="https://github.com/TheLvableMrFish"><FaGithub /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-icon twitter" target="_blank" rel="noreferrer" href="https://twitter.com/LovableMrFish"><FaTwitter /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-icon linkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-pagano-978813220/"><FaLinkedinIn /></a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </nav>
        </header>
        </>
    )
}

export default Header