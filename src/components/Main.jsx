import React from 'react'
import Search from './Search'
import List from './List'

const Main = () => {
    return (
        <div className='px-5 md:px-10 py-24 mx-auto md:flex'>
            <div className="left w-full md:w-[45%]"><Search /></div>
            <div className="right w-full md:w-[55%]"><List /></div>
        </div>
    )
}

export default Main