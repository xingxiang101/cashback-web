import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeliveryOperationsPage } from "./DeliveryOperationsPage";
import { LegalPolicyPage } from "./LegalPolicyPage";
import { MerchantPage } from "./MerchantPage";
import { ProductPage } from "./ProductPage";
import { ScrollToTop } from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MerchantPage />} />
        <Route path="/merchants" element={<MerchantPage />} />
        <Route path="/product-detail" element={<ProductPage />} />
        <Route path="/delivery-operations" element={<DeliveryOperationsPage />} />
        <Route path="/privacy-policy" element={<LegalPolicyPage type="privacy" />} />
        <Route path="/cookie-policy" element={<LegalPolicyPage type="cookie" />} />
      </Routes>
    </BrowserRouter>
  );
}
