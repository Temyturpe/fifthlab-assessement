import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa'
import '../assests/style.css'

const Search = () => {
    return (
        <div className='w-full  sm:mt-10 sm:mb-32 mb-10 md:mb-0 md:mt-32 sm:px-32 md:pl-16'>
            <h1 className='text-3xl text-white/80 mb-5'> Hello, <span className='text-white font-semibold'>Emerald</span> </h1>
            <p className='text-sm text-white/80 mb-4'>Welcome to your dashboard, kindly sort through the user base</p>
            <form action="" className=''>
                <div className="search-input bg-white/40 flex items-center gap-3 px-4 py-3 rounded-xl ">
                    <div className="icon text-black/25 text-xl"><BiSearch /></div>
                    <input type="text" placeholder='Find a user' className='bg-transparent text-xl placeholder:text-black/25 focus:outline-none focus:border-none' /></div>
            </form>
            <div className="show mt-12 text-white">
                <p className='mb-5'>show users</p>
                <div className="categories capitalize  grid grid-cols-3 gap-20 w-full">
                    <div className="allusers w-full flex-col flex justify-center items-center gap-3 ">
                        <div className="iconbox w-full all flex justify-center items-center py-6 rounded-2xl text-3xl"><FaUsers /></div>
                        <div className="text-white/40 text-sm">all users</div>
                    </div>
                    <div className="maleusers  w-full flex-col flex justify-center items-center gap-3 ">
                        <div className="iconbox w-full males flex justify-center items-center py-6 rounded-2xl text-3xl"><FaMale /></div>
                        <div className="text-white/40 text-sm">male users</div>
                    </div>
                    <div className="femaleusers  w-full flex-col flex justify-center items-center gap-3 ">
                        <div className="iconbox w-full females flex justify-center items-center py-6 rounded-2xl text-3xl"><FaFemale /></div>
                        <div className="text-white/40 text-sm">female users</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search