import '../css/Jobs.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from 'react-router-dom';



function Jobs() {

  return (
    <div className="fondoabout">
      <Navbar />
      <header className="jobs-header">
        <div className="container-jobs">

          <div class="section1">
            <div class="property-card">

              <div class="property-image im1">
              </div>
              <div class="property-description">
                <h5> Start up </h5>

                <a className='target-a' href="https://bren-mont.github.io/StartUp/" target="_blank">View page</a>
              </div>
            </div>
          </div>
          <div class="section2">
            <div class="property-card">

              <div class="property-image im2">
              </div>
              <div class="property-description">
                <h5> Químicos </h5>
                <p>En construccion</p>
                <a className='target-a' href="https://nextjs-alpha-two-42.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="property-card">

              <div class="property-image im3">
              </div>
              <div class="property-description">
                <h5> Administración de banco </h5>
                <a className='target-a' href="https://prueba-de-banco-7ach.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
          </div> 
          <div class="section4">
            <div class="property-card">

              <div class="property-image im4">
              </div>
              <div class="property-description">
                <h5> Reservas Digital</h5>
                <a className='target-a' href="https://dh-reserva-n72x-rg27ylb8j-bren-mont.vercel.app/" target="_blank">View page</a>
              </div>
            </div>
          </div> 
         
        </div>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default Jobs;