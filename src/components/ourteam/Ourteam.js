import React from "react";
import "./Ourteam.css";
import person1 from "../../images/team/1.png";

export default function Ourteam() {
  return (
    <div className="cardcontainer reviewsbox">
      <div className="insidecont contentcont ">
        <div className="mainteamcont">
          <h1 className="mainteamheading"> Our Team</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            sit at, quas deleniti nulla, tenetur et voluptatum quis sapiente
            fuga unde voluptate non odio harum corporis ullam ad cupiditate
            obcaecati illo dolorum maxime. Excepturi!
          </p>
          <div class="teamrow">
            {/* <div className="teamcol"> */}
            <div class="team-col">
              <img src={person1} alt="" />
            </div>
            {/* </div> */}
            <div class="team-col">
              <img src={person1} alt="" />
            </div>
            <div class="team-col">
              <img src={person1} alt="" />
            </div>
            <div class="team-col">
              <img src={person1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
