import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiOutlineCloudDownload } from 'react-icons/ai'

export default function Pagination({
    paginateFront,
    paginateBack,
}) {


    return (
        <div className='py-2'>
            <div className="buttons mt-8 w-full flex justify-between items-center">
                <button className="downloadbtn capitalize flex gap-2 text-white text-sm sm:text-lg justify-center items-center px-4 rounded-full py-2"> <span className='text-base sm:text-2xl '> <AiOutlineCloudDownload /></span>download results </button>
                <div className="paginationbtns flex gap-2 items-center">
                    <a
                        onClick={() => {
                            paginateBack();
                        }}
                        href='#'
                    >
                        <div className="prevbtn py-2 sm:py-3 px-3 sm:px-4   shadow-2xl bg-gray-300 rounded-xl text-base sm:text-xl flex items-center justify-center"><IoIosArrowBack /></div>
                    </a>
                    <a
                        onClick={() => {
                            paginateFront();
                        }}
                        href='#'
                    >
                        <div className="nextbtn text-white py-2 sm:py-3 px-3 sm:px-4  shadow-2xl rounded-xl text-base sm:text-xl flex items-center justify-center"><IoIosArrowForward /></div>
                    </a>
                </div>
            </div>
        </div>
    );
}