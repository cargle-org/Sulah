import React, { useState,  useContext} from 'react'
import { RatesStyles } from '../atoms/styled-pages'
// import Britain from '../assets/images/Britain.png'
// import Canada from '../assets/images/Canada.png'
// import Japan from '../assets/images/Japan.png'
// import Nigeria from '../assets/images/Nigeria.png'
// import USA from '../assets/images/USA.png'
// import Euro from '../assets/images/Euro.png'
import miniClock from '../assets/svg/mini-clock.svg'
import RatesContext from '../context/RatesProvider'
import RatesRow from './RatesRow'
import Loading from './Loading'
import { StyledButtonLinks } from '../atoms/styled-buttons'
import { useColorMode} from '@chakra-ui/react'

function Rates(props) {
    const {colorMode} = useColorMode()
    const [brandRates, setBrandRates] = useState(true);
    const { rates, loading, updatedAt} = useContext(RatesContext);
    const handleRates = () =>{
        setBrandRates(true)
    }
    const handleCBNRates = () =>{
        setBrandRates(false)
    }

    
  return (
    <RatesStyles style={props.style}>
        <div className="rates-wrapper">
            <h2>
                Rates Table
            </h2>
            <div className="rates-card">
                <div className="card-heading">
                    <h2 onClick={handleRates} className={brandRates ? 'brand-rates' : ''}>
                        Sullah BDC Rates
                    </h2>
                    <h2 onClick={handleCBNRates} className={!brandRates ? 'brand-rates' : ''}>
                        CBN Rates
                    </h2>
                </div>
               {brandRates ?
                    <>
                    {loading ? <Loading /> :
                <table>
                <thead>
                    <tr>
                        <th className='currency'>Currency</th>
                        <th> We Buy</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                   {rates.map((rate, index) => 
                   <RatesRow key={index} name={rate.name.toUpperCase()} img={rate.image} abbreviation={rate.abbreviation}  buy={rate.buy_rate} sell={rate.sell_rate} />)}
                </tbody>
            </table> }
                </> :
            <div className="cbn-rates">
                <h1>Check out today's CBN Rates </h1>
                <StyledButtonLinks className={colorMode} href='https://www.cbn.gov.ng/rates/exchratebycurrency.asp' target='_blank'> here</StyledButtonLinks>
            </div>
            }
            </div>
            <div className="updated-time">
                <img src={miniClock} alt="icon" />
                <h4>This Table was Last updated at <b>{updatedAt}</b></h4>
            </div>
        </div>

    </RatesStyles>
  )
}

export default Rates