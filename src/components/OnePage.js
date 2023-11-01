import React from 'react'
import './OnePage.css';
import SanskritiImage1 from '../assets/SanskritiImage1.webp'
import SanskritiImage2 from '../assets/SanskritiImage2.webp'
import SanskritiImage3 from '../assets/SanskritiImage3.webp'
import SanskritiImage4 from '../assets/SanskritiImage4.webp'
import SanskritiImage5 from '../assets/SanskritiImage5.webp'
import SanskritiImage6 from '../assets/SanskritiImage6.webp'
const OnePage = () => {

    return (
        <div className='gallery'>
            <div className='gallery-text'>
                <h2 className='h3'>Sneak Peak of Sanskriti College of Ayurvedic Medical Science <br></br>Medical College and Hospital Campus</h2>
            </div>
            <div class="container-text-center">
                <div className="col"><img src={SanskritiImage1}  className='gallery-img'/></div>
                <div className="col"><img src={SanskritiImage2}  className='gallery-img'/></div>
                <div className="col"><img src={SanskritiImage3} className='gallery-img' /></div>
                <div className="col"><img src={SanskritiImage4}  className='gallery-img'/></div>
                <div className="col"><img src={SanskritiImage5}  className='gallery-img'/></div>
                <div className="col"><img src={SanskritiImage6}  className='gallery-img1'/></div>
               
            
                
                </div>
                <a href='./SectionOne.js' className='onePage_Button'>Yes I want to pre book my seat for BAMS</a>
                <div>
                
                    {/* <h6 className='h4'>ONLY 17 SEATS LEFT!- <span className='spanyellow'> Without Donation</span></h6> */}
                </div>
            </div>
     
    )
}

export default OnePage