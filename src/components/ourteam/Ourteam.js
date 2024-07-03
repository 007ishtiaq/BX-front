import React from "react";
import "./Ourteam.css";
import person1 from "../../images/team/1.png";
import person2 from "../../images/team/2.jpg";
import person3 from "../../images/team/3.jpg";

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
                <p className="teamname">Mr Siddique Minhas</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person3} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">CEO</p>
                <p className="teamname">Mr Hassan Zaman Khan</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person2} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Senior Counselor</p>
                <p className="teamname">Mr Waseem</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Senior Counselor</p>
                <p className="teamname">Mr Hadi Zaman Khan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
