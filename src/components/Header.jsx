import { Link } from "react-router-dom"
import './Header.css'

import React from 'react'

const Header = () => {
  return (
    <div className="header">
    <Link to="/" className="headerLink">
    <h2>LAUNCH SPACE - 2023</h2>
    </Link>
    </div>
  )
}

export default Header