import { useNavigate } from "react-router";
import css from "./CatalogItem.module.css";

export default function CatalogItem({
  id,
  address,
  mileage,
  brand,
  model,
  img,
  rentalPrice,
  year,
  rentalCompany,
}) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/catalog/:${id}`);

  return (
    <div className={css.catalogItem}>
      <button className={css.favorite} type="button">
        <svg height={16} width={16}>
          <use href="/svg/icons.svg#icon-like" />
        </svg>
      </button>

      <img className={css.img} src={img} alt="Car photo" />

      <div className={css.wrap_text}>
        <p>
          {brand}
          <span className={css.span}> {model}</span>, {year}
        </p>

        <p>{rentalPrice}$</p>

        <p className={css.address}>
          {address} | {rentalCompany} |
        </p>

        <p className={css.mileage}>Suv | {mileage} km</p>
      </div>

      <button className={css.read_more} onClick={handleClick} type="button">
        Read more
      </button>
    </div>
  );
}
