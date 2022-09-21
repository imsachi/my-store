import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductsList from "./Components/ProductsList";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList />}></Route>
          <Route
            path="/app/products/:productId"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
