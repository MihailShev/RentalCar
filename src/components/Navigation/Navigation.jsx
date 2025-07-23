import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <div className={`container ${css.header}`}>
        <Link className={css.link} to="/">
          <svg height={16} width={104}>
            <use href="/logo/logo.svg" />
          </svg>
        </Link>

        <nav>
          <ul className={css.ul}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : css.link
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : css.link
                }
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
