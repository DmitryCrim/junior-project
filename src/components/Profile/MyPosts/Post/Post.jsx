import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img  className= 'ava_person' src={require ( "./../../../img/ava_post.jpg")} alt="ava_post"/>
            {/*{ props.message }*/}
            <div>
                <span>like</span>
            </div>


        </div>
     )
}

export default Post
