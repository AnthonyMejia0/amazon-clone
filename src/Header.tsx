import React from 'react';
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className='h-[60px] bg-[#131921] flex items-center justify-evenly sticky top-0 z-[100]'>
      <img className='w-[100px] object-contain my-0 mx-[20px]' src="https://i.imgur.com/N1MXViG.png" alt="Amazon logo" />
      <input className='flex-1 p-1' type="text" />
      <button className='bg-[#febd69] p-[5px]'>
        <SearchIcon className='h-[22px] w-[22px]' />
      </button>
      <div className='flex items-center justify-center'>
        <div className='header-option'>
          <span className='first-line'>Hello Guest</span>
          <span className='second-line'>Sign In</span>
        </div>
        <div className='header-option'>
          <span className='first-line'>Returns</span>
          <span className='second-line'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='first-line'>Your</span>
          <span className='second-line'>Prime</span>
        </div>
        <div className='flex items-center text-white'>
          <ShoppingCartIcon className='h-5 w-5' />
          <span className='second-line mx-[10px]'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header