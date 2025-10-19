import "./Tag.scss";

export default function Tag({ text }) {
  return (
    <div className="tag">
      <p className="tag__text">{text}</p>
    </div>
  );
}
