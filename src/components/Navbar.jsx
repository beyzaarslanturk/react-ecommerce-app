import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export const Navbar = () => {
  return (
    <div className='navbar flex bg-green-700 justify-between items-center px-12 text-white w-[100%] h-[12vh]'>
      <h1 className='text-[35px] font-bold'>Beyza's Shop</h1>
      <div className='links h-[100%] flex gap-5 items-center'>
        <Link className='font-bold text-[20px] hover:bg-green-600 hover:px-1 py-1 rounded-xl' to="/"> Shop </Link>
        <Link className='hover:bg-green-600 hover:px-1 py-1 rounded-xl' to="/cart"> <ShoppingCart size={32} /> </Link>
      </div>
    </div>
  )
}
