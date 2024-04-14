import { Form, FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";
import { Link } from "react-router-dom";

function OrderPizza() {
  return (
    <>
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
        <div className="container">
          <p>Position Absolute Acı Pizza</p>
          <p>85.50$</p>
          <p>4.9</p>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <FormGroup tag="fieldset">
            <legend>Boyut Seç</legend>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="hamur">Hamur Seç</Label>
            <Input id="hamur" name="select" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
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
          <p>--------------------------------------------</p>
          <div>
            <button>-</button> <p>Sayı</p> <button>+</button>
          </div>
          <div>
            {" "}
            <p>Sipariş Toplamı</p>
            <p>Seçimler</p> <p>25.00tl</p>
            <p>Toplam</p> <p>110.50tl</p>
            <Link to="/OrderSuccess">SİPARİŞ VER</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPizza;
