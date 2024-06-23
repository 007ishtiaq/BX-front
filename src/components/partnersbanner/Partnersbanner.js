import React from "react";
import "./Partnersbanner.css";

export default function Partnersbanner() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont">
        <div className="partnerright">
          <div className="aboveheading"> OUR PREMIUM PARTNERS</div>
          <div className="heading"> Trusted By The World</div>
          <div className="subdata">
            {" "}
            You can list your partners or instructors brands here to show off
            your sites reputation
          </div>
          <button className="actionbtn">Apply Now</button>
        </div>
        <div className="partnerleft">
          <div className="bennerself">1</div>
          <div className="bennerself">2</div>
          <div className="bennerself">3</div>
          <div className="bennerself">4</div>
        </div>
      </div>
    </div>
  );
}
