import logements from "../../data/logements.json";

import Card from "../../components/Card";
import Banner from "../../components/Banner";

import "./Home.scss";
import bannerBg from "../../assets/banner-bg-home.jpg";

export default function Home() {
  return (
    <div className="home">
      <Banner bg={bannerBg}>
        <h1>
          <span>Chez vous, </span>partout et ailleurs
        </h1>
      </Banner>
      <div className="home__cards">
        {logements.map((logement) => {
          return (
            <Card
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
            />
          );
        })}
      </div>
    </div>
  );
}
