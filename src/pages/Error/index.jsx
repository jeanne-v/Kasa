import { Link } from "react-router";

import "./Error.scss";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error__heading">404</h1>
      <h2 className="error__sub-heading">
        <span>Oups! La page que</span> vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
