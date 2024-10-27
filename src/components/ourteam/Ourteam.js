import React from "react";
import "./Ourteam.css";
import person7 from "../../images/team/7.png";
import visionimg from "../../images/scorebanner/subject.webp";
import Workintro from "../../components/workintro/Workintro";

export default function Ourteam() {
  return (
    <div className="cardcontainer reviewsbox">
      <div className="insidecont contentcont ">
        <div className="mainteamcont">
          <div class="aboutvisionimgcont">
            <div className="visionimgside">
              <img src={visionimg} alt="" />
            </div>
            <div className="visiontextside">
              <p>
                At Sharp Edge Packaging, our vision is to lead in high-quality,
                customized packaging solutions that protect and elevate our
                clients’ products. We’re committed to delivering packaging that
                embodies quality, security, and innovation in every box.
              </p>
            </div>
          </div>
          <h1 className="mainteamheading"> Our Team</h1>
          <p>
            At Sharp Edge Packaging, we take pride in being a trusted partner in
            packaging. We’re driven by customer satisfaction and a mission to
            provide reliable and innovative packaging solutions that add value
            to every product.
          </p>

          <Workintro aboutus={true} />
        </div>
      </div>
    </div>
  );
}
