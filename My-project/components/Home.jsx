import { Link } from "react-router-dom";
import "./home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <header className="home">
        <div className="homeContainer">
          <img
            src="../../Assets/mile1-assets/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
          <Link className="link" to="/OrderPizza">
            Acıktım
          </Link>
        </div>
      </header>
      <div></div>
      <Footer></Footer>
    </>
  );
}

export default Home;

/*
 */
