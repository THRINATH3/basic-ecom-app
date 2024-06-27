import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiArchiveRegister } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { Userlogincontext } from '../../context/Userlogincontext';
import { useContext } from 'react';

function Header() {
    let { logoutUser, userLoginStatus,currentUser } = useContext(Userlogincontext);
  return (
    <div className='d-flex flex-wrap justify-content-around header phil'>
       <div><h1 className='text-warning headtop'>MY SHOPS</h1></div>
       <div>
        <ul className='nav fs-6 p-3 justify-content-around'>
            <li className='nav-item'>
                <Link to='' className='nav-link text-white link  optionssize'>
                <IoHome className='text-warning me-1'/>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='about' className='nav-link text-white link optionssize '><FcAbout className='me-1' />About Us</Link>
            </li>
            <li className='nav-item'>
                <Link to='register' className='nav-link text-white link  optionssize'><GiArchiveRegister className='text-warning me-1'/>Register</Link>
            </li>
            {userLoginStatus == false?(
            <li className='nav-item'>
                <Link to='login' className='nav-link text-white link  optionssize'><IoMdLogIn className='text-warning me-1'/>Login</Link>
            </li>
            ):(
                <li className="nav-item">
            <Link to="login" className="nav-link text-white link  optionssize" onClick={logoutUser}>
            <BiLogOutCircle className='text-warning me-1' />
              Logout
            </Link>
          </li>
            )}
            {userLoginStatus == false?(
            <li></li>
            ):(
                <li className="nav-item">
           <img src={currentUser.profile} width='50px' height='50px' className='rounded-pill  mx-5 ' alt="" />
          </li>
            )}
        </ul>
        </div>
    </div>
  )
}
export default Header