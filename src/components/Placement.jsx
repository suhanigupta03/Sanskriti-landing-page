import React from 'react'
import './placement.css'
import Carousel from 'nuka-carousel'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'
function Placement() {
  return (
    <div className='sliderSection'>
      <h2 className='sliderHeading'>Our College Facility</h2>
        <Carousel
            defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            dragging={true}
            cellAlign="center"
            slidesToShow={window.innerWidth > 768 ? 3 : 1}
            className=""
          >
            
            <div className='slider'><img src={slider1} alt='' className='slider_img'/>
            </div>
            <div className='slider'><img src={slider2} alt='' className='slider_img'/></div>
            <div className='slider'><img src={slider3} alt='' className='slider_img'/></div>
            <div className='slider'><img src={slider4} alt='' className='slider_img'/></div>
            <div className='slider'><img src={slider5} alt='' className='slider_img'/></div>
            </Carousel>
      
    </div>
  )
}

export default Placement
