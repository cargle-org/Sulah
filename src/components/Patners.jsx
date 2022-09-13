import { PartnerStyles } from '../atoms/styled-pages'
import accessLogo from '../assets/images/access-bank.png'
import gtLogo from '../assets/images/gt-bank.png'
import ubaLogo from '../assets/images/uba.png'
import unionLogo from '../assets/images/union-bank.png'
import firstLogo from '../assets/images/first-bank.png'
import stanbicLogo from '../assets/images/stanbic-bank.png'


function Patners() {
  return (
   <PartnerStyles>
   <div className="partners-wrapper">
   <h1>Our Partners</h1>
    <div className="partners">
        <img src={gtLogo} alt="bank-logo" />
        <img src={accessLogo} alt="bank-logo" />
        <img src={ubaLogo} alt="bank-logo" />
        <img src={unionLogo} alt="bank-logo" />
        <img src={firstLogo} alt="bank-logo" />
        <img src={stanbicLogo} alt="bank-logo" />
    </div>
   </div>
   </PartnerStyles>
  )
}

export default Patners