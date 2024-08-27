import { Link } from "react-router-dom";
import "./home.css";
import Footer from "./Footer";
import logo from "../Assets/mile1-assets/logo.svg";
import icon1 from "../Assets/mile2-assets/icons/1.svg";
import icon2 from "../Assets/mile2-assets/icons/2.svg";
import icon3 from "../Assets/mile2-assets/icons/3.svg";
import icon4 from "../Assets/mile2-assets/icons/4.svg";
import icon5 from "../Assets/mile2-assets/icons/5.svg";
import icon6 from "../Assets/mile2-assets/icons/6.svg";
import kart1 from "../Assets/mile2-assets/cta/kart-1.png";
import kart2 from "../Assets/mile2-assets/cta/kart-2.png";
import kart3 from "../Assets/mile2-assets/cta/kart-3.png";
import food1 from "../Assets/mile2-assets/pictures/food-1.png";
import food2 from "../Assets/mile2-assets/pictures/food-2.png";
import food3 from "../Assets/mile2-assets/pictures/food-3.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <header className="home">
          <div className="homeContainer">
            <img src={logo} alt="Teknolojik Yemekler" />
            <p className="fırsat">fırsatı kaçırma</p>
            <div>
              <p>KOD ACIKTIRIR</p>
              <p>PİZZA, DOYURUR</p>
            </div>
            <Link className="link" to="/OrderPizza">
              Acıktım
            </Link>
          </div>
        </header>
        <nav className="nav-serit">
          <a href="/">
            <img src={icon1} alt="ikon1.svg" />
            YENİ! Kore
          </a>
          <a href="/">
            <img src={icon2} alt="ikon2.svg" />
            Pizza
          </a>
          <a href="/">
            <img src={icon3} alt="ikon3.svg" />
            Burger
          </a>
          <a href="/">
            <img src={icon4} alt="ikon4.svg" />
            Kızartmalar
          </a>
          <a href="/">
            <img src={icon5} alt="ikon5.svg" />
            Fastfood
          </a>
          <a href="/">
            <img src={icon6} alt="ikon6.svg" />
            Gazlı İçecek
          </a>
        </nav>
        <main className="home-main">
          <div className="sectionlar">
            <section>
              <div className="lezzetus-container">
                <img src={kart1} alt="kart1.png" />
                <div className="ozel-lezzetus">
                  <h3>Özel Lezzetus</h3>
                  <p>Position:Absolute Acı Burger</p>
                  <a href="/">SİPARİŞ VER</a>
                </div>
              </div>
              <div className="double-container">
                <div className="hack-container">
                  <img src={kart2} alt="kart2.png" />
                  <div className="hack-burger">
                    <h3>Hackathlon Burger Menü</h3>
                    <a href="/">SİPARİŞ VER</a>
                  </div>
                </div>
                <div className="cok-container">
                  <img src={kart3} alt="kart3.png" />
                  <div className="cok-hızlı">
                    <h3>
                      {" "}
                      <span>Çooooook</span> hızlı npm gibi kurye{" "}
                    </h3>
                    <a href="/">SİPARİŞ VER</a>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>
                <p className="paket-menü">En Çok paketlenen Menüler</p>
                <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
              </div>
              <nav className="nav-section">
                <a href="/">
                  <img src={icon1} alt="ikon1.svg" />
                  YENİ! Kore
                </a>
                <a href="/">
                  <img src={icon2} alt="ikon2.svg" />
                  Pizza
                </a>
                <a href="/">
                  <img src={icon3} alt="ikon3.svg" />
                  Burger
                </a>
                <a href="/">
                  <img src={icon4} alt="ikon4.svg" />
                  Kızartmalar
                </a>
                <a href="/">
                  <img src={icon5} alt="ikon5.svg" />
                  Fastfood
                </a>
                <a href="/">
                  <img src={icon6} alt="ikon6.svg" />
                  Gazlı İçecek
                </a>
              </nav>
              <div className="card-container">
                <div className="home-card">
                  <img alt="foot1-png" src={food1} width="100%" />
                  <div className="card-text">
                    <h5>Terminal Pizza</h5>
                    <div className="section-rakamlar">
                      <p>4.9</p>
                      <p>(200)</p>
                      <p>60₺</p>{" "}
                    </div>
                  </div>
                </div>
                <div className="home-card">
                  <img alt="foot2-png" src={food2} width="80%" />
                  <div className="card-text">
                    <h5>Position Absolute Acı Pizza</h5>
                    <div className="section-rakamlar">
                      <p>4.9</p>
                      <p>(928)</p>
                      <p>85₺</p>
                    </div>
                  </div>
                </div>
                <div className="home-card">
                  <img alt="foot3-png" src={food3} />
                  <div className="card-text">
                    <h5>useEffect Tavuklu Burger</h5>
                    <div className="section-rakamlar">
                      <p>4.9</p>
                      <p>(462)</p>
                      <p>75₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
