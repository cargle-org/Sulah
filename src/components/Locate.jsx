import { useState } from 'react'
import { LocationStyles } from '../atoms/styled-pages'
import { useColorMode } from '@chakra-ui/react'
import map from '../assets/images/map.png'
import searchIcon from '../assets/svg/search-icon.svg'
import { StyledButtons } from '../atoms/styled-buttons'
import ArrowIcon from './ArrowIcon'
import Arrow from '../assets/svg/Arrow.svg'
import LocationCard from './LocationCard'

function Locate(props) {
    const { colorMode } = useColorMode()
    const [viewLocations, setViewLocations] = useState(false);

    const handleLocationView = () => {
        setViewLocations(true)
    }
    const handleLocationExit = () => {
        setViewLocations(false)
    }
  return (
    <LocationStyles>
        <div className="location-container section "  id='locate'>
        <h1  className={colorMode}>Locate us</h1>
        <div className="location-wrapper">
            <div className="location-centers-card">
                <div className="search-input">
                    <input type="text" 
                    name='search'
                    id='search'
                    placeholder='Find a location near you'/>
                    <img className={colorMode} src={searchIcon} alt="icon" />
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
                    <StyledButtons className={colorMode}>
                        REQUEST A CALL <ArrowIcon />
                    </StyledButtons>
                    <span>or</span>
                    <StyledButtons  className={colorMode === 'light' ? 'default-light' : 'default-dark'}>
                        WRITE US <ArrowIcon />
                    </StyledButtons>
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
                    <LocationCard />
                    <LocationCard />
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