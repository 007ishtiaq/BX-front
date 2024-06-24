import React from "react";
import "./Partnersbanner.css";
import uni1 from "../../images/partnerdiv/1.png";
import uni2 from "../../images/partnerdiv/2.png";
import uni3 from "../../images/partnerdiv/3.png";
import uni4 from "../../images/partnerdiv/4.png";

export default function Partnersbanner() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont">
        <div className="partnerright">
          <div className="aboveheading"> OUR PREMIUM PARTNERS</div>
          <div className="heading"> Trusted By The World</div>
          <div className="subdata">
            You can list your partners or instructors brands here to show off
            your sites reputation
          </div>
          <button className="actionbtn">Apply Now</button>
        </div>
        <div className="partnerleft">
          <div className="bennerself">
            <img className="uniimages" src={uni1} alt="" />
          </div>
          <div className="bennerself">
            <img className="uniimages" src={uni2} alt="" />
          </div>
          <div className="bennerself">
            <img className="uniimages" src={uni3} alt="" />
          </div>
          <div className="bennerself">
            <img className="uniimages" src={uni4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
