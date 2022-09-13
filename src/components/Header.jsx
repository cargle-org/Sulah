
import redIcon from '../assets/svg/red-mode.svg'
import greenIcon from '../assets/svg/green-mode.svg'
import ArrowIcon from './ArrowIcon'
import { StyledHeader } from '../atoms/styled-header'
import {useColorMode, Button} from '@chakra-ui/react'
import { StyledButtons } from '../atoms/styled-buttons'
import { HiMenuAlt1 } from 'react-icons/hi'


function Header(props) {
    const {colorMode, toggleColorMode} = useColorMode()

const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".navLink");

window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

  return (
   <StyledHeader>
        <div className="header-wrapper" >
            <div className="mode-toggler"  onClick={toggleColorMode} >
                {colorMode === 'light' ? <img src={redIcon} alt="light-mode-toggler" /> : <img src={greenIcon} alt="dark-mode-toggler" /> }
            </div>
            <div className="header-links">
                <div className="nav-links">
                    <a href='#home' className='navLink home'>Home</a>
                    <a href='#about' className='navLink about'>About us</a>
                    <a href='#locate' className='navLink locate'>Locate us</a>
                    <a href='#contact' className='navLink contact'>Contact us</a>
                </div>
                <div className="nav-buttons">
                    <StyledButtons className={colorMode}>TRADE NOW <ArrowIcon fill='white' className='arrow-icon' /> </StyledButtons>
                    <Button className='default-btn'>CALCULATE CURRENCY <ArrowIcon fill='black' className='arrow-icon' /></Button>
                </div>
            </div>
            <HiMenuAlt1 className='menu-toggle' onClick={props.onClick}/>
        </div>
   </StyledHeader>
  )
}

export default Header