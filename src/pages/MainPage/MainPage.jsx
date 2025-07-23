import { useNavigate } from "react-router";
import css from "./MainPage.module.css";

export default function MainPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/catalog");

  return (
    <section className={css.hero}>
      <h1 className={css.title}>Find your perfect rental car</h1>

      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>

      <button className={css.button} onClick={handleClick} type="button">
        View Catalog
      </button>
    </section>
  );
}
