import { useParams } from "react-router";

import SlideShow from "../../components/SlideShow";

import propertiesData from "../../data/logements.json";

export default function Property() {
  const params = useParams();
  const data = propertiesData.find((property) => property.id === params.id);
  return (
    <div className="property">
      <SlideShow pictures={data.pictures} />
    </div>
  );
}
