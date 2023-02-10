import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Posts from "./Posts";

const Compile = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://randomuser.me/api/?results=50");
            setPosts(res.data.results);
            setLoading(false);
        };

        fetchPosts();
    }, []);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    return (
        <div>

            <Posts posts={currentPosts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />

        </div>
    );

};

export default Compile;