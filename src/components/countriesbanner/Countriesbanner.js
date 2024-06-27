import React, { useState } from "react";
import "./Countriesbanner.css";
import finland from "../../images/democountryimgs/finland.png";
import belgium from "../../images/democountryimgs/belgium.jpg";
import denmark from "../../images/democountryimgs/denmark.webp";
import uk from "../../images/democountryimgs/uk.jpg";
import cyprus from "../../images/democountryimgs/cyprus.png";
import ireland from "../../images/democountryimgs/ireland.png";

const cardData = [
  {
    imgSrc: finland, // replace with actual image paths as needed
    botNamePre: "Finland",
    botNamePost: "Finland",
    description:
      "A fascinating intellectual and cultural experience can be had while studying in Germany. German institutions are well-known for...",
  },
  {
    imgSrc: belgium,
    botNamePre: "Belgium",
    botNamePost: "Belgium",
    description:
      "France offers a rich cultural heritage and an excellent academic environment. French universities are renowned for their quality of education...",
  },
  {
    imgSrc: denmark,
    botNamePre: "Denmark",
    botNamePost: "Denmark",
    description:
      "France offers a rich cultural heritage and an excellent academic environment. French universities are renowned for their quality of education...",
  },
  {
    imgSrc: uk,
    botNamePre: "United Kingdom",
    botNamePost: "United Kingdom",
    description:
      "France offers a rich cultural heritage and an excellent academic environment. French universities are renowned for their quality of education...",
  },
  {
    imgSrc: cyprus,
    botNamePre: "Cyprus",
    botNamePost: "Cyprus",
    description:
      "France offers a rich cultural heritage and an excellent academic environment. French universities are renowned for their quality of education...",
  },
  {
    imgSrc: ireland,
    botNamePre: "Ireland",
    botNamePost: "Ireland",
    description:
      "France offers a rich cultural heritage and an excellent academic environment. French universities are renowned for their quality of education...",
  },
];

export default function Countriesbanner() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="countrymaincont cardcontainer countrycardcontainer">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="countrycont"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="imgdiv"
            style={{
              backgroundImage: `linear-gradient(${
                hoveredIndex === index
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(0, 0, 0, 0)"
              }, ${
                hoveredIndex === index
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(0, 0, 0, 0)"
              }), url(${card.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <figure className="snip0016">
              <img alt="" src="./bot-img/1.jpg" />
              <figcaption>
                <h1 className="botnamepre">{card.botNamePre}</h1>
                <h1 className="botnamepost">
                  <span>{card.botNamePost}</span>
                </h1>
                <p>{card.description}</p>
              </figcaption>
            </figure>
          </span>
        </div>
      ))}
    </div>
  );
}
