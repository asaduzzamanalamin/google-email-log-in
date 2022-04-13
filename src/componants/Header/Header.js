import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div>
        <nav className='header'>
        <Link to='/'>Home</Link>
         <Link to='/login'>Log In</Link>
        </nav>
      </div>
   );
};

export default Header;