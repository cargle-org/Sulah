import { useState } from 'react'
import { LandingPage } from '../atoms/styled-pages'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Rates from '../components/Rates'
import Patners from '../components/Patners'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Locate from '../components/Locate'
import Contact from '../components/Contact'
import MobileHeader from '../components/MobileHeader'

function Landing() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuToggle = () => {
      setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <LandingPage>
    <Header onClick = {handleMenuToggle} />
    <MobileHeader show={openMenu} onClick={closeMenu}/>
     <Hero />
     <Rates />
     <About />
     <Patners />
     <Benefits />
     <Locate />
     <Contact />
    </LandingPage>
  
  )
}

export default Landing