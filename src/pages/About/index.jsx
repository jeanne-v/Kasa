import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import "./About.scss";
import bannerBg from "../../assets/banner-bg-about.jpg";

const values = [
  {
    title: "Fiabilité",
    desc: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    desc: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    desc: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécurité",
    desc: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {
  return (
    <div className="about">
      <Banner bg={bannerBg} />
      <div className="values">
        {values.map((value, index) => {
          return (
            <Collapse
              key={`${value.title}-${index}`}
              title={value.title}
              titleType="h2"
              text={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
