import React from "react";
import "./SuccessStories.css";
import story1 from "../../images/stories/1.png";
import story2 from "../../images/stories/2.png";
import story3 from "../../images/stories/3.png";
import story4 from "../../images/stories/4.jpeg";
import story5 from "../../images/stories/5.jpeg";
import story6 from "../../images/stories/6.jpeg";
import story7 from "../../images/stories/7.jpeg";
import story8 from "../../images/stories/8.jpeg";
import story9 from "../../images/stories/9.jpeg";
import story10 from "../../images/stories/10.jpeg";
import story11 from "../../images/stories/11.jpeg";
import story12 from "../../images/stories/12.jpeg";
import story13 from "../../images/stories/13.jpeg";
import story14 from "../../images/stories/14.jpeg";
import story15 from "../../images/stories/15.jpeg";
import story16 from "../../images/stories/16.jpeg";
import story17 from "../../images/stories/17.jpeg";
import ModalImage from "react-modal-image";

export default function SuccessStories() {
  return (
    <div class="succcont">
      <div className="cardcontainer reviewsbox">
        <div className="insidecont contentcont ">
          <div class="succheadcont">
            <p>Success Stories</p>
          </div>
          <div class="contactsubcont successheading">
            <p>
              Discover seamless visa solutions that have empowered countless
              travelers to explore the world effortlessly. Trust our expertise
              to turn your travel aspirations into reality.
            </p>

            <div className="storiescont">
              <div className="story">
                <ModalImage small={story1} large={story1} />
              </div>
              <div className="story">
                <ModalImage small={story2} large={story2} />
              </div>
              <div className="story">
                <ModalImage small={story3} large={story3} />
              </div>
              <div className="story">
                <ModalImage small={story4} large={story4} />
              </div>
              <div className="story">
                <ModalImage small={story5} large={story5} />
              </div>
              <div className="story">
                <ModalImage small={story6} large={story6} />
              </div>
              <div className="story">
                <ModalImage small={story7} large={story7} />
              </div>
              <div className="story">
                <ModalImage small={story8} large={story8} />
              </div>
              <div className="story">
                <ModalImage small={story9} large={story9} />
              </div>
              <div className="story">
                <ModalImage small={story10} large={story10} />
              </div>
              <div className="story">
                <ModalImage small={story11} large={story11} />
              </div>
              <div className="story">
                <ModalImage small={story12} large={story12} />
              </div>
              <div className="story">
                <ModalImage small={story13} large={story13} />
              </div>
              <div className="story">
                <ModalImage small={story14} large={story14} />
              </div>
              <div className="story">
                <ModalImage small={story15} large={story15} />
              </div>
              <div className="story">
                <ModalImage small={story16} large={story16} />
              </div>
              <div className="story">
                <ModalImage small={story17} large={story17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
