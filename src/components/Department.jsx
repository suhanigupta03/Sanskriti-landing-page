import React from 'react'
import './department.css'
import Carousel from 'nuka-carousel'
import department1 from '../assets/departments1.jpg'
import department2 from '../assets/departments2.jpg'
import department3 from '../assets/departments3.jpg'
function Department() {
  return (
    <div className='departmentSection'>
        <h2 className='departmentHeading'>Our Department</h2>
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
            
            <div className='department'><img src={department1} alt='' className='department_img'/></div>
            <div className='department'><img src={department2} alt='' className='department_img'/></div>
            <div className='department'><img src={department3} alt='' className='department_img'/></div>
            
            </Carousel>
    </div>
  )
}

export default Department
