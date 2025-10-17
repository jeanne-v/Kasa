import { Link, NavLink } from "react-router";

import "./Header.scss";
import logo from "../../assets/kasa-logo-red.svg";

export default function Header() {
  function getNavLinkClass(isActive) {
    return isActive ? "header__link header__link--active" : "header__link";
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="Accueil Kasa" className="header__logo" />
        </Link>
        <nav className="header__nav">
          <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="/">
            Accueil
          </NavLink>
          <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="a-propos">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
