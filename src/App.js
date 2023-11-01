import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import Placement from './components/Placement';
import Location from './components/Location'
import SanskritiLogo from "./assets/SanskritiLogo.png";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import OnePage from './components/OnePage';
import Department from './components/Department'
import {FaWhatsappSquare} from 'react-icons/fa'
import {BiSolidPhoneCall} from 'react-icons/bi'
function App() {
  return (
    <>
    <div className="yellowspace_sansk">
        <p>
          Important : Only <span className="fifteen_sansk">Few</span> Seats Left!
        </p> 
      </div>

      <div className="bluespace_sansk">
        <div className="leftside_blue">
          <img src={SanskritiLogo} className="logo_blue_sansk" />
          
        </div>
        <div className="address_sansk">Sanskriti University Mathura</div>
        <div className='rightside_blue' ><BiSolidPhoneCall className="rightside_blue_icon"/><a href="tel:+917307536494" className='number'>+917307536494 </a></div>
      </div> 
    <div className="App">
      
      
      <SectionOne></SectionOne>
       <SectionTwo></SectionTwo>
      <SectionFive></SectionFive>
      <Department/>
      <SectionSix></SectionSix>
      
      <SectionThree></SectionThree>
      <Testimonial/>
      
      <Placement/>
      <OnePage/>
      <Location/>
      <SectionFour></SectionFour>
      <a
        className="whatsapp_sansk"
        href="https://api.whatsapp.com/send?phone=7307536494&text=Hello."
        target="_blank"
      >
        <FaWhatsappSquare className='whatsapp_sansk_icon'/>
      </a>
      
      
    </div>
    </>
  );
} 

export default App;
