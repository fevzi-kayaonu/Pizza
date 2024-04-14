import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div> Home</div>
      <Link to="/OrderPizza">Acıktım</Link>
    </>
  );
}

export default Home;
