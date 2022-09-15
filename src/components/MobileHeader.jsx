
import ArrowIcon from './ArrowIcon'
import {MobileHeaderWrapper} from '../atoms/styled-header'
import {useColorMode, Button} from '@chakra-ui/react'
import { StyledButtons } from '../atoms/styled-buttons'

function MobileHeader(props) {
    const {colorMode} = useColorMode()
      const openMenu = props.show;
  return (
    <MobileHeaderWrapper className={openMenu ? 'open' : ''}>
       <div className="header-links">
                <div className="nav-links">
                <a href='#home' className='navLink home' onClick={props.onClick}> Home</a>
                    <a href='#about' className='navLink about' onClick={props.onClick}>About us</a>
                    <a href='#locate' className='navLink locate' onClick={props.onClick}>Locate us</a>
                    <a href='#contact' className='navLink contact' onClick={props.onClick}>Contact us</a>
                </div>
                <div className="nav-button">
                    <StyledButtons onClick={props.openTrade}  className={colorMode}>TRADE NOW <ArrowIcon fill='white' className='arrow-icon' /> </StyledButtons>
                    <Button onClick={props.onClick} className='default-btn'>CALCULATE CURRENCY <ArrowIcon fill='black' className='arrow-icon' /></Button>
                </div>
            </div>
    </MobileHeaderWrapper>
  )
}

export default MobileHeader