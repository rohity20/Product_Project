import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  return (
    <div >
         
         <div class='navbar'>
            <div class="logo">
             <h1><a href="/">Home-Page</a></h1> 
            </div>

         </div>

         <div>
                <ul className='navlinks'>
                    <li><button type="button" class="btn btn-info"><NavLink to="/add-Product">Add product</NavLink></button></li> 
                    <li><button type="button" class="btn btn-info"><NavLink to="/all-Products">All products</NavLink></button></li>
                    
                </ul>
            </div>
    </div>
  )
}

export default Navbar