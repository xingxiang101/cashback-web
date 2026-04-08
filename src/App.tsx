import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MerchantPage } from "./MerchantPage";
import { ProductPage } from "./ProductPage";
import { ScrollToTop } from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/merchants" element={<MerchantPage />} />
      </Routes>
    </BrowserRouter>
  );
}
