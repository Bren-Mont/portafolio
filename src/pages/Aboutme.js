import Navbar from "../components/navbar/Navbar";
import '../css/Aboutme.css'
import photo from '../img/fotoperfil.jpeg';
import Footer from '../components/footer/Footer';

function Aboutme(){
    return(
        <div className="fondoabout">
            <Navbar/>
            <header className="aboutme-header">
                <div className="container-about">
                <img src={photo} className="hamster"></img>
                   <div className="infor">
                        <p>Desarrolladora Full Stack en continua
formación, entusiasta de la tecnología,
autodidacta y comprometida, Cuento con
conocimientos en HTML5-CSS3 Boostrap5-

JS (Vanilla, Jquery)- React JS, NodeJs-
Express- MongoDB- CMS- SQL Scrum-
Testing funcional, manejo de CMS Wordpress

y Drupal.
Con capacidad de liderazgo, atención al
cliente, trabajo en equipos, determinación,
toma de decisiones, fluidez verbal
desenvolviéndome en variados roles.
Interesada en mi crecimiento profesional.
                        </p>
                        
                    </div>
                </div>
            </header>
            <Footer></Footer>
        </div>
    );
};

export default Aboutme;