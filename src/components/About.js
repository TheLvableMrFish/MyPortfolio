import React from 'react'

const About =()=>{
    return(
        <>
        <main className='container' id="about">
            <div className='row'>
                <div className='col-xl-6 image-me'>
                    <img className='img-fluid' src='/media/image-me.jpg' alt='me'/>
                </div>
                <div className='col-xl-6 details'>
                    <h2 className='secondary-header'>&#60;About Me&#8725;&#62;</h2>
                    <p className='text'> &ensp; I live in Perkinston, Mississippi and Work at Wal-Mart. I enjoy learning, spending time with loved ones, and playing games like Minecraft, Resident Evil 4, and Splitgate.</p>
                    <h2 className='secondary-header'>&#60;Education&#8725;&#62;</h2>
                    <p className='text'> &ensp; I'm also currently attending Southern New Hampshire University in persuit of my bachelor's in Computer Science. I've also completed an 11 month course at the <a href='https://mscoding.org/'>Mississippi Coding Academies</a>.</p>
                    <h2 className='secondary-header'>&#60;Certificates&#8725;&#62;</h2>
                    <ul className='certificates'>
                        <li className='certificate'>
                            <a href="https://www.freecodecamp.org/certification/fcc874a89e1-6346-4079-87d8-535ae72f4972/responsive-web-design" >Responsive Web Design</a> by FreeCodeCamp.
                        </li>
                        <li className='certificate'>
                            <a href="https://www.freecodecamp.org/certification/fcc874a89e1-6346-4079-87d8-535ae72f4972/javascript-algorithms-and-data-structures" >JavaScript Algorithms and Data Structures</a> by FreeCodeCamp.
                        </li>
                        <li className='certificate'>
                            MCA Certificate of Achievement by Mississippi Coding Academeies.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}

export default About