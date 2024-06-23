import React from "react";
import "./Visatypes.css";
import { ReactComponent as Touristsvg } from "../../images/visatypes/tourist.svg";
import { ReactComponent as Studysvg } from "../../images/visatypes/study.svg";
import { ReactComponent as Spousalsvg } from "../../images/visatypes/spousal.svg";

export default function Visatypes() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="vtypesheadingcont">HOW WE HELP CLIENTS!</div>
        <div className="vtypescont">
          <div className="vtypesself">
            <div className="svgcont touristsvg">
              <Touristsvg />
            </div>
            <div className="heading">Tourist Visa</div>
            <div className="detailscont">
              Travelers may sometimes require transit visas in order to pass
              through a country that is not their
            </div>
          </div>
          <div className="vtypesself">
            <div className="svgcont">
              <Studysvg />
            </div>
            <div className="heading">Study Visa</div>
            <div className="detailscont">
              Travelers may sometimes require transit visas in order to pass
              through a country that is not their
            </div>
          </div>
          <div className="vtypesself">
            <div className="svgcont">
              <Spousalsvg />
            </div>
            <div className="heading">Spousal Visa</div>
            <div className="detailscont">
              Travelers may sometimes require transit visas in order to pass
              through a country that is not their
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
