import React from "react";
import "./Reviewsbox.css";
import "../productPage/productreviews.css";
import "../productPage/ProductInfo.css";
import { ReactComponent as Personsvg } from "../../images/productpage/personsvg.svg";
import { ReactComponent as Verified } from "../../images/productpage/verified.svg";
import Mystars from "../ratingstars/Mystars";

export default function Reviewsbox() {
  return (
    <div className="cardcontainer reviewsbox">
      <div className="insidecont contentcont ">
        <div className="mainreviewcont">
          <h1 className="mainreviewheading"> Customers Reviews</h1>
          <div className="ratingcont">
            <span className="reviewsscore">4.8</span> Out of 5 based on 3649
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
                    <p>Jessica Thompson</p>
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
                    <span>Reviewed on 02-Oct-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Sharp Edge Packaging provided top-notch packaging solutions
                    for our products. Their team was attentive, ensuring our
                    packaging needs were met with precision. Each box was
                    crafted to perfection, and we couldn't be happier with the
                    results. I highly recommend them for any packaging needs!
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
                    <p>David Miller</p>
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
                    <span>Reviewed on 16-Sep-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Working with Sharp Edge Packaging made our packaging process
                    seamless. Their attention to detail and commitment to
                    quality exceeded our expectations. Every box delivered was
                    durable and well-designed, giving our products a premium
                    touch. Highly recommended for reliable packaging!
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
                    <p>Ashley Ramirez</p>
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
                    <span>Reviewed on 28-Sep-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    Sharp Edge Packaging transformed our packaging experience.
                    They understood our requirements well and provided sturdy,
                    eco-friendly boxes that align with our brand. Their service
                    was timely, and communication was clear throughout. We’re
                    delighted with the results and recommend them highly!
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
                    <p>Sarah Collins</p>
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
                    <span>Reviewed on 12-Oct-2024</span>
                  </div>

                  <div class="reviewtxt thisreviewtxt">
                    The team at Sharp Edge Packaging went above and beyond to
                    create packaging that truly represented our brand. They
                    offered expert guidance, and the boxes were both durable and
                    visually appealing. If you’re looking for exceptional
                    packaging, Sharp Edge Packaging is the way to go!
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
