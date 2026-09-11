import "./Banner.scss";

export default function Banner({ children, bg }) {
  return (
    <div
      className="banner"
      data-testid="banner"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="banner__inner">{children}</div>
    </div>
  );
}
