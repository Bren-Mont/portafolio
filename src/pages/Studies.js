import "../css/Studies.css";
import Navbar from "../components/navbar/Navbar";

function Studies() {
  return (
    <div className="fondoabout">
      <Navbar />
      <header className="studies-header">
        <div className="container-studies">
          <div class="card card-1">
            <img
              src="https://carrerasuniversitarias.com.co/logos/original/logo-bogota-institute-of-technology.webp"
              alt="Person"
              class="card__image"
            />
            <p class="card__name">Bogotá Institute of Technology</p>
            <div class="grid-container">
              <div class="grid-child-followers">
                Bootcamp- full stack developer
              </div>
            </div>
          </div>
          <div class="card card-2">
            <img
              src="https://play-lh.googleusercontent.com/xD78B_Wcf9q5iWhKIQS8n1NwdfkVFDJjjUubkcd6rHaiHpOYmFVMoeQ5hbomDGekvhQ"
              alt="Person"
              class="card__image"
            />
            <p class="card__name">DIGITAL HOUSE</p>
            <div class="grid-container">
              <div class="grid-child-followers">Professional Developer</div>
              <span>Finalizado</span>
              
            </div>
          </div>

          <div class="card card-3">
            <img
              src="https://play-lh.googleusercontent.com/xD78B_Wcf9q5iWhKIQS8n1NwdfkVFDJjjUubkcd6rHaiHpOYmFVMoeQ5hbomDGekvhQ"
              alt="Person"
              class="card__image"
            />
            <p class="card__name">DIGITAL HOUSE</p>
            <div class="grid-container">
              <div class="grid-child-followers">Professional Developer</div>
              <span>Actualmente</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Studies;
