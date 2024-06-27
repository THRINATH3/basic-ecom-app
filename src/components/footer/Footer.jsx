import React from 'react'
import './Footer.css'
import { PiAddressBookFill } from "react-icons/pi";

function Footer() {
  return (
    <div className='d-flex flex-wrap p-3 mx-auto justify-content-around bg-dark text-white phil'>
        <div>
            <p><PiAddressBookFill className='text-warning t' /></p>
            <p>PVPSIT</p>
            <p>Vijayawada</p>
        </div>
        <div>
            <p>pvp@gmail.com</p>
            <p>9999999999</p>
        </div>
    </div>
  )
}

export default Footer