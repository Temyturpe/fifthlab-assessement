import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import SingleUser from './SingleUser'
import Switch from './Switch'
import '../assests/style.css'

const List = () => {
    const [value, setValue] = useState(false);
    return (
        <div className='w-full listside h-full px-8 pt-20 pb-10 rounded-2xl'>
            <h1 className='text-black/80 capitalize font-semibold text-2xl'>all users</h1>
            <p className='text-sm text-black/80'>Filter by</p>
            <div className="filter-row w-full flex flex-wrap justify-between items-center gap-6 mt-5">
                <div className="filter-search">
                    <form action="">
                        <div className="filter-form flex gap-2 bg-black/10 rounded-full px-2 pl-5 py-4 items-center">
                            <div className="icon"><BiSearch /></div>
                            <input type="text" placeholder='Find in list' className='placeholder:text-black/60 bg-transparent' />
                        </div>
                    </form>
                </div>
                <div className="country bg-black/10 flex justify-between px-5 py-1 rounded-full  w-40">
                    <div className="texts">
                        <h4 className='text-sm'>country</h4>
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
                    <div className="showcountry flex flex-col">show <span>country</span> </div>
                </div>
            </div>
            <div className="singleuser mt-6 flex flex-col gap-8">
                <SingleUser />
                <SingleUser />
                <SingleUser />
            </div>
            <div className="buttons mt-8 w-full flex justify-between items-center">
                <button className="downloadbtn capitalize flex gap-2 text-white text-sm sm:text-lg justify-center items-center px-4 rounded-full py-2"> <span className='text-base sm:text-2xl '> <AiOutlineCloudDownload /></span>download results </button>
                <div className="paginationbtns flex gap-2 items-center">
                    <div className="prevbtn py-2 sm:py-3 px-3 sm:px-4   shadow-2xl bg-gray-300 rounded-xl text-base sm:text-xl flex items-center justify-center"><IoIosArrowBack /></div>
                    <div className="nextbtn text-white py-2 sm:py-3 px-3 sm:px-4  shadow-2xl rounded-xl text-base sm:text-xl flex items-center justify-center"><IoIosArrowForward /></div>
                </div>
            </div>
        </div>
    )
}

export default List