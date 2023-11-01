import React from "react";
import "./SectionSix.css";

function SectionSix() {
  return (
    <>
      <div className="section_six_sansk">
        <div className="heading_section5">Take a look at our University</div>
        <div className="subheading_section5">
          Complete BAMS Info of Sanskriti College of Ayurvedic Medical Science
          👇
        </div>

        <iframe
          className="youtube_video_sansk"
          src="https://www.youtube.com/embed/cxqjIb72R2I?autoplay=1&mute=1"
        ></iframe>

        <a href="./SectionOne.js" className="fifteenseats_section5">
          Yes, I want to Pre-Book My Seat for BAMS!
        </a>

<div className="last_text_section5">
          Hurry up -{" "}
          <span className="without_donation">Pre-book your seat</span>
        </div>
      </div>
    </>
  );
}

export default SectionSix;
