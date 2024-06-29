import React from "react";
import "./Stepsbanner.css";
import { ReactComponent as Touristsvg } from "../../images/visatypes/tourist.svg";
import { ReactComponent as Studysvg } from "../../images/visatypes/study.svg";
import { ReactComponent as Spousalsvg } from "../../images/visatypes/spousal.svg";

export default function Stepsbanner() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="stepheadingcont">OUR SERVICES!</div>
        <div className="stepscont">
          <div className="stepself aqua">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 1 </h1>
              </div>
            </div>
            <h1 className="heading">Counselling</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
          <div className="stepself orange">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 2 </h1>
              </div>
            </div>
            <h1 className="heading">Admission Guidance</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
          <div className="stepself green">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 3 </h1>
              </div>
            </div>
            <h1 className="heading">University Selection</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
          <div className="stepself pink">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 4 </h1>
              </div>
            </div>
            <h1 className="heading">Visa Application Assistance</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
          <div className="stepself blue">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 5 </h1>
              </div>
            </div>
            <h1 className="heading">Travel Assistance</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
          <div className="stepself lightblue">
            <div className="svgcont touristsvg">
              <Touristsvg />
              <div className="contcount">
                <h1> 6 </h1>
              </div>
            </div>
            <h1 className="heading">Financial Aid & Scholarship Guidance</h1>
            <p className="detailscont">
              Applying for studying abroad is a huge decision which is why we do
              not limit our counselling decision which is why we do not limit
              our counselling..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
