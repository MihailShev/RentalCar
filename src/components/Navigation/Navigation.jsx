import { Link, NavLink } from "react-router";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={`container ${css.header}`}>
      <Link className={css.link} to="/">
        <svg height={16} width={104}>
          <use href="/logo/logo.svg" />
        </svg>
      </Link>

      <div className={css.wrap_link}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/catalog"
        >
          Catalog
        </NavLink>
      </div>
    </div>
  );
}
