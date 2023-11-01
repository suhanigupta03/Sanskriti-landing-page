import React from "react";
import "./SectionTwo.css";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.png";
import Icon6 from "../assets/icon6.png";
import Icon7 from "../assets/icon7.png";
import Icon8 from "../assets/icon8.png";
import Icon9 from "../assets/icon9.jpg";
import Icon10 from "../assets/icon10.png";

function SectionTwo() {
  return (
    <>
      <div className="section_two_sansk">
        <p className="section_two_heading_sansk">
          Why you should consider studying BAMS here... 👇
        </p>
        <p className="section_two_subheading_sansk">
          Here are the various facilities available at our Medical College
        </p>

        <div className="row_one_sansk">
          <div className="box1_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon1} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
                World Class Infrastructure
              </p>
            </div>
          </div>
          <div className="box2_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon2} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Highly Experienced Faculty</p>
            </div>
          </div>
          <div className="box3_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon3} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Smart Classes</p>
            </div>
          </div>
          <div className="box4_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon4} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Laboratory</p>
            </div>
          </div>
          <div className="box5_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon5} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">PanchKarma Center</p>
            </div>
          </div>

          <div className="box6_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon6} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">
                International Tieup
              </p>
            </div>
          </div>
          <div className="box7_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon7} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Herbal Garden</p>
            </div>
          </div>
          <div className="box8_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon8} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Evidence Based Practices</p>
            </div>
          </div>
          <div className="box9_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon9} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">4*/5 rating by careerkick neet</p>
            </div>
          </div>
          <div className="box10_sansk box_sansk">
            <div className="upper_box_sansk">
              <img src={Icon10} className="box_icon_sansk" />
            </div>
            <div className="lower_box_sansk">
              <p className="description_box_sansk">Research Oriented Practices</p>
            </div>
          </div>
        </div>

        <a href="./SectionOne.js" className="seat_booking_sansk">
          Yes, I want to Pre-Book My Seat !
        </a>

        {/* <p className="last_text_section2">
          ONLY 15 SEATS LEFT! - <span>Without Donation</span>
        </p> */}
      </div>
    </>
  );
}

export default SectionTwo;
