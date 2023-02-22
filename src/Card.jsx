import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 gap-5 w-64 h-[400px] p-5 relative rounded-xl shadow-lg hover:scale-105 transition duration-200 hover:shadow-xl'>
        <img src={meal.strMealThumb} width="200px" className="rounded-xl" alt="" />
        <h3>{meal.strMeal}</h3>
            <button className='text-white bg-blue-500 rounded-xl px-10 py-2 absolute bottom-3'>
                <Link to={`/detail/${meal.idMeal}`}>
                    <AiFillEye />
                </Link>
            </button>
    </div>
  )
}

export default Card