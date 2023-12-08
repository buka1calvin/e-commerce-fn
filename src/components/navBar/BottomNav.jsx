/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Link } from "react-router-dom";
import setLogout from '../../components/logout/logout';

function BottomNav () {
  const {
    showConfirmation,
    handleLogoutIconClick,
    renderLogoutConfirmation,
  } = setLogout();
  return (
    <div className='h-8 bg-[#F7F8FA] w-full flex items-center flex-row mt-1 lg:justify-evenly font-rubik xs:justify-between'>
      <div className='flex flex-row gap-10 mt-1  font-rubik text-secondary xs:text-[12px] xs:w-full xs:gap-4 pl-3'>
        <Link to= '/'>
          <p>HOME</p>
        </Link>
        <Link to="/about">
        <p>ABOUT</p>
        </Link>
        <Link to="/contactUs">
        <p>CONTACT US</p>
        </Link>
      </div>
      <p className='mt-2 xs:mt-1 font-rubik text-primary xs:text-[12px] xs:w-[50vw]'>+250 7881 2345</p>
      <img src="/logout-icon.png" alt="" className='ml-5 mr-3  hover:cursor-pointer ' onClick={handleLogoutIconClick}/>
      {showConfirmation && renderLogoutConfirmation()}
    </div>
  );
}

export default BottomNav;
