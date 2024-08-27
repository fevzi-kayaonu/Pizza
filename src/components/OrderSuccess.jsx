import "./ordersuccess.css";
import logo from "../Assets/mile1-assets/logo.svg";

function OrderSuccess(props) {
  const { siparisData } = props;
  if (!siparisData.total) {
    return <div> sipariş yok </div>;
  }
  return (
    <>
      <div className="success">
        <div className="success-container">
          <img src={logo} alt="Teknolojik Yemekler" />

          <div className="success-content">
            <p>lezzetin yolda</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
            <hr />
            <p>Position Absolute Acı Pizza</p>
          </div>

          <div className="success-data">
            <div>
              <p>Boyut:</p>
              <p>{siparisData.boyut}</p>
            </div>
            <div>
              <p>Hamur:</p>
              <p>{siparisData.hamur}</p>
            </div>
            <div>
              <p>Ek Malzemeler:</p>
              <p>{siparisData.malzemeler.join(", ")}</p>
            </div>
          </div>

          <div className="success-sipariscard">
            <div>
              <p>Sipariş Toplamı</p>
            </div>
            <div>
              <p>Seçimler</p>
              <p>{siparisData.malzemeler.length * 5 * siparisData.adet}₺</p>
            </div>
            <div>
              <p>Toplam</p>
              <p>{siparisData.total()}₺</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;
