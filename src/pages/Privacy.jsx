import { PrivacyContainer, PrivacyWrapper } from "../atoms/styled-pages"
import arrow from '../assets/svg/Arrow.svg'

function Privacy() {
  return (
    <PrivacyContainer>
       <PrivacyWrapper>
        <a href="http://sulahbdc.com/"> <img src={arrow} alt="" /> Go Back to the website</a>
        <h1>Privacy Policy/Terms & Conditions</h1>

        <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>
            Any personal information provided via this website will be held by <span>sulahbdc.com</span>. <br />

<span>sulahbdc.com</span> respects your privacy and does not sell, rent or loan any identifiable information regarding its website visitors to any third party. <br />

Any personal information you give to <span>sulahbdc.com</span> will be held with the utmost care and security in accordance with the guidelines set forth in the Nigeria’s Data Protection Act 2011 and will not be used in ways to which you have not consented.  <br />

<span>sulahbdc.com</span> will not collect any personal information about individuals, except when specifically and knowingly provided by such individuals. Examples of such information are: name, e-mail address, and phone number.  <br />

The personal information provided by you will only be used by <span>sulahbdc.com</span> to provide you with further news and information about the services and initiatives that are available from <span>sulahbdc.com</span>. 
            </p>
        </div>

        <div className="terms">
            <h2>Terms & Conditions</h2>
            <p>
            Please email us if you have any questions about the terms and conditions of use of <span>sulahbdc.com</span> which is owned by Sulahbdc: <a href='mailto:info@sulahbdc.com'>info@sulahbdc.com</a> <br />

<span>Sulahbdc.com</span> provides for FREE the live exchange rates between Naira and the major foreign currencies. <br />

The currency exchange rates are updated live seldomly throughout a day. <br />

We try to update the rates as fast and accurate as possible however we cannot be held liable for any errors. <br />

We do not advise you in any way regarding exchange rates for your currency transaction(s). <br />

The data at <span>Sulahbdc.com</span> should be used with caution; before trading or making a money transfer we advise you to speak with a staff. <br />

DO NOT rely on our exchange rates without reconfirmation. <br />

There will be a difference between the buy and sell exchange rate for every currency.<br />

The Bureau, will therefore not be liable for any complaint that may arise after transaction has been concluded.
            </p>
        </div>
       </PrivacyWrapper>
    </PrivacyContainer>
  )
}

export default Privacy