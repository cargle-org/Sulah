import React, {useEffect} from 'react'
import { HeroStyles } from '../atoms/styled-pages'
import { useColorMode} from '@chakra-ui/react'
import ArrowIcon from './ArrowIcon'
import { StyledButtonLinks, StyledButtons } from '../atoms/styled-buttons'
import redLogo from '../assets/svg/redLogo.svg'
import greenLogo from '../assets/svg/greenLogo.svg'
import Britain from '../assets/images/Britain.png'
import Canada from '../assets/images/Canada.png'
import Japan from '../assets/images/Japan.png'
import Nigeria from '../assets/images/Nigeria.png'
import USA from '../assets/images/USA.png'
import Euro from '../assets/images/Euro.png'
import arrows from '../assets/svg/arrows.svg'
import img1 from '../assets/images/loop1.png'
import img2 from '../assets/images/loop2.png'
import img3 from '../assets/images/loop3.png'
import img4 from '../assets/images/loop4.png'
import img5 from '../assets/images/loop5.png'
import img6 from '../assets/images/loop6.png'
import img7 from '../assets/images/loop7.png'
import img8 from '../assets/images/loop8.png'
import miniPhone from '../assets/svg/mini-phone.svg'
import miniClock from '../assets/svg/mini-clock.svg'
import miniLocation from '../assets/svg/mini-location.svg'

function Hero(props) {
    const {colorMode} = useColorMode()

    const imagesArray = [img1,img2,img3,img4,img5,img6,img7,img8] 

useEffect(() => {
    let index = 0;
    let img = document.getElementById('looping-img'); 

    function autoChange() {
        if(index < imagesArray.length){
          img.src = imagesArray[index]; 
          index++;  
        } else {
          index = 0; 
        }
        setTimeout(autoChange, 2000);  
      }

    autoChange();
}, [])
   


  return (
    <HeroStyles className={colorMode} style={props.style} >
       <div className="hero-wrapper section" id='home'>
       <div className="hero-left">
            <div className="hl-logo">
                {colorMode === 'light' ? <img src={redLogo} alt="logo" /> : <img src={greenLogo} alt="logo" /> }
               <h2 className="brand-name">SULAH BDC</h2>     
            </div>
            <h1 className="hl-heading">
            Trade with Sulah <br/> Bureau de Change 
            </h1>
            <div className="hl-flags">
                <div className="flag">
                <img src={Nigeria} alt="flag" />
                </div>
                <div className="flag">
                    <img src={Britain} alt="flag" />
                </div>
                <div className="flag">
                <img src={Euro} alt="flag" />
                </div>
                <div className="flag">
                    <img src={USA} alt="flag" />
                 </div>
                <div className="flag"> 
                <img src={Japan} alt="flag" />
                </div>
                
                <div className="flag">
                <img src={Canada} alt="flag" />
                </div>
                <div className={colorMode=== 'light' ? 'arrows' : 'arrows-dark'}>
                    <img src={arrows} alt="icon" />
                </div>
                </div>
            <div className="hl-buttons">
                <StyledButtons onClick={props.openTrade} className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
                <StyledButtonLinks  href='#rates' className={colorMode === 'light' ? 'default-light-btn' : 'default-dark-btn'}>HOW IT WORKS <ArrowIcon fill="black"/></StyledButtonLinks>
            </div>
        </div>
        <div className="hero-right">
            <img src={img1} alt="images" id='looping-img' />
        </div>
       </div>
       <div className="hero-card-wrapper" style={props.style}>
        <div className="hero-card">
            <div className="time">
                <img src={miniClock} alt="icon" />
                <a href='#locate'>24 hours</a>
            </div>
            <div className="contact">
            <img src={miniPhone} alt="icon" />
                <a href='tel:+2348150646739'>0815 064 6739, 0807 759 3664</a>
            </div>
            <div className="location">
            <img src={miniLocation} alt="icon" />
                <a href='#locate'><b>Head Office</b> 86, Allen Avenue, Ikeja, Lagos Nigeria</a>
            </div>
        </div>
       </div>
    </HeroStyles>
  )
}

export default Hero