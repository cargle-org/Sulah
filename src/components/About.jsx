import { AboutStyles } from '../atoms/styled-pages'
import { useColorMode } from '@chakra-ui/react'
import { StyledButtons, StyledButtonLinks } from '../atoms/styled-buttons'
import ArrowIcon from './ArrowIcon'

function About(props) {

    const { colorMode } = useColorMode()
  return (
   <AboutStyles className={colorMode} id='about' style={props.style} >
    <h1 className='section' id='about'>About us</h1>
    <div className="about-content">
        <p className="about-content-info">
        Sulah Bureau De Change Ltd is 
        a registered company with RC number 567667.
        It is licensed by the Central Bank of Nigeria to provide foreign exchange services.
        The company operates out of its head office at  
        86, Allen avenue, Ikeja, Lagos where it provides foreign exchange services to  both corporates and individuals.<br/> Check our privacy and policy page to learn more about our policies, terms and conditions. <a href='/privacy-policy' target='_blank'> Learn more</a>
        </p>
        <div className="about-button-group">
        <StyledButtons onClick={props.openTrade} className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
         <StyledButtonLinks href='#rates' className={colorMode === 'light' ? 'default-light-btn' : 'default-dark-btn'}>HOW IT WORKS <ArrowIcon fill="black" /></StyledButtonLinks>
        </div>
    </div>
   </AboutStyles>
  )
}

export default About