import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/ui/HomePage.tsx";
import { ProductPage } from "./pages/ProductPage/ui/ProductPage.tsx";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}
