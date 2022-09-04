import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import '../index.css'

function Card({type, image, user_type, price, storage, no_of_users, sending_bandwidth}) {
  return (
    <div className={`w-full ${type === 'main' ? 'bg-gray-100' : ''} shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}>
                <img className="w-20 mx-auto mt-[-3] bg-transparent" src={image} alt=""></img>
                <h2 className="text-2xl font-bold text-center py-8">{user_type}</h2>
                <p className="text-center text-4xl font-bold">{price}</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">{storage}</p>
                    <p className="py-2 border-b mx-8">{no_of_users}</p>
                    <p className="py-2 border-b mx-8">{sending_bandwidth}</p>
                </div>
                    <button className={`${type=== "secondary" ? "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:bg-[#00a06d] active:scale-95" :
                    "bg-black w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-[#00df9a] active:scale-95"}`}>
                        Start Trial
                        </button>
            </div>
  )
}

export default Card