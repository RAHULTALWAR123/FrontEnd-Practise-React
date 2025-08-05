import { useState } from "react";

export const useGetPosts = () => {
    const [posts, setPosts] = useState([]);


    const getPosts = async() => {
        const res  = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        console.log(data.posts);
        setPosts(data.posts);
    }

    return {posts,getPosts};
}