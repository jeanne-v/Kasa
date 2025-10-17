import "./Banner.scss";

export default function Banner({ children, bg }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="banner__inner">{children}</div>
    </div>
  );
}
