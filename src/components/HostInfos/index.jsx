import "./HostInfos.scss";

export default function HostInfos({ name, picture }) {
  return (
    <div className="host-infos">
      <p className="host-infos__name">{name}</p>
      <img src={picture} alt="" className="host-infos__picture" />
    </div>
  );
}
