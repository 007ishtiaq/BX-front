import React from "react";
import "./Reviewsbox.css";
import "../productPage/productreviews.css";
import "../productPage/ProductInfo.css";
import { ReactComponent as Personsvg } from "../../images/productpage/personsvg.svg";
import { ReactComponent as Verified } from "../../images/productpage/verified.svg";
import Mystars from "../ratingstars/Mystars";

export default function Reviewsbox() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont ">
        <div className="mainreviewcont">
          <h1 className="mainreviewheading"> Customers Reviews</h1>
          <div className="ratingcont">
            <span className="reviewsscore">4.8</span> Out of 5 based on 6397
            reviews
          </div>
          <div className="mainreviewscont">
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <Personsvg class="customersvg"></Personsvg>
                  </div>
                  <div class="cname">
                    <p>Asad Ali</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 16-Dec-2023</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sed impedit vitae odit nam. Voluptates ullam fsdfsd
                    sfdsfdsf.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <Personsvg class="customersvg"></Personsvg>
                  </div>
                  <div class="cname">
                    <p>Kamran Ahmad</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 16-Dec-2023</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sed impedit vitae odit nam. Voluptates ullam fsdfsd
                    sfdsfdsf.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <Personsvg class="customersvg"></Personsvg>
                  </div>
                  <div class="cname">
                    <p>Asif Khan</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 16-Dec-2023</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sed impedit vitae odit nam. Voluptates ullam fsdfsd
                    sfdsfdsf.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewself">
              <div class="productreviewself thisreview">
                <div class="cnamecont thiscnamecont">
                  <div class="cimg">
                    <Personsvg class="customersvg"></Personsvg>
                  </div>
                  <div class="cname">
                    <p>Sohail Ahmad</p>
                  </div>
                </div>
                <div class="creviewcont thiscreviewcont">
                  <div class="givenstars">
                    <div class="prostarscont thisprostarscont">
                      <Mystars
                        rating={5}
                        containerclass={"prostarsspan"}
                        StarFullclass={"prostars thisprostars"}
                        StarHalfclass={"prostars thisprostars star-half"}
                        StarEmptyclass={"prostars thisprostars star-empty"}
                      ></Mystars>
                      <span>{5}</span>
                    </div>
                  </div>
                  <div class="reviewposttime">
                    <span>Reviewed on 16-Dec-2023</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    sed impedit vitae odit nam. Voluptates ullam fsdfsd
                    sfdsfdsf.
                  </div>

                  <div class="varifiedcont thisvarifiedcont">
                    <Verified></Verified>
                    <div class="varifiedtxt">Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
