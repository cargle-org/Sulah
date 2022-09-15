import { BenefitStyles } from '../atoms/styled-pages'
import { useColorMode } from '@chakra-ui/react'
import { StyledButtons } from '../atoms/styled-buttons'
import ArrowIcon from './ArrowIcon'
import Cash from '../assets/images/Cash.png'
import guy from '../assets/images/guy.png'
import lady from '../assets/images/lady.png'

function Benefits(props) {
    const { colorMode } = useColorMode()

  return (
<BenefitStyles style={props.style} className={colorMode}>
<h1>Why Choose Us?</h1>
<div className="benefit-card-group">
    <div className="benefit-card">
    <div className="img-wrapper">
        <img src={Cash} alt="card-images" />
        </div>
        <div className="card-content">
            <h2>Cash Purchase and Forex Sales</h2>
            <p>Call Sulah BDC for your cash purchase and sales of Forex to discuss and agree rates for immediate paymentat at our office anytime during the business hours.</p>
    </div>
            <StyledButtons  onClick={props.openTrade} className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
        </div>
    <div className="benefit-card">
        <div className="img-wrapper">
        <img src={guy} alt="card-images" />
        </div>
        <div className="card-content">
            <h2>Request for Personal &
            Business Travel allowance</h2>
            <p>Whether you’re travelling abroad as an individual or corporate entity, you can purchase foreign exchange for a business trip or holidays.</p>
        </div>
            <StyledButtons onClick={props.openTrade} className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
    </div>
    <div className="benefit-card">
    <div className="img-wrapper">
        <img src={lady} alt="card-images" />
        </div>
        <div className="card-content">
            <h2>Make Foreign Payments
            with ease</h2>
            <p>At Sulah Berue de Cgange, we help you effectively manage and process your international payments whenever the need arises</p>
        </div>
        <StyledButtons onClick={props.openTrade} className={colorMode === 'light' ? 'light-btn' : 'dark-btn'}>TRADE NOW <ArrowIcon fill='white' /> </StyledButtons>
    </div>

</div>
</BenefitStyles>
  )
}

export default Benefits