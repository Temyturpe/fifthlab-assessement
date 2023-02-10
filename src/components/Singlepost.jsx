import React, { useState } from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Switch from './Switch'
import '../assests/style.css'

const Singlepost = ({ post }) => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };
    const [value, setValue] = useState(false);
    return (
        <div>
            <div
                key={post.id}
                className='bg-white mb-8 p-4 shadow-2xl flex flex-col sm:flex-row h-auto sm:h-[150px] rounded-xl'
            >

                <div className="left rounded-full  w-full sm:w-[20%] flex justify-center items-center"><img src={post.picture.thumbnail} alt="" className='w-[95px] h-[95px] object-cover rounded-full border-[5px] border-green-300 ' /></div>
                <div className="right w-full sm:w-[80%] flex flex-col justify-between items-center sm:items-start">
                    <div className="name-address text-center sm:text-start">
                        <div className="user-name text-xl font-semibold font-pop ">{post.name.first} {post.name.last}</div>
                        <div className="user-address text-black/60 italic mt-2">{post.location.postcode}, {post.location.city}, {post.location.state}, {post.location.country}</div>
                    </div>
                    <div className="user-contact block sm:flex justify-between w-full">
                        <div className="email flex items-center justify-center sm:justify-start gap-1 "><span><FiMail /></span> {post.email}</div>
                        <div className="phone flex items-center justify-center sm:justify-start gap-1"> <span><FiPhone /></span> {post.phone}</div>
                        <button className='review-btn px-3 sm:px-5  py-3 sm:py-4 shadow-2xl rounded-xl text-white text-xl'
                            onClick={handleClick} ><AiOutlineArrowRight /></button>

                    </div>
                </div>
                {toggle ?
                    <div className="absolute top-0 left-0 bg-white/30 h-full w-full rounded-2xl">
                        <div className='w-full listside h-full px-2 sm:px-8 pt-20 pb-10 rounded-2xl'>
                            <h1 className='text-black/80 capitalize font-pop font-semibold text-2xl'>user list</h1>
                            <p className='text-sm text-black/80'>Filter by</p>
                            <div className="filter-row w-full flex flex-wrap justify-between items-center gap-6 mt-5">
                                <div className="filter-search">
                                    <form action="">
                                        <div className="filter-form flex gap-2 bg-black/10 rounded-full px-2 pl-5 py-2 sm:py-4 items-center">
                                            <div className="icon"><BiSearch /></div>
                                            <input type="text" placeholder='Find in list' className='placeholder:text-black/60 bg-transparent' />
                                        </div>
                                    </form>
                                </div>
                                <div className="country bg-black/10 flex justify-between px-5 py-1 rounded-full  w-40">
                                    <div className="texts">
                                        <h4 className='text-xs sm:text-sm'>country</h4>
                                        <div className="country-select">Nigeria</div>
                                    </div>
                                    <button><IoMdArrowDropdown /></button>
                                </div>
                                <div className="country-switch flex items-end mb-3 gap-2 leading-tight">
                                    <Switch
                                        isOn={value}
                                        onColor="rgb(48, 187, 181)"
                                        handleToggle={() => setValue(!value)}
                                    />
                                    <div className="showcountry flex flex-col text-sm sm:text-base">show <span>country</span> </div>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-col">
                                <button className='flex gap-2 justify-start items-center mb-5 text-lg uppercase' onClick={handleClick} >
                                    <AiOutlineArrowLeft className='text-green-400' /> results
                                </button>
                                <div className="content flex gap-8 justify-center md:flex-row flex-col items-center">
                                    <div className="left"><img src={post.picture.thumbnail} alt="" className='w-44 rounded-full border-[5px] border-green-400' /></div>
                                    <div className="right">
                                        <div className="name-age flex gap-3">
                                            <div className="name text-2xl font-semibold font-pop"> {post.name.title} {post.name.first} {post.name.last}</div>
                                            <div className="age text-2xl">{post.dob.age}</div>
                                        </div>
                                        <div className="address text-lg mt-2">{post.location.postcode}, {post.location.city}, {post.location.state}</div>
                                        <div className="email flex px-3 py-1 bg-gray-300 rounded-full justify-center items-center gap-2 text-lg mt-4"><FiMail className='text-black/40' /> {post.email}</div>
                                        <div className="email flex px-3 py-1 bg-pink-200 rounded-full justify-center items-center gap-2 text-base mt-4">Joined:  {post.registered.date}</div>
                                        <div className="phone flex flex-col gap-2 text-sm mt-4">
                                            <div className="phone1 flex gap-2 items-center"><FiPhone /> {post.phone}</div>
                                            <div className="phone">{post.cell}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <></>
                }
            </div></div>
    )
}

export default Singlepost