import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import footerLogo from "../Assets/mile2-assets/footer/logo-footer.svg";
import addressIcon1 from "../Assets/mile2-assets/footer/icons/icon-1.png";
import addressIcon2 from "../Assets/mile2-assets/footer/icons/icon-2.png";
import addressIcon3 from "../Assets/mile2-assets/footer/icons/icon-3.png";
import instaImage0 from "../Assets/mile2-assets/footer/insta/li-0.png";
import instaImage1 from "../Assets/mile2-assets/footer/insta/li-1.png";
import instaImage2 from "../Assets/mile2-assets/footer/insta/li-2.png";
import instaImage3 from "../Assets/mile2-assets/footer/insta/li-3.png";
import instaImage4 from "../Assets/mile2-assets/footer/insta/li-4.png";
import instaImage5 from "../Assets/mile2-assets/footer/insta/li-5.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-ust">
        <div className="address-container">
          <img className="footer-logo" src={footerLogo} alt="logo-footer" />
          <address className="address">
            <div>
              <img src={addressIcon1} alt="Address Icon 1" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div>
              <img src={addressIcon2} alt="Address Icon 2" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div>
              <img src={addressIcon3} alt="Address Icon 3" />
              <p>+90 216 123 45 67</p>
            </div>
          </address>
        </div>
        <div className="footer-menuler">
          <h4>Sıcacık Menüler</h4>
          <div>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="footer-photos">
          <h4>Instagram</h4>
          <div>
            <img src={instaImage0} alt="Instagram Image 0" />
            <img src={instaImage1} alt="Instagram Image 1" />
            <img src={instaImage2} alt="Instagram Image 2" />
            <img src={instaImage3} alt="Instagram Image 3" />
            <img src={instaImage4} alt="Instagram Image 4" />
            <img src={instaImage5} alt="Instagram Image 5" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-alt">
        <p>© 2023 Teknolojik Yemekler</p>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </footer>
  );
}
