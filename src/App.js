import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Navbar";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDesc";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/:productId" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
