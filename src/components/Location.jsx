import React from 'react'
import './location.css'
import Counsellor from '../assets/counsellor (2).jpeg'
function Location() {
  return (
    <div>
      <h1>Make a Visit Now!</h1>
      <h4>Start Your Journey</h4>
    <div className='location'>
      <div className='map_location'>
      <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28255.97487511958!2d77.46876239776613!3d27.71738324392749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973150cac0d9675%3A0x25eee1f9ef0680b4!2z4KSG4KSv4KWB4KSw4KWN4KS14KWH4KSm4KS_4KSVIOCkruClh-CkoeCkv-CkleCksiDgpJXgpYngpLLgpYfgpJwgJiDgpLngpYngpLjgpY3gpKrgpL_gpJ_gpLIt4KS44KSC4KS44KWN4KSV4KWD4KSk4KS_IOCkr-ClgeCkqOCkv-CkteCksOCljeCkuOCkv-Ckn-ClgA!5e0!3m2!1shi!2sin!4v1689149083934!5m2!1shi!2sin"
              } className='map'/>
      </div>
      <div className='contact'>
             <img src={Counsellor} alt='' className='counsellor_contact'/>
      </div>
    </div>
      
    </div>
  )
}

export default Location
