import React, { useState } from "react";
import Singlepost from "./Singlepost";
const Posts = ({ posts, loading }) => {


    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <div>
                {posts.map((post) => {
                    return <Singlepost post={post} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default Posts;