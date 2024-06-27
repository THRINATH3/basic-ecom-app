import React, { useContext } from 'react';
import './UserProfile.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Userlogincontext } from '../../context/Userlogincontext';
import { AiFillProduct } from "react-icons/ai";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";

function UserProfile() {
  let navigate=useNavigate();
  let { currentUser } = useContext(Userlogincontext);
  function onedit()
  {
      navigate('../edit-user')
  }
  return (
    <div>
      <div className='profile-data text-end'>
        <img src={currentUser.profile} width='55px' height='55px' className='rounded-circle' alt="" />
        <p className='fs-6'><button className="btn" onClick={onedit}><FaUserEdit className='text-warning fs-2'/></button>{currentUser.username}</p>
      </div>
      <ul className='nav fs-5 d-flex p-3 justify-content-around my-2'>
        <li className='nav-item'>
          <Link to='products' className='nav-link text-info phil link2'>
            <AiFillProduct className='text-warning me-1' />
            <strong>Product</strong>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='cart' className='nav-link text-info phil link2'>
            <PiShoppingCartFill className='text-warning me-1' />
            <strong>Cart</strong>
          </Link>
        </li>
      </ul>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
}

export default UserProfile;
