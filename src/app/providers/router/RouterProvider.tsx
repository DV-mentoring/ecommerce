import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../../../pages/HomePage/ui/HomePage.tsx";
import { ProductPage } from "../../../pages/ProductPage/ui/ProductPage.tsx";

export const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/category/:category/:subcategory/product/:productId"
                    element={<ProductPage />}
                />
                <Route
                    path="/category/:category/product/:productId"
                    element={<ProductPage />}
                />
                <Route path="/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};
