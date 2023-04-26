import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";

const Jobs2 = () => {
  return (
    <div className="fondo0">
        <Navbar/>
        <header className="studies-header">
            <div className="container-jobs2">
            <h1 className='title-ghibli'>Studio Ghibli Movies</h1>
            <div className='info-container-ghibli'>
                <a className='target-a' href="https://studio-ghibli-movies-sigma.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs2