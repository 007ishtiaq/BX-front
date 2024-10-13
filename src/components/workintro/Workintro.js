import React from "react";
import "./Workintro.css";
import img1 from "../../images/workintro/1.png";
import img2 from "../../images/workintro/2.png";
import img3 from "../../images/workintro/3.png";
import img4 from "../../images/workintro/4.png";

export default function Workintro() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont partnercont workcont">
        <div className="partnerright workcontright">
          <div className="aboveheading">About Us</div>
          <div className="heading">
            Providing innovative, sustainable packaging solutions tailored for
            diverse products
          </div>
          <div className="subdata">
            <p>
              Welcome to Sharp Edge Packaging, your trusted partner for
              high-quality packaging solutions with a focus on timely delivery
              and easy modifications to meet your needs. Our flexible return
              policy and commitment to the best customer service ensure a
              seamless experience, making us your reliable choice for all
              packaging requirements.
            </p>
          </div>
          <div>button here</div>
        </div>
        <div className="partnerleft">
          <div className="workingimgcont">
            <div className="workingimgsub">
              <div className="workingimg">
                <img src={img1} alt="" />
              </div>
              <div className="workingimg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="workingimgsub">
              <div className="workingimg workingimg3">
                <img src={img4} alt="" />
              </div>
              <div className="workingimg">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
