import Navbar from "../components/navbar/Navbar";
import '../css/home.css';
import '../img/fotoperfil.jpeg'


function Home(){
    return(
        <div className="fondo" >
            <Navbar/>
            <main>
                <div className="title1"><h1>Developer Frontend</h1></div>
                <h3></h3>
                <div className="title2"><h2>Brenda Montero</h2></div>

            </main>
        </div>
    );
}

export default Home;