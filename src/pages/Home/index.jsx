import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Banner from "../../components/Banner";

import "./Home.scss";
import bannerBg from "../../assets/banner-bg-home.jpg";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLogements() {
      try {
        const res = await fetch("/logements.json");
        const logementsData = await res.json();
        setData(logementsData);
      } catch (err) {
        setError(err);
      }
    }

    fetchLogements();
  }, []);

  if (error) {
    return <p>une erreur est survenue</p>;
  }

  return (
    <div className="home">
      <Banner bg={bannerBg}>
        <h1>
          <span>Chez vous, </span>partout et ailleurs
        </h1>
      </Banner>
      {data && (
        <div className="home__cards">
          {data.map((logement) => {
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
      )}
    </div>
  );
}
