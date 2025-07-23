import CatalogItem from "../Catalogitem/CatalogItem";
import css from "./CatalogList.module.css";

export default function CatalogList({ cars }) {
  console.log(cars);
  return (
    <ul className={css.ul}>
      {cars.map(
        ({
          id,
          address,
          mileage,
          brand,
          model,
          img,
          rentalPrice,
          year,
          rentalCompany,
        }) => (
          <li key={id}>
            <CatalogItem
              id={id}
              address={address}
              mileage={mileage}
              brand={brand}
              model={model}
              img={img}
              rentalPrice={rentalPrice}
              year={year}
              rentalCompany={rentalCompany}
            />
          </li>
        )
      )}
    </ul>
  );
}
