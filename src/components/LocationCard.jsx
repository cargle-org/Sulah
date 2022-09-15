import { useState } from "react"
import { LocationCardStyles } from "../atoms/styled-pages"
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
    <img src={props.src} alt="img"  />
        <h2>{props.title}</h2>
        <div className="location card-info">
        <img src={pin} alt="icon" />
        <p>{props.address}</p>
        </div>
        <div className="contact card-info">
        <img src={miniPhone} alt="icon" />
        <p>{props.phone}</p>
        </div>
        <div className="open-info">
        <div className="time card-info">
        <img src={clock} alt="icon" />
        <p>{props.hours}</p>
        </div>
        <div className="time card-info">
        <img src={clock} alt="icon" />
        <p>{props.time}</p>
        </div>
        <div className="open card-info">
        <img src={openTime} alt="icon" />
        <p>{props.days}</p>
        </div>
        </div>
        </> : 
        <>
        <h2>{props.title}</h2>
        <div className="location card-info">
        <img src={pin} alt="icon" />
        <p>{props.address}</p>
        </div>
        </>}
    </LocationCardStyles>
  )
}

export default LocationCard