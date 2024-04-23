import BannerBackground from "../assets/home-banner-background.png";
import { HiArrowRight } from "react-icons/hi2";
import '../Home.css'


export default function Home() {


    const handleClick = () => {
        window.location.hash = '#/console';
    };

  return (
    <div className="App">
      <div className="home-container">
        
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} style={{ "backgroundImage": '../assets/image.png', "backgroundSize": "cover" }} />
          </div>
          <div className="home-text-section">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1 className="primary-heading" style={{marginRight: "20px"}}>
                Proyecto2 
              </h1>
            </div>
            <p className="primary-text">
              Sistema de archivos EXT2/EXT3 con una interfaz grafica web 
            </p>
            <p className="secundary-text">
              Gerhard Ardon 202004796
            </p>

            <button onClick={handleClick} className="secondary-button">
              Pruebalo ya! <HiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
          </div>
        </div>
      </div>
    </div>
  );
}