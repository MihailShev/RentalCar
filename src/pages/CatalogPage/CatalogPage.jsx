import { useEffect, useState } from "react";
// import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import CatalogList from "../../components/CatalogList/CatalogList";

import css from "./CatalogPage.module.css";
import { api } from "../../redux";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function CatalogPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCatalog = async () => {
      const response = await api.get("/cars");
      const data = response.data.cars;
      setCars(data);
    };
    getCatalog();
  }, []);
  return (
    <section className={css.catalog}>
      <div className="container">
        {/* <CatalogFilter /> */}

        <CatalogList cars={cars} />

        <LoadMoreBtn />
      </div>
    </section>
  );
}
