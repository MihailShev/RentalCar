import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarPage = lazy(() => import("../../pages/CarPage/CarPage.jsx"));
const NotFoutd = lazy(() => import("../NotFoutd/NotFoutd.jsx"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/catalog/:id" element={<CarPage />}></Route>
        <Route path="*" element={<NotFoutd />}></Route>
      </Routes>
    </Suspense>
  );
}
