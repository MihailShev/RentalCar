import { useEffect, useState } from "react";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import CatalogList from "../../components/CatalogList/CatalogList";

import css from "./CatalogPage.module.css";
import { api } from "../../redux";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useSearchParams } from "react-router";

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page") || 1);

  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(pageParam);
  const [totalPage, setTotalPage] = useState(0);
  const [boolen, setBoolen] = useState(false);

  useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [page, setSearchParams]);

  useEffect(() => {
    try {
      const getCatalog = async () => {
        const response = await api.get("/cars", {
          params: { page, limit: 8 },
        });

        const carsData = response.data.cars;
        const totalPages = response.data.totalPages;
        setTotalPage(totalPages);
        setCars(carsData);
      };

      if (totalPage === page) {
        setBoolen((prew) => !prew);
      }
      getCatalog();
    } catch (err) {
      console.log(err.message);
    }
  }, [page, totalPage]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.catalog}>
      <div className="container">
        <CatalogFilter />

        <CatalogList boolen={boolen} cars={cars} />

        {boolen ? "" : <LoadMoreBtn onClick={handleLoadMore} />}
      </div>
    </section>
  );
}
