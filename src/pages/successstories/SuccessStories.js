import React from "react";
import "./SuccessStories.css";
import story1 from "../../images/stories/1.png";
import story2 from "../../images/stories/2.png";
import story3 from "../../images/stories/3.png";

export default function SuccessStories() {
  return (
    <div class="succcont">
      <div className="cardcontainer reviewsbox">
        <div className="insidecont contentcont ">
          <div class="contactheadcont">
            <p>Success Stories</p>
          </div>
          <div class="contactsubcont successheading">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quibusdam minima dolorem facere maiores aspernatur
              nesciunt dignissimos nulla, ab, maxime quia, reiciendis modi cum
              reprehenderit!
            </p>
            <div className="storiescont">
              <div className="story">
                <img src={story1} alt="" />
              </div>
              <div className="story">
                <img src={story2} alt="" />
              </div>
              <div className="story">
                <img src={story3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
