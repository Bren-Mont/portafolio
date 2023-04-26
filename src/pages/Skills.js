import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../css/Skills.css"

function Skills(){
    return(
        <div className="fondoabout">
            <Navbar/>
            <header className="aboutme-header">
                <div className="container-skills">
                   <div className="info-skills">
                   <div className="infocardContainer card1">
                    <div id="main">
                        <img src="https://blog.ida.cl/wp-content/uploads/sites/5/2020/07/ida-elegirfigma-blog-1024x735.png"></img>
                    </div>
                    <div id="textbois">
                        <h2>Figma</h2>
                        <h4>Herramienta de <br></br>diseño</h4>
                    </div>
                    </div>
                    <div className="infocardContainer card2">
                    <div id="main">
                        <img src="https://i.pinimg.com/564x/39/3b/ff/393bffc65eb63e533844ec75633f8450.jpg"></img>
                    </div>
                    <div id="textbois">
                        <h2>Adobe <br></br>Ilustrator</h2>
                        <h4>Herramienta de <br></br>diseño</h4>
                    </div>
                    </div>
                    <div className="infocardContainer card3">
                    <div id="main">
                        <img src="https://i.pinimg.com/564x/1d/66/01/1d66013f5f896dd5e206885495fb564c.jpg"></img>
                    </div>
                    <div id="textbois">
                        <h2>HTML</h2>
                        <h4>Lenguaje de <br></br>marcación</h4>
                    </div>
                    </div>
                    <div className="infocardContainer card4">
                    <div id="main">
                        <img src="https://i.pinimg.com/564x/7d/48/4a/7d484add31abfd68ffe1e2007821d7f7.jpg"></img>
                    </div>
                    <div id="textbois">
                        <h2>CSS</h2>
                        <h4>Lenguaje de <br></br>diseño gráfico</h4>
                    </div>
                    </div>
                    <div className="infocardContainer card5">
                    <div id="main">
                        <img src="https://i.pinimg.com/564x/bf/e1/f2/bfe1f230ec0f4642eb6a3097835de129.jpg"></img>
                    </div>
                    <div id="textbois">
                        <h2>Javascript</h2>
                        <h4>Lenguaje de <br></br>programación</h4>
                    </div>
                    </div>
                    <div className="infocardContainer card6">
                    <div id="main">
                        <img src="https://i.pinimg.com/564x/da/1c/1b/da1c1ba16e52114d1a59e9ad666a4ae6.jpg"></img>
                    </div>
                    <div id="textbois">
                        <h2>React</h2>
                        <h4>Librería de <br></br>Javascript</h4>
                    </div>
                    </div>
                    </div>
                </div>
            </header>
            <Footer></Footer>
        </div>
    );
}

export default Skills;

//https://i.pinimg.com/564x/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.jpg