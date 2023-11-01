import React from "react";
import "./SectionOne.css";
import HeroImage from "../assets/HeroImage.png";

function SectionOne() {
  return (
    <>
      <div className="section_one_sansk">
        <div className="leftside_section1_sansk">
          <div className="text1_section1">ADMISSION OPEN FOR 2023</div>
          <div className="text2_section1">
            Bachelor of Ayurvedic<br></br> Medicine and surgery (B.A.M.S)
          </div>

          <p className="text5_section1 font_size_1">
            <span className="number_one_sansk font_size_2">No.1</span> ayurvedic
            university in north india
          </p>
          <p className="text4_section1 font_size_1">
            <span className="four_star_sansk font_size_2">4*</span> rating by{" "}
            <a
              className="neet_link"
              href="https://www.youtube.com/@CAREERKICKNEET"
            >
              CareerkickNeet
            </a>{" "}
            out of 5.
          </p>
          <p className="text3_section1 font_size_1">
            <span className="ranked_first font_size_2">N.C.S.I.M</span> approved
          </p>
        </div>
        <div className="rightside_section1_sansk">
          <div className="form_main_sansk">
            <div className="heading_form_section1">
              Get Started On Your Journey
            </div>
            <div className="subheading_form_section1">
              Fill your details to claim your Pre- Booking 👇
            </div>

            <div class="container">
              <input
                type="text"
                className="form_details1_section1 form_section1_details"
                placeholder="Full Name"
                name="entry.425690120"
                required
              />
              <input
                type="email"
                className="form_details2_section1 form_section1_details"
                placeholder="Email"
                name="entry.8440419"
                required
              />
              <input
                type="number"
                className="form_details3_section1 form_section1_details"
                placeholder="Mobile Number"
                name="entry.1978827230"
                required
              />
              <select
                name=""
                id=""
                className="form_details4_section1 form_section1_details"
              >
                <option value="" selected disabled>
                  Select Course
                </option>
                <option value="">BAMS</option>
                {/* <option value="">xyz</option>
                <option value="">xyz</option> */}
              </select>
              <input
                type="number"
                name="entry.1377876186"
                className="form_details5_section1 form_section1_details"
                placeholder="NEET Score"
                required
              />
              <button
                className="reserve_seat_button"
                type="submit"
                disabled
                target="_blank"
                rel="noreferrer noopener"
              >
                <a href="">Reserve A seat for me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;