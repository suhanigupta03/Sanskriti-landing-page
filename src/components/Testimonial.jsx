import React, { useState } from 'react';
import testi_image1 from '../assets/testi_image1.jpg'
import testi_image2 from '../assets/testi_image2.JPG'
import testi_image3 from '../assets/testi_image3.JPG'
import Carousel from 'nuka-carousel'
import './testimonial.css'
// const CardSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
  
//     const handlePrevSlide = () => {
//       setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide - 1));
//     };
  
//     const handleNextSlide = () => {
//       setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//     };
// }
function Testimonial() {
  return (
    <div>
        <div className="testi">
            <p className='testi_p'>Don't just take our words <br></br>see what students are saying about us</p>
            <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 1 : 1}
            className=""
          >
            <div className='testimonial'>
                <div className='testimonail_image'>
                    <img src={testi_image1} alt='' className='testiImage'/>
                </div>
                <div className='testimonial_text'>
                    <p>My name is Uday I'm pursuing BAMS from Sanskriti University. My experience in this college has been very good. The environment here is very good and the faculty here is very helpful. The hostel facilities of this college are very good I haven't face any problem.</p>
                    <h3>Uday Pratap</h3>
                    <p className='testimonial_p'>BAMS</p>
                </div>
            </div>
            <div className='testimonial'>
                <div className='testimonail_image'>
                    <img src={testi_image2} alt='' className='testiImage'/>
                </div>
                <div className='testimonial_text'>
                    <p>I love studying at Sanskriti University. The academic standards are high and the professors are really good at teaching. The University is very supportive towards students and I got all the help that I needed as a student.</p>
                    <h3>Veshnav Arora</h3>
                    <p className='testimonial_p'>BAMS</p>
                </div>
            </div>
            <div className='testimonial'>
                <div className='testimonail_image'>
                    <img src={testi_image3} alt='' className='testiImage'/>
                </div>
                <div className='testimonial_text'>
                    <p>Sanskriti University is the most unique and popular University in Uttar Pradesh, in this University the atmosphere is very good. Talking about faculties, they are very cooperative and good in nature. The University is growing very fast day by day.</p>
                    <h3>Akanksha Tripathi</h3>
                    <p className='testimonial_p'>BAMS</p>
                </div>
            </div>
            </Carousel>
            <a href='SectionOne.js' className='testimonial_Button'>Yes I want to pre book my seat for BAMS</a>
        </div>
    </div>
  )
}

export default Testimonial;
