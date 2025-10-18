import { Link } from "react-router";

import "./card.scss";

export default function Card(props) {
  return (
    <Link
      className="card"
      to={`properties/${props.id}`}
      style={{ backgroundImage: `url(${props.cover})` }}
    >
      <div className="card__bg"></div>
      <h2 className="card__title">{props.title}</h2>
    </Link>
  );
}
