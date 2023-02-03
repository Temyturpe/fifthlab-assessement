import React from "react";
import { FiMail, FiPhone } from 'react-icons/fi'
import { AiOutlineArrowRight } from "react-icons/ai";

const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className='bg-white mb-8 p-4 shadow-2xl flex flex-col sm:flex-row h-auto sm:h-[150px] rounded-xl'
                    >

                        <div className="left rounded-full  w-full sm:w-[20%] flex justify-center items-center"><img src={post.picture.thumbnail} alt="" className='w-[95px] h-[95px] object-cover rounded-full border-[5px] border-green-300 ' /></div>
                        <div className="right w-full sm:w-[80%] flex flex-col justify-between items-center sm:items-start">
                            <div className="name-address text-center sm:text-start">
                                <div className="user-name text-xl font-semibold font-pop ">{post.name.first} {post.name.first}</div>
                                <div className="user-address text-black/60 italic mt-2">{post.location.postcode}, {post.location.city}, {post.location.state}, {post.location.country}</div>
                            </div>
                            <div className="user-contact block sm:flex justify-between w-full">
                                <div className="email flex items-center justify-center sm:justify-start gap-1 "><span><FiMail /></span> {post.email}</div>
                                <div className="phone flex items-center justify-center sm:justify-start gap-1"> <span><FiPhone /></span> {post.phone}</div>
                                <button className='review-btn px-3 sm:px-5  py-3 sm:py-4 shadow-2xl rounded-xl text-white text-xl' type="button"
                                ><AiOutlineArrowRight /></button>

                            </div>
                        </div>
                    </div>
                ))}
            </ul>

        </div>
    );
};

export default Posts;