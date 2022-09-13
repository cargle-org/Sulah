import { ContactStyles, ContactWrapper } from "../atoms/styled-pages"
import { useColorMode} from '@chakra-ui/react'
import ArrowIcon from "./ArrowIcon"
import { StyledButtons } from "../atoms/styled-buttons"
import ContactForm from "./ContactForm"

function Contact() {
    const { colorMode } = useColorMode()
    return(
  <ContactWrapper  className="section" id="contact">
    <h1 >Contact Us ?</h1>
    <ContactStyles className={colorMode}>
        <div className="left">
            <h2>
            Do you have any enquiries, comments & questions ? 
            </h2>
            <StyledButtons className={colorMode}>
                Request a call <ArrowIcon />
            </StyledButtons>
            <div className="cl-btns">
            <StyledButtons className={colorMode}>
                Write Us <ArrowIcon />
            </StyledButtons>
            <StyledButtons className={colorMode}>
                Let's Chat on Whatsapp <ArrowIcon />
            </StyledButtons>
            </div>
        </div>
        <div className="right">
            <ContactForm />
        </div>
  </ContactStyles>
  </ContactWrapper>
    )
}

export default Contact