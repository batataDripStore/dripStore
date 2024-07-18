import React from 'react'
import InsideHeader from '../InsideHeader/InsideHeader'
import Nav from '../Nav/Nav'
import './header.css'


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <InsideHeader />
        <Nav />
      </div>
    </header>
  )
}

export default Header;