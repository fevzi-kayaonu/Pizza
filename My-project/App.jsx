import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza />
        </Route>
        <Route exact path="/OrderSuccess">
          <OrderSuccess />
        </Route>
      </Switch>
    </>
  );
}

export default App;

/*
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza />
        </Route>
        <Route exact path="/OrderSuccess">
          <OrderSuccess />
        </Route>
      </Switch>
    */
