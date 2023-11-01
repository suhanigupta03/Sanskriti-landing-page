import React from "react";
import "./SectionFour.css";

function SectionFour() {
  return (
    <>
      <div className="section_four_sansk">
        <p className="section_four_text1">
          There are tons of opportunities waiting for you Inside!
        </p>
        <p className="section_four_text2">
          Reserve Your Seat before the Pre-Booking Closes!
        </p>

        <div className="box1_section4">Here's your Career Defining Moment</div>
        <a href="./SectionOne.js" className="box2_section4">Pre-Book Your Seat Now!</a>
        <p className="section_four_text3">Admission Pre-Booking Ending in</p>
        <p className="section_four_text4">
          02: 10: <span className="red_timer">05</span>
        </p>

        <div className="box3_section4">
          © 2023 Sanskriti University. All rights reserved
        </div>
      </div>
    </>
  );
}

export default SectionFour;
