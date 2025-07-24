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
  const [isEndList, setIsEndList] = useState(false);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const page = Number(searchParams.get("page") || 1);
    const brand = searchParams.get("brand") || "";
    const price = searchParams.get("price") || "";
    const minMileage = searchParams.get("minMileage") || "";
    const maxMileage = searchParams.get("maxMileage") || "";

    const loadedFilters = { page, brand, price, minMileage, maxMileage };
    setFilters(loadedFilters);
  }, [searchParams]);

  useEffect(() => {
    try {
      const getCatalog = async () => {
        const response = await api.get("/cars", {
          params: {
            page,
            limit: 8,
            brand: filters?.brand || undefined,
            rentalPrice: filters?.price || undefined,
            minMileage: filters?.minMileage || undefined,
            maxMileage: filters?.maxMileage || undefined,
          },
        });

        const carsData = response.data.cars;
        const totalPages = response.data.totalPages;
        setTotalPage(totalPages);
        setCars(carsData);
      };

      if (totalPage === page) {
        setIsEndList((prew) => !prew);
      }
      getCatalog();

      const getBrand = async () => {
        const result = await api.get("/brands");
        const brandsArr = result.data;
        setBrands(brandsArr);
      };

      getBrand();
    } catch (err) {
      console.log(err.message);
    }
  }, [page, totalPage, filters]);

  const handleFilterSubmit = (values) => {
    setPage(1);
    setFilters(values);

    const newParams = {
      page: "1",
      brand: values.brand || "",
      price: values.price || "",
      minMileage: values.minMileage || "",
      maxMileage: values.maxMileage || "",
    };

    setSearchParams(newParams);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.catalog}>
      <div className="container">
        <CatalogFilter
          filters={filters}
          brands={brands}
          onSubmit={handleFilterSubmit}
        />

        <CatalogList isEndList={isEndList} cars={cars} />

        {isEndList || cars.length === 0 ? (
          ""
        ) : (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </section>
  );
}
