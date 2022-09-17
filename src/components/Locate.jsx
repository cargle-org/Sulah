import { useState } from 'react'
import { LocationStyles } from '../atoms/styled-pages'
import { useColorMode } from '@chakra-ui/react'
import map from '../assets/images/map.png'
import cardImg from '../assets/images/LocationCardImg.png'
import searchIcon from '../assets/svg/search-icon.svg'
import { StyledButtons, StyledButtonLinks } from '../atoms/styled-buttons'
import ArrowIcon from './ArrowIcon'
import Arrow from '../assets/svg/Arrow.svg'
import LocationCard from './LocationCard'
import { locations} from '../utils/Location.js'
// import axios from 'axios'

function Locate(props) {
    const { colorMode } = useColorMode()
    const [viewLocations, setViewLocations] = useState(false);
    const [searchedLocations , setSearchedLocations] = useState(locations)
    const [searchValue, setSearchValue] = useState('')
    const handleLocationView = () => {
        setViewLocations(true)
    }
    const handleLocationExit = () => {
        setViewLocations(false)
        setSearchedLocations(locations)
    }
    const location = locations.map((location) => {
        return location
    })

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    // useEffect(() => {
    //     axios.get("https://sulah-api.herokuapp.com/api/getLocations")
    //     .then(function(response){
    //         console.log(response)
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }, [])

    const handleClick = () => {
       let arr = [];
       for (let i = 0; i < location.length; i++){
         location[i].address.toLowerCase().includes(searchValue.toLowerCase()) && 
         arr.push(location[i])
      }
      setSearchedLocations(arr)
      setViewLocations(true)
      setSearchValue('')
      
    }

  return (
    <LocationStyles style={props.style}>
        <div className="location-container section "  id='locate'>
        <h1  className={colorMode}>Locate us</h1>
        <div className="location-wrapper">
            <div className="location-centers-card">
                <div className="search-input">
                    <input
                    onChange={handleSearchChange}
                    value={searchValue}
                     type="text" 
                    name='search'
                    id='search'
                    placeholder='Find a location near you'/>
                    <img onClick={handleClick} className={colorMode} src={searchIcon} alt="icon" />
                </div>
                {!viewLocations ?
                <div className="first">
               <div className="find-location-text">
               <h2>Looking for a Sullah BDC office ?</h2>
                <p>Check out our locations and find the one closest to you</p>
                <StyledButtons className={colorMode} onClick={handleLocationView}>
                    FIND NOW <ArrowIcon />
                </StyledButtons>
               </div>
               <div className="reach-out">
                <p>You can also</p>
                <div className="reach-btns">
                    <StyledButtonLinks className={colorMode} href='tel:+2348150646739'>
                        CALL US<ArrowIcon />
                    </StyledButtonLinks>
                    <span>or</span>
                    <StyledButtonLinks href='#contact' className={colorMode === 'light' ? 'default-light' : 'default-dark'}>
                        WRITE US <ArrowIcon />
                    </StyledButtonLinks>
                </div>
               </div>
                </div>
              : 
              <div className="second">
                <div className="back" onClick={handleLocationExit}>
                    <img src={Arrow} alt="icon" />
                    <p>Go Back</p>
                </div>
                <div className="location-cards-wrapper">
                    <div className="location-cards">
                        {searchedLocations.length === 0 ? 
                        <>
                        <p className='msg'> Oops! We do not have stores around your location yet.</p>
                        <div className="head-location">
                            <p>You can contact our head office.</p>
                            <LocationCard src={cardImg} title='Head Office' address='6, Allen Avenue, Ikeja, Lagos Nigeria' phone = '0815 064 6739, 0807 759 3664'  hours= '9 Hrs' days= 'Monday to Saturday'  time='8am to 5pm'/>
                        </div></>
                        : searchedLocations.map((location, index) =>
                        <LocationCard  key={index} src={location.src} title={location.title} address={location.address} phone={location.phone} hours={location.hours} days={location.days} time={location.time} />)}
                    </div>
                    
                </div>
                </div>
                }

            </div>
               <img className="map-wrapper" src={map} alt="maps" />
        </div>
        </div>
    </LocationStyles>
  )
}

export default Locate