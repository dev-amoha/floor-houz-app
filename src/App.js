import "./App.css";

import Homepage from "./Components/Homepage";

import OurProductData from "./Components/OurProductData";

import PopularProducts from "./Components/PopularProducts";
import RequestCall from "./Components/RequestCall";
import HowWework from "./Components/HowWework";
import WebProductList from "./Components/WebProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/OurProductData" element={<OurProductData />} />
      <Route path="/PopularProducts" element={<PopularProducts />} />
      <Route path="/RequestCall" element={<RequestCall />} />
      <Route path="/HowWework" element={<HowWework />} />
      <Route path="/WebProductList" element={<WebProductList />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
    </Routes>
  );
}
export default App;
