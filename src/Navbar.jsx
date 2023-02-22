import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/">
      <div className='flex items-center gap-2 my-8'>
        <RiRestaurant2Fill className='text-3xl text-pink-300' />
        <p className='text-xl text-gray-300 font-semibold'>Foodie</p>
      </div>
    </Link>
  )
}

export default Navbar