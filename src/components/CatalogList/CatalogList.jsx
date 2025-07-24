import CatalogItem from "../Catalogitem/Catalogitem";
import css from "./CatalogList.module.css";
import clsx from "clsx";

export default function CatalogList({ isEndList, cars }) {
  return (
    <ul className={clsx(css.ul, { [css.active]: isEndList })}>
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
