import React from "react";
import "./MegaSlide.css";
import bannerimage from "../../images/megabanner/1.png";

export default function MegaSlide() {
  return (
    <div className="megaslidecont">
      <div className="megaslideoverlay"></div>
      <div className="megaslideleft">
        <div className="mshead">
          <p className="headspan1">Custom</p>
          <p className="headspan2">Packaging</p>
          <p className="headspan3">with your Custom Logo</p>
        </div>
        <div className="mssub">
          <p className="subp">
            Elevate Your Brand Packaging with Sharp Edge's Expertise and
            Creativity
          </p>
        </div>
        <div className="msctacont">
          <button className="apllyBtn">Request Quote</button>
          <button className="apllyBtn shopBtn">Explore</button>
        </div>
      </div>
      <div className="megaslideright">
        <div className="megaslideimgcont">
          <img src={bannerimage} alt="" />
        </div>
      </div>
    </div>
  );
}
