import { Offline, Online } from "react-detect-offline";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetalis";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Online>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Online>

      <Offline>
        <div className="offline-message my-5 d-flex justify-content-center align-items-center">
          <div className="alert alert-danger text-center p-4 rounded shadow-sm">
            You are offline. Please check your internet connection.
          </div>
        </div>
      </Offline>
    </>
  );
}
export default App; 