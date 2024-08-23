import React from 'react'
import '../App.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar-container'>

    <div className='navbar-brand'>LuxeLoom</div>

    <div className='navbar-center'>
        <ul className='navbar-links'>

           <li>
            <Link to={"/firstpage"} >Home</Link>
           </li>

          <li>
            <a href="#mens">Men</a>
            <div className="dropdown-content">
                <a href='/mens'>Shop All</a>
                <a href=''>T-shirts</a>
                <a href=''>Polos</a>
                <a href=''>Tanks Tops</a>
                <a href=''>Shorts</a>
                <a href=''>Pants</a>
                <a href=''>Underwear</a>

            </div>
          </li>
          <li>
            <a href="#women">Women</a>
            <div className="dropdown-content">
                <a href='/womens'>Shop All</a>
                <a href=''>T-shirts</a>
                <a href=''>Crop Tops</a>
                <a href=''>Skirts</a>
                <a href=''>Shorts</a>
                <a href=''>Frocks</a>
                <a href=''>Underwear</a>

            </div>
            
          </li>
          <li>
            <a href="#kids">Kids Wear</a>
            <div className="dropdown-content">
                <a href='/kids'>Shop All</a>
                <a href=''>T-shirts</a>
                <a href=''>Crop Tops</a>
                <a href=''>Skirts</a>
                <a href=''>Shorts</a>
                <a href=''>Frocks</a>
                <a href=''>Underwear</a>

            </div>
            
          </li>
          <li><a href="#gift-cards">Gift Cards</a></li>
        </ul>
      </div>

      <div className='navbar-icons'>
        <a href="#search"><FaSearch /></a>
        <Link to={"/login"}><FaUser /></Link>
        <a href="#cart"><FaShoppingCart /></a>
      </div>

  </div>
  )
}
