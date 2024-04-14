import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
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
      </div>
    </>
  );
}

export default Home;

/*
 */
