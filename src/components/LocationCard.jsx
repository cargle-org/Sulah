import { useState } from "react"
import { LocationCardStyles } from "../atoms/styled-pages"
import cardImg from '../assets/images/LocationCardImg.png'
import pin from '../assets/svg/mini-location.svg'
import miniPhone from '../assets/svg/mini-phone.svg'
import clock from '../assets/svg/mini-clock.svg'
import openTime from '../assets/svg/open-time.svg'

function LocationCard(props) {
    const [openLocationCard, setOpenLocationCard] = useState(false)

    const handleCardOpening = () =>{
        setOpenLocationCard(!openLocationCard)
    }

  return (
    <LocationCardStyles onClick={handleCardOpening}>
   {openLocationCard ?  <>
    <img src={cardImg} alt="img"  />
        <h2>Head office</h2>
        <div className="location card-info">
        <img src={pin} alt="icon" />
        <p>86, Allen Avenue, Ikeja, Lagos Nigeria</p>
        </div>
        <div className="contact card-info">
        <img src={miniPhone} alt="icon" />
        <p>0815 064 6739, 0807 759 3664</p>
        </div>
        <div className="open-info">
        <div className="time card-info">
        <img src={clock} alt="icon" />
        <p>24 Hrs</p>
        </div>
        <div className="open card-info">
        <img src={openTime} alt="icon" />
        <p>Monday to friday</p>
        </div>
        </div>
        </> : 
        <>
        <h2>Head office</h2>
        <div className="location card-info">
        <img src={pin} alt="icon" />
        <p>86, Allen Avenue, Ikeja, Lagos Nigeria</p>
        </div>
        </>}
    </LocationCardStyles>
  )
}

export default LocationCard