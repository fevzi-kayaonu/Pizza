import { Form, FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";
import { Link } from "react-router-dom";

function OrderPizza() {
  let count = 0;
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
              <p className="rakam-p">85.50$</p>
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
                <legend>Boyut Seç</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Büyük</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label className="select-hamur" for="hamur">
                  Hamur Seç
                </Label>
                <Input id="hamur" name="select" type="select">
                  <option>Hamur Kalınlığı</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </div>
            <p>Ek Malzemeler</p>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <Form>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>Some other input</Label>
              </FormGroup>
            </Form>

            <p>Sipariş Notu</p>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <hr />
            <div className="pizza-onay">
              <div className="sayac">
                <button>-</button> <p>{count}</p> <button>+</button>
              </div>
              <div className="sipariş-card">
                {" "}
                <div className="sipariş-genel">
                  <h5>Sipariş Toplamı</h5>
                  <div className="secimler">
                    <p>Seçimler</p> <p>25.00tl</p>
                  </div>
                  <div className="toplam">
                    <p>Toplam</p> <p>110.50tl</p>
                  </div>
                </div>
                <div className="link-pizza">
                  <Link to="/OrderSuccess">SİPARİŞ VER</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPizza;
