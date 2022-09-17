import { StyledButtons } from "../atoms/styled-buttons"
import { WarningContainer, WarningWrapper } from "../atoms/styled-pages"
import { useColorMode } from '@chakra-ui/react'
import { useState } from "react";


function Warning(props) {
    const {colorMode} = useColorMode();
    const [show, setshow] = useState(true)
  return (
   <WarningContainer style={props.style} className={show ? colorMode : 'hide'}>
    <WarningWrapper>
    <div className="left">
    <h2> <span>Warning!</span> - Official Sulah Bureau de Change ltd website</h2>
    <p>Do not share your personal information with anyone. <a href="/privacy-policy" target='_blank'> Learn more</a></p>
    </div>
    <div className="right">
        <StyledButtons className={colorMode} onClick={(() => setshow(false))}>
            OK!
        </StyledButtons>
    </div>
    </WarningWrapper>
   </WarningContainer>
  )
}

export default Warning