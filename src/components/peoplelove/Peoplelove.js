import React from "react";
import "./Peoplelove.css";
import { ReactComponent as Designsvg } from "../../images/visatypes/design.svg";
import { ReactComponent as Pricesvg } from "../../images/visatypes/price.svg";
import { ReactComponent as Hiddensvg } from "../../images/visatypes/hidden.svg";
import { ReactComponent as Supportsvg } from "../../images/visatypes/support.svg";
import { ReactComponent as Fastsvg } from "../../images/visatypes/fast.svg";
import { ReactComponent as Returnsvg } from "../../images/visatypes/return.svg";

export default function Peoplelove() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="vtypesheadingcont peoplelovecont">
          <div className="trustboxheadcont">
            <p className="trusthead1">
              Why people <span>loves</span> us
            </p>
            <p className="trusthead2">
              We take responsibility for your products{" "}
              <span> like our own.</span>
            </p>
          </div>
          <div className="peoplesubcont">
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Designsvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">Design Support</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Pricesvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">Guaranteed Best Price</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Hiddensvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">No Hidden Charges</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Returnsvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">Easy Return</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Fastsvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">Super fast performance</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
            <div className="peoplesub">
              <div className="peoplesubtxtcont">
                <div className="svgcont">
                  <Supportsvg className="vtypesvgsize" />
                </div>
                <h1 className="heading">Outstanding support</h1>
                <p className="detailscont">
                  Auctor mauris quis viverra dictum sed in euismod id nunc,
                  nulla ut nunc sed sed accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
