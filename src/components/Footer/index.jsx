import "./Footer.scss";
import logo from "../../assets/kasa-logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img alt="Kasa" src={logo} className="footer__logo" />
      <p className="footer__legal">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
