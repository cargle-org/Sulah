import React, { useState} from 'react'
import { RatesStyles } from '../atoms/styled-pages'
import Britain from '../assets/images/Britain.png'
import Canada from '../assets/images/Canada.png'
import Japan from '../assets/images/Japan.png'
import Nigeria from '../assets/images/Nigeria.png'
import USA from '../assets/images/USA.png'
import Euro from '../assets/images/Euro.png'
import miniClock from '../assets/svg/mini-clock.svg'

function Rates() {
    const [brandRates, setBrandRates] = useState(true);

    const handleRates = () =>{
        setBrandRates(true)
    }
    const handleCBNRates = () =>{
        setBrandRates(false)
    }

  return (
    <RatesStyles>
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
                <table>
                <thead>
                    <tr>
                        <th className='currency'>Currency</th>
                        <th> We Buy</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='currency-row'>
                        <div className="flag">
                <img src={USA} alt="flag" />
             </div>
                            <p>US DOLLAR <b>USD</b></p>
                        </td>
                        <td>423</td>
                        <td>427</td>
                    </tr>
                    <tr>
                        <td className='currency-row'>
                        <div className="flag">
                <img src={Britain} alt="flag" />
            </div>
                            <p>BRITISH POUNDS <b>GBP</b></p>
                        </td>
                        <td>823</td>
                        <td>832</td>
                    </tr>
                    <tr>
                        <td className='currency-row'>
                            <div className="flag">
            <img src={Euro} alt="flag" />
            </div>
                            <p>EURO <b>EUR</b></p>
                        </td>
                        <td>674</td>
                        <td>685</td>
                    </tr>
                    <tr>
                        <td className='currency-row'>
                        <div className="flag"> 
            <img src={Japan} alt="flag" />
            </div>
                            <p>JAPANESE YEN <b>JPY</b></p>
                        </td>
                        <td>3</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td className='currency-row'>
                        <div className="flag">
            <img src={Canada} alt="flag" />
            </div>
                            <p>CANADIAN DOLLAR <b>CAD</b></p>
                        </td>
                        <td>587</td>
                        <td>602</td>
                    </tr>
                    <tr>
                        <td className='currency-row'>
                        <div className="flag">
            <img src={Nigeria} alt="flag" />
            </div>
                            <p>NAIRA <b>NGN</b></p>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table> :
            <div className="cbn-rates">
                <h1>Coming Soon...</h1>
            </div>
            }
            </div>
            <div className="updated-time">
                <img src={miniClock} alt="icon" />
                <h4>This Table was Last updated by <b>3pm</b></h4>
            </div>
        </div>

    </RatesStyles>
  )
}

export default Rates