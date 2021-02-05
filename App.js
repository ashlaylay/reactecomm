import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import Home from "./Containers/Home/Home";
import Products from "./Containers/Products/Products";
import Contacts from "./Containers/Contacts/Contacts";

import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
      <Route path="/contacts" exact component={Contacts} />
    </>
  );
}

export default App;
