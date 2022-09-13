import { AboutStyles } from '../atoms/styled-pages'
import { useColorMode } from '@chakra-ui/react'
import { StyledButtons } from '../atoms/styled-buttons'
import ArrowIcon from './ArrowIcon'

function About() {

    const { colorMode } = useColorMode()
  return (
   <AboutStyles className={colorMode} id='about' >
    <h1 className='section' id='about'>About us</h1>
    <div className="about-content">
        <h3 className="about-content-heading">
        Sulah Bureau De Change Ltd is <br />
        a registered company with RC number 567667
        </h3>
        <p className="about-content-info">
        It is licensed by the Central Bank of Nigeria to provide foreign exchange services.
        </p>
        <br />
        <p className="about-content-sub-info">
        The company operates out of its head office at  
        86, Allen avenue, Ikeja, Lagos where it provides foreign exchange services to  both corporates and individuals.
        </p>
        <div className="about-button-group">
        <StyledButtons className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
         <StyledButtons  className={colorMode === 'light' ? 'default-light-btn' : 'default-dark-btn'}>HOW IT WORKS <ArrowIcon fill="black" /></StyledButtons>
        </div>
    </div>
   </AboutStyles>
  )
}

export default About