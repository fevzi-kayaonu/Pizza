import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const malzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const errorMessage = {
  boyut: "Lütfen pizza boyutunu seçiniz.",
  hamur: "Lütfen hamur kalınlığını seçiniz.",
  malzeme: "En az 4 malzeme seçmelisiniz.",
  isim: "En az 3 karakterli isim girmeliniz.",
};
const siparisForm = {
  isim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  adet: 0,
  not: "",
  total: function () {
    return (
      this.adet *
      ((this.boyut === "Küçük"
        ? 85.5
        : this.boyut === "Orta"
        ? 100.5
        : this.boyut === "Büyük"
        ? 125.5
        : 0) +
        this.malzemeler.length * 5)
    );
  },
};

function OrderPizza() {
  const [siparisData, setSiparisData] = useState(siparisForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (event) => {
    if (event === "arttır") {
      setSiparisData({ ...siparisData, adet: siparisData.adet + 1 });
    } else if (event === "azalt" && siparisData.adet > 0) {
      setSiparisData({ ...siparisData, adet: siparisData.adet - 1 });
    } else {
      const { name, value } = event.target;

      if (name === "malzeme") {
        const newMalzemeler = [...siparisData.malzemeler];
        const index = newMalzemeler.indexOf(value);
        if (index == -1) {
          newMalzemeler.push(value);
        } else {
          newMalzemeler.splice(index, 1);
        }
        setSiparisData({ ...siparisData, malzemeler: [...newMalzemeler] });
      } else {
        setSiparisData({ ...siparisData, [name]: value });
      }
    }
  };

  const validation = () => {
    let newErrors = {};

    if (!siparisData.boyut) {
      newErrors.boyut = errorMessage.boyut;
    }

    if (!siparisData.hamur || siparisData.hamur === "Hamur Kalınlığı") {
      newErrors.hamur = errorMessage.hamur;
    }

    if (siparisData.malzemeler.length < 4) {
      newErrors.malzeme = errorMessage.malzeme;
    }

    if (siparisData.isim.length < 3) {
      newErrors.isim = errorMessage.isim;
    }
    setErrors(newErrors);
  };

  useEffect(() => {
    validation();
  }, [siparisData]);

  useEffect(() => {
    setIsValid(
      !errors.isim &&
        !errors.malzeme &&
        !errors.hamur &&
        !errors.boyut &&
        siparisData.total() !== 0
    );
  }, [errors]);

  const onClick = (e) => {
    if (!isValid) {
      e.preventDefault();
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", siparisData)
      .then((response) => {
        console.log("Post isteği başarı ile gönderildi.");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Post isteği başarısız oldu.");
        console.error("Hata:", error);
      });
  };

  return (
    <>
      <div className="all">
        <header className="orderPizza">
          <img
            src="../../Assets/mile1-assets/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <nav>
            <a href="">AnaSayfa-</a>
            <a href="">Seçenekler-</a>
            <a href="">Sipariş Oluştur</a>
          </nav>
        </header>

        <div className="main">
          <div className="container-orderpizza">
            <h2>Position Absolute Acı Pizza</h2>
            <div className="rakam">
              <p className="rakam-p">85.50₺</p>
              <div className="rakam2">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
            <div className="boyut-hamur">
              <FormGroup tag="fieldset">
                <Label>
                  Boyut Seç <span>*</span>
                </Label>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="Küçük"
                    onChange={onChange}
                  />{" "}
                  <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="Orta"
                    onChange={onChange}
                  />{" "}
                  <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="Büyük"
                    onChange={onChange}
                  />{" "}
                  <Label check>Büyük</Label>
                </FormGroup>
                {errors.boyut && <p>{errors.boyut}</p>}
              </FormGroup>
              <FormGroup>
                <Label for="hamur">
                  Hamur Seç <span>*</span>
                </Label>
                <Input
                  id="hamur"
                  name="hamur"
                  type="select"
                  onChange={onChange}
                  value={siparisData.hamur}
                >
                  <option>Hamur Kalınlığı</option>
                  <option>Kalın Kenar</option>
                  <option>Orta Kenar</option>
                  <option>İnce Kenar</option>
                </Input>
                {errors.hamur && <p>{errors.hamur}</p>}
              </FormGroup>
            </div>
            <div className="malzeme-container">
              <p>Ek Malzemeler</p>
              <p>En Fazla 10 malzeme , en az 4 malzeme seçebilirsiniz. 5₺</p>
              <Form>
                {malzemeler.map((malzeme, index) => {
                  return (
                    <FormGroup check inline key={index}>
                      <Input
                        type="checkbox"
                        name="malzeme"
                        onChange={onChange}
                        value={malzeme}
                        disabled={
                          siparisData.malzemeler.includes(malzeme)
                            ? false
                            : siparisData.malzemeler.length >= 10
                            ? true
                            : false
                        }
                      />
                      <Label check>{malzeme}</Label>
                    </FormGroup>
                  );
                })}
              </Form>
              {errors.malzeme && <p>{errors.malzeme}</p>}
            </div>
            <FormGroup className="sipariş-notu">
              <Label for="isim">İsim</Label>
              <Input
                id="isim"
                name="isim"
                type="textarea"
                placeholder="En az 3 karakterli isim giriniz!"
                onChange={onChange}
                value={siparisData.isim}
                invalid={!!errors.isim}
              />
              {errors.isim && <FormFeedback>{errors.isim}</FormFeedback>}
            </FormGroup>

            <FormGroup className="sipariş-notu">
              <Label for="siparişNotu">Sipariş Notu</Label>
              <Input
                id="siparişNotu"
                name="not"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                onChange={onChange}
                value={siparisData.not}
              />
            </FormGroup>
            <hr />
            <div className="pizza-onay">
              <div className="sayac">
                <button onClick={() => onChange("azalt")}>-</button>{" "}
                <p>{siparisData.adet}</p>{" "}
                <button onClick={() => onChange("arttır")}>+</button>
              </div>
              <div className="sipariş-card">
                {" "}
                <div className="sipariş-genel">
                  <h5>Sipariş Toplamı</h5>
                  <div className="secimler">
                    <p>Seçimler</p>{" "}
                    <p>
                      {siparisData.malzemeler.length * 5 * siparisData.adet}₺
                    </p>
                  </div>
                  <div className="toplam">
                    <p>Toplam</p> <p>{siparisData.total()}₺</p>
                  </div>
                </div>
                <div className="link-pizza">
                  <Link to={isValid ? "/OrderSuccess" : ""} onClick={onClick}>
                    SİPARİŞ VER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default OrderPizza;
