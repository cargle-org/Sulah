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
import Trade from '../components/Trade'

function Landing() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openTrade, setOpenTrade] = useState(false)

  const handleMenuToggle = () => {
      setOpenMenu(!openMenu)
  }

  const handleOpenTrade = () => {
      setOpenTrade(true)
      setOpenMenu(false)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }
  const closeTrade = () => {
    setOpenTrade(false)
  }

  return (
    <LandingPage >
    <Header onClick={handleMenuToggle} openTrade={handleOpenTrade} className={openTrade ? 'opaque' : ''}/>
    <MobileHeader show={openMenu} onClick={closeMenu}  openTrade={handleOpenTrade}/>
    <Trade onClick={closeTrade} show={openTrade}/>
     <Hero openTrade={handleOpenTrade} style={openTrade ? {opacity: '0.3'} : {opacity: '1'} } />
     <Rates style={openTrade ? {opacity: '0.3'} : {opacity: '1'} } />
     <About  openTrade={handleOpenTrade}style={openTrade ? {opacity: '0.3'} : {opacity: '1'} }/>
     <Patners  style={openTrade ? {opacity: '0.3'} : {opacity: '1'} }/>
     <Benefits  openTrade={handleOpenTrade} style={openTrade ? {opacity: '0.3'} : {opacity: '1'} } />
     <Locate style={openTrade ? {opacity: '0.3'} : {opacity: '1'} } />
     <Contact  style={openTrade ? {opacity: '0.3'} : {opacity: '1'} }/>
    </LandingPage>
  
  )
}

export default Landing