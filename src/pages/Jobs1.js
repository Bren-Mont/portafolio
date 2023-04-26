import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from "../components/navbar/Navbar";
import '../css/Jobs.css'


const Jobs1 = () => {
  return (
    <div className="fondo1">
        <Navbar/>
        <header className="studies-header">
            <div className="container-jobs2"> 
              <h1 className='title-jobs2'>StartUp</h1>
              <div className='info-container-job2'>
                <a className='target-a' href="https://bren-mont.github.io/StartUp/" target="_blank">View page</a>
              </div>
            </div>
        </header>
        <Footer></Footer>
    </div>
  )
}

export default Jobs1