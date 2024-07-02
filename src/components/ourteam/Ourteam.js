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
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Mentor</p>
                <p className="teamname">Siddique Minhas</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">CEO</p>
                <p className="teamname">Hassan Zaman Khan</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">CEO</p>
                <p className="teamname">Waseem</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">CEO</p>
                <p className="teamname">Hadi Zaman Khan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
