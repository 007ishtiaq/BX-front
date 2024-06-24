import React, { useState } from "react";
import "./Countriesbanner.css";
import malaysia from "../../images/democountryimgs/1.webp";

export default function Countriesbanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="countrymaincont">
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
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
              <h1 className="botnamepre">Germany</h1>
              <h1 className="botnamepost">
                <span>Germany</span>
              </h1>
              <p>
                A fascinating intellectual and cultural experience can be had
                while studying in Germany. German institutions are well-known
                for...
              </p>
            </figcaption>
          </figure>
        </span>
      </div>
    </div>
  );
}
