import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import SlideShow from "../../components/SlideShow";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import HostInfos from "../../components/HostInfos";
import Collapse from "../../components/Collapse";

import "./Property.scss";

export default function Property() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLogement() {
      try {
        const res = await fetch("/logements.json");
        const logementsData = await res.json();
        const logementData = logementsData.find((property) => property.id === params.id);
        if (!logementData) {
          navigate("/404");
        } else {
          setData(logementData);
        }
      } catch (err) {
        setError(err);
      }
    }

    fetchLogement();
  }, [params, navigate]);

  if (error) {
    return <p>Une erreur est survenue</p>;
  }

  return (
    <>
      {data && (
        <div className="property">
          <SlideShow pictures={data.pictures} />

          <div className="property__basic-infos">
            <div>
              <h1 className="property__title">{data.title}</h1>
              <p className="property__location">{data.location}</p>

              <div className="property__tags">
                {data.tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>
            </div>

            <div className="property__rating-and-host">
              <Rating rating={data.rating} />
              <HostInfos name={data.host.name} picture={data.host.picture} />
            </div>
          </div>

          <div className="property__details">
            <Collapse title="Description" titleType="p">
              <p>{data.description}</p>
            </Collapse>
            <Collapse title="Équipements" titleType="p">
              <ul style={{ padding: 0, listStyleType: "none" }}>
                {data.equipments.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </>
  );
}
