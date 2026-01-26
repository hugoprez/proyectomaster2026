import React from 'react';
import Logo from '../assets/pizzaLogo.jpg';

function Navbar() {
  return (
    <div className="bg-blue-600 p-12">
      <div className=''>
        <img className='' src={Logo} loading='lazy'/>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navbar
