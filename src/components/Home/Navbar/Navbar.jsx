import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "../../../assets/images/logoo.png"
const Navbar = () => {
  return (
    <header className="has-background-white   ">
         <div className="container">
              <div className="nav">
                   <ul className="is-flex is-align-items-center nav-ul py-5">
                        <li><Link to="/">خانه</Link></li>
                        <li><Link to="/products">محصولات</Link></li>
                        <li><Link to="/about">درباره ما</Link></li>
                        <li><Link to="/contact">تماس با ما</Link></li>
                   </ul>
                     <div className="logo column p-0 m-0 is-one-first is-flex is-justify-content-end">
                         <h2 className="p-5" >TST Sport</h2>
                     </div>
              </div>
         </div>
    </header>
  )
}

export default Navbar