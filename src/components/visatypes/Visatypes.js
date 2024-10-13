import React from "react";
import "./Visatypes.css";
import { ReactComponent as Hiddensvg } from "../../images/visatypes/hidden.svg";
import { ReactComponent as Designsvg } from "../../images/visatypes/design.svg";
import { ReactComponent as Freesvg } from "../../images/visatypes/free.svg";
import { ReactComponent as Pricesvg } from "../../images/visatypes/price.svg";

export default function Visatypes() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="vtypesheadingcont">
          <p>
            We take responsibility for your <br /> products
            <span> like our own.</span>
          </p>
        </div>
        <div className="vtypescont">
          <div className="vtypesself">
            <div className="svgcont">
              <Designsvg className="vtypesvgsize" />
            </div>
            <h1 className="heading">Design Support</h1>
            <p className="detailscont">Get Aboslutely Free Design Support</p>
          </div>
          <div className="vtypesself">
            <div className="svgcont touristsvg">
              <Freesvg />
            </div>
            <h1 className="heading">Free Shiping</h1>
            <p className="detailscont">Free Shipping Across the USA</p>
          </div>
          <div className="vtypesself">
            <div className="svgcont">
              <Pricesvg className="vtypesvgsize" />
            </div>
            <h1 className="heading">Guaranteed Best Price</h1>
            <p className="detailscont">We Can Beat Any Quote</p>
          </div>
          <div className="vtypesself">
            <div className="svgcont">
              <Hiddensvg className="vtypesvgsize" />
            </div>
            <h1 className="heading">No Hidden Charges</h1>
            <p className="detailscont">No Die and Plate Charges</p>
          </div>
        </div>
      </div>
    </div>
  );
}
