import React from 'react'
import Woman from '../assests/images/woman.jpg'
import { FiMail, FiPhone } from 'react-icons/fi'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SingleUser = () => {
    return (
        <div className='bg-white p-4 shadow-2xl flex flex-col sm:flex-row h-auto sm:h-[150px] rounded-xl'>
            <div className="left rounded-full  w-full sm:w-[20%] flex justify-center items-center"><img src={Woman} alt="" className='w-[95px] h-[95px] object-cover rounded-full border-[5px] border-green-300 ' /></div>
            <div className="right w-full sm:w-[80%] flex flex-col justify-between items-center sm:items-start">
                <div className="name-address text-center sm:text-start">
                    <div className="user-name text-xl font-semibold ">Laural Woods</div>
                    <div className="user-address text-black/60 italic mt-2">2479, Blessington, Wexford, Nigeria</div>
                </div>
                <div className="user-contact block sm:flex justify-between w-full">
                    <div className="email flex items-center justify-center sm:justify-start gap-1 "><span><FiMail /></span> Laural.woods@example.com</div>
                    <div className="phone flex items-center justify-center sm:justify-start gap-1"> <span><FiPhone /></span> 112-345-9474</div>
                    <button className='review-btn px-3 sm:px-5  py-3 sm:py-4 shadow-2xl rounded-xl text-white text-xl '><AiOutlineArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default SingleUser