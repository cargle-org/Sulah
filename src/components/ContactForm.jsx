import { ContactFormWrapper } from "../atoms/styled-pages"
import user from '../assets/images/User.png'
import emailIcon from '../assets/svg/Email.svg'
import MsgIcon from '../assets/svg/Message.svg'
import { StyledButtons } from "../atoms/styled-buttons"

function ContactForm() {
  return (
    <ContactFormWrapper>
        <div className="input-group">
            <img src={user} alt="icon" />
            <input type="text"
            name="name"
            id="name"
            placeholder="Your Name" />
        </div>
        <div className="input-group">
            <img src={emailIcon} alt="icon" />
            <input type="text"
            name="email"
            id="email"
            placeholder="Email" 
            required/>
        </div>
        <div className="input-group">
            <img src={MsgIcon} alt="icon" />
            <textarea type="text"
            name="message"
            id="message"
            placeholder="Message" />
        </div>
        <StyledButtons type="submit">
            Leave a message
        </StyledButtons>
    </ContactFormWrapper>
  )
}

export default ContactForm