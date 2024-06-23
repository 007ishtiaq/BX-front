import React, { useState } from "react";
import "./Countriesbanner.css";
import malaysia from "../../images/democountryimgs/1.webp";

export default function Countriesbanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="countrymaincont">
      <div className="countrycont">123</div>
      <div className="countrycont">123</div>
      <div className="countrycont">123</div>
      <div
        className="countrycont"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="imgdiv"
          style={{
            backgroundImage: `linear-gradient(${
              hovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)"
            }, ${
              hovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)"
            }), url(${malaysia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <figure className="snip0016">
            <img alt="" src="./bot-img/1.jpg" />
            <figcaption>
              <h1 className="botnamepre">Fire Flame</h1>
              <h1 className="botnamepost">
                Fire <span>Flame</span>
              </h1>
              <p>
                A very unique bot that can identify <br /> market turns & trend
                continuation.
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
      <div className="countrycont">123</div>
      <div className="countrycont">123</div>
    </div>
  );
}
