import React from "react";
import "./SectionFive.css";
import AwardOne from "../assets/AwardOne.png";
import AwardTwo from "../assets/AwardTwo.png";
import Excellence from "../assets/Excellence.png";

function SectionFive() {
  return (
    <>
      <div className="section_five_sansk">
        <p className="heading_section5">Awards & Rankings</p>
        <div className="images_box_section5">
          <img src={AwardOne} alt="" className="image_section5" />
          <img src={AwardTwo} alt="" className="image_section5" />
          <img src={Excellence} alt="" className="image_section5" />
        </div>
      </div>

     <div className="orange_space_section5">
        <div className="column1_hurryup">Hurry up! Pre-book your seat</div>
        <div className="column2_hurryup">Hurry up! Pre-book your seat </div>
        <div className="column3_hurryup">Hurry up! Pre-book your seat</div>
      </div>
    </>
  );
}

export default SectionFive;
