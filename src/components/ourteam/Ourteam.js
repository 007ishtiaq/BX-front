import React from "react";
import "./Ourteam.css";
import person1 from "../../images/team/1.png";
import person2 from "../../images/team/2.jpg";
import person3 from "../../images/team/3.jpg";
import visionimg from "../../images/vision/visionimg.webp";

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
                Empowering learners worldwide with accessible, comprehensive,
                and innovative study resources to foster academic excellence and
                lifelong learning.
              </p>
            </div>
          </div>
          <h1 className="mainteamheading"> Our Team</h1>
          <p>
            Our team, driven by passion and united by purpose, brings together
            diverse expertise to transform education. We are dedicated to
            creating accessible, innovative study resources that empower
            learners worldwide.
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
                <p className="teamdesi">General Manager</p>
                <p className="teamname">Mr Waseem Ur Rehman</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi"> </p>
                <p className="teamname">Mr Abdul Hadi Khan</p>
              </div>
            </div>
          </div>
          <div class="teamrow">
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Marketing Manager </p>
                <p className="teamname">Mr Mudassar Ali</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Student Counsellor</p>
                <p className="teamname">Ms Tanzeel Khan</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Student Counsellor</p>
                <p className="teamname">Ms Muqdas Shafat</p>
              </div>
            </div>
            <div className="teamcol">
              <div class="team-col">
                <img src={person1} alt="" />
              </div>
              <div className="teamdetails">
                <p className="teamdesi">Office Assistant</p>
                <p className="teamname">Mr Faizan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
