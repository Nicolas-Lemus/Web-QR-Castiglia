import React from 'react'
import "../Header/Header.css"
import Logo from "../../images/iconos/mi-favicon(2).webp"

const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <img src={Logo} alt="Logo-Castiglia"/>
        </nav>
      </header>
    </>
  )
}

export default Header
