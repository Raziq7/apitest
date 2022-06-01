import Home from "./screen/Home";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ShowProduct from "./screen/ShowProduct";
import ProDetailsPage from "./screen/ProDetailsPage";
import AddToCart from "./screen/AddToCart";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/ShowProduct" element={<ShowProduct />} />
      </Routes>
      <Routes>
        <Route path="/proDetails" element={<ProDetailsPage />} />
      </Routes>

      <Routes>
        <Route path="/addToCart" element={<AddToCart />} />
      </Routes>
    </Routers>
  );
}

export default App;
