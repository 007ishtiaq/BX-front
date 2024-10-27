import React from "react";
import "./Trustbox.css";
import "../visatypes/Visatypes.css";

import img1 from "../../images/trustbox/1.webp";
import img2 from "../../images/trustbox/2.webp";
import img3 from "../../images/trustbox/3.webp";
import { ReactComponent as Freesvg } from "../../images/visatypes/free.svg";
import { ReactComponent as Pricesvg } from "../../images/visatypes/price.svg";
import { ReactComponent as Supportsvg } from "../../images/visatypes/support.svg";

export default function Trustbox() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="vtypesheadingcont">
          <div className="trustboxheadcont">
            <p className="trusthead1">
              Welcome to <span>Sharp Edge Packaging</span>{" "}
            </p>
            <p className="trusthead2">
              <span>United State's </span>Most Trusted Box Packaging Suppliers
            </p>
          </div>
        </div>

        <div className="trustsubcont">
          <div className="trustsub">
            <div className="block-icon">
              <img src={img1} alt="" />
              <div class="block-center">
                <div class="trustsvgcont">
                  <Freesvg />
                </div>
                <h3 class="title">Free Shipping</h3>
                <div class="text">Free for all over oder $99.00</div>
              </div>
            </div>
          </div>
          <div className="trustsub">
            <div className="block-icon">
              <img src={img2} alt="" />
              <div class="block-center">
                <div class="trustsvgcont">
                  <Pricesvg className="trustsvg" />
                </div>
                <h3 class="title">Money back</h3>
                <div class="text">100% Money Back - 30 days</div>
              </div>
            </div>
          </div>
          <div className="trustsub">
            <div className="block-icon">
              <img src={img3} alt="" />
              <div class="block-center">
                <div class="trustsvgcont">
                  <Supportsvg className="trustsvg" />
                </div>
                <h3 class="title">24h support</h3>
                <div class="text">Service support fast 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
