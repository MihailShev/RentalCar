import CatalogItem from "../Catalogitem/Catalogitem";
import css from "./CatalogList.module.css";
import clsx from "clsx";

export default function CatalogList({ boolen, cars }) {
  return (
    <ul className={clsx(css.ul, { [css.active]: boolen })}>
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
