import React from "react";
import { Link } from "react-router-dom";
import "./Scorebanner.css";
import cornerstyle from "../../images/scorebanner/cornerstyle.png";
import subjectimg from "../../images/scorebanner/subject.png";

export default function Scorebanner() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont scorecardcontainer">
        <div className="scorecardcont">
          <div className="scorecardleft">
            <div className="scorecont">
              <div className="scorecircle">
                <div className="scoreself">1000 +</div>
                <div className="scoretxt">
                  We Have Worked <br /> With Clients
                </div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">99 %</div>
                <div className="scoretxt">
                  Successfull Visa <br /> Process Rate
                </div>
              </div>
              <div className="scorecircle">
                <div className="scoreself">30 Days</div>
                <div className="scoretxt">
                  Application Approval <br /> Time We Follow
                </div>
              </div>
            </div>
            <div className="scorecontent">
              <p className="scoreheading">
                Top rated by Students & immigration firms with{" "}
                <span>100% success rate.</span>
              </p>
              <p className="scoresub">
                Get free Study Abroad Assessment today!
              </p>
              <div className="actionbtncont">
                <div class="apllyBtn">
                  <Link to="#">
                    <span>Apply Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="scorecardright">
            <img className="cornerstyle" src={cornerstyle} alt="" />
            <img src={subjectimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
