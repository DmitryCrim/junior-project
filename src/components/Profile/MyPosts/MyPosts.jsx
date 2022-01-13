import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div> My Posts
            <div>
                <textarea placeholder='Input your post'></textarea>
                <button>Add post</button>

            </div>
            <div>
                <div className={s.posts}>
                    <Post message = 'Hello, glad to see you' likesCount = '15'/>
                    <Post message = "Best props" likesCount = '23'/>
                </div>
            </div>
        </div>

    )
}

export default MyPosts
