import { Link } from "react-router-dom";
import "./home.css";
import Footer from "./Footer";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Home() {
  return (
    <>
      <div className="home-container">
        <header className="home">
          <div className="homeContainer">
            <img
              src="../../Assets/mile1-assets/logo.svg"
              alt="Teknolojik Yemekler"
            />
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
            {" "}
            <img src="../../Assets/mile2-aseets/icons/1.svg" alt="ikon1.svg" />
            YENİ! Kore
          </a>
          <a href="/">
            <img src="../../Assets/mile2-aseets/icons/2.svg" alt="ikon2.svg" />
            Pizza
          </a>
          <a href="/">
            <img src="../../Assets/mile2-aseets/icons/3.svg" alt="ikon3.svg" />
            Burger
          </a>
          <a href="/">
            <img src="../../Assets/mile2-aseets/icons/4.svg" alt="ikon4.svg" />
            Kızartmalar
          </a>
          <a href="/">
            <img src="../../Assets/mile2-aseets/icons/5.svg" alt="ikon5.svg" />
            Fastfood
          </a>
          <a href="/">
            <img src="../../Assets/mile2-aseets/icons/6.svg" alt="ikon6.svg" />
            Gazlı İçecek
          </a>
        </nav>
        <main className="home-main">
          <section>
            <div className="lezzetus-container">
              <img
                src="../../Assets/mile2-aseets/cta/kart-1.png"
                alt="kart1.png"
              />
              <div className="ozel-lezzetus">
                <h3>Özel Lezzetus</h3>
                <p>Position:Absolute Acı Burger</p>
                <a href="/">SİPARİŞ VER</a>
              </div>
            </div>
            <div className="double-container">
              <div className="hack-container">
                <img
                  src="../../Assets/mile2-aseets/cta/kart-2.png"
                  alt="kart2.png"
                />
                <div className="hack-burger">
                  <h3>Hackathlon Burger Menü</h3>
                  <a href="/">SİPARİŞ VER</a>
                </div>
              </div>
              <div className="cok-container">
                <img
                  src="../../Assets/mile2-aseets/cta/kart-3.png"
                  alt="kart3.png"
                />
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
              <p>En Çok paketlenen Menüler</p>
              <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
            </div>
            <nav className="nav-section">
              <a href="/">
                {" "}
                <img
                  src="../../Assets/mile2-aseets/icons/1.svg"
                  alt="ikon1.svg"
                />
                YENİ! Kore
              </a>
              <a href="/">
                <img
                  src="../../Assets/mile2-aseets/icons/2.svg"
                  alt="ikon2.svg"
                />
                Pizza
              </a>
              <a href="/">
                <img
                  src="../../Assets/mile2-aseets/icons/3.svg"
                  alt="ikon3.svg"
                />
                Burger
              </a>
              <a href="/">
                <img
                  src="../../Assets/mile2-aseets/icons/4.svg"
                  alt="ikon4.svg"
                />
                Kızartmalar
              </a>
              <a href="/">
                <img
                  src="../../Assets/mile2-aseets/icons/5.svg"
                  alt="ikon5.svg"
                />
                Fastfood
              </a>
              <a href="/">
                <img
                  src="../../Assets/mile2-aseets/icons/6.svg"
                  alt="ikon6.svg"
                />
                Gazlı İçecek
              </a>
            </nav>
            <div className="card-container">
              <CardGroup>
                <Card>
                  <CardImg
                    alt="foot1-png"
                    src="../../Assets/mile2-aseets/pictures/food-1.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    alt="foot2-png"
                    src="../../Assets/mile2-aseets/pictures/food-2.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardImg
                    alt="foot3-png"
                    src="../../Assets/mile2-aseets/pictures/food-3.png"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;

/*
 */
